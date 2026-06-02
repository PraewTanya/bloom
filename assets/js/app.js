/* =========================================================
   Bloom — Shared App Shell
   Sidebar nav, top bar, quick capture (FAB), global search, toasts.
   ========================================================= */

const ICONS = {
  dashboard: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  todo: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 4 4 12-12"/><path d="M4 20h16"/></svg>',
  timetable: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 10h18M8 4v17M13 4v17M18 4v17M3 14h18"/></svg>',
  habits: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="M5 12c2 0 5 1 7 4"/><path d="M19 9c-2 0-5 1-7 4"/><path d="M12 8a4 4 0 0 0-4-4 4 4 0 0 0 4 4Z"/></svg>',
  mood: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  diary: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  goals: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  movies: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 7h4M3 12h4M3 17h4M17 7h4M17 12h4M17 17h4"/></svg>',
  books: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"/></svg>',
  resources: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  wishlist: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>',
  ideas: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.4.3.7.7.9 1.1.2.4.1 1 .1 1.2h6c0-.2-.1-.8.1-1.2.2-.4.5-.8.9-1.1A7 7 0 0 0 12 2z"/></svg>',
  novel: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  projects: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h6v6H4z"/><path d="M14 6h6v10h-6z"/><path d="M4 14h6v6H4z"/></svg>',
  creator: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  finance: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  chevronL: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  chevronR: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  moon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  butterfly: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 4c-1 0-2 1-2.5 2.5C8 5 5 5 4 7c-1 2 1 4 3 5-2 1-4 3-3 5 1 2 4 2 5.5.5C10 19 11 20 12 20s2-1 2.5-2.5C16 19 19 19 20 17c1-2-1-4-3-5 2-1 4-3 3-5-1-2-4-2-5.5-.5C14 5 13 4 12 4zm0 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 4v8"/></svg>'
};

const NAV_ITEMS = [
  { group: 'Today', items: [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', href: 'index.html' },
    { id: 'calendar', label: 'Calendar', icon: 'calendar', href: 'calendar.html' },
    { id: 'todo', label: 'To-Do', icon: 'todo', href: 'todo.html' },
    { id: 'timetable', label: 'Timetable', icon: 'timetable', href: 'timetable.html' }
  ]},
  { group: 'Reflect', items: [
    { id: 'habits', label: 'Habits', icon: 'habits', href: 'habits.html' },
    { id: 'mood', label: 'Mood Tracker', icon: 'mood', href: 'mood.html' },
    { id: 'diary', label: 'Diary', icon: 'diary', href: 'diary.html' },
    { id: 'goals', label: 'Goals & Vision', icon: 'goals', href: 'goals.html' }
  ]},
  { group: 'Library', items: [
    { id: 'movies', label: 'Movies', icon: 'movies', href: 'movies.html' },
    { id: 'books', label: 'Books', icon: 'books', href: 'books.html' },
    { id: 'resources', label: 'Resources', icon: 'resources', href: 'resources.html' },
    { id: 'wishlist', label: 'Wishlist', icon: 'wishlist', href: 'wishlist.html' }
  ]},
  { group: 'Create', items: [
    { id: 'ideas', label: 'Ideas', icon: 'ideas', href: 'ideas.html' },
    { id: 'novel', label: 'Novel Studio', icon: 'novel', href: 'novel.html' },
    { id: 'projects', label: 'Projects', icon: 'projects', href: 'projects.html' },
    { id: 'creator', label: 'Creator Hub', icon: 'creator', href: 'creator.html' }
  ]},
  { group: 'Money', items: [
    { id: 'finance', label: 'Finance', icon: 'finance', href: 'finance.html' }
  ]},
  { group: '', items: [
    { id: 'settings', label: 'Settings', icon: 'settings', href: 'settings.html' }
  ]}
];

