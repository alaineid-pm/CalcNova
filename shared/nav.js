/* ============================================================
   CalcNova · Shared Navigation Script
   ============================================================
   HOW TO USE ON ANY PAGE:
   1. In <head>, link the shared CSS:
      <link rel="stylesheet" href="shared/nav.css">
   2. Set page config BEFORE this script loads:
      <script>
        window.CALCNOVA_PAGE = {
          id: 'compound-interest',   // matches an id in NAV_MENU below
          disclaimer: 'Optional disclaimer text shown in footer.'
        };
      </script>
   3. Load this script at end of <body>:
      <script src="shared/nav.js"></script>

   TO ADD A NEW TOOL: edit NAV_MENU below — one entry, done.
   TO ADD AN ARTICLE: edit ARTICLES below — one entry, done.
   ============================================================ */

(function () {

  /* ── Menu Data ───────────────────────────────────────────── */
  /* Edit here to update nav across ALL pages */

  var NAV_MENU = [
    {
      id: 'finance', icon: '💰', label: 'Finance', cssClass: 'finance',
      items: [
        { id: 'compound-interest', icon: '📈', label: 'Compound Interest', href: 'compound-interest-calculator.html', live: true },
        { id: 'coast-fire',        icon: '🏖️', label: 'Coast FIRE',        href: 'coast-fire-calculator.html',        live: true },
        { id: 'mortgage',          icon: '🏠', label: 'Mortgage Calculator', href: 'mortgage-calculator.html',          live: true },
        { id: 'savings-goal',      icon: '🎯', label: 'Savings Goal',      href: 'savings-goal.html',                  live: true },
        { id: 'debt-payoff',       icon: '💳', label: 'Debt Payoff',        href: 'debt-payoff.html',                  live: true },
        { id: 'emergency-fund',    icon: '🛟', label: 'Emergency Fund',    href: 'emergency-fund.html',               live: true },
        { id: 'fire-calculator',   icon: '🔥', label: 'FIRE Calculator',    href: 'fire-calculator.html',              live: true },
        { id: 'net-worth-tracker',  icon: '📊', label: 'Net Worth Tracker',  href: 'net-worth-tracker.html',            live: true },
      ]
    },
    {
      id: 'productivity', icon: '⏱️', label: 'Productivity', cssClass: 'productivity',
      items: [
        { id: 'time-converter',  icon: '🌍', label: 'Time Converter',  href: 'TimeConvertor.html', live: true },
        { id: 'pomodoro',        icon: '🍅', label: 'Pomodoro Timer',  href: 'pomodoro.html',       live: true },
        { id: 'world-clock',     icon: '🕐', label: 'World Clock',    href: 'world-clock.html',    live: true },
        { id: 'date-duration',   icon: '📅', label: 'Date Duration',  href: 'date-duration.html',  live: true },
        { id: 'age-calculator',  icon: '🎂', label: 'Age Calculator', href: 'age-calculator.html', live: true },
      ]
    },
    {
      id: 'utility', icon: '🔧', label: 'Utility', cssClass: 'utility',
      items: [
        { id: 'unit-converter',   icon: '📏', label: 'Unit Converter',   href: 'unit-converter.html', live: true },
        { id: 'percentage-calculator',  icon: '🔢', label: 'Percentage Calc',  href: 'percentage-calculator.html', live: true },
        { id: 'random-number',    icon: '🎲', label: 'Random Number',    href: 'random-number.html', live: true },
        { id: 'word-counter',     icon: '✍️', label: 'Word Counter',     href: 'word-counter.html', live: true },
      ]
    }
  ];

  var ARTICLES = [
    { icon: '📈', label: 'How to Calculate Compound Interest',  href: 'article-compound-interest.html' },
    { icon: '🏖️', label: 'What Is Coast FIRE?',                href: 'article-coast-fire.html' },
    { icon: '💳', label: 'Debt Snowball vs Avalanche',          href: 'article-debt-snowball-vs-avalanche.html' },
    { icon: '🛟', label: 'How Much Emergency Fund Do I Need?',  href: 'article-emergency-fund.html' },
    { icon: '🌍', label: 'Time Zones for Remote Teams',         href: 'article-time-zones-remote-teams.html' },
    { icon: '🍅', label: 'The Pomodoro Technique Guide',        href: 'article-pomodoro-technique.html' },
  ];

  /* ── Page Config ─────────────────────────────────────────── */
  var cfg = window.CALCNOVA_PAGE || {};
  var currentId  = cfg.id         || '';
  var disclaimer = cfg.disclaimer || '';
  /* Optional: extra header content injected between Tools menu and donate btn */
  var extraHeader = cfg.extraHeader || '';

  /* ── Helpers ─────────────────────────────────────────────── */
  function h(tag, attrs, innerHTML) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'class') el.className = attrs[k];
      else el.setAttribute(k, attrs[k]);
    });
    if (innerHTML !== undefined) el.innerHTML = innerHTML;
    return el;
  }

  /* ── Build Mega-Menu HTML ────────────────────────────────── */
  function buildMenuHTML() {
    var cols = NAV_MENU.map(function (cat) {
      var items = cat.items.map(function (item) {
        var isCurrent = item.id === currentId;
        var inner = '<span class="menu-item-icon">' + item.icon + '</span>'
                  + '<span class="menu-item-text">' + item.label + '</span>';
        if (isCurrent) {
          return '<li><div class="menu-item current">' + inner + '</div></li>';
        } else if (item.href) {
          return '<li><a href="' + item.href + '" class="menu-item">' + inner + '</a></li>';
        } else {
          return '<li><div class="menu-item">' + inner + '</div></li>';
        }
      }).join('');

      return '<div class="menu-category">'
        + '<div class="menu-cat-header">'
        +   '<div class="menu-cat-icon ' + cat.cssClass + '">' + cat.icon + '</div>'
        +   '<div class="menu-cat-name">' + cat.label + '</div>'
        + '</div>'
        + '<ul class="menu-items">' + items + '</ul>'
        + '</div>';
    }).join('');

    var articleItems = ARTICLES.map(function (a) {
      return '<li><a href="' + a.href + '"><span class="art-icon">' + a.icon + '</span>' + a.label + '</a></li>';
    }).join('');

    return '<div class="mega-menu-grid">' + cols + '</div>'
      + '<div class="menu-articles">'
      +   '<div class="menu-articles-header">'
      +     '<div class="menu-cat-icon articles">📝</div>'
      +     '<div class="menu-cat-name">Articles &amp; Guides</div>'
      +   '</div>'
      +   '<ul class="menu-articles-list">' + articleItems + '</ul>'
      + '</div>'
      + '<div class="mega-menu-footer"><a href="index.html">View all tools &rarr;</a></div>';
  }

  /* ── Build Header HTML ───────────────────────────────────── */
  function buildHeader() {
    var logoSVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'
      + '<line x1="18" y1="20" x2="18" y2="10"/>'
      + '<line x1="12" y1="20" x2="12" y2="4"/>'
      + '<line x1="6" y1="20" x2="6" y2="14"/>'
      + '</svg>';

    var gridSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      + '<rect x="3" y="3" width="7" height="7" rx="1.5"/>'
      + '<rect x="14" y="3" width="7" height="7" rx="1.5"/>'
      + '<rect x="3" y="14" width="7" height="7" rx="1.5"/>'
      + '<rect x="14" y="14" width="7" height="7" rx="1.5"/>'
      + '</svg>';

    var chevronSVG = '<svg class="nav-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;margin-left:-2px">'
      + '<polyline points="6 9 12 15 18 9"/>'
      + '</svg>';

    return '<header id="cn-header">'
      + '<a href="index.html" class="logo">'
      +   '<div class="logo-mark">' + logoSVG + '</div>'
      +   '<div>'
      +     '<div class="logo-text">CalcNova</div>'
      +     '<div class="logo-sub">Calculate. Plan. Optimize.</div>'
      +   '</div>'
      + '</a>'
      + '<div class="header-right" id="cn-header-right">'
      +   (extraHeader ? '<div id="cn-extra-header">' + extraHeader + '</div>' : '')
      +   '<div class="nav-tools-wrap">'
      +     '<button class="nav-tools-btn" id="menuBtn">'
      +       gridSVG + '<span class="nav-label">Tools</span>' + chevronSVG
      +     '</button>'
      +     '<div class="mega-menu" id="megaMenu">' + buildMenuHTML() + '</div>'
      +   '</div>'
      +   '<a href="https://ko-fi.com/calcnova" target="_blank" rel="noopener" class="donate-btn" title="Support CalcNova">☕ Buy me a coffee</a>'
      +   '<button class="icon-btn" id="darkBtn" title="Toggle dark mode">🌙</button>'
      + '</div>'
      + '</header>'
      + '<div class="menu-overlay" id="menuOverlay"></div>';
  }

  /* ── Build Footer HTML ───────────────────────────────────── */
  function buildFooter() {
    var logoSVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'
      + '<line x1="18" y1="20" x2="18" y2="10"/>'
      + '<line x1="12" y1="20" x2="12" y2="4"/>'
      + '<line x1="6" y1="20" x2="6" y2="14"/>'
      + '</svg>';

    var disclaimerHtml = disclaimer
      ? '<div class="footer-disclaimer">' + disclaimer + '</div>'
      : '';

    return '<footer class="site-footer">'
      + '<div>'
      +   '<div class="footer-brand">'
      +     '<div class="logo-mark" style="width:28px;height:28px;font-size:14px;border-radius:8px;">' + logoSVG + '</div>'
      +     '<span class="footer-brand-name">CalcNova</span>'
      +   '</div>'
      +   '<div class="footer-copy">Calculate. Plan. Optimize. &middot; Free tools, no sign-up required.</div>'
      + '</div>'
      + '<div class="footer-right">'
      +   '<div class="footer-links">'
      +     '<a href="index.html">All Tools</a>'
      +     '<a href="privacy.html">Privacy</a>'
      +     '<a href="terms.html">Terms of Use</a>'
      +   '</div>'
      +   '<a href="https://ko-fi.com/calcnova" target="_blank" rel="noopener" class="donate-btn">☕ Buy me a coffee</a>'
      + '</div>'
      + '</footer>'
      + disclaimerHtml;
  }

  /* ── Inject into DOM ─────────────────────────────────────── */
  function inject() {
    var app = document.querySelector('.app');
    if (!app) return;

    // Inject header at the very top of .app
    var headerWrap = document.createElement('div');
    headerWrap.innerHTML = buildHeader();
    app.insertBefore(headerWrap.firstChild, app.firstChild);  // <header>
    app.insertBefore(headerWrap.firstChild, app.childNodes[1]); // menu-overlay

    // Inject footer at the end of .app
    var footerWrap = document.createElement('div');
    footerWrap.innerHTML = buildFooter();
    while (footerWrap.firstChild) app.appendChild(footerWrap.firstChild);

    // Wire up interactions
    initMenu();
    initDarkMode();
  }

  /* ── Menu Toggle ─────────────────────────────────────────── */
  function initMenu() {
    var btn     = document.getElementById('menuBtn');
    var menu    = document.getElementById('megaMenu');
    var overlay = document.getElementById('menuOverlay');
    if (!btn || !menu || !overlay) return;

    btn.addEventListener('click', function () {
      var open = menu.classList.contains('open');
      menu.classList.toggle('open', !open);
      btn.classList.toggle('active', !open);
      overlay.classList.toggle('open', !open);
      // On mobile, position menu below the header
      if (!open && window.innerWidth <= 640) {
        var header = document.getElementById('cn-header');
        if (header) {
          menu.style.top = (header.getBoundingClientRect().bottom + 6) + 'px';
        }
      }
    });
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  }

  function closeMenu() {
    var menu    = document.getElementById('megaMenu');
    var btn     = document.getElementById('menuBtn');
    var overlay = document.getElementById('menuOverlay');
    if (menu)    menu.classList.remove('open');
    if (btn)     btn.classList.remove('active');
    if (overlay) overlay.classList.remove('open');
  }

  /* ── Dark Mode ───────────────────────────────────────────── */
  function initDarkMode() {
    // Restore saved preference
    try {
      if (localStorage.getItem('cn_dark') === '1') {
        document.body.classList.add('dark');
        updateDarkBtn(true);
      }
    } catch (e) {}

    var btn = document.getElementById('darkBtn');
    if (btn) btn.addEventListener('click', toggleDark);
  }

  function toggleDark() {
    var isDark = document.body.classList.toggle('dark');
    try { localStorage.setItem('cn_dark', isDark ? '1' : '0'); } catch (e) {}
    updateDarkBtn(isDark);
    // Pages that need to react (e.g. redraw a canvas chart) can listen to this event
    document.dispatchEvent(new CustomEvent('calcnova:darkchanged', { detail: { dark: isDark } }));
  }

  function updateDarkBtn(isDark) {
    var btn = document.getElementById('darkBtn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  }

  /* ── Global shims (pages may call these directly) ────────── */
  window.toggleMenu = function () {
    var menu = document.getElementById('megaMenu');
    var btn  = document.getElementById('menuBtn');
    var ov   = document.getElementById('menuOverlay');
    if (!menu) return;
    var open = menu.classList.contains('open');
    menu.classList.toggle('open', !open);
    if (btn) btn.classList.toggle('active', !open);
    if (ov)  ov.classList.toggle('open', !open);
  };
  window.closeMenu  = closeMenu;
  window.toggleDark = toggleDark;

  /* ── Run ─────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
