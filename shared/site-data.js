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
  { id: 'finance',      name: 'Finance',          emoji: '💰', cssClass: 'finance'      },
  { id: 'health',       name: 'Health & Fitness',  emoji: '💪', cssClass: 'health'       },
  { id: 'math',         name: 'Math',              emoji: '🧮', cssClass: 'math'         },
  { id: 'productivity', name: 'Productivity',      emoji: '⏱️', cssClass: 'productivity' },
  { id: 'utility',      name: 'Utility',           emoji: '🔧', cssClass: 'utility'      },
  { id: 'guides',       name: 'Guides',            emoji: '📝', cssClass: 'articles'     },
  { id: 'scuba',        name: 'Scuba Diving',      emoji: '🤿', cssClass: 'scuba',       specialty: true, landingUrl: 'scuba-diving-calculators.html' }
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
  {
    id:          'salary-calculator',
    name:        'Salary Converter',
    emoji:       '💵',
    category:    'finance',
    url:         'salary-calculator.html',
    description: 'Convert salary between hourly, daily, weekly, monthly, and annual rates.',
    related:     ['compound-interest', 'savings-goal', 'fire-calculator'],
    badge:       'new'
  },
  {
    id:          'inflation-calculator',
    name:        'Inflation Calculator',
    emoji:       '📉',
    category:    'finance',
    url:         'inflation-calculator.html',
    description: 'See how inflation erodes purchasing power and what money is worth over time.',
    related:     ['compound-interest', 'fire-calculator', 'savings-goal'],
    badge:       'new'
  },

  /* ── Health & Fitness ─────────────────────────────── */
  {
    id:          'bmi-calculator',
    name:        'BMI Calculator',
    emoji:       '⚖️',
    category:    'health',
    url:         'bmi-calculator.html',
    description: 'Calculate your Body Mass Index and understand what your result means.',
    related:     ['calorie-calculator', 'ideal-weight-calculator', 'body-fat-calculator'],
    badge:       'new'
  },
  {
    id:          'calorie-calculator',
    name:        'Calorie / TDEE Calculator',
    emoji:       '🔥',
    category:    'health',
    url:         'calorie-calculator.html',
    description: 'Find your Total Daily Energy Expenditure to manage weight and nutrition.',
    related:     ['macro-calculator', 'bmi-calculator', 'ideal-weight-calculator'],
    badge:       'new'
  },
  {
    id:          'macro-calculator',
    name:        'Macro Calculator',
    emoji:       '🥗',
    category:    'health',
    url:         'macro-calculator.html',
    description: 'Calculate your ideal macronutrient split for your fitness and diet goals.',
    related:     ['calorie-calculator', 'bmi-calculator', 'body-fat-calculator'],
    badge:       'new'
  },
  {
    id:          'body-fat-calculator',
    name:        'Body Fat Calculator',
    emoji:       '📐',
    category:    'health',
    url:         'body-fat-calculator.html',
    description: 'Estimate your body fat percentage using body measurements.',
    related:     ['bmi-calculator', 'ideal-weight-calculator', 'calorie-calculator'],
    badge:       'new'
  },
  {
    id:          'ideal-weight-calculator',
    name:        'Ideal Weight Calculator',
    emoji:       '🎯',
    category:    'health',
    url:         'ideal-weight-calculator.html',
    description: 'Find your ideal weight range based on height, age, and body frame.',
    related:     ['bmi-calculator', 'body-fat-calculator', 'calorie-calculator'],
    badge:       'new'
  },
  {
    id:          'water-intake-calculator',
    name:        'Water Intake Calculator',
    emoji:       '💧',
    category:    'health',
    url:         'water-intake-calculator.html',
    description: 'Calculate your recommended daily water intake based on weight and activity.',
    related:     ['calorie-calculator', 'macro-calculator', 'bmi-calculator'],
    badge:       'new'
  },

  /* ── Math ────────────────────────────────────────── */
  {
    id:          'tip-calculator',
    name:        'Tip Calculator',
    emoji:       '🧾',
    category:    'math',
    url:         'tip-calculator.html',
    description: 'Calculate tips and split the bill evenly between any number of people.',
    related:     ['percentage-calculator', 'discount-calculator', 'gpa-calculator'],
    badge:       'new'
  },
  {
    id:          'gpa-calculator',
    name:        'GPA Calculator',
    emoji:       '🎓',
    category:    'math',
    url:         'gpa-calculator.html',
    description: 'Calculate your GPA from grades and credit hours for any grading scale.',
    related:     ['percentage-calculator', 'tip-calculator', 'discount-calculator'],
    badge:       'new'
  },
  {
    id:          'discount-calculator',
    name:        'Discount Calculator',
    emoji:       '🏷️',
    category:    'math',
    url:         'discount-calculator.html',
    description: 'Find the sale price, discount amount, or original price from any two values.',
    related:     ['percentage-calculator', 'tip-calculator', 'unit-converter'],
    badge:       'new'
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
  },

  /* ── Scuba Diving ─────────────────────────────────── */
  {
    id:          'nitrox-calculator',
    name:        'Nitrox / MOD Calculator',
    emoji:       '🫧',
    category:    'scuba',
    url:         'nitrox-calculator.html',
    description: 'Calculate Maximum Operating Depth, PO₂ at depth, Best Mix, and Equivalent Air Depth for nitrox diving.',
    related:     ['gas-blending', 'trimix-calculator', 'sac-rate'],
    badge:       'new'
  },
  {
    id:          'gas-blending',
    name:        'Gas Blending Calculator',
    emoji:       '⚗️',
    category:    'scuba',
    url:         'gas-blending-calculator.html',
    description: 'Calculate how much O₂ and helium to add when blending nitrox or trimix. Supports fill from empty and top-up.',
    related:     ['nitrox-calculator', 'trimix-calculator', 'tank-duration'],
    badge:       'new'
  },
  {
    id:          'dive-weight',
    name:        'Dive Weight Calculator',
    emoji:       '⚖️',
    category:    'scuba',
    url:         'dive-weight-calculator.html',
    description: 'Estimate how much lead weight you need based on your body weight, suit, tank, and water type.',
    related:     ['sac-rate', 'tank-duration', 'nitrox-calculator'],
    badge:       'new'
  },
  {
    id:          'sac-rate',
    name:        'SAC / RMV Calculator',
    emoji:       '💨',
    category:    'scuba',
    url:         'sac-rate-calculator.html',
    description: 'Calculate your Surface Air Consumption and Respiratory Minute Volume from dive log data.',
    related:     ['tank-duration', 'dive-weight', 'nitrox-calculator'],
    badge:       'new'
  },
  {
    id:          'tank-duration',
    name:        'Tank Duration Calculator',
    emoji:       '⏱️',
    category:    'scuba',
    url:         'tank-duration-calculator.html',
    description: 'Estimate how long your tank will last at a given depth based on your breathing rate.',
    related:     ['sac-rate', 'gas-blending', 'nitrox-calculator'],
    badge:       'new'
  },
  {
    id:          'trimix-calculator',
    name:        'Trimix / Narcosis Calculator',
    emoji:       '🧪',
    category:    'scuba',
    url:         'trimix-calculator.html',
    description: 'Calculate Equivalent Narcotic Depth for trimix blends and find the best mix for your target depth.',
    related:     ['nitrox-calculator', 'gas-blending', 'tank-duration'],
    badge:       'new'
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
  },
  {
    id:            'article-nitrox',
    name:          'Nitrox Diving Explained',
    emoji:         '🫧',
    url:           'article-nitrox.html',
    description:   'What nitrox is, how it works, and why enriched air makes your dives better.',
    readTime:      '7 min',
    category:      'Scuba Diving',
    subcategory:   'Scuba Diving',
    relatedTool:   'nitrox-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-sac-rmv',
    name:          'SAC and RMV Explained',
    emoji:         '💨',
    url:           'article-sac-rmv.html',
    description:   'How to calculate your air consumption rate and use it for better gas planning.',
    readTime:      '6 min',
    category:      'Scuba Diving',
    subcategory:   'Scuba Diving',
    relatedTool:   'sac-rate',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-weighting',
    name:          'Scuba Weighting Guide',
    emoji:         '⚖️',
    url:           'article-weighting.html',
    description:   'How to get your buoyancy right — the buoyancy check procedure, suit adjustments, and common mistakes.',
    readTime:      '5 min',
    category:      'Scuba Diving',
    subcategory:   'Scuba Diving',
    relatedTool:   'dive-weight',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-trimix',
    name:          'Introduction to Trimix',
    emoji:         '🧪',
    url:           'article-trimix.html',
    description:   'Why helium matters for deep diving, how narcosis works, and when you need trimix.',
    readTime:      '8 min',
    category:      'Scuba Diving',
    subcategory:   'Scuba Diving',
    relatedTool:   'trimix-calculator',
    datePublished: '2026-03-14'
  }
];
