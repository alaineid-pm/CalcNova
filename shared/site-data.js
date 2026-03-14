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
  { id: 'education',    name: 'Education',         emoji: '🎓', cssClass: 'education'    },
  { id: 'guides',       name: 'Guides',            emoji: '📝', cssClass: 'articles'     }
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
    id:          'currency-converter',
    name:        'Currency Converter',
    emoji:       '💱',
    category:    'finance',
    url:         'currency-converter.html',
    description: 'Convert between 30+ currencies with live exchange rates from the European Central Bank.',
    related:     ['unit-converter', 'inflation-calculator', 'salary-calculator'],
    badge:       'new'
  },
  {
    id:          'investment-return',
    name:        'Investment Return Calculator',
    emoji:       '📊',
    category:    'finance',
    url:         'investment-return-calculator.html',
    description: 'Project your investment growth with contributions, fees, and inflation adjustment.',
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
  {
    id:          'due-date',
    name:        'Pregnancy Due Date Calculator',
    emoji:       '🤰',
    category:    'health',
    url:         'due-date-calculator.html',
    description: 'Estimate your due date, current week, and key pregnancy milestones.',
    related:     ['age-calculator', 'bmi-calculator', 'water-intake-calculator'],
    badge:       'new'
  },
  {
    id:          'sleep-calculator',
    name:        'Sleep Calculator',
    emoji:       '😴',
    category:    'health',
    url:         'sleep-calculator.html',
    description: 'Find the best bedtime or wake-up time based on 90-minute sleep cycles.',
    related:     ['water-intake-calculator', 'calorie-calculator', 'pomodoro'],
    badge:       'new'
  },
  {
    id:          'pace-calculator',
    name:        'Pace Calculator',
    emoji:       '🏃',
    category:    'health',
    url:         'pace-calculator.html',
    description: 'Calculate running pace, finish time, or distance for any race from 5K to marathon.',
    related:     ['calorie-calculator', 'bmi-calculator', 'water-intake-calculator'],
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
    id:          'meeting-planner',
    name:        'Meeting Planner',
    emoji:       '🤝',
    category:    'productivity',
    url:         'meeting-planner.html',
    description: 'Find the best meeting times across multiple time zones for remote teams.',
    related:     ['time-converter', 'world-clock', 'pomodoro'],
    badge:       'new'
  },
  {
    id:          'invoice-generator',
    name:        'Invoice Generator',
    emoji:       '🧾',
    category:    'productivity',
    url:         'invoice-generator.html',
    description: 'Create professional invoices and download as PDF. Free, no sign-up.',
    related:     ['salary-calculator', 'percentage-calculator', 'word-counter'],
    badge:       'new'
  },
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
    id:          'password-generator',
    name:        'Password Generator',
    emoji:       '🔐',
    category:    'utility',
    url:         'password-generator.html',
    description: 'Generate strong, random passwords with customizable length and character sets.',
    related:     ['random-number', 'qr-code-generator', 'word-counter'],
    badge:       'new'
  },
  {
    id:          'qr-code-generator',
    name:        'QR Code Generator',
    emoji:       '📲',
    category:    'utility',
    url:         'qr-code-generator.html',
    description: 'Create QR codes for URLs, text, WiFi, email, and vCards. Download as PNG or SVG.',
    related:     ['password-generator', 'word-counter', 'unit-converter'],
    badge:       'new'
  },
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

  /* ── Education ───────────────────────────────────────── */
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
    related:     ['study-timer', 'grade-calculator', 'gpa-calculator'],
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
  }
];
