// ═══════════════════════════════════════════════════════════════════
//  VidBoards — renderer.js  v1.2.0
// ═══════════════════════════════════════════════════════════════════

const T = {
  ru: {
    home:'Главная', new_project:'Новый проект', open_file:'Открыть файл...',
    navigation:'Навигация', recent:'Недавние', all_projects:'Все проекты',
    trash:'Корзина', settings:'Настройки', appearance:'Внешний вид',
    theme:'Тема', dark:'Тёмная', light:'Светлая',
    seq_img_dur:'Время показа картинки в Sequence Mode', seq_img_dur_sub:'секунд (от 1 до 60)', seq_img_dur_sec:'сек',
    language:'Язык', lang_auto:'Определён автоматически', auto:'авто',
    about:'О программе', developer:'Разработчик',
    changelog:'Список изменений', support:'Поддержка',
    support_dev:'Поддержать разработку',
    donation_title:'VidBoards — полностью бесплатен',
    donation_desc:'Без рекламы и подписок. Если приложение помогает — поддержи разработчика донатом.',
    donate_btn:'Поддержать донатом',
    folder:'Папка', files:'Файлы', play_all:'Play', pause_all:'Pause', stop_all:'Stop',
    snap_on:'Snap вкл', snap_off:'Snap выкл',
    filter:'Фильтр:', no_filter:'Без фильтра',
    rename:'Переименовать', save_as:'Сохранить как', show_in_folder:'Показать в папке',
    deactivate:'Деактивировать', activate:'Активировать',
    align_row:'В ряд', align_col:'В колонку', last_frame:'посл. кадр',
    delete:'Удалить', restore:'Восстановить', move_to_trash:'В корзину',
    pick_source:'Указать исходник', file_missing:'Файл не найден',
    create:'Создать', cancel:'Отмена', save:'Сохранить',
    proj_name:'Название проекта', save_folder:'Папка',
    confirm_delete:'Удалить проект?',
    confirm_delete_sub:'Проект будет перемещён в корзину. Удалится через 30 дней.',
    trash_empty:'Корзина пуста', trash_empty_sub:'Удалённые проекты появятся здесь',
    days:'дней', files_lbl:'файлов', videos_lbl:'видео',
    color_label:'Метка:',
    colors:['Нет','Зелёный','Синий','Красный','Жёлтый','Оранжевый','Фиолетовый'],
    proj_size:'Размер проекта:',
    undo:'Отменить', redo:'Повторить',
    hint_play:'Перезапускаю видео с начала', hint_resume:'Продолжаю с места паузы',
    hint_disabled:'Деактивировано', hint_enabled:'Активировано',
    hint_deleted:'Удалено', hint_restored:'Восстановлено',
    hint_snap_on:'Snap включён', hint_snap_off:'Snap выключен',
    today:'Сегодня', yesterday:'Вчера',
    recent_projects:'Недавние проекты', all_projects_title:'Все проекты',
    trash_title:'Корзина', projects:'Проекты', recent_files:'Недавние файлы',
    new_proj_placeholder:'Мой проект',
    terms:'Условия', privacy:'Конфиденциальность',
    save_proj:'Сохранить проект', add_label:'Надпись', add_sticky:'Стикер',
    save_short:'Сохр.', map_btn:'Карта', close:'Закрыть',
    opt_title:'Только видимые на экране',
    search_ph:'Поиск…', search_prev_title:'Назад (Shift+Enter)', search_next_title:'Вперёд (Enter)',
    loop_on:'Loop включён', loop_off:'Loop выключен',
    opt_on:'Opt вкл — только видимые', opt_off:'Opt выкл — все видео',
    timeline_on:'Timeline включён', timeline_off:'Timeline выключен',
    hint_no_project:'Открой проект чтобы добавить файлы',
    hint_added:'Добавлено',
    disabled_card:'деактивировано',
    browse:'Обзор...',
    rendering:'Рендеринг…', nothing_export:'Нет элементов на канвасе',
    hint_saved:'Сохранено: ', save_error:'Ошибка сохранения',
    shape_lbl:'Форма:', shape_square:'Квадрат', shape_rect:'Прямоуг.',
    color_pick:'Цвет:', search_no_results:'0 совп.',
    png_save:'Сохранить',
    save_png:'Сохранить как PNG', save_png_scale:'Масштаб',
    meta_data:'Мета данные', meta_no_data:'Метаданных нет',
    meta_copy:'Скопировать', meta_copied:'Скопировано!', meta_copy_seed:'Копировать seed',
    save_changes:'Сохранить изменения?',
    unsaved_lost:'Несохранённые изменения будут потеряны.',
    yes_save:'Да, сохранить', no_close:'Нет, закрыть',
    unsaved_app:'Закрыть приложение?',
    unsaved_app_sub:'В открытых проектах есть несохранённые изменения.',
    proj_name_taken:'Проект с таким именем уже существует. Придумайте другое название.',
    thumb_mode:'Превью проекта', thumb_board:'Вся доска', thumb_center:'Центр содержимого', thumb_viewport:'Текущий вид',
    thumb_board_sub:'Все карточки целиком', thumb_center_sub:'Область вокруг центра карточек', thumb_viewport_sub:'То что видно на экране в момент сохранения',
    dev_name:'Kuzma Bogdanov',
    app_desc:'Бесплатный инструмент для просмотра и сравнения видео и изображений на свободном холсте.',
    copyright:'© 2026 Kuzma Bogdanov',
    manual:'Руководство',
    grid_style:'Сетка канваса', grid_dots:'Точки', grid_lines:'Линии', grid_cross:'Кресты', grid_chess:'Шахматы', grid_none:'Нет',
    zoom_speed:'Скорость зума', zoom_speed_sub:'шаг при прокрутке колёсика (1–30%)',
    update_available:'Доступно обновление', update_changelog:'Что нового', update_btn:'Обновить',
    update_downloading:'Загрузка…', update_restart:'Перезапустить', update_error:'Ошибка загрузки',
    update_confirm:'Обновить VidBoards?', update_confirm_sub:'Приложение закроется и перезапустится для установки обновления.',
    update_yes:'Обновить', update_no:'Позже',
  },
  en: {
    home:'Home', new_project:'New Project', open_file:'Open File...',
    navigation:'Navigation', recent:'Recent', all_projects:'All Projects',
    trash:'Trash', settings:'Settings', appearance:'Appearance',
    theme:'Theme', dark:'Dark', light:'Light',
    seq_img_dur:'Image display time in Sequence Mode', seq_img_dur_sub:'seconds (1 to 60)', seq_img_dur_sec:'sec',
    language:'Language', lang_auto:'Detected automatically', auto:'auto',
    about:'About', developer:'Developer',
    changelog:'Changelog', support:'Support',
    support_dev:'Support development',
    donation_title:'VidBoards is completely free',
    donation_desc:'No ads, no subscriptions. If the app helps you — support the developer.',
    donate_btn:'Support with a donation',
    folder:'Folder', files:'Files', play_all:'Play', pause_all:'Pause', stop_all:'Stop',
    snap_on:'Snap on', snap_off:'Snap off',
    filter:'Filter:', no_filter:'No filter',
    rename:'Rename', save_as:'Save As', show_in_folder:'Show in Folder',
    deactivate:'Deactivate', activate:'Activate',
    align_row:'Align in row', align_col:'Align in column', last_frame:'last frame',
    delete:'Delete', restore:'Restore', move_to_trash:'Move to Trash',
    pick_source:'Pick source file', file_missing:'File not found',
    create:'Create', cancel:'Cancel', save:'Save',
    proj_name:'Project name', save_folder:'Folder',
    confirm_delete:'Delete project?',
    confirm_delete_sub:'Project will be moved to Trash and deleted after 30 days.',
    trash_empty:'Trash is empty', trash_empty_sub:'Deleted projects will appear here',
    days:'days', files_lbl:'files', videos_lbl:'videos',
    color_label:'Label:',
    colors:['None','Green','Blue','Red','Yellow','Orange','Purple'],
    proj_size:'Project size:',
    undo:'Undo', redo:'Redo',
    hint_play:'Restarting videos from beginning', hint_resume:'Resuming from pause',
    hint_disabled:'Deactivated', hint_enabled:'Activated',
    hint_deleted:'Deleted', hint_restored:'Restored',
    hint_snap_on:'Snap enabled', hint_snap_off:'Snap disabled',
    today:'Today', yesterday:'Yesterday',
    recent_projects:'Recent Projects', all_projects_title:'All Projects',
    trash_title:'Trash', projects:'Projects', recent_files:'Recent Files',
    new_proj_placeholder:'My Project',
    terms:'Terms', privacy:'Privacy',
    save_proj:'Save project', add_label:'Label', add_sticky:'Sticky',
    save_short:'Save', map_btn:'Map', close:'Close',
    opt_title:'Visible only',
    search_ph:'Search…', search_prev_title:'Prev (Shift+Enter)', search_next_title:'Next (Enter)',
    loop_on:'Loop on', loop_off:'Loop off',
    opt_on:'Opt on — visible only', opt_off:'Opt off — all videos',
    timeline_on:'Timeline on', timeline_off:'Timeline off',
    hint_no_project:'Open a project to add files',
    hint_added:'Added',
    disabled_card:'disabled',
    browse:'Browse...',
    rendering:'Rendering…', nothing_export:'Nothing on canvas',
    hint_saved:'Saved: ', save_error:'Save error',
    shape_lbl:'Shape:', shape_square:'Square', shape_rect:'Rect',
    color_pick:'Color:', search_no_results:'0 found',
    png_save:'Save',
    save_png:'Save as PNG', save_png_scale:'Scale',
    meta_data:'Meta Data', meta_no_data:'No metadata found',
    meta_copy:'Copy', meta_copied:'Copied!', meta_copy_seed:'Copy seed',
    save_changes:'Save changes?',
    unsaved_lost:'Unsaved changes will be lost.',
    yes_save:'Yes, save', no_close:'No, close',
    unsaved_app:'Close application?',
    unsaved_app_sub:'Open projects have unsaved changes.',
    proj_name_taken:'A project with this name already exists. Please choose a different name.',
    thumb_mode:'Project preview', thumb_board:'Entire board', thumb_center:'Content center', thumb_viewport:'Current view',
    thumb_board_sub:'All cards and labels', thumb_center_sub:'Area around the center of cards', thumb_viewport_sub:'What\'s visible on screen at save time',
    dev_name:'Kuzma Bogdanov',
    app_desc:'A free tool for viewing and comparing videos and images on a free canvas.',
    copyright:'© 2026 Kuzma Bogdanov',
    manual:'Manual',
    grid_style:'Canvas Grid', grid_dots:'Dots', grid_lines:'Lines', grid_cross:'Crosses', grid_chess:'Chess', grid_none:'None',
    zoom_speed:'Zoom Speed', zoom_speed_sub:'scroll wheel step (1–30%)',
    update_available:'Update Available', update_changelog:'What\'s New', update_btn:'Update',
    update_downloading:'Downloading…', update_restart:'Restart', update_error:'Download failed',
    update_confirm:'Update VidBoards?', update_confirm_sub:'The app will close and restart to install the update.',
    update_yes:'Update', update_no:'Later',
  }
};

// ── ЦВЕТА МЕТОК — светлее, читаемее ─────────────────────────────────
const LABEL_COLORS = [
  { key:'none',   dot:'#555555', ring:null,      footer:''        },
  { key:'green',  dot:'#4caf7d', ring:'#4caf7d', footer:'#1e5c35' },
  { key:'blue',   dot:'#5b9cf6', ring:'#5b9cf6', footer:'#1a3a6e' },
  { key:'red',    dot:'#f47c7c', ring:'#e02020', footer:'#6e2020' },
  { key:'yellow', dot:'#f5c842', ring:'#f5c842', footer:'#8c6e00' },
  { key:'orange', dot:'#f5974a', ring:'#f5974a', footer:'#6e3500' },
  { key:'purple', dot:'#b57cf5', ring:'#b57cf5', footer:'#3d1a7a' },
];

const STICKY_BG  ={none:'#888888',green:'#4caf7d',blue:'#5b9cf6',red:'#f47c7c',yellow:'#f5c842',orange:'#f5974a',purple:'#b57cf5'};
const STICKY_TEXT={none:'#ffffff',green:'#000000',blue:'#ffffff',red:'#ffffff',yellow:'#000000',orange:'#000000',purple:'#ffffff'};

// ── СОСТОЯНИЕ ───────────────────────────────────────────────────────
let lang='ru', theme='dark', autoLang=true, thumbMode='viewport', prevScreen='home';
let boardProjects=[], activeBoardIndex=-1, boardProject=null;
let zoom=1, panX=0, panY=0, snapOn=true;
let isPlaying=false, isPaused=false, loopEnabled=false, optimizePlay=true, seqMode=false, seqImageDuration=3;
let gridStyle='dots';
let zoomStep=0.08;
let lastMouseWX=0, lastMouseWY=0;
let seqImgTimer=null;
let timelineActive=false, timelineDuration=0, timelineRAF=null;
let minimapActive=false;
let searchQuery='', searchHits=[], searchHitIdx=0;
let activeFilter=null;
let selectedCardId=null;   // выбранная карточка
let selectedLabelId=null;  // выбранный лейбл (отдельно!)
const GRID=40;
const undoStack=[], redoStack=[], MAX_UNDO=20;
const cardPreviews=new Map();
const multiSelCards=new Set();
const multiSelLabels=new Set();
const multiSelStickies=new Set();
let multiDragOX=0,multiDragOY=0;
const multiDragC=new Map(),multiDragL=new Map(),multiDragS=new Map();
let selectedStickyId=null;
let homeView='recent';
let updateAvailableVersion=null, updateReady=false, updateDownloading=false, updateProgress=0, updateErrored=false;
let _updateProgressTimer=null;

// ── УТИЛИТЫ ─────────────────────────────────────────────────────────
const t = k => (T[lang]&&T[lang][k])?T[lang][k]:k;

let hintTimer;
function showHint(msg){
  const el=document.getElementById('hint');
  clearTimeout(hintTimer);el.textContent=msg;el.classList.add('show');
  hintTimer=setTimeout(()=>el.classList.remove('show'),2200);
}
function hasMultiSel(){return multiSelCards.size+multiSelLabels.size+multiSelStickies.size>1;}
function clearMultiSel(){
  multiSelCards.clear();multiSelLabels.clear();multiSelStickies.clear();
  document.querySelectorAll('.card').forEach(c=>{c.classList.remove('selected');c.style.removeProperty('border-width');});
  document.querySelectorAll('.board-label').forEach(l=>{l.classList.remove('selected');l.style.removeProperty('border-width');});
  document.querySelectorAll('.board-sticky').forEach(s=>{s.classList.remove('selected');s.style.removeProperty('border-width');});
  document.querySelectorAll('.seq-badge').forEach(b=>b.remove());
  selectedCardId=null;selectedLabelId=null;selectedStickyId=null;
}
function refreshMultiSelBorders(){
  const thick=hasMultiSel();
  document.querySelectorAll('.card').forEach(c=>{
    if(c.classList.contains('selected')&&thick)c.style.setProperty('border-width','1.8px','important');
    else c.style.removeProperty('border-width');
  });
  document.querySelectorAll('.board-label').forEach(l=>{
    if(l.classList.contains('selected')&&thick)l.style.setProperty('border-width','1.8px','important');
    else l.style.removeProperty('border-width');
  });
  document.querySelectorAll('.board-sticky').forEach(s=>{
    if(s.classList.contains('selected')&&thick)s.style.setProperty('border-width','1.8px','important');
    else s.style.removeProperty('border-width');
  });
  updateSeqBadges();
}
function updateSeqBadges(){
  document.querySelectorAll('.seq-badge').forEach(b=>b.remove());
  if(!seqMode||multiSelCards.size<1)return;
  let i=1;
  multiSelCards.forEach(id=>{
    const el=document.getElementById('card-'+id);
    if(!el)return;
    const b=document.createElement('div');b.className='seq-badge';b.textContent=i++;el.appendChild(b);
  });
}
function playSequence(){
  const videos=[];
  multiSelCards.forEach(id=>{
    const f=getBoardFiles().find(f=>f.id===id);
    if(!f||f.type!=='v'||f.disabled||f.missing)return;
    const v=document.getElementById('card-'+id)?.querySelector('video');
    if(v)videos.push(v);
  });
  if(!videos.length)return;
  doStop();
  let idx=0;
  function next(){if(idx>=videos.length)return;const v=videos[idx++];v.currentTime=0;v.onended=next;v.play().catch(()=>{});}
  next();
}
function finalizeSelBox(bx,by,bw,bh,mode='replace'){
  if(bw<4&&bh<4)return;
  const wTL=toWorld(bx,by),wBR=toWorld(bx+bw,by+bh);
  if(mode==='replace'){multiSelCards.clear();multiSelLabels.clear();multiSelStickies.clear();}
  getBoardFiles().forEach(f=>{
    const hit=f.x<wBR.wx&&(f.x+f.w)>wTL.wx&&f.y<wBR.wy&&(f.y+f.h)>wTL.wy;
    if(mode==='subtract'){if(hit)multiSelCards.delete(f.id);}else if(hit)multiSelCards.add(f.id);
  });
  getLabels().forEach(l=>{
    const hit=l.x>=wTL.wx&&l.x<=wBR.wx&&l.y>=wTL.wy&&l.y<=wBR.wy;
    if(mode==='subtract'){if(hit)multiSelLabels.delete(l.id);}else if(hit)multiSelLabels.add(l.id);
  });
  getStickies().forEach(s=>{
    const hit=s.x<wBR.wx&&(s.x+s.w)>wTL.wx&&s.y<wBR.wy&&(s.y+s.h)>wTL.wy;
    if(mode==='subtract'){if(hit)multiSelStickies.delete(s.id);}else if(hit)multiSelStickies.add(s.id);
  });
  document.querySelectorAll('.card').forEach(c=>{
    c.classList.toggle('selected',multiSelCards.has(parseFloat(c.id.replace('card-',''))));
  });
  document.querySelectorAll('.board-label').forEach(l=>{
    l.classList.toggle('selected',multiSelLabels.has(parseFloat(l.id.replace('label-',''))));
  });
  document.querySelectorAll('.board-sticky').forEach(s=>{
    s.classList.toggle('selected',multiSelStickies.has(parseFloat(s.id.replace('sticky-',''))));
  });
  const total=multiSelCards.size+multiSelLabels.size+multiSelStickies.size;
  if(total>0){refreshMultiSelBorders();showHint(lang==='ru'?`Выбрано: ${total} эл.`:`Selected: ${total}`);}
  else clearMultiSel();
}
function alignMultiSel(dir){
  snapshot();
  const GAP=16;
  const items=[];
  multiSelCards.forEach(id=>{const f=getBoardFiles().find(f=>f.id===id);if(f)items.push({type:'card',id,x:f.x,y:f.y,w:f.w,h:f.h,obj:f});});
  multiSelLabels.forEach(id=>{const l=getLabels().find(l=>l.id===id);if(!l)return;const el=document.getElementById('label-'+id);const w=el?el.offsetWidth/zoom:80;const h=el?el.offsetHeight/zoom:24;items.push({type:'label',id,x:l.x,y:l.y,w,h,obj:l});});
  multiSelStickies.forEach(id=>{const s=getStickies().find(s=>s.id===id);if(s)items.push({type:'sticky',id,x:s.x,y:s.y,w:s.w,h:s.h,obj:s});});
  if(items.length<2)return;
  if(dir==='row'){
    items.sort((a,b)=>a.x-b.x);
    const anchorY=Math.min(...items.map(i=>i.y));
    let cx=items[0].x;
    items.forEach(item=>{
      const p=snapOn?snapW(cx,anchorY):{wx:cx,wy:anchorY};
      item.obj.x=p.wx;item.obj.y=p.wy;cx=p.wx+item.w+GAP;
    });
  } else {
    items.sort((a,b)=>a.y-b.y);
    const anchorX=Math.min(...items.map(i=>i.x));
    let cy=items[0].y;
    items.forEach(item=>{
      const p=snapOn?snapW(anchorX,cy):{wx:anchorX,wy:cy};
      item.obj.x=p.wx;item.obj.y=p.wy;cy=p.wy+item.h+GAP;
    });
  }
  // Apply positions to DOM without full re-render
  items.forEach(item=>{
    const sc=toScreen(item.obj.x,item.obj.y);
    const prefix=item.type==='card'?'card-':item.type==='label'?'label-':'sticky-';
    const el=document.getElementById(prefix+item.id);
    if(el){el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';}
  });
  updateStatus();
}
function openMultiCtx(x,y){
  const anyActive=Array.from(multiSelCards).some(id=>{const f=getBoardFiles().find(f=>f.id===id);return f&&!f.disabled;});
  const disLabel=anyActive?t('deactivate'):t('activate');
  const disIcon=anyActive?'ti-player-pause':'ti-player-play';
  const hasVids=Array.from(multiSelCards).some(id=>{const f=getBoardFiles().find(f=>f.id===id);return f&&f.type==='v'&&!f.disabled&&!f.missing;});
  openCtx([
    {icon:'ti-stack',label:lang==='ru'?`Выбрано: ${multiSelCards.size+multiSelLabels.size+multiSelStickies.size} эл.`:`Selected: ${multiSelCards.size+multiSelLabels.size+multiSelStickies.size}`,action:()=>{}},
    'sep',
    {icon:disIcon,label:disLabel,shortcut:'Ctrl+D',action:()=>{
      snapshot();
      multiSelCards.forEach(id=>{const f=getBoardFiles().find(f=>f.id===id);if(f){f.disabled=anyActive;refreshCard(f);}});
      updateStatus();
    }},
    'sep',
    {icon:'ti-layout-columns',label:t('align_row'),action:()=>{alignMultiSel('row');}},
    {icon:'ti-layout-rows',label:t('align_col'),action:()=>{alignMultiSel('col');}},
    'sep',
    {icon:'ti-trash',label:t('delete'),danger:true,action:()=>{
      snapshot();
      multiSelLabels.forEach(id=>{boardProject.labels=getLabels().filter(l=>l.id!==id);const el=document.getElementById('label-'+id);if(el)el.remove();});
      multiSelCards.forEach(id=>{boardProject.files=(boardProject.files||[]).filter(f=>f.id!==id);const el=document.getElementById('card-'+id);if(el)el.remove();});
      multiSelStickies.forEach(id=>{boardProject.stickies=getStickies().filter(s=>s.id!==id);const el=document.getElementById('sticky-'+id);if(el)el.remove();});
      clearMultiSel();updateStatus();applyFilter();
    }},
    'sep',
  ],x,y);
  if(multiSelCards.size>0){
    const colDiv=document.createElement('div');colDiv.className='ctx-colors-row';
    const lbl=document.createElement('span');lbl.className='ctx-clbl';lbl.textContent=t('color_label');colDiv.appendChild(lbl);
    LABEL_COLORS.forEach((c,i)=>{
      const dot=document.createElement('div');dot.className='ctx-cdot';
      dot.style.background=c.key==='none'?'#555555':c.dot;dot.title=t('colors')[i];
      dot.onclick=e=>{
        e.stopPropagation();snapshot();
        multiSelCards.forEach(id=>{
          const f=getBoardFiles().find(f=>f.id===id);if(!f)return;
          f.color=c.key;
          const fe=document.getElementById('footer-'+id);if(!fe)return;
          fe.style.background=footerBg(f.color);
          const fn=document.getElementById('fname-'+id);if(fn)fn.style.color=f.color!=='none'?'#ffffff':'';
        });
        applyFilter();updateStatus();closeCtx();
      };
      colDiv.appendChild(dot);
    });
    ctxEl.appendChild(colDiv);
  }
}
function formatDate(iso){
  if(!iso)return'';
  const d=new Date(iso),now=new Date(),diff=now-d;
  if(diff<86400000&&now.getDate()===d.getDate())return t('today');
  if(diff<172800000)return t('yesterday');
  return d.toLocaleDateString(lang==='ru'?'ru-RU':'en-US',{day:'numeric',month:'short'});
}
function formatSize(bytes){
  if(!bytes)return'—';
  if(bytes<1024*1024)return Math.round(bytes/1024)+' KB';
  return(bytes/1024/1024).toFixed(1)+' MB';
}
function fileToUrl(p){let s=p.replace(/\\/g,'/');if(s[0]!=='/')s='/'+s;return'file://'+s;}

// ── ТЕМА / ЯЗЫК ─────────────────────────────────────────────────────
function applyTheme(th){
  theme=th;
  document.body.classList.toggle('dark',theme==='dark');
  document.body.classList.toggle('light',theme==='light');
  document.querySelectorAll('.theme-opt').forEach(o=>o.classList.toggle('sel',o.dataset.theme===theme));
  drawGrid();persist();
}
function applyLang(l,auto){
  lang=l;autoLang=!!auto;
  persist();
  const active=document.querySelector('.screen.active');
  const screen=active?active.id.replace('screen-',''):'home';
  if(screen==='home'){buildHomeScreen();}
  else if(screen==='settings'){buildSettingsScreen();}
  else if(screen==='board'){buildBoardScreen();}
  document.querySelectorAll('.lang-opt').forEach(o=>o.classList.toggle('sel',o.dataset.lang===lang));
  const badge=document.getElementById('auto-badge');
  if(badge){badge.textContent=t('auto');badge.style.display=autoLang?'':'none';}
  renderTabs();
}

function persist(){api.saveSettings({theme,lang,thumbMode,seqImageDuration,gridStyle,zoomStep});}

// ── ЭКРАНЫ / ТАБЫ ───────────────────────────────────────────────────
function showScreen(name){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+name).classList.add('active');
}
function getCurrentScreen(){
  const a=document.querySelector('.screen.active');return a?a.id.replace('screen-',''):'home';
}
function renderTabs(){
  const cont=document.getElementById('titlebar-tabs');cont.innerHTML='';
  const homeTab=document.createElement('div');
  homeTab.className='t-tab'+(getCurrentScreen()==='home'||getCurrentScreen()==='settings'?' active':'');
  homeTab.innerHTML=`<i class="ti ti-home"></i> ${t('home')}`;
  homeTab.onclick=()=>{showScreen('home');buildHomeScreen();renderTabs();};
  cont.appendChild(homeTab);
  boardProjects.forEach((proj,idx)=>{
    const isActive=getCurrentScreen()==='board'&&idx===activeBoardIndex;
    const tab=document.createElement('div');tab.className='t-tab'+(isActive?' active':'');
    tab.innerHTML=`<i class="ti ti-layout-board"></i><span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${proj.name}</span><span class="t-tab-close" data-idx="${idx}"><i class="ti ti-x"></i></span>`;
    tab.draggable=true;
    tab.addEventListener('dragstart',e=>{
      e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(idx));
      setTimeout(()=>tab.classList.add('dragging'),0);
    });
    tab.addEventListener('dragend',()=>{
      tab.classList.remove('dragging');
      cont.querySelectorAll('.drop-before,.drop-after').forEach(el=>el.classList.remove('drop-before','drop-after'));
    });
    tab.addEventListener('dragover',e=>{
      e.preventDefault();e.dataTransfer.dropEffect='move';
      cont.querySelectorAll('.drop-before,.drop-after').forEach(el=>el.classList.remove('drop-before','drop-after'));
      const r=tab.getBoundingClientRect();
      tab.classList.add(e.clientX<r.left+r.width/2?'drop-before':'drop-after');
    });
    tab.addEventListener('dragleave',e=>{
      if(!tab.contains(e.relatedTarget))tab.classList.remove('drop-before','drop-after');
    });
    tab.addEventListener('drop',e=>{
      e.preventDefault();
      const from=parseInt(e.dataTransfer.getData('text/plain'));
      if(isNaN(from)||from===idx)return;
      const r=tab.getBoundingClientRect();
      let to=e.clientX<r.left+r.width/2?idx:idx+1;
      if(from<to)to--;
      const activeProj=boardProject;
      const [moved]=boardProjects.splice(from,1);
      boardProjects.splice(to,0,moved);
      activeBoardIndex=boardProjects.indexOf(activeProj);
      boardProject=boardProjects[activeBoardIndex]||null;
      renderTabs();
    });
    tab.onclick=e=>{
      if(e.target.closest('.t-tab-close')){closeBoard(idx);return;}
      if(activeBoardIndex!==-1&&boardProjects[activeBoardIndex]){boardProjects[activeBoardIndex].zoom=zoom;boardProjects[activeBoardIndex].canvasX=panX;boardProjects[activeBoardIndex].canvasY=panY;}
      activeBoardIndex=idx;boardProject=boardProjects[idx];
      zoom=boardProject.zoom||1;panX=boardProject.canvasX||0;panY=boardProject.canvasY||0;
      showScreen('board');renderTabs();buildBoardScreen();
    };
    cont.appendChild(tab);
  });
  const activeTab=cont.querySelector('.t-tab.active:not(:first-child)');
  if(activeTab)requestAnimationFrame(()=>activeTab.scrollIntoView({inline:'nearest',block:'nearest'}));
}
function closeBoard(idx){
  const proj=boardProjects[idx];if(!proj)return;
  const doClose=()=>{
    if(idx===activeBoardIndex){proj.zoom=zoom;proj.canvasX=panX;proj.canvasY=panY;}
    boardProjects.splice(idx,1);
    if(!boardProjects.length){boardProject=null;activeBoardIndex=-1;showScreen('home');buildHomeScreen();}
    else{
      activeBoardIndex=Math.min(idx,boardProjects.length-1);boardProject=boardProjects[activeBoardIndex];
      zoom=boardProject.zoom||1;panX=boardProject.canvasX||0;panY=boardProject.canvasY||0;
      showScreen('board');buildBoardScreen();
    }
    renderTabs();
  };
  const saveThumbThenClose=async()=>{
    if(proj._path&&idx===activeBoardIndex){
      const cvs=document.getElementById('board-canvas');
      const snap={panX,panY,zoom,w:cvs?cvs.offsetWidth:1280,h:cvs?cvs.offsetHeight:720};
      try{
        const cv=await renderBoardToPng(0.35,snap);
        if(cv){
          const dataUrl=cv.toDataURL('image/jpeg',0.92);
          proj.thumbnail=dataUrl;
          api.saveThumb(proj._path,dataUrl);
        }
      }catch{}
    }
    doClose();
  };
  if(proj._dirty){
    openModal(
      t('save_changes'),
      `<p class="m-text">«${proj.name}»</p><p class="m-sub">${t('unsaved_lost')}</p>`,
      t('yes_save'),'ok',
      async()=>{await saveBoardProjectByIndex(idx);saveThumbThenClose();}
    );
    const nb=document.getElementById('m-cancel');
    nb.textContent=t('no_close');
    nb.onclick=()=>{closeModal();doClose();};
  } else {
    saveBoardProjectByIndex(idx);saveThumbThenClose();
  }
}

