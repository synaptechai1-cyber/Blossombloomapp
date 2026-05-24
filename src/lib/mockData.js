export const RANKS = [
  { name: 'Apprentice', emoji: '🌱', color: '#d4864a', bg: '#fef3e8', min: 0, max: 2000 },
  { name: 'Supervisor', emoji: '🌸', color: '#d4486a', bg: '#fde8f0', min: 2000, max: 5000 },
  { name: 'Manager', emoji: '⭐', color: '#9b6bc4', bg: '#f3eafc', min: 5000, max: 10000 },
  { name: 'Rising Star', emoji: '✨', color: '#c4962a', bg: '#fdf3d8', min: 10000, max: 20000 },
  { name: 'Director', emoji: '👑', color: '#b83358', bg: '#fde0ea', min: 20000, max: null },
]

export const PRODUCTS = [
  { id: 1, name: 'Gut Cleanse', subtitle: '300g Powder', price: 480, distPrice: 360, category: 'Gut Health', emoji: '🌿', tag: 'BESTSELLER', description: 'A fibre-rich blend that supports digestion, reduces bloating, and resets your gut naturally. Mix one scoop with water each morning.', benefits: ['Reduces bloating', 'Regular bowel movements', 'Promotes gut health', 'Better weight management', 'Improved digestive system'], bestFor: 'Morning routine' },
  { id: 2, name: 'B-Drops', subtitle: 'Fat Burn Drops', price: 450, distPrice: 340, category: 'Weight Control', emoji: '💧', tag: 'NEW', description: 'Powerful metabolism-boosting drops that accelerate fat burn and support your weight loss journey throughout the day.', benefits: ['Accelerates fat burn', 'Boosts metabolism', 'Suppresses appetite', 'Increases energy', 'Natural ingredients'], bestFor: 'Daily use' },
  { id: 3, name: 'Shrink AM', subtitle: 'Morning Formula', price: 800, distPrice: 600, category: 'Weight Control', emoji: '☀️', tag: 'FEATURED', description: 'Start your day strong — a natural morning supplement that curbs cravings, boosts energy, and helps burn fat.', benefits: ['Curbs morning cravings', 'Boosts energy', 'Burns fat', 'Improves focus', 'Natural boost'], bestFor: 'Take in the morning' },
  { id: 4, name: 'Shrink PM', subtitle: 'Nighttime Formula', price: 400, distPrice: 300, category: 'Weight Control', emoji: '🌙', tag: 'BEST VALUE', description: 'Calm your cravings and unwind — your gentle evening support for restful sleep and healthy weight management.', benefits: ['Reduces night cravings', 'Supports restful sleep', 'Overnight fat burn', 'Reduces stress', 'Relaxation support'], bestFor: 'Take at night' },
  { id: 5, name: 'Detox Tea', subtitle: '5 Pack', price: 1200, distPrice: 900, category: 'Gut Health', emoji: '🍵', tag: 'POPULAR', description: 'A soothing daily detox blend that supports digestion, reduces bloating, and helps you feel refreshed and light.', benefits: ['Daily detox', 'Reduces bloating', 'Supports digestion', 'Natural herbal blend', 'Refreshing taste'], bestFor: 'Daily tea ritual' },
  { id: 6, name: 'CraveBlock', subtitle: 'Appetite Suppressant', price: 1200, distPrice: 900, category: 'Weight Control', emoji: '🛡️', tag: 'NEW', description: 'Advanced craving control formula that helps you stay on track with your wellness goals by blocking hunger signals.', benefits: ['Blocks cravings', 'Controls appetite', 'Reduces emotional eating', 'Supports weight loss', 'All-day effectiveness'], bestFor: 'Before meals' },
  { id: 7, name: 'Collagen Protein Shake', subtitle: 'Vanilla / Berry Blast', price: 400, distPrice: 300, category: 'Wellness', emoji: '✨', tag: 'NEW', description: 'Bloom Collagen & Berberine Slimming Protein Shake — nourish your body while supporting lean muscle and glowing skin.', benefits: ['Boosts collagen', 'Supports lean muscle', 'Glowing skin', 'High protein', 'Berberine for metabolism'], bestFor: 'Post-workout or meal replacement' },
  { id: 8, name: 'Lady Bloom Juice', subtitle: 'For Women', price: 350, distPrice: 260, category: 'Wellness', emoji: '🌸', tag: 'POPULAR', description: 'Specially formulated for women — supports hormonal balance, energy levels, and overall feminine wellness.', benefits: ['Hormonal balance', 'Boosts energy', 'Supports immunity', 'Rich in vitamins', 'Natural fruit blend'], bestFor: 'Daily wellness' },
  { id: 9, name: 'King Bloom Juice', subtitle: 'For Men', price: 350, distPrice: 260, category: 'Wellness', emoji: '💪', tag: 'POPULAR', description: 'Crafted for men — supports vitality, strength, and overall wellness with a powerful blend of natural ingredients.', benefits: ['Boosts vitality', 'Supports strength', 'Improves stamina', 'Rich in antioxidants', 'Natural energy boost'], bestFor: 'Daily wellness' },
]

