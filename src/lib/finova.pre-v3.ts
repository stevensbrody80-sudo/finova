export const PRODUCT_NAME = 'Finova';
export const STORAGE_KEY = 'finova-prototype-v2';

export type Lesson = { id: string; title: string; category: string; minutes: number; level: string; description: string; icon: string };
export type GlossaryTerm = { term: string; definition: string; why: string };
export type KnowledgeCheck = { prompt: string; choices: string[]; correct: number; explanation: string };
export type LessonContent = {
  mastery: string; opening: string; exampleTitle: string; example: string; scenarioTitle: string; scenario: string;
  checks: KnowledgeCheck[]; takeaways: string[];
};
export type FinovaState = {
  onboarded: boolean; name: string; stage: string; confidence: number; savings: number; goal: string; intent: string; interests: string[];
  roadmap: string[]; completedMilestones: string[]; completedLessons: string[]; mastery: Record<string, number>;
  lessonBestScores: Record<string, number>; simulations: number; streak: number; activity: string[]; activityDays: string[];
  preferences: { weeklyNudge: boolean; practicalFirst: boolean };
  baselineReadiness: number;
};

export const categories = ['All topics', 'Money Basics', 'Saving', 'Credit', 'Investing', 'Retirement', 'Taxes', 'Debt', 'Insurance'];
export const lessons: Lesson[] = [
  { id: 'money-foundations', title: 'Money Foundations', category: 'Money Basics', minutes: 6, level: 'Start here', description: 'Learn the basic numbers and tradeoffs behind everyday money decisions.', icon: 'Compass' },
  { id: 'cash-flow', title: 'Give every dollar a job', category: 'Money Basics', minutes: 5, level: 'Start here', description: 'See what comes in, what goes out, and what is left.', icon: 'Compass' },
  { id: 'emergency-fund', title: 'Your first safety cushion', category: 'Saving', minutes: 6, level: 'Recommended', description: 'Build a buffer so one surprise does not automatically become debt.', icon: 'ShieldCheck' },
  { id: 'credit-score', title: 'Credit without the mystery', category: 'Credit', minutes: 7, level: 'Build confidence', description: 'Understand payment history, utilization, and why carrying interest is not required to build credit.', icon: 'CreditCard' },
  { id: 'index-funds', title: 'Investing, explained plainly', category: 'Investing', minutes: 8, level: 'New territory', description: 'Learn risk, diversification, and why an account is different from an investment.', icon: 'TrendingUp' },
  { id: 'roth-ira', title: 'Meet the Roth IRA', category: 'Retirement', minutes: 7, level: 'New territory', description: 'Understand what a Roth IRA is, eligibility basics, and what opening one does—and does not—do.', icon: 'Sprout' },
  { id: 'paycheck-taxes', title: 'Read your first paycheck', category: 'Taxes', minutes: 6, level: 'Practical', description: 'Decode gross pay, withholding, deductions, and take-home pay.', icon: 'ReceiptText' },
  { id: 'debt-interest', title: 'How interest changes debt', category: 'Debt', minutes: 6, level: 'Build confidence', description: 'See how APR and time can change the cost of a balance.', icon: 'Scale' },
  { id: 'insurance-basics', title: 'Insurance in real life', category: 'Insurance', minutes: 5, level: 'Explore', description: 'Understand premiums, deductibles, and the basic job insurance does.', icon: 'Umbrella' },
];
export const glossary: GlossaryTerm[] = [
  { term: 'APR', definition: 'Annual percentage rate: a standardized way to express the yearly cost of borrowing.', why: 'It helps compare borrowing costs, though fees and compounding can still matter.' },
  { term: 'APY', definition: 'Annual percentage yield: the yearly return on savings that accounts for compounding.', why: 'It helps compare deposit accounts on a more apples-to-apples basis.' },
  { term: 'Emergency fund', definition: 'Money set aside for an unexpected essential expense, like a repair or urgent bill.', why: 'It can reduce the need to use high-interest debt when life surprises you.' },
  { term: 'Roth IRA', definition: 'An individual retirement account funded with after-tax dollars; qualified withdrawals can be tax-free under current rules.', why: 'It is one retirement account type worth understanding early.' },
  { term: '401(k) match', definition: 'Money an employer may contribute to a workplace retirement plan when an employee contributes.', why: 'Understanding the match helps you understand the full value of workplace benefits.' },
  { term: 'Credit utilization', definition: 'The share of available revolving credit currently reported as used.', why: 'Utilization is one factor commonly considered in credit scoring models.' },
  { term: 'Take-home pay', definition: 'The amount left from gross pay after taxes and other paycheck deductions.', why: 'This is closer to the amount available for your monthly plan.' },
  { term: 'Diversification', definition: 'Spreading investments across many holdings or categories rather than depending heavily on one.', why: 'Diversification can reduce concentration risk, though it cannot eliminate market risk.' },
  { term: 'Index fund', definition: 'A fund designed to track a market index or benchmark.', why: 'It is a common way to learn about diversified, rules-based investing.' },
  { term: 'Compound growth', definition: 'Growth that can build on prior growth over time.', why: 'It shows why time can matter in long-term saving and investing.' },
];
export const roadmapBase = [
  { id: 'foundations', title: 'Money Foundations', description: 'Know the few numbers that make every later decision easier.', lessonId: 'money-foundations' },
  { id: 'cashflow', title: 'Spending & Cash Flow', description: 'Make a simple plan for the money you have now.', lessonId: 'cash-flow' },
  { id: 'savings', title: 'Emergency Savings', description: 'Create a first layer of protection for surprises.', lessonId: 'emergency-fund' },
  { id: 'credit', title: 'Credit Fundamentals', description: 'Build credit on purpose without paying unnecessary interest.', lessonId: 'credit-score' },
  { id: 'investing', title: 'Investing Basics', description: 'Learn risk, diversification, and the language before choosing a path.', lessonId: 'index-funds' },
  { id: 'retirement', title: 'Roth IRA & Retirement', description: 'Understand account types that support long-term goals.', lessonId: 'roth-ira' },
  { id: 'paycheck', title: 'First Paycheck & Taxes', description: 'Make gross pay, deductions, and take-home pay less mysterious.', lessonId: 'paycheck-taxes' },
  { id: 'debt', title: 'Debt & Interest', description: 'Understand principal, APR, minimum payments, and repayment tradeoffs.', lessonId: 'debt-interest' },
];
const blankMastery = { 'Money Foundations': 0, Budgeting: 0, Saving: 0, Credit: 0, Investing: 0, Retirement: 0, Taxes: 0, Debt: 0, Insurance: 0 };
export const seedState: FinovaState = {
  onboarded: false, name: '', stage: '', confidence: 0, savings: 0, goal: '', intent: '', interests: [],
  roadmap: roadmapBase.map(x => x.id), completedMilestones: [], completedLessons: [], mastery: blankMastery, lessonBestScores: {},
  simulations: 0, streak: 0, activity: [], activityDays: [], preferences: { weeklyNudge: true, practicalFirst: true }, baselineReadiness: 0,
};

