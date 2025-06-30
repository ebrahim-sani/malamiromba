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
};

export const coursesData: Course[] = [
   {
      id: 1,
      title: "Product Management",
      description:
         "Master the art of product management, from ideation to launch. Learn market research, roadmap planning, and agile methodologies.",
      longDescription:
         "This comprehensive Product Management course will transform you into a strategic product leader. You'll learn to identify market opportunities, conduct user research, create compelling product roadmaps, and work effectively with cross-functional teams. Our curriculum covers everything from product discovery and validation to launch strategies and post-launch optimization.",
      image: "/images/product-management.jpg",
      slots: 48,
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
   },
   {
      id: 2,
      title: "Creative Design",
      description:
         "Beginner-friendly training in graphics, branding, and product design. Get hands-on with industry tools, and start creating beautiful visuals.",
      longDescription:
         "Unleash your creative potential with our comprehensive Creative Design course. From fundamental design principles to advanced techniques, you'll master industry-standard tools like Adobe Creative Suite, Figma, and Sketch. Learn to create stunning graphics, develop brand identities, and design user-centered digital experiences.",
      image: "/images/creative-design.jpg",
      slots: 48,
      duration: "8 Weeks",
      startDate: "JUNE 9, 2025",
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
   },
   {
      id: 3,
      title: "Data Analysis",
      description:
         "Learn to analyze complex datasets, create meaningful insights, and make data-driven decisions using modern analytical tools.",
      longDescription:
         "Transform raw data into actionable insights with our comprehensive Data Analysis course. Master statistical analysis, data visualization, and predictive modeling using tools like Python, R, Excel, and Tableau. Learn to clean, process, and analyze large datasets to drive business decisions.",
      image: "/images/data-analysis.jpg",
      slots: 48,
      duration: "8 Weeks",
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
         "Make data-driven business decisions",
         "Use advanced analytical tools",
         "Present insights effectively",
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
      slots: 48,
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
      longDescription:
         "Master the art of backend development with our comprehensive course covering server-side programming, database design, API development, and cloud deployment. Learn popular technologies like Node.js, Python, databases, and cloud platforms to build scalable web applications.",
      image: "/images/backend.jpg",
      slots: 48,
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
   },
   {
      id: 6,
      title: "Basic Computer Skills",
      description:
         "Get started with essential computer skills, including office software, internet navigation, and fundamental digital literacy.",
      longDescription:
         "Build a strong foundation in computer literacy with our comprehensive Basic Computer Skills course. Perfect for beginners, this course covers everything from basic computer operations to advanced office software usage, internet safety, and digital communication.",
      image: "/images/basic-comp.jpg",
      slots: 48,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      formLink: "https://forms.gle/Uz3jH8v9TzUC3e3M7",
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
   },
   {
      id: 7,
      title: "Web Development",
      description:
         "Learn modern web development technologies, build responsive websites, and master HTML, CSS, and JavaScript frameworks.",
      longDescription:
         "Become a skilled web developer with our comprehensive course covering front-end and full-stack development. Master HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Learn to build responsive, interactive websites and web applications.",
      image: "/images/web-dev.jpg",
      slots: 48,
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
      longDescription:
         "Master the art of video editing with our hands-on course covering industry-standard software and techniques. Learn to create compelling video content for social media, marketing, and professional projects using tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.",
      image: "/images/video-editing.jpg",
      slots: 48,
      duration: "4 Weeks",
      startDate: "JUNE 9, 2025",
      features: [
         "Video Editing Software Mastery",
         "Cutting & Trimming Techniques",
         "Color Correction & Grading",
         "Audio Editing & Mixing",
         "Motion Graphics Basics",
         "Export & Compression",
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
   },
   {
      id: 9,
      title: "GenAI Accelerator for Business",
      description:
         "Explore how Generative AI transforms modern businesses. Learn to integrate AI tools for automation, content, and strategic advantage.",
      longDescription:
         "Stay ahead of the AI revolution with our comprehensive GenAI for Business course. Learn to leverage cutting-edge AI tools like ChatGPT, Claude, and Midjourney to transform your business operations, automate workflows, and create competitive advantages in the AI-driven economy.",
      image: "/images/genai-business.jpg",
      slots: 48,
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
         "Business experience or interest",
         "Basic technology understanding",
         "Strategic thinking skills",
      ],
      outcomes: [
         "Develop AI business strategies",
         "Implement AI automation",
         "Create AI-powered content",
         "Measure AI ROI",
         "Lead AI transformation initiatives",
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
      slots: 48,
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
         "Basic AI tool experience",
         "Technical curiosity",
         "Problem-solving mindset",
      ],
      outcomes: [
         "Master advanced AI techniques",
         "Create custom AI workflows",
         "Optimize AI performance",
         "Build AI-powered applications",
         "Become an AI expert",
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
      slots: 48,
      duration: "4 Weeks",
      startDate: "Coming Soon",
      type: "physical",
      opened: false,
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
