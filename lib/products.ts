export type Product = {
   slug: string;
   title: string;
   tagline: string;
   summary: string;
   status: "LIVE" | "IN_DEVELOPMENT" | "COMING_SOON";
   launchDate?: string;
   problem: string;
   solution: string;
   impact?: string[];
   imageSrc: string;
   detail: string;
   gallery?: string[];
   features?: string[];
   demoUrl?: string;
   audience?: string[];
   technologies?: string[];
   badges?: string[];
};

export const products: Product[] = [
   {
      slug: "tath-lms",
      title: "Tath Interactive LMS",
      tagline:
         "Engage learners with gamified, interactive e‑learning experiences",
      summary:
         "Empower educators and students with a dynamic LMS featuring interactive modules and built‑in gamification to drive motivation and retention.",
      status: "IN_DEVELOPMENT",
      launchDate: "2024-12-01",
      problem:
         "Traditional Learning Management Systems are often static and passive, leading to low engagement, poor course completion rates, and minimal collaboration among learners.",
      solution:
         "Tath introduces an interactive, gamified approach to e‑learning. Instructors can build modular, multimedia‑rich lessons, trigger real‑time quizzes and polls, and reward learners with badges and points based on activity and performance.",
      impact: [
         "🎮 Learners are excited to return daily due to immersive and interactive content",
         "📚 Courses feel more like a journey than a lecture, reducing learner fatigue",
         "💡 Students stay curious and motivated through dynamic feedback and rewards",
         "🚀 Institutions report a notable shift in learner enthusiasm and satisfaction",
         "🏆 Instructors observe higher participation and longer attention spans in every module",
      ],
      imageSrc: "/images/tath-lms.jpg",
      detail: `# Tath Interactive LMS

## Overview
Tath is an innovative Learning Management System designed to transform online education into an engaging, interactive journey. By combining modular content, real‑time quizzes, and gamification, Tath keeps learners motivated and instructors empowered.

## Key Capabilities
- **📚 H5P‑Powered Lessons**: Wide variety of interactive content types (quizzes, drag‑and‑drop, interactive video, presentations)
- **🎲 Gamified Learning Paths**: Points, badges, and leaderboards to drive motivation
- **🧩 Interactive Modules**: Real‑time polls, scenario simulations, and checkpoint quizzes
- **📊 Analytics Dashboard**: Track learner progress, engagement, and outcomes in real time
- **🛒 Content Marketplace**: Share, discover, and license courses within your organization

> “Tath’s interactive modules have completely transformed our online training — completion rates and learner satisfaction have never been higher.” – Dr. Amina Yusuf, Head of eLearning at EduTech Labs`,
      gallery: ["/assets/tath1.png", "/assets/tath2.png", "/assets/tath3.png"],
      features: [
         "🖱️ Drag‑and‑drop course builder",
         "🏅 Built‑in gamification (points, badges, leaderboards)",
         "📹 H5P interactive content support (quizzes, interactive video, presentations)",
         "📋 Real‑time polls, quizzes & scenario simulations",
         "📈 Detailed analytics & reporting",
         "🔐 Role‑based access & permissions",
         "📱 Mobile‑friendly, responsive design",
      ],
      audience: [
         "K‑12 schools and universities",
         "Corporate training departments",
         "Professional development providers",
         "eLearning agencies",
         "Individual instructors and tutors",
      ],
      technologies: [
         "Next.js",
         "NestJS",
         "PH5",
         "TypeScript",
         "PostgreSQL",
         "Redis",
         "Socket.IO",
         "AWS Lambda",
      ],
      badges: ["Early Access", "Interactive"],
   },

   //    {
   //       slug: "ai-content-optimizer",
   //       title: "AI Content Optimizer",
   //       tagline: "Transform your content strategy with intelligent optimization",
   //       summary:
   //          "Boost engagement and conversions with AI-powered content analysis and real-time.",
   //       status: "LIVE",
   //       launchDate: "2024-01-15",
   //       problem:
   //          "Content creators struggle to optimize their content for maximum engagement, spending hours analyzing performance metrics and guessing what resonates with their audience.",
   //       solution:
   //          "Our AI Content Optimizer analyzes your content in real-time, providing actionable insights on tone, structure, SEO optimization, and audience engagement predictions before you publish.",
   //       impact: [
   //          "40% increase in average engagement rates",
   //          "60% reduction in content creation time",
   //          "25% improvement in conversion rates",
   //          "90% of users report better content performance",
   //       ],
   //       imageSrc: "/images/aco.png",
   //       detail: `# AI Content Optimizer

   // ## Overview
   // The AI Content Optimizer revolutionizes how businesses create and optimize their content. Using advanced machine learning algorithms, it provides real-time feedback and suggestions to maximize engagement and conversions.

   // ## Key Capabilities
   // - **Real-time Analysis**: Get instant feedback as you write
   // - **SEO Optimization**: Automatic keyword suggestions and optimization
   // - **Audience Insights**: Understand what resonates with your target audience
   // - **Performance Prediction**: Know how your content will perform before publishing

   // ## How It Works
   // 1. **Upload or Write**: Import existing content or write directly in our editor
   // 2. **AI Analysis**: Our algorithms analyze tone, structure, and optimization opportunities
   // 3. **Get Recommendations**: Receive specific, actionable suggestions
   // 4. **Optimize & Publish**: Implement changes and track performance

   // > "This tool has completely transformed our content strategy. We've seen a 40% increase in engagement across all our channels." - Sarah Johnson, Marketing Director at TechCorp`,
   //       gallery: [
   //          "/placeholder.svg?height=300&width=500",
   //          "/placeholder.svg?height=300&width=500",
   //          "/placeholder.svg?height=300&width=500",
   //       ],
   //       features: [
   //          "Real-time content analysis and scoring",
   //          "SEO keyword optimization suggestions",
   //          "Tone and sentiment analysis",
   //          "Audience engagement predictions",
   //          "Multi-platform publishing integration",
   //          "Performance tracking and analytics",
   //          "A/B testing recommendations",
   //          "Content calendar integration",
   //       ],
   //       demoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
   //       audience: [
   //          "Content marketers and creators",
   //          "Digital marketing agencies",
   //          "E-commerce businesses",
   //          "SaaS companies",
   //          "Bloggers and publishers",
   //       ],
   //       technologies: [
   //          "Next.js",
   //          "OpenAI GPT-4",
   //          "TensorFlow",
   //          "React",
   //          "Node.js",
   //          "PostgreSQL",
   //          "Redis",
   //          "AWS",
   //       ],
   //       badges: ["Most Popular", "AI-Powered"],
   //    },
   //    {
   //       slug: "smart-analytics-platform",
   //       title: "Smart Analytics Platform",
   //       tagline:
   //          "Unlock actionable insights from your data with AI-driven analytics",
   //       summary:
   //          "Transform raw data into strategic decisions with intelligent analytics that speak your language.",
   //       status: "IN_DEVELOPMENT",
   //       launchDate: "2024-06-01",
   //       problem:
   //          "Businesses are drowning in data but struggling to extract meaningful insights. Traditional analytics tools are complex, require technical expertise, and fail to provide actionable recommendations.",
   //       solution:
   //          "Our Smart Analytics Platform uses AI to automatically identify patterns, anomalies, and opportunities in your data, presenting insights in plain English with specific action recommendations.",
   //       impact: [
   //          "Expected 50% reduction in time-to-insight",
   //          "Projected 30% improvement in decision accuracy",
   //          "Anticipated 25% increase in operational efficiency",
   //       ],
   //       imageSrc: "/images/sa.png",
   //       detail: `# Smart Analytics Platform

   // ## Coming Soon - Revolutionary Data Intelligence

   // The Smart Analytics Platform is being designed to democratize data analytics, making powerful insights accessible to everyone in your organization, regardless of technical background.

   // ## Planned Features
   // - **Natural Language Queries**: Ask questions about your data in plain English
   // - **Automated Insights**: AI discovers patterns you might miss
   // - **Predictive Analytics**: Forecast trends and outcomes
   // - **Custom Dashboards**: Tailored views for different roles and departments

   // ## Development Progress
   // - ✅ Core AI engine development
   // - ✅ Data integration framework
   // - 🔄 User interface design and development
   // - 🔄 Beta testing with select customers
   // - ⏳ Security and compliance validation
   // - ⏳ Final testing and optimization

   // ## Early Access Program
   // Join our beta program to get early access and help shape the final product. Beta users receive:
   // - Free access during development
   // - Direct input on features and functionality
   // - Priority support and training
   // - Discounted pricing at launch`,
   //       gallery: [
   //          "/placeholder.svg?height=300&width=500",
   //          "/placeholder.svg?height=300&width=500",
   //          "/placeholder.svg?height=300&width=500",
   //       ],
   //       features: [
   //          "Natural language data queries",
   //          "Automated pattern recognition",
   //          "Predictive modeling and forecasting",
   //          "Real-time data processing",
   //          "Custom dashboard builder",
   //          "Collaborative analytics workspace",
   //          "API integrations with popular tools",
   //          "Advanced security and compliance",
   //       ],
   //       audience: [
   //          "Business analysts and data scientists",
   //          "C-suite executives and decision makers",
   //          "Operations and finance teams",
   //          "Marketing and sales professionals",
   //          "Small to enterprise businesses",
   //       ],
   //       technologies: [
   //          "Python",
   //          "Apache Spark",
   //          "TensorFlow",
   //          "React",
   //          "D3.js",
   //          "PostgreSQL",
   //          "Apache Kafka",
   //          "Docker",
   //       ],
   //       badges: ["Beta Access", "Enterprise Ready"],
   //    },
   //    {
   //       slug: "workflow-automation-suite",
   //       title: "Workflow Automation Suite",
   //       tagline: "Streamline operations with intelligent process automation",
   //       summary:
   //          "Eliminate repetitive tasks and optimize workflows with our intuitive automation platform.",
   //       status: "COMING_SOON",
   //       launchDate: "2024-09-15",
   //       problem:
   //          "Organizations waste countless hours on repetitive manual tasks, leading to inefficiency, errors, and employee burnout. Existing automation tools are either too simple or overly complex.",
   //       solution:
   //          "Our Workflow Automation Suite provides a perfect balance of power and simplicity, enabling teams to automate complex processes without technical expertise while maintaining full control and visibility.",
   //       imageSrc: "/images/wa.jpg",
   //       detail: `# Workflow Automation Suite

   // ## The Future of Process Automation

   // Currently in early development, the Workflow Automation Suite will revolutionize how organizations handle repetitive tasks and complex workflows.

   // ## Vision & Goals
   // Our mission is to create the most intuitive yet powerful automation platform that empowers every team member to optimize their workflows without requiring technical expertise.

   // ## Planned Capabilities
   // - **Visual Workflow Builder**: Drag-and-drop interface for creating complex automations
   // - **Smart Triggers**: AI-powered event detection and response
   // - **Cross-Platform Integration**: Connect with 500+ popular business tools
   // - **Intelligent Decision Making**: Automated routing based on content and context

   // ## Development Roadmap

   // ### Phase 1 (Q2 2024)
   // - Core automation engine
   // - Basic workflow builder
   // - Essential integrations (Slack, Email, Google Workspace)

   // ### Phase 2 (Q3 2024)
   // - Advanced AI features
   // - Mobile app development
   // - Enterprise security features
   // - Advanced analytics and reporting

   // ### Phase 3 (Q4 2024)
   // - Machine learning optimization
   // - Custom API development
   // - White-label solutions
   // - Global deployment

   // ## Early Bird Program
   // Be among the first to experience the future of workflow automation. Early subscribers get:
   // - 50% discount on first year
   // - Exclusive access to beta features
   // - Direct line to our development team
   // - Custom integration development`,
   //       features: [
   //          "Visual drag-and-drop workflow builder",
   //          "500+ pre-built integrations",
   //          "AI-powered decision trees",
   //          "Real-time monitoring and alerts",
   //          "Custom API and webhook support",
   //          "Team collaboration tools",
   //          "Advanced scheduling and triggers",
   //          "Comprehensive audit trails",
   //       ],
   //       audience: [
   //          "Operations managers and teams",
   //          "HR and administrative professionals",
   //          "IT departments and system administrators",
   //          "Customer service teams",
   //          "Growing businesses and enterprises",
   //       ],
   //       technologies: [
   //          "Node.js",
   //          "React",
   //          "MongoDB",
   //          "Redis",
   //          "Docker",
   //          "Kubernetes",
   //          "AWS Lambda",
   //          "GraphQL",
   //       ],
   //       badges: ["Early Bird Available"],
   //    },
];

export function getProductBySlug(slug: string): Product | undefined {
   return products.find((product) => product.slug === slug);
}
