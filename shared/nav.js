/* ============================================================
   CalcNova · Shared Navigation Script  v2
   ============================================================
   HOW TO USE ON ANY PAGE:
   1. In <head>, link the shared CSS:
        <link rel="stylesheet" href="shared/nav.css">
   2. Load site-data.js (optional but required for breadcrumbs,
      related tools, and auto-generated footer/search):
        <script src="shared/site-data.js"></script>
   3. Set page config BEFORE this script loads:
        <script>
          window.CALCNOVA_PAGE = {
            id: 'compound-interest',   // matches a tool/article id
            disclaimer: 'Optional disclaimer text shown in footer.'
          };
        </script>
   4. Load this script at end of <body>:
        <script src="shared/nav.js"></script>

   TO ADD A TOOL OR ARTICLE: edit shared/site-data.js — one entry.
   Everything (nav, footer, search, related tools) updates automatically.
   ============================================================ */

(function () {
  'use strict';

  /* ── Grab data from site-data.js (or fall back) ─────────── */
  var TOOLS      = window.CALCNOVA_TOOLS      || [];
  var ARTICLES   = window.CALCNOVA_ARTICLES   || [];
  var CATEGORIES = window.CALCNOVA_CATEGORIES || [];
  var SITE_CFG   = window.CALCNOVA_CONFIG     || {};

  /* ── Page config ─────────────────────────────────────────── */
  var cfg        = window.CALCNOVA_PAGE || {};
  /* ── Google Analytics ────────────────────────────────────── */
  /* To change the GA property, update GA_MEASUREMENT_ID here. */
  var GA_MEASUREMENT_ID = 'G-2HPZZPQCWD';

  (function loadGA(id) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', id);
  })(GA_MEASUREMENT_ID);

  /* ── Page Config ─────────────────────────────────────────── */
  var currentId  = cfg.id         || '';
  var disclaimer = cfg.disclaimer || '';

  /* ── Lookup current tool / article from data ─────────────── */
  var currentTool    = TOOLS.find(function (t) { return t.id === currentId; }) || null;
  var currentArticle = ARTICLES.find(function (a) { return a.id === currentId; }) || null;

  /* ── Helpers ─────────────────────────────────────────────── */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* SVGs ───────────────────────────────────────────────────── */
  var SVG_KOFI = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

  var SVG_BARS = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'
    + '<line x1="18" y1="20" x2="18" y2="10"/>'
    + '<line x1="12" y1="20" x2="12" y2="4"/>'
    + '<line x1="6" y1="20" x2="6" y2="14"/>'
    + '</svg>';

  var SVG_CHEVRON = '<svg class="cn-dd-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  var SVG_MP_CHEVRON = '<svg class="cn-mp-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  var SVG_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

  var SVG_GITHUB = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>';

  /* ── Build sticky nav HTML ──────────────────────────────── */
  function buildNav() {
    var dropdowns = '';

    /* Tool category dropdowns (non-specialty, non-guides) */
    CATEGORIES.filter(function (c) { return c.id !== 'guides' && !c.specialty; }).forEach(function (cat) {
      var tools = TOOLS.filter(function (t) { return t.category === cat.id; });
      if (!tools.length) return;

      var isCatActive = currentTool && currentTool.category === cat.id;

      var items = tools.map(function (tool) {
        var isCurrent = tool.id === currentId;
        return '<li>'
          + '<a href="' + esc(tool.url) + '" class="cn-dd-item' + (isCurrent ? ' current' : '') + '"'
          + (isCurrent ? ' aria-current="page"' : '')
          + ' title="' + esc(tool.description) + '">'
          + '<span class="cn-dd-icon">' + tool.emoji + '</span>'
          + '<span class="cn-dd-label">' + esc(tool.name) + '</span>'
          + '</a></li>';
      }).join('');

      dropdowns += '<div class="cn-dropdown-wrap" data-cat="' + cat.id + '">'
        + '<button class="cn-dropdown-btn' + (isCatActive ? ' cat-active' : '') + '" type="button" aria-haspopup="true" aria-expanded="false">'
        + '<span class="cn-dd-emoji">' + cat.emoji + '</span>'
        + '<span>' + esc(cat.name) + '</span>'
        + SVG_CHEVRON
        + '</button>'
        + '<div class="cn-dropdown-panel" role="menu">'
        + '<ul>' + items + '</ul>'
        + '</div>'
        + '</div>';
    });

    /* "More ▾" dropdown for specialty categories */
    var specialtyCats = CATEGORIES.filter(function (c) { return c.specialty; });
    if (specialtyCats.length) {
      var isMoreActive = currentTool && specialtyCats.some(function (c) { return c.id === currentTool.category; });
      var moreItems = '';
      specialtyCats.forEach(function (cat) {
        var tools = TOOLS.filter(function (t) { return t.category === cat.id; });
        if (!tools.length) return;
        var landingUrl = cat.landingUrl || ('index.html#' + cat.id);
        moreItems += '<li class="cn-dd-subcat-header">'
          + '<a href="' + esc(landingUrl) + '" class="cn-dd-cat-link">'
          + cat.emoji + ' ' + esc(cat.name) + ' (' + tools.length + ' tools)'
          + '</a></li>';
        tools.forEach(function (tool) {
          var isCurrent = tool.id === currentId;
          moreItems += '<li>'
            + '<a href="' + esc(tool.url) + '" class="cn-dd-item' + (isCurrent ? ' current' : '') + '"'
            + (isCurrent ? ' aria-current="page"' : '')
            + ' title="' + esc(tool.description) + '">'
            + '<span class="cn-dd-icon">' + tool.emoji + '</span>'
            + '<span class="cn-dd-label">' + esc(tool.name) + '</span>'
            + '</a></li>';
        });
      });
      dropdowns += '<div class="cn-dropdown-wrap align-right" data-cat="more">'
        + '<button class="cn-dropdown-btn' + (isMoreActive ? ' cat-active' : '') + '" type="button" aria-haspopup="true" aria-expanded="false">'
        + '<span>More</span>'
        + SVG_CHEVRON
        + '</button>'
        + '<div class="cn-dropdown-panel" role="menu">'
        + '<ul>' + moreItems + '</ul>'
        + '</div>'
        + '</div>';
    }

    /* Guides / Articles dropdown — show 6 most recent as a flat list */
    var sortedArticles = ARTICLES.slice().sort(function (a, b) {
      return (b.datePublished || '').localeCompare(a.datePublished || '');
    });
    var recentArticles = sortedArticles.slice(0, 6);

    var isGuidesActive = !!currentArticle;

    var guidePanelContent = '<ul>' + recentArticles.map(function (a) {
      return '<li><a href="' + esc(a.url) + '" class="cn-dd-item' + (a.id === currentId ? ' current' : '') + '">'
        + '<span class="cn-dd-icon">' + a.emoji + '</span>'
        + '<span class="cn-dd-label">' + esc(a.name) + '</span>'
        + '</a></li>';
    }).join('') + '</ul>';

    dropdowns += '<div class="cn-dropdown-wrap align-right" data-cat="guides">'
      + '<button class="cn-dropdown-btn' + (isGuidesActive ? ' cat-active' : '') + '" type="button" aria-haspopup="true" aria-expanded="false">'
      + '<span class="cn-dd-emoji">📝</span>'
      + '<span>Guides</span>'
      + SVG_CHEVRON
      + '</button>'
      + '<div class="cn-dropdown-panel" role="menu">'
      + guidePanelContent
      + '<a href="guides.html" class="cn-dd-viewall">View all guides &rarr;</a>'
      + '</div>'
      + '</div>';

    /* Right-side actions */
    var actions = '<div class="cn-nav-actions">'
      /* Search */
      + '<div class="cn-search-wrap" id="cn-search-wrap">'
      +   '<button class="cn-search-btn" id="cn-search-btn" type="button" aria-label="Search">' + SVG_SEARCH + '</button>'
      +   '<div class="cn-search-expanded" id="cn-search-expanded" role="dialog" aria-label="Search">'
      +     '<div class="cn-search-input-wrap">'
      +       SVG_SEARCH
      +       '<input type="text" class="cn-search-input" id="cn-search-input" placeholder="Search tools &amp; guides…" autocomplete="off" spellcheck="false">'
      +     '</div>'
      +     '<div class="cn-search-results" id="cn-search-results"></div>'
      +   '</div>'
      + '</div>'
      /* Ko-fi */
      + '<a href="' + esc(SITE_CFG.kofiUrl || 'https://ko-fi.com/calcnova') + '" target="_blank" rel="noopener" class="cn-kofi-btn" title="Support CalcNova on Ko-fi" aria-label="Support CalcNova on Ko-fi">' + SVG_KOFI + '</a>'
      /* Dark mode */
      + '<button class="icon-btn cn-dark-btn" id="darkBtn" type="button" title="Toggle dark mode" aria-label="Switch to dark mode">🌙</button>'
      /* Hamburger */
      + '<button class="cn-hamburger" id="cn-hamburger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="cn-mobile-panel">'
      +   '<span></span><span></span><span></span>'
      + '</button>'
      + '</div>';

    return '<nav class="cn-nav" id="cn-nav" role="navigation" aria-label="Main navigation">'
      + '<div class="cn-nav-inner">'
      +   '<a href="index.html" class="logo" aria-label="CalcNova home">'
      +     '<div class="logo-mark">' + SVG_BARS + '</div>'
      +     '<span class="logo-text">CalcNova</span>'
      +   '</a>'
      +   '<div class="cn-nav-center" id="cn-nav-center">' + dropdowns + '</div>'
      +   actions
      + '</div>'
      + '</nav>';
  }

  /* ── Build mobile panel HTML ────────────────────────────── */
  function buildMobilePanel() {
    var accordions = '';

    /* Tool categories (all non-guides, including specialty) */
    CATEGORIES.filter(function (c) { return c.id !== 'guides'; }).forEach(function (cat) {
      var tools = TOOLS.filter(function (t) { return t.category === cat.id; });
      if (!tools.length) return;

      var isOpen = currentTool && currentTool.category === cat.id;
      var items  = tools.map(function (tool) {
        var cur = tool.id === currentId;
        return '<a href="' + esc(tool.url) + '" class="' + (cur ? 'current' : '') + '">'
          + '<span class="cn-dd-icon">' + tool.emoji + '</span>'
          + esc(tool.name)
          + '</a>';
      }).join('');

      accordions += '<div class="cn-mp-cat' + (isOpen ? ' open' : '') + '">'
        + '<button class="cn-mp-cat-btn" type="button" aria-expanded="' + (isOpen ? 'true' : 'false') + '">'
        +   '<span class="cn-mp-cat-btn-left">'
        +     '<span class="cn-mp-cat-icon">' + cat.emoji + '</span>'
        +     '<span>' + esc(cat.name) + '</span>'
        +   '</span>'
        +   SVG_MP_CHEVRON
        + '</button>'
        + '<div class="cn-mp-cat-items">' + items + '</div>'
        + '</div>';
    });

    /* Guides category */
    var sortedArticles = ARTICLES.slice().sort(function (a, b) {
      return (b.datePublished || '').localeCompare(a.datePublished || '');
    });
    var isGuidesOpen = !!currentArticle;
    var guideLinks = sortedArticles.map(function (a) {
      return '<a href="' + esc(a.url) + '" class="' + (a.id === currentId ? 'current' : '') + '">'
        + '<span class="cn-dd-icon">' + a.emoji + '</span>'
        + esc(a.name)
        + '</a>';
    }).join('');

    accordions += '<div class="cn-mp-cat' + (isGuidesOpen ? ' open' : '') + '">'
      + '<button class="cn-mp-cat-btn" type="button" aria-expanded="' + (isGuidesOpen ? 'true' : 'false') + '">'
      +   '<span class="cn-mp-cat-btn-left">'
      +     '<span class="cn-mp-cat-icon">📝</span>'
      +     '<span>Guides</span>'
      +   '</span>'
      +   SVG_MP_CHEVRON
      + '</button>'
      + '<div class="cn-mp-cat-items">' + guideLinks + '</div>'
      + '</div>';

    return '<div class="cn-mobile-panel" id="cn-mobile-panel" aria-label="Navigation menu">'
      + '<div class="cn-mp-header">'
      +   '<div class="cn-mp-brand">' + SVG_BARS.replace('width="22" height="22"', 'width="18" height="18"') + 'CalcNova</div>'
      +   '<button class="cn-mp-close" id="cn-mp-close" type="button" aria-label="Close menu">✕</button>'
      + '</div>'
      + '<div class="cn-mp-search">'
      +   '<div class="cn-mp-search-input-wrap">'
      +     SVG_SEARCH.replace('viewBox', 'class="cn-mp-search-icon" viewBox')
      +     '<input type="text" class="cn-mp-search-input" id="cn-mp-search-input" placeholder="Search tools &amp; guides…" autocomplete="off">'
      +   '</div>'
      +   '<div class="cn-mp-search-results" id="cn-mp-search-results"></div>'
      + '</div>'
      + '<div class="cn-mp-nav">' + accordions + '</div>'
      + '<div class="cn-mp-footer">'
      +   '<span class="cn-mp-footer-label">Dark mode</span>'
      +   '<button class="icon-btn cn-dark-btn" id="darkBtn-mobile" type="button" title="Toggle dark mode" aria-label="Switch to dark mode">🌙</button>'
      + '</div>'
      + '</div>'
      + '<div class="cn-overlay" id="cn-overlay"></div>';
  }

  /* ── Build breadcrumbs HTML ─────────────────────────────── */
  function buildBreadcrumbs() {
    var items = null;
    var catName = '', catAnchor = '';

    if (currentTool) {
      var cat = CATEGORIES.find(function (c) { return c.id === currentTool.category; });
      if (cat) {
        catName = cat.name;
        catAnchor = cat.specialty && cat.landingUrl ? cat.landingUrl : 'index.html#' + cat.id;
      }
      items = [
        { name: 'Home', url: 'index.html' },
        { name: catName, url: catAnchor },
        { name: currentTool.name, url: null }
      ];
    } else if (currentArticle) {
      items = [
        { name: 'Home', url: 'index.html' },
        { name: 'Guides', url: 'index.html#articles' },
        { name: currentArticle.name, url: null }
      ];
    }

    if (!items) return '';

    var html = '<nav class="cn-breadcrumbs" aria-label="Breadcrumb"><ol class="cn-bc-list">';
    items.forEach(function (item, i) {
      if (i > 0) html += '<li class="cn-bc-sep" aria-hidden="true">›</li>';
      if (item.url) {
        html += '<li class="cn-bc-item"><a href="' + esc(item.url) + '">' + esc(item.name) + '</a></li>';
      } else {
        html += '<li class="cn-bc-item cn-bc-current" aria-current="page">' + esc(item.name) + '</li>';
      }
    });
    html += '</ol></nav>';
    return html;
  }

  /* ── Inject breadcrumb JSON-LD into <head> ──────────────── */
  function injectBreadcrumbSchema() {
    var baseUrl = SITE_CFG.siteUrl || 'https://calcnova.co';
    var items   = null;

    if (currentTool) {
      var cat = CATEGORIES.find(function (c) { return c.id === currentTool.category; });
      var catName = cat ? cat.name : currentTool.category;
      var catUrl = (cat && cat.specialty && cat.landingUrl)
        ? baseUrl + '/' + cat.landingUrl
        : baseUrl + '/#' + currentTool.category;
      items = [
        { pos: 1, name: 'Home',    url: baseUrl + '/' },
        { pos: 2, name: catName,   url: catUrl },
        { pos: 3, name: currentTool.name, url: baseUrl + '/' + currentTool.url }
      ];
    } else if (currentArticle) {
      items = [
        { pos: 1, name: 'Home',    url: baseUrl + '/' },
        { pos: 2, name: 'Guides',  url: baseUrl + '/#articles' },
        { pos: 3, name: currentArticle.name, url: baseUrl + '/' + currentArticle.url }
      ];
    }

    if (!items) return;

    var schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map(function (it) {
        return { '@type': 'ListItem', position: it.pos, name: it.name, item: it.url };
      })
    };

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /* ── Build related tools HTML ───────────────────────────── */
  function buildRelatedTools() {
    if (!currentTool || !currentTool.related || !currentTool.related.length) return '';

    var relTools = currentTool.related
      .map(function (id) { return TOOLS.find(function (t) { return t.id === id; }); })
      .filter(Boolean)
      .slice(0, 4);

    if (!relTools.length) return '';

    var cards = relTools.map(function (tool) {
      return '<a href="' + esc(tool.url) + '" class="cn-related-card">'
        + '<div class="cn-rc-icon">' + tool.emoji + '</div>'
        + '<div class="cn-rc-content">'
        +   '<div class="cn-rc-name">' + esc(tool.name) + '</div>'
        +   '<div class="cn-rc-desc">' + esc(tool.description) + '</div>'
        + '</div>'
        + '<div class="cn-rc-arrow">&#8594;</div>'
        + '</a>';
    }).join('');

    return '<section class="cn-related-tools" aria-label="Related tools">'
      + '<h3 class="cn-related-title">Related Tools</h3>'
      + '<div class="cn-related-grid">' + cards + '</div>'
      + '</section>';
  }

  /* ── Build footer HTML ──────────────────────────────────── */
  function buildFooter() {
    var cols = '';

    /* Tool columns (3 categories) */
    CATEGORIES.filter(function (c) { return c.id !== 'guides'; }).forEach(function (cat) {
      var tools = TOOLS.filter(function (t) { return t.category === cat.id; });
      var links = tools.map(function (t) {
        return '<li><a href="' + esc(t.url) + '">' + esc(t.name) + '</a></li>';
      }).join('');
      cols += '<div class="cn-footer-col">'
        + '<div class="cn-footer-col-header">' + cat.emoji + ' ' + esc(cat.name) + '</div>'
        + '<ul class="cn-footer-col-links">' + links + '</ul>'
        + '<a href="tools.html#' + cat.id + '" class="cn-footer-viewall">All tools &rarr;</a>'
        + '</div>';
    });

    /* Guides column — show 8 most recent */
    var artLinks = ARTICLES.slice().sort(function (a, b) {
      return (b.datePublished || '').localeCompare(a.datePublished || '');
    }).slice(0, 8).map(function (a) {
      return '<li><a href="' + esc(a.url) + '">' + esc(a.name) + '</a></li>';
    }).join('');

    cols += '<div class="cn-footer-col">'
      + '<div class="cn-footer-col-header">📝 Guides</div>'
      + '<ul class="cn-footer-col-links">' + artLinks + '</ul>'
      + '<a href="guides.html" class="cn-footer-viewall">All guides &rarr;</a>'
      + '</div>';

    var disclaimerHtml = disclaimer
      ? '<div class="cn-footer-disclaimer">' + disclaimer + '</div>'
      : '';

    var kofiUrl = SITE_CFG.kofiUrl || 'https://ko-fi.com/calcnova';

    return '<footer class="cn-footer" role="contentinfo">'
      + '<div class="cn-footer-inner">'
      +   '<div class="cn-footer-grid">' + cols + '</div>'
      +   '<div class="cn-footer-bottom">'
      +     '<div class="cn-footer-tagline">'
      +       '<strong>CalcNova</strong> — Free calculators that respect your privacy.'
      +       '<span class="cn-footer-privacy">All calculations run in your browser. Your data never leaves your device.</span>'
      +     '</div>'
      +     '<div class="cn-footer-meta">'
      +       '<a href="' + esc(kofiUrl) + '" target="_blank" rel="noopener">Support on Ko-fi</a>'
      +       '<span class="cn-sep">·</span>'
      +       '<a href="privacy.html">Privacy</a>'
      +       '<span class="cn-sep">·</span>'
      +       '<a href="terms.html">Terms</a>'
      +       '<span class="cn-sep">·</span>'
      +       '<span class="cn-footer-copy">&copy; 2026 CalcNova</span>'
      +     '</div>'
      +   '</div>'
      + '</div>'
      + disclaimerHtml
      + '</footer>';
  }

  /* ── Inject into DOM ─────────────────────────────────────── */
  function inject() {
    var app = document.querySelector('.app');
    if (!app) return;

    /* 1. Inject sticky nav before .app */
    var navFrag = document.createElement('div');
    navFrag.innerHTML = buildNav();
    document.body.insertBefore(navFrag.firstChild, app);

    /* 2. Inject mobile panel + overlay before .app */
    var mpFrag = document.createElement('div');
    mpFrag.innerHTML = buildMobilePanel();
    while (mpFrag.firstChild) document.body.insertBefore(mpFrag.firstChild, app);

    /* 3. Inject breadcrumbs at start of .app (skip homepage) */
    if (currentId) {
      var bcHTML = buildBreadcrumbs();
      if (bcHTML) {
        var bcEl = document.createElement('div');
        bcEl.innerHTML = bcHTML;
        app.insertBefore(bcEl.firstChild, app.firstChild);
      }
      injectBreadcrumbSchema();
    }

    /* 4. Inject related tools at end of .app (tool pages only) */
    if (currentTool) {
      var rtHTML = buildRelatedTools();
      if (rtHTML) {
        var rtEl = document.createElement('div');
        rtEl.innerHTML = rtHTML;
        app.appendChild(rtEl.firstChild);
      }
    }

    /* 5. Inject footer after .app */
    var footerFrag = document.createElement('div');
    footerFrag.innerHTML = buildFooter();
    var nextSib = app.nextSibling;
    while (footerFrag.firstChild) {
      if (nextSib) {
        app.parentNode.insertBefore(footerFrag.firstChild, nextSib);
      } else {
        app.parentNode.appendChild(footerFrag.firstChild);
      }
    }

    /* 6. Wire up everything */
    initScrollShadow();
    initDropdowns();
    initSearch();
    initMobilePanel();
    initDarkMode();
  }

  /* ── Scroll shadow on nav ─────────────────────────────────── */
  function initScrollShadow() {
    var nav = document.getElementById('cn-nav');
    if (!nav) return;
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 4);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Dropdown hover/click behavior ───────────────────────── */
  function initDropdowns() {
    var wraps = document.querySelectorAll('.cn-dropdown-wrap');
    var openDelay = null, closeDelay = null;

    wraps.forEach(function (wrap) {
      var btn   = wrap.querySelector('.cn-dropdown-btn');
      var panel = wrap.querySelector('.cn-dropdown-panel');
      if (!btn || !panel) return;

      function openPanel() {
        clearTimeout(closeDelay);
        /* Close any other open panels first */
        wraps.forEach(function (w) {
          if (w !== wrap) {
            var p = w.querySelector('.cn-dropdown-panel');
            var b = w.querySelector('.cn-dropdown-btn');
            if (p) p.classList.remove('open');
            if (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); }
          }
        });
        panel.classList.add('open');
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }

      function closePanel() {
        panel.classList.remove('open');
        btn.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      }

      /* Hover — 200ms open delay, 120ms close delay */
      wrap.addEventListener('mouseenter', function () {
        clearTimeout(closeDelay);
        openDelay = setTimeout(openPanel, 200);
      });
      wrap.addEventListener('mouseleave', function () {
        clearTimeout(openDelay);
        closeDelay = setTimeout(closePanel, 120);
      });

      /* Click toggle (for keyboards and touch) */
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        clearTimeout(openDelay);
        clearTimeout(closeDelay);
        if (panel.classList.contains('open')) {
          closePanel();
        } else {
          openPanel();
        }
      });
    });

    /* Close all dropdowns when clicking outside */
    document.addEventListener('click', function () {
      wraps.forEach(function (wrap) {
        var p = wrap.querySelector('.cn-dropdown-panel');
        var b = wrap.querySelector('.cn-dropdown-btn');
        if (p) p.classList.remove('open');
        if (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        wraps.forEach(function (wrap) {
          var p = wrap.querySelector('.cn-dropdown-panel');
          var b = wrap.querySelector('.cn-dropdown-btn');
          if (p) p.classList.remove('open');
          if (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); }
        });
        closeSearch();
      }
    });
  }

  /* ── Search ──────────────────────────────────────────────── */
  var searchTimer = null;

  function buildSearchIndex() {
    var index = [];
    TOOLS.forEach(function (t) {
      var cat = CATEGORIES.find(function (c) { return c.id === t.category; });
      index.push({ emoji: t.emoji, name: t.name, url: t.url, cat: cat ? cat.name : t.category });
    });
    ARTICLES.forEach(function (a) {
      index.push({ emoji: a.emoji, name: a.name, url: a.url, cat: 'Guide', desc: a.description });
    });
    return index;
  }

  var SEARCH_INDEX = null;

  function runSearch(query, resultsEl) {
    if (!resultsEl) return;
    if (!SEARCH_INDEX) SEARCH_INDEX = buildSearchIndex();

    var q = query.trim().toLowerCase();
    if (!q) { resultsEl.innerHTML = ''; return; }

    var matches = SEARCH_INDEX.filter(function (item) {
      return item.name.toLowerCase().indexOf(q) !== -1
        || (item.desc && item.desc.toLowerCase().indexOf(q) !== -1);
    }).slice(0, 8);

    if (!matches.length) {
      resultsEl.innerHTML = '<div class="cn-search-empty">No tools found. Try a different search.</div>';
      return;
    }

    resultsEl.innerHTML = matches.map(function (item) {
      return '<a href="' + esc(item.url) + '" class="cn-search-result">'
        + '<span class="cn-sr-icon">' + item.emoji + '</span>'
        + '<span class="cn-sr-content">'
        +   '<div class="cn-sr-name">' + esc(item.name) + '</div>'
        +   '<span class="cn-sr-cat">' + esc(item.cat) + '</span>'
        + '</span>'
        + '</a>';
    }).join('');
  }

  function closeSearch() {
    var expanded = document.getElementById('cn-search-expanded');
    var input    = document.getElementById('cn-search-input');
    if (expanded) expanded.classList.remove('open');
    if (input) input.value = '';
    var results = document.getElementById('cn-search-results');
    if (results) results.innerHTML = '';
  }

  function initSearch() {
    /* Desktop search */
    var searchBtn      = document.getElementById('cn-search-btn');
    var searchExpanded = document.getElementById('cn-search-expanded');
    var searchInput    = document.getElementById('cn-search-input');
    var searchResults  = document.getElementById('cn-search-results');

    if (searchBtn && searchExpanded) {
      searchBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = searchExpanded.classList.toggle('open');
        if (isOpen && searchInput) setTimeout(function () { searchInput.focus(); }, 50);
      });
      searchExpanded.addEventListener('click', function (e) { e.stopPropagation(); });
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          runSearch(searchInput.value, searchResults);
        }, 80);
      });
    }

    /* Mobile search */
    var mpInput   = document.getElementById('cn-mp-search-input');
    var mpResults = document.getElementById('cn-mp-search-results');
    if (mpInput) {
      mpInput.addEventListener('input', function () {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          runSearch(mpInput.value, mpResults);
        }, 80);
      });
    }

    /* Close search on outside click */
    document.addEventListener('click', function () { closeSearch(); });
  }

  /* ── Mobile panel ────────────────────────────────────────── */
  function initMobilePanel() {
    var hamburger = document.getElementById('cn-hamburger');
    var panel     = document.getElementById('cn-mobile-panel');
    var closeBtn  = document.getElementById('cn-mp-close');
    var overlay   = document.getElementById('cn-overlay');

    function openPanel() {
      if (!panel) return;
      panel.classList.add('open');
      if (hamburger) { hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded', 'true'); }
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closePanel() {
      if (!panel) return;
      panel.classList.remove('open');
      if (hamburger) { hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', 'false'); }
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', function (e) { e.stopPropagation(); openPanel(); });
    if (closeBtn)  closeBtn.addEventListener('click', closePanel);
    if (overlay)   overlay.addEventListener('click', closePanel);

    /* Accordion inside mobile panel */
    var catBtns = document.querySelectorAll('.cn-mp-cat-btn');
    catBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat    = btn.closest('.cn-mp-cat');
        var isOpen = cat.classList.contains('open');
        /* Close all others */
        document.querySelectorAll('.cn-mp-cat').forEach(function (c) {
          c.classList.remove('open');
          c.querySelector('.cn-mp-cat-btn').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          cat.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ── Dark Mode ───────────────────────────────────────────── */
  function initDarkMode() {
    try {
      if (localStorage.getItem('cn_dark') === '1') {
        document.body.classList.add('dark');
        updateDarkBtns(true);
      }
    } catch (e) {}

    document.querySelectorAll('.cn-dark-btn').forEach(function (btn) {
      btn.addEventListener('click', toggleDark);
    });
  }

  function toggleDark() {
    var isDark = document.body.classList.toggle('dark');
    try { localStorage.setItem('cn_dark', isDark ? '1' : '0'); } catch (e) {}
    updateDarkBtns(isDark);
    document.dispatchEvent(new CustomEvent('calcnova:darkchanged', { detail: { dark: isDark } }));
  }

  function updateDarkBtns(isDark) {
    document.querySelectorAll('.cn-dark-btn').forEach(function (btn) {
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  /* ── Global shims (backwards-compat) ─────────────────────── */
  window.toggleDark = toggleDark;

  /* Legacy nav menu shims — no-ops in v2 (menu no longer exists) */
  window.toggleMenu = function () {};
  window.closeMenu  = function () {};

  /* ── Run ──────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
