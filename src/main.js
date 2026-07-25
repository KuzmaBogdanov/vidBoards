const { app, BrowserWindow, ipcMain, dialog, shell, Menu, clipboard } = require('electron');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');
const path = require('path');
const fs = require('fs');
const os = require('os');

log.transports.file.level = 'info';
autoUpdater.logger = log;
autoUpdater.disableWebInstaller = true;

let mainWindow;
let PROJECTS_DIR, TRASH_DIR;
let quittingForUpdate = false;

// macOS: keep a minimal menu so system shortcuts (Cmd+C/V/Q etc.) work
if (process.platform === 'darwin') {
  Menu.setApplicationMenu(Menu.buildFromTemplate([
    { label: app.name, submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' }, { role: 'hideOthers' }, { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]},
    { label: 'Edit', submenu: [
      { role: 'undo' }, { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' }, { role: 'copy' }, { role: 'paste' },
      { role: 'selectAll' }
    ]}
  ]));
} else {
  Menu.setApplicationMenu(null);
}

// Cross-platform icon
const ICON_PATH = process.platform === 'darwin'
  ? path.join(__dirname, '..', 'assets', 'icon.icns')
  : process.platform === 'win32'
    ? path.join(__dirname, '..', 'assets', 'icon.ico')
    : path.join(__dirname, '..', 'assets', 'icon.png');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    frame: true,
    titleBarStyle: 'default',
    title: 'VidBoards',
    icon: fs.existsSync(ICON_PATH) ? ICON_PATH : path.join(__dirname, '..', 'assets', 'icon.png'),
    backgroundColor: '#141414',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false
    },
    show: false
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    if(app.isPackaged) {
      autoUpdater.autoDownload = false;
      autoUpdater.autoInstallOnAppQuit = false;
      autoUpdater.on('update-available', info => {
        mainWindow.webContents.send('update-available', info.version);
      });
      autoUpdater.on('update-downloaded', () => {
        mainWindow.webContents.send('update-downloaded');
      });
      autoUpdater.on('download-progress', info => {
        mainWindow.webContents.send('update-progress', Math.round(info.percent));
      });
      autoUpdater.on('error', (err) => {
        log.error('autoUpdater error:', err);
        mainWindow.webContents.send('update-error', err ? err.message : 'unknown');
      });
      setTimeout(() => autoUpdater.checkForUpdates().catch(() => {}), 5000);
    }
  });
  mainWindow.on('close', e => {
    if (quittingForUpdate) return;
    e.preventDefault();
    mainWindow.webContents.send('app-close-requested');
  });

  // F12 — ручной тоггл DevTools (меню приложения отключено на Win/Linux, штатный акселератор не работает)
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F12') {
      mainWindow.webContents.toggleDevTools();
    }
  });
}

app.whenReady().then(() => {
  // Use app.getPath('documents') — works correctly on Win/Mac/Linux
  PROJECTS_DIR = path.join(app.getPath('documents'), 'VidBoards');
  TRASH_DIR    = path.join(PROJECTS_DIR, '.trash');
  if (!fs.existsSync(PROJECTS_DIR)) fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  if (!fs.existsSync(TRASH_DIR))    fs.mkdirSync(TRASH_DIR,    { recursive: true });
  cleanupTrash();
  createWindow();
});

// Проекты в корзине старше 30 дней удаляются навсегда (обещание из UI)
function cleanupTrash() {
  try {
    fs.readdirSync(TRASH_DIR).filter(f => f.endsWith('.meta')).forEach(mf => {
      const metaPath = path.join(TRASH_DIR, mf);
      try {
        const m = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        const age = Date.now() - new Date(m.deletedAt).getTime();
        if (isFinite(age) && age > 30 * 86400000) {
          const vdb = metaPath.replace(/\.meta$/, '');
          if (fs.existsSync(vdb)) fs.unlinkSync(vdb);
          fs.unlinkSync(metaPath);
        }
      } catch {}
    });
  } catch {}
}

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
// macOS: re-open window when dock icon is clicked and no windows are open
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// ── ОКНО ──────────────────────────────────────────────────────────
ipcMain.on('win-close',      () => mainWindow.close());
ipcMain.on('win-force-close',() => mainWindow.destroy());

