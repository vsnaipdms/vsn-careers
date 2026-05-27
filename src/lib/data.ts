import { Career, Course, AITool, BlogPost, FreelancingTopic, SalaryData, Testimonial, FAQ } from "@/types";

export const careers: Career[] = [
  {
    id: "1", slug: "graphic-designer", title: "Graphic Designer", icon: "🎨", color: "#8b3dff",
    description: "Create visual concepts to communicate ideas that inspire, inform, and captivate consumers.",
    overview: "Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for various applications such as advertisements, brochures, magazines, and corporate reports.",
    skillsRequired: ["Typography", "Color Theory", "Layout Design", "Branding", "Adobe Creative Suite", "Visual Communication", "Print Design", "Digital Design"],
    toolsToLearn: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva", "CorelDRAW", "Figma", "Procreate", "Affinity Designer"],
    salaryIndia: "₹3,00,000 - ₹12,00,000 per year",
    salaryAbroad: "$45,000 - $85,000 per year",
    freelancingScope: "Excellent - High demand on Fiverr, Upwork, and Freelancer platforms. Average project ₹5,000 - ₹50,000.",
    remoteJobs: "High - 70% of graphic design jobs offer remote or hybrid options.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Design Principles", "Color Theory", "Typography Basics", "Adobe Photoshop Basics", "Canva"] },
      { level: "Intermediate", topics: ["Adobe Illustrator", "Brand Identity Design", "Logo Design", "Social Media Graphics", "Print Design"] },
      { level: "Advanced", topics: ["Adobe InDesign", "Motion Graphics", "UI/UX Design", "3D Design", "Design Systems"] }
    ],
    futureDemand: "Very High - Expected to grow 3% annually with increasing demand in digital marketing and content creation.",
    aiImpact: "AI tools like Midjourney and DALL-E are enhancing rather than replacing designers. Designers who leverage AI tools will be in higher demand.",
    aiTools: ["Adobe Firefly", "Midjourney", "DALL-E", "Canva AI", "Let's Enhance", "Remove.bg"],
    companiesHiring: ["Google", "Amazon", "Flipkart", "Zomato", "Swiggy", "BYJU'S", "Unacademy", "Publicis"],
    portfolioExamples: ["Behance portfolio", "Dribbble shots", "Personal website", "Instagram portfolio", "LinkedIn showcase"],
    interviewTips: ["Build strong portfolio", "Understand design thinking", "Know Adobe Suite thoroughly", "Show problem-solving", "Stay updated with trends"],
    demandLevel: "high"
  },
  {
    id: "2", slug: "ui-ux-designer", title: "UI/UX Designer", icon: "🖥️", color: "#3b5cff",
    description: "Design intuitive digital experiences that users love. Combine aesthetics with functionality.",
    overview: "UI/UX designers create user-friendly interfaces that enhance user satisfaction. They focus on the overall feel of the product, combining visual design with usability principles to create seamless digital experiences.",
    skillsRequired: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Information Architecture", "Usability Testing", "Design Thinking", "Interaction Design"],
    toolsToLearn: ["Figma", "Adobe XD", "Sketch", "InVision", "Balsamiq", "Axure RP", "Hotjar", "Maze"],
    salaryIndia: "₹5,00,000 - ₹20,00,000 per year",
    salaryAbroad: "$70,000 - $130,000 per year",
    freelancingScope: "Very High - UI/UX projects on Toptal, Upwork range ₹50,000 - ₹5,00,000 per project.",
    remoteJobs: "Very High - 80% of UI/UX roles are remote-friendly.",
    learningRoadmap: [
      { level: "Beginner", topics: ["UX Principles", "User Research Basics", "Wireframing", "Figma Basics", "Design Thinking"] },
      { level: "Intermediate", topics: ["Prototyping", "Usability Testing", "Visual Design", "Design Systems", "Responsive Design"] },
      { level: "Advanced", topics: ["Motion Design", "Design Strategy", "UX Writing", "Accessibility", "Design Operations"] }
    ],
    futureDemand: "Extremely High - 15% growth projected. Critical role in tech industry.",
    aiImpact: "AI assists in user research, A/B testing, and generating design variations. Human empathy and creativity remain irreplaceable.",
    aiTools: ["Uizard", "Galileo AI", "AI Color Tools", "AutoDraw", "Attention Insight"],
    companiesHiring: ["Microsoft", "Apple", "Meta", "Google", "Amazon", "Flipkart", "OYO", "Razorpay"],
    portfolioExamples: ["Case study format", "Interactive prototypes", "Before/after designs", "User research documentation"],
    interviewTips: ["Present case studies", "Show design process", "Discuss UX decisions", "Portfolio walkthrough", "Whiteboard challenges"],
    demandLevel: "high"
  },
  {
    id: "3", slug: "web-designer", title: "Web Designer", icon: "🌐", color: "#08b5d5",
    description: "Design and build beautiful, responsive websites that drive business results.",
    overview: "Web designers plan, create, and code websites and web pages. They combine visual design skills with technical knowledge to create functional and attractive digital experiences.",
    skillsRequired: ["HTML", "CSS", "JavaScript", "Responsive Design", "WordPress", "Visual Design", "UX Principles", "SEO Basics"],
    toolsToLearn: ["VS Code", "Figma", "WordPress", "Elementor", "Bootstrap", "Tailwind CSS", "Chrome DevTools", "Git"],
    salaryIndia: "₹3,50,000 - ₹14,00,000 per year",
    salaryAbroad: "$55,000 - $100,000 per year",
    freelancingScope: "High - Website design projects ₹10,000 - ₹2,00,000. WordPress sites in high demand.",
    remoteJobs: "High - 75% of web design offers remote work options.",
    learningRoadmap: [
      { level: "Beginner", topics: ["HTML5", "CSS3", "Responsive Design", "Bootstrap", "WordPress Basics"] },
      { level: "Intermediate", topics: ["JavaScript", "Tailwind CSS", "Elementor", "PHP Basics", "SEO"] },
      { level: "Advanced", topics: ["React/Next.js", "Full Stack", "Web Animation", "Performance", "E-commerce"] }
    ],
    futureDemand: "Stable - Every business needs a website. Growing with AI-powered web building.",
    aiImpact: "AI website builders make basic sites easy. Professional designers who add custom value are more important than ever.",
    aiTools: ["Wix ADI", "Framer AI", "Durable", "10Web", "Midjourney", "GitHub Copilot"],
    companiesHiring: ["Web development agencies", "Startups", "E-commerce companies", "Digital marketing agencies", "IT services"],
    portfolioExamples: ["Live website showcase", "Responsive design demos", "Before/after redesigns", "Speed optimization results"],
    interviewTips: ["Show live websites", "Explain design decisions", "Demonstrate responsive skills", "Discuss performance", "Share code samples"],
    demandLevel: "high"
  },
  {
    id: "4", slug: "digital-marketer", title: "Digital Marketer", icon: "📱", color: "#3b5cff",
    description: "Drive business growth through strategic digital marketing campaigns across all channels.",
    overview: "Digital marketers promote products and services through digital channels. They create, manage, and optimize marketing campaigns across social media, search engines, email, and websites to reach target audiences.",
    skillsRequired: ["SEO", "SEM", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics", "Strategy", "Copywriting"],
    toolsToLearn: ["Google Analytics", "Google Ads", "Meta Ads", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "Canva"],
    salaryIndia: "₹3,00,000 - ₹18,00,000 per year",
    salaryAbroad: "$50,000 - $120,000 per year",
    freelancingScope: "Very High - Digital marketing freelancers earn ₹20,000 - ₹3,00,000 monthly.",
    remoteJobs: "High - Most digital marketing roles offer remote flexibility.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Digital Marketing Fundamentals", "SEO Basics", "Social Media Marketing", "Content Marketing", "Google Analytics"] },
      { level: "Intermediate", topics: ["Google Ads", "Meta Ads", "Email Marketing", "Marketing Strategy", "Data Analysis"] },
      { level: "Advanced", topics: ["Performance Marketing", "Marketing Automation", "CRO", "Growth Hacking", "Marketing AI"] }
    ],
    futureDemand: "Extremely High - Digital marketing spend expected to reach $800B by 2027.",
    aiImpact: "AI revolutionizes ad targeting, content creation, and analytics. Marketers who master AI tools will lead the industry.",
    aiTools: ["ChatGPT", "Jasper AI", "HubSpot AI", "SEMrush AI", "AdCreative.ai", "Copy.ai"],
    companiesHiring: ["Amazon", "Flipkart", "Nykaa", "Myntra", "Zomato", "Urban Company", "Unacademy", "Publicis"],
    portfolioExamples: ["Campaign results", "ROI case studies", "Content portfolio", "Social media growth"],
    interviewTips: ["Show data-driven results", "Discuss campaign optimization", "Know analytics tools", "Share growth metrics", "Understand AI marketing"],
    demandLevel: "high"
  },
  {
    id: "5", slug: "seo-specialist", title: "SEO Specialist", icon: "🔍", color: "#8b3dff",
    description: "Optimize websites to rank higher on search engines and drive organic traffic.",
    overview: "SEO specialists optimize websites to improve their visibility in search engine results. They conduct keyword research, analyze traffic data, and implement strategies to increase organic search rankings.",
    skillsRequired: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Content Strategy", "SEO Analytics", "HTML/CSS", "Local SEO"],
    toolsToLearn: ["Google Search Console", "Google Analytics", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "Yoast SEO", "Surfer SEO"],
    salaryIndia: "₹3,00,000 - ₹15,00,000 per year",
    salaryAbroad: "$50,000 - $100,000 per year",
    freelancingScope: "High - SEO projects ₹10,000 - ₹1,00,000 monthly retainers common.",
    remoteJobs: "Very High - 90% of SEO roles are remote-friendly.",
    learningRoadmap: [
      { level: "Beginner", topics: ["SEO Fundamentals", "Keyword Research", "On-Page SEO", "Google Analytics", "Search Console"] },
      { level: "Intermediate", topics: ["Technical SEO", "Link Building", "Content Strategy", "Local SEO", "E-commerce SEO"] },
      { level: "Advanced", topics: ["SEO Automation", "International SEO", "AI in SEO", "SEO Strategy", "Enterprise SEO"] }
    ],
    futureDemand: "Very High - SEO is critical for all businesses with online presence.",
    aiImpact: "AI changes search algorithms. SEOs must adapt to AI-powered search and content optimization.",
    aiTools: ["ChatGPT", "Surfer SEO", "Frase.io", "Clearscope", "MarketMuse", "Alli AI"],
    companiesHiring: ["Digital agencies", "E-commerce companies", "Media publications", "SaaS companies", "Consulting firms"],
    portfolioExamples: ["Ranking improvements", "Traffic growth cases", "Technical SEO audits", "Content strategies"],
    interviewTips: ["Show ranking results", "Explain SEO process", "Discuss algorithm updates", "Demonstrate tools", "Share case studies"],
    demandLevel: "high"
  },
  {
    id: "6", slug: "performance-marketer", title: "Performance Marketer", icon: "📊", color: "#5f7eff",
    description: "Drive measurable results through data-driven paid advertising campaigns.",
    overview: "Performance marketers focus on driving measurable actions through paid advertising channels. They optimize campaigns for specific KPIs like clicks, conversions, and revenue using data-driven strategies.",
    skillsRequired: ["Paid Ads", "PPC", "Conversion Tracking", "A/B Testing", "Data Analysis", "Budget Management", "Landing Page Optimization", "Attribution Modeling"],
    toolsToLearn: ["Google Ads", "Meta Ads Manager", "Google Analytics", "GTM", "AdEspresso", "Optimizely", "Klaviyo", "Shopify Analytics"],
    salaryIndia: "₹5,00,000 - ₹25,00,000 per year",
    salaryAbroad: "$65,000 - $140,000 per year",
    freelancingScope: "Very High - Performance marketers charge ₹50,000 - ₹5,00,000 monthly retainers.",
    remoteJobs: "High - 70% of performance marketing roles offer remote options.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Digital Marketing Fundamentals", "Google Ads Basics", "Meta Ads Basics", "Analytics Setup", "Conversion Tracking"] },
      { level: "Intermediate", topics: ["Campaign Optimization", "A/B Testing", "Retargeting", "Shopping Ads", "Lead Generation"] },
      { level: "Advanced", topics: ["Programmatic Advertising", "AI Optimization", "Multi-Channel Attribution", "CRO", "Growth Strategy"] }
    ],
    futureDemand: "Very High - Performance marketing is the most measurable form of marketing.",
    aiImpact: "AI automates bid management, ad creative testing, and audience targeting. Performance marketers who leverage AI will outperform competitors.",
    aiTools: ["AdCreative.ai", "Albert AI", "Pattern89", "Pencil", "Madgicx", "Omneky"],
    companiesHiring: ["Amazon", "Flipkart", "Myntra", "Zomato", "Swiggy", "Razorpay", "CRED", "Direct-to-consumer brands"],
    portfolioExamples: ["ROI case studies", "Campaign performance dashboards", "A/B testing results", "Scale stories"],
    interviewTips: ["Show revenue impact", "Discuss optimization methods", "Share efficiency gains", "Demonstrate analytics", "Know attribution models"],
    demandLevel: "high"
  },
  {
    id: "7", slug: "content-creator", title: "Content Creator", icon: "✍️", color: "#08b5d5",
    description: "Create engaging content that connects with audiences and drives brand growth.",
    overview: "Content creators develop engaging material for digital platforms. They write, design, and produce content across formats including blog posts, videos, social media, and podcasts to engage target audiences.",
    skillsRequired: ["Writing", "Copywriting", "SEO Writing", "Video Production", "Social Media", "Storytelling", "Research", "Editing"],
    toolsToLearn: ["Canva", "ChatGPT", "CapCut", "Adobe Premiere Pro", "Notion", "Grammarly", "BuzzSumo", "Animoto"],
    salaryIndia: "₹2,50,000 - ₹15,00,000 per year",
    salaryAbroad: "$45,000 - $100,000 per year",
    freelancingScope: "Very High - Content creators earn ₹5,000 - ₹1,00,000 per project.",
    remoteJobs: "Very High - 90% of content creation is location-independent.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Content Writing", "Blogging Basics", "Social Media Content", "Canva Design", "SEO Writing"] },
      { level: "Intermediate", topics: ["Video Creation", "Copywriting", "Content Strategy", "YouTube", "Podcasting"] },
      { level: "Advanced", topics: ["Content Monetization", "Brand Strategy", "AI Content", "Multi-Platform Growth", "Content Analytics"] }
    ],
    futureDemand: "Very High - Content marketing drives 3x more leads than outbound marketing.",
    aiImpact: "AI assists content creation but human creativity, voice, and authenticity remain essential.",
    aiTools: ["ChatGPT", "Jasper", "Claude", "Canva AI", "Descript", "Runway ML"],
    companiesHiring: ["Media companies", "Digital agencies", "Startups", "E-commerce brands", "SaaS companies"],
    portfolioExamples: ["Blog portfolio", "Social media profiles", "Video portfolio", "Brand collaborations"],
    interviewTips: ["Show engagement metrics", "Share content strategy", "Demonstrate versatility", "Discuss brand voice", "Show growth results"],
    demandLevel: "high"
  },
  {
    id: "8", slug: "ai-content-strategist", title: "AI Content Strategist", icon: "🤖", color: "#3b5cff",
    description: "Leverage AI tools to create powerful content strategies that scale.",
    overview: "AI Content Strategists use artificial intelligence tools to plan, create, and optimize content at scale. They combine traditional content strategy with AI-powered tools to produce more effective content faster.",
    skillsRequired: ["AI Tools", "Content Strategy", "Prompt Engineering", "SEO", "Data Analysis", "Content Planning", "Brand Strategy", "Analytics"],
    toolsToLearn: ["ChatGPT", "Claude", "Midjourney", "Jasper AI", "Frase.io", "Surfer SEO", "Notion AI", "Copy.ai"],
    salaryIndia: "₹5,00,000 - ₹20,00,000 per year",
    salaryAbroad: "$70,000 - $140,000 per year",
    freelancingScope: "High - Emerging field with high-ticket projects ₹50,000 - ₹3,00,000.",
    remoteJobs: "Very High - 95% of AI strategy roles are remote.",
    learningRoadmap: [
      { level: "Beginner", topics: ["AI Fundamentals", "ChatGPT Basics", "Prompt Engineering", "Content Strategy", "SEO Basics"] },
      { level: "Intermediate", topics: ["AI Content Creation", "Midjourney", "Content Automation", "Analytics", "Distribution Strategy"] },
      { level: "Advanced", topics: ["AI Strategy", "Custom AI Workflows", "Content ROI", "Team Leadership", "Innovation"] }
    ],
    futureDemand: "Explosive - One of the fastest-growing roles in marketing.",
    aiImpact: "This IS the AI impact role. AI content strategists are at the forefront of the content revolution.",
    aiTools: ["ChatGPT", "Claude", "Midjourney", "Jasper", "Frase", "Surfer SEO", "MarketMuse", "Writer.com"],
    companiesHiring: ["Tech companies", "Digital agencies", "SaaS startups", "Media companies", "Enterprise brands"],
    portfolioExamples: ["AI workflow documentation", "Content performance dashboards", "Strategy presentations", "AI tool implementations"],
    interviewTips: ["Show AI expertise", "Demonstrate prompt engineering", "Share efficiency gains", "Discuss content results", "Show strategic thinking"],
    demandLevel: "high"
  },
  {
    id: "9", slug: "social-media-manager", title: "Social Media Manager", icon: "📱", color: "#8b3dff",
    description: "Build brand presence and engagement across social media platforms.",
    overview: "Social media managers create and manage content across social platforms. They develop strategies to increase engagement, build communities, and drive brand awareness through social channels.",
    skillsRequired: ["Social Media Strategy", "Content Creation", "Community Management", "Analytics", "Advertising", "Copywriting", "Video Editing", "Trend Awareness"],
    toolsToLearn: ["Meta Business Suite", "Hootsuite", "Buffer", "Canva", "CapCut", "Later", "Sprout Social", "Brand24"],
    salaryIndia: "₹3,00,000 - ₹14,00,000 per year",
    salaryAbroad: "$50,000 - $95,000 per year",
    freelancingScope: "High - Social media management ₹15,000 - ₹1,50,000 monthly retainers.",
    remoteJobs: "High - 75% of social media roles offer remote options.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Platform Fundamentals", "Content Creation", "Canva", "Scheduling Tools", "Analytics Basics"] },
      { level: "Intermediate", topics: ["Strategy Development", "Paid Social", "Community Management", "Video Content", "Influencer Marketing"] },
      { level: "Advanced", topics: ["Social Commerce", "Crisis Management", "Brand Strategy", "Team Management", "Growth Strategy"] }
    ],
    futureDemand: "High - Social media ad spend projected to reach $300B by 2027.",
    aiImpact: "AI tools automate posting schedules, content generation, and performance analysis. Human connection remains key.",
    aiTools: ["ChatGPT", "Canva AI", "Lately AI", "Ocoya", "ContentStudio", "FeedHive"],
    companiesHiring: ["Brands", "Digital agencies", "E-commerce", "D2C brands", "Media companies"],
    portfolioExamples: ["Growth metrics", "Campaign showcases", "Content examples", "Community milestones"],
    interviewTips: ["Show growth numbers", "Discuss platform expertise", "Share creative campaigns", "Demonstrate analytics", "Know trends"],
    demandLevel: "high"
  },
  {
    id: "10", slug: "freelancer", title: "Freelancer", icon: "💼", color: "#5f7eff",
    description: "Build a thriving independent career offering digital services globally.",
    overview: "Digital freelancers offer specialized skills on a project basis through online platforms. They enjoy location independence, flexible schedules, and the ability to earn in international currencies.",
    skillsRequired: ["Skill Expertise", "Client Communication", "Proposal Writing", "Time Management", "Self-Marketing", "Financial Management", "Negotiation", "Brand Building"],
    toolsToLearn: ["Fiverr", "Upwork", "Freelancer", "LinkedIn", "Notion", "Trello", "Zoom", "PayPal"],
    salaryIndia: "₹3,00,000 - ₹30,00,000 per year",
    salaryAbroad: "Varies - Top freelancers earn $100k+ annually",
    freelancingScope: "Primary - Full freelancing ecosystem with unlimited potential.",
    remoteJobs: "100% - Freelancing is inherently remote.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Platform Setup", "Profile Optimization", "Proposal Writing", "Basic Skills", "First Project"] },
      { level: "Intermediate", topics: ["Pricing Strategy", "Client Management", "Portfolio Building", "Niche Selection", "Brand Building"] },
      { level: "Advanced", topics: ["Agency Building", "Passive Income", "Team Management", "Multiple Income Streams", "Global Clientele"] }
    ],
    futureDemand: "Very High - 50% of US workforce expected to be freelance by 2030.",
    aiImpact: "AI creates new freelancing opportunities while automating some tasks. Freelancers who adopt AI will thrive.",
    aiTools: ["ChatGPT", "Midjourney", "Notion AI", "Otter.ai", "Grammarly", "Calendly"],
    companiesHiring: ["Startups", "Small businesses", "Agencies", "Enterprise companies", "E-commerce brands"],
    portfolioExamples: ["Online portfolio website", "Case studies", "Client testimonials", "Platform ratings"],
    interviewTips: ["Show consistent work", "Highlight results", "Discuss client satisfaction", "Demonstrate reliability", "Share growth story"],
    demandLevel: "high"
  },
  {
    id: "11", slug: "motion-graphics-designer", title: "Motion Graphics Designer", icon: "🎬", color: "#08b5d5",
    description: "Create compelling animated visuals for videos, ads, and digital media.",
    overview: "Motion graphics designers create animated visual content for various media including advertisements, films, television, and digital platforms. They combine graphic design principles with animation techniques.",
    skillsRequired: ["Animation", "Typography", "Visual Effects", "Storyboarding", "3D Basics", "Composition", "Timing", "Color Theory"],
    toolsToLearn: ["Adobe After Effects", "Adobe Premiere Pro", "Cinema 4D", "Blender", "DaVinci Resolve", "Motion", "LottieFiles", "Rive"],
    salaryIndia: "₹4,00,000 - ₹18,00,000 per year",
    salaryAbroad: "$60,000 - $120,000 per year",
    freelancingScope: "Very High - Motion projects ₹10,000 - ₹2,00,000 per project.",
    remoteJobs: "High - 70% of motion design roles offer remote work.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Animation Principles", "After Effects Basics", "Keyframes", "Shape Layers", "Text Animation"] },
      { level: "Intermediate", topics: ["Character Animation", "Visual Effects", "3D Integration", "Expressions", "Templates"] },
      { level: "Advanced", topics: ["Cinema 4D", "Advanced Compositing", "Pipeline Management", "Creative Direction", "Studio Work"] }
    ],
    futureDemand: "High - Video content demand growing 50% year over year.",
    aiImpact: "AI tools assist with rotoscoping, upscaling, and basic animations. Complex creative work still requires human artists.",
    aiTools: ["Runway ML", "Adobe Sensei", "Topaz Labs", "DeepMotion", "Rive"],
    companiesHiring: ["Media companies", "Ad agencies", "Film studios", "Tech companies", "Gaming studios"],
    portfolioExamples: ["Showreel", "Project breakdowns", "Process work", "Style exploration"],
    interviewTips: ["Strong showreel", "Explain creative process", "Show technical skills", "Discuss project roles", "Share inspirations"],
    demandLevel: "high"
  },
  {
    id: "12", slug: "wordpress-designer", title: "WordPress Designer", icon: "🔵", color: "#3b5cff",
    description: "Build professional websites using WordPress with custom design and functionality.",
    overview: "WordPress designers create and customize websites using the WordPress platform. They combine design skills with WordPress expertise to build professional, functional websites for businesses and individuals.",
    skillsRequired: ["WordPress", "PHP Basics", "HTML/CSS", "Elementor", "Theme Customization", "Plugin Management", "SEO", "Responsive Design"],
    toolsToLearn: ["WordPress", "Elementor", "Divi", "WooCommerce", "Yoast SEO", "ACF", "WP Rocket", "GeneratePress"],
    salaryIndia: "₹3,00,000 - ₹12,00,000 per year",
    salaryAbroad: "$45,000 - $85,000 per year",
    freelancingScope: "High - WordPress sites ₹15,000 - ₹2,00,000 per project.",
    remoteJobs: "High - 80% of WordPress work is remote-friendly.",
    learningRoadmap: [
      { level: "Beginner", topics: ["WordPress Installation", "Dashboard Overview", "Themes", "Pages & Posts", "Media Management"] },
      { level: "Intermediate", topics: ["Elementor", "Custom Post Types", "WooCommerce", "SEO Setup", "Child Themes"] },
      { level: "Advanced", topics: ["Custom Theme Development", "Plugin Development", "Performance Optimization", "Security", "Multisite"] }
    ],
    futureDemand: "Stable - WordPress powers 43% of all websites worldwide.",
    aiImpact: "AI website builders are emerging but WordPress's flexibility keeps it dominant for custom websites.",
    aiTools: ["ChatGPT", "Elementor AI", "AIOSEO", "Jetpack AI", "Tidio AI"],
    companiesHiring: ["Web agencies", "Digital marketing firms", "E-commerce", "Blogs", "Small businesses"],
    portfolioExamples: ["Live websites built", "Custom features", "Speed optimizations", "E-commerce stores"],
    interviewTips: ["Show live websites", "Discuss custom work", "Explain problem-solving", "Share performance metrics", "Know WordPress ecosystem"],
    demandLevel: "medium"
  },
  {
    id: "13", slug: "branding-specialist", title: "Branding Specialist", icon: "⭐", color: "#8b3dff",
    description: "Build powerful brand identities that resonate with target audiences.",
    overview: "Branding specialists develop and manage brand identities. They create brand strategies, visual identities, and brand guidelines that communicate a company's values and personality to its audience.",
    skillsRequired: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Market Research", "Typography", "Color Psychology", "Storytelling"],
    toolsToLearn: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva", "BrandBoard", "Frontify", "Miro", "Notion"],
    salaryIndia: "₹4,00,000 - ₹18,00,000 per year",
    salaryAbroad: "$60,000 - $120,000 per year",
    freelancingScope: "High - Brand identity projects ₹25,000 - ₹3,00,000.",
    remoteJobs: "High - 70% of branding work can be done remotely.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Branding Fundamentals", "Logo Design", "Color Theory", "Typography", "Visual Identity Basics"] },
      { level: "Intermediate", topics: ["Brand Strategy", "Brand Guidelines", "Packaging Design", "Brand Communication", "Market Research"] },
      { level: "Advanced", topics: ["Brand Architecture", "Rebranding", "Brand Experience", "Global Branding", "Brand Management"] }
    ],
    futureDemand: "High - Branding becomes more important as markets get more competitive.",
    aiImpact: "AI generates logo options and brand assets. Strategic branding and creative direction remain human-led.",
    aiTools: ["Looka", "Midjourney", "DALL-E", "Brandmark", "Hue Snap", "Coolors"],
    companiesHiring: ["Branding agencies", "Design studios", "Corporate marketing", "Startups", "Consulting firms"],
    portfolioExamples: ["Brand identity projects", "Case studies", "Before/after rebranding", "Brand guideline samples"],
    interviewTips: ["Show brand thinking", "Discuss strategy", "Present complete identities", "Explain design choices", "Demonstrate research"],
    demandLevel: "high"
  },
  {
    id: "14", slug: "ai-designer", title: "AI Designer", icon: "✨", color: "#5f7eff",
    description: "Use AI tools to create stunning designs faster and more efficiently.",
    overview: "AI designers leverage artificial intelligence tools to enhance their design workflow. They use AI for ideation, asset generation, design automation, and creative exploration while maintaining human creative direction.",
    skillsRequired: ["AI Tools Proficiency", "Prompt Engineering", "Design Fundamentals", "Creative Direction", "Tool Integration", "Workflow Automation", "Quality Control", "Innovation"],
    toolsToLearn: ["Midjourney", "DALL-E 3", "Adobe Firefly", "Stable Diffusion", "Runway ML", "Canva AI", "Leonardo AI", "Clipdrop"],
    salaryIndia: "₹5,00,000 - ₹25,00,000 per year",
    salaryAbroad: "$70,000 - $150,000 per year",
    freelancingScope: "Very High - AI design services ₹10,000 - ₹1,00,000 per project.",
    remoteJobs: "Very High - 90% of AI design roles are remote.",
    learningRoadmap: [
      { level: "Beginner", topics: ["AI Fundamentals", "Midjourney Basics", "Prompt Writing", "DALL-E", "Canva AI"] },
      { level: "Intermediate", topics: ["Stable Diffusion", "Advanced Prompts", "AI Workflow", "Image Editing AI", "Consistency"] },
      { level: "Advanced", topics: ["Custom AI Models", "API Integration", "AI Pipeline", "Creative Direction", "Innovation"] }
    ],
    futureDemand: "Explosive - AI design is the fastest growing creative skill.",
    aiImpact: "This IS the AI design role - at the intersection of creativity and artificial intelligence.",
    aiTools: ["Midjourney", "DALL-E 3", "Adobe Firefly", "Stable Diffusion", "Runway", "Leonardo AI", "Krea AI", "Magnific AI"],
    companiesHiring: ["Tech companies", "Design agencies", "AI startups", "Media companies", "Enterprise innovation labs"],
    portfolioExamples: ["AI-generated portfolios", "Prompt libraries", "Before/after AI workflows", "Creative AI projects"],
    interviewTips: ["Show AI expertise", "Demonstrate quality control", "Discuss workflow efficiency", "Share creative AI projects", "Know limitations"],
    demandLevel: "high"
  },
  {
    id: "15", slug: "google-ads-expert", title: "Google Ads Expert", icon: "📈", color: "#3b5cff",
    description: "Master Google's advertising platform to drive targeted traffic and conversions.",
    overview: "Google Ads experts create and optimize paid search campaigns. They manage budgets, conduct keyword research, write ad copy, and analyze performance data to maximize ROI for businesses.",
    skillsRequired: ["Keyword Research", "Campaign Structure", "Bid Management", "Quality Score", "Ad Copywriting", "Landing Page Optimization", "Conversion Tracking", "Performance Analysis"],
    toolsToLearn: ["Google Ads", "Google Analytics", "Google Tag Manager", "Keyword Planner", "SEMrush", "Optmyzr", "AdEspresso", "Looker Studio"],
    salaryIndia: "₹4,00,000 - ₹20,00,000 per year",
    salaryAbroad: "$60,000 - $130,000 per year",
    freelancingScope: "Very High - Google Ads management ₹30,000 - ₹3,00,000 monthly.",
    remoteJobs: "High - 80% of PPC roles offer remote work.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Google Ads Fundamentals", "Account Structure", "Keyword Research", "Ad Creation", "Campaign Setup"] },
      { level: "Intermediate", topics: ["Bid Optimization", "Quality Score", "A/B Testing", "Shopping Ads", "Display Network"] },
      { level: "Advanced", topics: ["Automation", "Scripts", "Enterprise Management", "Multi-Channel", "AI Optimization"] }
    ],
    futureDemand: "Very High - Google Ads generates $200B+ in annual revenue.",
    aiImpact: "AI automates bidding and targeting. Expert strategists who understand AI optimization will be most valuable.",
    aiTools: ["Optmyzr", "Albert AI", "AdCreative.ai", "Pencil", "Google AI Ads", "Madgicx"],
    companiesHiring: ["Digital agencies", "E-commerce", "SaaS", "Lead generation companies", "Enterprise brands"],
    portfolioExamples: ["ROI case studies", "Account growth stories", "Efficiency improvements", "Campaign launches"],
    interviewTips: ["Show performance metrics", "Discuss optimization strategies", "Share scale achievements", "Demonstrate tool expertise", "Know Google ecosystem"],
    demandLevel: "high"
  },
  {
    id: "16", slug: "meta-ads-specialist", title: "Meta Ads Specialist", icon: "📘", color: "#08b5d5",
    description: "Create high-converting Facebook and Instagram ad campaigns.",
    overview: "Meta Ads specialists create and optimize advertising campaigns across Facebook, Instagram, and Messenger. They master audience targeting, creative testing, and campaign optimization to drive business results.",
    skillsRequired: ["Meta Ads Manager", "Audience Targeting", "Creative Strategy", "A/B Testing", "Pixel Setup", "Analytics", "Retargeting", "Budget Management"],
    toolsToLearn: ["Meta Ads Manager", "Meta Business Suite", "Facebook Pixel", "Canva", "AdEspresso", "Madgicx", "ManyChat", "Shopify"],
    salaryIndia: "₹4,00,000 - ₹20,00,000 per year",
    salaryAbroad: "$55,000 - $120,000 per year",
    freelancingScope: "Very High - Meta ads management ₹25,000 - ₹2,50,000 monthly.",
    remoteJobs: "High - 75% of Meta ads roles are remote-friendly.",
    learningRoadmap: [
      { level: "Beginner", topics: ["Meta Platforms Overview", "Ads Manager Basics", "Audience Setup", "Ad Creation", "Pixel Installation"] },
      { level: "Intermediate", topics: ["Campaign Optimization", "Creative Testing", "Retargeting", "Lookalike Audiences", "Conversion Tracking"] },
      { level: "Advanced", topics: ["Scaling Strategies", "Multi-Platform", "Automation", "Advanced Analytics", "Team Management"] }
    ],
    futureDemand: "Very High - Meta platforms critical for D2C and e-commerce.",
    aiImpact: "AI powers Meta's Advantage+ and automated creative optimization. Specialists who leverage AI will achieve superior results.",
    aiTools: ["Madgicx", "AdCreative.ai", "Pencil", "Omneky", "Creative AI", "Shubert"],
    companiesHiring: ["E-commerce brands", "D2C companies", "Digital agencies", "Lead gen businesses", "Startups"],
    portfolioExamples: ["Scale stories", "ROI improvements", "Creative testing results", "E-commerce growth"],
    interviewTips: ["Show revenue impact", "Discuss scaling strategies", "Share creative insights", "Demonstrate pixel expertise", "Know Meta ecosystem"],
    demandLevel: "high"
  }
];

