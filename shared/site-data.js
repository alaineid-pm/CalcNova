/* ============================================================
   CalcNova · Site Data — Single Source of Truth
   ============================================================
   Add new tools / articles here and they automatically update:
     • Nav dropdowns        • Footer links
     • Search index         • Related tools strip
     • Breadcrumbs          • Homepage tool directory
     • Badges & tooltips    • JSON-LD breadcrumb schema

   To add a tool:
     1. Add an entry to CALCNOVA_TOOLS below
     2. Done — nav, footer, search, and related tools update automatically

   To add an article:
     1. Add an entry to CALCNOVA_ARTICLES below
     2. Done — Guides dropdown and footer update automatically
   ============================================================ */

/* ── Site-level config ─────────────────────────────────────── */
var CALCNOVA_CONFIG = {
  siteUrl:  'https://calcnova.co',
  githubUrl: 'https://github.com/calcnova',
  kofiUrl:  'https://ko-fi.com/calcnova'
};

/* ── Categories ─────────────────────────────────────────────── */
var CALCNOVA_CATEGORIES = [
  { id: 'finance',      name: 'Finance',      emoji: '💰', cssClass: 'finance'      },
  { id: 'productivity', name: 'Productivity',  emoji: '⏱️', cssClass: 'productivity' },
  { id: 'utility',      name: 'Utility',       emoji: '🔧', cssClass: 'utility'      },
  { id: 'guides',       name: 'Guides',        emoji: '📝', cssClass: 'articles'     }
];

/* ── Tools ──────────────────────────────────────────────────── */
/*
   badge: 'popular' | 'new' | null
   related: array of tool IDs (3-4 max, shown on that tool's page)
*/
var CALCNOVA_TOOLS = [

  /* ── Finance ─────────────────────────────────────────── */
  {
    id:          'compound-interest',
    name:        'Compound Interest Calculator',
    emoji:       '📈',
    category:    'finance',
    url:         'compound-interest-calculator.html',
    description: 'See how your money grows over time with compounding, contributions, and withdrawals.',
    related:     ['savings-goal', 'fire-calculator', 'coast-fire'],
    badge:       'popular'
  },
  {
    id:          'coast-fire',
    name:        'Coast FIRE Calculator',
    emoji:       '🏖️',
    category:    'finance',
    url:         'coast-fire-calculator.html',
    description: 'Find your Coast FI number — how much to save today so your portfolio grows on its own.',
    related:     ['fire-calculator', 'compound-interest', 'savings-goal'],
    badge:       null
  },
  {
    id:          'mortgage',
    name:        'Mortgage Calculator',
    emoji:       '🏠',
    category:    'finance',
    url:         'mortgage-calculator.html',
    description: 'Calculate monthly payments, total interest, and full amortization schedule.',
    related:     ['debt-payoff', 'savings-goal', 'compound-interest'],
    badge:       null
  },
  {
    id:          'rent-vs-buy',
    name:        'Rent vs. Buy',
    emoji:       '🏘️',
    category:    'finance',
    url:         'rent-vs-buy.html',
    description: 'Compare the true long-term cost of renting versus buying a home.',
    related:     ['mortgage', 'savings-goal', 'compound-interest'],
    badge:       null
  },
  {
    id:          'savings-goal',
    name:        'Savings Goal Calculator',
    emoji:       '🎯',
    category:    'finance',
    url:         'savings-goal.html',
    description: 'Set a savings target and find out exactly how much to save each month.',
    related:     ['compound-interest', 'emergency-fund', 'net-worth-tracker'],
    badge:       null
  },
  {
    id:          'debt-payoff',
    name:        'Debt Payoff Planner',
    emoji:       '💳',
    category:    'finance',
    url:         'debt-payoff.html',
    description: 'Snowball or avalanche — see the fastest path to becoming completely debt-free.',
    related:     ['mortgage', 'savings-goal', 'emergency-fund'],
    badge:       null
  },
  {
    id:          'emergency-fund',
    name:        'Emergency Fund Calculator',
    emoji:       '🛟',
    category:    'finance',
    url:         'emergency-fund.html',
    description: 'Calculate your ideal emergency fund size based on expenses and risk tolerance.',
    related:     ['savings-goal', 'debt-payoff', 'net-worth-tracker'],
    badge:       null
  },
  {
    id:          'fire-calculator',
    name:        'FIRE Calculator',
    emoji:       '🔥',
    category:    'finance',
    url:         'fire-calculator.html',
    description: 'Model your path to financial independence and early retirement.',
    related:     ['coast-fire', 'compound-interest', 'savings-goal'],
    badge:       'popular'
  },
  {
    id:          'net-worth-tracker',
    name:        'Net Worth Tracker',
    emoji:       '📊',
    category:    'finance',
    url:         'net-worth-tracker.html',
    description: 'Track assets and liabilities to see your total net worth at a glance.',
    related:     ['savings-goal', 'fire-calculator', 'emergency-fund'],
    badge:       null
  },

  /* ── Productivity ────────────────────────────────────── */
  {
    id:          'time-converter',
    name:        'Time Converter',
    emoji:       '🌍',
    category:    'productivity',
    url:         'TimeConvertor.html',
    description: 'Convert times between any time zones. Find meeting overlaps for remote teams.',
    related:     ['world-clock', 'date-duration', 'pomodoro'],
    badge:       null
  },
  {
    id:          'pomodoro',
    name:        'Pomodoro Timer',
    emoji:       '🍅',
    category:    'productivity',
    url:         'pomodoro.html',
    description: 'Stay focused with 25-minute work sessions and built-in break reminders.',
    related:     ['time-converter', 'date-duration', 'word-counter'],
    badge:       null
  },
  {
    id:          'world-clock',
    name:        'World Clock',
    emoji:       '🕐',
    category:    'productivity',
    url:         'world-clock.html',
    description: 'See the current time in multiple cities and time zones simultaneously.',
    related:     ['time-converter', 'date-duration', 'age-calculator'],
    badge:       null
  },
  {
    id:          'date-duration',
    name:        'Date Duration',
    emoji:       '📅',
    category:    'productivity',
    url:         'date-duration.html',
    description: 'Calculate the exact number of days, weeks, or months between any two dates.',
    related:     ['age-calculator', 'world-clock', 'time-converter'],
    badge:       null
  },
  {
    id:          'age-calculator',
    name:        'Age Calculator',
    emoji:       '🎂',
    category:    'productivity',
    url:         'age-calculator.html',
    description: 'Find your exact age in years, months, and days — plus days until your next birthday.',
    related:     ['date-duration', 'world-clock', 'percentage-calculator'],
    badge:       null
  },

  /* ── Utility ─────────────────────────────────────────── */
  {
    id:          'unit-converter',
    name:        'Unit Converter',
    emoji:       '📏',
    category:    'utility',
    url:         'unit-converter.html',
    description: 'Convert between hundreds of units: length, weight, temperature, volume, and more.',
    related:     ['percentage-calculator', 'word-counter', 'random-number'],
    badge:       'popular'
  },
  {
    id:          'percentage-calculator',
    name:        'Percentage Calculator',
    emoji:       '🔢',
    category:    'utility',
    url:         'percentage-calculator.html',
    description: 'Quickly calculate percentages, percentage change, and what percent of a total.',
    related:     ['unit-converter', 'word-counter', 'random-number'],
    badge:       null
  },
  {
    id:          'random-number',
    name:        'Random Number Generator',
    emoji:       '🎲',
    category:    'utility',
    url:         'random-number.html',
    description: 'Generate random numbers, pick random items from a list, or create unique IDs.',
    related:     ['word-counter', 'percentage-calculator', 'unit-converter'],
    badge:       null
  },
  {
    id:          'word-counter',
    name:        'Word Counter',
    emoji:       '✍️',
    category:    'utility',
    url:         'word-counter.html',
    description: 'Count words, characters, sentences, and reading time as you type.',
    related:     ['random-number', 'percentage-calculator', 'unit-converter'],
    badge:       null
  }

];

