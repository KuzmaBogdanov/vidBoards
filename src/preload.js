const { contextBridge, ipcRenderer, webUtils } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Окно
  minimize:   () => ipcRenderer.send('win-minimize'),
  maximize:   () => ipcRenderer.send('win-maximize'),
  close:      () => ipcRenderer.send('win-close'),
  forceClose: () => ipcRenderer.send('win-force-close'),

  // Файлы
  openFiles:      ()    => ipcRenderer.invoke('open-files'),
  openFolder:     ()    => ipcRenderer.invoke('open-folder'),
  showInExplorer: (p)   => ipcRenderer.invoke('show-in-explorer', p),
  saveFileAs:     (p)   => ipcRenderer.invoke('save-file-as', p),
  pickSource:     ()    => ipcRenderer.invoke('pick-source'),
  fileExists:     (p)   => ipcRenderer.invoke('file-exists', p),
  fileInfo:       (p)   => ipcRenderer.invoke('file-info', p),
  readMeta:       (p)   => ipcRenderer.invoke('read-metadata', p),

  // ВАЖНО: получить путь перетащенного файла (Electron 28+)
  getPathForFile: (file) => {
    try { return webUtils.getPathForFile(file); }
    catch { return file.path || ''; }
  },

  // Проекты
  listProjects:          ()          => ipcRenderer.invoke('list-projects'),
  getProjectsMeta:       (paths)     => ipcRenderer.invoke('get-projects-meta', paths),
  newProject:            (name)      => ipcRenderer.invoke('new-project', name),
  newProjectInFolder:    (name, dir) => ipcRenderer.invoke('new-project-in-folder', name, dir),
  saveProject:           (fp, data)  => ipcRenderer.invoke('save-project', fp, data),
  openProject:           (fp)        => ipcRenderer.invoke('open-project', fp),
  renameProject:         (fp, name)  => ipcRenderer.invoke('rename-project', fp, name),
  trashProject:          (fp)        => ipcRenderer.invoke('trash-project', fp),
  listTrash:             ()          => ipcRenderer.invoke('list-trash'),
  restoreProject:        (fp)        => ipcRenderer.invoke('restore-project', fp),
  emptyTrash:            ()          => ipcRenderer.invoke('empty-trash'),
  pickFolder:            ()          => ipcRenderer.invoke('pick-folder'),
  getDefaultProjectsDir: ()          => ipcRenderer.invoke('get-default-projects-dir'),
  getDesktopDir:         ()          => ipcRenderer.invoke('get-desktop-dir'),
  savePng:   (dataUrl, name, folder) => ipcRenderer.invoke('save-png', dataUrl, name, folder),
  pasteClipboardImage: () => ipcRenderer.invoke('paste-clipboard-image'),
  saveThumb: (vdbPath, dataUrl)      => ipcRenderer.invoke('save-thumb', vdbPath, dataUrl),

  // Система
  getLocale:    ()    => ipcRenderer.invoke('get-locale'),
  openUrl:      (url) => ipcRenderer.invoke('open-url', url),
  loadSettings: ()    => ipcRenderer.invoke('load-settings'),
  saveSettings: (s)   => ipcRenderer.invoke('save-settings', s),

  downloadUpdate:  () => ipcRenderer.invoke('download-update'),
  quitAndInstall:  () => ipcRenderer.invoke('quit-and-install'),
  on: (channel, fn) => ipcRenderer.on(channel, (_, ...args) => fn(...args)),
});
