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
  { id: 'datetime',     name: 'Date & Time',       emoji: '📅', cssClass: 'datetime'     },
  { id: 'tools',        name: 'Tools',             emoji: '🔧', cssClass: 'tools'        },
  { id: 'education',    name: 'Education',         emoji: '🎓', cssClass: 'education'    },
  { id: 'guides',       name: 'Guides',            emoji: '📝', cssClass: 'articles'     },
  { id: 'scuba',        name: 'Scuba Diving',      emoji: '🤿', cssClass: 'scuba',       specialty: true, landingUrl: 'scuba-diving-calculators.html' }
];

/* ── Tools ──────────────────────────────────────────────────── */
/*
   badge: 'popular' | 'new' | null
   related: array of tool IDs (3-4 max, shown on that tool's page)
*/
var CALCNOVA_TOOLS = [

  /* ── Finance ───────────────────────────────────────────
     Investing / Growth → FIRE → Savings → Housing / Loans
     → Debt → Income / Conversion                        */
  {
    id:          'compound-interest',
    name:        'Compound Interest Calculator',
    emoji:       '📈',
    category:    'finance',
    url:         'compound-interest-calculator.html',
    description: 'See how your money grows over time with compounding, contributions, and withdrawals.',
    related:     ['investment-return', 'fire-calculator', 'savings-goal'],
    badge:       'popular'
  },
  {
    id:          'investment-return',
    name:        'Investment Return Calculator',
    emoji:       '📊',
    category:    'finance',
    url:         'investment-return-calculator.html',
    description: 'Project your investment growth with contributions, fees, and inflation adjustment.',
    related:     ['compound-interest', 'fire-calculator', 'inflation-calculator'],
    badge:       'new'
  },
  {
    id:          'inflation-calculator',
    name:        'Inflation Calculator',
    emoji:       '📉',
    category:    'finance',
    url:         'inflation-calculator.html',
    description: 'See how inflation erodes purchasing power and what money is worth over time.',
    related:     ['compound-interest', 'investment-return', 'savings-goal'],
    badge:       'new'
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
    id:          'coast-fire',
    name:        'Coast FIRE Calculator',
    emoji:       '🏖️',
    category:    'finance',
    url:         'coast-fire-calculator.html',
    description: 'Find your Coast FI number — how much to save today so your portfolio grows on its own.',
    related:     ['fire-calculator', 'compound-interest', 'investment-return'],
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
    id:          'emergency-fund',
    name:        'Emergency Fund Calculator',
    emoji:       '🛟',
    category:    'finance',
    url:         'emergency-fund.html',
    description: 'Calculate your ideal emergency fund size based on expenses and risk tolerance.',
    related:     ['savings-goal', 'net-worth-tracker', 'debt-payoff'],
    badge:       null
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
    id:          'mortgage',
    name:        'Mortgage Calculator',
    emoji:       '🏠',
    category:    'finance',
    url:         'mortgage-calculator.html',
    description: 'Calculate monthly payments, total interest, and full amortization schedule.',
    related:     ['rent-vs-buy', 'auto-loan', 'debt-payoff'],
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
    id:          'auto-loan',
    name:        'Auto Loan Calculator',
    emoji:       '🚗',
    category:    'finance',
    url:         'auto-loan-calculator.html',
    description: 'Calculate monthly car payments, total interest, and see a full amortization schedule.',
    related:     ['mortgage', 'debt-payoff', 'compound-interest'],
    badge:       'new'
  },
  {
    id:          'debt-payoff',
    name:        'Debt Payoff Planner',
    emoji:       '💳',
    category:    'finance',
    url:         'debt-payoff.html',
    description: 'Snowball or avalanche — see the fastest path to becoming completely debt-free.',
    related:     ['mortgage', 'auto-loan', 'emergency-fund'],
    badge:       null
  },
  {
    id:          'salary-calculator',
    name:        'Salary Converter',
    emoji:       '💵',
    category:    'finance',
    url:         'salary-calculator.html',
    description: 'Convert salary between hourly, daily, weekly, monthly, and annual rates.',
    related:     ['currency-converter', 'compound-interest', 'fire-calculator'],
    badge:       'new'
  },
  {
    id:          'currency-converter',
    name:        'Currency Converter',
    emoji:       '💱',
    category:    'finance',
    url:         'currency-converter.html',
    description: 'Convert between 30+ currencies with live exchange rates from the European Central Bank.',
    related:     ['salary-calculator', 'inflation-calculator', 'unit-converter'],
    badge:       'new'
  },

  /* ── Health & Fitness ──────────────────────────────────
     Body metrics → Nutrition → Fitness → Wellness       */
  {
    id:          'bmi-calculator',
    name:        'BMI Calculator',
    emoji:       '⚖️',
    category:    'health',
    url:         'bmi-calculator.html',
    description: 'Calculate your Body Mass Index and understand what your result means.',
    related:     ['body-fat-calculator', 'ideal-weight-calculator', 'calorie-calculator'],
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
    id:          'calorie-calculator',
    name:        'Calorie / TDEE Calculator',
    emoji:       '🔥',
    category:    'health',
    url:         'calorie-calculator.html',
    description: 'Find your Total Daily Energy Expenditure to manage weight and nutrition.',
    related:     ['macro-calculator', 'bmi-calculator', 'water-intake-calculator'],
    badge:       'new'
  },
  {
    id:          'macro-calculator',
    name:        'Macro Calculator',
    emoji:       '🥗',
    category:    'health',
    url:         'macro-calculator.html',
    description: 'Calculate your ideal macronutrient split for your fitness and diet goals.',
    related:     ['calorie-calculator', 'body-fat-calculator', 'water-intake-calculator'],
    badge:       'new'
  },
  {
    id:          'water-intake-calculator',
    name:        'Water Intake Calculator',
    emoji:       '💧',
    category:    'health',
    url:         'water-intake-calculator.html',
    description: 'Calculate your recommended daily water intake based on weight and activity.',
    related:     ['calorie-calculator', 'macro-calculator', 'pace-calculator'],
    badge:       'new'
  },
  {
    id:          'pace-calculator',
    name:        'Pace Calculator',
    emoji:       '🏃',
    category:    'health',
    url:         'pace-calculator.html',
    description: 'Calculate running pace, finish time, or distance for any race from 5K to marathon.',
    related:     ['calorie-calculator', 'water-intake-calculator', 'bmi-calculator'],
    badge:       'new'
  },
  {
    id:          'sleep-calculator',
    name:        'Sleep Calculator',
    emoji:       '😴',
    category:    'health',
    url:         'sleep-calculator.html',
    description: 'Find the best bedtime or wake-up time based on 90-minute sleep cycles.',
    related:     ['water-intake-calculator', 'calorie-calculator', 'due-date'],
    badge:       'new'
  },
  {
    id:          'due-date',
    name:        'Pregnancy Due Date Calculator',
    emoji:       '🤰',
    category:    'health',
    url:         'due-date-calculator.html',
    description: 'Estimate your due date, current week, and key pregnancy milestones.',
    related:     ['age-calculator', 'sleep-calculator', 'bmi-calculator'],
    badge:       'new'
  },

  /* ── Date & Time ───────────────────────────────────────
     Time zones → Date math                              */
  {
    id:          'world-clock',
    name:        'World Clock',
    emoji:       '🕐',
    category:    'datetime',
    url:         'world-clock.html',
    description: 'See the current time in multiple cities and time zones simultaneously.',
    related:     ['time-converter', 'meeting-planner', 'date-duration'],
    badge:       null
  },
  {
    id:          'time-converter',
    name:        'Time Converter',
    emoji:       '🌍',
    category:    'datetime',
    url:         'timeconvertor.html',
    description: 'Convert times between any time zones. Find meeting overlaps for remote teams.',
    related:     ['world-clock', 'meeting-planner', 'date-duration'],
    badge:       null
  },
  {
    id:          'meeting-planner',
    name:        'Meeting Planner',
    emoji:       '🤝',
    category:    'datetime',
    url:         'meeting-planner.html',
    description: 'Find the best meeting times across multiple time zones for remote teams.',
    related:     ['time-converter', 'world-clock', 'date-duration'],
    badge:       'new'
  },
  {
    id:          'date-duration',
    name:        'Date Duration',
    emoji:       '📅',
    category:    'datetime',
    url:         'date-duration.html',
    description: 'Calculate the exact number of days, weeks, or months between any two dates.',
    related:     ['age-calculator', 'world-clock', 'time-converter'],
    badge:       null
  },
  {
    id:          'age-calculator',
    name:        'Age Calculator',
    emoji:       '🎂',
    category:    'datetime',
    url:         'age-calculator.html',
    description: 'Find your exact age in years, months, and days — plus days until your next birthday.',
    related:     ['date-duration', 'due-date', 'world-clock'],
    badge:       null
  },

  /* ── Tools ─────────────────────────────────────────────
     Work → Converters → Shopping → Generators           */
  {
    id:          'pomodoro',
    name:        'Pomodoro Timer',
    emoji:       '🍅',
    category:    'tools',
    url:         'pomodoro.html',
    description: 'Stay focused with 25-minute work sessions and built-in break reminders.',
    related:     ['study-timer', 'word-counter', 'meeting-planner'],
    badge:       null
  },
  {
    id:          'invoice-generator',
    name:        'Invoice Generator',
    emoji:       '🧾',
    category:    'tools',
    url:         'invoice-generator.html',
    description: 'Create professional invoices and download as PDF. Free, no sign-up.',
    related:     ['salary-calculator', 'percentage-calculator', 'word-counter'],
    badge:       'new'
  },
  {
    id:          'word-counter',
    name:        'Word Counter',
    emoji:       '✍️',
    category:    'tools',
    url:         'word-counter.html',
    description: 'Count words, characters, sentences, and reading time as you type.',
    related:     ['pomodoro', 'percentage-calculator', 'unit-converter'],
    badge:       null
  },
  {
    id:          'unit-converter',
    name:        'Unit Converter',
    emoji:       '📏',
    category:    'tools',
    url:         'unit-converter.html',
    description: 'Convert between hundreds of units: length, weight, temperature, volume, and more.',
    related:     ['percentage-calculator', 'currency-converter', 'tip-calculator'],
    badge:       'popular'
  },
  {
    id:          'percentage-calculator',
    name:        'Percentage Calculator',
    emoji:       '🔢',
    category:    'tools',
    url:         'percentage-calculator.html',
    description: 'Quickly calculate percentages, percentage change, and what percent of a total.',
    related:     ['unit-converter', 'discount-calculator', 'tip-calculator'],
    badge:       null
  },
  {
    id:          'tip-calculator',
    name:        'Tip Calculator',
    emoji:       '🧾',
    category:    'tools',
    url:         'tip-calculator.html',
    description: 'Calculate tips and split the bill evenly between any number of people.',
    related:     ['discount-calculator', 'percentage-calculator', 'unit-converter'],
    badge:       'new'
  },
  {
    id:          'discount-calculator',
    name:        'Discount Calculator',
    emoji:       '🏷️',
    category:    'tools',
    url:         'discount-calculator.html',
    description: 'Find the sale price, discount amount, or original price from any two values.',
    related:     ['tip-calculator', 'percentage-calculator', 'unit-converter'],
    badge:       'new'
  },
  {
    id:          'password-generator',
    name:        'Password Generator',
    emoji:       '🔐',
    category:    'tools',
    url:         'password-generator.html',
    description: 'Generate strong, random passwords with customizable length and character sets.',
    related:     ['qr-code-generator', 'random-number', 'word-counter'],
    badge:       'new'
  },
  {
    id:          'qr-code-generator',
    name:        'QR Code Generator',
    emoji:       '📲',
    category:    'tools',
    url:         'qr-code-generator.html',
    description: 'Create QR codes for URLs, text, WiFi, email, and vCards. Download as PNG or SVG.',
    related:     ['password-generator', 'random-number', 'word-counter'],
    badge:       'new'
  },
  {
    id:          'random-number',
    name:        'Random Number Generator',
    emoji:       '🎲',
    category:    'tools',
    url:         'random-number.html',
    description: 'Generate random numbers, pick random items from a list, or create unique IDs.',
    related:     ['password-generator', 'qr-code-generator', 'percentage-calculator'],
    badge:       null
  },

  /* ── Education ─────────────────────────────────────────
     Grades → Study aids                                 */
  {
    id:          'gpa-calculator',
    name:        'GPA Calculator',
    emoji:       '🎓',
    category:    'education',
    url:         'gpa-calculator.html',
    description: 'Calculate your GPA from grades and credit hours for any grading scale.',
    related:     ['grade-calculator', 'study-timer', 'flashcard-maker'],
    badge:       'new'
  },
  {
    id:          'grade-calculator',
    name:        'Grade Calculator',
    emoji:       '📝',
    category:    'education',
    url:         'grade-calculator.html',
    description: 'Find out what grade you need on your final exam to hit your target course grade.',
    related:     ['gpa-calculator', 'study-timer', 'flashcard-maker'],
    badge:       'new'
  },
  {
    id:          'study-timer',
    name:        'Study Timer',
    emoji:       '📚',
    category:    'education',
    url:         'study-timer.html',
    description: 'Focused study sessions with subject tagging, daily tracking, and break reminders.',
    related:     ['pomodoro', 'flashcard-maker', 'grade-calculator'],
    badge:       'new'
  },
  {
    id:          'flashcard-maker',
    name:        'Flashcard Maker',
    emoji:       '🗂️',
    category:    'education',
    url:         'flashcard-maker.html',
    description: 'Create, study, and save flashcard decks right in your browser. No account needed.',
    related:     ['study-timer', 'gpa-calculator', 'grade-calculator'],
    badge:       'new'
  },

  /* ── Scuba Diving ─────────────────────────────────── */
  {
    id:          'nitrox-calculator',
    name:        'Nitrox / MOD Calculator',
    emoji:       '🫧',
    category:    'scuba',
    url:         'nitrox-calculator.html',
    description: 'Calculate Maximum Operating Depth and PO₂ at any depth for nitrox diving. Essential for enriched air divers.',
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
    id:            'article-rent-vs-buy',
    name:          'Rent vs. Buy: How to Decide',
    emoji:         '🏠',
    url:           'article-rent-vs-buy.html',
    description:   'A practical framework for the biggest financial decision most people face.',
    readTime:      '7 min',
    category:      'Finance',
    subcategory:   'Housing',
    relatedTool:   'rent-vs-buy',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-auto-loan',
    name:          'How to Pay Off Your Car Loan Faster',
    emoji:         '🚗',
    url:           'article-auto-loan.html',
    description:   'Strategies to reduce interest and shorten your auto loan payoff timeline.',
    readTime:      '5 min',
    category:      'Finance',
    subcategory:   'Debt',
    relatedTool:   'auto-loan',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-rule-of-72',
    name:          'The Rule of 72: Estimate Doubling Time',
    emoji:         '📐',
    url:           'article-rule-of-72.html',
    description:   'The simplest shortcut for estimating how long it takes your money to double.',
    readTime:      '5 min',
    category:      'Finance',
    subcategory:   'Investing',
    relatedTool:   'compound-interest',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-inflation',
    name:          'How Inflation Erodes Your Savings',
    emoji:         '📉',
    url:           'article-inflation.html',
    description:   'Why your money loses value over time and what you can do to protect it.',
    readTime:      '6 min',
    category:      'Finance',
    subcategory:   'Investing',
    relatedTool:   'inflation-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-bmi',
    name:          'BMI Explained: What It Tells You (And Doesn\'t)',
    emoji:         '⚖️',
    url:           'article-bmi.html',
    description:   'What BMI actually measures, its limitations, and when it\'s still useful.',
    readTime:      '5 min',
    category:      'Health',
    subcategory:   'Body Composition',
    relatedTool:   'bmi-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-calories',
    name:          'How to Calculate Calories for Weight Loss',
    emoji:         '🔥',
    url:           'article-calories.html',
    description:   'Understand TDEE, set a sustainable deficit, and avoid crash dieting.',
    readTime:      '7 min',
    category:      'Health',
    subcategory:   'Nutrition',
    relatedTool:   'calorie-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-macros',
    name:          'Understanding Macros: Protein, Carbs & Fat',
    emoji:         '🥗',
    url:           'article-macros.html',
    description:   'What each macronutrient does and how to set the right ratio for your goals.',
    readTime:      '6 min',
    category:      'Health',
    subcategory:   'Nutrition',
    relatedTool:   'macro-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-meetings-timezones',
    name:          'Running Meetings Across Time Zones',
    emoji:         '🌍',
    url:           'article-meetings-timezones.html',
    description:   'Practical strategies for scheduling when your team spans the globe.',
    readTime:      '5 min',
    category:      'Productivity',
    subcategory:   'Remote Work',
    relatedTool:   'meeting-planner',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-invoicing',
    name:          'Freelancer\'s Guide to Invoicing',
    emoji:         '🧾',
    url:           'article-invoicing.html',
    description:   'Invoice essentials, payment terms, and how to get paid faster.',
    readTime:      '6 min',
    category:      'Productivity',
    subcategory:   'Freelancing',
    relatedTool:   'invoice-generator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-study-techniques',
    name:          'Science-Backed Study Techniques',
    emoji:         '🧠',
    url:           'article-study-techniques.html',
    description:   'Spaced repetition, active recall, and other proven methods to study smarter.',
    readTime:      '7 min',
    category:      'Education',
    subcategory:   'Study Skills',
    relatedTool:   'study-timer',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-raise-gpa',
    name:          'How to Raise Your GPA: A Practical Plan',
    emoji:         '📈',
    url:           'article-raise-gpa.html',
    description:   'Calculate what you need and build a semester strategy to hit your target GPA.',
    readTime:      '5 min',
    category:      'Education',
    subcategory:   'Academics',
    relatedTool:   'gpa-calculator',
    datePublished: '2026-03-14'
  },
  {
    id:            'article-passwords',
    name:          'How to Create a Strong Password',
    emoji:         '🔐',
    url:           'article-passwords.html',
    description:   'Password entropy, passphrases, and why password managers matter.',
    readTime:      '5 min',
    category:      'Security',
    subcategory:   'Online Safety',
    relatedTool:   'password-generator',
    datePublished: '2026-03-14'
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
  },
  {
    id:            'article-mortgage',
    name:          'How Mortgage Interest Works',
    emoji:         '🏠',
    url:           'article-mortgage.html',
    description:   'Understand amortization, why you pay mostly interest at first, fixed vs. ARM loans, and how to pay off your home faster.',
    readTime:      '7 min',
    category:      'Finance',
    subcategory:   'Finance',
    relatedTool:   'mortgage',
    datePublished: '2026-03-21'
  },
  {
    id:            'article-sleep',
    name:          'How Much Sleep Do You Actually Need?',
    emoji:         '😴',
    url:           'article-sleep.html',
    description:   'A science-backed guide to sleep cycles, how much sleep you need by age, sleep debt, and the best habits for deeper rest.',
    readTime:      '6 min',
    category:      'Health',
    subcategory:   'Health & Fitness',
    relatedTool:   'sleep-calculator',
    datePublished: '2026-03-21'
  }
];