export const courses: Course[] = [
  {
    id: "c1", slug: "photoshop", title: "Adobe Photoshop", subtitle: "Master Digital Image Editing & Design", icon: "🖼️", color: "#31A8FF",
    category: "design", description: "Learn professional photo editing, digital painting, and graphic design using Photoshop.",
    duration: "8 weeks", level: "Beginner to Advanced", lessons: 24, projects: 6,
    salaryOpportunities: ["Graphic Designer: ₹3-12 LPA", "Photo Editor: ₹2.5-8 LPA", "Digital Artist: ₹3-15 LPA", "UI Designer: ₹5-20 LPA"],
    careerOutcomes: ["Graphic Designer", "Photo Editor", "Digital Artist", "UI Designer", "Social Media Designer"],
    roadmap: [
      { title: "Basics", topics: ["Interface Overview", "Selections & Masks", "Layers & Groups", "Basic Adjustments", "File Formats"] },
      { title: "Intermediate", topics: ["Advanced Masking", "Blending Modes", "Filters & Effects", "Color Grading", "Text & Typography"] },
      { title: "Advanced", topics: ["Photo Manipulation", "Digital Painting", "Batch Processing", "Actions & Automation", "Professional Workflow"] }
    ],
    certification: true
  },
  {
    id: "c2", slug: "canva", title: "Canva", subtitle: "Design Like a Pro with Canva", icon: "🌈", color: "#8b3dff",
    category: "design", description: "Master Canva to create stunning social media graphics, presentations, and brand materials.",
    duration: "4 weeks", level: "All Levels", lessons: 12, projects: 8,
    salaryOpportunities: ["Social Media Designer: ₹2.5-8 LPA", "Content Creator: ₹2.5-15 LPA", "Brand Designer: ₹3-12 LPA"],
    careerOutcomes: ["Graphic Designer", "Social Media Manager", "Content Creator", "Brand Designer"],
    roadmap: [
      { title: "Canva Basics", topics: ["Interface Tour", "Templates", "Text & Fonts", "Elements & Photos", "Color Palette"] },
      { title: "Advanced Design", topics: ["Brand Kit", "Animation", "Video Editing", "Collaboration", "Presentations"] },
      { title: "Professional", topics: ["Canva AI", "Content Planner", "Print Design", "Design Systems", "Client Work"] }
    ],
    certification: true
  },
  {
    id: "c3", slug: "illustrator", title: "Adobe Illustrator", subtitle: "Professional Vector Graphics & Illustration", icon: "✒️", color: "#FF9A00",
    category: "design", description: "Create professional vector graphics, logos, illustrations, and brand identities.",
    duration: "8 weeks", level: "Beginner to Advanced", lessons: 20, projects: 5,
    salaryOpportunities: ["Graphic Designer: ₹3-12 LPA", "Illustrator: ₹3-15 LPA", "Brand Designer: ₹4-18 LPA", "Logo Designer: ₹3-12 LPA"],
    careerOutcomes: ["Graphic Designer", "Illustrator", "Brand Designer", "Logo Designer", "Packaging Designer"],
    roadmap: [
      { title: "Foundations", topics: ["Vector Basics", "Pen Tool", "Shapes & Paths", "Color & Swatches", "Typography"] },
      { title: "Advanced Techniques", topics: ["Gradients & Patterns", "Brushes & Symbols", "3D Effects", "Graphs & Charts", "Tracing"] },
      { title: "Professional", topics: ["Brand Identity", "Packaging Design", "Infographics", "Print Production", "Portfolio Building"] }
    ],
    certification: true
  },
  {
    id: "c4", slug: "figma", title: "Figma", subtitle: "Modern UI/UX Design & Prototyping", icon: "🎨", color: "#3b5cff",
    category: "design", description: "Master Figma for UI/UX design, prototyping, and design systems.",
    duration: "8 weeks", level: "Beginner to Advanced", lessons: 20, projects: 6,
    salaryOpportunities: ["UI/UX Designer: ₹5-20 LPA", "Product Designer: ₹8-30 LPA", "Web Designer: ₹3.5-14 LPA"],
    careerOutcomes: ["UI/UX Designer", "Product Designer", "Web Designer", "Design System Manager"],
    roadmap: [
      { title: "Figma Basics", topics: ["Interface", "Tools Overview", "Shapes & Vectors", "Text & Images", "Frames & Groups"] },
      { title: "Interactive Design", topics: ["Components", "Auto Layout", "Prototyping", "Variants", "Design Systems"] },
      { title: "Advanced", topics: ["Collaboration", "Plugins", "Handoff", "Animation", "Team Libraries"] }
    ],
    certification: true
  },
  {
    id: "c5", slug: "html-css", title: "HTML & CSS", subtitle: "Build Beautiful Websites from Scratch", icon: "🌐", color: "#E44D26",
    category: "development", description: "Learn modern HTML5 and CSS3 to build responsive, beautiful websites.",
    duration: "6 weeks", level: "Beginner to Intermediate", lessons: 18, projects: 5,
    salaryOpportunities: ["Web Designer: ₹3.5-14 LPA", "Frontend Developer: ₹4-20 LPA", "WordPress Developer: ₹3-12 LPA"],
    careerOutcomes: ["Web Designer", "Frontend Developer", "WordPress Developer", "Email Designer"],
    roadmap: [
      { title: "HTML5", topics: ["Document Structure", "Elements & Tags", "Forms & Inputs", "Semantic HTML", "Accessibility"] },
      { title: "CSS3", topics: ["Selectors", "Box Model", "Flexbox", "Grid", "Responsive Design"] },
      { title: "Advanced CSS", topics: ["Animations", "Transitions", "Custom Properties", "Pseudo-Classes", "Preprocessors"] }
    ],
    certification: true
  },
  {
    id: "c6", slug: "bootstrap", title: "Bootstrap", subtitle: "Rapid Website Development with Bootstrap", icon: "🔵", color: "#7952B3",
    category: "development", description: "Build responsive, mobile-first websites quickly using Bootstrap framework.",
    duration: "4 weeks", level: "Beginner to Intermediate", lessons: 12, projects: 4,
    salaryOpportunities: ["Web Developer: ₹3.5-14 LPA", "Frontend Developer: ₹4-20 LPA"],
    careerOutcomes: ["Web Developer", "Frontend Developer", "UI Developer"],
    roadmap: [
      { title: "Bootstrap Basics", topics: ["Setup & Grid", "Typography", "Components", "Utilities", "Forms"] },
      { title: "Advanced", topics: ["Customization", "Theming", "JavaScript Plugins", "Sass Integration", "Build Tools"] }
    ],
    certification: true
  },
  {
    id: "c7", slug: "wordpress", title: "WordPress", subtitle: "Build Professional Websites with WordPress", icon: "🔵", color: "#21759B",
    category: "development", description: "Master WordPress from setup to custom theme and plugin development.",
    duration: "8 weeks", level: "Beginner to Advanced", lessons: 20, projects: 5,
    salaryOpportunities: ["WordPress Designer: ₹3-12 LPA", "Web Developer: ₹3.5-14 LPA", "WordPress Developer: ₹4-15 LPA"],
    careerOutcomes: ["WordPress Designer", "Web Developer", "WordPress Developer", "E-commerce Specialist"],
    roadmap: [
      { title: "WordPress Basics", topics: ["Installation", "Dashboard", "Themes", "Pages & Posts", "Media"] },
      { title: "Intermediate", topics: ["Elementor", "Custom Post Types", "WooCommerce", "SEO", "Performance"] },
      { title: "Advanced", topics: ["Custom Themes", "Plugin Development", "REST API", "Security", "Multisite"] }
    ],
    certification: true
  },
  {
    id: "c8", slug: "seo", title: "SEO", subtitle: "Master Search Engine Optimization", icon: "🔍", color: "#8b3dff",
    category: "marketing", description: "Learn complete SEO - from keyword research to technical optimization.",
    duration: "6 weeks", level: "Beginner to Advanced", lessons: 16, projects: 4,
    salaryOpportunities: ["SEO Specialist: ₹3-15 LPA", "Digital Marketer: ₹3-18 LPA", "SEO Manager: ₹6-20 LPA"],
    careerOutcomes: ["SEO Specialist", "Digital Marketer", "Content Strategist", "SEO Manager"],
    roadmap: [
      { title: "SEO Fundamentals", topics: ["How Search Works", "Keyword Research", "On-Page SEO", "Content Optimization", "Google Analytics"] },
      { title: "Technical SEO", topics: ["Site Structure", "Schema Markup", "Page Speed", "Mobile SEO", "Core Web Vitals"] },
      { title: "Advanced SEO", topics: ["Link Building", "Local SEO", "E-commerce SEO", "International SEO", "SEO Strategy"] }
    ],
    certification: true
  },
  {
    id: "c9", slug: "google-ads", title: "Google Ads", subtitle: "Master Paid Search Advertising", icon: "📈", color: "#4285F4",
    category: "marketing", description: "Create and optimize high-converting Google Ads campaigns.",
    duration: "6 weeks", level: "Beginner to Advanced", lessons: 18, projects: 5,
    salaryOpportunities: ["PPC Specialist: ₹4-15 LPA", "Performance Marketer: ₹5-25 LPA", "Google Ads Expert: ₹5-20 LPA"],
    careerOutcomes: ["PPC Specialist", "Performance Marketer", "Google Ads Expert", "Digital Marketing Manager"],
    roadmap: [
      { title: "Google Ads Basics", topics: ["Account Setup", "Campaign Types", "Keyword Research", "Ad Creation", "Quality Score"] },
      { title: "Optimization", topics: ["Bid Strategies", "A/B Testing", "Shopping Ads", "Display Network", "Remarketing"] },
      { title: "Advanced", topics: ["Automation", "Scripts", "Analytics", "Multi-Channel", "Enterprise Management"] }
    ],
    certification: true
  },
  {
    id: "c10", slug: "meta-ads", title: "Meta Ads", subtitle: "Facebook & Instagram Advertising Mastery", icon: "📘", color: "#08b5d5",
    category: "marketing", description: "Create high-performing Facebook and Instagram ad campaigns.",
    duration: "6 weeks", level: "Beginner to Advanced", lessons: 16, projects: 5,
    salaryOpportunities: ["Meta Ads Specialist: ₹4-20 LPA", "Performance Marketer: ₹5-25 LPA", "Social Media Manager: ₹3-14 LPA"],
    careerOutcomes: ["Meta Ads Specialist", "Performance Marketer", "Social Media Manager", "D2C Marketing Manager"],
    roadmap: [
      { title: "Meta Ads Basics", topics: ["Ads Manager Overview", "Campaign Setup", "Audience Targeting", "Ad Creation", "Pixel Setup"] },
      { title: "Optimization", topics: ["Creative Testing", "Retargeting", "Lookalike Audiences", "Budget Management", "Analytics"] },
      { title: "Advanced", topics: ["Scaling", "Advantage+", "Automation", "Multi-Platform", "Team Management"] }
    ],
    certification: true
  },
  {
    id: "c11", slug: "social-media-marketing", title: "Social Media Marketing", subtitle: "Build Brands on Social Media", icon: "📱", color: "#E4405F",
    category: "marketing", description: "Master organic and paid social media marketing across all platforms.",
    duration: "6 weeks", level: "Beginner to Advanced", lessons: 16, projects: 5,
    salaryOpportunities: ["Social Media Manager: ₹3-14 LPA", "Digital Marketer: ₹3-18 LPA", "Content Strategist: ₹4-15 LPA"],
    careerOutcomes: ["Social Media Manager", "Digital Marketer", "Content Strategist", "Brand Manager"],
    roadmap: [
      { title: "Social Media Foundations", topics: ["Platform Strategy", "Content Planning", "Profile Optimization", "Content Types", "Analytics"] },
      { title: "Advanced Strategy", topics: ["Paid Social", "Influencer Marketing", "Community Management", "Crisis Management", "Reporting"] },
      { title: "Professional", topics: ["Social Commerce", "Brand Building", "Team Leadership", "Strategy Development", "ROI Measurement"] }
    ],
    certification: true
  },
  {
    id: "c12", slug: "ai-tools", title: "AI Tools", subtitle: "Master AI for Career & Business Growth", icon: "🤖", color: "#3b5cff",
    category: "ai", description: "Learn to use ChatGPT, Midjourney, and other AI tools professionally.",
    duration: "6 weeks", level: "All Levels", lessons: 18, projects: 6,
    salaryOpportunities: ["AI Content Strategist: ₹5-20 LPA", "AI Designer: ₹5-25 LPA", "AI Specialist: ₹6-30 LPA"],
    careerOutcomes: ["AI Content Strategist", "AI Designer", "AI Specialist", "Prompt Engineer", "Innovation Lead"],
    roadmap: [
      { title: "AI Fundamentals", topics: ["AI Overview", "ChatGPT Basics", "Prompt Engineering", "AI Ethics", "Tool Ecosystem"] },
      { title: "AI Applications", topics: ["Midjourney", "Claude", "AI for Design", "AI for Marketing", "AI for Development"] },
      { title: "Advanced AI", topics: ["AI Workflows", "Automation", "Custom GPTs", "AI Strategy", "Future Trends"] }
    ],
    certification: true
  },
  {
    id: "c13", slug: "chatgpt", title: "ChatGPT", subtitle: "Master ChatGPT for Work & Creativity", icon: "💬", color: "#10A37F",
    category: "ai", description: "Master prompt engineering and ChatGPT for professional and creative applications.",
    duration: "4 weeks", level: "All Levels", lessons: 12, projects: 4,
    salaryOpportunities: ["AI Content Strategist: ₹5-20 LPA", "Prompt Engineer: ₹6-25 LPA", "AI Specialist: ₹6-30 LPA"],
    careerOutcomes: ["AI Content Strategist", "Prompt Engineer", "AI Specialist", "Productivity Consultant"],
    roadmap: [
      { title: "ChatGPT Basics", topics: ["Interface", "Conversation Flow", "Prompting Basics", "Use Cases", "Limitations"] },
      { title: "Advanced Prompting", topics: ["Role Prompting", "Chain of Thought", "Few-Shot Learning", "Persona Creation", "Complex Tasks"] },
      { title: "Professional", topics: ["GPTs", "API Integration", "Workflow Automation", "Business Applications", "Ethical AI"] }
    ],
    certification: true
  },
  {
    id: "c14", slug: "midjourney", title: "Midjourney", subtitle: "AI-Powered Creative Design", icon: "✨", color: "#8b3dff",
    category: "ai", description: "Create stunning AI-generated art and designs with Midjourney.",
    duration: "4 weeks", level: "All Levels", lessons: 10, projects: 5,
    salaryOpportunities: ["AI Designer: ₹5-25 LPA", "Creative Director: ₹8-30 LPA", "Content Creator: ₹2.5-15 LPA"],
    careerOutcomes: ["AI Designer", "Creative Director", "Content Creator", "Visual Artist"],
    roadmap: [
      { title: "Midjourney Basics", topics: ["Setup & Discord", "Prompt Structure", "Parameters", "Styles", "Upscaling"] },
      { title: "Advanced", topics: ["Consistent Characters", "Style References", "Remix Mode", "Commercial Use", "Portfolio Building"] }
    ],
    certification: true
  },
  {
    id: "c15", slug: "content-writing", title: "Content Writing", subtitle: "Professional Content & Copywriting", icon: "✍️", color: "#08b5d5",
    category: "content", description: "Master content writing for web, blogs, social media, and marketing.",
    duration: "6 weeks", level: "Beginner to Advanced", lessons: 16, projects: 6,
    salaryOpportunities: ["Content Writer: ₹2.5-10 LPA", "Copywriter: ₹3-15 LPA", "Content Strategist: ₹5-20 LPA"],
    careerOutcomes: ["Content Writer", "Copywriter", "Content Strategist", "Blogger", "Technical Writer"],
    roadmap: [
      { title: "Writing Basics", topics: ["Grammar & Style", "Writing for Web", "Headlines", "SEO Writing", "Research"] },
      { title: "Professional Writing", topics: ["Copywriting", "Blog Writing", "Social Media Content", "Email Writing", "Brand Voice"] },
      { title: "Advanced", topics: ["Content Strategy", "Editorial Planning", "Monetization", "Freelancing", "Portfolio"] }
    ],
    certification: true
  },
  {
    id: "c16", slug: "freelancing", title: "Freelancing", subtitle: "Build a Thriving Freelance Career", icon: "💼", color: "#5f7eff",
    category: "career", description: "Learn how to start, grow, and scale your freelancing business.",
    duration: "6 weeks", level: "All Levels", lessons: 16, projects: 5,
    salaryOpportunities: ["Freelancer: ₹3-30 LPA", "Independent Professional: Variable", "Digital Service Provider: ₹3-20 LPA"],
    careerOutcomes: ["Freelancer", "Independent Consultant", "Digital Service Provider", "Agency Owner"],
    roadmap: [
      { title: "Getting Started", topics: ["Platform Setup", "Profile Optimization", "Service Listings", "Pricing Strategy", "First Client"] },
      { title: "Growing", topics: ["Client Management", "Brand Building", "LinkedIn Growth", "Portfolio Development", "Niche Selection"] },
      { title: "Scaling", topics: ["Team Building", "Passive Income", "Agency Model", "Global Clientele", "Exit Strategies"] }
    ],
    certification: true
  },
  {
    id: "c17", slug: "affiliate-marketing", title: "Affiliate Marketing", subtitle: "Earn Passive Income Through Affiliates", icon: "🔗", color: "#3b5cff",
    category: "marketing", description: "Learn affiliate marketing strategies to earn commissions promoting products.",
    duration: "4 weeks", level: "Beginner to Advanced", lessons: 12, projects: 4,
    salaryOpportunities: ["Affiliate Marketer: ₹2-20 LPA", "Digital Marketer: ₹3-18 LPA", "Content Creator: ₹2.5-15 LPA"],
    careerOutcomes: ["Affiliate Marketer", "Digital Marketer", "Content Creator", "Niche Website Owner"],
    roadmap: [
      { title: "Affiliate Basics", topics: ["How Affiliates Work", "Niche Selection", "Affiliate Networks", "Product Selection", "Disclosure"] },
      { title: "Traffic & Conversion", topics: ["Content Marketing", "SEO for Affiliates", "Social Media", "Email Marketing", "Conversion Optimization"] },
      { title: "Scaling", topics: ["Paid Traffic", "Automation", "Funnels", "Multiple Streams", "Agency Model"] }
    ],
    certification: true
  },
  {
    id: "c18", slug: "performance-marketing", title: "Performance Marketing", subtitle: "Data-Driven Digital Advertising", icon: "📊", color: "#8b3dff",
    category: "marketing", description: "Master performance marketing across all paid channels.",
    duration: "8 weeks", level: "Intermediate to Advanced", lessons: 20, projects: 5,
    salaryOpportunities: ["Performance Marketer: ₹5-25 LPA", "Growth Marketer: ₹6-30 LPA", "PPC Manager: ₹5-20 LPA"],
    careerOutcomes: ["Performance Marketer", "Growth Marketer", "PPC Manager", "Digital Marketing Director"],
    roadmap: [
      { title: "Performance Marketing Foundations", topics: ["Marketing Fundamentals", "Channel Overview", "Analytics Setup", "Attribution Models", "KPI Definition"] },
      { title: "Channel Mastery", topics: ["Search Ads", "Social Ads", "Display & Programmatic", "Shopping Ads", "Video Ads"] },
      { title: "Advanced Strategy", topics: ["Multi-Channel Strategy", "Automation & AI", "CRO", "Budget Optimization", "Team Leadership"] }
    ],
    certification: true
  }
];

