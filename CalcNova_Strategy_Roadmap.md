# CalcNova — Strategy & Roadmap for Passive Income

## The Big Picture

You have three tools in progress (Compound Interest Calculator, Coast FIRE Calculator, Time Converter). The plan is to grow this into a suite of 12–15 tools, wrap them in a clean website with SEO-driven articles, and monetize through ads and eventually affiliate links.

This document lays out **what to build**, **what to write**, **how to get traffic**, and **a realistic timeline**.

---

## Phase 1: Foundation (Weeks 1–4)

### Finish & Polish Existing Tools
- **Compound Interest Calculator** — ensure it handles monthly/quarterly/annual compounding, allows contributions, and shows a visual chart (chart is key for engagement and time-on-page)
- **Coast FIRE Calculator** — add explainer text below the tool, make inputs intuitive, include a results summary paragraph (not just numbers)
- **Time Zone Converter** — add meeting planner feature (pick multiple zones, see overlapping work hours)

### Set Up the Website Properly
- **Domain**: Use CalcNova.co or CalcNova.tools (short, brandable) — if CalcNova.co isn't available, grab whatever .com variant works
- **Hosting**: Vercel (free tier) or Netlify for static sites, or a cheap shared host (~$3–5/month) if you want WordPress
- **Tech choice**: Static HTML/JS tools are fine and fast. You can host them on GitHub Pages for free to start, then migrate later
- **Analytics**: Set up Google Analytics 4 and Google Search Console from day one — you need data even before you have traffic
- **Site structure**: Every tool gets its own URL path (CalcNova.co/compound-interest-calculator, not CalcNova.co/tools?id=3)

---

## Phase 2: Expand the Tool Suite (Weeks 2–6)

### Priority Tools to Build (High AdSense RPM + Achievable SEO)

Build these roughly in order. Each should take 1–3 sessions with Claude to create.

#### Tier 1 — Finance (highest RPM: $15–40 per 1,000 views)
1. **Mortgage Calculator** — monthly payment, amortization schedule, total interest
2. **Savings Goal Calculator** — "how much do I need to save monthly to reach $X by date Y"
3. **Debt Payoff Calculator** — avalanche vs snowball method comparison
4. **Emergency Fund Calculator** — based on expenses, dependents, job stability
5. **FIRE Calculator (Full)** — expand beyond Coast FIRE to include Lean/Fat/Barista FIRE
6. **Net Worth Tracker** — simple assets minus liabilities with a clean summary

#### Tier 2 — Productivity & Time (moderate RPM but lower competition)
7. **Pomodoro Timer** — simple, clean, no-bloat timer with session tracking
8. **World Clock Dashboard** — show 4–6 zones at once, customizable
9. **Date Duration Calculator** — days between two dates, business days only option
10. **Age Calculator** — exact age in years/months/days (surprisingly high search volume)

#### Tier 3 — Utility (steady traffic, lower RPM but easy to rank)
11. **Unit Converter** — length, weight, temperature, volume
12. **Percentage Calculator** — "what is X% of Y", "X is what % of Y", "% change from X to Y"
13. **Random Number Generator** — with options for ranges, dice, coin flip
14. **Character/Word Counter** — paste text, get counts (useful for writers)

### Why This Mix Matters
- Finance tools earn the most per visitor but are hardest to rank for
- Utility tools are easier to rank for and bring in steady traffic that also sees your finance tools
- The combination builds overall site authority, which helps everything rank better

---

## Phase 3: Content & SEO (Start in Week 3, Ongoing)

### Article Strategy

Every tool should have at least one companion article. These articles serve two purposes: they rank for long-tail keywords that bring traffic, and they funnel readers to your tool.

#### Finance Articles (target long-tail keywords)
| Article Title | Target Keyword | Why It Works |
|---|---|---|
| How to Calculate Compound Interest (With Examples) | "how to calculate compound interest manually" | Educational, links to your calculator |
| What Is Coast FIRE and How to Know If You're On Track | "coast FIRE explained" | Niche FIRE community searches this |
| Debt Snowball vs Avalanche: Which Pays Off Debt Faster? | "snowball vs avalanche method" | Comparison content ranks well |
| How Much Emergency Fund Do I Really Need? | "emergency fund calculator by income" | Specific, low competition |
| How to Calculate Your Net Worth (Step by Step) | "how to calculate net worth" | Evergreen, links to your tracker |
| Mortgage Payment Breakdown: Principal vs Interest Over Time | "mortgage amortization explained" | Visual content opportunity |
| The Complete Guide to FIRE: Lean, Fat, Barista & Coast | "types of FIRE retirement" | Comprehensive guide for FIRE community |
| How to Set a Realistic Savings Goal | "savings goal by age" | Emotional + practical |

#### Utility & Productivity Articles
| Article Title | Target Keyword | Why It Works |
|---|---|---|
| How to Convert Time Zones for Remote Teams | "time zone converter for meetings" | Remote work is huge |
| The Pomodoro Technique: A Complete Guide | "pomodoro technique for studying" | Students search this constantly |
| How to Calculate Business Days Between Two Dates | "business days calculator" | Tool + explanation combo |
| Word Count Guidelines for Every Platform | "ideal word count blog post 2026" | Writers need this, links to counter |

### SEO Fundamentals (Do These for Every Page)