export function loadState(): FinovaState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedState;
    const parsed = JSON.parse(raw);
    const migrateId = (id: string) => id === 'wealth' ? 'debt' : id;
    return {
      ...seedState, ...parsed,
      roadmap: Array.isArray(parsed.roadmap) ? parsed.roadmap.map(migrateId) : seedState.roadmap,
      completedMilestones: Array.isArray(parsed.completedMilestones) ? parsed.completedMilestones.map(migrateId) : seedState.completedMilestones,
      mastery: { ...blankMastery, ...(parsed.mastery || {}) },
      lessonBestScores: { ...seedState.lessonBestScores, ...(parsed.lessonBestScores || {}) },
      preferences: { ...seedState.preferences, ...(parsed.preferences || {}) },
    };
  } catch { return seedState; }
}
export function saveState(next: FinovaState) { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
export function initials(name: string) { const parts = name.trim().split(/\s+/).filter(Boolean); return (parts.length ? parts.slice(0, 2).map(x => x[0]).join('') : 'YOU').toUpperCase(); }
export function todayLabel() { return new Intl.DateTimeFormat(undefined, { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date()); }
export function readinessScore(state: FinovaState) {
  const masteryAvg = Object.values(state.mastery).reduce((a, b) => a + b, 0) / Math.max(1, Object.keys(state.mastery).length);
  const roadmap = state.completedMilestones.length / Math.max(1, state.roadmap.length) * 100;
  const practice = Math.min(100, state.simulations * 20);
  return Math.round(masteryAvg * .55 + roadmap * .30 + practice * .15);
}
export function recordActivity(state: FinovaState, message: string): FinovaState {
  const today = new Date().toISOString().slice(0, 10); const days = state.activityDays.includes(today) ? state.activityDays : [...state.activityDays, today];
  const sorted = [...days].sort().reverse(); let streak = 0; const cursor = new Date();
  for (let i = 0; i < 365; i++) { const key = cursor.toISOString().slice(0, 10); if (sorted.includes(key)) { streak++; cursor.setDate(cursor.getDate() - 1); } else if (i === 0) { cursor.setDate(cursor.getDate() - 1); } else break; }
  return { ...state, activity: [message, ...state.activity.filter(x => x !== message)].slice(0, 8), activityDays: days.slice(-30), streak };
}
export function makeRoadmap(answers: Record<string, string | string[]>) {
  const topics = Array.isArray(answers.topics) ? answers.topics : [];
  const scores: Record<string, number> = { foundations: 20, cashflow: 15, savings: 10, credit: 8, investing: 5, retirement: 4, paycheck: 6, debt: 1 };
  const boost = (id: string, amount: number) => scores[id] = (scores[id] || 0) + amount;
  topics.forEach(t => ({ Saving: 'savings', Credit: 'credit', Investing: 'investing', 'Roth IRA': 'retirement', Taxes: 'paycheck', Debt: 'cashflow' } as Record<string,string>)[t] && boost(({ Saving: 'savings', Credit: 'credit', Investing: 'investing', 'Roth IRA': 'retirement', Taxes: 'paycheck', Debt: 'cashflow' } as Record<string,string>)[t], 40));
  const savings = String(answers.savings || ''); if (savings.includes('None') || savings.includes('Under $500')) boost('savings', 55);
  const confidence = Number(String(answers.confidence || '3').charAt(0)); if (confidence <= 2) { boost('foundations', 40); boost('cashflow', 25); }
  const goal = String(answers.goal || '').toLowerCase(); if (goal.includes('invest')) { boost('investing', 55); boost('retirement', 25); } if (goal.includes('credit')) boost('credit', 55); if (goal.includes('saving') || goal.includes('emergency')) boost('savings', 55); if (goal.includes('post') || goal.includes('job')) boost('paycheck', 45); if (goal.includes('debt')) boost('debt', 55);
  return roadmapBase.map(x => x.id).sort((a,b) => scores[b] - scores[a]);
}
export function initialMastery(answers: Record<string, string | string[]>) {
  const confidence = Number(String(answers.confidence || '3').charAt(0)); const base = Math.max(0, (confidence - 1) * 5); const topics = Array.isArray(answers.topics) ? answers.topics : [];
  const m = { 'Money Foundations': base, Budgeting: base, Saving: base, Credit: base, Investing: base, Retirement: base, Taxes: base, Debt: base, Insurance: base };
  topics.forEach(t => { const key = t === 'Roth IRA' ? 'Retirement' : t; if (key in m) m[key as keyof typeof m] = Math.max(0, base - 5); }); return m;
}

export const lessonContent: Record<string, LessonContent> = {
  'money-foundations': {
    mastery: 'Money Foundations',
    opening: 'Money foundations are the few numbers that help you make decisions without guessing. Start with income, obligations, flexibility, savings, and debt.',
    exampleTitle: 'A month in the real world',
    example: 'A student brings in $1,200 each month. Fixed expenses are $650 and variable expenses are $300. The remaining money is not automatically “extra”—it may need a job such as savings or debt repayment.',
    scenarioTitle: 'Before you invest',
    scenario: 'Before deciding how much to invest, understand your cash flow and essential obligations first. A tradeoff is choosing one use for limited money while giving up another use for now.',
    checks: [
      { prompt: 'How much remains before additional spending?', choices: ['$150', '$250', '$350'], correct: 1, explanation: '$1,200 − $650 − $300 = $250. That is the amount left before another choice is made.' },
      { prompt: 'What should someone understand before deciding how much they can invest?', choices: ['Their cash flow and essential obligations', 'Which stock their friends are buying', 'How to avoid every possible market change'], correct: 0, explanation: 'Knowing what comes in, what must go out, and what is already owed helps keep an investment choice realistic.' },
    ],
    takeaways: ['Income and take-home income are not always the same.', 'Fixed, variable, savings, and debt payments compete for the same dollars.', 'Good choices make tradeoffs visible instead of pretending money is unlimited.'],
  },
  'cash-flow': {
    mastery: 'Budgeting',
    opening: 'Cash flow is money in minus money out. Intentional spending starts by separating required costs from expenses you can adjust.',
    exampleTitle: 'What is available this month?',
    example: 'Take-home pay is $4,100. Fixed expenses are $2,450 and variable essential expenses are $700. The amount left before discretionary spending, additional saving, or investing is $950.',
    scenarioTitle: 'When the month runs negative',
    scenario: 'Dining out is $250, entertainment is $150, and subscriptions are $75. These discretionary expenses are generally easier to adjust than rent or required debt payments.',
    checks: [
      { prompt: 'How much remains before discretionary spending, additional saving, or investing?', choices: ['$750', '$950', '$1,200'], correct: 1, explanation: '$4,100 − $2,450 − $700 = $950. This is available before the next set of choices.' },
      { prompt: 'Which expenses are generally easiest to adjust when cash flow becomes negative?', choices: ['Rent and required debt payments', 'Variable discretionary expenses', 'Taxes already withheld from a paycheck'], correct: 1, explanation: 'Variable discretionary costs can usually be reduced or paused more easily than fixed obligations.' },
    ],
    takeaways: ['Cash flow shows whether the month is sustainable.', 'Needs, wants, fixed costs, and variable costs behave differently.', 'A spending plan creates options before a negative balance becomes a surprise.'],
  },
  'emergency-fund': {
    mastery: 'Saving',
    opening: 'Emergency savings is cash reserved for unexpected essential expenses. Its value comes from being available when timing is uncertain.',
    exampleTitle: 'A surprise repair',
    example: 'You have $1,500 in emergency savings and an unexpected $900 car repair. Using part of a liquid buffer may reduce the need to put the entire repair on high-interest debt.',
    scenarioTitle: 'Liquidity matters',
    scenario: 'Emergency savings should be easy to access. A highly volatile investment, collectible item, or money locked away for years may not be available when an urgent bill arrives.',
    checks: [
      { prompt: 'What is emergency savings designed to help with?', choices: ['An unexpected essential car repair', 'A planned spring-break trip', 'A monthly streaming subscription'], correct: 0, explanation: 'Unexpected, necessary costs are what an emergency buffer is designed to help absorb.' },
      { prompt: 'Which is generally more appropriate for emergency savings?', choices: ['Easily accessible savings', 'A highly volatile investment', 'A collectible item', 'Money that cannot be accessed for years'], correct: 0, explanation: 'The emergency portion of a plan prioritizes access and stability over chasing a higher possible return.' },
    ],
    takeaways: ['Emergency savings is for surprises, not every planned expense.', 'Liquidity means being able to access money when needed.', 'A buffer can reduce reliance on high-interest debt.'],
  },
  'credit-score': {
    mastery: 'Credit',
    opening: 'A credit card is borrowed money with rules. Statement balances, minimum payments, interest, utilization, and on-time payments all matter in different ways.',
    exampleTitle: 'Utilization in one calculation',
    example: 'With a $2,000 credit limit and a $400 current balance, utilization is 20%. Utilization is one factor commonly considered in credit scoring models.',
    scenarioTitle: 'Minimum does not mean free',
    scenario: 'If a statement balance is $600 and the minimum payment is $35, paying only the minimum usually leaves a balance. Interest can accrue on unpaid amounts according to the card terms.',
    checks: [
      { prompt: 'A $400 balance on a $2,000 limit is what utilization?', choices: ['10%', '20%', '40%'], correct: 1, explanation: '$400 ÷ $2,000 = 20%. Utilization is the share of available revolving credit being used.' },
      { prompt: 'What usually happens when someone pays only the minimum and carries the remaining balance?', choices: ['The unpaid balance can accrue interest', 'The balance disappears automatically', 'Credit scores require the person to carry interest'], correct: 0, explanation: 'A remaining balance can continue to cost interest. Carrying interest is not required to build credit.' },
    ],
    takeaways: ['A statement balance is different from a minimum payment.', 'Utilization compares a reported balance with available credit.', 'On-time payments matter, and carrying interest is not a credit-building requirement.'],
  },
  'index-funds': {
    mastery: 'Investing',
    opening: 'Investing is using money for a longer-term goal while accepting that its value can rise and fall. Stocks, bonds, and funds are different ways to hold exposure.',
    exampleTitle: 'One company or many?',
    example: 'Portfolio A owns stock in one company. Portfolio B holds a diversified fund containing hundreds of companies. Portfolio B is generally more diversified because it depends less on one holding.',
    scenarioTitle: 'When the market declines',
    scenario: 'A diversified fund can still lose value when markets decline. Diversification reduces concentration risk; it does not eliminate market risk or guarantee a return.',
    checks: [
      { prompt: 'Which portfolio is generally more diversified?', choices: ['Portfolio A with one company', 'Portfolio B with a fund of hundreds of companies', 'Neither can be compared'], correct: 1, explanation: 'Holding many companies spreads exposure and reduces dependence on one company.' },
      { prompt: 'What can happen when the market declines?', choices: ['Investments can fall in value', 'Diversification guarantees no loss', 'A fund becomes a savings account'], correct: 0, explanation: 'Market volatility is normal and investing involves risk, even when a portfolio is diversified.' },
    ],
    takeaways: ['Saving is often for nearer-term needs; investing usually needs more time.', 'Funds can hold many investments at once.', 'Diversification manages concentration risk but cannot remove market risk.'],
  },
  'roth-ira': {
    mastery: 'Retirement',
    opening: 'An IRA is an individual retirement account. A Roth IRA is an account type funded with after-tax dollars; it is not an investment by itself.',
    exampleTitle: 'Account versus investment',
    example: 'Opening a Roth IRA creates the account. Money contributed still needs to be allocated to an eligible investment or held as cash inside the account.',
    scenarioTitle: 'Why time can matter',
    scenario: 'If money remains invested for many years, growth can build on prior growth. That is compound growth—not a promise of a specific return, and market values can still change.',
    checks: [
      { prompt: 'Which statement is correct?', choices: ['A Roth IRA is itself a stock', 'A Roth IRA is an account that can hold investments', 'Opening one automatically invests every deposit', 'A Roth IRA is a checking account'], correct: 1, explanation: 'A Roth IRA is an account structure. What you hold inside it is a separate decision.' },
      { prompt: 'What does compound growth describe?', choices: ['Growth building on prior growth over time', 'A guaranteed yearly return', 'A rule that removes market risk'], correct: 0, explanation: 'Compound growth can build on earlier growth over time, but it does not guarantee an outcome or eliminate risk.' },
    ],
    takeaways: ['An account is the container; an investment is what may be held inside it.', 'Roth IRA tax treatment has eligibility and rule details to learn.', 'Starting earlier can give compound growth more time, without promising a result.'],
  },
  'paycheck-taxes': {
    mastery: 'Taxes',
    opening: 'Gross pay is what you earn before deductions. Take-home pay is what reaches you after withholding, benefits, retirement contributions, and other deductions.',
    exampleTitle: 'From salary to deposit',
    example: 'A $65,000 salary is approximately $5,417 gross per month. In this simplified simulation, take-home pay is approximately $4,100 per month.',
    scenarioTitle: 'Why the numbers differ',
    scenario: 'Actual take-home pay varies with taxes, location, benefits, retirement contributions, and withholding elections. Gross pay is useful for understanding compensation; take-home pay is closer to a spending plan.',
    checks: [
      { prompt: 'Which amount is closest to the cash available for a monthly spending plan?', choices: ['$65,000 annual salary', '$5,417 gross monthly pay', 'Actual take-home pay'], correct: 2, explanation: 'Take-home pay reflects the deductions that have already reduced the amount deposited.' },
      { prompt: 'What is gross pay?', choices: ['Pay after all deductions', 'Pay before taxes and other deductions', 'Only an employer retirement contribution'], correct: 1, explanation: 'Gross pay is the amount earned before taxes, benefits, retirement contributions, and other deductions.' },
    ],
    takeaways: ['Gross pay and take-home pay answer different questions.', 'Withholding and benefits affect the amount deposited.', 'Use actual take-home pay when building a practical monthly plan.'],
  },
  'debt-interest': {
    mastery: 'Debt',
    opening: 'Principal is the amount borrowed. Interest is the cost of borrowing, and APR is a way to express that yearly cost. Time and payment size affect the total cost.',
    exampleTitle: 'Minimum payments take time',
    example: 'A credit-card balance that remains unpaid can keep generating interest. Two balances of the same size can cost different amounts when their APRs differ.',
    scenarioTitle: 'A repayment tradeoff',
    scenario: 'When financially feasible, paying more toward the balance generally reduces the amount of principal that can continue accruing interest and may shorten repayment time.',
    checks: [
      { prompt: 'Which repayment strategy generally results in less interest?', choices: ['Pay only the minimum for a long period', 'Pay more toward the balance when financially feasible', 'Ignore the APR because it never affects cost'], correct: 1, explanation: 'Paying more can reduce the balance that accrues interest and shorten the repayment period.' },
      { prompt: 'What is APR mainly describing in a borrowing example?', choices: ['The yearly cost of borrowing', 'The amount originally borrowed', 'A guarantee that debt will be forgiven'], correct: 0, explanation: 'APR expresses a yearly borrowing cost in a standardized way, though fees and compounding can also matter.' },
    ],
    takeaways: ['Principal is the balance borrowed; interest is the price of borrowing.', 'APR helps compare borrowing costs.', 'A longer repayment period can increase total interest paid.'],
  },
  'insurance-basics': {
    mastery: 'Insurance',
    opening: 'Insurance transfers some financial risk in exchange for a premium. The policy terms determine what is covered and what you may pay yourself.',
    exampleTitle: 'Premiums and deductibles',
    example: 'A lower monthly premium can sometimes come with a higher deductible. That creates a tradeoff between predictable monthly cost and possible out-of-pocket cost after a covered event.',
    scenarioTitle: 'What the policy does',
    scenario: 'A deductible is generally an amount you pay before covered benefits apply under the policy terms. It is not a guaranteed refund or the same thing as a premium.',
    checks: [
      { prompt: 'What is a deductible?', choices: ['A guaranteed refund', 'An amount you may pay before covered benefits apply', 'The monthly premium'], correct: 1, explanation: 'A deductible is generally an amount you pay before covered insurance benefits apply, subject to the policy.' },
      { prompt: 'What does a premium usually describe?', choices: ['The recurring amount paid for coverage', 'The amount of a credit-card balance', 'A guaranteed investment return'], correct: 0, explanation: 'A premium is the price paid for an insurance policy, often on a recurring schedule.' },
    ],
    takeaways: ['A premium pays for coverage; a deductible is a possible out-of-pocket amount.', 'Insurance is about managing risk, not guaranteeing no loss.', 'Always read the actual policy terms before relying on coverage.'],
  },
};