export const aiTools: AITool[] = [
  {
    id: "at1", name: "ChatGPT", slug: "chatgpt", logo: "💬", category: "content",
    description: "Advanced AI language model for content creation, coding, analysis, and problem-solving.",
    features: ["Natural conversations", "Content generation", "Code writing", "Data analysis", "Multi-language support", "File uploads"],
    pricing: "Free + $20/month Pro", skillLevel: "beginner",
    useCases: ["Content writing", "Brainstorming", "Research", "Email drafting", "Learning assistance"],
    website: "https://chat.openai.com", rating: 4.8
  },
  {
    id: "at2", name: "Midjourney", slug: "midjourney", logo: "🎨", category: "design",
    description: "AI-powered image generation tool for creating stunning visual content from text prompts.",
    features: ["Text-to-image", "Style customization", "High resolution", "Version control", "Commercial use", "Community gallery"],
    pricing: "$10-60/month", skillLevel: "intermediate",
    useCases: ["Design concepts", "Marketing visuals", "Product design", "Art creation", "Brand assets"],
    website: "https://midjourney.com", rating: 4.7
  },
  {
    id: "at3", name: "Adobe Firefly", slug: "adobe-firefly", logo: "🔥", category: "design",
    description: "Adobe's generative AI tool for creating images, effects, and designs within Creative Cloud.",
    features: ["Text-to-image", "Generative fill", "Text effects", "3D to image", "Adobe integration", "Commercial safety"],
    pricing: "Free (limited) + Creative Cloud subscription", skillLevel: "intermediate",
    useCases: ["Photo editing", "Design generation", "Text effects", "Marketing assets", "Social media"],
    website: "https://firefly.adobe.com", rating: 4.5
  },
  {
    id: "at4", name: "Canva AI", slug: "canva-ai", logo: "🌈", category: "design",
    description: "AI-powered design features integrated into Canva for quick, professional content creation.",
    features: ["Magic Design", "Magic Eraser", "Text to image", "Background remover", "Auto-animation", "Brand Kit AI"],
    pricing: "Free + $12.99/month Pro", skillLevel: "beginner",
    useCases: ["Social media graphics", "Presentations", "Marketing materials", "Brand design", "Video content"],
    website: "https://canva.com", rating: 4.6
  },
  {
    id: "at5", name: "Jasper AI", slug: "jasper-ai", logo: "✍️", category: "content",
    description: "AI content platform for marketing teams to create on-brand content at scale.",
    features: ["Brand voice", "Content templates", "SEO integration", "Multi-language", "Team collaboration", "Analytics"],
    pricing: "$39-69/month", skillLevel: "beginner",
    useCases: ["Blog writing", "Ad copy", "Social media", "Email marketing", "Product descriptions"],
    website: "https://jasper.ai", rating: 4.4
  },
  {
    id: "at6", name: "Claude", slug: "claude", logo: "🤖", category: "content",
    description: "Anthropic's AI assistant focused on safety, reasoning, and detailed analysis.",
    features: ["Long context", "Nuanced reasoning", "Code analysis", "Content creation", "Data processing", "Safety focused"],
    pricing: "Free + $20/month Pro", skillLevel: "beginner",
    useCases: ["Deep research", "Document analysis", "Content writing", "Strategic planning", "Code review"],
    website: "https://claude.ai", rating: 4.7
  },
  {
    id: "at7", name: "Runway ML", slug: "runway-ml", logo: "🎬", category: "video",
    description: "AI-powered video creation and editing platform for professional content production.",
    features: ["Text-to-video", "Video editing", "Motion tracking", "Green screen", "Color grading", "Real-time collaboration"],
    pricing: "Free + $12-76/month", skillLevel: "intermediate",
    useCases: ["Video production", "Marketing videos", "Social media content", "Film editing", "Creative projects"],
    website: "https://runwayml.com", rating: 4.5
  },
  {
    id: "at8", name: "GitHub Copilot", slug: "github-copilot", logo: "💻", category: "coding",
    description: "AI pair programmer that helps you write better code faster.",
    features: ["Code completion", "Chat interface", "Multi-language", "Context awareness", "IDE integration", "Code review"],
    pricing: "Free + $10/month Individual", skillLevel: "intermediate",
    useCases: ["Code writing", "Bug fixing", "Learning programming", "Code optimization", "Documentation"],
    website: "https://github.com/features/copilot", rating: 4.6
  },
  {
    id: "at9", name: "Zapier AI", slug: "zapier-ai", logo: "⚡", category: "automation",
    description: "AI-powered automation platform connecting your apps and workflows.",
    features: ["Workflow automation", "AI actions", "App integration", "Natural language", "Multi-step Zaps", "Analytics"],
    pricing: "Free + $19.99-99/month", skillLevel: "intermediate",
    useCases: ["Marketing automation", "Lead management", "Data syncing", "Workflow optimization", "Business processes"],
    website: "https://zapier.com", rating: 4.5
  },
  {
    id: "at10", name: "Descript", slug: "descript", logo: "🎙️", category: "video",
    description: "AI-powered audio and video editing tool that works like a document.",
    features: ["Text-based editing", "Screen recording", "AI voice", "Transcription", "Green screen", "Collaboration"],
    pricing: "Free + $24-40/month", skillLevel: "beginner",
    useCases: ["Podcast editing", "Video creation", "Content repurposing", "Transcription", "Training videos"],
    website: "https://descript.com", rating: 4.4
  },
  {
    id: "at11", name: "SEMrush AI", slug: "semrush-ai", logo: "🔍", category: "marketing",
    description: "AI-powered SEO and marketing intelligence platform with content optimization.",
    features: ["Keyword research", "SEO audit", "Content optimization", "Competitor analysis", "Rank tracking", "AI writing"],
    pricing: "$129.95-499.95/month", skillLevel: "advanced",
    useCases: ["SEO strategy", "Content marketing", "Paid ads research", "Competitive analysis", "Market research"],
    website: "https://semrush.com", rating: 4.5
  },
  {
    id: "at12", name: "AdCreative.ai", slug: "adcreative-ai", logo: "📊", category: "marketing",
    description: "AI-powered ad creative generation and optimization platform.",
    features: ["Ad generation", "Creative scoring", "A/B testing", "Audience insights", "Multiple formats", "Brand compliance"],
    pricing: "$29-199/month", skillLevel: "intermediate",
    useCases: ["Facebook ads", "Google ads", "Social media ads", "Display ads", "Video ads"],
    website: "https://adcreative.ai", rating: 4.3
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1", slug: "top-10-ai-careers-2026", title: "Top 10 AI Careers That Will Dominate in 2026",
    excerpt: "Discover the most promising AI-powered career paths that are shaping the future of work in India and globally.",
    content: "The AI revolution is creating unprecedented career opportunities...",
    category: "AI Careers", author: "Venkat Shyam.N", date: "2026-01-15",
    image: "/images/blog-ai-careers.jpg", tags: ["AI", "Careers", "Future of Work", "Technology"],
    readTime: "8 min read"
  },
  {
    id: "b2", slug: "digital-marketing-trends-2026", title: "Digital Marketing Trends 2026: What Every Marketer Must Know",
    excerpt: "Stay ahead of the curve with these game-changing digital marketing trends powered by AI.",
    content: "Digital marketing continues to evolve at breakneck speed...",
    category: "Digital Marketing", author: "Venkat Shyam.N", date: "2026-02-01",
    image: "/images/blog-marketing.jpg", tags: ["Digital Marketing", "Trends", "AI Marketing"],
    readTime: "6 min read"
  },
  {
    id: "b3", slug: "freelancing-tips-beginners", title: "Freelancing 101: A Complete Guide for Indian Beginners",
    excerpt: "Start your freelancing journey with this comprehensive guide covering platforms, pricing, and success strategies.",
    content: "Freelancing offers incredible opportunities for Indian professionals...",
    category: "Freelancing", author: "Venkat Shyam.N", date: "2026-02-10",
    image: "/images/blog-freelancing.jpg", tags: ["Freelancing", "Beginners", "Remote Work"],
    readTime: "10 min read"
  },
  {
    id: "b4", slug: "ai-tools-productivity-2026", title: "10 AI Tools That Will Boost Your Productivity in 2026",
    excerpt: "Supercharge your workflow with these essential AI tools for professionals.",
    content: "AI tools are transforming how we work...",
    category: "AI Tools", author: "Venkat Shyam.N", date: "2026-02-20",
    image: "/images/blog-ai-tools.jpg", tags: ["AI Tools", "Productivity", "Technology"],
    readTime: "7 min read"
  },
  {
    id: "b5", slug: "passive-income-ideas-india", title: "15 Passive Income Ideas for Indians in 2026",
    excerpt: "Build multiple income streams with these proven passive income strategies.",
    content: "Creating passive income is the key to financial freedom...",
    category: "Passive Income", author: "Venkat Shyam.N", date: "2026-03-01",
    image: "/images/blog-passive-income.jpg", tags: ["Passive Income", "Finance", "Online Business"],
    readTime: "9 min read"
  },
  {
    id: "b6", slug: "graphic-design-trends-2026", title: "Graphic Design Trends 2026: What's In and What's Out",
    excerpt: "Explore the latest graphic design trends that are defining visual communication this year.",
    content: "The design world is constantly evolving...",
    category: "Design", author: "Venkat Shyam.N", date: "2026-03-10",
    image: "/images/blog-design.jpg", tags: ["Graphic Design", "Trends", "Creative"],
    readTime: "5 min read"
  },
  {
    id: "b7", slug: "career-guidance-after-12th", title: "Career Guidance After 12th: Digital Career Paths in 2026",
    excerpt: "Make informed career decisions with this guide to high-income digital career paths for Indian students.",
    content: "Choosing the right career after 12th is crucial...",
    category: "Career Guidance", author: "Venkat Shyam.N", date: "2026-03-15",
    image: "/images/blog-career-guidance.jpg", tags: ["Career Guidance", "Students", "Education"],
    readTime: "8 min read"
  },
  {
    id: "b8", slug: "performance-marketing-guide", title: "Performance Marketing: The Complete Beginner's Guide",
    excerpt: "Learn how performance marketing works and how to start a career in this high-demand field.",
    content: "Performance marketing is one of the most rewarding digital careers...",
    category: "Performance Marketing", author: "Venkat Shyam.N", date: "2026-03-20",
    image: "/images/blog-perf-marketing.jpg", tags: ["Performance Marketing", "Digital Marketing", "Guide"],
    readTime: "7 min read"
  }
];