// ── ФАЙЛЫ ─────────────────────────────────────────────────────────
ipcMain.handle('open-files', async () => {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Добавить файлы',
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'Медиафайлы', extensions: ['mp4','mov','webm','avi','mkv','png','jpg','jpeg','gif','webp','avif','svg','bmp'] },
      { name: 'Видео',      extensions: ['mp4','mov','webm','avi','mkv'] },
      { name: 'Изображения',extensions: ['png','jpg','jpeg','gif','webp','avif','svg','bmp'] }
    ]
  });
  return r.canceled ? [] : r.filePaths;
});

ipcMain.handle('open-folder', async () => {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Открыть папку с медиафайлами',
    properties: ['openDirectory']
  });
  if (r.canceled) return [];
  const dir = r.filePaths[0];
  const rx = /\.(mp4|mov|webm|avi|mkv|png|jpg|jpeg|gif|webp|avif|svg|bmp)$/i;
  return fs.readdirSync(dir).filter(f => rx.test(f)).map(f => path.join(dir, f));
});

ipcMain.handle('show-in-explorer', (_, p) => {
  if (fs.existsSync(p)) shell.showItemInFolder(p);
  else shell.openPath(PROJECTS_DIR);
});

ipcMain.handle('save-file-as', async (_, src) => {
  const ext = path.extname(src).replace('.', '');
  const r = await dialog.showSaveDialog(mainWindow, {
    title: 'Сохранить как',
    defaultPath: path.join(os.homedir(), 'Desktop', path.basename(src)),
    filters: [{ name: 'Файл', extensions: [ext] }]
  });
  if (r.canceled) return null;
  try { fs.copyFileSync(src, r.filePath); return r.filePath; }
  catch (e) { log.error('save-file-as failed:', e); return null; }
});

ipcMain.handle('pick-source', async () => {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Выбрать новый исходник',
    properties: ['openFile'],
    filters: [{ name: 'Медиафайлы', extensions: ['mp4','mov','webm','avi','mkv','png','jpg','jpeg','gif','webp','avif','bmp'] }]
  });
  return r.canceled ? null : r.filePaths[0];
});

ipcMain.handle('file-exists', (_, p) => fs.existsSync(p));
ipcMain.handle('trash-file', async (_, p) => {
  try { await shell.trashItem(p); return true; }
  catch { return false; }
});
ipcMain.handle('file-info', (_, p) => {
  try { const s = fs.statSync(p); return { size: s.size, exists: true }; }
  catch { return { size: 0, exists: false }; }
});

// ── ПРОЕКТЫ ───────────────────────────────────────────────────────
ipcMain.handle('list-projects', async () => {
  let files = [];
  try { files = await fs.promises.readdir(PROJECTS_DIR); } catch { return []; }
  const projects = await Promise.all(files.filter(f => f.endsWith('.vdb')).map(async f => {
    const fp = path.join(PROJECTS_DIR, f);
    try {
      const [stat, buf] = await Promise.all([
        fs.promises.stat(fp),
        fs.promises.readFile(fp, 'utf8')
      ]);
      const thumbPath = fp.replace(/\.vdb$/, '.thumb.jpg');
      let thumbnail = null;
      try {
        const tb = await fs.promises.readFile(thumbPath);
        thumbnail = 'data:image/jpeg;base64,' + tb.toString('base64');
      } catch {}
      let d = {};
      try { d = JSON.parse(buf); } catch {}
      return {
        path: fp,
        name: d.name || f.replace('.vdb',''),
        modified: stat.mtime.toISOString(),
        fileCount: (d.files||[]).length,
        videoCount: (d.files||[]).filter(x=>x.type==='v').length,
        thumbnail
      };
    } catch { return null; }
  }));
  return projects.filter(Boolean).sort((a,b) => new Date(b.modified)-new Date(a.modified));
});

