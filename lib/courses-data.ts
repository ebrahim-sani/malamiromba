export type Course = {
   id: number;
   title: string;
   type?: "physical" | "online";
   description: string;
   longDescription?: string;
   image: string;
   slots: number;
   duration: string;
   startDate: string;
   opened?: boolean;
   formLink?: string;
   features?: string[];
   prerequisites?: string[];
   outcomes?: string[];
   // Additional comprehensive data fields
   targetAudience?: Array<{
      title: string;
      description: string;
   }>;
   learningObjectives?: string[];
   curriculum?: Array<{
      week?: number;
      month?: number;
      title: string;
      description: string;
      topics?: string[];
   }>;
   modules?: Array<{
      title: string;
      description: string;
      topics?: string[];
   }>;
   tracks?: Array<{
      title: string;
      description: string;
      modules?: string[];
   }>;
   programs?: Array<{
      title: string;
      description: string;
      modules?: string[];
   }>;
};

export const coursesData: Course[] = [
   {
      id: 1,
      title: "Product Management",
      description:
         "Master the art of product management, from ideation to launch. Learn market research, roadmap planning, and agile methodologies.",
      image: "/images/product-management.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/Gkz6sDvdoZMw6nxm7",
      features: [
         "Market Research & Analysis",
         "Product Roadmap Planning",
         "Agile & Scrum Methodologies",
         "User Story Writing",
         "Stakeholder Management",
         "Product Launch Strategies",
      ],
      prerequisites: [
         "Basic understanding of business concepts",
         "Interest in technology and innovation",
         "Strong analytical thinking skills",
      ],
      outcomes: [
         "Create comprehensive product strategies",
         "Lead cross-functional product teams",
         "Conduct effective market research",
         "Build and manage product roadmaps",
         "Launch successful products",
      ],
      // Additional comprehensive data
      longDescription:
         "This course introduces learners to the essential concepts, tools, and frameworks of modern project management. Over 12 weeks, students will learn how to plan, execute, monitor, and close projects across various industries. With hands-on simulations, real-world case studies, and collaborative assignments, learners will gain the confidence to manage timelines, budgets, teams, and stakeholder expectations.",
      learningObjectives: [
         "Understand core project management principles and lifecycle phases",
         "Create project plans using tools like Gantt charts and Kanban boards",
         "Define project scope, goals, deliverables, and success metrics",
         "Apply Agile and Waterfall methodologies in appropriate scenarios",
         "Manage risks, timelines, and stakeholder communication effectively",
         "Lead project teams and coordinate tasks using project management tools",
         "Use tools such as Trello, Notion, Asana, or Microsoft Project",
      ],
      targetAudience: [
         {
            title: "Students & Fresh Graduates",
            description:
               "Gain real-world management skills that stand out in job applications. Whether you're entering tech, business, or creative industries, learn how to work in and lead projects effectively.",
         },
         {
            title: "Aspiring Project Managers",
            description:
               "Get foundational knowledge that prepares you for roles like PM assistant, coordinator, or junior project manager. Learn the language, tools, and mindset of successful PMs.",
         },
         {
            title: "Early-Career Professionals & Team Leads",
            description:
               "Already managing tasks but lack structure? This course helps you formalize your process, boost productivity, and manage timelines, risks, and teams more effectively.",
         },
         {
            title: "Career Changers & Freelancers",
            description:
               "Want to shift into structured work or offer PM services? Build your portfolio with practical planning skills and a capstone project to showcase to employers or clients.",
         },
      ],
      curriculum: [
         {
            month: 1,
            title: "Explore and Build Foundations (Weeks 1-4)",
            description:
               "Introduce basic project management concepts, methodologies, and tools.",
            topics: [
               "Week 1: Introduction to Project Management",
               "Week 2: Project Planning",
               "Week 3: Team Building and Communication",
               "Week 4: Risk Management and Problem Solving",
            ],
         },
         {
            month: 2,
            title: "Deepen Knowledge and Build Skills (Weeks 5-8)",
            description:
               "Dive deeper into project execution, monitoring, and advanced project management tools.",
            topics: [
               "Week 5: Project Execution and Resource Management",
               "Week 6: Monitoring and Controlling Projects",
               "Week 7: Quality Management and Project Delivery",
               "Week 8: Agile Methodology and Other Project Management Methodologies",
            ],
         },
         {
            month: 3,
            title: "Build and Assess (Weeks 9-12)",
            description:
               "Work on a capstone project and focus on career development and real-world application of skills.",
            topics: [
               "Week 9: Project Monitoring and Change Management",
               "Week 10: Capstone Project Development",
               "Week 11: Final Assessment",
               "Week 12: Presentation and Graduation",
            ],
         },
      ],
   },
   {
      id: 2,
      title: "Creative Design",
      description:
         "Beginner-friendly training in graphics, branding, and product design. Get hands-on with industry tools, and start creating beautiful visuals.",
      image: "/images/creative-design.jpg",
      slots: 50,
      duration: "8 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/MGXuMTfJJhC3JdpGA",
      features: [
         "Adobe Creative Suite Mastery",
         "Brand Identity Design",
         "UI/UX Design Principles",
         "Typography & Color Theory",
         "Logo & Icon Design",
         "Portfolio Development",
      ],
      prerequisites: [
         "Basic computer skills",
         "Creative mindset",
         "No prior design experience required",
      ],
      outcomes: [
         "Create professional brand identities",
         "Design compelling visual content",
         "Master industry-standard design tools",
         "Build a strong design portfolio",
         "Understand design principles and theory",
      ],
      // Additional comprehensive data
      longDescription:
         "A future-forward training experience where creativity meets functionality. Whether you're passionate about stunning visuals or intuitive digital products, this program helps you build mastery from the ground up. Start with shared core design principles, then choose your specialization: Graphic Design Track or UI/UX Design Track.",
      modules: [
         {
            title: "Design Foundations (Core for All)",
            description:
               "Establish the mindset, discipline, and creative lens every designer needs — whether designing for screens or print.",
            topics: [
               "Principles of design: balance, contrast, alignment, proximity",
               "Introduction to design thinking & problem-solving",
               "Visual hierarchy and layout structure",
               "Color theory and typography essentials",
               "Design ethics and communication in creativity",
            ],
         },
      ],
      tracks: [
         {
            title: "Graphic Design Mastery",
            description:
               "Learn how to craft visual assets that inform, influence, and inspire. Perfect for creatives looking to become branding experts, content designers, or visual storytellers.",
            modules: [
               "Tools of the Trade - Master Adobe Photoshop, Illustrator & Canva",
               "Branding & Visual Identity - Logo design and brand kits",
               "Applied Design & Content Creation - Designing for Instagram, YouTube thumbnails, and digital ads",
            ],
         },
         {
            title: "UI/UX Design Mastery",
            description:
               "Build intuitive, user-centered digital interfaces and products — from idea to prototype. Ideal for those who want to enter tech as product designers or UX strategists.",
            modules: [
               "UX Research & Strategy - User research methods and experience mapping",
               "Structure & Interaction - Information architecture and wireframing",
               "UI Aesthetics & Responsive Design - Mobile-first and responsive design",
            ],
         },
      ],
   },
   {
      id: 3,
      title: "Data Analysis",
      description:
         "This foundational course introduces learners to the essential skills and tools used in data analysis over 12 weeks.",
      longDescription:
         "Over 12 weeks, students will learn how to collect, clean, visualize, and interpret data to support business decisions. The course combines theoretical concepts with hands‑on practice using Excel, SQL, and Power BI.",
      image: "/images/data-analysis.jpg",
      slots: 50,
      duration: "12 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/7MQXWzFnP6nF8ehdA",
      features: [
         "Statistical Analysis",
         "Data Visualization",
         "Python & R Programming",
         "Excel Advanced Functions",
         "Tableau & Power BI",
         "Machine Learning Basics",
      ],
      prerequisites: [
         "Basic mathematics knowledge",
         "Computer literacy",
         "Logical thinking skills",
      ],
      outcomes: [
         "Analyze complex datasets",
         "Create compelling data visualizations",
         "Make data‑driven business decisions",
         "Use advanced analytical tools",
         "Present insights effectively",
      ],
      // Additional comprehensive data
      learningObjectives: [
         "Understand the data analysis lifecycle and common terminology",
         "Collect and clean data for analysis",
         "Use Excel and SQL for data querying and manipulation",
         "Apply statistical techniques to interpret data",
         "Visualize data to uncover trends and communicate insights",
         "Create reports and dashboards for decision making",
         "Conduct exploratory data analysis using PowerBI",
      ],
      targetAudience: [
         {
            title: "Students and Recent Graduates",
            description:
               "Build foundational data skills that enhance your employability in tech, finance, marketing, and beyond.",
         },
         {
            title: "Business Professionals and Managers",
            description:
               "Learn to interpret and use data to inform strategy, optimize operations, and report to stakeholders.",
         },
         {
            title: "Career Changers into Data Roles",
            description:
               "Gain practical knowledge to start a career in data analysis with hands-on tools and real-world projects.",
         },
         {
            title: "Entrepreneurs and Small Business Owners",
            description:
               "Understand your business data better to make smarter, data-driven decisions.",
         },
      ],
   },
   {
      id: 4,
      title: "Digital Marketing",
      description:
         "Master digital marketing strategies, from SEO and social media to content marketing and analytics-driven campaign optimization.",
      longDescription:
         "Become a digital marketing expert with our comprehensive course covering all aspects of modern online marketing. Learn to create effective campaigns across multiple channels, optimize for search engines, leverage social media platforms, and measure campaign performance using advanced analytics.",
      image: "/images/digital-marketing.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/24nNkCfZrwLqf4Jv5",
      features: [
         "Search Engine Optimization (SEO)",
         "Social Media Marketing",
         "Content Marketing Strategy",
         "Google Ads & Facebook Ads",
         "Email Marketing",
         "Analytics & Performance Tracking",
      ],
      prerequisites: [
         "Basic internet navigation skills",
         "Understanding of social media platforms",
         "Interest in marketing and business",
      ],
      outcomes: [
         "Create effective digital marketing campaigns",
         "Optimize websites for search engines",
         "Manage social media marketing",
         "Analyze campaign performance",
         "Drive online business growth",
      ],
   },
   {
      id: 5,
      title: "Backend Development",
      description:
         "Build robust server-side applications, design APIs, and master database management using modern backend technologies.",
      image: "/images/backend.jpg",
      slots: 50,
      duration: "8 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/TZgmFPSrHHK28pSF6",
      features: [
         "Server-side Programming",
         "Database Design & Management",
         "RESTful API Development",
         "Authentication & Security",
         "Cloud Deployment",
         "Performance Optimization",
      ],
      prerequisites: [
         "Basic programming knowledge",
         "Understanding of web technologies",
         "Problem-solving skills",
      ],
      outcomes: [
         "Build scalable backend applications",
         "Design and implement APIs",
         "Manage databases effectively",
         "Deploy applications to the cloud",
         "Implement security best practices",
      ],
      // Additional comprehensive data
      longDescription:
         "This course provides a comprehensive introduction to backend engineering fundamentals. Over 12 weeks, learners will develop skills in server-side programming, building APIs, working with databases, authentication, and deploying backend services. Emphasis is on practical application through projects that demonstrate real-world backend development concepts.",
      learningObjectives: [
         "Understand core backend concepts including servers, databases, and APIs",
         "Build RESTful APIs using Node.js and Express",
         "Design and interact with relational and NoSQL databases",
         "Implement user authentication and authorization",
         "Apply middleware, error handling, and testing strategies",
         "Deploy backend applications on cloud platforms",
         "Collaborate with frontend engineers through API design",
      ],
      targetAudience: [
         {
            title: "Aspiring Backend Developers",
            description:
               "Starting from scratch or after frontend basics? This course equips you with the core backend skills to build APIs, work with databases, and deploy services.",
         },
         {
            title: "Junior Developers Looking to Specialize",
            description:
               "Expand your knowledge beyond frontend or full-stack basics by deep diving into backend best practices and architecture.",
         },
         {
            title: "Career Switchers into Tech",
            description:
               "If you want to move into tech with a focus on backend programming, this course offers a structured path with real-world projects.",
         },
         {
            title: "Entrepreneurs and Tech Founders",
            description:
               "Learn to build and manage the server-side of your applications independently, reducing dependency on external developers.",
         },
      ],
   },
   {
      id: 6,
      title: "Basic Computer Skills",
      description:
         "Get started with essential computer skills, including office software, internet navigation, and fundamental digital literacy.",
      image: "/images/basic-comp.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/FivfRXKJNP8R3GWS7",
      features: [
         "Computer Fundamentals",
         "Microsoft Office Suite",
         "Internet Navigation & Safety",
         "Email Management",
         "File Organization",
         "Basic Troubleshooting",
      ],
      prerequisites: [
         "No prior computer experience required",
         "Willingness to learn",
         "Access to a computer",
      ],
      outcomes: [
         "Navigate computers confidently",
         "Use office software effectively",
         "Browse the internet safely",
         "Manage digital files and folders",
         "Communicate digitally",
      ],
      // Additional comprehensive data
      longDescription:
         "A beginner-friendly, hands-on training program that transforms complete novices into confident, digitally capable individuals. This course not only builds foundational skills but also introduces learners to essential tools used in modern offices and digital spaces.",
      modules: [
         {
            title: "Computer Essentials & Digital Confidence",
            description:
               "Build a strong foundation in operating and understanding computers.",
            topics: [
               "Parts of a computer & how they work",
               "Starting up, navigating, and shutting down systems properly",
               "Using keyboard shortcuts and mouse techniques",
               "Introduction to operating systems (Windows/macOS)",
               "Understanding storage: hard drives, USBs, and cloud storage",
            ],
         },
         {
            title: "Mastering the Microsoft Office Suite",
            description:
               "Gain practical proficiency in everyday business tools.",
            topics: [
               "Microsoft Word: Typing, formatting, templates, and document styling",
               "Excel: Entering data, basic formulas, charts, and simple reports",
               "PowerPoint: Creating engaging slideshows with animations and visuals",
               "Bonus: Google Docs, Sheets & Slides overview",
            ],
         },
         {
            title: "Internet Navigation & Online Safety",
            description: "Build internet literacy and practice safe browsing.",
            topics: [
               "Using browsers (Chrome, Firefox, Edge) and search engines (Google, Bing)",
               "Identifying trustworthy websites and avoiding scams",
               "Creating and managing strong passwords",
               "Understanding phishing, malware, and digital hygiene",
               "Using antivirus tools and browser security settings",
            ],
         },
         {
            title: "Email & Digital Communication",
            description: "Communicate professionally in a digital world.",
            topics: [
               "Setting up and organizing email accounts (Gmail, Outlook)",
               "Writing formal and informal emails",
               "Attaching and managing files",
               "Calendar and meeting invites",
               "Netiquette (email etiquette) for workplace communication",
            ],
         },
         {
            title: "File Management & Organization",
            description: "Keep your digital workspace clean and productive.",
            topics: [
               "Creating, naming, and organizing folders",
               "Moving, copying, and deleting files",
               "Using cloud storage (Google Drive, OneDrive)",
               "Backing up important files",
               "Understanding file types (.docx, .pdf, .jpg, etc.)",
            ],
         },
         {
            title: "Troubleshooting & Self-Help Basics",
            description: "Solve simple tech problems independently.",
            topics: [
               "Common startup and shutdown issues",
               "Fixing Wi-Fi and internet connectivity problems",
               "Updating software and managing system settings",
               "Clearing browser history and cache",
               "When and how to seek technical support",
            ],
         },
      ],
   },
   {
      id: 7,
      title: "Web Development",
      description:
         "Learn modern web development technologies, build responsive websites, and master HTML, CSS, and JavaScript frameworks.",
      longDescription:
         "Become a skilled web developer with our comprehensive course covering front-end and full-stack development. Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Learn to build responsive, interactive websites and web applications.",
      image: "/images/web-dev.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/JomvgxuE3qLRm5bQ6",
      features: [
         "HTML, CSS & JavaScript",
         "Responsive Web Design",
         "React & Next.js",
         "Version Control with Git",
         "Web Performance Optimization",
         "Deployment & Hosting",
      ],
      prerequisites: [
         "Basic computer skills",
         "Logical thinking ability",
         "Interest in technology",
      ],
      outcomes: [
         "Build modern, responsive websites",
         "Create interactive web applications",
         "Use modern development tools",
         "Deploy websites to the internet",
         "Work with development teams",
      ],
   },
   {
      id: 8,
      title: "Basic Video Editing",
      description:
         "Learn the foundations of video editing using popular tools. Cut, trim, and enhance footage to create engaging and professional content.",
      image: "/images/video-editing.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink:
         "https://docs.google.com/forms/d/e/1FAIpQLSemfsfMJoP0QnUs8EpFTOAZAse62KJoZ-mhUfMDnKoswjhwPQ/viewform?usp=sharing&ouid=105879208983633770652",
      features: [
         "Introduction to CapCut",
         "Adding audio or music to your video",
         "Applying overlays in video editing",
         "Creating video reactions",
         "Changing video backgrounds",
         "Adding subtitles and captions",
         "Cloning yourself in a video",
         "Blurring your video background",
         "Creating a looped clone effect",
         "Appearing to come out of a phone screen",
         "Drink refill visual trick",
         "Jumping over a building effect",
         "Performing object magic in videos",
         "Changing objects mid-scene",
         "Disappearing using outfit transition",
         "Simulating a car explosion",
         "Placing objects on buildings",
         "Phone swipe transition effect",
         "Controlling moving cars in your video",
         "Making invisible objects appear",
         "Carrying a detached human head illusion",
         "Simulating a car hit impact",
         "Lying under a moving vehicle illusion",
         "Kicking a vehicle effect",
         "Climbing up a building trick",
         "Standing at the edge of a cliff effect",
         "Performing a dramatic building jump",
         "Adding objects to your videos using AI",
      ],
      prerequisites: [
         "Basic computer skills",
         "Creative interest",
         "No prior editing experience required",
      ],
      outcomes: [
         "Edit professional-quality videos",
         "Create engaging content",
         "Master industry-standard tools",
         "Understand video production workflow",
         "Build a video portfolio",
      ],
      // Additional comprehensive data
      longDescription:
         "Unlock your creative potential with our three-part video editing program. Whether you're starting with just your phone or ready to edit full-scale productions, our structured trainings guide you through every level—from mobile editing to desktop software and even the latest AI-powered editing tools.",
      programs: [
         {
            title: "Mobile Video Editing Foundations",
            description:
               "A perfect entry point for beginners, content creators, and marketers. This hands-on course teaches you how to edit directly on your smartphone using popular mobile apps.",
            modules: [
               "Fundamentals of video editing and visual storytelling",
               "Editing with tools like CapCut, InShot, Alight Motion, VN, and Adobe Rush",
               "Cutting, trimming, transitions, effects, and adding music",
               "Mobile formats for TikTok, Instagram, Reels, and YouTube Shorts",
               "Subtitles, overlays, and basic motion effects",
            ],
         },
         {
            title: "Professional Video Editing (Desktop Edition)",
            description:
               "A standalone training for those looking to produce high-quality, cinematic, and brand-level content using professional-grade desktop software.",
            modules: [
               "Mastering Adobe Premiere Pro, DaVinci Resolve, and Final Cut Pro",
               "Multi-track editing, B-roll layering, and visual pacing",
               "Audio mixing, voiceovers, and soundtrack integration",
               "Color correction and cinematic color grading",
               "Exporting for different platforms (YouTube, Web, TV, etc.)",
            ],
         },
         {
            title: "AI Video Editing & Automation",
            description:
               "This advanced course explores the future of video editing by teaching you how to use AI tools to speed up your workflow and unlock new creative possibilities.",
            modules: [
               "Using tools like Pictory, Runway ML, Descript, and Lumen5",
               "Auto-captioning, voice cloning, and smart cuts",
               "Text-to-video generation for marketing & explainer videos",
               "Converting blogs or scripts into animated clips",
               "Editing videos with AI-powered object and face detection",
            ],
         },
      ],
   },
   {
      id: 9,
      title: "GenAI Accelerator for Business",
      description:
         "Explore how Generative AI transforms modern businesses. Learn to integrate AI tools for automation, content, and strategic advantage.",
      longDescription:
         "Stay ahead of the AI revolution with our comprehensive GenAI for Business course. Learn to leverage cutting-edge AI tools like ChatGPT, Claude, and Midjourney to transform your business operations, automate workflows, and create competitive advantages in the AI-driven economy.",
      image: "/images/genai-business.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/pnojRCz8i4gTqP4r9",
      features: [
         "AI Strategy Development",
         "Business Process Automation",
         "AI-Powered Content Creation",
         "Prompt Engineering",
         "AI Ethics & Governance",
         "ROI Measurement",
      ],
      prerequisites: [
         "Basic Digital Literacy",
         "Familiarity with Business or Team Operations",
         "Open Mindset Toward Technology",
         "Access to a Laptop or Digital Device",
         "Basic Communication Skills",
      ],
      outcomes: [
         "Develop AI business strategies",
         "Implement AI automation",
         "Create AI-powered content",
         "Measure AI ROI",
         "Lead AI transformation initiatives",
      ],
      modules: [
         {
            title: "Foundations & Mindset",
            description:
               "Build the foundation for AI adoption and develop the right mindset for AI-powered business transformation.",
            topics: [
               "Introduction to AI",
               "Mindset Coaching",
               "The Four Ages of Productivity",
               "Building Your Confidence",
               "Getting Ready for the Real World",
            ],
         },
         {
            title: "Creative Skills & Content Creation",
            description:
               "Master AI-powered content creation and develop creative skills for the modern digital landscape.",
            topics: [
               "Content Creation",
               "GenAI Basics & Prompt Mastery",
               "Practical GenAI Content Skills",
               "AI-Powered Writing Systems",
               "Social Media in the Age of AI",
            ],
         },
         {
            title: "Visuals, Branding & Media",
            description:
               "Learn to create compelling visual content and branding materials using AI tools.",
            topics: [
               "GenAI for Image and Video Generation",
               "GenAI for Branding and Design",
            ],
         },
         {
            title: "AI Tools & Personalization",
            description:
               "Build personalized AI solutions and create custom tools without coding.",
            topics: [
               "WORKSHOP 1: Personalized AI",
               "Build Your AI Team (Agents & Chatbots)",
               "WORKSHOP 2: Customization",
               "Build with AI: Creating Smart Tools without Code",
               "Code Without Coding",
            ],
         },
         {
            title: "Smart Systems & Automation",
            description:
               "Create automated workflows and build intelligent systems for business operations.",
            topics: [
               "Create an Automated AI Workflow",
               "Build a No-Code Web App",
               "Build Trust at Scale with AI",
            ],
         },
         {
            title: "Research & Analytics",
            description:
               "Master AI-powered research techniques and data analytics for informed decision-making.",
            topics: [
               "Smart Research in the Age of AI",
               "WORKSHOP 3: High-Level Research",
               "AI for Data Analytics",
            ],
         },
         {
            title: "Productization & Launch",
            description:
               "Learn to package and launch AI-powered digital products and services.",
            topics: [
               "Launch Your First Digital Product",
               "WORKSHOP 4: Digital Production",
            ],
         },
         {
            title: "Final Projects & Deep Dive",
            description:
               "Apply all learned concepts in comprehensive projects and explore advanced AI tools.",
            topics: [
               "WORKSHOP 5: AI Tools Deep Dive",
               "Project",
               "Deliverable",
            ],
         },
      ],
   },
   {
      id: 10,
      title: "GenAI Skill Up",
      description:
         "Level up your knowledge of Generative AI with practical skills. Learn prompt engineering, tool workflows, and real-world applications.",
      longDescription:
         "Enhance your AI skills with our practical GenAI Skill Up course. Master advanced prompt engineering techniques, explore cutting-edge AI tools, and learn to create sophisticated AI-powered solutions for various industries and use cases.",
      image: "/images/genai-skillup.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/4RZveCdv1C8yRj9Y9",
      features: [
         "Advanced Prompt Engineering",
         "AI Tool Mastery",
         "Workflow Automation",
         "Custom AI Solutions",
         "AI Integration Techniques",
         "Performance Optimization",
      ],
      prerequisites: [
         "Basic Digital Literacy",
         "Basic AI tool experience",
         "Technical curiosity",
         "Access to a Laptop or Digital Device",
         "Problem-solving mindset",
      ],
      outcomes: [
         "Master advanced AI techniques",
         "Create custom AI workflows",
         "Optimize AI performance",
         "Build AI-powered applications",
         "Become an AI expert",
      ],
      modules: [
         {
            title: "Foundations & Mindset",
            description:
               "Advanced foundation building for AI mastery and professional development mindset.",
            topics: [
               "Introduction to AI",
               "Mindset Coaching",
               "The Four Ages of Productivity",
               "Building Your Confidence",
               "Getting Ready for the Real World",
            ],
         },
         {
            title: "Creative Skills & Content Creation",
            description:
               "Advanced content creation techniques and AI-powered creative workflows.",
            topics: [
               "Content Creation",
               "GenAI Basics & Prompt Mastery",
               "Practical GenAI Content Skills",
               "AI-Powered Writing Systems",
               "Social Media in the Age of AI",
            ],
         },
         {
            title: "AI Tools & Personalization",
            description:
               "Build sophisticated AI tools and personalized solutions for specific use cases.",
            topics: [
               "WORKSHOP 1: Personalized AI",
               "Build Your AI Team (Agents & Chatbots)",
               "WORKSHOP 2: Customization",
               "Build with AI: Creating Smart Tools without Code",
               "Code Without Coding",
            ],
         },
         {
            title: "Smart Systems & Automation",
            description:
               "Create complex automated systems and intelligent workflows for professional applications.",
            topics: [
               "Create an Automated AI Workflow",
               "Build a No-Code Web App",
               "Build Trust at Scale with AI",
            ],
         },
      ],
   },
   {
      id: 11,
      title: "Physical Bootcamp",
      description:
         "Join our in-person bootcamps and gain hands-on skills in a collaborative environment. Coming soon to Kano, Abuja, Sokoto, Lagos, and Jigawa.",
      longDescription:
         "Experience immersive learning with our Physical Bootcamp program. Join fellow learners in state-of-the-art facilities across Nigeria for intensive, hands-on training in various technology and business skills. Benefit from face-to-face mentorship, networking opportunities, and collaborative projects.",
      image: "/images/bootcamps.jpg",
      slots: 50,
      duration: "4 Weeks",
      startDate: "Coming Soon",
      type: "physical",
      formLink: "https://forms.gle/Jg79Cqgs2KPpSWRz5",
      features: [
         "In-Person Learning",
         "Hands-On Projects",
         "Peer Collaboration",
         "Expert Mentorship",
         "Networking Opportunities",
         "State-of-the-Art Facilities",
      ],
      prerequisites: [
         "Commitment to attend in-person",
         "Basic learning readiness",
         "Collaborative mindset",
      ],
      outcomes: [
         "Gain practical skills",
         "Build professional network",
         "Complete real-world projects",
         "Receive personalized mentorship",
         "Join alumni community",
      ],
   },
   {
      id: 12,
      title: "Tech‑Business School",
      description:
         "Courses specifically designed for businesses and organizational teams. Each module ties real‑world business challenges into a logical, skills‑first learning path.",
      longDescription:
         "In just 1 month, teams dive deep into core tech‑business fundamentals: strategic planning, digital tools adoption, cross‑functional communication and more. Every lesson is driven by real use‑cases so your organization can immediately apply what you learn.",
      image: "/images/tech-buss.jpg",
      slots: 50,
      duration: "1 Month",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/yk5ShE2oABXzvwPW6",
      features: [
         "Business‑driven curriculum",
         "Hands‑on group workshops",
         "Digital tools & platforms",
         "Strategic planning exercises",
         "Cross‑functional collaboration",
      ],
      prerequisites: [
         "Aiming to bridge tech & business",
         "Teams of 3+ participants",
         "Basic computer literacy",
      ],
      outcomes: [
         "Develop actionable tech‑business roadmaps",
         "Implement digital tools effectively",
         "Improve cross‑team communication",
         "Drive measurable ROI on projects",
      ],
      targetAudience: [
         {
            title: "Business Leaders & Managers",
            description:
               "Align technical teams around strategic goals and digital initiatives.",
         },
         {
            title: "Cross‑Functional Teams",
            description:
               "Sharpen collaboration between product, marketing, and engineering.",
         },
         {
            title: "SMB Owners & Entrepreneurs",
            description:
               "Adopt scalable tech solutions to grow your business efficiently.",
         },
      ],
      curriculum: [
         {
            week: 1,
            title: "Strategy & Planning",
            description:
               "Define objectives, stakeholder mapping, and KPI frameworks.",
         },
         {
            week: 2,
            title: "Digital Tools & Workflows",
            description:
               "Hands‑on with collaboration, project management, and analytics platforms.",
         },
         {
            week: 3,
            title: "Cross‑Functional Alignment",
            description:
               "Workshops on communication, agile rituals, and decision‑making frameworks.",
         },
         {
            week: 4,
            title: "Capstone & Next Steps",
            description:
               "Team presentations, feedback sessions, and action‑plan roadmaps.",
         },
      ],
   },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
   const normalizedSlug = slug.toLowerCase();
   return coursesData.find((course) => {
      const courseSlug = course.title
         .toLowerCase()
         .replace(/[^a-z0-9]+/g, "-")
         .replace(/(^-|-$)/g, "");
      return courseSlug === normalizedSlug;
   });
};

export const generateSlug = (title: string): string => {
   return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
};
