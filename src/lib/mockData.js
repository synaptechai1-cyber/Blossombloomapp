export const mockTeam = [
  { id: 1, name: 'Amara Osei', rank: 'Gold', sales: 4200, recruits: 8, joined: '2024-01', avatar: 'AO', status: 'active' },
  { id: 2, name: 'Priya Naidoo', rank: 'Silver', sales: 2800, recruits: 4, joined: '2024-03', avatar: 'PN', status: 'active' },
  { id: 3, name: 'Lerato Dlamini', rank: 'Bronze', sales: 1500, recruits: 2, joined: '2024-05', avatar: 'LD', status: 'active' },
  { id: 4, name: 'Yemi Adeyemi', rank: 'Starter', sales: 800, recruits: 1, joined: '2024-08', avatar: 'YA', status: 'inactive' },
  { id: 5, name: 'Zanele Khumalo', rank: 'Silver', sales: 3100, recruits: 5, joined: '2024-02', avatar: 'ZK', status: 'active' },
  { id: 6, name: 'Fatima Malik', rank: 'Bronze', sales: 1200, recruits: 2, joined: '2024-06', avatar: 'FM', status: 'active' },
]

export const mockTraining = [
  { id: 1, title: 'Welcome to Bloom', category: 'Onboarding', duration: '15 min', completed: true, description: 'Everything you need to know to get started with Bloom.' },
  { id: 2, title: 'Product Knowledge Masterclass', category: 'Products', duration: '45 min', completed: true, description: 'Deep dive into our full product range and key benefits.' },
  { id: 3, title: 'Social Selling Secrets', category: 'Sales', duration: '30 min', completed: false, description: 'How to use social media to grow your customer base.' },
  { id: 4, title: 'Team Building Fundamentals', category: 'Leadership', duration: '60 min', completed: false, description: 'Strategies to recruit, retain and grow your team.' },
  { id: 5, title: 'Advanced Closing Techniques', category: 'Sales', duration: '40 min', completed: false, description: 'Turn more leads into loyal customers with proven scripts.' },
  { id: 6, title: 'Rank Advancement Blueprint', category: 'Leadership', duration: '50 min', completed: false, description: 'A step-by-step path to your next rank and beyond.' },
]

export const mockRewards = [
  { id: 1, title: 'First Sale', icon: '🌸', earned: true, description: 'Made your very first sale', points: 100 },
  { id: 2, title: 'Team Starter', icon: '👑', earned: true, description: 'Recruited your first team member', points: 250 },
  { id: 3, title: 'Rising Star', icon: '⭐', earned: true, description: 'Hit $1,000 in monthly sales', points: 500 },
  { id: 4, title: 'Gold Rush', icon: '🏆', earned: false, description: 'Reach Gold rank', points: 1000 },
  { id: 5, title: 'Power Recruiter', icon: '💎', earned: false, description: 'Recruit 10 team members', points: 1500 },
  { id: 6, title: 'Top Earner', icon: '🚀', earned: false, description: 'Hit $10,000 in monthly sales', points: 5000 },
]

export const mockStats = {
  monthlySales: 3240,
  teamSize: 6,
  rank: 'Silver',
  points: 850,
  salesGrowth: 12,
  nextRank: 'Gold',
  nextRankTarget: 5000,
}

export const studioTemplates = {
  hooks: [
    "Did you know your skin could look THIS good?",
    "Stop scrolling — your glow-up starts here 🌸",
    "The secret to radiant skin that nobody tells you...",
    "I tried this for 7 days and here's what happened 👇",
    "This product changed my morning routine forever",
    "Real results. Real people. Real Bloom ✨",
    "If you're tired of products that don't deliver...",
    "Your skin deserves better — and here's proof 💕",
  ],
  captions: [
    "I've been using Bloom's {product} for {days} days now and the difference is incredible! My skin feels {feeling} and I've had so many compliments. This is the real deal, friends 🌸 Link in bio to shop!",
    "Not sponsored, just OBSESSED 😍 {product} by Bloom has completely transformed my {routine}. If you've been on the fence, this is your sign to try it. DM me for details!",
    "Sharing my honest review of Bloom {product} because you DESERVE to know about this. {benefit} and {benefit2} — all in one product. Drop a 🌸 if you want more info!",
    "Morning routine upgrade unlocked ✨ Since adding {product} to my daily routine, my {skin_type} skin has never looked better. Who else is a Bloom convert? 👇",
  ],
  hashtags: [
    ['#BloomBeauty', '#NaturalSkincare', '#GlowUp', '#SkincareRoutine', '#CleanBeauty'],
    ['#BloomPartner', '#BeautyBoss', '#SkincareCommunity', '#RadiantSkin', '#Selfcare'],
    ['#DirectSales', '#WomenInBusiness', '#BloomLife', '#BeautyTips', '#GlowingSkin'],
    ['#SkincareObsessed', '#BloomGlow', '#NaturalBeauty', '#SkinFirst', '#BeautyEssentials'],
  ],
  products: ['Rose Glow Serum', 'Hydra-Bloom Moisturiser', 'Petal Soft Cleanser', 'Bloom Radiance Oil', 'Overnight Repair Mask'],
}
