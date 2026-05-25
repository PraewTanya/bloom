/* =========================================================
   Bloom — Storage Layer
   Local-first persistence using localStorage + IndexedDB (for blobs).
   ========================================================= */

const BLOOM = (function () {
  const NS = 'bloom_v1';

  /* ---- localStorage helpers ---- */
  function get(key, fallback) {
    try {
      const raw = localStorage.getItem(`${NS}.${key}`);
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.warn('BLOOM.get parse error', key, e);
      return fallback;
    }
  }
  function set(key, value) {
    localStorage.setItem(`${NS}.${key}`, JSON.stringify(value));
  }
  function remove(key) {
    localStorage.removeItem(`${NS}.${key}`);
  }
  function uid() {
    return 'b_' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
  }
  function today() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }

  /* ---- IndexedDB for images / blobs ---- */
  let _dbPromise = null;
  function db() {
    if (_dbPromise) return _dbPromise;
    _dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open('bloom_db', 1);
      req.onupgradeneeded = (e) => {
        const idb = e.target.result;
        if (!idb.objectStoreNames.contains('files')) {
          idb.createObjectStore('files', { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return _dbPromise;
  }
  async function saveBlob(id, blob) {
    const idb = await db();
    return new Promise((resolve, reject) => {
      const tx = idb.transaction('files', 'readwrite');
      tx.objectStore('files').put({ id, blob });
      tx.oncomplete = () => resolve(id);
      tx.onerror = () => reject(tx.error);
    });
  }
  async function loadBlobUrl(id) {
    const idb = await db();
    return new Promise((resolve, reject) => {
      const tx = idb.transaction('files', 'readonly');
      const req = tx.objectStore('files').get(id);
      req.onsuccess = () => {
        if (!req.result) return resolve(null);
        resolve(URL.createObjectURL(req.result.blob));
      };
      req.onerror = () => reject(req.error);
    });
  }
  async function deleteBlob(id) {
    const idb = await db();
    return new Promise((resolve, reject) => {
      const tx = idb.transaction('files', 'readwrite');
      tx.objectStore('files').delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  /* ---- Settings ---- */
  function getSettings() {
    return get('settings', {
      name: '',
      theme: 'light',
      currency: 'THB',
      firstDayOfWeek: 0 // 0=Sunday
    });
  }
  function saveSettings(s) {
    set('settings', s);
    applyTheme(s.theme);
  }
  function applyTheme(theme) {
    if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }

  /* ---- Events (Calendar) ---- */
  function getEvents() { return get('events', []); }
  function saveEvents(arr) { set('events', arr); }
  function addEvent(ev) {
    const arr = getEvents();
    ev.id = ev.id || uid();
    ev.createdAt = ev.createdAt || Date.now();
    arr.push(ev);
    saveEvents(arr);
    return ev;
  }
  function updateEvent(id, patch) {
    const arr = getEvents();
    const i = arr.findIndex(e => e.id === id);
    if (i >= 0) { arr[i] = { ...arr[i], ...patch }; saveEvents(arr); return arr[i]; }
    return null;
  }
  function deleteEvent(id) {
    saveEvents(getEvents().filter(e => e.id !== id));
  }

  /* ---- Todos ---- */
  function getTodos() { return get('todos', []); }
  function saveTodos(arr) { set('todos', arr); }
  function addTodo(t) {
    const arr = getTodos();
    t.id = t.id || uid();
    t.createdAt = t.createdAt || Date.now();
    t.done = !!t.done;
    arr.push(t);
    saveTodos(arr);
    return t;
  }
  function updateTodo(id, patch) {
    const arr = getTodos();
    const i = arr.findIndex(x => x.id === id);
    if (i >= 0) { arr[i] = { ...arr[i], ...patch }; saveTodos(arr); return arr[i]; }
    return null;
  }
  function deleteTodo(id) { saveTodos(getTodos().filter(x => x.id !== id)); }

  // Carry-over: any incomplete todo whose due date < today moves to today
  function carryOverTodos() {
    const t = today();
    const arr = getTodos();
    let changed = false;
    arr.forEach(x => {
      if (!x.done && x.dueDate && x.dueDate < t) {
        x.dueDate = t;
        x.carriedOver = true;
        changed = true;
      }
    });
    if (changed) saveTodos(arr);
  }

  /* ---- Habits ---- */
  function getHabits() { return get('habits', []); }
  function saveHabits(arr) { set('habits', arr); }
  function addHabit(h) { const arr = getHabits(); h.id = h.id || uid(); h.createdAt = Date.now(); h.checks = h.checks || {}; arr.push(h); saveHabits(arr); return h; }
  function updateHabit(id, patch) { const arr = getHabits(); const i = arr.findIndex(x=>x.id===id); if(i>=0){arr[i]={...arr[i],...patch};saveHabits(arr);return arr[i];} return null; }
  function deleteHabit(id) { saveHabits(getHabits().filter(x=>x.id!==id)); }
  function toggleHabitCheck(id, date) {
    const arr = getHabits();
    const h = arr.find(x => x.id === id);
    if (!h) return;
    h.checks = h.checks || {};
    if (h.checks[date]) delete h.checks[date]; else h.checks[date] = true;
    saveHabits(arr);
  }

  /* ---- Moods ---- */
  function getMoods() { return get('moods', {}); } // { 'YYYY-MM-DD': { mood:1-5, note, tags:[] } }
  function saveMoods(obj) { set('moods', obj); }
  function setMood(date, data) { const m = getMoods(); m[date] = data; saveMoods(m); }
  function deleteMood(date) { const m = getMoods(); delete m[date]; saveMoods(m); }

  /* ---- Diary ---- */
  function getDiary() { return get('diary', []); }
  function saveDiary(arr) { set('diary', arr); }
  function addDiary(entry) { const arr = getDiary(); entry.id = entry.id || uid(); entry.createdAt = Date.now(); arr.push(entry); saveDiary(arr); return entry; }
  function updateDiary(id, patch) { const arr = getDiary(); const i=arr.findIndex(x=>x.id===id); if(i>=0){arr[i]={...arr[i],...patch};saveDiary(arr);return arr[i];} return null; }
  function deleteDiary(id) { saveDiary(getDiary().filter(x=>x.id!==id)); }

  /* ---- Generic collection helpers for future sprints ---- */
  function getCollection(name) { return get(name, []); }
  function saveCollection(name, arr) { set(name, arr); }
  function addToCollection(name, item) {
    const arr = getCollection(name);
    item.id = item.id || uid();
    item.createdAt = item.createdAt || Date.now();
    arr.push(item);
    saveCollection(name, arr);
    return item;
  }
  function updateInCollection(name, id, patch) {
    const arr = getCollection(name);
    const i = arr.findIndex(x => x.id === id);
    if (i >= 0) { arr[i] = { ...arr[i], ...patch }; saveCollection(name, arr); return arr[i]; }
    return null;
  }
  function deleteFromCollection(name, id) { saveCollection(name, getCollection(name).filter(x => x.id !== id)); }

  /* ---- Export/Import (for safety even if not in nav) ---- */
  function exportAll() {
    const out = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(NS + '.')) out[k] = localStorage.getItem(k);
    }
    return JSON.stringify(out, null, 2);
  }
  function importAll(json) {
    const obj = JSON.parse(json);
    Object.keys(obj).forEach(k => localStorage.setItem(k, obj[k]));
  }
  function clearAll() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.startsWith(NS + '.')) keys.push(k);
    }
    keys.forEach(k => localStorage.removeItem(k));
  }

  /* ---- Init theme on every page load ---- */
  function init() {
    const s = getSettings();
    applyTheme(s.theme);
  }
  init();

  return {
    // utils
    uid, today, get, set, remove,
    // settings
    getSettings, saveSettings, applyTheme,
    // events
    getEvents, addEvent, updateEvent, deleteEvent,
    // todos
    getTodos, addTodo, updateTodo, deleteTodo, carryOverTodos,
    // habits
    getHabits, addHabit, updateHabit, deleteHabit, toggleHabitCheck,
    // moods
    getMoods, setMood, deleteMood,
    // diary
    getDiary, addDiary, updateDiary, deleteDiary,
    // blobs
    saveBlob, loadBlobUrl, deleteBlob,
    // generic
    getCollection, saveCollection, addToCollection, updateInCollection, deleteFromCollection,
    // backup
    exportAll, importAll, clearAll
  };
})();