const BRAND_SVG = `<svg class="brand-mark" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F8C8DC"/>
      <stop offset="100%" stop-color="#D8BFD8"/>
    </linearGradient>
  </defs>
  <circle cx="20" cy="20" r="18" fill="url(#g1)" opacity="0.35"/>
  <path d="M20 8c-3 4-3 8 0 12-3-4-7-4-11 0 4 0 8 1 11 4 3-3 7-4 11-4-4-4-8-4-11 0 3-4 3-8 0-12z" fill="#F4A6B8"/>
  <circle cx="20" cy="20" r="2.5" fill="#FFF6E5"/>
</svg>`;

const GARDEN_SVG = `<svg class="garden-svg" viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M0 120 Q150 95 300 110 T600 120 L600 140 L0 140 Z" fill="#C8E6C9" opacity="0.5"/>
  <path d="M0 130 Q150 110 300 120 T600 130 L600 140 L0 140 Z" fill="#95C49A" opacity="0.6"/>
  <g transform="translate(60 100)">
    <path d="M0 20 C-4 14 -4 6 0 0 C4 6 4 14 0 20" fill="#F8C8DC"/>
    <line x1="0" y1="20" x2="0" y2="40" stroke="#7BAE7F" stroke-width="2"/>
    <path d="M0 30 Q-8 26 -10 32" stroke="#7BAE7F" stroke-width="2" fill="none"/>
  </g>
  <g transform="translate(180 90)">
    <circle cx="0" cy="0" r="6" fill="#FFD8B1"/>
    <circle cx="-5" cy="-3" r="5" fill="#F8C8DC"/>
    <circle cx="5" cy="-3" r="5" fill="#F8C8DC"/>
    <circle cx="0" cy="-6" r="5" fill="#F8C8DC"/>
    <circle cx="0" cy="0" r="2.5" fill="#E6C895"/>
    <line x1="0" y1="6" x2="0" y2="50" stroke="#7BAE7F" stroke-width="2.5"/>
    <path d="M0 30 Q10 26 14 34" stroke="#7BAE7F" stroke-width="2" fill="none"/>
  </g>
  <g transform="translate(320 95)">
    <ellipse cx="0" cy="0" rx="3" ry="8" fill="#D8BFD8"/>
    <ellipse cx="0" cy="0" rx="8" ry="3" fill="#D8BFD8"/>
    <circle cx="0" cy="0" r="2" fill="#E6C895"/>
    <line x1="0" y1="8" x2="0" y2="45" stroke="#7BAE7F" stroke-width="2"/>
  </g>
  <g transform="translate(460 80)">
    <ellipse cx="-8" cy="-2" rx="10" ry="6" fill="#F4A6B8" opacity="0.85"/>
    <ellipse cx="8" cy="-2" rx="10" ry="6" fill="#F4A6B8" opacity="0.85"/>
    <ellipse cx="-7" cy="6" rx="8" ry="5" fill="#F8C8DC" opacity="0.85"/>
    <ellipse cx="7" cy="6" rx="8" ry="5" fill="#F8C8DC" opacity="0.85"/>
    <ellipse cx="0" cy="2" rx="2" ry="8" fill="#3D3D5C"/>
  </g>
  <g transform="translate(540 50)">
    <path d="M0 0 Q-6 -6 -10 -2 Q-12 4 -6 4 Q-2 4 0 0" fill="#B5A8C9" opacity="0.7"/>
  </g>
  <g transform="translate(80 40)">
    <path d="M0 0 Q-5 -4 -8 0 Q-9 4 -5 4 Q-2 4 0 0" fill="#D8BFD8" opacity="0.6"/>
  </g>
</svg>`;