export const freelancingTopics: FreelancingTopic[] = [
  {
    id: "f1", title: "Fiverr Guide", icon: "🟢",
    description: "Start and grow your freelancing business on Fiverr, the world's largest marketplace for digital services.",
    tips: ["Create a professional gig title", "Use high-quality gig images", "Offer competitive pricing initially", "Respond to buyers within 1 hour", "Collect reviews from every client", "Use Fiverr's promoted gigs feature"],
    platforms: ["Fiverr"], income: "₹10,000 - ₹5,00,000/month"
  },
  {
    id: "f2", title: "Upwork Guide", icon: "🔵",
    description: "Build a thriving freelance career on Upwork with high-value clients worldwide.",
    tips: ["Complete your profile 100%", "Write tailored proposals", "Start with smaller projects", "Build specialized skills", "Maintain 100% JSS", "Use Upwork Plus for better visibility"],
    platforms: ["Upwork"], income: "₹20,000 - ₹10,00,000/month"
  },
  {
    id: "f3", title: "LinkedIn Optimization", icon: "💼",
    description: "Transform your LinkedIn profile into a client-attracting machine.",
    tips: ["Professional headshot", "Keyword-optimized headline", "Detailed experience section", "Regular content posting", "Engage with target audience", "Get recommendations"],
    platforms: ["LinkedIn"], income: "₹15,000 - ₹8,00,000/month"
  },
  {
    id: "f4", title: "Portfolio Building", icon: "🎯",
    description: "Create a stunning portfolio that converts visitors into clients.",
    tips: ["Showcase best work first", "Include case studies", "Show measurable results", "Keep it updated", "Make it mobile-friendly", "Add testimonials"],
    platforms: ["Personal Website", "Behance", "Dribbble"], income: "Referral based"
  },
  {
    id: "f5", title: "Proposal Writing", icon: "✍️",
    description: "Master the art of writing proposals that win clients.",
    tips: ["Research the client first", "Address specific requirements", "Show relevant experience", "Provide a clear timeline", "Be professional and concise", "Follow up appropriately"],
    platforms: ["Upwork", "Freelancer", "Guru"], income: "Direct project earnings"
  },
  {
    id: "f6", title: "International Clients", icon: "🌍",
    description: "Attract and work with international clients for higher earnings.",
    tips: ["Set competitive USD rates", "Understand time zone differences", "Communicate clearly in English", "Use reliable payment platforms", "Deliver exceptional quality", "Build long-term relationships"],
    platforms: ["All platforms"], income: "$1,000 - $20,000/month"
  },
  {
    id: "f7", title: "Pricing Strategy", icon: "💰",
    description: "Price your services right to maximize earnings without losing clients.",
    tips: ["Research market rates", "Start slightly below market", "Increase with experience", "Offer package deals", "Value-based pricing", "Annual price reviews"],
    platforms: ["All"], income: "Variable"
  },
  {
    id: "f8", title: "Personal Branding", icon: "⭐",
    description: "Build a powerful personal brand that attracts opportunities.",
    tips: ["Define your niche", "Create valuable content", "Be consistent across platforms", "Network actively", "Share your journey", "Help others freely"],
    platforms: ["LinkedIn", "Twitter", "Instagram", "YouTube"], income: "Brand-based"
  }
];