// ── МОДАЛКА ─────────────────────────────────────────────────────────
let modalOkCb=null;
function openModal(title,bodyHTML,okLabel,okClass,cb){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-body').innerHTML=bodyHTML+`<div class="m-row"><button class="m-btn cancel" id="m-cancel">${t('cancel')}</button><button class="m-btn ${okClass||'ok'}" id="m-ok">${okLabel}</button></div>`;
  document.getElementById('modal-overlay').classList.add('open');
  modalOkCb=cb;
  document.getElementById('m-cancel').onclick=closeModal;
  document.getElementById('m-ok').onclick=()=>{closeModal();if(modalOkCb)modalOkCb();};
  setTimeout(()=>{const inp=document.querySelector('#modal-body .m-input');if(inp){inp.focus();inp.select();inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('m-ok')?.click();}};}},60);
}
function closeModal(){document.getElementById('modal-overlay').classList.remove('open');}
document.getElementById('modal-close').onclick=closeModal;
document.getElementById('modal-overlay').onclick=e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();};

// ── CONTEXT MENU ─────────────────────────────────────────────────────
const ctxEl=document.getElementById('ctx-menu');
function closeCtx(){ctxEl.classList.remove('open');}
function openCtx(items,x,y){
  ctxEl.innerHTML='';
  items.forEach(item=>{
    if(item==='sep'){const s=document.createElement('div');s.className='ctx-sep';ctxEl.appendChild(s);return;}
    const d=document.createElement('div');
    d.className='ctx-item'+(item.danger?' danger':'');
    d.innerHTML=`<i class="ti ${item.icon}"></i>${item.label}${item.shortcut?`<span class="shortcut">${item.shortcut}</span>`:''}`;
    d.onclick=()=>{closeCtx();item.action();};
    ctxEl.appendChild(d);
  });
  ctxEl.classList.add('open');
  const bw=document.body.offsetWidth,bh=document.body.offsetHeight;
  ctxEl.style.left='0';ctxEl.style.top='0';ctxEl.style.display='block';
  const cw=ctxEl.offsetWidth,ch=ctxEl.offsetHeight;ctxEl.style.display='';
  ctxEl.style.left=Math.min(x,bw-cw-4)+'px';
  ctxEl.style.top=(y+ch>bh?y-ch-4:y)+'px';
}
document.addEventListener('click',e=>{if(!ctxEl.contains(e.target))closeCtx();});
document.addEventListener('contextmenu',e=>{if(document.getElementById('screen-board').classList.contains('active'))e.preventDefault();});

// ═══════════════════════════════════════════════════════════════════
//  ГЛАВНАЯ
// ═══════════════════════════════════════════════════════════════════
function renderUpdateBanner(){
  const bot=document.getElementById('sb-bottom');if(!bot)return;
  const old=document.getElementById('update-banner');if(old)old.remove();
  if(!updateAvailableVersion)return;
  const banner=document.createElement('div');
  banner.id='update-banner';
  banner.style.cssText='margin-bottom:8px;padding:10px;border-radius:8px;background:var(--accent-bg);border:0.5px solid var(--accent-t);display:flex;flex-direction:column;gap:7px';
  const title=document.createElement('div');
  title.style.cssText='font-size:11px;font-weight:600;color:var(--accent-t);display:flex;align-items:center;gap:5px';
  title.innerHTML=`<i class="ti ti-arrow-up-circle"></i> ${t('update_available')} v${updateAvailableVersion}`;
  const btnCL=document.createElement('button');
  btnCL.style.cssText='width:100%;height:26px;border-radius:6px;border:0.5px solid var(--border3);background:var(--bg4);color:var(--text2);font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;';
  btnCL.textContent=t('update_changelog');
  btnCL.onclick=()=>api.openUrl(`https://github.com/KuzmaBogdanov/vidBoards/releases/tag/v${updateAvailableVersion}`);
  const btnUp=document.createElement('button');
  btnUp.id='btn-do-update';
  btnUp.style.cssText='width:100%;height:26px;border-radius:6px;border:none;background:var(--accent);color:#fff;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;';
  if(updateErrored){btnUp.textContent=t('update_error');btnUp.style.background='var(--red,#e05)';btnUp.disabled=false;}
  else if(updateDownloading){btnUp.textContent=t('update_downloading');btnUp.disabled=true;btnUp.style.opacity='0.6';}
  else if(updateReady){btnUp.textContent=t('update_restart');}
  else{btnUp.textContent=t('update_btn');}
  if(updateErrored){btnUp.onclick=()=>{updateErrored=false;renderUpdateBanner();};}
  btnUp.onclick=()=>{
    if(updateReady){
      openModal(t('update_confirm'),`<p class="m-text">v${updateAvailableVersion}</p><p class="m-sub">${t('update_confirm_sub')}</p>`,t('update_yes'),'ok',()=>api.quitAndInstall());
      const mc=document.getElementById('m-cancel');if(mc)mc.textContent=t('update_no');
      return;
    }
    openModal(t('update_confirm'),`<p class="m-text">v${updateAvailableVersion}</p><p class="m-sub">${t('update_confirm_sub')}</p>`,t('update_yes'),'ok',async()=>{
      updateDownloading=true;updateErrored=false;updateProgress=0;renderUpdateBanner();
      if(_updateProgressTimer)clearTimeout(_updateProgressTimer);
      _updateProgressTimer=setTimeout(()=>{if(updateDownloading){updateDownloading=false;updateErrored=true;renderUpdateBanner();}},90000);
      api.downloadUpdate().catch(()=>{if(_updateProgressTimer)clearTimeout(_updateProgressTimer);updateDownloading=false;updateErrored=true;renderUpdateBanner();});
    });
    const mc=document.getElementById('m-cancel');if(mc)mc.textContent=t('update_no');
  };
  const btns=document.createElement('div');
  btns.style.cssText='display:flex;flex-direction:column;gap:5px';
  btns.appendChild(btnCL);btns.appendChild(btnUp);
  if(updateDownloading){
    const track=document.createElement('div');
    track.id='update-progress-track';
    track.style.cssText='width:100%;height:3px;border-radius:2px;background:var(--bg4);overflow:hidden;margin-top:2px';
    const fill=document.createElement('div');
    fill.id='update-progress-fill';
    fill.style.cssText=`height:100%;border-radius:2px;background:var(--accent);transition:width 0.3s;width:${updateProgress}%`;
    track.appendChild(fill);
    btns.appendChild(track);
    const pct=document.createElement('div');
    pct.id='update-progress-pct';
    pct.style.cssText='font-size:10px;color:var(--text4);text-align:center';
    pct.textContent=updateProgress+'%';
    btns.appendChild(pct);
  }
  banner.appendChild(title);banner.appendChild(btns);
  bot.insertBefore(banner,bot.firstChild);
}