function renderSidebar(activeId) {
  const s = BLOOM.getSettings();
  // Brand mark: profile picture if uploaded, initial of name if set, else default flower mark
  let brandMark;
  if (s.avatar) {
    const initial = s.name ? escapeHtml(s.name.trim().charAt(0).toUpperCase()) : '🌸';
    brandMark = `<div class="brand-mark avatar" id="sidebar-avatar" data-avatar-src="${escapeHtml(s.avatar)}">${initial}</div>`;
  } else if (s.name) {
    const initial = escapeHtml(s.name.trim().charAt(0).toUpperCase());
    brandMark = `<div class="brand-mark avatar">${initial}</div>`;
  } else {
    brandMark = BRAND_SVG;
  }
  let html = `<a class="brand" href="index.html" style="text-decoration:none;">${brandMark}<div><div class="brand-name">Bloom</div><div class="brand-tag">Grow · Soar</div></div></a>`;
  NAV_ITEMS.forEach(group => {
    html += `<div class="nav-group">`;
    if (group.group) html += `<div class="nav-label">${group.group}</div>`;
    group.items.forEach(item => {
      const active = item.id === activeId ? ' active' : '';
      const disabled = item.badge === 'soon' ? '' : '';
      const badge = item.badge ? `<span class="badge">${item.badge}</span>` : '';
      html += `<a class="nav-item${active}${disabled}" href="${item.href}">
        <span class="nav-icon">${ICONS[item.icon]}</span>
        <span>${item.label}</span>${badge}
      </a>`;
    });
    html += `</div>`;
  });
  return html;
}

function renderTopbar(activeId) {
  const isHome = activeId === 'dashboard';
  const backBtn = isHome ? '' : `<a href="index.html" class="back-btn" title="Back to dashboard">${ICONS.chevronL}<span>Home</span></a>`;
  return `
    <div class="topbar">
      ${backBtn}
      <div class="search-box">
        ${ICONS.search}
        <input id="global-search" type="text" placeholder="Search across your garden..." />
      </div>
      <div class="topbar-actions">
        <button class="icon-btn" id="theme-toggle" title="Toggle theme">${ICONS.moon}</button>
      </div>
    </div>`;
}

function renderShell(activeId) {
  // Build sidebar
  const sb = document.getElementById('sidebar');
  if (sb) sb.innerHTML = renderSidebar(activeId);
  // Build top bar
  const tb = document.getElementById('topbar-slot');
  if (tb) tb.innerHTML = renderTopbar(activeId);
  // Resolve sidebar avatar (if uploaded as local: blob)
  resolveSidebarAvatar();
  // Build FAB & modals & toast area
  if (!document.getElementById('fab')) {
    const fab = document.createElement('button');
    fab.id = 'fab';
    fab.className = 'fab';
    fab.title = 'Quick capture';
    fab.innerHTML = ICONS.plus;
    fab.onclick = openQuickCapture;
    document.body.appendChild(fab);
  }
  if (!document.getElementById('toast-area')) {
    const ta = document.createElement('div');
    ta.id = 'toast-area';
    ta.className = 'toast-area';
    document.body.appendChild(ta);
  }
  injectQuickCaptureModal();
  injectSearchResultsModal();
  attachShellHandlers();
}

function attachShellHandlers() {
  const tt = document.getElementById('theme-toggle');
  if (tt) {
    const s = BLOOM.getSettings();
    tt.innerHTML = s.theme === 'dark' ? ICONS.sun : ICONS.moon;
    tt.onclick = () => {
      const cur = BLOOM.getSettings();
      cur.theme = cur.theme === 'dark' ? 'light' : 'dark';
      BLOOM.saveSettings(cur);
      tt.innerHTML = cur.theme === 'dark' ? ICONS.sun : ICONS.moon;
    };
  }
  const gs = document.getElementById('global-search');
  if (gs) {
    gs.addEventListener('input', (e) => runGlobalSearch(e.target.value));
    gs.addEventListener('focus', (e) => { if (e.target.value) runGlobalSearch(e.target.value); });
  }
}