export const mockTeam = [
  { id: 1, name: 'Zanele Khumalo', initials: 'ZK', rank: 'Director', sales: 24500, recruits: 18, joined: '2023-06', status: 'active', daysActive: 42 },
  { id: 2, name: 'Amara Osei', initials: 'AO', rank: 'Rising Star', sales: 14200, recruits: 11, joined: '2023-09', status: 'active', daysActive: 28 },
  { id: 3, name: 'Priya Naidoo', initials: 'PN', rank: 'Manager', sales: 7800, recruits: 6, joined: '2024-01', status: 'active', daysActive: 18 },
  { id: 4, name: 'Lerato Dlamini', initials: 'LD', rank: 'Supervisor', sales: 3500, recruits: 3, joined: '2024-03', status: 'active', daysActive: 7 },
  { id: 5, name: 'Yemi Adeyemi', initials: 'YA', rank: 'Apprentice', sales: 900, recruits: 1, joined: '2024-08', status: 'inactive', daysActive: 0 },
  { id: 6, name: 'Fatima Malik', initials: 'FM', rank: 'Supervisor', sales: 2900, recruits: 2, joined: '2024-04', status: 'active', daysActive: 12 },
]

export const mockLeaderboard = [
  { name: 'Zanele K.', initials: 'ZK', sales: 24500 },
  { name: 'Amara O.', initials: 'AO', sales: 14200 },
  { name: 'You', initials: 'ME', sales: 8640, isMe: true },
  { name: 'Priya N.', initials: 'PN', sales: 7800 },
  { name: 'Lerato D.', initials: 'LD', sales: 3500 },
]

export const mockActivity = [
  { text: 'Zanele Khumalo earned a R2,400 commission', time: '2h ago' },
  { text: 'Amara Osei recruited a new Bloomer', time: '5h ago' },
  { text: 'You completed "Social Selling Mastery" training', time: 'yesterday' },
  { text: 'Priya Naidoo hit a 7-day wellness streak', time: 'yesterday' },
  { text: 'Fatima Malik shared B-Drops with 12 friends', time: '2d ago' },
]