/* ── Articles ───────────────────────────────────────────────── */
/*
   datePublished: ISO date string — used to sort articles (newest first)
   subcategory:   groups articles in the Guides dropdown when count > 8
*/
var CALCNOVA_ARTICLES = [
  {
    id:            'article-compound-interest',
    name:          'How Compound Interest Actually Works',
    emoji:         '📈',
    url:           'article-compound-interest.html',
    description:   "The beginner's guide to understanding how your money grows exponentially over time.",
    readTime:      '5 min',
    category:      'Finance',
    subcategory:   'Finance',
    relatedTool:   'compound-interest',
    datePublished: '2024-03-01'
  },
  {
    id:            'article-coast-fire',
    name:          'What Is Coast FIRE?',
    emoji:         '🏖️',
    url:           'article-coast-fire.html',
    description:   'Coast FIRE means saving enough early so your portfolio grows on its own to retirement.',
    readTime:      '7 min',
    category:      'Finance',
    subcategory:   'FIRE Movement',
    relatedTool:   'coast-fire',
    datePublished: '2024-03-05'
  },
  {
    id:            'article-debt-snowball-vs-avalanche',
    name:          'Debt Snowball vs. Avalanche',
    emoji:         '💳',
    url:           'article-debt-snowball-vs-avalanche.html',
    description:   'Two popular debt payoff strategies compared — one saves more, the other keeps you motivated.',
    readTime:      '6 min',
    category:      'Finance',
    subcategory:   'Debt',
    relatedTool:   'debt-payoff',
    datePublished: '2024-03-10'
  },
  {
    id:            'article-emergency-fund',
    name:          'How Much Emergency Fund Do I Need?',
    emoji:         '🛟',
    url:           'article-emergency-fund.html',
    description:   'Practical guidance on building your safety net and where to keep your emergency fund.',
    readTime:      '5 min',
    category:      'Finance',
    subcategory:   'Finance',
    relatedTool:   'emergency-fund',
    datePublished: '2024-03-15'
  },
  {
    id:            'article-time-zones-remote-teams',
    name:          'Time Zones for Remote Teams',
    emoji:         '🌍',
    url:           'article-time-zones-remote-teams.html',
    description:   'Tips for scheduling meetings, finding overlap hours, and communicating across time zones.',
    readTime:      '5 min',
    category:      'Productivity',
    subcategory:   'Productivity',
    relatedTool:   'time-converter',
    datePublished: '2024-03-20'
  },
  {
    id:            'article-pomodoro-technique',
    name:          'The Pomodoro Technique Guide',
    emoji:         '🍅',
    url:           'article-pomodoro-technique.html',
    description:   'Learn the 25-minute focus method that boosts productivity and reduces burnout.',
    readTime:      '5 min',
    category:      'Productivity',
    subcategory:   'Productivity',
    relatedTool:   'pomodoro',
    datePublished: '2024-03-25'
  }
];