/* ============== Toast ============== */
function toast(msg, type) {
  const ta = document.getElementById('toast-area');
  if (!ta) return alert(msg);
  const el = document.createElement('div');
  el.className = 'toast ' + (type || '');
  el.textContent = msg;
  ta.appendChild(el);
  setTimeout(() => { el.style.transition = 'all 0.3s'; el.style.opacity = 0; el.style.transform = 'translateY(8px)'; }, 1800);
  setTimeout(() => el.remove(), 2200);
}

/* ============== Quick Capture (FAB) ============== */
function injectQuickCaptureModal() {
  if (document.getElementById('qc-modal')) return;
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'qc-modal';
  modal.innerHTML = `
    <div class="modal">
      <h2>🌸 Quick Capture</h2>
      <div class="field">
        <label>I want to add a...</label>
        <select id="qc-type" class="select">
          <option value="todo">To-do</option>
          <option value="event">Calendar event</option>
        </select>
      </div>
      <div class="field">
        <label>Title</label>
        <input id="qc-title" class="input" placeholder="What's on your mind?" />
      </div>
      <div id="qc-event-fields" class="hidden">
        <div class="row">
          <div class="field"><label>Date</label><input id="qc-date" class="input" type="date" /></div>
          <div class="field"><label>Time</label><input id="qc-time" class="input" type="time" /></div>
        </div>
      </div>
      <div id="qc-todo-fields">
        <div class="row">
          <div class="field"><label>Due date (optional)</label><input id="qc-todo-date" class="input" type="date" /></div>
          <div class="field">
            <label>Priority (optional)</label>
            <select id="qc-priority" class="select">
              <option value="">None</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="closeQuickCapture()">Cancel</button>
        <button class="btn btn-primary" onclick="submitQuickCapture()">Add</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeQuickCapture(); });
  document.getElementById('qc-type').addEventListener('change', (e) => {
    const isEvent = e.target.value === 'event';
    document.getElementById('qc-event-fields').classList.toggle('hidden', !isEvent);
    document.getElementById('qc-todo-fields').classList.toggle('hidden', isEvent);
  });
}
function openQuickCapture() {
  const m = document.getElementById('qc-modal');
  m.classList.add('open');
  document.getElementById('qc-title').value = '';
  document.getElementById('qc-todo-date').value = '';
  document.getElementById('qc-priority').value = '';
  document.getElementById('qc-date').value = BLOOM.today();
  document.getElementById('qc-time').value = '';
  document.getElementById('qc-type').value = 'todo';
  document.getElementById('qc-event-fields').classList.add('hidden');
  document.getElementById('qc-todo-fields').classList.remove('hidden');
  setTimeout(() => document.getElementById('qc-title').focus(), 50);
}
function closeQuickCapture() { document.getElementById('qc-modal').classList.remove('open'); }
function submitQuickCapture() {
  const type = document.getElementById('qc-type').value;
  const title = document.getElementById('qc-title').value.trim();
  if (!title) { toast('Please enter a title 🌱'); return; }
  if (type === 'todo') {
    const d = document.getElementById('qc-todo-date').value || null;
    const p = document.getElementById('qc-priority').value || '';
    BLOOM.addTodo({ title, dueDate: d, priority: p, done: false });
    toast('Added to your to-do list 🌿', 'success');
  } else {
    const d = document.getElementById('qc-date').value;
    const t = document.getElementById('qc-time').value;
    BLOOM.addEvent({ title, date: d, time: t, category: 'personal', notes: '' });
    toast('Added to your calendar 🌸', 'success');
  }
  closeQuickCapture();
  // refresh if on relevant page
  if (typeof window.refreshPage === 'function') window.refreshPage();
}

/* ============== Global Search ============== */
function injectSearchResultsModal() {
  if (document.getElementById('search-modal')) return;
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.id = 'search-modal';
  modal.innerHTML = `
    <div class="modal" style="max-width:600px;">
      <h2>${ICONS.search}<span>Search results</span></h2>
      <div id="search-results"></div>
      <div class="modal-actions">
        <button class="btn btn-ghost" onclick="closeSearch()">Close</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
}
function closeSearch() { document.getElementById('search-modal').classList.remove('open'); }