export const mockTraining = [
  { id: 1, title: 'Welcome to Blossom Bloom', category: 'ONBOARDING', duration: '15 min', progress: 100, description: 'Your first step into the Blossom Bloom family. Learn our mission, values, and what makes our wellness products stand out.', content: [{ heading: 'Our Mission', text: 'Blossom Bloom exists to empower everyday people to achieve financial freedom while helping others live healthier, more vibrant lives through science-backed wellness products.' }, { heading: 'Why Blossom Bloom?', text: 'We are a proudly South African brand trusted by thousands of customers. Our products are result-driven, affordable, and designed for real people with real goals.' }, { heading: 'Your Role as a Distributor', text: 'As a Blossom Bloom distributor, you earn by selling products AND by building a team. The more you grow, the more you earn — all the way up to Director level.' }] },
  { id: 2, title: 'Why Blossom Bloom Works', category: 'PRODUCT KNOWLEDGE', duration: '12 min', progress: 100, description: 'Master the full product range. Know the benefits, ingredients, and best use cases so you can sell with confidence.', content: [{ heading: 'The Core Range', text: 'Our flagship products are Gut Cleanse, B-Drops, Shrink AM, and Shrink PM. These four work as a system — gut health first, then fat burn, then appetite control day and night.' }, { heading: 'How to Recommend Products', text: 'Start by asking: "What is your main goal?" Weight loss → B-Drops + Shrink AM/PM. Bloating → Gut Cleanse + Detox Tea. Skin & wellness → Collagen Shake + Lady/King Bloom Juice.' }, { heading: 'Handling Sceptical Customers', text: 'Share real testimonials. Remind them our products use scientifically proven ingredients. Offer to send before/after results. Never make medical claims — focus on wellness and how customers feel.' }] },
  { id: 3, title: 'The Soft Sell Script', category: 'SALES', duration: '18 min', progress: 65, description: 'Stop losing sales by coming across as pushy. Master the soft sell — a conversation-based approach that converts naturally.', content: [{ heading: 'Lead With the Problem', text: 'Never open with your product. Open with: "Have you been struggling with your weight or energy lately?" Let them tell you their pain. Then position Blossom Bloom as the solution they have been looking for.' }, { heading: 'The 3-Message Sequence', text: 'Message 1: Start a genuine conversation. Message 2: Share a result or testimonial relevant to them. Message 3: Make a soft offer — "I think this could really help you, want me to send you more info?"' }, { heading: 'Following Up Without Being Annoying', text: 'Most sales happen on follow-up 4 or 5. After interest: follow up at 24hrs, 3 days, 7 days. Be friendly: "Did you get a chance to look at what I sent?" Never pressure. Always add value.' }] },
  { id: 4, title: 'Instagram Stories That Convert', category: 'SOCIAL MEDIA', duration: '22 min', progress: 20, description: 'Turn your Instagram stories into a daily selling machine. What to post, when to post, and how to convert viewers into buyers.', content: [{ heading: 'The 80/20 Content Rule', text: '80% of your content should add value — tips, testimonials, your personal journey, education. Only 20% direct selling. People buy from people they trust. Build trust first, sell second.' }, { heading: 'Story Frameworks That Work', text: 'Morning story: "Here is what I took today and why." Evening story: "Update on how I feel." Weekly story: a before/after or customer result. This consistency builds an audience that is ready to buy.' }, { heading: 'The DM Funnel', text: 'End every story with a soft CTA: "DM me BLOOM for more info." When they DM you, you now have a warm lead in your inbox. Send them the relevant product info and begin the conversation.' }] },
  { id: 5, title: 'Building Your Daily Ritual', category: 'WELLNESS COACHING', duration: '15 min', progress: 0, description: 'How to use Blossom Bloom products in your own daily routine — so you become your best testimonial.', content: [{ heading: 'Be Your Own Case Study', text: 'Your most powerful marketing asset is your own transformation. When you genuinely use the products and share your real results, no selling script is needed. Authenticity converts.' }, { heading: 'The Daily Stack', text: 'Morning: Shrink AM + Gut Cleanse. Midday: B-Drops. Evening: Shrink PM. Consistency for 30 days delivers visible results that you can share with confidence.' }, { heading: 'Documenting Your Journey', text: 'Take photos every 7 days. Note your energy, bloating, sleep quality. These notes become your stories, your captions, your testimonials. Your journey is your content.' }] },
  { id: 6, title: 'Handling Objections Gracefully', category: 'SALES', duration: '20 min', progress: 0, description: 'The most common objections you will face — and exactly how to handle them without sounding defensive or pushy.', content: [{ heading: '"It is too expensive"', text: 'Say: "I understand. Can I ask — what are you currently spending on takeaways or snacks each week?" Then show them that Shrink AM + PM costs less per day than most coffees. Reframe the value.' }, { heading: '"Does it really work?"', text: 'Never argue. Say: "That is a fair question — here are some real results from people just like you." Then share 2-3 testimonials. Let social proof do the work. Offer a guarantee where possible.' }, { heading: '"I need to think about it"', text: 'Say: "Of course! What specifically would help you feel more confident about trying it?" This opens a conversation rather than a dead end. Identify the real objection and address it directly.' }] },
  { id: 7, title: 'Team Building & Recruitment', category: 'LEADERSHIP', duration: '35 min', progress: 0, description: 'Learn how to identify, approach, and onboard new team members. Your team is your biggest income lever.', content: [{ heading: 'Who to Recruit', text: 'Look for people who are ambitious, health-conscious, active on social media, or who have expressed wanting extra income. Your best distributors often come from your own customers first — they already believe in the products.' }, { heading: 'The Recruitment Conversation', text: 'Never lead with "join my team." Lead with value: "I have been doing something that has been changing lives AND paying me well — can I share it with you for 10 minutes?" Let the results do the talking.' }, { heading: 'Onboarding for Success', text: 'The first 72 hours are critical. Help them make their first sale within 3 days. Add them to your team WhatsApp. Share this training with them. Celebrate every single win publicly — recognition is free and priceless.' }] },
  { id: 8, title: 'From Burnout to Bloom', category: 'MOTIVATION', duration: '28 min', progress: 0, description: 'A powerful mindset reset for those moments when you feel like giving up. This one could change everything.', content: [{ heading: 'Why Most People Quit Too Early', text: 'The dip always comes. Sales slow down. Team members go quiet. You start to doubt yourself. This is normal — and it is exactly where most people quit. The ones who push through this phase are the ones who make it to Director.' }, { heading: 'Reconnecting With Your Why', text: 'Write down the 3 reasons you started. The bills you want to pay. The freedom you want. The person you want to become. Read these every morning. Your why is your fuel — never let it run out.' }, { heading: 'Small Wins Build Big Momentum', text: 'Do not wait for a big breakthrough. Celebrate every small win — a new follower, a kind reply, your first sale, your team member\'s first sale. Momentum is built one small win at a time. Bloom at your own pace.' }] },
]