ipcMain.handle('get-projects-meta', async (_, paths) => {
  return Promise.all(paths.map(async fp => {
    try {
      await fs.promises.access(fp);
      const [stat, buf] = await Promise.all([
        fs.promises.stat(fp),
        fs.promises.readFile(fp, 'utf8')
      ]);
      const d = JSON.parse(buf);
      const thumbPath = fp.replace(/\.vdb$/, '.thumb.jpg');
      let thumbnail = null;
      try {
        const tb = await fs.promises.readFile(thumbPath);
        thumbnail = 'data:image/jpeg;base64,' + tb.toString('base64');
      } catch {}
      return {
        path: fp,
        name: d.name || path.basename(fp, '.vdb'),
        modified: stat.mtime.toISOString(),
        fileCount: (d.files||[]).length,
        videoCount: (d.files||[]).filter(f => f.type==='v').length,
        thumbnail
      };
    } catch(e) { return e.code === 'ENOENT' ? null : { path: fp, error: true }; }
  }));
});

ipcMain.handle('save-thumb', (_, vdbPath, dataUrl) => {
  try {
    const base64 = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(vdbPath.replace(/\.vdb$/, '.thumb.jpg'), Buffer.from(base64, 'base64'));
    return true;
  } catch { return false; }
});

ipcMain.handle('new-project-in-folder', (_, name, folder) => {
  try {
    const targetDir = folder || PROJECTS_DIR;
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const safe = name.replace(/[<>:"/\\|?*]/g, '_');
    const fp = path.join(targetDir, safe + '.vdb');
    const data = { name, files:[], labels:[], canvasX:0, canvasY:0, zoom:1, created: new Date().toISOString() };
    fs.writeFileSync(fp, JSON.stringify(data, null, 2));
    return fp;
  } catch(e) { console.error(e); return null; }
});

ipcMain.handle('save-project', (_, fp, data) => {
  try {
    fs.writeFileSync(fp, JSON.stringify(data, null, 2));
    return true;
  } catch (e) {
    log.error('save-project failed:', e);
    return false;
  }
});

ipcMain.handle('open-project', async (_, fp) => {
  let target = fp;
  if (!target) {
    const r = await dialog.showOpenDialog(mainWindow, {
      title: 'Открыть проект VidBoards',
      defaultPath: PROJECTS_DIR,
      filters: [{ name: 'VidBoards проект', extensions: ['vdb'] }],
      properties: ['openFile']
    });
    if (r.canceled) return null;
    target = r.filePaths[0];
  }
  try {
    const d = JSON.parse(fs.readFileSync(target, 'utf8'));
    d._path = target;
    if (!d.labels) d.labels = [];
    return d;
  } catch { return null; }
});

ipcMain.handle('rename-project', (_, oldPath, newName) => {
  try {
    const d = JSON.parse(fs.readFileSync(oldPath, 'utf8'));
    d.name = newName;
    const safe = newName.replace(/[<>:"/\\|?*]/g,'_');
    const newPath = path.join(path.dirname(oldPath), safe+'.vdb');
    // На Windows пути регистронезависимы: смена только регистра — это тот же файл
    const samePath = process.platform === 'win32'
      ? newPath.toLowerCase() === oldPath.toLowerCase()
      : newPath === oldPath;
    if (!samePath && fs.existsSync(newPath)) return null;
    fs.writeFileSync(newPath, JSON.stringify(d, null, 2));
    if (!samePath) {
      fs.unlinkSync(oldPath);
      const oldThumb = oldPath.replace(/\.vdb$/, '.thumb.jpg');
      if (fs.existsSync(oldThumb)) {
        try { fs.renameSync(oldThumb, newPath.replace(/\.vdb$/, '.thumb.jpg')); } catch {}
      }
    }
    return newPath;
  } catch { return null; }
});

ipcMain.handle('trash-project', (_, fp) => {
  try {
    const name = path.basename(fp);
    const dest = path.join(TRASH_DIR, name);
    fs.writeFileSync(dest+'.meta', JSON.stringify({ originalPath:fp, deletedAt: new Date().toISOString() }));
    try { fs.renameSync(fp, dest); } catch { fs.copyFileSync(fp, dest); fs.unlinkSync(fp); }
    const thumbSrc = fp.replace(/\.vdb$/, '.thumb.jpg');
    if (fs.existsSync(thumbSrc)) fs.unlinkSync(thumbSrc);
    return true;
  } catch { return false; }
});

ipcMain.handle('list-trash', () => {
  return fs.readdirSync(TRASH_DIR)
    .filter(f => f.endsWith('.vdb'))
    .map(f => {
      const fp = path.join(TRASH_DIR, f);
      let deletedAt = null, daysLeft = 30;
      try {
        const m = JSON.parse(fs.readFileSync(fp+'.meta','utf8'));
        deletedAt = m.deletedAt;
        daysLeft = Math.max(0, 30 - Math.floor((Date.now()-new Date(deletedAt).getTime())/86400000));
      } catch {}
      try {
        const d = JSON.parse(fs.readFileSync(fp,'utf8'));
        return { path:fp, name:d.name||f.replace('.vdb',''), deletedAt, daysLeft };
      } catch { return { path:fp, name:f.replace('.vdb',''), deletedAt, daysLeft }; }
    });
});

ipcMain.handle('restore-project', (_, fp) => {
  try {
    const dest = path.join(PROJECTS_DIR, path.basename(fp));
    try { fs.renameSync(fp, dest); } catch { fs.copyFileSync(fp, dest); fs.unlinkSync(fp); }
    const meta = fp+'.meta';
    if (fs.existsSync(meta)) fs.unlinkSync(meta);
    return true;
  } catch { return false; }
});

ipcMain.handle('pick-folder', async () => {
  const r = await dialog.showOpenDialog(mainWindow, {
    title: 'Выбрать папку для проекта',
    properties: ['openDirectory']
  });
  return r.canceled ? null : r.filePaths[0];
});

ipcMain.handle('get-default-projects-dir', () => PROJECTS_DIR);

// ── НАСТРОЙКИ / СИСТЕМА ───────────────────────────────────────────
const SETTINGS_PATH = path.join(app.getPath('userData'), 'settings.json');

ipcMain.handle('load-settings', () => {
  try { return JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8')); }
  catch { return {}; }
});

ipcMain.handle('save-settings', (_, s) => {
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(s, null, 2));
  return true;
});

ipcMain.handle('get-locale',      () => app.getLocale());
ipcMain.handle('open-url',        (_, url) => shell.openExternal(url));
ipcMain.handle('get-desktop-dir', () => app.getPath('desktop'));
ipcMain.handle('download-update', () => autoUpdater.downloadUpdate().catch(err => {
  mainWindow.webContents.send('update-error', err ? err.message : 'download failed');
}));
ipcMain.handle('quit-and-install', () => { quittingForUpdate = true; autoUpdater.quitAndInstall(false, true); });

ipcMain.handle('paste-clipboard-image', () => {
  try {
    const img = clipboard.readImage();
    if(img.isEmpty()) return null;
    const dir = path.join(PROJECTS_DIR, 'pasted');
    if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, `paste_${Date.now()}.png`);
    fs.writeFileSync(filePath, img.toPNG());
    return filePath;
  } catch { return null; }
});

ipcMain.handle('save-png', (_, dataUrl, name, folder) => {
  try {
    const safe = path.basename(String(name || 'canvas')).replace(/[<>:"/\\|?*]/g, '_') || 'canvas';
    const filePath = path.join(folder || app.getPath('desktop'), safe + '.png');
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(filePath, Buffer.from(base64, 'base64'));
    return filePath;
  } catch { return null; }
});

// ── МЕТАДАННЫЕ ────────────────────────────────────────────────────
function parsePngMeta(buf) {
  const meta = {};
  const sig = [0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A];
  for (let i = 0; i < 8; i++) if (buf[i] !== sig[i]) return meta;
  let off = 8;
  while (off + 12 <= buf.length) {
    const len = buf.readUInt32BE(off);
    if (off + 12 + len > buf.length) break;
    const type = buf.slice(off+4, off+8).toString('ascii');
    const data = buf.slice(off+8, off+8+len);
    if (type === 'tEXt') {
      const ni = data.indexOf(0);
      if (ni > 0) {
        const key = data.slice(0, ni).toString('ascii').trim();
        const val = data.slice(ni+1).toString('latin1');
        if (key) meta[key] = val;
      }
    } else if (type === 'iTXt') {
      const ni = data.indexOf(0);
      if (ni > 0) {
        const key = data.slice(0, ni).toString('ascii').trim();
        let pos = ni + 3; // null + comp_flag + comp_method
        while (pos < data.length && data[pos] !== 0) pos++; pos++; // lang tag
        while (pos < data.length && data[pos] !== 0) pos++; pos++; // xlated keyword
        if (key && pos < data.length) meta[key] = data.slice(pos).toString('utf8');
      }
    } else if (type === 'IEND') break;
    off += 12 + len;
  }
  return meta;
}

function parseJpegMeta(buf) {
  const meta = {};
  if (buf.length < 3 || buf[0] !== 0xFF || buf[1] !== 0xD8) return meta;
  let off = 2;
  while (off + 4 <= buf.length) {
    if (buf[off] !== 0xFF) break;
    const marker = buf[off+1];
    if (marker === 0xD9 || marker === 0xDA) break;
    const segLen = buf.readUInt16BE(off+2);
    if (segLen < 2 || off + 2 + segLen > buf.length) break;
    const seg = buf.slice(off+4, off+2+segLen);
    if (marker === 0xFE) { // Comment
      const c = seg.toString('utf8').trim();
      if (c) meta['Comment'] = c;
    }
    if (marker === 0xE1) { // APP1: XMP or EXIF
      const xmpHdr = 'http://ns.adobe.com/xap/1.0/\0';
      if (seg.length > xmpHdr.length && seg.slice(0, xmpHdr.length).toString('ascii') === xmpHdr) {
        const xmp = seg.slice(xmpHdr.length).toString('utf8');
        const dm = xmp.match(/<dc:description[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/i);
        if (dm) meta['Description'] = dm[1].replace(/<[^>]+>/g,'').trim();
        const um = xmp.match(/<exif:UserComment[^>]*>([\s\S]*?)<\/exif:UserComment>/i);
        if (um) meta['UserComment'] = um[1].replace(/<[^>]+>/g,'').trim();
        if (!dm && !um) {
          const s = xmp.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
          if (s.length > 5) meta['XMP'] = s.slice(0, 3000);
        }
      }
      // EXIF: look for A1111 parameters in UserComment (ASCII prefix)
      if (seg.slice(0,6).toString('ascii') === 'Exif\0\0') {
        const raw = seg.toString('latin1');
        const ai = raw.indexOf('ASCII\0\0\0');
        if (ai >= 0) {
          const txt = seg.slice(ai+8).toString('utf8').replace(/\0/g,'').trim();
          if (txt.length > 3) meta['parameters'] = txt;
        }
      }
    }
    off += 2 + segLen;
  }
  return meta;
}

function parseWebpMeta(buf) {
  const meta = {};
  if (buf.length < 12) return meta;
  if (buf.slice(0,4).toString('ascii') !== 'RIFF') return meta;
  if (buf.slice(8,12).toString('ascii') !== 'WEBP') return meta;
  let off = 12;
  while (off + 8 <= buf.length) {
    const id = buf.slice(off, off+4).toString('ascii');
    const size = buf.readUInt32LE(off+4);
    if (id === 'XMP ') {
      const xmp = buf.slice(off+8, off+8+size).toString('utf8');
      const dm = xmp.match(/<dc:description[\s\S]*?<rdf:li[^>]*>([\s\S]*?)<\/rdf:li>/i);
      if (dm) meta['Description'] = dm[1].replace(/<[^>]+>/g,'').trim();
      else {
        const s = xmp.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
        if (s.length > 5) meta['XMP'] = s.slice(0, 3000);
      }
    }
    off += 8 + size + (size % 2);
  }
  return meta;
}

// Поиск JSON с промптами ComfyUI в бинарном буфере
function searchJsonInBuf(buf) {
  const str = buf.toString('latin1');
  const KEYS = ['"prompt":', '"workflow":', '"positive_prompt":', '"negative_prompt":', '"PromptN":', '"PromptP":'];
  for (const pat of KEYS) {
    const idx = str.indexOf(pat);
    if (idx < 0) continue;
    let js = idx;
    while (js > 0 && str[js] !== '{') js--;
    for (let len = 1000; js + len <= str.length; len = Math.min(len * 2, str.length - js)) {
      try {
        const cand = str.slice(js, js + len);
        const parsed = JSON.parse(cand);
        if (parsed && typeof parsed === 'object') return JSON.stringify(parsed, null, 2);
      } catch {}
      if (len >= str.length - js) break;
    }
  }
  return null;
}

// MP4 / MOV — парсинг атомов iTunes + QuickTime
function parseMp4Meta(buf) {
  const meta = {};

  function getDataText(atomBuf) {
    // iTunes: ищем дочерний атом 'data' (4 size + 4 type + 4 version/flags + 4 locale + text)
    let off = 0;
    while (off + 8 <= atomBuf.length) {
      const sz = atomBuf.readUInt32BE(off);
      const tp = atomBuf.slice(off+4, off+8).toString('ascii');
      if (tp === 'data' && sz >= 16 && off+sz <= atomBuf.length) {
        return atomBuf.slice(off+16, off+sz).toString('utf8').replace(/\0/g,'').trim();
      }
      if (sz <= 0 || off+sz > atomBuf.length) break;
      off += sz;
    }
    // QuickTime udta style: 2-byte text length, 2-byte language, text
    if (atomBuf.length > 4) {
      const qlen = atomBuf.readUInt16BE(0);
      if (qlen > 0 && qlen + 4 <= atomBuf.length)
        return atomBuf.slice(4, 4+qlen).toString('utf8').replace(/\0/g,'').trim();
    }
    return null;
  }

  const LABELS = {
    '\xa9cmt':'Comment', '\xa9nam':'Title', '\xa9des':'Description',
    '\xa9inf':'Info',    '\xa9too':'Software', '\xa9aut':'Author',
    'desc':'Description', 'ldes':'Long Description', 'cprt':'Copyright',
  };

  function walk(start, end, depth) {
    if (depth > 10 || start >= end) return;
    let off = start;
    while (off + 8 <= end) {
      let sz, hSz = 8;
      try { sz = buf.readUInt32BE(off); } catch { break; }
      const type = buf.slice(off+4, off+8).toString('latin1');
      if (sz === 1) {
        if (off + 16 > end) break;
        try { sz = Number(buf.readBigUInt64BE(off+8)); } catch { sz = end - off; }
        hSz = 16;
      } else if (sz === 0) { sz = end - off; }
      if (sz < hSz || sz > end - off + 8) { off += 8; continue; }
      const cEnd = Math.min(off + sz, end);

      if (['moov','udta','trak','mdia','minf','stbl','edts','ilst'].includes(type))
        walk(off+hSz, cEnd, depth+1);
      else if (type === 'meta' && off+hSz+4 <= cEnd)
        walk(off+hSz+4, cEnd, depth+1); // meta имеет 4 байта version/flags

      const label = LABELS[type];
      if (label && !meta[label]) {
        const text = getDataText(buf.slice(off+hSz, cEnd));
        if (text) {
          try { meta[label] = JSON.stringify(JSON.parse(text), null, 2); }
          catch { meta[label] = text; }
        }
      }
      off += sz;
    }
  }

  try { walk(0, buf.length, 0); } catch {}

  // Фолбэк: поиск JSON ComfyUI в байтах файла
  if (!Object.keys(meta).length) {
    const json = searchJsonInBuf(buf);
    if (json) meta['workflow'] = json;
  }
  return meta;
}

// MKV / WebM — поиск JSON ComfyUI в бинаре (EBML слишком сложен без lib)
function parseMkvMeta(buf) {
  const meta = {};
  const json = searchJsonInBuf(buf);
  if (json) meta['workflow'] = json;
  return meta;
}

// Читаем нужный кусок файла
function readFileBuf(filePath, maxBytes) {
  const stat = fs.statSync(filePath);
  const size = Math.min(stat.size, maxBytes);
  const fd = fs.openSync(filePath, 'r');
  const buf = Buffer.alloc(size);
  fs.readSync(fd, buf, 0, size, 0);
  fs.closeSync(fd);
  return buf;
}

ipcMain.handle('read-metadata', (_, filePath) => {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.png')                     return parsePngMeta(readFileBuf(filePath, 30*1024*1024));
    if (ext === '.jpg' || ext === '.jpeg')  return parseJpegMeta(readFileBuf(filePath, 20*1024*1024));
    if (ext === '.webp')                    return parseWebpMeta(readFileBuf(filePath, 20*1024*1024));
    if (['.mp4','.mov','.m4v'].includes(ext)) return parseMp4Meta(readFileBuf(filePath, 30*1024*1024));
    if (['.mkv','.webm','.avi'].includes(ext)) return parseMkvMeta(readFileBuf(filePath, 10*1024*1024));
    return {};
  } catch { return {}; }
});