function runGlobalSearch(q) {
  q = (q || '').trim().toLowerCase();
  if (!q) return;
  const results = [];
  // todos
  BLOOM.getTodos().forEach(t => {
    if (t.title.toLowerCase().includes(q) || (t.notes || '').toLowerCase().includes(q)) {
      results.push({ kind: 'To-do', title: t.title, hint: t.dueDate || 'No date', href: 'todo.html' });
    }
  });
  // events
  BLOOM.getEvents().forEach(e => {
    if (e.title.toLowerCase().includes(q) || (e.notes || '').toLowerCase().includes(q) || (e.location || '').toLowerCase().includes(q)) {
      results.push({ kind: 'Event', title: e.title, hint: `${e.date}${e.time ? ' ' + e.time : ''}`, href: 'calendar.html' });
    }
  });
  // diary
  BLOOM.getDiary().forEach(d => {
    if ((d.title || '').toLowerCase().includes(q) || (d.body || '').toLowerCase().includes(q)) {
      results.push({ kind: 'Diary', title: d.title || d.date, hint: d.date, href: 'diary.html' });
    }
  });
  // habits
  BLOOM.getHabits().forEach(h => {
    if (h.name.toLowerCase().includes(q)) results.push({ kind: 'Habit', title: h.name, hint: '', href: 'habits.html' });
  });
  // generic
  ['movies','books','resources','wishlist','ideas','projects','content','novels','goals','tx'].forEach(coll => {
    (BLOOM.getCollection(coll) || []).forEach(x => {
      const fields = ['title','name','note','description','body','synopsis','review'].map(k => x[k]).filter(Boolean).join(' ').toLowerCase();
      if (fields.includes(q)) results.push({ kind: coll, title: x.title || x.name || '(untitled)', hint: '', href: coll + '.html' });
    });
  });
  showSearchResults(results, q);
}
function showSearchResults(results, q) {
  const m = document.getElementById('search-modal');
  const box = document.getElementById('search-results');
  if (!box) return;
  if (results.length === 0) {
    box.innerHTML = `<div class="empty-state">Nothing found for "<b>${escapeHtml(q)}</b>" yet 🌿</div>`;
  } else {
    box.innerHTML = results.slice(0, 40).map(r => `
      <a href="${r.href}" class="todo-item" style="margin-bottom:6px;text-decoration:none;">
        <span class="chip">${r.kind}</span>
        <div class="todo-content">
          <div class="todo-title">${escapeHtml(r.title)}</div>
          ${r.hint ? `<div class="todo-meta">${escapeHtml(r.hint)}</div>` : ''}
        </div>
      </a>
    `).join('');
  }
  m.classList.add('open');
}