export const salaryData: SalaryData[] = [
  { role: "Graphic Designer", indiaFresher: 300000, indiaExperienced: 1200000, usSalary: 65000, ukSalary: 35000, canadaSalary: 55000, remoteDemand: "high", growthRate: 8 },
  { role: "UI/UX Designer", indiaFresher: 500000, indiaExperienced: 2000000, usSalary: 95000, ukSalary: 55000, canadaSalary: 80000, remoteDemand: "high", growthRate: 15 },
  { role: "Web Designer", indiaFresher: 350000, indiaExperienced: 1400000, usSalary: 75000, ukSalary: 40000, canadaSalary: 65000, remoteDemand: "high", growthRate: 10 },
  { role: "Digital Marketer", indiaFresher: 300000, indiaExperienced: 1800000, usSalary: 85000, ukSalary: 45000, canadaSalary: 70000, remoteDemand: "high", growthRate: 12 },
  { role: "SEO Specialist", indiaFresher: 300000, indiaExperienced: 1500000, usSalary: 75000, ukSalary: 40000, canadaSalary: 65000, remoteDemand: "high", growthRate: 11 },
  { role: "Performance Marketer", indiaFresher: 500000, indiaExperienced: 2500000, usSalary: 105000, ukSalary: 60000, canadaSalary: 90000, remoteDemand: "high", growthRate: 18 },
  { role: "Content Creator", indiaFresher: 250000, indiaExperienced: 1500000, usSalary: 70000, ukSalary: 38000, canadaSalary: 60000, remoteDemand: "high", growthRate: 14 },
  { role: "AI Content Strategist", indiaFresher: 500000, indiaExperienced: 2000000, usSalary: 110000, ukSalary: 65000, canadaSalary: 95000, remoteDemand: "high", growthRate: 25 },
  { role: "Social Media Manager", indiaFresher: 300000, indiaExperienced: 1400000, usSalary: 70000, ukSalary: 38000, canadaSalary: 60000, remoteDemand: "high", growthRate: 10 },
  { role: "Motion Graphics Designer", indiaFresher: 400000, indiaExperienced: 1800000, usSalary: 85000, ukSalary: 45000, canadaSalary: 70000, remoteDemand: "high", growthRate: 12 },
  { role: "Google Ads Expert", indiaFresher: 400000, indiaExperienced: 2000000, usSalary: 95000, ukSalary: 55000, canadaSalary: 80000, remoteDemand: "high", growthRate: 15 },
  { role: "Meta Ads Specialist", indiaFresher: 400000, indiaExperienced: 2000000, usSalary: 85000, ukSalary: 45000, canadaSalary: 72000, remoteDemand: "high", growthRate: 16 },
  { role: "AI Designer", indiaFresher: 500000, indiaExperienced: 2500000, usSalary: 110000, ukSalary: 65000, canadaSalary: 95000, remoteDemand: "high", growthRate: 30 },
  { role: "Full Stack Developer", indiaFresher: 600000, indiaExperienced: 3000000, usSalary: 120000, ukSalary: 70000, canadaSalary: 100000, remoteDemand: "high", growthRate: 12 },
  { role: "Data Analyst", indiaFresher: 400000, indiaExperienced: 1800000, usSalary: 95000, ukSalary: 55000, canadaSalary: 80000, remoteDemand: "high", growthRate: 14 }
];