function buildHomeScreen(){
  const screen=document.getElementById('screen-home');
  screen.innerHTML=`
    <div class="home-body">
      <div class="home-sidebar">
        <div class="sb-section">
          <button class="new-proj-btn" id="sb-new"><i class="ti ti-plus"></i> ${t('new_project')}</button>
          <button class="open-file-btn" id="sb-open"><i class="ti ti-folder-open"></i> ${t('open_file')}</button>
        </div>
        <div class="sb-section">
          <div class="sb-label">${t('navigation')}</div>
          <button class="nav-btn${homeView==='recent'?' active':''}" data-view="recent"><i class="ti ti-clock"></i> ${t('recent')}</button>
          <button class="nav-btn${homeView==='all'?' active':''}" data-view="all"><i class="ti ti-layout-board"></i> ${t('all_projects')}</button>
          <button class="nav-btn${homeView==='trash'?' active':''}" data-view="trash"><i class="ti ti-trash"></i> ${t('trash')}</button>
        </div>
        <div class="sb-bottom" id="sb-bottom"><div class="sb-ver">VidBoards v1.2.0 · Electron</div></div>
      </div>
      <div class="home-main">
        <div class="home-topbar">
          <span class="home-title" id="home-title"></span>
          <div class="search-box"><i class="ti ti-search"></i><input id="search-input" placeholder="${t('recent')}..."></div>
        </div>
        <div id="home-content"></div>
      </div>
    </div>`;
  document.getElementById('sb-new').onclick=openNewProjectModal;
  document.getElementById('sb-open').onclick=openExistingProject;
  renderUpdateBanner();
  document.querySelectorAll('.nav-btn[data-view]').forEach(btn=>{btn.onclick=()=>{homeView=btn.dataset.view;buildHomeScreen();};});
  document.getElementById('search-input').oninput=e=>renderHomeContent(e.target.value);
  renderHomeView();
}
async function renderHomeView(){
  if(!document.getElementById('home-title'))return;
  const titles={recent:t('recent_projects'),all:t('all_projects_title'),trash:t('trash_title')};
  document.getElementById('home-title').textContent=titles[homeView]||'';
  renderHomeContent('');
}
async function renderHomeContent(search){
  const cont=document.getElementById('home-content');if(!cont)return;cont.innerHTML='';
  if(homeView==='trash')await renderTrashView(cont,search);
  else await renderProjectsView(cont,search);
}
async function renderProjectsView(cont,search){
  let projects=[];try{projects=await api.listProjects();}catch{}
  projects.forEach(p=>{const open=boardProjects.find(bp=>bp._path===p.path);if(open&&open.thumbnail)p.thumbnail=open.thumbnail;});
  if(search)projects=projects.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()));
  const sec=document.createElement('div');sec.className='proj-section';
  sec.innerHTML=`<div class="sec-row"><span class="sec-title">${t('projects')}</span></div>`;
  const grid=document.createElement('div');grid.className='proj-grid';
  const nc=document.createElement('div');nc.className='proj-card new-card';
  nc.innerHTML=`<div class="new-card-icon"><i class="ti ti-plus"></i></div><span class="new-card-lbl">${t('new_project')}</span>`;
  nc.onclick=openNewProjectModal;grid.appendChild(nc);
  projects.forEach(p=>grid.appendChild(makeProjCard(p)));
  sec.appendChild(grid);cont.appendChild(sec);
  if(homeView==='recent'){
    const fSec=document.createElement('div');fSec.className='files-section';
    fSec.innerHTML=`<div class="sec-row"><span class="sec-title">${t('recent_files')}</span></div>`;
    getRecentFiles().forEach(f=>{
      const row=document.createElement('div');row.className='file-row';row.style.position='relative';
      const isVid=/\.(mp4|mov|webm|avi|mkv)$/i.test(f.path);
      const icon=document.createElement('div');icon.className=`file-icon ${isVid?'v':'i'}`;icon.innerHTML=`<i class="ti ti-${isVid?'video':'photo'}"></i>`;
      const info=document.createElement('div');info.className='file-info';info.innerHTML=`<div class="file-name">${f.name}</div><div class="file-path">${f.path}</div>`;
      const size=document.createElement('span');size.className='file-size';size.textContent=formatSize(f.size);
      const date=document.createElement('span');date.className='file-date';date.textContent=formatDate(f.date);
      const dots=document.createElement('button');
      dots.style.cssText='all:unset;box-sizing:border-box;width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:5px;cursor:pointer;color:var(--text3);opacity:0;transition:opacity .15s;flex-shrink:0;margin-left:6px';
      dots.innerHTML='<i class="ti ti-dots-vertical" style="font-size:14px"></i>';
      dots.onclick=e=>{e.stopPropagation();openRecentFileCtx(f,e.clientX,e.clientY);};
      dots.onmouseenter=()=>{dots.style.background='var(--bg5)';};
      dots.onmouseleave=()=>{dots.style.background='';};
      row.appendChild(icon);row.appendChild(info);row.appendChild(size);row.appendChild(date);row.appendChild(dots);
      row.addEventListener('mouseenter',()=>{dots.style.opacity='1';});
      row.addEventListener('mouseleave',()=>{dots.style.opacity='0';});
      row.addEventListener('contextmenu',e=>{e.preventDefault();openRecentFileCtx(f,e.clientX,e.clientY);});
      fSec.appendChild(row);
    });
    cont.appendChild(fSec);
  }
}
async function renderTrashView(cont,search){
  let items=[];try{items=await api.listTrash();}catch{}
  if(search)items=items.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()));
  const sec=document.createElement('div');sec.className='proj-section';
  sec.innerHTML=`<div class="sec-row"><span class="sec-title">${t('trash_title')}</span></div>`;
  if(!items.length){
    sec.innerHTML+=`<div class="empty-state"><i class="ti ti-trash empty-icon"></i><span class="empty-text">${t('trash_empty')}</span><span style="font-size:10px;color:var(--text5)">${t('trash_empty_sub')}</span></div>`;
  } else {
    items.forEach(item=>{
      const d=document.createElement('div');d.className='trash-item';
      d.innerHTML=`<i class="ti ti-layout-board" style="font-size:18px;color:var(--text4)"></i><div style="flex:1"><div class="trash-name">${item.name}</div><div style="font-size:9px;color:var(--text4)">${formatDate(item.deletedAt)}</div></div><span class="trash-days">${item.daysLeft} ${t('days')}</span><span class="trash-restore">${t('restore')}</span>`;
      d.querySelector('.trash-restore').onclick=async()=>{await api.restoreProject(item.path);showHint(`«${item.name}» ${t('hint_restored')}`);renderHomeContent('');};
      sec.appendChild(d);
    });
  }
  cont.appendChild(sec);
}
function makeProjCard(p){
  const card=document.createElement('div');card.className='proj-card';
  const thumb=document.createElement('div');thumb.className='proj-thumb';
  if(p.thumbnail){
    const img=document.createElement('img');
    img.src=p.thumbnail;img.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
    thumb.appendChild(img);
  } else {
    const types=['v','v','i','i','n','i'],sizes=[[38,26],[28,20],[34,24],[30,22],[24,18],[36,26]];
    types.forEach((tp,i)=>{const[w,h]=sizes[i];const m=document.createElement('div');m.className=`mini-${tp}`;m.style.cssText=`width:${w}px;height:${h}px`;thumb.appendChild(m);});
  }
  const fade=document.createElement('div');fade.className='thumb-fade';thumb.appendChild(fade);
  const info=document.createElement('div');info.className='proj-info';
  info.innerHTML=`<div class="proj-name">${p.name}</div><div class="proj-meta">${p.fileCount} ${t('files_lbl')} · ${p.videoCount} ${t('videos_lbl')} · ${formatDate(p.modified)}</div>`;
  const dots=document.createElement('button');dots.className='proj-dots';dots.innerHTML='<i class="ti ti-dots-vertical"></i>';
  dots.onclick=e=>{e.stopPropagation();openProjCtx(p,e.clientX,e.clientY);};
  card.appendChild(thumb);card.appendChild(info);card.appendChild(dots);
  card.onclick=()=>openProjectFromData(p);return card;
}
function openRecentFileCtx(f,x,y){
  openCtx([
    {icon:'ti-folder-open',label:t('show_in_folder'),action:()=>api.showInExplorer(f.path)},
  ],x,y);
}
function openProjCtx(p,x,y){
  openCtx([
    {icon:'ti-edit',label:t('rename'),action:()=>renameProjModal(p)},
    {icon:'ti-copy',label:t('save_as'),action:()=>saveAsProjModal(p)},
    {icon:'ti-folder-open',label:t('show_in_folder'),action:()=>api.showInExplorer(p.path)},
    'sep',
    {icon:'ti-trash',label:t('delete'),danger:true,action:()=>deleteProjModal(p)},
  ],x,y);
}
function renameProjModal(p){
  openModal(t('rename'),`<label class="m-label">${t('proj_name')}</label><input class="m-input" id="inp-rename" value="${p.name}">`,t('save'),'ok',async()=>{
    const v=document.getElementById('inp-rename').value.trim();if(!v)return;
    const np=await api.renameProject(p.path,v);if(np){const op=boardProjects.find(bp=>bp._path===p.path);if(op){op.name=v;op._path=np;renderTabs();}showHint(`«${v}» — ${t('rename')}`);renderHomeContent('');}
  });
}
function saveAsProjModal(p){
  openModal(t('save_as'),`<label class="m-label">${t('proj_name')}</label><input class="m-input" id="inp-saveas" value="${p.name} (копия)" style="margin-bottom:4px"><div id="m-saveas-err" style="display:none;color:var(--danger);font-size:11px;margin-bottom:8px"></div><label class="m-label">${t('save_folder')}</label><div style="display:flex;gap:6px"><input class="m-input" id="inp-saveas-path" style="flex:1" readonly><button id="btn-saveas-browse" style="all:unset;box-sizing:border-box;background:var(--bg5);border:0.5px solid var(--border3);color:var(--text2);border-radius:6px;padding:0 12px;font-size:11px;cursor:pointer;white-space:nowrap">Обзор...</button></div>`,t('save'),'ok',null);
  setTimeout(async()=>{
    const def=await api.getDefaultProjectsDir();
    const pi=document.getElementById('inp-saveas-path');if(pi)pi.value=def;
    const bb=document.getElementById('btn-saveas-browse');if(bb)bb.onclick=async()=>{const f=await api.pickFolder();if(f&&pi)pi.value=f;};
    document.getElementById('m-ok').onclick=async()=>{
      const name=(document.getElementById('inp-saveas').value||'').trim()||p.name+' (копия)';
      const folder=((document.getElementById('inp-saveas-path').value||'').trim()||def).replace(/[\\/]+$/,'');
      const safe=name.replace(/[<>:"/\\|?*]/g,'_');
      const err=document.getElementById('m-saveas-err');
      if(await api.fileExists(folder+'/'+safe+'.vdb')){
        if(err){err.textContent=t('proj_name_taken');err.style.display='block';}return;
      }
      if(err)err.style.display='none';
      closeModal();
      const np=await api.newProjectInFolder(name,folder);if(!np)return;
      try{const data=await api.openProject(p.path);if(data){data.name=name;delete data._path;await api.saveProject(np,data);}}catch{}
      showHint(`«${name}» — ${t('save_as')}`);renderHomeContent('');
    };
  },60);
}
function deleteProjModal(p){
  openModal(t('confirm_delete'),`<p class="m-text">«${p.name}»</p><p class="m-sub">${t('confirm_delete_sub')}</p>`,t('move_to_trash'),'danger-btn',async()=>{
    await api.trashProject(p.path);showHint(`«${p.name}» ${t('hint_deleted')}`);renderHomeContent('');
  });
}
async function openNewProjectModal(){
  openModal(t('new_project'),`<label class="m-label">${t('proj_name')}</label><input class="m-input" id="inp-projname" placeholder="${t('new_proj_placeholder')}" style="margin-bottom:4px"><div id="m-name-err" style="display:none;color:var(--danger);font-size:11px;margin-bottom:8px"></div><label class="m-label">${t('save_folder')}</label><div style="display:flex;gap:6px"><input class="m-input" id="inp-projpath" style="flex:1" readonly><button id="btn-browse" style="all:unset;box-sizing:border-box;background:var(--bg5);border:0.5px solid var(--border3);color:var(--text2);border-radius:6px;padding:0 12px;font-size:11px;cursor:pointer;white-space:nowrap">Обзор...</button></div>`,t('create'),'ok',null);
  setTimeout(async()=>{
    const def=await api.getDefaultProjectsDir();
    const pi=document.getElementById('inp-projpath');if(pi)pi.value=def;
    const bb=document.getElementById('btn-browse');if(bb)bb.onclick=async()=>{const f=await api.pickFolder();if(f&&pi)pi.value=f;};
    const ni=document.getElementById('inp-projname');if(ni)ni.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('m-ok')?.click();}});
    document.getElementById('m-ok').onclick=async()=>{
      const name=(document.getElementById('inp-projname').value||'').trim()||t('new_proj_placeholder');
      const folder=((document.getElementById('inp-projpath').value||'').trim()||def).replace(/[\\/]+$/,'');
      const safe=name.replace(/[<>:"/\\|?*]/g,'_');
      const err=document.getElementById('m-name-err');
      if(await api.fileExists(folder+'/'+safe+'.vdb')){
        if(err){err.textContent=t('proj_name_taken');err.style.display='block';}return;
      }
      if(err)err.style.display='none';
      closeModal();
      const fp=await api.newProjectInFolder(name,folder);if(!fp)return;
      const data=await api.openProject(fp);if(data)openBoardWithData(data);
    };
  },60);
}
async function openExistingProject(){const data=await api.openProject(null);if(data)openBoardWithData(data);}
async function openProjectFromData(p){const data=await api.openProject(p.path);if(data)openBoardWithData(data);}

function getRecentFiles(){try{return JSON.parse(localStorage.getItem('vb_recent')||'[]');}catch{return[];}}
function addRecentFile(fp,size){
  let list=getRecentFiles().filter(f=>f.path!==fp);
  list.unshift({name:fp.split(/[\\/]/).pop(),path:fp,size,date:new Date().toISOString()});
  localStorage.setItem('vb_recent',JSON.stringify(list.slice(0,20)));
}

// ═══════════════════════════════════════════════════════════════════
//  ДОСКА
// ═══════════════════════════════════════════════════════════════════
function buildBoardScreen(){
  stopTimelineRAF();timelineActive=false;timelineDuration=0;selectedStickyId=null;minimapActive=false;
  const screen=document.getElementById('screen-board');
  screen.innerHTML=`
    <div class="board-toolbar">
      <button class="tb-btn" id="btn-add-label" title="${t('add_label')}"><i class="ti ti-text-size"></i> ${t('add_label')}</button>
      <button class="tb-btn" id="btn-add-sticky" title="${t('add_sticky')}"><i class="ti ti-note"></i> ${t('add_sticky')}</button>
      <button class="tb-btn" id="btn-folder"><i class="ti ti-folder-open"></i> ${t('folder')}</button>
      <button class="tb-btn" id="btn-files"><i class="ti ti-file-plus"></i> ${t('files')}</button>
      <div class="tb-sep"></div>
      <button class="tb-btn icon-only" id="btn-undo" title="${t('undo')} (Ctrl+Z)" disabled><i class="ti ti-arrow-back-up"></i></button>
      <button class="tb-btn icon-only" id="btn-redo" title="${t('redo')} (Ctrl+Shift+Z)" disabled><i class="ti ti-arrow-forward-up"></i></button>
      <div class="tb-sep"></div>
      <button class="tb-btn" id="btn-save" title="${t('save_proj')} (Ctrl+S)"><i class="ti ti-device-floppy"></i> ${t('save_short')}</button>
      <button class="tb-btn" id="btn-save-png" title="${t('save_png')}"><i class="ti ti-file-image"></i> PNG</button>
      <div class="tb-sep"></div>
      <div class="transport">
        <button class="transport-btn" id="btn-play" title="${t('play_all')}"><i class="ti ti-player-play-filled"></i></button>
        <button class="transport-btn" id="btn-pause" title="${t('pause_all')}"><i class="ti ti-player-pause-filled"></i></button>
        <button class="transport-btn" id="btn-stop" title="${t('stop_all')}"><i class="ti ti-player-stop-filled"></i></button>
        <button class="transport-btn loop-btn" id="btn-loop" title="Loop"><i class="ti ti-repeat"></i> Loop</button>
        <button class="transport-btn loop-btn" id="btn-timeline" title="Timeline"><i class="ti ti-timeline"></i> Timeline</button>
        <button class="transport-btn loop-btn" id="btn-seq-mode" title="${lang==='ru'?'Режим секвенции':'Sequence mode'}"><i class="ti ti-arrows-exchange"></i> Sequence</button>
      </div>
      <div class="tb-sep"></div>
      <button class="tb-btn" id="btn-opt" title="${t('opt_title')}"><i class="ti ti-eye"></i> Opt</button>
      <button class="tb-btn snap" id="btn-snap"><i class="ti ti-grid-dots"></i> Snap</button>
      <div class="tb-spacer"></div>
      <span class="zoom-lbl" id="zoom-lbl">${Math.round(zoom*100)}%</span>
      <button class="tb-btn icon-only" id="btn-zoom-out"><i class="ti ti-minus"></i></button>
      <button class="tb-btn icon-only" id="btn-zoom-in"><i class="ti ti-plus"></i></button>
    </div>
    <div id="timeline-bar" style="display:none;align-items:center;gap:8px;padding:4px 12px;background:var(--bg);border-bottom:0.5px solid var(--border);flex-shrink:0">
      <i class="ti ti-timeline" style="font-size:12px;color:var(--text4);flex-shrink:0"></i>
      <input type="range" id="tl-scrubber" min="0" max="100" step="0.05" value="0" style="flex:1;accent-color:var(--accent);cursor:pointer">
      <input type="text" id="tl-time" value="0.0" style="width:54px;background:var(--bg4);border:0.5px solid var(--border2);color:var(--text2);border-radius:5px;padding:2px 6px;font-size:11px;outline:none;text-align:center;font-variant-numeric:tabular-nums">
      <span id="tl-dur" style="font-size:10px;color:var(--text4);white-space:nowrap">/ 0.0s</span>
      <button id="btn-tl-close" style="all:unset;box-sizing:border-box;width:18px;height:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text3);border-radius:3px;flex-shrink:0" title="${t('close')}"><i class="ti ti-x" style="font-size:11px"></i></button>
    </div>
    <div class="filter-bar">
      <div class="filter-label"><i class="ti ti-filter"></i> ${t('filter')}</div>
      <div class="filter-dots" id="filter-dots"></div>
      <span class="filter-status" id="filter-status"></span>
      <div style="flex:1"></div>
      <div style="display:flex;align-items:center;gap:3px;padding-right:8px">
        <i class="ti ti-search" style="font-size:12px;color:var(--text4)"></i>
        <input id="board-search" type="text" placeholder="${t('search_ph')}" style="background:var(--bg4);border:0.5px solid var(--border2);color:var(--text2);border-radius:5px;padding:3px 8px;font-size:11px;outline:none;width:150px;transition:border-color .15s" value="${searchQuery}">
        <span id="search-count" style="font-size:10px;color:var(--accent-t);min-width:34px;text-align:center;display:none"></span>
        <button id="btn-search-prev" title="${t('search_prev_title')}" style="all:unset;box-sizing:border-box;width:18px;height:18px;display:none;align-items:center;justify-content:center;cursor:pointer;color:var(--text3);border-radius:3px"><i class="ti ti-chevron-up" style="font-size:10px"></i></button>
        <button id="btn-search-next" title="${t('search_next_title')}" style="all:unset;box-sizing:border-box;width:18px;height:18px;display:none;align-items:center;justify-content:center;cursor:pointer;color:var(--text3);border-radius:3px"><i class="ti ti-chevron-down" style="font-size:10px"></i></button>
        <button id="btn-search-clear" style="all:unset;box-sizing:border-box;width:18px;height:18px;display:none;align-items:center;justify-content:center;cursor:pointer;color:var(--text3);border-radius:3px"><i class="ti ti-x" style="font-size:10px"></i></button>
      </div>
    </div>
    <div class="board-canvas" id="board-canvas" tabindex="0">
      <canvas class="grid-cv" id="grid-cv"></canvas>
      <div id="sel-box" style="position:absolute;pointer-events:none;display:none;z-index:1000;box-sizing:border-box;border:1.5px dashed #5b9cf6;background:#5b9cf611;border-radius:3px"></div>
    </div>
    <button id="btn-map" class="btn-map-float"><i class="ti ti-map-2"></i> ${t('map_btn')}</button>
    <div id="minimap" class="minimap-float" style="display:none">
      <div class="minimap-header">
        <span style="font-size:10px;color:var(--text4);display:flex;align-items:center;gap:4px"><i class="ti ti-map-2"></i> ${t('map_btn')}</span>
        <button id="btn-minimap-close" class="minimap-close"><i class="ti ti-x"></i></button>
      </div>
      <canvas id="minimap-cv" width="220" height="150" style="display:block;cursor:crosshair"></canvas>
    </div>
    <div class="board-status">
      <span class="st-left" id="st-left">—</span>
      <div class="st-stat">
        <span class="st-lbl">${t('proj_size')}</span>
        <span class="st-val ok" id="st-size">—</span>
      </div>
      <span class="st-badge">VidBoards v1.2</span>
    </div>`;

  initBoardEvents();
  buildFilterBar();
  drawGrid();
  renderAllCards();
  updateStatus();
  updateTransport();
}

function initBoardEvents(){
  const canvas=document.getElementById('board-canvas');

  // Кнопка Label — кастомный drag на холст
  const labelBtn=document.getElementById('btn-add-label');
  let labelDrag=false,labelGhost=null;
  labelBtn.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    e.preventDefault();e.stopPropagation();
    labelDrag=true;
    labelGhost=document.createElement('div');
    labelGhost.className='tb-btn';
    labelGhost.innerHTML=labelBtn.innerHTML;
    labelGhost.style.cssText=`position:fixed;z-index:9999;pointer-events:none;opacity:0.85;transform:translate(-50%,-50%);left:${e.clientX}px;top:${e.clientY}px`;
    document.body.appendChild(labelGhost);
    labelBtn.style.opacity='0.4';
  });
  window.addEventListener('mousemove',e=>{
    if(!labelDrag||!labelGhost)return;
    labelGhost.style.left=e.clientX+'px';labelGhost.style.top=e.clientY+'px';
  });
  window.addEventListener('mouseup',e=>{
    if(!labelDrag)return;
    labelDrag=false;
    if(labelGhost){labelGhost.remove();labelGhost=null;}
    labelBtn.style.opacity='';
    const cvs=document.getElementById('board-canvas');if(!cvs)return;
    const rect=cvs.getBoundingClientRect();
    if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
      const world=toWorld(e.clientX-rect.left,e.clientY-rect.top);
      addLabel(world.wx,world.wy);
    }
  });

  // Кнопка Sticky — кастомный drag на холст
  const stickyBtn=document.getElementById('btn-add-sticky');
  let stickyDrag=false,stickyGhost=null;
  stickyBtn.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    e.preventDefault();e.stopPropagation();
    stickyDrag=true;
    stickyGhost=document.createElement('div');
    stickyGhost.className='tb-btn';
    stickyGhost.innerHTML=stickyBtn.innerHTML;
    stickyGhost.style.cssText=`position:fixed;z-index:9999;pointer-events:none;opacity:0.85;transform:translate(-50%,-50%);left:${e.clientX}px;top:${e.clientY}px`;
    document.body.appendChild(stickyGhost);
    stickyBtn.style.opacity='0.4';
  });
  window.addEventListener('mousemove',e=>{
    if(!stickyDrag||!stickyGhost)return;
    stickyGhost.style.left=e.clientX+'px';stickyGhost.style.top=e.clientY+'px';
  });
  window.addEventListener('mouseup',e=>{
    if(!stickyDrag)return;
    stickyDrag=false;
    if(stickyGhost){stickyGhost.remove();stickyGhost=null;}
    stickyBtn.style.opacity='';
    const cvs=document.getElementById('board-canvas');if(!cvs)return;
    const rect=cvs.getBoundingClientRect();
    if(e.clientX>=rect.left&&e.clientX<=rect.right&&e.clientY>=rect.top&&e.clientY<=rect.bottom){
      const world=toWorld(e.clientX-rect.left,e.clientY-rect.top);
      addSticky(world.wx,world.wy);
    }
  });

  document.getElementById('btn-undo').onclick=doUndo;
  document.getElementById('btn-redo').onclick=doRedo;
  document.getElementById('btn-save').onclick=saveBoardProject;
  document.getElementById('btn-save-png').onclick=openSavePngModal;
  document.getElementById('btn-play').onclick=()=>{if(seqMode&&multiSelCards.size>0){if(document.getElementById('seq-overlay')){closeSeqOverlay();}else{openSeqOverlay();}}else if(isPaused){doResume();}else{doPlay();}};
  document.getElementById('btn-pause').onclick=doPause;
  document.getElementById('btn-stop').onclick=doStop;
  document.getElementById('btn-loop').onclick=toggleLoop;
  document.getElementById('btn-opt').onclick=toggleOptimize;
  document.getElementById('btn-timeline').onclick=toggleTimeline;
  document.getElementById('btn-seq-mode').onclick=toggleSeqMode;
  document.getElementById('btn-map').onclick=toggleMinimap;
  document.getElementById('btn-minimap-close').onclick=toggleMinimap;
  const mmCv=document.getElementById('minimap-cv');
  let mmDragging=false,mmSnapState=null;
  const mmNavigate=(e,state)=>{
    const rect=mmCv.getBoundingClientRect();
    const mx=Math.max(0,Math.min(mmCv.width, e.clientX-rect.left));
    const my=Math.max(0,Math.min(mmCv.height,e.clientY-rect.top));
    const bd=document.getElementById('board-canvas');if(!bd)return;
    const {mmX1,mmY1,mmScale,offX,offY}=state;
    const wx=mmX1+(mx-offX)/mmScale,wy=mmY1+(my-offY)/mmScale;
    panX=bd.offsetWidth/2-wx*zoom;panY=bd.offsetHeight/2-wy*zoom;
    drawGrid();
    getBoardFiles().forEach(f=>{const c=document.getElementById('card-'+f.id);if(!c)return;const sc=toScreen(f.x,f.y);c.style.left=sc.sx+'px';c.style.top=sc.sy+'px';});
    getLabels().forEach(l=>{const el=document.getElementById('label-'+l.id);if(!el)return;const sc=toScreen(l.x,l.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
    getStickies().forEach(s=>{const el=document.getElementById('sticky-'+s.id);if(!el)return;const sc=toScreen(s.x,s.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
    drawMinimap();
  };
  mmCv.addEventListener('mousedown',e=>{mmDragging=true;mmSnapState=minimapState();mmNavigate(e,mmSnapState);});
  window.addEventListener('mousemove',e=>{if(mmDragging&&mmSnapState)mmNavigate(e,mmSnapState);});
  window.addEventListener('mouseup',()=>{mmDragging=false;mmSnapState=null;});
  mmCv.addEventListener('wheel',e=>{e.preventDefault();e.stopPropagation();const bd=document.getElementById('board-canvas');changeZoom(e.deltaY>0?-zoomStep:zoomStep,bd?bd.offsetWidth/2:undefined,bd?bd.offsetHeight/2:undefined);},{passive:false});
  document.getElementById('btn-tl-close').onclick=toggleTimeline;
  const tlScrubber=document.getElementById('tl-scrubber');
  const tlTime=document.getElementById('tl-time');
  tlScrubber.addEventListener('input',()=>{
    const tv=parseFloat(tlScrubber.value);
    if(document.activeElement!==tlTime)tlTime.value=tv.toFixed(1);
    seekAllToTime(tv);
  });
  tlTime.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      e.preventDefault();
      const tv=Math.max(0,Math.min(parseFloat(tlTime.value)||0,timelineDuration));
      tlTime.value=tv.toFixed(1);tlScrubber.value=tv;seekAllToTime(tv);
    }
    e.stopPropagation();
  });
  tlTime.addEventListener('blur',()=>{
    const tv=Math.max(0,Math.min(parseFloat(tlTime.value)||0,timelineDuration));
    tlTime.value=tv.toFixed(1);tlScrubber.value=tv;seekAllToTime(tv);
  });
  document.getElementById('btn-folder').onclick=addFolder;
  document.getElementById('btn-files').onclick=addFiles;
  document.getElementById('btn-snap').onclick=toggleSnap;
  const zoomFromCenter=delta=>{const cvs=document.getElementById('board-canvas');changeZoom(delta,cvs?cvs.offsetWidth/2:0,cvs?cvs.offsetHeight/2:0);};
  document.getElementById('btn-zoom-in').onclick=()=>zoomFromCenter(0.1);
  document.getElementById('btn-zoom-out').onclick=()=>zoomFromCenter(-0.1);
  const zoomLbl=document.getElementById('zoom-lbl');
  if(zoomLbl){zoomLbl.style.cursor='pointer';zoomLbl.title='100%';zoomLbl.onclick=()=>{const cvs=document.getElementById('board-canvas');changeZoom(1-zoom,cvs?cvs.offsetWidth/2:0,cvs?cvs.offsetHeight/2:0);};};

  document.addEventListener('keydown',onBoardKey);

  // Поиск
  const si=document.getElementById('board-search');
  si.addEventListener('input',e=>{searchQuery=e.target.value;searchHitIdx=0;applySearch();});
  si.addEventListener('keydown',e=>{
    if(e.key==='Enter'){e.preventDefault();e.shiftKey?prevSearchHit():nextSearchHit();}
    if(e.key==='Escape'){clearBoardSearch();}
    e.stopPropagation();
  });
  si.addEventListener('focus',()=>{si.style.borderColor='var(--accent)';});
  si.addEventListener('blur',()=>{si.style.borderColor='';});
  document.getElementById('btn-search-next').onclick=nextSearchHit;
  document.getElementById('btn-search-prev').onclick=prevSearchHit;
  document.getElementById('btn-search-clear').onclick=clearBoardSearch;

  // Drag & drop файлов И лейблов из тулбара
  canvas.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy';});
  canvas.addEventListener('drop',e=>{
    e.preventDefault();e.stopPropagation();
    // Файлы с диска
    const items=Array.from(e.dataTransfer.files);
    if(!items.length)return;
    const allowed=/\.(mp4|mov|webm|avi|mkv|png|jpg|jpeg|gif|webp|avif|svg|bmp)$/i;
    const media=items.filter(f=>allowed.test(f.name));
    if(!media.length)return;
    if(!boardProject){showHint(t('hint_no_project'));return;}
    const rect=canvas.getBoundingClientRect();
    const _dw=toWorld(e.clientX-rect.left,e.clientY-rect.top);
    const dropWorld={wx:_dw.wx-110,wy:_dw.wy-77};
    snapshot();
    (async()=>{
      const COLS=3,STEP_X=256,GAP_Y=16;
      const addedObjs=[];
      for(let i=0;i<media.length;i++){
        const fp=api.getPathForFile(media[i])||media[i].name;
        if(!fp)continue;
        const col=i%COLS,row=Math.floor(i/COLS);
        await addFileToBoard(fp,dropWorld.wx+col*STEP_X,dropWorld.wy);
        const allF=getBoardFiles();addedObjs.push({f:allF[allF.length-1],col,row});
      }
      if(addedObjs.length){
        const numRows=addedObjs[addedObjs.length-1].row+1;
        const rowH=Array(numRows).fill(0);
        addedObjs.forEach(({f,row})=>{rowH[row]=Math.max(rowH[row],f.h);});
        const rowY=Array(numRows).fill(0);
        for(let r=1;r<numRows;r++)rowY[r]=rowY[r-1]+rowH[r-1]+GAP_Y;
        addedObjs.forEach(({f,row})=>{f.y=dropWorld.wy+rowY[row];});
      }
      addedObjs.forEach(({f})=>makeCard(f));applySearch();drawMinimap();updateStatus();saveBoardProject();
      clearMultiSel();
      if(addedObjs.length===1){selectedCardId=addedObjs[0].f.id;const el=document.getElementById('card-'+addedObjs[0].f.id);if(el)el.classList.add('selected');}
      else if(addedObjs.length>1){addedObjs.forEach(({f})=>{multiSelCards.add(f.id);const el=document.getElementById('card-'+f.id);if(el)el.classList.add('selected');});refreshMultiSelBorders();}
      showHint(`${t('hint_added')} ${media.length} ${t('files_lbl')}`);
    })();
  });

  // Пан мышью — левая кнопка по фону, средняя — по всему холсту
  let panning=false,panSX=0,panSY=0;
  let selBoxing=false,selSX=0,selSY=0,selBoxMode='replace';
  canvas.addEventListener('mousedown',e=>{
    if(e.target!==canvas&&e.target!==document.getElementById('grid-cv'))return;
    if(e.button!==0)return;
    closeCtx();
    if(e.ctrlKey){
      const rect=canvas.getBoundingClientRect();
      selBoxMode=e.shiftKey?'add':e.altKey?'subtract':'replace';
      selBoxing=true;selSX=e.clientX-rect.left;selSY=e.clientY-rect.top;
      const box=document.getElementById('sel-box');
      if(box){
        const bc=selBoxMode==='add'?'#22c55e':selBoxMode==='subtract'?'#ef4444':'#5b9cf6';
        const bg=selBoxMode==='add'?'#22c55e11':selBoxMode==='subtract'?'#ef444411':'#5b9cf611';
        box.style.border=`1.5px dashed ${bc}`;box.style.background=bg;
        box.style.left=selSX+'px';box.style.top=selSY+'px';box.style.width='0';box.style.height='0';box.style.display='block';
      }
      return;
    }
    clearMultiSel();
    panning=true;panSX=e.clientX-panX;panSY=e.clientY-panY;
  });
  // Средняя кнопка — перемещение поверх любых элементов
  window.addEventListener('mousedown',e=>{
    if(e.button!==1)return;
    const cvs=document.getElementById('board-canvas');if(!cvs)return;
    const rect=cvs.getBoundingClientRect();
    if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)return;
    e.preventDefault();
    panning=true;panSX=e.clientX-panX;panSY=e.clientY-panY;
    document.body.style.cursor='grabbing';
  });
  canvas.addEventListener('auxclick',e=>{if(e.button===1)e.preventDefault();});
  window.addEventListener('mousemove',e=>{
    const _cvs=document.getElementById('board-canvas');
    if(_cvs){const _r=_cvs.getBoundingClientRect();const _w=toWorld(e.clientX-_r.left,e.clientY-_r.top);lastMouseWX=_w.wx;lastMouseWY=_w.wy;}
    if(selBoxing){
      const rect=canvas.getBoundingClientRect();
      const cx=e.clientX-rect.left,cy=e.clientY-rect.top;
      const box=document.getElementById('sel-box');
      if(box){box.style.left=Math.min(cx,selSX)+'px';box.style.top=Math.min(cy,selSY)+'px';box.style.width=Math.abs(cx-selSX)+'px';box.style.height=Math.abs(cy-selSY)+'px';}
      return;
    }
    if(!panning)return;
    panX=e.clientX-panSX;panY=e.clientY-panSY;drawGrid();
    getBoardFiles().forEach(f=>{const c=document.getElementById('card-'+f.id);if(!c)return;const sc=toScreen(f.x,f.y);c.style.left=sc.sx+'px';c.style.top=sc.sy+'px';});
    getLabels().forEach(l=>{const el=document.getElementById('label-'+l.id);if(!el)return;const sc=toScreen(l.x,l.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
    getStickies().forEach(s=>{const el=document.getElementById('sticky-'+s.id);if(!el)return;const sc=toScreen(s.x,s.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
    drawMinimap();
  });
  window.addEventListener('mouseup',e=>{
    if(selBoxing){
      selBoxing=false;
      const box=document.getElementById('sel-box');
      if(box){finalizeSelBox(parseFloat(box.style.left)||0,parseFloat(box.style.top)||0,parseFloat(box.style.width)||0,parseFloat(box.style.height)||0,selBoxMode);box.style.display='none';}
      return;
    }
    panning=false;if(e.button===1)document.body.style.cursor='';
  });
  canvas.addEventListener('wheel',e=>{
    e.preventDefault();
    const rect=canvas.getBoundingClientRect();
    changeZoom(e.deltaY>0?-zoomStep:zoomStep,e.clientX-rect.left,e.clientY-rect.top);
  },{passive:false});
  window.addEventListener('resize',drawGrid);
  const CURSOR_ADD="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%2322c55e' fill-opacity='.2' stroke='%2316a34a' stroke-width='1.5'/%3E%3Cpath d='M12 8v8M8 12h8' stroke='%2316a34a' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 12 12, crosshair";
  const CURSOR_SUB="url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%23ef4444' fill-opacity='.2' stroke='%23dc2626' stroke-width='1.5'/%3E%3Cpath d='M8 12h8' stroke='%23dc2626' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 12 12, default";
  function updateSelCursor(e){const cvs=document.getElementById('board-canvas');if(!cvs)return;if(!e.ctrlKey){cvs.style.cursor='';return;}if(e.shiftKey){cvs.style.cursor=CURSOR_ADD;return;}if(e.altKey){cvs.style.cursor=CURSOR_SUB;return;}cvs.style.cursor='default';}
  document.addEventListener('keydown',e=>{if(['Control','Shift','Alt'].includes(e.key))updateSelCursor(e);});
  document.addEventListener('keyup',e=>{if(['Control','Shift','Alt'].includes(e.key))updateSelCursor(e);});

  // Ctrl+V — вставка файлов/изображений/текста из буфера на холст
  const PASTE_ALLOWED=/\.(mp4|mov|webm|avi|mkv|png|jpg|jpeg|gif|webp|avif|svg|bmp)$/i;
  const pasteAddFiles=async filePaths=>{
    snapshot();const addedObjs=[];
    for(let i=0;i<filePaths.length;i++){
      await addFileToBoard(filePaths[i],lastMouseWX+i*256,lastMouseWY);
      const allF=getBoardFiles();addedObjs.push(allF[allF.length-1]);
    }
    addedObjs.forEach(f=>makeCard(f));
    applySearch();drawMinimap();updateStatus();saveBoardProject();
    clearMultiSel();
    if(addedObjs.length===1){selectedCardId=addedObjs[0].id;const el=document.getElementById('card-'+addedObjs[0].id);if(el)el.classList.add('selected');}
    else if(addedObjs.length>1){addedObjs.forEach(f=>{multiSelCards.add(f.id);const el=document.getElementById('card-'+f.id);if(el)el.classList.add('selected');});refreshMultiSelBorders();}
    showHint(`${t('hint_added')} ${filePaths.length} ${t('files_lbl')}`);
  };
  window.addEventListener('paste',async e=>{
    if(!boardProject)return;
    const active=document.activeElement;
    if(active&&(active.tagName==='INPUT'||active.tagName==='TEXTAREA'))return;

    // 1. Файлы из Проводника
    if(e.clipboardData.files.length>0){
      const fps=[...e.clipboardData.files].map(f=>api.getPathForFile(f)).filter(p=>p&&PASTE_ALLOWED.test(p));
      if(fps.length){e.preventDefault();await pasteAddFiles(fps);return;}
    }

    // 2. Текст → лейбл
    const txt=e.clipboardData.getData('text/plain');
    if(txt&&txt.trim()){
      e.preventDefault();
      addLabel(lastMouseWX,lastMouseWY,txt.trim());
      saveBoardProject();return;
    }

    // 3. Изображение из буфера (скриншот)
    e.preventDefault();
    const p=await api.pasteClipboardImage();
    if(p)await pasteAddFiles([p]);
  });
}

let lastSpaceTime=0;
function onBoardKey(e){
  if(!boardProject)return;
  const code=e.code;
  if((e.ctrlKey||e.metaKey)&&!e.shiftKey&&code==='KeyZ'){e.preventDefault();doUndo();return;}
  if((e.ctrlKey||e.metaKey)&&e.shiftKey&&code==='KeyZ'){e.preventDefault();doRedo();return;}
  if((e.ctrlKey||e.metaKey)&&code==='KeyS'){e.preventDefault();saveBoardProject();return;}
  if((e.ctrlKey||e.metaKey)&&code==='KeyF'){e.preventDefault();const si=document.getElementById('board-search');if(si){si.focus();si.select();}return;}
  if((e.ctrlKey||e.metaKey)&&code==='KeyR'){
    e.preventDefault();
    if(selectedCardId!==null){const f=getBoardFiles().find(f=>f.id===selectedCardId);if(f)renameCardModal(f);}
    else if(selectedLabelId!==null){const el=document.getElementById('label-'+selectedLabelId);if(el){const sp=el.querySelector('.label-text');if(sp){sp.contentEditable='true';sp.style.cursor='text';el.style.cursor='text';sp.focus();const rng=document.createRange();rng.selectNodeContents(sp);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(rng);}}}
    else if(selectedStickyId!==null){const el=document.getElementById('sticky-'+selectedStickyId);if(el){const sp=el.querySelector('.sticky-text');if(sp){sp.contentEditable='true';sp.style.cursor='text';el.style.cursor='text';sp.focus();const rng=document.createRange();rng.selectNodeContents(sp);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(rng);}}}
    return;
  }
  if(e.code==='Space'){
    if(document.activeElement.tagName==='INPUT'||document.activeElement.contentEditable==='true')return;
    e.preventDefault();
    const now=Date.now();
    if(now-lastSpaceTime<300){lastSpaceTime=0;doStop();return;}
    lastSpaceTime=now;
    if(document.getElementById('seq-overlay')){closeSeqOverlay();}
    else if(isPlaying){doPause();}
    else if(isPaused){doResume();}
    else if(seqMode&&multiSelCards.size>0){openSeqOverlay();}
    else{doPlay();}
    return;
  }
  if(e.key==='Escape'){
    if(searchQuery){clearBoardSearch();return;}
    clearMultiSel();return;
  }
  if(e.key==='Delete'||e.key==='Backspace'){
    if(document.activeElement.tagName==='INPUT'||document.activeElement.contentEditable==='true')return;
    e.preventDefault();
    if(hasMultiSel()){
      snapshot();
      multiSelLabels.forEach(id=>{boardProject.labels=getLabels().filter(l=>l.id!==id);const el=document.getElementById('label-'+id);if(el)el.remove();});
      multiSelCards.forEach(id=>{boardProject.files=(boardProject.files||[]).filter(f=>f.id!==id);const el=document.getElementById('card-'+id);if(el)el.remove();});
      multiSelStickies.forEach(id=>{boardProject.stickies=getStickies().filter(s=>s.id!==id);const el=document.getElementById('sticky-'+id);if(el)el.remove();});
      clearMultiSel();updateStatus();applyFilter();return;
    }
    if(selectedStickyId!==null){
      snapshot();
      const sel=document.getElementById('sticky-'+selectedStickyId);if(sel)sel.remove();
      boardProject.stickies=getStickies().filter(s=>s.id!==selectedStickyId);
      selectedStickyId=null;return;
    }
    if(selectedLabelId!==null){
      snapshot();
      boardProject.labels=getLabels().filter(l=>l.id!==selectedLabelId);
      const el=document.getElementById('label-'+selectedLabelId);if(el)el.remove();
      selectedLabelId=null;return;
    }
    if(selectedCardId!==null){deleteCard(selectedCardId);return;}
    return;
  }
  if((e.ctrlKey||e.metaKey)&&code==='KeyD'){
    e.preventDefault();
    if(hasMultiSel()){
      snapshot();
      const anyActive=Array.from(multiSelCards).some(id=>{const f=getBoardFiles().find(f=>f.id===id);return f&&!f.disabled;});
      multiSelCards.forEach(id=>{const f=getBoardFiles().find(f=>f.id===id);if(f){f.disabled=anyActive;refreshCard(f);}});
      updateStatus();return;
    }
    const f=getBoardFiles().find(f=>f.id===selectedCardId);if(f)toggleDisabled(f);
  }
}

// ── ФАЙЛЫ ────────────────────────────────────────────────────────────
function getBoardFiles(){return boardProject?(boardProject.files||[]):[]; }

function viewportGridOrigin(){
  const cvs=document.getElementById('board-canvas');
  const wx=((cvs?cvs.offsetWidth/2:400)-panX)/zoom;
  const wy=((cvs?cvs.offsetHeight/2:300)-panY)/zoom;
  return snapW(wx,wy);
}
async function addFiles(){
  const paths=await api.openFiles();if(!paths.length)return;
  const COLS=3,STEP_X=256,STEP_Y=200;
  const orig=viewportGridOrigin();
  snapshot();
  const prevCount=getBoardFiles().length;
  for(let i=0;i<paths.length;i++){
    const col=i%COLS,row=Math.floor(i/COLS);
    await addFileToBoard(paths[i],orig.wx+col*STEP_X,orig.wy+row*STEP_Y);
  }
  const added=getBoardFiles().slice(prevCount);
  added.forEach(f=>makeCard(f));applySearch();drawMinimap();updateStatus();saveBoardProject();
  clearMultiSel();
  if(added.length===1){selectedCardId=added[0].id;const el=document.getElementById('card-'+added[0].id);if(el)el.classList.add('selected');}
  else if(added.length>1){added.forEach(f=>{multiSelCards.add(f.id);const el=document.getElementById('card-'+f.id);if(el)el.classList.add('selected');});refreshMultiSelBorders();}
}
async function addFolder(){
  const paths=await api.openFolder();if(!paths.length)return;
  const COLS=3,STEP_X=256,STEP_Y=200;
  const orig=viewportGridOrigin();
  snapshot();
  const prevCount=getBoardFiles().length;
  for(let i=0;i<paths.length;i++){
    const col=i%COLS,row=Math.floor(i/COLS);
    await addFileToBoard(paths[i],orig.wx+col*STEP_X,orig.wy+row*STEP_Y);
  }
  const added=getBoardFiles().slice(prevCount);
  added.forEach(f=>makeCard(f));applySearch();drawMinimap();updateStatus();saveBoardProject();
  clearMultiSel();
  if(added.length===1){selectedCardId=added[0].id;const el=document.getElementById('card-'+added[0].id);if(el)el.classList.add('selected');}
  else if(added.length>1){added.forEach(f=>{multiSelCards.add(f.id);const el=document.getElementById('card-'+f.id);if(el)el.classList.add('selected');});refreshMultiSelBorders();}
}

async function addFileToBoard(filePath,dropX,dropY){
  const isVid=/\.(mp4|mov|webm|avi|mkv)$/i.test(filePath);
  const info=await api.fileInfo(filePath);
  const name=filePath.split(/[\\/]/).pop().replace(/\.[^.]+$/,'');
  const files=getBoardFiles();
  const id=Date.now()+Math.random();
  const cols=3,margin=16,cellW=240;
  const idx=files.length,col=idx%cols,row=Math.floor(idx/cols);
  const cardW=220;
  const x=dropX!==undefined?dropX:margin+col*(cellW+margin);
  const y=dropY!==undefined?dropY:margin+row*(180+margin);
  const fileObj={id,name,orig:filePath,type:isVid?'v':'i',w:cardW,h:isVid?155:140,x,y,color:'none',disabled:false,missing:false,sizeMB:Math.round((info.size||0)/1024/1024)};
  files.push(fileObj);
  addRecentFile(filePath,info.size);
  // Определяем пропорции
  await new Promise(resolve=>{
    const url=fileToUrl(filePath);
    if(isVid){
      const tmp=document.createElement('video');tmp.preload='metadata';tmp.src=url;
      tmp.onloadedmetadata=()=>{if(tmp.videoWidth>0)fileObj.h=Math.round(cardW*(tmp.videoHeight/tmp.videoWidth))+32;if(tmp.duration&&isFinite(tmp.duration))fileObj.duration=tmp.duration;tmp.src='';resolve();};
      tmp.onerror=resolve;setTimeout(resolve,3000);
    } else {
      const tmp=new Image();tmp.src=url;
      tmp.onload=()=>{if(tmp.naturalWidth>0)fileObj.h=Math.round(cardW*(tmp.naturalHeight/tmp.naturalWidth))+32;resolve();};
      tmp.onerror=resolve;setTimeout(resolve,3000);
    }
  });
}

// ── UNDO/REDO ────────────────────────────────────────────────────────
function snapshot(){
  if(!boardProject)return;
  boardProject._dirty=true;
  undoStack.push(JSON.stringify({files:boardProject.files,labels:boardProject.labels||[],stickies:boardProject.stickies||[]}));
  if(undoStack.length>MAX_UNDO)undoStack.shift();
  redoStack.length=0;updateUndoBtns();
}
function updateUndoBtns(){
  const u=document.getElementById('btn-undo'),r=document.getElementById('btn-redo');
  if(u)u.disabled=!undoStack.length;if(r)r.disabled=!redoStack.length;
}
function snapState(){return JSON.stringify({files:boardProject.files,labels:boardProject.labels||[],stickies:boardProject.stickies||[]});}
function restoreSnap(snap){
  const s=JSON.parse(snap);boardProject.files=s.files||[];boardProject.labels=s.labels||[];boardProject.stickies=s.stickies||[];
  renderAllCards();updateStatus();updateUndoBtns();
}
function doUndo(){if(!undoStack.length)return;redoStack.push(snapState());restoreSnap(undoStack.pop());showHint(t('undo'));}
function doRedo(){if(!redoStack.length)return;undoStack.push(snapState());restoreSnap(redoStack.pop());showHint(t('redo'));}

// ── ТРАНСПОРТ ────────────────────────────────────────────────────────
function isCardVisible(f){
  const canvas=document.getElementById('board-canvas');if(!canvas)return true;
  const cw=canvas.offsetWidth,ch=canvas.offsetHeight;
  const sc=toScreen(f.x,f.y);
  return sc.sx+f.w*zoom>0&&sc.sx<cw&&sc.sy+f.h*zoom>0&&sc.sy<ch;
}
async function doPlay(){
  isPlaying=true;isPaused=false;
  const all=getBoardFiles().filter(f=>f.type==='v'&&!f.disabled&&!f.missing);
  const toPlay=optimizePlay?all.filter(isCardVisible):all;
  const videos=[];
  toPlay.forEach(f=>{const v=document.getElementById('card-'+f.id)?.querySelector('video');if(v)videos.push({v,f});});
  videos.forEach(({v})=>{v.pause();v.loop=timelineActive?false:loopEnabled;});
  // Wait for all seeks to complete before firing play — prevents desync on repeat playback
  await Promise.all(videos.map(({v})=>{
    if(v.currentTime===0)return Promise.resolve();
    return new Promise(resolve=>{
      const t=setTimeout(resolve,500);
      v.addEventListener('seeked',()=>{clearTimeout(t);resolve();},{once:true});
      v.currentTime=0;
    });
  }));
  if(!isPlaying)return; // user hit Stop while we were seeking
  videos.forEach(({v,f})=>{
    if(timelineActive){
      v.addEventListener('ended',()=>{
        v.pause();
        const lf=document.getElementById('lf-'+f.id);if(lf)lf.style.display='';
      },{once:true});
    }
    v.play().catch(()=>{});
  });
  const hint=`${t('hint_play')} (${toPlay.length})${loopEnabled?' · loop':''}${optimizePlay?' · opt':''}${timelineActive?' · tl':''}`;
  showHint(hint);updateTransport();
  if(timelineActive)startTimelineRAF();
}
function doPause(){
  if(document.getElementById('seq-overlay'))return;
  isPlaying=false;isPaused=true;
  stopTimelineRAF();
  document.querySelectorAll('.board-canvas video').forEach(v=>v.pause());
  showHint(t('pause_all'));updateTransport();
}
function doResume(){
  isPlaying=true;isPaused=false;
  const all=getBoardFiles().filter(f=>f.type==='v'&&!f.disabled&&!f.missing);
  const toPlay=optimizePlay?all.filter(isCardVisible):all;
  toPlay.forEach(f=>{const v=document.getElementById('card-'+f.id)?.querySelector('video');if(v){v.loop=timelineActive?false:loopEnabled;v.play().catch(()=>{});}});
  showHint(t('hint_resume'));updateTransport();
  if(timelineActive)startTimelineRAF();
}
function doStop(){
  isPlaying=false;isPaused=false;
  stopTimelineRAF();
  document.querySelectorAll('.board-canvas video').forEach(v=>{v.pause();v.currentTime=0;});
  document.querySelectorAll('[id^="lf-"]').forEach(el=>el.style.display='none');
  if(timelineActive){
    const sc=document.getElementById('tl-scrubber');const ti=document.getElementById('tl-time');
    if(sc)sc.value=0;if(ti)ti.value='0.0';
  }
  showHint(t('stop_all'));updateTransport();
}
function toggleLoop(){
  loopEnabled=!loopEnabled;
  document.querySelectorAll('.board-canvas video').forEach(v=>{v.loop=loopEnabled;});
  updateTransport();
  showHint(loopEnabled?t('loop_on'):t('loop_off'));
}
function toggleOptimize(){
  optimizePlay=!optimizePlay;
  updateTransport();
  showHint(optimizePlay?t('opt_on'):t('opt_off'));
}
function getTimelineDuration(){
  const files=getBoardFiles().filter(f=>f.type==='v'&&!f.disabled&&!f.missing);
  let max=0;
  files.forEach(f=>{
    const v=document.getElementById('card-'+f.id)?.querySelector('video');
    if(v&&v.duration&&isFinite(v.duration))max=Math.max(max,v.duration);
  });
  return max||100;
}
function seekAllToTime(t){
  const files=getBoardFiles().filter(f=>f.type==='v'&&!f.disabled&&!f.missing);
  const toSeek=optimizePlay?files.filter(isCardVisible):files;
  toSeek.forEach(f=>{
    const v=document.getElementById('card-'+f.id)?.querySelector('video');
    if(!v)return;
    const dur=isFinite(v.duration)?v.duration:Infinity;
    v.currentTime=Math.min(t,dur);
    const lf=document.getElementById('lf-'+f.id);
    if(lf)lf.style.display=t>=dur?'':'none';
  });
}
function startTimelineRAF(){
  stopTimelineRAF();
  function tick(){
    if(!timelineActive||!isPlaying){timelineRAF=null;return;}
    const files=getBoardFiles().filter(f=>f.type==='v'&&!f.disabled&&!f.missing);
    const toCheck=optimizePlay?files.filter(isCardVisible):files;
    let master=null;
    for(const f of toCheck){
      const v=document.getElementById('card-'+f.id)?.querySelector('video');
      if(v&&!v.paused){master=v;break;}
    }
    if(master){
      const ct=master.currentTime;
      const sc=document.getElementById('tl-scrubber');
      const ti=document.getElementById('tl-time');
      if(sc)sc.value=ct;
      if(ti&&document.activeElement!==ti)ti.value=ct.toFixed(1);
    }
    timelineRAF=requestAnimationFrame(tick);
  }
  timelineRAF=requestAnimationFrame(tick);
}
function stopTimelineRAF(){
  if(timelineRAF){cancelAnimationFrame(timelineRAF);timelineRAF=null;}
}
function toggleTimeline(){
  isPlaying=false;isPaused=false;
  stopTimelineRAF();
  document.querySelectorAll('.board-canvas video').forEach(v=>{v.pause();v.currentTime=0;});
  document.querySelectorAll('[id^="lf-"]').forEach(el=>el.style.display='none');
  timelineActive=!timelineActive;
  if(timelineActive&&seqMode){seqMode=false;closeSeqOverlay();updateTransport();}
  const bar=document.getElementById('timeline-bar');
  if(bar)bar.style.display=timelineActive?'flex':'none';
  const sc=document.getElementById('tl-scrubber');
  const ti=document.getElementById('tl-time');
  const dur=document.getElementById('tl-dur');
  if(sc)sc.value=0;
  if(ti)ti.value='0.0';
  if(timelineActive){
    timelineDuration=getTimelineDuration();
    if(sc)sc.max=timelineDuration;
    if(dur)dur.textContent='/ '+timelineDuration.toFixed(1)+'s';
  }
  updateTransport();
  showHint(timelineActive?t('timeline_on'):t('timeline_off'));
}
function updateTransport(){
  const pb=document.getElementById('btn-play'),ppb=document.getElementById('btn-pause'),
        sb=document.getElementById('btn-stop'),lb=document.getElementById('btn-loop'),
        ob=document.getElementById('btn-opt'),tb=document.getElementById('btn-timeline');
  if(!pb)return;
  pb.classList.toggle('transport-active',isPlaying&&!isPaused);
  if(ppb)ppb.classList.toggle('transport-pause',isPaused);
  sb.classList.toggle('transport-stop',!isPlaying&&!isPaused);
  if(lb)lb.classList.toggle('loop-active',loopEnabled);
  if(ob)ob.classList.toggle('snap',optimizePlay);
  if(tb)tb.classList.toggle('loop-active',timelineActive);
  const sm=document.getElementById('btn-seq-mode');
  if(sm)sm.classList.toggle('loop-active',seqMode);
}

// ── SEQUENCE MODE ────────────────────────────────────────────────────
function toggleSeqMode(){
  seqMode=!seqMode;
  if(seqMode&&timelineActive)toggleTimeline();
  if(!seqMode){clearMultiSel();closeSeqOverlay();}
  isPlaying=false;isPaused=false;
  updateTransport();
  showHint(seqMode?(lang==='ru'?'Режим секвенции: выбирайте ролики через Ctrl+клик':'Sequence mode: Ctrl+click clips to order them'):(lang==='ru'?'Режим секвенции выключен':'Sequence mode off'));
}
function openSeqOverlay(){
  closeSeqOverlay();
  const clips=[];
  multiSelCards.forEach(id=>{
    const f=getBoardFiles().find(f=>f.id===id);
    if(!f||f.disabled||f.missing)return;
    clips.push({url:fileToUrl(f.orig),name:f.name,type:f.type});
  });
  if(!clips.length){showHint(lang==='ru'?'Нет выделенных элементов':'No items selected');return;}
  const ov=document.createElement('div');ov.id='seq-overlay';
  const box=document.createElement('div');box.id='seq-player-box';
  const title=document.createElement('div');title.id='seq-title';title.textContent=lang==='ru'?'Просмотр секвенции':'Sequence preview';
  const navRow=document.createElement('div');navRow.id='seq-nav-row';
  const prevBtn=document.createElement('button');prevBtn.className='seq-ctrl-btn seq-nav-btn';prevBtn.title=lang==='ru'?'Предыдущий':'Previous';
  prevBtn.innerHTML='<i class="ti ti-chevron-left"></i>';
  const counter=document.createElement('div');counter.id='seq-counter';
  const nextBtn=document.createElement('button');nextBtn.className='seq-ctrl-btn seq-nav-btn';nextBtn.title=lang==='ru'?'Следующий':'Next';
  nextBtn.innerHTML='<i class="ti ti-chevron-right"></i>';
  navRow.appendChild(prevBtn);navRow.appendChild(counter);navRow.appendChild(nextBtn);
  const mediaWrap=document.createElement('div');mediaWrap.style.cssText='position:relative;display:flex;align-items:center;justify-content:center;';
  const vid=document.createElement('video');vid.id='seq-video';vid.controls=true;
  const img=document.createElement('img');img.id='seq-image';
  img.style.cssText='max-width:70vw;max-height:65vh;border-radius:8px;object-fit:contain;display:none;background:#000;';
  const imgBadge=document.createElement('div');
  imgBadge.style.cssText='position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.65);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.08em;padding:4px 12px;border-radius:20px;pointer-events:none;display:none;';
  imgBadge.textContent=lang==='ru'?'ИЗОБРАЖЕНИЕ':'IMAGE';
  mediaWrap.appendChild(vid);mediaWrap.appendChild(img);mediaWrap.appendChild(imgBadge);
  const ctrlRow=document.createElement('div');ctrlRow.id='seq-ctrl-row';
  const playBtn=document.createElement('button');playBtn.className='seq-ctrl-btn';playBtn.title=lang==='ru'?'Играть с начала':'Play from start';
  playBtn.innerHTML='<i class="ti ti-player-play-filled"></i>';
  const stopBtn=document.createElement('button');stopBtn.className='seq-ctrl-btn';stopBtn.title=lang==='ru'?'Стоп':'Stop';
  stopBtn.innerHTML='<i class="ti ti-player-stop-filled"></i>';
  const loopBtn=document.createElement('button');loopBtn.className='seq-ctrl-btn';loopBtn.title='Loop';
  loopBtn.innerHTML='<i class="ti ti-repeat"></i>';
  loopBtn.classList.toggle('seq-ctrl-active',loopEnabled);
  loopBtn.onclick=()=>{loopEnabled=!loopEnabled;loopBtn.classList.toggle('seq-ctrl-active',loopEnabled);updateTransport();};
  const closeBtn=document.createElement('button');closeBtn.id='seq-close-btn';
  closeBtn.innerHTML=`<i class="ti ti-x"></i> ${lang==='ru'?'Закрыть':'Close'}`;
  closeBtn.onclick=closeSeqOverlay;
  ctrlRow.appendChild(playBtn);ctrlRow.appendChild(stopBtn);ctrlRow.appendChild(loopBtn);ctrlRow.appendChild(closeBtn);
  box.appendChild(title);box.appendChild(navRow);box.appendChild(mediaWrap);box.appendChild(ctrlRow);
  ov.appendChild(box);document.body.appendChild(ov);
  let curIdx=0,seqPlaying=false;
  function clearImgTimer(){if(seqImgTimer){clearTimeout(seqImgTimer);seqImgTimer=null;}}
  function setPlaying(v){seqPlaying=v;playBtn.classList.toggle('seq-ctrl-active',v);stopBtn.classList.toggle('seq-ctrl-active',!v);}
  function updateNavBtns(){prevBtn.disabled=curIdx===0;nextBtn.disabled=curIdx===clips.length-1;}
  function advance(){
    if(curIdx+1<clips.length){goTo(curIdx+1);}
    else if(loopEnabled){goTo(0);}
    else{setPlaying(false);updateNavBtns();}
  }
  function goTo(i){
    curIdx=i;
    clearImgTimer();
    setPlaying(true);
    const clip=clips[curIdx];
    counter.textContent=`${curIdx+1} / ${clips.length}  —  ${clip.name}`;
    if(clip.type==='v'){
      vid.onended=null;
      img.style.display='none';imgBadge.style.display='none';
      vid.style.display='block';
      vid.src=clip.url;vid.play().catch(()=>{});
      vid.onended=advance;
    } else {
      vid.pause();vid.onended=null;vid.src='';vid.style.display='none';
      img.src=clip.url;
      img.style.display='block';imgBadge.style.display='block';
      seqImgTimer=setTimeout(advance,seqImageDuration*1000);
    }
    updateNavBtns();
  }
  function stopAll(){clearImgTimer();vid.pause();vid.onended=null;setPlaying(false);}
  playBtn.onclick=()=>{stopAll();goTo(0);};
  stopBtn.onclick=()=>{stopAll();};
  prevBtn.onclick=()=>{if(curIdx>0){stopAll();goTo(curIdx-1);}};
  nextBtn.onclick=()=>{if(curIdx<clips.length-1){stopAll();goTo(curIdx+1);}};
  goTo(0);
}
function closeSeqOverlay(){
  const ov=document.getElementById('seq-overlay');if(!ov)return;
  if(seqImgTimer){clearTimeout(seqImgTimer);seqImgTimer=null;}
  const v=ov.querySelector('video');if(v){v.pause();v.src='';}
  ov.remove();
}

// ── MINIMAP ──────────────────────────────────────────────────────────
function toggleMinimap(){
  minimapActive=!minimapActive;
  const mm=document.getElementById('minimap'),btn=document.getElementById('btn-map');
  if(mm)mm.style.display=minimapActive?'block':'none';
  if(btn)btn.style.display=minimapActive?'none':'flex';
  if(minimapActive)drawMinimap();
}
function minimapState(){
  const cv=document.getElementById('minimap-cv');
  const W=cv?cv.width:220,H=cv?cv.height:150;
  const files=getBoardFiles(),stickies=getStickies();
  let x1=Infinity,y1=Infinity,x2=-Infinity,y2=-Infinity;
  files.forEach(f=>{x1=Math.min(x1,f.x);y1=Math.min(y1,f.y);x2=Math.max(x2,f.x+f.w);y2=Math.max(y2,f.y+f.h);});
  stickies.forEach(s=>{x1=Math.min(x1,s.x);y1=Math.min(y1,s.y);x2=Math.max(x2,s.x+s.w);y2=Math.max(y2,s.y+s.h);});
  // Viewport НЕ включаем в bbox — иначе при drag к краям bbox расширяется,
  // mmScale пересчитывается и позиция прыгает (feedback loop)
  if(!isFinite(x1)){x1=-400;y1=-300;x2=400;y2=300;}
  const padX=(x2-x1)*0.15,padY=(y2-y1)*0.15;
  x1-=padX;y1-=padY;x2+=padX;y2+=padY;
  const bw=x2-x1,bh=y2-y1;
  const mmScale=Math.min(W/bw,H/bh);
  const offX=(W-bw*mmScale)/2,offY=(H-bh*mmScale)/2;
  const bd=document.getElementById('board-canvas');
  const vpTL=toWorld(0,0),vpBR=toWorld(bd?bd.offsetWidth:800,bd?bd.offsetHeight:600);
  return{mmX1:x1,mmY1:y1,mmScale,offX,offY,vpTL,vpBR};
}
function drawMinimap(){
  if(!minimapActive)return;
  const cv=document.getElementById('minimap-cv');if(!cv)return;
  const ctx=cv.getContext('2d');
  const W=cv.width,H=cv.height;
  const{mmX1,mmY1,mmScale,offX,offY,vpTL,vpBR}=minimapState();
  const toMM=(wx,wy)=>({mx:offX+(wx-mmX1)*mmScale,my:offY+(wy-mmY1)*mmScale});

  // Фон — тема
  const isLight=theme==='light';
  ctx.fillStyle=isLight?'#f4f5f8':'#0c0e14';ctx.fillRect(0,0,W,H);

  // Тонкая сетка
  ctx.strokeStyle=isLight?'rgba(0,0,0,0.06)':'rgba(255,255,255,0.04)';ctx.lineWidth=0.5;
  const gs=GRID*mmScale;
  const ox=((offX-mmX1*mmScale)%gs+gs)%gs,oy=((offY-mmY1*mmScale)%gs+gs)%gs;
  for(let x=ox;x<W;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=oy;y<H;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}

  // Карточки
  getBoardFiles().forEach(f=>{
    const{mx,my}=toMM(f.x,f.y);
    const mw=Math.max(2,f.w*mmScale),mh=Math.max(2,(f.h-32)*mmScale);
    if(f.type==='v'){ctx.fillStyle=f.disabled?(isLight?'#ccc':'#222'):(isLight?'#c8ecd8':'#1c3f2a');ctx.strokeStyle=f.disabled?(isLight?'#aaa':'#3a3a3a'):'#4caf7d';}
    else{ctx.fillStyle=f.disabled?(isLight?'#ccc':'#222'):(isLight?'#c8d4f0':'#1c2c3f');ctx.strokeStyle=f.disabled?(isLight?'#aaa':'#3a3a3a'):'#5b9cf6';}
    if(f.color&&f.color!=='none'){const lc=LABEL_COLORS.find(c=>c.key===f.color);if(lc)ctx.strokeStyle=lc.dot;}
    ctx.lineWidth=0.7;ctx.fillRect(mx,my,mw,mh);ctx.strokeRect(mx,my,mw,mh);
  });

  // Стикеры
  getStickies().forEach(s=>{
    const{mx,my}=toMM(s.x,s.y);
    const mw=Math.max(2,s.w*mmScale),mh=Math.max(2,s.h*mmScale);
    ctx.fillStyle=STICKY_BG[s.color]||'#888';ctx.globalAlpha=0.8;
    ctx.fillRect(mx,my,mw,mh);ctx.globalAlpha=1;
  });

  // Лейблы — точки
  getLabels().forEach(l=>{
    const{mx,my}=toMM(l.x,l.y);
    ctx.fillStyle=isLight?'rgba(0,0,0,0.25)':'rgba(180,180,180,0.5)';ctx.fillRect(mx-1.5,my-1.5,3,3);
  });

  // Viewport
  const vp1=toMM(vpTL.wx,vpTL.wy),vp2=toMM(vpBR.wx,vpBR.wy);
  const vpW=vp2.mx-vp1.mx,vpH=vp2.my-vp1.my;
  ctx.fillStyle=isLight?'rgba(0,80,200,0.05)':'rgba(255,255,255,0.04)';ctx.fillRect(vp1.mx,vp1.my,vpW,vpH);
  ctx.strokeStyle=isLight?'rgba(0,80,200,0.5)':'rgba(255,255,255,0.55)';ctx.lineWidth=1;ctx.strokeRect(vp1.mx,vp1.my,vpW,vpH);
  const cs=5;ctx.strokeStyle=isLight?'rgba(0,80,200,0.8)':'rgba(255,255,255,0.85)';ctx.lineWidth=1.5;
  [[vp1.mx,vp1.my,1,1],[vp1.mx+vpW,vp1.my,-1,1],[vp1.mx,vp1.my+vpH,1,-1],[vp1.mx+vpW,vp1.my+vpH,-1,-1]].forEach(([x,y,sx,sy])=>{
    ctx.beginPath();ctx.moveTo(x+sx*cs,y);ctx.lineTo(x,y);ctx.lineTo(x,y+sy*cs);ctx.stroke();
  });
}

// ── SNAP / ZOOM ──────────────────────────────────────────────────────
function toggleSnap(){
  snapOn=!snapOn;
  const btn=document.getElementById('btn-snap');if(btn)btn.className=snapOn?'tb-btn snap':'tb-btn';
  showHint(snapOn?t('hint_snap_on'):t('hint_snap_off'));
  updateStatus();
}
function changeZoom(delta,mx,my){
  const oldZoom=zoom;
  zoom=Math.max(0.05,Math.min(8.0,zoom+delta));
  // Зумируем в точку под курсором: сохраняем мировую точку и корректируем pan
  if(mx!==undefined&&my!==undefined){
    const wx=(mx-panX)/oldZoom;
    const wy=(my-panY)/oldZoom;
    panX=mx-wx*zoom;
    panY=my-wy*zoom;
  }
  const lbl=document.getElementById('zoom-lbl');if(lbl)lbl.textContent=Math.round(zoom*100)+'%';
  const br=Math.min(8,Math.max(1,zoom*8))+'px';
  getBoardFiles().forEach(f=>{
    const card=document.getElementById('card-'+f.id);if(!card)return;
    const sc=toScreen(f.x,f.y);card.style.left=sc.sx+'px';card.style.top=sc.sy+'px';
    card.style.width=Math.round(f.w*zoom)+'px';
    const th=card.querySelector('.card-thumb');if(th)th.style.height=Math.round((f.h-32)*zoom)+'px';
    const inn=card.querySelector('.card-inner');if(inn)inn.style.borderRadius=br;
  });
  getLabels().forEach(l=>{
    const el=document.getElementById('label-'+l.id);if(!el)return;
    const sc=toScreen(l.x,l.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';
    applyLabelStyle(el,l);
  });
  getStickies().forEach(s=>{
    const el=document.getElementById('sticky-'+s.id);if(!el)return;
    const sc=toScreen(s.x,s.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';
    el.style.width=s.w*zoom+'px';el.style.height=s.h*zoom+'px';
    applyStickyStyle(el,s);
  });
  drawGrid();drawMinimap();
}

// ── GRID ────────────────────────────────────────────────────────────
function drawGrid(){
  const cv=document.getElementById('grid-cv');if(!cv)return;
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  cv.width=wrap.offsetWidth;cv.height=wrap.offsetHeight;
  const ctx=cv.getContext('2d');ctx.clearRect(0,0,cv.width,cv.height);
  if(gridStyle==='none')return;
  // Адаптивный шаг: удваиваем пока экранный шаг < 12px → равномерная нагрузка при любом зуме
  let effGrid=GRID;
  while(effGrid*zoom<12)effGrid*=2;
  const step=effGrid*zoom;
  const ox=Math.round(((panX%step)+step)%step);
  const oy=Math.round(((panY%step)+step)%step);
  const isLight=theme==='light';
  if(gridStyle==='dots'){
    ctx.fillStyle=isLight?'rgba(0,0,0,0.18)':'rgba(255,255,255,0.13)';
    for(let x=ox;x<cv.width;x+=step)for(let y=oy;y<cv.height;y+=step){ctx.beginPath();ctx.arc(Math.round(x),Math.round(y),1.2,0,Math.PI*2);ctx.fill();}
  }else if(gridStyle==='lines'){
    const wc0=Math.round((ox-panX)/step),wr0=Math.round((oy-panY)/step);
    let n=0;
    for(let x=ox;x<cv.width;x+=step,n++){
      const maj=(wc0+n)%5===0;
      ctx.strokeStyle=maj?(isLight?'rgba(0,0,0,0.18)':'rgba(255,255,255,0.14)'):(isLight?'rgba(0,0,0,0.07)':'rgba(255,255,255,0.05)');
      ctx.lineWidth=maj?1:0.5;ctx.beginPath();ctx.moveTo(Math.round(x),0);ctx.lineTo(Math.round(x),cv.height);ctx.stroke();
    }
    n=0;
    for(let y=oy;y<cv.height;y+=step,n++){
      const maj=(wr0+n)%5===0;
      ctx.strokeStyle=maj?(isLight?'rgba(0,0,0,0.18)':'rgba(255,255,255,0.14)'):(isLight?'rgba(0,0,0,0.07)':'rgba(255,255,255,0.05)');
      ctx.lineWidth=maj?1:0.5;ctx.beginPath();ctx.moveTo(0,Math.round(y));ctx.lineTo(cv.width,Math.round(y));ctx.stroke();
    }
  }else if(gridStyle==='cross'){
    ctx.strokeStyle=isLight?'rgba(0,0,0,0.18)':'rgba(255,255,255,0.15)';
    ctx.lineWidth=1;const arm=3;
    for(let x=ox;x<cv.width;x+=step)for(let y=oy;y<cv.height;y+=step){
      const rx=Math.round(x),ry=Math.round(y);
      ctx.beginPath();ctx.moveTo(rx-arm,ry);ctx.lineTo(rx+arm,ry);ctx.stroke();
      ctx.beginPath();ctx.moveTo(rx,ry-arm);ctx.lineTo(rx,ry+arm);ctx.stroke();
    }
  }else if(gridStyle==='chess'){
    ctx.fillStyle=isLight?'rgba(0,0,0,0.04)':'rgba(255,255,255,0.035)';
    for(let x=ox-step;x<cv.width;x+=step)for(let y=oy-step;y<cv.height;y+=step){
      const wc=Math.round((x-panX)/step),wr=Math.round((y-panY)/step);
      if((((wc+wr)%2)+2)%2===0)ctx.fillRect(Math.round(x),Math.round(y),Math.ceil(step),Math.ceil(step));
    }
  }
}
function toScreen(wx,wy){return{sx:wx*zoom+panX,sy:wy*zoom+panY};}
function toWorld(sx,sy){return{wx:(sx-panX)/zoom,wy:(sy-panY)/zoom};}
function snapW(wx,wy){return{wx:Math.round(wx/GRID)*GRID,wy:Math.round(wy/GRID)*GRID};}

// ── FILTER ───────────────────────────────────────────────────────────
function buildFilterBar(){
  const cont=document.getElementById('filter-dots');if(!cont)return;cont.innerHTML='';
  const none=document.createElement('div');
  none.className='fdot fdot-none'+(activeFilter===null?' active':'');none.title=t('no_filter');
  none.innerHTML=`<svg viewBox="0 0 9 9" width="9" height="9"><line x1="1.5" y1="1.5" x2="7.5" y2="7.5" stroke="var(--text3)" stroke-width="1.5" stroke-linecap="round"/><line x1="7.5" y1="1.5" x2="1.5" y2="7.5" stroke="var(--text3)" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  none.onclick=()=>setFilter(null);cont.appendChild(none);
  LABEL_COLORS.filter(c=>c.key!=='none').forEach(c=>{
    const dot=document.createElement('div');dot.className='fdot'+(activeFilter===c.key?' active':'');
    dot.style.background=c.dot;if(activeFilter===c.key)dot.style.borderColor=c.ring||'#fff';
    dot.title=t('colors')[LABEL_COLORS.findIndex(x=>x.key===c.key)];dot.onclick=()=>setFilter(c.key);cont.appendChild(dot);
  });
}
function setFilter(key){
  activeFilter=key;buildFilterBar();applyFilter();
  const st=document.getElementById('filter-status');if(!st)return;
  if(!key){st.textContent='';st.className='filter-status';return;}
  const count=getBoardFiles().filter(f=>f.color===key).length;
  const colorName=t('colors')[LABEL_COLORS.findIndex(x=>x.key===key)];
  st.textContent=`${colorName} · ${count}`;st.className='filter-status on';
  showHint(`${t('filter')} ${colorName} — ${count}`);
}
function applySearch(){
  // Снимаем предыдущие поисковые кольца и прозрачность лейблов
  document.querySelectorAll('.search-ring').forEach(r=>r.remove());
  getLabels().forEach(l=>{const el=document.getElementById('label-'+l.id);if(el){el.style.outline='';el.style.outlineOffset='';el.style.opacity='';}});
  getStickies().forEach(s=>{const el=document.getElementById('sticky-'+s.id);if(el){el.style.outline='';el.style.outlineOffset='';el.style.opacity='';}});
  getBoardFiles().forEach(f=>{const c=document.getElementById('card-'+f.id);if(c)c.classList.remove('dimmed');});
  const q=searchQuery.trim().toLowerCase();
  if(!q){applyFilter();updateSearchUI();return;}

  searchHits=[];
  // Сначала убираем все filter-ring и делаем все карточки dimmed
  getBoardFiles().forEach(f=>{
    const c=document.getElementById('card-'+f.id);if(!c)return;
    const fr=c.querySelector('.filter-ring');if(fr)fr.remove();
    c.classList.add('dimmed');
  });
  getLabels().forEach(l=>{
    const el=document.getElementById('label-'+l.id);if(el)el.style.opacity='0.15';
  });
  getStickies().forEach(s=>{
    const el=document.getElementById('sticky-'+s.id);if(el)el.style.opacity='0.15';
  });

  // Подсвечиваем совпадения по имени карточки
  getBoardFiles().forEach(f=>{
    if(!f.name.toLowerCase().includes(q))return;
    const c=document.getElementById('card-'+f.id);if(!c)return;
    c.classList.remove('dimmed');
    const ring=document.createElement('div');ring.className='search-ring';
    ring.style.cssText='position:absolute;inset:-3px;border-radius:10px;border:2.5px solid #f5c842;pointer-events:none;z-index:25;box-shadow:0 0 8px #f5c84244';
    c.appendChild(ring);
    searchHits.push({type:'card',id:f.id,x:f.x+f.w/2,y:f.y+f.h/2});
  });

  // Подсвечиваем совпадения по тексту лейблов
  getLabels().forEach(l=>{
    if(!l.text.toLowerCase().includes(q))return;
    const el=document.getElementById('label-'+l.id);if(!el)return;
    el.style.opacity='';
    el.style.outline='2px solid #f5c842';el.style.outlineOffset='4px';
    searchHits.push({type:'label',id:l.id,x:l.x,y:l.y});
  });

  // Подсвечиваем совпадения по тексту стикеров
  getStickies().forEach(s=>{
    if(!s.text.toLowerCase().includes(q))return;
    const el=document.getElementById('sticky-'+s.id);if(!el)return;
    el.style.opacity='';
    el.style.outline='2px solid #f5c842';el.style.outlineOffset='4px';
    searchHits.push({type:'sticky',id:s.id,x:s.x+s.w/2,y:s.y+s.h/2});
  });

  if(searchHitIdx>=searchHits.length)searchHitIdx=0;
  updateSearchUI();
}
function clearBoardSearch(){
  searchQuery='';searchHits=[];searchHitIdx=0;
  const si=document.getElementById('board-search');if(si)si.value='';
  applySearch();
}
function updateSearchUI(){
  const count=document.getElementById('search-count');
  const prev=document.getElementById('btn-search-prev');
  const next=document.getElementById('btn-search-next');
  const clear=document.getElementById('btn-search-clear');
  const q=searchQuery.trim();
  if(count){
    if(q&&searchHits.length){count.textContent=`${searchHitIdx+1}/${searchHits.length}`;count.style.display='';}
    else if(q){count.textContent=t('search_no_results');count.style.display='';}
    else count.style.display='none';
  }
  const showNav=!!(q&&searchHits.length>1);
  if(prev)prev.style.display=showNav?'flex':'none';
  if(next)next.style.display=showNav?'flex':'none';
  if(clear)clear.style.display=q?'flex':'none';
}
function navigateToHit(idx){
  if(!searchHits.length)return;
  searchHitIdx=((idx%searchHits.length)+searchHits.length)%searchHits.length;
  const hit=searchHits[searchHitIdx];
  const canvas=document.getElementById('board-canvas');if(!canvas)return;
  panX=canvas.offsetWidth/2-hit.x*zoom;
  panY=canvas.offsetHeight/2-hit.y*zoom;
  drawGrid();
  getBoardFiles().forEach(f=>{const c=document.getElementById('card-'+f.id);if(!c)return;const sc=toScreen(f.x,f.y);c.style.left=sc.sx+'px';c.style.top=sc.sy+'px';});
  getLabels().forEach(l=>{const el=document.getElementById('label-'+l.id);if(!el)return;const sc=toScreen(l.x,l.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
  getStickies().forEach(s=>{const el=document.getElementById('sticky-'+s.id);if(!el)return;const sc=toScreen(s.x,s.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';});
  updateSearchUI();
}
function nextSearchHit(){navigateToHit(searchHitIdx+1);}
function prevSearchHit(){navigateToHit(searchHitIdx-1);}

function applyFilter(){
  getBoardFiles().forEach(f=>{
    const card=document.getElementById('card-'+f.id);if(!card)return;
    const oldRing=card.querySelector('.filter-ring');if(oldRing)oldRing.remove();
    if(!activeFilter){card.classList.remove('dimmed');}
    else if(f.color===activeFilter){
      card.classList.remove('dimmed');
      const c=LABEL_COLORS.find(x=>x.key===activeFilter);
      if(c&&c.ring){const ring=document.createElement('div');ring.className='filter-ring';ring.style.cssText=`border:6px dashed ${c.ring};box-shadow:0 0 10px 0 ${c.ring}44`;card.appendChild(ring);}
    } else {card.classList.add('dimmed');}
  });
  getStickies().forEach(s=>{
    const el=document.getElementById('sticky-'+s.id);if(!el)return;
    if(!activeFilter){el.style.opacity='';}
    else if(s.color===activeFilter){el.style.opacity='';}
    else{el.style.opacity='0.2';}
  });
}

// ── STATUSBAR ────────────────────────────────────────────────────────
function updateStatus(){
  const files=getBoardFiles();
  const dis=files.filter(f=>f.disabled).length,miss=files.filter(f=>f.missing).length;
  const totalMB=files.reduce((s,f)=>s+(f.sizeMB||0),0);
  const vC=files.filter(f=>f.type==='v').length,iC=files.filter(f=>f.type==='i').length;
  const labels=getLabels().length,stickiesC=getStickies().length;
  const stLeft=document.getElementById('st-left');if(!stLeft)return;
  stLeft.textContent=`${files.length} ${t('files_lbl')} · ${vC} ${t('videos_lbl')} · ${iC} img`+(labels?` · ${labels} labels`:'')+(stickiesC?` · ${stickiesC} stickies`:'')+(dis?` · ${dis} off`:'')+(miss?` · ${miss} ❌`:'')+` · snap:${snapOn?'on':'off'}`;
  const stSize=document.getElementById('st-size');
  if(stSize)stSize.textContent=totalMB>1024?(totalMB/1024).toFixed(1)+' GB':totalMB+' MB';
}

// ── КАРТОЧКИ ─────────────────────────────────────────────────────────
function renderAllCards(){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  wrap.querySelectorAll('.card').forEach(c=>c.remove());
  getBoardFiles().forEach(f=>makeCard(f));
  renderAllLabels();renderAllStickies();applySearch();drawMinimap();
}
function footerBg(colorKey){if(!colorKey||colorKey==='none')return'';return LABEL_COLORS.find(c=>c.key===colorKey)?.footer||'';}
function fmtDur(sec){if(!sec||!isFinite(sec))return'';const s=Math.round(sec),h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;return h?`${h}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`:`${m}:${String(ss).padStart(2,'0')}`;}

function makeCard(f){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  const d=document.createElement('div');
  d.className='card'+(f.disabled?' disabled':'')+(f.missing?' missing':'');
  d.id='card-'+f.id;
  const sc=toScreen(f.x,f.y);d.style.left=sc.sx+'px';d.style.top=sc.sy+'px';d.style.width=Math.round(f.w*zoom)+'px';

  const inner=document.createElement('div');inner.className='card-inner';
  inner.style.borderRadius=Math.min(8,Math.max(1,zoom*8))+'px';
  const thumb=document.createElement('div');
  thumb.className='card-thumb '+(f.type==='v'?'vid':'img')+(f.missing?' missing-bg':'');
  thumb.style.height=Math.round((f.h-32)*zoom)+'px';
  // Блокируем браузерный drag у превью
  thumb.style.webkitUserDrag='none';

  if(f.missing){
    const ov=document.createElement('div');ov.className='missing-overlay';
    ov.innerHTML=`<i class="ti ti-file-x" style="font-size:26px;color:#cc4444"></i><span class="missing-lbl">${t('file_missing')}</span>`;
    const rb=document.createElement('button');rb.className='missing-rebind';rb.textContent=t('pick_source');
    rb.onclick=e=>{e.stopPropagation();pickNewSource(f);};ov.appendChild(rb);thumb.appendChild(ov);
  } else {
    const icon=document.createElement('i');icon.className='ti '+(f.type==='v'?'ti-video':'ti-photo');
    icon.style.cssText=`font-size:24px;color:${f.type==='v'?'#2a6a3a':'#2a3a6a'}`;thumb.appendChild(icon);

    if(f.type==='v'&&!f.disabled){
      const video=document.createElement('video');
      video.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s';
      video.draggable=false;
      video.addEventListener('dragstart',e=>e.preventDefault());
      video.src=fileToUrl(f.orig);video.muted=true;video.preload='metadata';video.loop=loopEnabled;
      video.onloadedmetadata=()=>{
        if(video.videoWidth>0){const ratio=video.videoHeight/video.videoWidth;const newH=Math.round(f.w*ratio)+32;if(Math.abs(newH-f.h)>10){f.h=newH;thumb.style.height=Math.round((f.h-32)*zoom)+'px';}}
        if(!f.duration&&video.duration&&isFinite(video.duration)){f.duration=video.duration;const fb=document.getElementById('ftype-'+f.id);if(fb)fb.textContent=fmtDur(f.duration)+' VID';}
      };
      video.onloadeddata=()=>{video.style.opacity='1';icon.style.display='none';};
      video.onerror=()=>{};
      thumb.appendChild(video);
      const ov=document.createElement('div');ov.className='play-ov';
      const pc=document.createElement('div');pc.className='play-circle';
      const pi=document.createElement('i');pi.className='ti ti-player-play';pi.style.cssText='font-size:10px;color:#ccc;margin-left:1px';
      pc.appendChild(pi);ov.appendChild(pc);thumb.appendChild(ov);
      const lfBadge=document.createElement('div');lfBadge.id='lf-'+f.id;lfBadge.textContent=t('last_frame');
      lfBadge.style.cssText='display:none;position:absolute;top:6px;right:6px;background:rgba(0,0,0,.45);color:rgba(255,255,255,.5);font-size:8px;padding:2px 5px;border-radius:3px;pointer-events:none;z-index:22;letter-spacing:.3px';
      thumb.appendChild(lfBadge);
      video.addEventListener('play',()=>{pi.className='ti ti-player-pause';pi.style.marginLeft='0';});
      video.addEventListener('pause',()=>{pi.className='ti ti-player-play';pi.style.marginLeft='1px';});
      video.addEventListener('ended',()=>{pi.className='ti ti-player-play';pi.style.marginLeft='1px';});
      ov.addEventListener('click',e=>{
        e.stopPropagation();
        if(e.ctrlKey)return;
        if(video.paused){video.loop=loopEnabled;video.play();}else video.pause();
      });
    }

    if(f.type==='i'){
      const img=document.createElement('img');
      img.draggable=false;
      img.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s;pointer-events:none;-webkit-user-drag:none';
      img.src=fileToUrl(f.orig);
      img.onload=()=>{
        if(img.naturalWidth>0){const ratio=img.naturalHeight/img.naturalWidth;const newH=Math.round(f.w*ratio)+32;if(Math.abs(newH-f.h)>10){f.h=newH;thumb.style.height=Math.round((f.h-32)*zoom)+'px';}}
        img.style.opacity='1';icon.style.display='none';
      };
      img.onerror=()=>{img.style.display='none';icon.style.display='';};
      thumb.appendChild(img);
    }

    if(f.disabled){
      const preview=cardPreviews.get(f.id);
      if(preview&&f.type==='v'){
        const img=document.createElement('img');
        img.draggable=false;
        img.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.55;filter:grayscale(50%);pointer-events:none';
        img.src=preview;thumb.appendChild(img);
      } else if(f.type==='v'&&!f.missing){
        const tmp=document.createElement('video');
        tmp.muted=true;tmp.preload='auto';tmp.src=fileToUrl(f.orig);
        tmp.addEventListener('loadeddata',()=>{
          try{
            const cv=document.createElement('canvas');
            cv.width=tmp.videoWidth||320;cv.height=tmp.videoHeight||180;
            cv.getContext('2d').drawImage(tmp,0,0,cv.width,cv.height);
            cardPreviews.set(f.id,cv.toDataURL('image/jpeg',0.7));
            if(!f.duration&&tmp.duration&&isFinite(tmp.duration))f.duration=tmp.duration;
            refreshCard(f);
          }catch(err){}
          tmp.src='';
        },{once:true});
        tmp.addEventListener('error',()=>{tmp.src='';},{once:true});
      }
      const disOv=document.createElement('div');disOv.className='dis-overlay';
      const di=document.createElement('i');di.className='ti ti-player-pause-filled';di.style.cssText='font-size:22px;color:#aaa';
      const dl=document.createElement('div');dl.style.cssText='font-size:9px;color:#888;margin-top:4px';dl.textContent=t('disabled_card');
      disOv.appendChild(di);disOv.appendChild(dl);thumb.appendChild(disOv);
    }
  }

  // Footer — цвет чуть светлее для читаемости
  const footer=document.createElement('div');footer.className='card-footer';footer.id='footer-'+f.id;
  const bg=footerBg(f.color);if(bg)footer.style.background=bg;
  // Имя — белый текст на цветном фоне
  const fn=document.createElement('span');fn.className='card-fname';fn.id='fname-'+f.id;fn.textContent=f.name;fn.title=f.name;
  if(bg)fn.style.color='#ffffff';
  const ft=document.createElement('span');ft.className='card-ftype '+(f.missing?'miss':f.disabled?'dis':(f.type==='v'?'v':'i'));
  ft.id='ftype-'+f.id;
  const durStr=f.type==='v'&&!f.missing&&f.duration?fmtDur(f.duration)+' ':'';
  ft.textContent=f.missing?'❌':(f.type==='v'?durStr+'VID':'IMG');
  footer.appendChild(fn);footer.appendChild(ft);
  inner.appendChild(thumb);inner.appendChild(footer);d.appendChild(inner);

  const db=document.createElement('div');db.className='card-dots-btn';db.innerHTML='<i class="ti ti-dots"></i>';
  db.onclick=e=>{e.stopPropagation();openCardCtx(f,e.clientX,e.clientY);};d.appendChild(db);

  const rh=document.createElement('div');rh.className='resize-handle';
  rh.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    e.stopPropagation();e.preventDefault();
    snapshot();
    let rsx=e.clientX,rw0=f.w,rh0=f.h;const vRatio=(rh0-32)/rw0;
    const mm=ev=>{const dx=(ev.clientX-rsx)/zoom;f.w=Math.max(120,rw0+dx);f.h=Math.max(90,Math.round(f.w*vRatio)+32);d.style.width=Math.round(f.w*zoom)+'px';thumb.style.height=Math.round((f.h-32)*zoom)+'px';};
    const mu=()=>{window.removeEventListener('mousemove',mm);window.removeEventListener('mouseup',mu);};
    window.addEventListener('mousemove',mm);window.addEventListener('mouseup',mu);
  });
  d.appendChild(rh);

  // Drag карточки
  let dragging=false,moved=false,dsx=0,dsy=0,dwx=0,dwy=0,prevDX=0,prevDY=0;
  d.addEventListener('mousedown',e=>{
    if(e.target.closest('.card-dots-btn')||e.target.closest('.resize-handle')||e.target.closest('.missing-rebind'))return;
    if(e.button!==0)return;
    e.stopPropagation();e.preventDefault();
    if(e.ctrlKey){
      if(seqMode&&f.disabled)return;
      if(e.shiftKey){multiSelCards.add(f.id);d.classList.add('selected');}
      else if(e.altKey){multiSelCards.delete(f.id);d.classList.remove('selected');}
      else{if(multiSelCards.has(f.id)){multiSelCards.delete(f.id);d.classList.remove('selected');}else{multiSelCards.add(f.id);d.classList.add('selected');}}
      refreshMultiSelBorders();selectedCardId=null;selectedLabelId=null;return;
    }
    if(!multiSelCards.has(f.id)||!hasMultiSel()){clearMultiSel();multiSelCards.add(f.id);}
    document.querySelectorAll('.board-label').forEach(l=>l.classList.remove('selected'));
    d.classList.add('selected');selectedCardId=f.id;selectedLabelId=null;
    dragging=true;moved=false;closeCtx();document.getElementById('board-canvas').focus();
    dsx=e.clientX;dsy=e.clientY;dwx=f.x;dwy=f.y;prevDX=e.clientX;prevDY=e.clientY;
    if(hasMultiSel()){multiDragOX=e.clientX;multiDragOY=e.clientY;multiSelCards.forEach(id=>{const ff=getBoardFiles().find(x=>x.id===id);if(ff)multiDragC.set(id,{x:ff.x,y:ff.y});});multiSelLabels.forEach(id=>{const ll=getLabels().find(x=>x.id===id);if(ll)multiDragL.set(id,{x:ll.x,y:ll.y});});multiSelStickies.forEach(id=>{const ss=getStickies().find(x=>x.id===id);if(ss)multiDragS.set(id,{x:ss.x,y:ss.y});});}
  });
  window.addEventListener('mousemove',e=>{
    if(!dragging)return;
    if(!moved){snapshot();moved=true;}
    if(hasMultiSel()&&multiSelCards.has(f.id)){
      const rawTdx=(e.clientX-multiDragOX)/zoom,rawTdy=(e.clientY-multiDragOY)/zoom;
      let tdx=rawTdx,tdy=rawTdy;
      if(snapOn){const anchor=multiDragC.get(f.id);if(anchor){const sn=snapW(anchor.x+rawTdx,anchor.y+rawTdy);tdx=sn.wx-anchor.x;tdy=sn.wy-anchor.y;}}
      multiSelCards.forEach(id=>{
        const ff=getBoardFiles().find(x=>x.id===id);const st=multiDragC.get(id);if(!ff||!st)return;
        ff.x=st.x+tdx;ff.y=st.y+tdy;const c=document.getElementById('card-'+id);
        if(c){const sc=toScreen(ff.x,ff.y);c.style.left=sc.sx+'px';c.style.top=sc.sy+'px';}
      });
      multiSelLabels.forEach(id=>{
        const ll=getLabels().find(x=>x.id===id);const st=multiDragL.get(id);if(!ll||!st)return;
        ll.x=st.x+tdx;ll.y=st.y+tdy;const el=document.getElementById('label-'+id);
        if(el){const sc=toScreen(ll.x,ll.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';}
      });
      multiSelStickies.forEach(id=>{
        const ss=getStickies().find(x=>x.id===id);const st=multiDragS.get(id);if(!ss||!st)return;
        ss.x=st.x+tdx;ss.y=st.y+tdy;const el=document.getElementById('sticky-'+id);
        if(el){const sc=toScreen(ss.x,ss.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';}
      });
    } else {
      let nx=dwx+(e.clientX-dsx)/zoom,ny=dwy+(e.clientY-dsy)/zoom;
      if(snapOn){const s=snapW(nx,ny);nx=s.wx;ny=s.wy;}
      f.x=nx;f.y=ny;const sc2=toScreen(f.x,f.y);d.style.left=sc2.sx+'px';d.style.top=sc2.sy+'px';
    }
  });
  window.addEventListener('mouseup',()=>{if(dragging){dragging=false;}});
  d.addEventListener('contextmenu',e=>{
    e.preventDefault();e.stopPropagation();
    if(hasMultiSel()&&multiSelCards.has(f.id)){openMultiCtx(e.clientX,e.clientY);return;}
    document.querySelectorAll('.card').forEach(c=>c.classList.remove('selected'));
    d.classList.add('selected');selectedCardId=f.id;selectedLabelId=null;
    openCardCtx(f,e.clientX,e.clientY);
  });
  wrap.appendChild(d);
}

function refreshCard(f){const old=document.getElementById('card-'+f.id);if(old)old.remove();makeCard(f);applyFilter();updateSeqBadges();}

async function openMetaModal(f){
  const raw=await api.readMeta(f.orig);
  const allKeys=Object.keys(raw||{});
  const PRIO=['parameters','prompt','Prompt','positive_prompt','Description','description','Comment','comment','invokeai_metadata','UserComment'];
  const SKIP=new Set(['workflow','XMP']);
  // Ищем seed: сначала как отдельный ключ, затем внутри parameters/prompt текстом
  const seedKey=allKeys.find(k=>k.toLowerCase()==='seed');
  let seedVal=seedKey?raw[seedKey]:null;
  if(!seedVal){
    const paramText=raw['parameters']||raw['prompt']||raw['Prompt']||'';
    const m=String(paramText).match(/\bSeed:\s*(\d+)/i);
    if(m)seedVal=m[1];
  }
  const sorted=[
    ...PRIO.filter(k=>allKeys.includes(k)&&k!==seedKey),
    ...allKeys.filter(k=>!PRIO.includes(k)&&!SKIP.has(k)&&k!==seedKey),
  ];
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const KEY_LABELS={
    parameters:lang==='ru'?'Параметры генерации':'Generation Parameters',
    prompt:lang==='ru'?'Параметры генерации':'Generation Parameters',
    Prompt:lang==='ru'?'Параметры генерации':'Generation Parameters',
    positive_prompt:lang==='ru'?'Позитивный промпт':'Positive Prompt',
    Description:lang==='ru'?'Описание':'Description',
    description:lang==='ru'?'Описание':'Description',
    Comment:lang==='ru'?'Комментарий':'Comment',
    comment:lang==='ru'?'Комментарий':'Comment',
    UserComment:lang==='ru'?'Комментарий':'Comment',
    invokeai_metadata:'InvokeAI Metadata',
  };
  const keyLabel=k=>KEY_LABELS[k]||k;
  let body='';
  if(!sorted.length&&!seedVal){
    body=`<div style="text-align:center;padding:28px 0;color:var(--text4);font-size:12px"><i class="ti ti-file-off" style="font-size:28px;display:block;margin-bottom:8px"></i>${t('meta_no_data')}</div>`;
  } else {
    const seedBlock=seedVal?`<div style="margin-bottom:14px;display:flex;align-items:center;gap:12px;background:var(--bg4);border:0.5px solid var(--border2);border-radius:6px;padding:8px 12px">
      <div style="font-size:9px;font-weight:700;color:var(--text4);letter-spacing:0.7px;text-transform:uppercase;white-space:nowrap">seed</div>
      <div style="font-size:12px;color:var(--text1);font-family:'JetBrains Mono',monospace;font-weight:600;letter-spacing:0.5px">${esc(seedVal)}</div>
    </div>`:'';
    const mainBlock=sorted.length?`<div style="max-height:340px;overflow-y:auto;padding-right:6px;margin-bottom:4px">`+sorted.map(k=>{
      let val=raw[k];
      try{val=JSON.stringify(JSON.parse(val),null,2);}catch{}
      return `<div style="margin-bottom:10px">
        <div style="font-size:9px;font-weight:700;color:var(--text4);letter-spacing:0.7px;text-transform:uppercase;margin-bottom:3px">${esc(keyLabel(k))}</div>
        <div style="font-size:11px;color:var(--text2);background:var(--bg4);border:0.5px solid var(--border2);border-radius:5px;padding:8px 10px;white-space:pre-wrap;word-break:break-word;line-height:1.55;max-height:180px;overflow-y:auto">${esc(val)}</div>
      </div>`;
    }).join('')+`</div>`:'';
    body=seedBlock+mainBlock;
  }
  openModal(t('meta_data'),body,'','ok',()=>{});
  const okBtn=document.getElementById('m-ok');
  const cancelBtn=document.getElementById('m-cancel');
  if(cancelBtn)cancelBtn.textContent=t('close');
  if(okBtn)okBtn.style.display='none';
  if(!sorted.length&&!seedVal)return;
  const mRow=document.querySelector('.m-row');
  if(seedVal&&mRow){
    const seedBtn=document.createElement('button');
    seedBtn.className='m-btn ok';
    seedBtn.textContent=t('meta_copy_seed');
    seedBtn.onclick=e=>{
      e.stopPropagation();
      navigator.clipboard.writeText(String(seedVal)).catch(()=>{});
      seedBtn.textContent=t('meta_copied');
      setTimeout(()=>{if(seedBtn)seedBtn.textContent=t('meta_copy_seed');},1500);
    };
    mRow.appendChild(seedBtn);
  }
  if(sorted.length&&mRow){
    const allText=sorted.map(k=>`[${k}]\n${raw[k]}`).join('\n\n─────\n\n');
    const copyBtn=document.createElement('button');
    copyBtn.className='m-btn ok';
    copyBtn.textContent=t('meta_copy');
    copyBtn.onclick=e=>{
      e.stopPropagation();
      navigator.clipboard.writeText(allText).catch(()=>{});
      copyBtn.textContent=t('meta_copied');
      setTimeout(()=>{if(copyBtn)copyBtn.textContent=t('meta_copy');},1500);
    };
    mRow.appendChild(copyBtn);
  }
}

function openCardCtx(f,x,y){
  const disLabel=f.disabled?t('activate'):t('deactivate');
  const disIcon=f.disabled?'ti-player-play':'ti-player-pause';
  const items=[];
  if(f.missing){items.push({icon:'ti-file-search',label:t('pick_source'),action:()=>pickNewSource(f)});items.push('sep');}
  items.push(
    {icon:'ti-folder-open',label:t('show_in_folder'),action:()=>api.showInExplorer(f.orig)},
    {icon:'ti-edit',label:t('rename'),action:()=>renameCardModal(f)},
    {icon:'ti-download',label:t('save_as'),action:()=>api.saveFileAs(f.orig)},
    {icon:'ti-tag',label:t('meta_data'),action:()=>openMetaModal(f)},
    'sep',
    {icon:disIcon,label:disLabel,shortcut:'Ctrl+D',action:()=>toggleDisabled(f)},
    {icon:'ti-trash',label:t('delete'),shortcut:'Del',danger:true,action:()=>deleteCard(f.id)},
    'sep'
  );
  openCtx(items,x,y);
  // Цвета
  const colDiv=document.createElement('div');colDiv.className='ctx-colors-row';
  const lbl=document.createElement('span');lbl.className='ctx-clbl';lbl.textContent=t('color_label');colDiv.appendChild(lbl);
  LABEL_COLORS.forEach((c,i)=>{
    const dot=document.createElement('div');dot.className='ctx-cdot'+(f.color===c.key?' active':'');
    dot.style.background=c.key==='none'?'#555555':c.dot;dot.title=t('colors')[i];
    if(f.color===c.key)dot.style.borderColor='#fff';
    dot.onclick=e=>{
      e.stopPropagation();snapshot();f.color=c.key;
      const fe=document.getElementById('footer-'+f.id);
      if(fe){fe.style.background=footerBg(f.color);const fn=document.getElementById('fname-'+f.id);if(fn)fn.style.color=f.color!=='none'?'#ffffff':'';}
      colDiv.querySelectorAll('.ctx-cdot').forEach(d=>{d.classList.remove('active');d.style.borderColor='transparent';});
      dot.classList.add('active');dot.style.borderColor='#fff';applyFilter();updateStatus();
    };
    colDiv.appendChild(dot);
  });
  const sep=document.createElement('div');sep.className='ctx-sep';
  const fname=document.createElement('div');fname.className='ctx-fname';fname.textContent=f.orig;
  ctxEl.appendChild(sep);ctxEl.appendChild(colDiv);ctxEl.appendChild(fname);
}

function renameCardModal(f){
  openModal(t('rename'),`<label class="m-label">${t('files')}</label><input class="m-input" id="inp-cardname" value="${f.name}">`,t('save'),'ok',()=>{
    snapshot();const v=document.getElementById('inp-cardname').value.trim();if(!v)return;f.name=v;
    const el=document.getElementById('fname-'+f.id);if(el){el.textContent=v;el.title=v;}
  });
  const ni=document.getElementById('inp-cardname');if(ni){ni.select();ni.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();document.getElementById('m-ok')?.click();}});}
}

// toggleDisabled — упрощённая версия без canvas (стабильнее)
function toggleDisabled(f){
  snapshot();
  if(!f.disabled&&f.type==='v'){
    const card=document.getElementById('card-'+f.id);
    if(card){
      const video=card.querySelector('video');
      if(video&&video.readyState>=2){
        try{
          const cv=document.createElement('canvas');
          cv.width=video.videoWidth||320;cv.height=video.videoHeight||180;
          cv.getContext('2d').drawImage(video,0,0,cv.width,cv.height);
          cardPreviews.set(f.id,cv.toDataURL('image/jpeg',0.7));
        }catch(e){}
      }
    }
  }
  f.disabled=!f.disabled;
  if(f.disabled){
    const card=document.getElementById('card-'+f.id);
    if(card){const video=card.querySelector('video');if(video){video.pause();video.src='';video.load();}}
    showHint(t('hint_disabled'));
  } else {
    cardPreviews.delete(f.id);
    showHint(t('hint_enabled'));
  }
  refreshCard(f);updateStatus();
}

function deleteCard(id){
  snapshot();if(!boardProject)return;
  boardProject.files=boardProject.files.filter(f=>f.id!==id);
  const el=document.getElementById('card-'+id);if(el)el.remove();
  if(selectedCardId===id)selectedCardId=null;
  updateStatus();applyFilter();
}
async function pickNewSource(f){
  const p=await api.pickSource();if(!p)return;
  snapshot();f.orig=p;f.missing=false;
  f.type=/\.(mp4|mov|webm|avi|mkv)$/i.test(p)?'v':'i';
  const info=await api.fileInfo(p);f.sizeMB=Math.round(info.size/1024/1024);
  refreshCard(f);updateStatus();showHint(t('pick_source')+': '+p.split(/[\\/]/).pop());
}

// ── СОХРАНЕНИЕ PNG ───────────────────────────────────────────────────
function openSavePngModal(){
  if(!boardProject){return;}
  const files=getBoardFiles(),lbls=getLabels();
  if(!files.length&&!lbls.length){showHint(t('nothing_export'));return;}
  const projName=boardProject.name||'canvas';
  const scaleOpts=[{v:'1',l:'100%'},{v:'0.5',l:'50%'},{v:'0.25',l:'25%'}];
  let selScale='1';
  const scaleRow=scaleOpts.map(o=>`<button class="m-btn" id="pscale-${o.v}" style="flex:1;padding:5px 0;font-size:11px;background:${o.v==='1'?'var(--accent-bg)':'var(--bg5)'};color:${o.v==='1'?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${o.v==='1'?'var(--accent)':'var(--border3)'}">${o.l}</button>`).join('');
  openModal(
    t('save_png'),
    `<label class="m-label">${t('proj_name')}</label>
     <input class="m-input" id="inp-png-name" value="${projName}" style="margin-bottom:12px">
     <label class="m-label">${t('save_folder')}</label>
     <div style="display:flex;gap:6px;margin-bottom:12px">
       <input class="m-input" id="inp-png-folder" style="flex:1" readonly>
       <button id="btn-png-browse" style="all:unset;box-sizing:border-box;background:var(--bg5);border:0.5px solid var(--border3);color:var(--text2);border-radius:6px;padding:0 12px;font-size:11px;cursor:pointer;white-space:nowrap">${t('browse')}</button>
     </div>
     <label class="m-label">${t('save_png_scale')}</label>
     <div style="display:flex;gap:6px">${scaleRow}</div>`,
    t('png_save'),'ok',
    async()=>{
      const name=(document.getElementById('inp-png-name')?.value.trim()||projName).replace(/\.[^.]+$/,'');
      const folder=document.getElementById('inp-png-folder')?.value.trim()||'';
      await doSavePng(name,folder,parseFloat(selScale));
    }
  );
  setTimeout(async()=>{
    const desktop=await api.getDesktopDir();
    const fi=document.getElementById('inp-png-folder');if(fi)fi.value=desktop;
    document.getElementById('btn-png-browse').onclick=async()=>{const f=await api.pickFolder();if(f&&fi)fi.value=f;};
    scaleOpts.forEach(o=>{
      const btn=document.getElementById('pscale-'+o.v);if(!btn)return;
      btn.onclick=()=>{
        selScale=o.v;
        scaleOpts.forEach(x=>{
          const b=document.getElementById('pscale-'+x.v);if(!b)return;
          const sel=x.v===o.v;
          b.style.background=sel?'var(--accent-bg)':'var(--bg5)';
          b.style.color=sel?'var(--accent-t)':'var(--text2)';
          b.style.borderColor=sel?'var(--accent)':'var(--border3)';
        });
      };
    });
  },60);
}

async function doSavePng(name,folder,scale){
  showHint(t('rendering'));
  try{
    const cv=await renderBoardToPng(scale);
    if(!cv){showHint(t('nothing_export'));return;}
    const dataUrl=cv.toDataURL('image/png');
    const saved=await api.savePng(dataUrl,name,folder);
    if(saved)showHint(t('hint_saved')+saved.split(/[\\/]/).pop());
  }catch(e){showHint(t('save_error'));}
}

async function renderBoardToPng(scale, snap){
  const files=getBoardFiles(),lbls=getLabels(),stickies=getStickies();
  if(!files.length&&!lbls.length&&!stickies.length)return null;

  // Bounding box (always computed — needed for board mode and center fallback)
  let x1=Infinity,y1=Infinity,x2=-Infinity,y2=-Infinity;
  files.forEach(f=>{x1=Math.min(x1,f.x);y1=Math.min(y1,f.y);x2=Math.max(x2,f.x+f.w);y2=Math.max(y2,f.y+f.h);});
  lbls.forEach(l=>{x1=Math.min(x1,l.x);y1=Math.min(y1,l.y);x2=Math.max(x2,l.x+l.fontSize*l.text.length*0.65+20);y2=Math.max(y2,l.y+l.fontSize*1.5+8);});
  stickies.forEach(s=>{x1=Math.min(x1,s.x);y1=Math.min(y1,s.y);x2=Math.max(x2,s.x+s.w);y2=Math.max(y2,s.y+s.h);});

  const PAD=24;
  let ox,oy,W,H,rs; // rs = render scale (world units → output pixels)

  if(thumbMode==='viewport'&&snap){
    const vz=snap.zoom;
    ox=-snap.panX/vz; oy=-snap.panY/vz;
    W=Math.round(snap.w*scale); H=Math.round(snap.h*scale);
    rs=vz*scale;
  } else if(thumbMode==='center'&&files.length){
    const cx=files.reduce((s,f)=>s+f.x+f.w/2,0)/files.length;
    const cy=files.reduce((s,f)=>s+f.y+f.h/2,0)/files.length;
    const vz=snap?snap.zoom:1, vw=snap?snap.w:1280, vh=snap?snap.h:720;
    ox=cx-vw/(2*vz); oy=cy-vh/(2*vz);
    W=Math.round(vw*scale); H=Math.round(vh*scale);
    rs=vz*scale;
  } else {
    ox=x1-PAD; oy=y1-PAD;
    W=Math.round((x2-x1+PAD*2)*scale); H=Math.round((y2-y1+PAD*2)*scale);
    rs=scale;
  }

  const cv=document.createElement('canvas');
  cv.width=Math.max(W,1);cv.height=Math.max(H,1);
  const ctx=cv.getContext('2d');

  await document.fonts.ready;

  // Background
  ctx.fillStyle=theme==='dark'?'#1a1a1a':'#f0f0f7';
  ctx.fillRect(0,0,W,H);

  // Координата холста из мировой
  const wx=v=>(v-ox)*rs;
  const wy=v=>(v-oy)*rs;

  // Загрузка изображения
  const loadImg=src=>new Promise(res=>{
    const img=new Image();img.onload=()=>res(img);img.onerror=()=>res(null);img.src=src;
  });

  // roundRect: используем нативный или рисуем вручную
  const rr=(x,y,w,h,r)=>{
    ctx.beginPath();
    if(ctx.roundRect){ctx.roundRect(x,y,w,h,r);}
    else{ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
  };

  // ── КАРТОЧКИ ──
  for(const f of files){
    const cx=wx(f.x),cy=wy(f.y);
    const cw=f.w*rs,ch=f.h*rs;
    const thumbH=(f.h-32)*rs,footH=32*rs;
    const rad=8*rs;

    // Фон карточки
    ctx.save();
    rr(cx,cy,cw,ch,rad);
    ctx.fillStyle=theme==='dark'?'#232323':'#ffffff';ctx.fill();
    ctx.strokeStyle=theme==='dark'?'#3a3a3a':'#e0e0e0';ctx.lineWidth=0.5;ctx.stroke();
    ctx.restore();

    // Клип области превью
    ctx.save();
    rr(cx,cy,cw,thumbH,rad);ctx.clip();

    let drew=false;

    // Деактивированная карточка с сохранённым превью
    if(f.disabled&&cardPreviews.has(f.id)){
      const pi=await loadImg(cardPreviews.get(f.id));
      if(pi){ctx.globalAlpha=0.55;ctx.filter='grayscale(50%)';ctx.drawImage(pi,cx,cy,cw,thumbH);ctx.globalAlpha=1;ctx.filter='none';drew=true;}
    }
    // Картинка
    if(!drew&&f.type==='i'&&!f.missing){
      const img=await loadImg(fileToUrl(f.orig));
      if(img){ctx.drawImage(img,cx,cy,cw,thumbH);drew=true;}
    }
    // Видео — берём кадр из существующего DOM-элемента
    if(!drew&&f.type==='v'&&!f.disabled&&!f.missing){
      const vid=document.getElementById('card-'+f.id)?.querySelector('video');
      if(vid&&vid.readyState>=2){ctx.drawImage(vid,cx,cy,cw,thumbH);drew=true;}
    }
    // Заглушка
    if(!drew){
      ctx.fillStyle=f.type==='v'?(theme==='dark'?'#162616':'#e8f0e8'):(theme==='dark'?'#161a26':'#e8ecf4');
      ctx.fillRect(cx,cy,cw,thumbH);
    }
    ctx.restore();

    // Footer
    const fbg=footerBg(f.color);
    ctx.fillStyle=fbg||(theme==='dark'?'#1c1c1c':'#f5f5f5');
    ctx.fillRect(cx,cy+thumbH,cw,footH);

    // Имя файла
    ctx.font=`${Math.max(9,11*rs)}px -apple-system,BlinkMacSystemFont,sans-serif`;
    ctx.fillStyle=f.color!=='none'?'#ffffff':(theme==='dark'?'#cccccc':'#333333');
    ctx.textBaseline='middle';ctx.textAlign='left';
    ctx.fillText(f.name,cx+8*rs,cy+thumbH+footH/2,cw-50*rs);

    // Бейдж типа
    const badge=f.disabled?'OFF':f.type==='v'?'VID':'IMG';
    const bw=30*rs,bh=16*rs;
    ctx.fillStyle=f.disabled?'#4a4a4a':f.type==='v'?'#1a3a28':'#1a2a42';
    rr(cx+cw-bw-6*rs,cy+thumbH+(footH-bh)/2,bw,bh,3*rs);ctx.fill();
    ctx.fillStyle=f.disabled?'#888':f.type==='v'?'#4caf7d':'#5b9cf6';
    ctx.font=`bold ${Math.max(7,8*rs)}px sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(badge,cx+cw-bw/2-6*rs,cy+thumbH+footH/2);
    ctx.textAlign='left';
  }

  // ── СТИКЕРЫ ──
  const SFMAP={montserrat:'Montserrat,sans-serif',jost:'Jost,sans-serif',calibri:'Calibri,Segoe UI,sans-serif'};
  for(const s of stickies){
    const sx=wx(s.x),sy=wy(s.y),sw=s.w*rs,sh=s.h*rs;
    ctx.fillStyle=STICKY_BG[s.color]||'#888888';
    ctx.fillRect(sx,sy,sw,sh);
    const lines=s.text.split('\n');
    const fs=Math.max(10,s.fontSize*rs);
    ctx.font=`${s.italic?'italic ':''} ${s.bold?'bold ':''}${fs}px ${SFMAP[s.fontFamily]||SFMAP.montserrat}`;
    ctx.fillStyle=STICKY_TEXT[s.color]||'#ffffff';
    ctx.textBaseline='middle';ctx.textAlign='center';
    const lineH=fs*1.3;
    const startY=sy+sh/2-(lines.length-1)*lineH/2;
    lines.forEach((line,i)=>ctx.fillText(line,sx+sw/2,startY+i*lineH,sw-16*rs));
  }

  // ── ЛЕЙБЛЫ ──
  for(const l of lbls){
    const lx=wx(l.x)+8*rs,ly=wy(l.y)+4*rs;
    const colorMap={white:theme==='dark'?'#e0e0e0':'#1a1a1a',yellow:'#f5c842',cyan:'#5bc8f5'};
    const col=colorMap[l.color]||'#e0e0e0';
    const fam=l.font==='jost'?'Jost,sans-serif':l.font==='calibri'?'Calibri,Segoe UI,sans-serif':'Montserrat,sans-serif';
    ctx.font=`${l.italic?'italic ':''} ${l.bold?'bold ':''}${l.fontSize*rs}px ${fam}`;
    ctx.fillStyle=col;ctx.textBaseline='top';ctx.textAlign='left';
    ctx.fillText(l.text,lx,ly);
    if(l.underline||l.strikethrough){
      const tw=ctx.measureText(l.text).width;
      const dy=l.underline?l.fontSize*rs*1.1:l.fontSize*rs*0.55;
      ctx.strokeStyle=col;ctx.lineWidth=Math.max(1,l.fontSize*rs*0.07);
      ctx.beginPath();ctx.moveTo(lx,ly+dy);ctx.lineTo(lx+tw,ly+dy);ctx.stroke();
    }
  }

  return cv;
}

// ── СОХРАНЕНИЕ ───────────────────────────────────────────────────────
async function saveBoardProjectByIndex(idx){
  const proj=boardProjects[idx];if(!proj||!proj._path)return;
  const data={...proj};delete data._path;delete data._dirty;delete data.thumbnail;await api.saveProject(proj._path,data);
  proj._dirty=false;
}
async function saveBoardProject(){
  if(activeBoardIndex===-1)return;
  if(boardProject){boardProject.zoom=zoom;boardProject.canvasX=panX;boardProject.canvasY=panY;}
  await saveBoardProjectByIndex(activeBoardIndex);showHint(t('save_proj')+' ✓');
  if(boardProject&&boardProject._path){
    const proj=boardProject;
    const cvs=document.getElementById('board-canvas');
    const snap={panX,panY,zoom,w:cvs?cvs.offsetWidth:1280,h:cvs?cvs.offsetHeight:720};
    try{
      const cv=await renderBoardToPng(0.35,snap);
      if(cv){
        const dataUrl=cv.toDataURL('image/jpeg',0.92);
        proj.thumbnail=dataUrl;
        api.saveThumb(proj._path,dataUrl);
      }
    }catch{}
  }
}
function openBoardWithData(data){
  const existing=boardProjects.findIndex(p=>p._path===data._path);
  if(existing!==-1){
    activeBoardIndex=existing;boardProject=boardProjects[activeBoardIndex];
    zoom=boardProject.zoom||1;panX=boardProject.canvasX||0;panY=boardProject.canvasY||0;
    showScreen('board');renderTabs();buildBoardScreen();return;
  }
  boardProjects.push(data);activeBoardIndex=boardProjects.length-1;boardProject=boardProjects[activeBoardIndex];
  zoom=data.zoom||1;panX=data.canvasX||0;panY=data.canvasY||0;
  undoStack.length=0;redoStack.length=0;activeFilter=null;selectedCardId=null;selectedLabelId=null;
  searchQuery='';searchHits=[];searchHitIdx=0;
  showScreen('board');renderTabs();buildBoardScreen();
}

async function checkMissingFiles(){
  if(!boardProject)return;let changed=false;
  for(const f of getBoardFiles()){
    const exists=await api.fileExists(f.orig);
    if(!exists&&!f.missing){f.missing=true;refreshCard(f);changed=true;}
    if(exists&&f.missing){f.missing=false;refreshCard(f);changed=true;}
  }
  if(changed)updateStatus();
}

// ═══════════════════════════════════════════════════════════════════
//  ЛЕЙБЛЫ
// ═══════════════════════════════════════════════════════════════════
function getLabels(){if(!boardProject.labels)boardProject.labels=[];return boardProject.labels;}

function addLabel(worldX,worldY,initialText){
  snapshot();
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  let wx=worldX,wy=worldY;
  if(wx===null||wx===undefined){const w=toWorld(wrap.offsetWidth/2,wrap.offsetHeight/2);wx=w.wx;wy=w.wy;}
  const id=Date.now()+Math.random();
  const label={id,text:initialText||'Label',x:wx,y:wy,fontSize:24,bold:false,italic:false,underline:false,strikethrough:false,color:'white',font:'montserrat'};
  getLabels().push(label);makeLabelEl(label);updateStatus();
}

function renderAllLabels(){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  wrap.querySelectorAll('.board-label').forEach(l=>l.remove());
  getLabels().forEach(l=>makeLabelEl(l));
}

// ── СТИКЕРЫ ──────────────────────────────────────────────────────────
function getStickies(){if(!boardProject.stickies)boardProject.stickies=[];return boardProject.stickies;}
function renderAllStickies(){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  wrap.querySelectorAll('.board-sticky').forEach(s=>s.remove());
  getStickies().forEach(s=>makeSticky(s));
}
function addSticky(worldX,worldY){
  snapshot();
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  let wx=worldX,wy=worldY;
  if(wx===null||wx===undefined){const w=toWorld(wrap.offsetWidth/2,wrap.offsetHeight/2);wx=w.wx-80;wy=w.wy-80;}
  const id=Date.now()+Math.random();
  const sticky={id,x:wx,y:wy,w:160,h:160,shape:'square',text:'Sticky',color:'yellow',fontSize:16,bold:false,italic:false,underline:false,strikethrough:false,fontFamily:'montserrat'};
  getStickies().push(sticky);makeSticky(sticky);updateStatus();
}
function applyStickyStyle(el,s){
  const span=el.querySelector('.sticky-text');
  el.style.background=STICKY_BG[s.color]||STICKY_BG.none;
  if(span){
    const FMAP={montserrat:'Montserrat,sans-serif',jost:'Jost,sans-serif',calibri:'Calibri,Segoe UI,sans-serif'};
    span.style.fontSize=s.fontSize*zoom+'px';
    span.style.fontWeight=s.bold?'700':'400';
    span.style.fontStyle=s.italic?'italic':'normal';
    span.style.textDecoration=[s.underline?'underline':'',s.strikethrough?'line-through':''].filter(Boolean).join(' ')||'none';
    span.style.fontFamily=FMAP[s.fontFamily]||FMAP.montserrat;
    span.style.color=STICKY_TEXT[s.color]||STICKY_TEXT.none;
  }
}
function refreshStickyStyle(s){const el=document.getElementById('sticky-'+s.id);if(el)applyStickyStyle(el,s);}
function makeSticky(s){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  const d=document.createElement('div');d.className='board-sticky';d.id='sticky-'+s.id;
  const sc=toScreen(s.x,s.y);
  d.style.cssText=`position:absolute;left:${sc.sx}px;top:${sc.sy}px;width:${s.w*zoom}px;height:${s.h*zoom}px;border-radius:0;border:none;overflow:hidden;cursor:move;box-sizing:border-box;display:flex;align-items:center;justify-content:center;padding:10px;user-select:none;z-index:20`;
  const span=document.createElement('div');span.className='sticky-text';
  span.textContent=s.text;
  span.style.cssText='white-space:pre-wrap;word-break:break-word;text-align:center;width:100%;outline:none';
  d.appendChild(span);
  applyStickyStyle(d,s);

  const rz=document.createElement('div');rz.className='sticky-resize';
  rz.style.cssText='position:absolute;right:0;bottom:0;width:14px;height:14px;cursor:nwse-resize;z-index:5;opacity:0.4';
  rz.innerHTML='<svg viewBox="0 0 10 10" width="10" height="10"><polyline points="3,9 9,9 9,3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  rz.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    e.stopPropagation();e.preventDefault();
    snapshot();
    const rsx=e.clientX,rsy=e.clientY,rw=s.w,rh=s.h;
    const mm=ev=>{
      s.w=Math.max(80,rw+(ev.clientX-rsx)/zoom);s.h=Math.max(60,rh+(ev.clientY-rsy)/zoom);
      if(s.shape==='square'){const side=Math.max(s.w,s.h);s.w=side;s.h=side;}
      d.style.width=s.w*zoom+'px';d.style.height=s.h*zoom+'px';
    };
    const mu=()=>{window.removeEventListener('mousemove',mm);window.removeEventListener('mouseup',mu);};
    window.addEventListener('mousemove',mm);window.addEventListener('mouseup',mu);
  });
  d.appendChild(rz);

  span.addEventListener('dblclick',e=>{
    e.stopPropagation();span.contentEditable='true';span.style.cursor='text';d.style.cursor='text';span.focus();
    const range=document.createRange();range.selectNodeContents(span);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);
  });
  span.addEventListener('blur',()=>{span.contentEditable='false';span.style.cursor='';d.style.cursor='move';s.text=span.textContent||'Sticky';snapshot();});
  span.addEventListener('keydown',e=>{if(e.key==='Escape')span.blur();e.stopPropagation();});

  let dragging=false,moved=false,dsx=0,dsy=0,dwx=0,dwy=0,prevDX2=0,prevDY2=0;
  d.addEventListener('mousedown',e=>{
    if(e.target===span&&span.contentEditable==='true')return;
    if(e.target.closest('.sticky-resize'))return;
    if(e.button!==0)return;
    e.stopPropagation();
    if(e.ctrlKey){
      if(e.shiftKey){multiSelStickies.add(s.id);d.classList.add('selected');}
      else if(e.altKey){multiSelStickies.delete(s.id);d.classList.remove('selected');}
      else{if(multiSelStickies.has(s.id)){multiSelStickies.delete(s.id);d.classList.remove('selected');}else{multiSelStickies.add(s.id);d.classList.add('selected');}}
      refreshMultiSelBorders();selectedStickyId=null;selectedCardId=null;selectedLabelId=null;return;
    }
    if(!multiSelStickies.has(s.id)||!hasMultiSel()){clearMultiSel();multiSelStickies.add(s.id);}
    d.classList.add('selected');selectedStickyId=s.id;selectedCardId=null;selectedLabelId=null;
    dragging=true;moved=false;dsx=e.clientX;dsy=e.clientY;dwx=s.x;dwy=s.y;prevDX2=e.clientX;prevDY2=e.clientY;
    if(hasMultiSel()){multiDragOX=e.clientX;multiDragOY=e.clientY;multiSelCards.forEach(id=>{const ff=getBoardFiles().find(x=>x.id===id);if(ff)multiDragC.set(id,{x:ff.x,y:ff.y});});multiSelLabels.forEach(id=>{const ll=getLabels().find(x=>x.id===id);if(ll)multiDragL.set(id,{x:ll.x,y:ll.y});});multiSelStickies.forEach(id=>{const ss=getStickies().find(x=>x.id===id);if(ss)multiDragS.set(id,{x:ss.x,y:ss.y});});}
    document.getElementById('board-canvas').focus();closeCtx();
  });
  window.addEventListener('mousemove',e=>{
    if(!dragging)return;
    if(!moved){snapshot();moved=true;}
    if(hasMultiSel()&&multiSelStickies.has(s.id)){
      const rawTdx=(e.clientX-multiDragOX)/zoom,rawTdy=(e.clientY-multiDragOY)/zoom;
      let tdx=rawTdx,tdy=rawTdy;
      if(snapOn){const anchor=multiDragS.get(s.id);if(anchor){const sn=snapW(anchor.x+rawTdx,anchor.y+rawTdy);tdx=sn.wx-anchor.x;tdy=sn.wy-anchor.y;}}
      multiSelCards.forEach(id=>{
        const ff=getBoardFiles().find(x=>x.id===id);const st=multiDragC.get(id);if(!ff||!st)return;
        ff.x=st.x+tdx;ff.y=st.y+tdy;const c=document.getElementById('card-'+id);
        if(c){const sc2=toScreen(ff.x,ff.y);c.style.left=sc2.sx+'px';c.style.top=sc2.sy+'px';}
      });
      multiSelLabels.forEach(id=>{
        const ll=getLabels().find(x=>x.id===id);const st=multiDragL.get(id);if(!ll||!st)return;
        ll.x=st.x+tdx;ll.y=st.y+tdy;const el2=document.getElementById('label-'+id);
        if(el2){const sc2=toScreen(ll.x,ll.y);el2.style.left=sc2.sx+'px';el2.style.top=sc2.sy+'px';}
      });
      multiSelStickies.forEach(id=>{
        const ss=getStickies().find(x=>x.id===id);const st=multiDragS.get(id);if(!ss||!st)return;
        ss.x=st.x+tdx;ss.y=st.y+tdy;const el2=document.getElementById('sticky-'+id);
        if(el2){const sc2=toScreen(ss.x,ss.y);el2.style.left=sc2.sx+'px';el2.style.top=sc2.sy+'px';}
      });
    } else {
      let nx=dwx+(e.clientX-dsx)/zoom,ny=dwy+(e.clientY-dsy)/zoom;
      if(snapOn){const sv=snapW(nx,ny);nx=sv.wx;ny=sv.wy;}
      s.x=nx;s.y=ny;const sc2=toScreen(s.x,s.y);d.style.left=sc2.sx+'px';d.style.top=sc2.sy+'px';
    }
  });
  window.addEventListener('mouseup',()=>{if(dragging)dragging=false;});
  d.addEventListener('contextmenu',e=>{
    e.preventDefault();e.stopPropagation();
    if(hasMultiSel()&&multiSelStickies.has(s.id)){openMultiCtx(e.clientX,e.clientY);return;}
    document.querySelectorAll('.board-sticky').forEach(el2=>el2.classList.remove('selected'));
    d.classList.add('selected');selectedStickyId=s.id;selectedCardId=null;selectedLabelId=null;
    openStickyCtx(s,d,e.clientX,e.clientY);
  });
  wrap.appendChild(d);
}
function openStickyCtx(s,el,x,y){
  const FONTS=['montserrat','jost','calibri'],FONTNAMES=['Montserrat','Jost','Calibri'];
  openCtx([
    {icon:'ti-trash',label:t('delete'),danger:true,action:()=>{
      snapshot();boardProject.stickies=getStickies().filter(st=>st.id!==s.id);el.remove();selectedStickyId=null;
    }},
    'sep',
  ],x,y);

  // Форма
  const shapeRow=document.createElement('div');shapeRow.style.cssText='padding:5px 12px;display:flex;gap:6px;align-items:center';
  const shapeLbl=document.createElement('span');shapeLbl.style.cssText='font-size:10px;color:var(--text4)';shapeLbl.textContent=t('shape_lbl');shapeRow.appendChild(shapeLbl);
  [{key:'square',label:t('shape_square'),w:160,h:160},{key:'rect',label:t('shape_rect'),w:240,h:120}].forEach(sh=>{
    const btn=document.createElement('button');
    btn.style.cssText=`all:unset;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;background:${s.shape===sh.key?'var(--accent-bg)':'var(--bg5)'};color:${s.shape===sh.key?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${s.shape===sh.key?'var(--accent)':'var(--border3)'}`;
    btn.textContent=sh.label;
    btn.onclick=e=>{
      e.stopPropagation();snapshot();s.shape=sh.key;s.w=sh.w;s.h=sh.h;
      el.style.width=s.w*zoom+'px';el.style.height=s.h*zoom+'px';
      shapeRow.querySelectorAll('button').forEach(b=>{b.style.background='var(--bg5)';b.style.color='var(--text2)';b.style.borderColor='var(--border3)';});
      btn.style.background='var(--accent-bg)';btn.style.color='var(--accent-t)';btn.style.borderColor='var(--accent)';
    };
    shapeRow.appendChild(btn);
  });
  ctxEl.appendChild(shapeRow);

  const sep1=document.createElement('div');sep1.className='ctx-sep';ctxEl.appendChild(sep1);

  // Стиль текста
  const styleRow=document.createElement('div');styleRow.style.cssText='padding:6px 12px;display:flex;gap:6px;align-items:center';
  [{prop:'bold',icon:'B',style:'font-weight:700'},{prop:'italic',icon:'I',style:'font-style:italic'},{prop:'underline',icon:'U',style:'text-decoration:underline'},{prop:'strikethrough',icon:'S',style:'text-decoration:line-through'}].forEach(sb=>{
    const btn=document.createElement('button');
    btn.style.cssText=`all:unset;width:24px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;${sb.style};background:${s[sb.prop]?'var(--accent-bg)':'var(--bg5)'};color:${s[sb.prop]?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${s[sb.prop]?'var(--accent)':'var(--border3)'}`;
    btn.textContent=sb.icon;
    btn.onclick=e=>{e.stopPropagation();snapshot();s[sb.prop]=!s[sb.prop];btn.style.background=s[sb.prop]?'var(--accent-bg)':'var(--bg5)';btn.style.color=s[sb.prop]?'var(--accent-t)':'var(--text2)';btn.style.borderColor=s[sb.prop]?'var(--accent)':'var(--border3)';refreshStickyStyle(s);};
    styleRow.appendChild(btn);
  });
  const sepS=document.createElement('div');sepS.style.cssText='width:0.5px;height:18px;background:var(--border3);margin:0 2px';styleRow.appendChild(sepS);
  const sizeLbl=document.createElement('span');sizeLbl.style.cssText='font-size:10px;color:var(--text2);min-width:28px;text-align:center';sizeLbl.textContent=s.fontSize+'px';
  const mkSz=(icon,delta)=>{const b=document.createElement('button');b.style.cssText='all:unset;width:20px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;background:var(--bg5);color:var(--text2)';b.innerHTML=`<i class="ti ti-${icon}"></i>`;b.onclick=e=>{e.stopPropagation();snapshot();s.fontSize=Math.max(8,Math.min(120,s.fontSize+delta));sizeLbl.textContent=s.fontSize+'px';refreshStickyStyle(s);};return b;};
  styleRow.appendChild(mkSz('minus',-2));styleRow.appendChild(sizeLbl);styleRow.appendChild(mkSz('plus',2));
  ctxEl.appendChild(styleRow);

  const sep2=document.createElement('div');sep2.className='ctx-sep';ctxEl.appendChild(sep2);

  // Цвет
  const colorRow=document.createElement('div');colorRow.style.cssText='padding:5px 12px;display:flex;gap:6px;align-items:center';
  const clbl=document.createElement('span');clbl.style.cssText='font-size:10px;color:var(--text4)';clbl.textContent=t('color_pick');colorRow.appendChild(clbl);
  LABEL_COLORS.forEach(c=>{
    const dot=document.createElement('div');
    dot.style.cssText=`width:16px;height:16px;border-radius:4px;cursor:pointer;background:${c.key==='none'?'#555':c.dot};border:1.5px solid ${s.color===c.key?'#fff':'transparent'}`;
    dot.onclick=e=>{e.stopPropagation();snapshot();s.color=c.key;refreshStickyStyle(s);colorRow.querySelectorAll('div').forEach(d2=>d2.style.borderColor='transparent');dot.style.borderColor='#fff';};
    colorRow.appendChild(dot);
  });
  ctxEl.appendChild(colorRow);

  const sep3=document.createElement('div');sep3.className='ctx-sep';ctxEl.appendChild(sep3);

  // Шрифт
  const fontRow=document.createElement('div');fontRow.style.cssText='padding:5px 12px;display:flex;gap:5px;flex-wrap:wrap';
  FONTS.forEach((f,i)=>{
    const btn=document.createElement('button');
    btn.style.cssText=`all:unset;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;font-family:${f==='calibri'?'Calibri,Segoe UI,sans-serif':f};background:${s.fontFamily===f?'var(--accent-bg)':'var(--bg5)'};color:${s.fontFamily===f?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${s.fontFamily===f?'var(--accent)':'var(--border3)'}`;
    btn.textContent=FONTNAMES[i];
    btn.onclick=e=>{e.stopPropagation();snapshot();s.fontFamily=f;refreshStickyStyle(s);fontRow.querySelectorAll('button').forEach(b=>{b.style.background='var(--bg5)';b.style.color='var(--text2)';b.style.borderColor='var(--border3)';});btn.style.background='var(--accent-bg)';btn.style.color='var(--accent-t)';btn.style.borderColor='var(--accent)';};
    fontRow.appendChild(btn);
  });
  ctxEl.appendChild(fontRow);
}

function makeLabelEl(label){
  const wrap=document.getElementById('board-canvas');if(!wrap)return;
  const d=document.createElement('div');d.className='board-label';d.id='label-'+label.id;
  d.style.whiteSpace='nowrap';d.style.width='max-content';
  const sc=toScreen(label.x,label.y);d.style.left=sc.sx+'px';d.style.top=sc.sy+'px';

  const span=document.createElement('div');span.className='label-text';span.textContent=label.text;
  span.style.whiteSpace='nowrap';d.appendChild(span);
  applyLabelStyle(d,label);

  const rh=document.createElement('div');rh.className='label-resize-h';
  rh.addEventListener('mousedown',e=>{
    if(e.button!==0)return;
    e.stopPropagation();e.preventDefault();
    snapshot();
    let rsx=e.clientX,rfs=label.fontSize;
    const mm=ev=>{label.fontSize=Math.max(8,Math.min(160,Math.round(rfs+(ev.clientX-rsx)/zoom/3)));applyLabelStyle(d,label);};
    const mu=()=>{window.removeEventListener('mousemove',mm);window.removeEventListener('mouseup',mu);};
    window.addEventListener('mousemove',mm);window.addEventListener('mouseup',mu);
  });
  d.appendChild(rh);

  span.addEventListener('dblclick',e=>{
    e.stopPropagation();span.contentEditable='true';span.style.cursor='text';d.style.cursor='text';span.focus();
    const range=document.createRange();range.selectNodeContents(span);const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);
  });
  span.addEventListener('blur',()=>{span.contentEditable='false';span.style.cursor='';d.style.cursor='move';label.text=span.textContent||'Label';snapshot();});
  span.addEventListener('keydown',e=>{if(e.key==='Escape')span.blur();e.stopPropagation();});

  let dragging=false,moved=false,dsx=0,dsy=0,dwx=0,dwy=0,prevDX=0,prevDY=0;
  d.addEventListener('mousedown',e=>{
    if(e.target===span&&span.contentEditable==='true')return;
    if(e.target.closest('.label-resize-h'))return;
    if(e.button!==0)return;
    e.stopPropagation();
    if(e.ctrlKey){
      if(e.shiftKey){multiSelLabels.add(label.id);d.classList.add('selected');}
      else if(e.altKey){multiSelLabels.delete(label.id);d.classList.remove('selected');}
      else{if(multiSelLabels.has(label.id)){multiSelLabels.delete(label.id);d.classList.remove('selected');}else{multiSelLabels.add(label.id);d.classList.add('selected');}}
      refreshMultiSelBorders();selectedLabelId=null;selectedCardId=null;return;
    }
    if(!multiSelLabels.has(label.id)||!hasMultiSel()){clearMultiSel();multiSelLabels.add(label.id);}
    d.classList.add('selected');selectedLabelId=label.id;selectedCardId=null;
    dragging=true;moved=false;dsx=e.clientX;dsy=e.clientY;dwx=label.x;dwy=label.y;prevDX=e.clientX;prevDY=e.clientY;
    if(hasMultiSel()){multiDragOX=e.clientX;multiDragOY=e.clientY;multiSelCards.forEach(id=>{const ff=getBoardFiles().find(x=>x.id===id);if(ff)multiDragC.set(id,{x:ff.x,y:ff.y});});multiSelLabels.forEach(id=>{const ll=getLabels().find(x=>x.id===id);if(ll)multiDragL.set(id,{x:ll.x,y:ll.y});});multiSelStickies.forEach(id=>{const ss=getStickies().find(x=>x.id===id);if(ss)multiDragS.set(id,{x:ss.x,y:ss.y});});}
    document.getElementById('board-canvas').focus();closeCtx();
  });
  window.addEventListener('mousemove',e=>{
    if(!dragging)return;
    if(!moved){snapshot();moved=true;}
    if(hasMultiSel()&&multiSelLabels.has(label.id)){
      const rawTdx=(e.clientX-multiDragOX)/zoom,rawTdy=(e.clientY-multiDragOY)/zoom;
      let tdx=rawTdx,tdy=rawTdy;
      if(snapOn){const anchor=multiDragL.get(label.id);if(anchor){const sn=snapW(anchor.x+rawTdx,anchor.y+rawTdy);tdx=sn.wx-anchor.x;tdy=sn.wy-anchor.y;}}
      multiSelCards.forEach(id=>{
        const ff=getBoardFiles().find(x=>x.id===id);const st=multiDragC.get(id);if(!ff||!st)return;
        ff.x=st.x+tdx;ff.y=st.y+tdy;const c=document.getElementById('card-'+id);
        if(c){const sc=toScreen(ff.x,ff.y);c.style.left=sc.sx+'px';c.style.top=sc.sy+'px';}
      });
      multiSelLabels.forEach(id=>{
        const ll=getLabels().find(x=>x.id===id);const st=multiDragL.get(id);if(!ll||!st)return;
        ll.x=st.x+tdx;ll.y=st.y+tdy;const el=document.getElementById('label-'+id);
        if(el){const sc=toScreen(ll.x,ll.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';}
      });
      multiSelStickies.forEach(id=>{
        const ss=getStickies().find(x=>x.id===id);const st=multiDragS.get(id);if(!ss||!st)return;
        ss.x=st.x+tdx;ss.y=st.y+tdy;const el=document.getElementById('sticky-'+id);
        if(el){const sc=toScreen(ss.x,ss.y);el.style.left=sc.sx+'px';el.style.top=sc.sy+'px';}
      });
    } else {
      let nx=dwx+(e.clientX-dsx)/zoom,ny=dwy+(e.clientY-dsy)/zoom;
      if(snapOn){const s=snapW(nx,ny);nx=s.wx;ny=s.wy;}
      label.x=nx;label.y=ny;const sc2=toScreen(label.x,label.y);d.style.left=sc2.sx+'px';d.style.top=sc2.sy+'px';
    }
  });
  window.addEventListener('mouseup',()=>{if(dragging){dragging=false;}});
  d.addEventListener('contextmenu',e=>{
    e.preventDefault();e.stopPropagation();
    if(hasMultiSel()&&multiSelLabels.has(label.id)){openMultiCtx(e.clientX,e.clientY);return;}
    document.querySelectorAll('.board-label').forEach(l=>l.classList.remove('selected'));
    d.classList.add('selected');selectedLabelId=label.id;selectedCardId=null;
    openLabelCtx(label,d,span,e.clientX,e.clientY);
  });
  wrap.appendChild(d);
}

function applyLabelStyle(el,label){
  const span=el.querySelector('.label-text');
  el.classList.remove('label-color-white','label-color-yellow','label-color-cyan');
  el.classList.remove('font-montserrat','font-jost','font-calibri');
  el.classList.add('label-color-'+label.color,'font-'+label.font);
  if(span){
    span.style.fontSize=label.fontSize*zoom+'px';
    span.style.fontWeight=label.bold?'700':'400';
    span.style.fontStyle=label.italic?'italic':'normal';
    span.style.textDecoration=[label.underline?'underline':'',label.strikethrough?'line-through':''].filter(Boolean).join(' ')||'none';
  }
}
function refreshLabelStyle(label){const el=document.getElementById('label-'+label.id);if(el)applyLabelStyle(el,label);}

function openLabelCtx(label,el,span,x,y){
  const FONTS=['montserrat','jost','calibri'],FONTNAMES=['Montserrat','Jost','Calibri'];
  const COLORS=['white','yellow','cyan'],COLORNAMES=lang==='ru'?['Белый/Чёрный','Жёлтый','Голубой']:['White/Black','Yellow','Cyan'];
  const COLORDOTS={'white':'#e0e0e0','yellow':'#f5c842','cyan':'#5bc8f5'};
  openCtx([{icon:'ti-trash',label:t('delete'),danger:true,action:()=>{snapshot();boardProject.labels=getLabels().filter(l=>l.id!==label.id);el.remove();selectedLabelId=null;}},'sep'],x,y);

  const styleRow=document.createElement('div');styleRow.style.cssText='padding:6px 12px;display:flex;gap:6px;align-items:center';
  [{prop:'bold',icon:'B',style:'font-weight:700'},{prop:'italic',icon:'I',style:'font-style:italic'},{prop:'underline',icon:'U',style:'text-decoration:underline'},{prop:'strikethrough',icon:'S',style:'text-decoration:line-through'}].forEach(sb=>{
    const btn=document.createElement('button');
    btn.style.cssText=`all:unset;width:24px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer;${sb.style};background:${label[sb.prop]?'var(--accent-bg)':'var(--bg5)'};color:${label[sb.prop]?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${label[sb.prop]?'var(--accent)':'var(--border3)'}`;
    btn.textContent=sb.icon;
    btn.onclick=e=>{e.stopPropagation();snapshot();label[sb.prop]=!label[sb.prop];btn.style.background=label[sb.prop]?'var(--accent-bg)':'var(--bg5)';btn.style.color=label[sb.prop]?'var(--accent-t)':'var(--text2)';btn.style.borderColor=label[sb.prop]?'var(--accent)':'var(--border3)';refreshLabelStyle(label);};
    styleRow.appendChild(btn);
  });
  const sep1=document.createElement('div');sep1.style.cssText='width:0.5px;height:18px;background:var(--border3);margin:0 2px';styleRow.appendChild(sep1);
  const sizeLbl=document.createElement('span');sizeLbl.style.cssText='font-size:10px;color:var(--text2);min-width:28px;text-align:center';sizeLbl.textContent=label.fontSize+'px';
  const mkSizeBtn=(icon,delta)=>{const b=document.createElement('button');b.style.cssText='all:unset;width:20px;height:24px;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;background:var(--bg5);color:var(--text2)';b.innerHTML=`<i class="ti ti-${icon}"></i>`;b.onclick=e=>{e.stopPropagation();snapshot();label.fontSize=Math.max(8,Math.min(160,label.fontSize+delta));sizeLbl.textContent=label.fontSize+'px';refreshLabelStyle(label);};return b;};
  styleRow.appendChild(mkSizeBtn('minus',-2));styleRow.appendChild(sizeLbl);styleRow.appendChild(mkSizeBtn('plus',2));
  ctxEl.appendChild(styleRow);

  const sep2=document.createElement('div');sep2.className='ctx-sep';ctxEl.appendChild(sep2);
  const colorRow=document.createElement('div');colorRow.style.cssText='padding:5px 12px;display:flex;gap:6px;align-items:center';
  const clbl=document.createElement('span');clbl.style.cssText='font-size:10px;color:var(--text4)';clbl.textContent=t('color_pick');colorRow.appendChild(clbl);
  COLORS.forEach((c,i)=>{
    const dot=document.createElement('div');dot.style.cssText=`width:16px;height:16px;border-radius:4px;cursor:pointer;background:${COLORDOTS[c]};border:1.5px solid ${label.color===c?'#fff':'transparent'}`;dot.title=COLORNAMES[i];
    dot.onclick=e=>{e.stopPropagation();snapshot();label.color=c;refreshLabelStyle(label);colorRow.querySelectorAll('div[title]').forEach(d=>d.style.borderColor='transparent');dot.style.borderColor='#fff';};
    colorRow.appendChild(dot);
  });
  ctxEl.appendChild(colorRow);

  const sep3=document.createElement('div');sep3.className='ctx-sep';ctxEl.appendChild(sep3);
  const fontRow=document.createElement('div');fontRow.style.cssText='padding:5px 12px;display:flex;gap:5px;flex-wrap:wrap';
  FONTS.forEach((f,i)=>{
    const btn=document.createElement('button');
    btn.style.cssText=`all:unset;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;font-family:${f==='calibri'?'Calibri,Segoe UI,sans-serif':f};background:${label.font===f?'var(--accent-bg)':'var(--bg5)'};color:${label.font===f?'var(--accent-t)':'var(--text2)'};border:0.5px solid ${label.font===f?'var(--accent)':'var(--border3)'}`;
    btn.textContent=FONTNAMES[i];
    btn.onclick=e=>{e.stopPropagation();snapshot();label.font=f;refreshLabelStyle(label);fontRow.querySelectorAll('button').forEach(b=>{b.style.background='var(--bg5)';b.style.color='var(--text2)';b.style.borderColor='var(--border3)';});btn.style.background='var(--accent-bg)';btn.style.color='var(--accent-t)';btn.style.borderColor='var(--accent)';};
    fontRow.appendChild(btn);
  });
  ctxEl.appendChild(fontRow);
}

// ═══════════════════════════════════════════════════════════════════
//  НАСТРОЙКИ
// ═══════════════════════════════════════════════════════════════════
function buildManualPage(){
  const r=lang==='ru';
  function sec(title,inner){return '<div class="man-sec"><div class="s-sec-title">'+title+'</div>'+inner+'</div>';}
  function itm(icon,name,desc,tip){return '<div class="man-item"><div class="man-row"><div class="man-icon-box"><i class="ti '+icon+'"></i></div><div class="man-cnt"><span class="man-name">'+name+'</span><div class="man-desc">'+desc+'</div>'+(tip?'<div class="man-tip">'+tip+'</div>':'')+'</div></div></div>';}
  function sc(keys,action){return '<div class="man-sc-row"><div class="man-sc-keys">'+keys.map(k=>'<kbd class="kbd">'+k+'</kbd>').join('<span class="man-sc-sep">+</span>')+'</div><span class="man-sc-act">'+action+'</span></div>';}

  const canvas=sec(r?'Доска — навигация':'Canvas — navigation',[
    itm('ti-hand-move',r?'Перемещение':'Panning',
      r?'ЛКМ по пустому месту, или зажми среднюю кнопку мыши поверх любого элемента.':'LMB drag on empty canvas, or hold middle mouse button over any element.',
      r?'Средняя кнопка работает даже поверх карточек — не нужно искать пустое место.':'Middle button works even over cards — no need to find empty space first.'),
    itm('ti-zoom-in',r?'Зум':'Zoom',
      r?'Колёсико мыши — зум в точку под курсором. Кнопки + / − в тулбаре — зум в центр холста.':'Mouse wheel zooms into the cursor. + / − toolbar buttons zoom to canvas center.',
      r?'Зум всегда зафиксирован на точке под курсором, а не на центре экрана.':'Zoom always anchors to the cursor point, not the screen center.'),
    itm('ti-selection',r?'Прямоугольное выделение':'Box selection',
      r?'Ctrl + тяни по пустому холсту — рамка выделяет все элементы внутри.':'Ctrl + drag on empty canvas — marquee selects all elements inside.',
      r?'Работает для карточек, надписей и стикеров одновременно.':'Works across cards, labels and stickies simultaneously.'),
  ].join(''));

  const cards=sec(r?'Карточки':'Cards',[
    itm('ti-file-plus',r?'Добавить файлы':'Add files',
      r?'Перетащи файл прямо на холст. Или кнопки <b>Файлы</b> / <b>Папка</b> в тулбаре.':'Drag a file onto the canvas, or use <b>Files</b> / <b>Folder</b> toolbar buttons.',
      r?'При перетаскивании карточка появляется точно там, куда бросил файл.':'On drag-drop, the card appears exactly where you dropped the file.'),
    itm('ti-arrows-move',r?'Перемещение и ресайз':'Move & resize',
      r?'Тяни карточку за любое место — переместить. Тяни нижний правый угол — изменить размер.':'Drag a card anywhere to move it. Drag the bottom-right corner to resize.',
      r?'Snap (сетка 40 пикселей) выравнивает карточки — кнопка Snap в тулбаре.':'Snap (40px grid) helps align cards — toggle the Snap button in the toolbar.'),
    itm('ti-player-pause',r?'Деактивация':'Deactivation',
      r?'ПКМ → Деактивировать (или Ctrl+D). Карточка замораживается и показывает превью кадра.':'RMB → Deactivate (or Ctrl+D). Card freezes and shows a frame preview.',
      r?'Деактивированные карточки почти не потребляют ресурсов — незаменимо при большом количестве файлов.':'Deactivated cards use almost no resources — essential when working with many files.'),
    itm('ti-click',r?'Воспроизведение видео':'Video playback',
      r?'Клик на видео-карточку — воспроизвести / пауза. Работает без предварительного выделения.':'Click a video card — play / pause. Works without selecting the card first.',
      r?'Ctrl+клик — выделить карточку без запуска воспроизведения.':'Ctrl+click — select the card without triggering playback.'),
    itm('ti-info-circle',r?'Метаданные':'Metadata',
      r?'ПКМ → Метаданные. Показывает параметры генерации: prompt, LoRA, workflow и др.':'RMB → Metadata. Shows generation parameters: prompt, LoRA, workflow, etc.',
      r?'Поддерживаются: PNG (A1111, ComfyUI), JPEG, WebP, MP4, MKV.':'Supported: PNG (A1111, ComfyUI), JPEG, WebP, MP4, MKV.'),
  ].join(''));

  const labstick=sec(r?'Надписи и стикеры':'Labels & Stickies',[
    itm('ti-text-size',r?'Надпись (Label)':'Label',
      r?'Кнопка Надпись → зажми и тяни на холст. Двойной клик — редактировать. ПКМ — шрифт, размер, стиль, цвет.':'Label button → hold and drag onto canvas. Double-click to edit. RMB — font, size, style, color.',
      r?'Надписи участвуют в мультиселекте и индексируются поиском по холсту.':'Labels join multiselect and are indexed by canvas search.'),
    itm('ti-note',r?'Стикер':'Sticky',
      r?'Кнопка Стикер → зажми и тяни на холст. Двойной клик — редактировать. ПКМ — цвет, форма.':'Sticky button → hold and drag onto canvas. Double-click to edit. RMB — color, shape.',
      r?'Стикеры всегда отображаются поверх карточек.':'Stickies always render on top of cards.'),
  ].join(''));

  const multi=sec(r?'Мультиселект':'Multiselect',[
    itm('ti-pointer',r?'Выделить несколько':'Select multiple',
      r?'Ctrl+клик — переключить элемент. Ctrl+тяга по пустому — прямоугольная рамка выбора.':'Ctrl+click — toggle element. Ctrl+drag on empty space — box selection.',
      r?'Карточки, надписи и стикеры выделяются вместе в единую группу.':'Cards, labels and stickies are selected together as one group.'),
    itm('ti-select',r?'Добавление и вычитание':'Add / subtract mode',
      r?'<b>Ctrl+Shift+клик</b> или <b>Ctrl+Shift+тяга</b> — добавить к уже выделенному (зелёный курсор +). <b>Ctrl+Alt+клик</b> или <b>Ctrl+Alt+тяга</b> — убрать из выделенного (красный курсор −).':'<b>Ctrl+Shift+click</b> or <b>Ctrl+Shift+drag</b> — add to current selection (green + cursor). <b>Ctrl+Alt+click</b> or <b>Ctrl+Alt+drag</b> — remove from selection (red − cursor).',
      r?'Рамка меняет цвет: синяя — замена, зелёная — добавление, красная — вычитание.':'The selection box changes color: blue — replace, green — add, red — subtract.'),
    itm('ti-stack',r?'Групповые операции':'Group operations',
      r?'ПКМ на выделенном → меню группы: деактивация, цвет, удаление. Тяни любой элемент группы — двигается вся группа.':'RMB on selection → group menu: deactivate, color, delete. Drag any element — the whole group moves.',
      r?'Перемещение группы работает плавно даже при включённом Snap.':'Group dragging works smoothly even with Snap enabled.'),
    itm('ti-layout-columns',r?'Выравнивание':'Alignment',
      r?'ПКМ на выделенном → <b>В ряд</b> или <b>В колонку</b>. Элементы выстраиваются по первому краю с отступом 16 пикселей между ними.':'RMB on selection → <b>Align in row</b> or <b>Align in column</b>. Elements line up from the leading edge with 16px gaps.',
      r?'Работает для любого микса карточек, надписей и стикеров. Snap учитывается автоматически.':'Works with any mix of cards, labels and stickies. Snap is applied automatically.'),
  ].join(''));

  const transport=sec(r?'Транспорт — воспроизведение':'Transport — playback',[
    itm('ti-player-play-filled','Play',r?'Запустить все активные видео. После паузы — продолжает с того же кадра; после Stop — с начала.':'Play all active videos. After Pause — resumes from the same frame; after Stop — restarts from beginning.',''),
    itm('ti-player-pause-filled','Pause',r?'Пауза — сохраняет текущую позицию кадра. Повторное нажатие Play — продолжит с того же места.':'Pause — freezes the current frame position. Press Play again to resume from that point.',
      r?'Пробел: первое нажатие — пауза, второе — продолжить. Двойной пробел (< 300 мс) — полный Stop.':'Space: first press — pause, second — resume. Double Space (< 300ms) — full Stop.'),
    itm('ti-player-stop-filled','Stop',r?'Полная остановка: все видео паузятся и перематываются в начало.':'Full stop: all videos pause and rewind to the beginning.',''),
    itm('ti-repeat','Loop',r?'Зациклить воспроизведение.':'Loop playback.',
      r?'При включённом Loop в Sequence Mode ролики идут по кругу без остановки.':'With Loop on in Sequence Mode, clips play continuously in a loop.'),
    itm('ti-eye','Opt',r?'Воспроизводить только карточки, видимые в текущей области холста.':'Play only cards visible in the current canvas viewport.',
      r?'Заметно снижает нагрузку на CPU/GPU при большом холсте со многими видео.':'Significantly reduces CPU/GPU load on large canvases with many videos.'),
    itm('ti-timeline','Timeline',r?'Синхронный скраббер — перематывает все видео на одну позицию одновременно.':'Synced scrubber — seeks all videos to the same position simultaneously.',
      r?'Удобно для сравнения нескольких видео одинаковой длины (ComfyUI, WAN).':'Perfect for comparing multiple videos of the same length (ComfyUI, WAN).'),
    itm('ti-arrows-exchange','Sequence Mode',
      r?'Включи ⇄ → Ctrl+клик по роликам задаёт порядок (цифры на карточках). Play → оверлей-плеер воспроизводит их один за другим.':'Press ⇄ → Ctrl+click clips to set order (numbers appear on cards). Play → overlay player plays them one after another.',
      r?'Деактивированные карточки добавить нельзя. Повторное нажатие ⇄ сбрасывает режим и выделение.':'Deactivated cards cannot be added. Press ⇄ again to exit and clear selection.'),
  ].join(''));

  const searchf=sec(r?'Поиск и фильтр':'Search & Filter',[
    itm('ti-filter',r?'Фильтр по цвету':'Color filter',
      r?'Цветные точки в нижней панели — показать только карточки выбранного цвета. Несовпадающие затемняются.':'Color dots in the bottom bar — show only cards of the selected color. Others are dimmed.',
      r?'Клик по активному фильтру снимает его. Надписи и стикеры фильтр не затрагивает.':'Click an active filter to deactivate it. Labels and stickies are not affected.'),
    itm('ti-search',r?'Поиск по холсту':'Canvas search',
      r?'Ctrl+F — поиск по именам файлов и тексту надписей. Enter / ↓ — следующее, Shift+Enter / ↑ — предыдущее.':'Ctrl+F — search by filenames and label text. Enter / ↓ — next, Shift+Enter / ↑ — previous.',
      r?'Escape сначала сбрасывает поиск, затем мультиселект — в таком порядке.':'Escape clears search first, then multiselect — in that order.'),
    itm('ti-map-2',r?'Миникарта':'Minimap',
      r?'Кнопка Map — обзор всего холста. Клик или тяни по миникарте — навигация к нужному месту.':'Map button — full canvas overview. Click or drag the minimap to navigate.',
      ''),
  ].join(''));

  const scuts=sec(r?'Шорткаты':'Shortcuts',
    '<div>'+[
      sc(['Space'],r?'Play → Пауза → Resume (цикл)':'Play → Pause → Resume (cycle)'),
      sc(['Space','Space'],r?'Двойное нажатие — полный Stop (сброс в начало)':'Double press — full Stop (rewind to start)'),
      sc(['Ctrl','Z'],r?'Отменить':'Undo'),
      sc(['Ctrl','Shift','Z'],r?'Повторить':'Redo'),
      sc(['Ctrl','S'],r?'Сохранить проект':'Save project'),
      sc(['Ctrl','F'],r?'Поиск по холсту':'Canvas search'),
      sc(['Ctrl','R'],r?'Переименовать выделенный элемент':'Rename selected element'),
      sc(['Ctrl','D'],r?'Деактивировать / Активировать выделенное':'Deactivate / Activate selected'),
      sc(['Delete'],r?'Удалить выделенный элемент':'Delete selected element'),
      sc(['Escape'],r?'Снять выделение / сбросить поиск':'Clear selection / clear search'),
      sc(['Ctrl','Click'],r?'Переключить элемент в мультиселекте':'Toggle element in multiselect'),
      sc(['Ctrl','Shift','Click/Drag'],r?'Добавить к выделению (зелёный курсор)':'Add to selection (green cursor)'),
      sc(['Ctrl','Alt','Click/Drag'],r?'Убрать из выделения (красный курсор)':'Remove from selection (red cursor)'),
      sc([r?'ПКМ':'RMB'],r?'Контекстное меню':'Context menu'),
      sc([r?'Ср. кнопка':'Mid. button'],r?'Перемещение поверх любых элементов':'Pan over any element'),
      sc([r?'Колёсико':'Scroll'],r?'Зум в точку под курсором':'Zoom to cursor point'),
    ].join('')+'</div>');

  return '<div class="s-head"><div class="s-head-title">'+(r?'Руководство':'Manual')+'</div></div>'+
    '<div class="s-body">'+canvas+cards+labstick+multi+transport+searchf+scuts+'</div>';
}

function gridPreviewSvg(key){
  const light=theme==='light';
  const bg=light?'#ebe8f7':'#1c1a30';
  const c1=light?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.22)';
  const c2=light?'rgba(0,0,0,0.38)':'rgba(255,255,255,0.40)';
  const cc=light?'rgba(0,0,0,0.07)':'rgba(255,255,255,0.08)';
  const W=40,H=28;
  let p='';
  if(key==='dots'){
    for(let x=9;x<=W;x+=9)for(let y=7;y<=H;y+=7)p+=`<circle cx="${x}" cy="${y}" r="1.2" fill="${c1}"/>`;
  }else if(key==='lines'){
    for(let x=0;x<W;x+=5){const mj=x%25===0;p+=`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${mj?c2:c1}" stroke-width="${mj?1:0.5}"/>`;}
    for(let y=0;y<H;y+=5){const mj=y%25===0;p+=`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${mj?c2:c1}" stroke-width="${mj?1:0.5}"/>`;}
  }else if(key==='cross'){
    const a=2.2;
    for(let x=9;x<=W;x+=9)for(let y=7;y<=H;y+=7){
      p+=`<line x1="${x-a}" y1="${y}" x2="${x+a}" y2="${y}" stroke="${c1}" stroke-width="1.2"/>`;
      p+=`<line x1="${x}" y1="${y-a}" x2="${x}" y2="${y+a}" stroke="${c1}" stroke-width="1.2"/>`;
    }
  }else if(key==='chess'){
    for(let cx=0;cx<W;cx+=8)for(let cy=0;cy<H;cy+=7){
      if(((Math.floor(cx/8)+Math.floor(cy/7))%2)===0)p+=`<rect x="${cx}" y="${cy}" width="8" height="7" fill="${cc}"/>`;
    }
  }
  return `<svg width="40" height="28" viewBox="0 0 40 28" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="28" fill="${bg}" rx="3"/>${p}</svg>`;
}
function buildSettingsScreen(){
  const screen=document.getElementById('screen-settings');
  screen.innerHTML=`
    <div class="settings-layout">
      <div class="settings-nav">
        <div class="sn-item active" data-page="appearance"><i class="ti ti-palette"></i> ${t('appearance')}</div>
        <div class="sn-item" data-page="language"><i class="ti ti-language"></i> ${t('language')}</div>
        <div class="sn-sep"></div>
        <div class="sn-item" data-page="manual"><i class="ti ti-book-2"></i> ${t('manual')}</div>
        <div class="sn-item" data-page="about"><i class="ti ti-info-circle"></i> ${t('about')}</div>
      </div>
      <div class="s-page active" id="s-appearance">
        <div class="s-head"><div class="s-head-title">${t('appearance')}</div></div>
        <div class="s-body"><div class="s-sec"><div class="s-sec-title">${t('theme')}</div>
          <div class="s-row"><div><div class="s-lbl">${t('theme')}</div></div>
            <div class="theme-sw">
              <div class="theme-opt${theme==='dark'?' sel':''}" data-theme="dark"><div class="tp" style="background:#1a1a1a"><div class="tp-sb" style="background:#111"></div><div class="tp-main" style="background:#222"></div></div><div class="t-name">${t('dark')}</div><div class="t-check"><i class="ti ti-check"></i></div></div>
              <div class="theme-opt${theme==='light'?' sel':''}" data-theme="light"><div class="tp" style="background:#f0f0f7"><div class="tp-sb" style="background:#e4e4ec"></div><div class="tp-main" style="background:#fff"></div></div><div class="t-name">${t('light')}</div><div class="t-check"><i class="ti ti-check"></i></div></div>
            </div>
          </div>
        </div>
        <div class="s-sec"><div class="s-sec-title">${t('grid_style')}</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
            ${['dots','lines','cross','chess','none'].map(key=>`
            <div class="grid-opt${gridStyle===key?' sel':''}" data-grid="${key}">
              <div class="gp">${gridPreviewSvg(key)}</div>
              <div class="t-name">${t('grid_'+key)}</div>
              <div class="t-check"><i class="ti ti-check"></i></div>
            </div>`).join('')}
          </div>
        </div>
        <div class="s-sec"><div class="s-sec-title">${t('zoom_speed')}</div>
          <div class="s-row">
            <div><div class="s-lbl">${t('zoom_speed')}</div><div class="s-sub">${t('zoom_speed_sub')}</div></div>
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-size:11px;color:var(--text4);min-width:12px;text-align:right">%</span>
              <button id="zs-dec" style="width:28px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:16px;line-height:1;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center">−</button>
              <input id="zs-input" type="number" min="1" max="30" value="${Math.round(zoomStep*100)}" style="width:48px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:13px;font-weight:600;text-align:center;outline:none;">
              <button id="zs-inc" style="width:28px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:16px;line-height:1;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center">+</button>
            </div>
          </div>
        </div>
        <div class="s-sec"><div class="s-sec-title">${t('seq_img_dur')}</div>
          <div class="s-row">
            <div><div class="s-lbl">${t('seq_img_dur')}</div><div class="s-sub">${t('seq_img_dur_sub')}</div></div>
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-size:11px;color:var(--text4);min-width:20px;text-align:right">${t('seq_img_dur_sec')}</span>
              <button id="sid-dec" style="width:28px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:16px;line-height:1;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center">−</button>
              <input id="sid-input" type="number" min="1" max="60" value="${seqImageDuration}" style="width:48px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:13px;font-weight:600;text-align:center;outline:none;">
              <button id="sid-inc" style="width:28px;height:28px;border-radius:6px;border:0.5px solid var(--border2);background:var(--bg4);color:var(--text1);font-size:16px;line-height:1;padding:0;cursor:pointer;display:flex;align-items:center;justify-content:center">+</button>
            </div>
          </div>
        </div>
        <div class="s-sec"><div class="s-sec-title">${t('thumb_mode')}</div>
          ${[['viewport','ti-eye','thumb_viewport','thumb_viewport_sub'],['center','ti-focus-centered','thumb_center','thumb_center_sub'],['board','ti-layout-board','thumb_board','thumb_board_sub']].map(([val,icon,lbl,sub])=>`
          <div class="s-row thumb-mode-opt${thumbMode===val?' sel':''}" data-mode="${val}" style="cursor:pointer;border-radius:8px;padding:8px 10px;border:0.5px solid ${thumbMode===val?'var(--accent-t)':'var(--border2)'};margin-bottom:5px;background:${thumbMode===val?'var(--accent-bg)':'transparent'}">
            <div style="display:flex;align-items:center;gap:8px;flex:1"><i class="ti ${icon}" style="font-size:16px;color:${thumbMode===val?'var(--accent-t)':'var(--text3)'}"></i><div><div class="s-lbl" style="color:${thumbMode===val?'var(--accent-t)':'var(--text1)'}">${t(lbl)}</div><div class="s-sub">${t(sub)}</div></div></div>
            <div style="width:16px;height:16px;border-radius:50%;border:1.5px solid ${thumbMode===val?'var(--accent-t)':'var(--border3)'};box-sizing:border-box;position:relative;flex-shrink:0">${thumbMode===val?'<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:8px;border-radius:50%;background:var(--accent-t)"></div>':''}</div>
          </div>`).join('')}
        </div></div>
      </div>
      <div class="s-page" id="s-language">
        <div class="s-head"><div class="s-head-title">${t('language')}</div></div>
        <div class="s-body"><div class="s-sec">
          <div class="s-row"><div><div class="s-lbl">${t('language')}</div><div class="s-sub"><span>${t('lang_auto')}</span> <span class="auto-badge" id="auto-badge">${t('auto')}</span></div></div>
            <div class="lang-sw"><button class="lang-opt${lang==='ru'?' sel':''}" data-lang="ru">RU Русский</button><button class="lang-opt${lang==='en'?' sel':''}" data-lang="en">EN English</button></div>
          </div>
        </div></div>
      </div>
      <div class="s-page" id="s-manual">${buildManualPage()}</div>
      <div class="s-page" id="s-about">
        <div class="s-head"><div class="s-head-title">${t('about')}</div></div>
        <div class="s-body">
          <div class="s-sec"><div class="about-card">
            <div class="about-app-row"><div class="about-icon"><i class="ti ti-layout-board"></i></div><div><div class="about-name">VidBoards</div><div class="about-ver">v1.2.0 · Electron</div><!-- UPDATE VERSION HERE on every release --></div></div></div>
            <div class="about-dev">${t('developer')}: <strong>${t('dev_name')}</strong></div>
            <div style="margin-top:5px;display:flex;flex-direction:column;gap:3px">
              <span class="about-link" id="link-dev-site" style="font-size:10px"><i class="ti ti-world"></i> kuzmabogdanov.ru</span>
              <span class="about-link" id="link-dev-tg" style="font-size:10px"><i class="ti ti-brand-telegram"></i> t.me/ShangTsungVibes</span>
            </div>
            <div class="about-dev" style="margin-top:6px;color:var(--text3);font-size:10px">${t('app_desc')}</div>
            <div class="about-links">
              <span class="about-link" id="link-site"><i class="ti ti-world"></i> vidboards.app</span>
              <span class="about-link" id="link-github"><i class="ti ti-brand-github"></i> GitHub</span>
            </div>
          </div>
          <div class="s-sec"><div class="s-sec-title">${t('support_dev')}</div>
            <div class="donation-card"><div class="donation-top"><span style="font-size:18px">💜</span><span class="donation-title">${t('donation_title')}</span></div>
            <div class="donation-desc">${t('donation_desc')}</div>
            <button class="donation-btn" id="btn-donate"><i class="ti ti-heart"></i> ${t('donate_btn')}</button></div>
          </div>
          <div class="s-sec"><div style="font-size:10px;color:var(--text4);line-height:1.8">${t('copyright')} · VidBoards<br><span id="link-terms" style="color:var(--accent-t);cursor:pointer">${t('terms')}</span> &nbsp;·&nbsp; <span id="link-privacy" style="color:var(--accent-t);cursor:pointer">${t('privacy')}</span></div></div>
        </div>
        <div class="s-footer"><span class="s-footer-txt">${t('copyright')}</span><span class="s-footer-txt">Build 2026.06</span></div>
      </div>
    </div>`;
  document.querySelectorAll('.sn-item[data-page]').forEach(item=>{item.onclick=()=>{document.querySelectorAll('.sn-item').forEach(i=>i.classList.remove('active'));item.classList.add('active');document.querySelectorAll('.s-page').forEach(p=>p.classList.remove('active'));document.getElementById('s-'+item.dataset.page).classList.add('active');};});
  document.querySelectorAll('.theme-opt').forEach(opt=>{opt.onclick=()=>applyTheme(opt.dataset.theme);});
  document.querySelectorAll('.lang-opt').forEach(opt=>{opt.onclick=()=>{applyLang(opt.dataset.lang,false);persist();};});
  document.querySelectorAll('.thumb-mode-opt').forEach(opt=>{opt.onclick=()=>{thumbMode=opt.dataset.mode;persist();buildSettingsScreen();};});
  const sidInput=document.getElementById('sid-input');
  const sidSave=()=>{
    let v=parseInt(sidInput.value)||3;
    v=Math.max(1,Math.min(60,v));
    seqImageDuration=v;sidInput.value=v;
    persist();
  };
  document.getElementById('sid-dec').onclick=()=>{sidInput.value=Math.max(1,(parseInt(sidInput.value)||1)-1);sidSave();};
  document.getElementById('sid-inc').onclick=()=>{sidInput.value=Math.min(60,(parseInt(sidInput.value)||1)+1);sidSave();};
  sidInput.oninput=sidSave;
  document.querySelectorAll('.grid-opt').forEach(opt=>{opt.onclick=()=>{gridStyle=opt.dataset.grid;persist();drawGrid();buildSettingsScreen();};});
  const zsInput=document.getElementById('zs-input');
  const zsSave=()=>{let v=parseInt(zsInput.value)||8;v=Math.max(1,Math.min(30,v));zoomStep=v/100;zsInput.value=v;persist();};
  document.getElementById('zs-dec').onclick=()=>{zsInput.value=Math.max(1,(parseInt(zsInput.value)||1)-1);zsSave();};
  document.getElementById('zs-inc').onclick=()=>{zsInput.value=Math.min(30,(parseInt(zsInput.value)||1)+1);zsSave();};
  zsInput.oninput=zsSave;
  document.getElementById('link-site').onclick=()=>api.openUrl('https://vidboards.app');
  document.getElementById('link-github').onclick=()=>api.openUrl('https://github.com/KuzmaBogdanov/vidBoards');
  document.getElementById('link-dev-site').onclick=()=>api.openUrl('https://kuzmabogdanov.ru');
  document.getElementById('link-dev-tg').onclick=()=>api.openUrl('https://t.me/ShangTsungVibes');
  document.getElementById('btn-donate').onclick=()=>api.openUrl('https://vidboards.app/#donation');
  document.getElementById('link-terms').onclick=()=>api.openUrl('https://vidboards.app/#terms');
  document.getElementById('link-privacy').onclick=()=>api.openUrl('https://vidboards.app/#privacy');
}

// ═══════════════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════════════
async function init(){
  const settings=await api.loadSettings();
  if(settings.theme)theme=settings.theme;
  if(settings.thumbMode)thumbMode=settings.thumbMode;
  if(settings.seqImageDuration)seqImageDuration=settings.seqImageDuration;
  if(settings.gridStyle)gridStyle=settings.gridStyle;
  if(settings.zoomStep)zoomStep=settings.zoomStep;
  const locale=await api.getLocale();
  const sys=(locale||'en').toLowerCase().split('-')[0];
  const slavic=['ru','be','uk'];
  const detected=slavic.includes(sys)?'ru':'en';
  if(settings.lang){lang=settings.lang;autoLang=(settings.lang===detected);}
  else{lang=detected;autoLang=true;}
  document.body.classList.toggle('dark',theme==='dark');
  document.body.classList.toggle('light',theme==='light');
  buildHomeScreen();buildSettingsScreen();
  document.getElementById('btn-settings').onclick=()=>{
    if(getCurrentScreen()==='settings'){
      if(prevScreen==='board'&&boardProject){showScreen('board');renderTabs();drawGrid();}
      else{showScreen('home');buildHomeScreen();renderTabs();}
    } else {
      prevScreen=getCurrentScreen();
      buildSettingsScreen();showScreen('settings');renderTabs();
    }
  };
  document.getElementById('titlebar-tabs').addEventListener('wheel',e=>{e.preventDefault();document.getElementById('titlebar-tabs').scrollLeft+=e.deltaY;},{passive:false});
  renderTabs();
  setInterval(checkMissingFiles,30000);
  api.on('update-available',(version)=>{updateAvailableVersion=version;renderUpdateBanner();});
  api.on('update-downloaded',()=>{if(_updateProgressTimer)clearTimeout(_updateProgressTimer);updateReady=true;updateDownloading=false;updateProgress=0;renderUpdateBanner();});
  api.on('update-progress',(pct)=>{
    updateProgress=pct;
    if(_updateProgressTimer){clearTimeout(_updateProgressTimer);_updateProgressTimer=setTimeout(()=>{if(updateDownloading){updateDownloading=false;updateErrored=true;renderUpdateBanner();}},90000);}
    const fill=document.getElementById('update-progress-fill');
    const label=document.getElementById('update-progress-pct');
    if(fill){fill.style.width=pct+'%';}else{renderUpdateBanner();}
    if(label){label.textContent=pct+'%';}
  });
  api.on('update-error',(msg)=>{if(_updateProgressTimer)clearTimeout(_updateProgressTimer);updateDownloading=false;updateErrored=true;renderUpdateBanner();console.error('update-error:',msg);});
  api.on('app-close-requested',()=>{
    const dirty=boardProjects.filter(p=>p._dirty);
    if(!dirty.length){api.forceClose();return;}
    openModal(
      t('unsaved_app'),
      `<p class="m-text">${dirty.map(p=>`«${p.name}»`).join(', ')}</p><p class="m-sub">${t('unsaved_app_sub')}</p>`,
      t('yes_save'),'ok',
      async()=>{
        for(let i=0;i<boardProjects.length;i++){if(boardProjects[i]._dirty)await saveBoardProjectByIndex(i);}
        api.forceClose();
      }
    );
    const nb=document.getElementById('m-cancel');
    nb.textContent=t('no_close');
    nb.onclick=()=>{closeModal();api.forceClose();};
  });
}
init();