- **Title tag**: Include primary keyword + "CalcNova" brand (e.g., "Compound Interest Calculator — CalcNova")
- **Meta description**: Write a compelling 150-character summary for every page
- **H1 tag**: One per page, should match the primary keyword
- **Internal linking**: Every article links to its companion tool AND 2–3 other tools/articles on your site
- **Schema markup**: Add "WebApplication" schema to tool pages (helps with rich results)
- **Page speed**: Keep tools lightweight — no heavy frameworks if you can avoid them. Fast sites rank better
- **Mobile-first**: Test every tool on mobile. Google indexes mobile version first

### Long-Tail Keyword Strategy

Don't try to rank for "compound interest calculator" right away — NerdWallet and Bankrate own that. Instead target phrases like:

- "compound interest calculator with monthly contributions"
- "coast FIRE calculator for 30 year olds"  
- "how much to save for emergency fund single income"
- "debt payoff calculator avalanche method"
- "time zone converter EST to IST for meetings"
- "how many business days until [date]"

These have lower search volume (50–500/month) but much lower competition, and 20 pages each bringing 50 visitors/day adds up fast.

### Content Production Plan

With Claude's help, you can realistically produce:
- **1 polished article per week** (1,500–2,000 words each)
- Aim for **20 articles in 5 months** alongside building tools
- Each article should be genuinely helpful, not thin SEO-bait — Google rewards depth

---

## Phase 4: Monetization (Month 2+)

### Google AdSense (Start Here)
- Apply for AdSense once you have ~10 tools and ~5 articles live
- Google requires original content and a real site — having both tools and articles helps with approval
- Place ads thoughtfully: one above the fold, one after the tool results, one in articles. Don't overwhelm users
- Expected early earnings: very modest ($5–$30/month). Don't get discouraged

### Affiliate Links (Add in Month 3–4)
Higher payout than ads at low traffic. Relevant options:
- **Wealthsimple / Questrade affiliate programs** (you're in Canada — these convert well for Canadian finance content)
- **Betterment / Wealthfront** (for US audience)
- **Book recommendations** (Amazon Associates) — link to personal finance books in articles
- **Budgeting apps** (YNAB, Mint alternatives) — mention them in articles naturally

### Future Options (Month 6+)
- **Premium/Pro tools**: Offer enhanced versions (export to PDF, save scenarios, email reports)
- **Email list**: Add an optional email signup ("Get our free FIRE planning spreadsheet"). Even a small list becomes valuable
- **Sponsored content**: Once you have 10K+ monthly visitors, small finance companies may reach out

---

## Phase 5: Growth & Maintenance (Month 4+, Ongoing)

### Content Refresh
- Update articles every 6 months with current data and dates
- Google rewards freshness, especially for finance content
- Add new sections based on what questions people ask (check Search Console for queries)

### Build Backlinks (Light Effort)
- Submit your best tools to Product Hunt, Reddit (r/financialindependence, r/personalfinancecanada), and Hacker News
- Share articles in relevant Facebook groups and forums
- Reach out to personal finance bloggers — "I built a free Coast FIRE calculator, thought your readers might find it useful"
- Guest post on small finance blogs (offer a unique article in exchange for a link)

### Track & Iterate
- Monthly: Check Google Search Console for which pages get impressions/clicks
- Double down on what's working (if your debt calculator gets traction, write 3 more debt-related articles)
- Kill or improve what's not (if a tool gets zero traffic after 6 months, rethink the keyword angle)

---

## Realistic Revenue Timeline

| Timeframe | Traffic (daily) | Estimated Monthly Revenue | What's Happening |
|---|---|---|---|
| Month 1–2 | 5–20 visitors | $0 | Building tools, writing content, waiting for indexing |
| Month 3–4 | 30–80 visitors | $5–$30 (ads) | Google starts ranking some long-tail pages |
| Month 5–6 | 80–200 visitors | $30–$100 (ads + affiliate) | SEO gains momentum, some articles on page 2–3 |
| Month 7–12 | 200–500 visitors | $100–$300 (ads + affiliate) | Multiple pages ranking, compounding growth |
| Year 2 | 500–1,500 visitors | $300–$800+ | Site has authority, new content ranks faster |

**These are conservative estimates.** One viral Reddit post or one article that hits page 1 for a good keyword could accelerate this significantly. But planning for the conservative case keeps expectations healthy.

---

## Effort Summary

| Task | Estimated Time | Frequency |
|---|---|---|
| Build each new tool (with Claude) | 1–3 hours | One-time per tool |
| Write each article (with Claude) | 1–2 hours | Weekly |
| Site setup & configuration | 3–5 hours | One-time |
| SEO checks & updates | 30 min | Monthly |
| Backlink outreach | 30 min | Monthly |

**Total upfront investment**: ~40–60 hours over the first 2 months
**Ongoing maintenance**: ~2–4 hours/month after the initial build

This is the "not passive yet" part. After 3–6 months, if you've built the tools and written the content, the maintenance drops to genuinely passive levels — occasional article updates and checking analytics.

---

## Immediate Next Steps

1. **Decide on domain and hosting** (this week)
2. **Finish the three existing tools** and get them live
3. **Build the Mortgage Calculator next** (highest search volume in the finance tier)
4. **Write your first article**: "What Is Coast FIRE and How to Know If You're On Track"
5. **Set up Google Search Console and Analytics**
6. **Come back to Claude to build tools and draft articles one by one**

---

*This plan is designed to maximize your chances with minimal ongoing effort. The key insight: build once, rank forever. Every tool and article you create is a permanent asset that can bring traffic for years.*