/* ============== Utils ============== */
function escapeHtml(s) {
  return (s || '').toString()
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
function fmtDateLong(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function fmtDateShort(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function getGreeting(name) {
  const h = new Date().getHours();
  const tod = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  return name ? `${tod}, ${name}` : tod;
}

const QUOTES = [
  "Every small seed becomes a garden in time.",
  "Bloom where you are planted, then take flight.",
  "Tiny progress is still progress. Keep going.",
  "Your story is still being written — one petal at a time.",
  "Be patient with yourself. Roses don't rush.",
  "What you water grows. Choose your garden wisely.",
  "You are allowed to grow at your own pace.",
  "The butterfly does not look back at the cocoon.",
  "Trust the timing of your becoming.",
  "Soft is not weak. Soft is a kind of strength."
];
function quoteOfTheDay() {
  const d = new Date();
  const i = (d.getFullYear() * 366 + d.getMonth() * 31 + d.getDate()) % QUOTES.length;
  return QUOTES[i];
}

/* ============== Image helpers: support URL or uploaded file (local:blobId) ============== */
async function resolveImgSrc(value) {
  if (!value) return null;
  if (value.startsWith('local:')) {
    return await BLOOM.loadBlobUrl(value.slice(6));
  }
  return value;
}
// Resolve every <img data-img-src="..."> on the page, with optional fallback HTML
async function resolveAllImages() {
  const imgs = document.querySelectorAll('[data-img-src]');
  for (const el of imgs) {
    const val = el.dataset.imgSrc;
    const fallback = el.dataset.imgFallback || '';
    if (!val) continue;
    const src = await resolveImgSrc(val);
    if (src) {
      if (el.tagName === 'IMG') el.src = src;
      else el.style.backgroundImage = `url("${src}")`;
    } else if (fallback) {
      el.outerHTML = fallback;
    }
  }
}

// Image picker UI (URL or upload from device). Stores state per containerId.
const ImagePicker = {
  state: {},
  async init(containerId, currentValue) {
    this.state[containerId] = currentValue || '';
    await this.render(containerId);
  },
  async render(containerId) {
    const value = this.state[containerId] || '';
    const container = document.getElementById(containerId);
    if (!container) return;
    const src = await resolveImgSrc(value);
    const isLocal = value.startsWith('local:');
    container.innerHTML = `
      <div class="img-picker">
        <div class="img-preview-box">${src ? `<img src="${src}" alt="">` : '🖼️'}</div>
        <div class="img-picker-actions">
          <input type="url" class="input" placeholder="Paste image URL..." value="${!isLocal ? escapeHtml(value) : ''}" oninput="ImagePicker.setUrl('${containerId}', this.value)" ${isLocal ? 'disabled' : ''}>
          <div class="img-picker-buttons">
            <button type="button" class="btn btn-secondary btn-sm" onclick="document.getElementById('${containerId}-file').click()">📷 Upload from device</button>
            ${value ? `<button type="button" class="btn btn-ghost btn-sm" onclick="ImagePicker.clear('${containerId}')">✕ Clear</button>` : ''}
          </div>
          <input type="file" id="${containerId}-file" class="hidden" accept="image/*" onchange="ImagePicker.uploadFile('${containerId}', this.files[0])">
          ${isLocal ? '<div class="img-picker-note">Local file uploaded. Clear to switch to a URL.</div>' : ''}
        </div>
      </div>`;
  },
  setUrl(containerId, url) {
    this.state[containerId] = url;
    // Only update preview, don't re-render (preserves input focus)
    this.updatePreview(containerId);
  },
  async updatePreview(containerId) {
    const value = this.state[containerId];
    const src = await resolveImgSrc(value);
    const box = document.querySelector(`#${containerId} .img-preview-box`);
    if (box) box.innerHTML = src ? `<img src="${src}" alt="">` : '🖼️';
  },
  async uploadFile(containerId, file) {
    if (!file) return;
    // delete previous local blob if any
    const prev = this.state[containerId];
    if (prev && prev.startsWith('local:')) await BLOOM.deleteBlob(prev.slice(6));
    const id = 'i_' + BLOOM.uid();
    await BLOOM.saveBlob(id, file);
    this.state[containerId] = 'local:' + id;
    await this.render(containerId);
  },
  async clear(containerId) {
    const prev = this.state[containerId];
    if (prev && prev.startsWith('local:')) await BLOOM.deleteBlob(prev.slice(6));
    this.state[containerId] = '';
    await this.render(containerId);
  },
  get(containerId) { return this.state[containerId] || ''; }
};

// Helper: when deleting a card with a local image, also delete its blob
async function maybeDeleteLocalImage(value) {
  if (value && value.startsWith('local:')) await BLOOM.deleteBlob(value.slice(6));
}

async function resolveSidebarAvatar() {
  const el = document.getElementById('sidebar-avatar');
  if (!el) return;
  const val = el.dataset.avatarSrc;
  if (!val) return;
  const src = await resolveImgSrc(val);
  if (src) el.innerHTML = `<img src="${src}" alt="">`;
}