export const mockRewards = {
  badges: [
    { id: 1, title: 'First Bloom', icon: '🌸', earned: true, description: 'Make your first sale' },
    { id: 2, title: 'Team Builder', icon: '👥', earned: true, description: 'Recruit 3 Bloomers' },
    { id: 3, title: '30-Day Streak', icon: '🔥', earned: true, description: 'Show up for 30 days' },
    { id: 4, title: 'Supervisor Badge', icon: '🏅', earned: false, description: 'Reach Supervisor rank' },
    { id: 5, title: 'Community Star', icon: '⭐', earned: false, description: 'Top 10 leaderboard' },
    { id: 6, title: 'Director Crown', icon: '👑', earned: false, description: 'Reach Director rank' },
  ],
  challenges: [
    { id: 1, title: '21-Day Reach Out', description: 'Connect with 21 people this month', reward: '+R500 bonus', current: 14, total: 21 },
    { id: 2, title: 'Story Streak', description: 'Share a wellness story daily', reward: 'Featured badge', current: 5, total: 7 },
    { id: 3, title: 'Team Together', description: 'All team members active this week', reward: 'Team retreat raffle', current: 4, total: 6 },
  ],
}

export const mockStats = {
  monthlySales: 8640,
  teamSize: 6,
  rank: 'Supervisor',
  points: 850,
  salesGrowth: 18,
  nextRank: 'Manager',
  nextRankTarget: 10000,
  streak: 14,
  customers: 42,
  goalsHit: 7,
  totalGoals: 10,
  pendingPayout: 1240,
}

export const MOTIVATIONAL_QUOTES = [
  "You're not chasing success. You're returning to her.",
  "She believed she could, so she did.",
  "Every no gets you closer to the yes that changes everything.",
  "Your consistency today is someone else's inspiration tomorrow.",
  "Bloom where you are planted — then plant yourself somewhere bigger.",
  "The woman who shows up every day wins.",
]

export const studioTemplates = {
  hooks: [
    "Stop scrolling — your weight loss journey starts HERE 🌿",
    "I lost weight and here's exactly what I used 👇",
    "Still bloated every day? This is what changed everything for me...",
    "The Blossom Bloom combo that ACTUALLY works — my honest review",
    "If you've tried everything and nothing worked — read this 💚",
    "Real results. Real people. Real Blossom Bloom ✨",
    "My gut health transformation in 30 days 🌸",
    "This is why I switched to Blossom Bloom and never looked back",
  ],
  captions: [
    "I've been using {product} for {days} days and the difference is unreal 😮 I feel {feeling}, my bloating is gone, and I actually have energy again! Blossom Bloom is the real deal. DM me 'BLOOM' and I'll tell you exactly how to get started 🌸",
    "Not an ad — just an obsessed customer turned distributor 😍 {product} by Blossom Bloom completely changed my {routine}. If you've been on the fence, this is your sign. DM me for details or drop a 💚 below!",
    "Honest review of Blossom Bloom {product} because YOU deserve to know about this. {benefit} and {benefit2} — all from one product. Tag a friend who needs this! Drop a 🌸 if you want more info!",
    "My wellness routine is LOCKED IN ✨ Since adding {product} to my daily routine, I feel {feeling} and my confidence is through the roof! Who else is on their Blossom Bloom journey? 👇",
  ],
  hashtags: [
    ['#BlossomBloom', '#WellnessJourney', '#GutHealth', '#WeightLoss', '#SouthAfrica'],
    ['#BlossomBloomWellness', '#HealthyLifestyle', '#FatBurn', '#NaturalWellness', '#BBloom'],
    ['#DirectSales', '#WomenInBusiness', '#BlossomBloomSA', '#HealthGoals', '#Transformation'],
    ['#GutCleanse', '#BDrops', '#ShrinkAM', '#ShrinkPM', '#BlossomBloomResults'],
  ],
  products: ['Gut Cleanse', 'B-Drops', 'Shrink AM', 'Shrink PM', 'Detox Tea', 'CraveBlock', 'Lady Bloom Juice', 'King Bloom Juice', 'Collagen Protein Shake'],
}