export const faqs: FAQ[] = [
  { id: "faq1", question: "What is VSN Careers?", answer: "VSN Careers is a comprehensive AI-powered career guidance platform that helps students, freelancers, and professionals build high-income digital careers through structured learning, career guidance, and practical skills development." },
  { id: "faq2", question: "Who is this platform for?", answer: "The platform is designed for students, job seekers, freelancers, designers, artists, digital marketers, career switchers, small business owners, and creators who want to build successful digital careers." },
  { id: "faq3", question: "Do I need prior experience to start?", answer: "No! Our courses are structured from beginner to advanced levels. Anyone can start learning digital skills regardless of their background." },
  { id: "faq4", question: "Will I get a certificate after completing courses?", answer: "Yes, you will receive a certificate upon completing each course module, which you can share on LinkedIn and your portfolio." },
  { id: "faq5", question: "How can AI tools help my career?", answer: "AI tools can significantly boost your productivity, creativity, and efficiency. Our AI Tools Hub teaches you how to leverage AI for professional growth." },
  { id: "faq6", question: "Can I really earn through freelancing?", answer: "Absolutely! Thousands of Indians earn ₹30,000 - ₹5,00,000+ monthly through freelancing. Our Freelancing Hub provides complete guidance to start and succeed." },
  { id: "faq7", question: "Is this platform free?", answer: "We offer both free resources and premium courses to cater to different learning needs. Start with our free content and upgrade as you grow." },
  { id: "faq8", question: "What makes VSN Careers different?", answer: "We focus on practical, industry-relevant skills combined with AI tools mastery. Our guidance is tailored for the Indian market with global career perspectives." }
];

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Priya Sharma", role: "Graphic Designer", company: "Freelancer", image: "", content: "VSN Careers helped me transition from a traditional job to a thriving freelance career. The AI tools module was a game-changer for my design workflow.", rating: 5 },
  { id: "t2", name: "Rahul Verma", role: "Digital Marketer", company: "TechStart Inc.", image: "", content: "The performance marketing course gave me practical skills that I use daily. I landed my dream job within 3 months of completing the program.", rating: 5 },
  { id: "t3", name: "Ananya Patel", role: "UI/UX Designer", company: "DesignCraft Studio", image: "", content: "The career roadmap and salary insights helped me negotiate a 40% hike. The platform is a goldmine for anyone serious about their career.", rating: 5 },
  { id: "t4", name: "Arun Kumar", role: "Content Creator", company: "Self-Employed", image: "", content: "I was confused about my career path until I found VSN Careers. The guidance and resources helped me build a successful content creation business.", rating: 4 },
  { id: "t5", name: "Sneha Reddy", role: "SEO Specialist", company: "GrowthMinds Agency", image: "", content: "The SEO course was incredibly practical. I went from zero knowledge to managing client campaigns in just 8 weeks. Highly recommended!", rating: 5 }
];

export const siteConfig = {
  name: "VSN Careers",
  tagline: "Build Your Future with Digital Skills & AI",
  description: "Master Digital Skills & Build High Income Careers with AI. Learn Graphic Design, Web Design, Digital Marketing, Performance Marketing & AI Tools.",
  founder: "Venkat Shyam.N",
  contact: {
    phone: "+91 9949994082",
    email: "vsnagoju@gmail.com",
    website: "https://venkatshyamn.com/",
    linkedin: "https://www.linkedin.com/in/venkatshyamn/"
  },
  social: {
    linkedin: "https://www.linkedin.com/in/venkatshyamn/",
    instagram: "#",
    youtube: "#",
    whatsapp: "https://wa.me/919949994082"
  }
};
