export const notificationData = {
   id: "event-1",
   type: "event",
   message: "Join our upcoming Tech Workshop on AI Development",
   date: "June 15, 2024",
   time: "2:00 PM",
   link: "https://lu.ma/leoznjsc",
   linkText: "Register now",
   dismissible: true,
};

export const links = [
   { id: "/", name: "Home" },
   { id: "#about", name: "About us" },
   {
      id: "#events",
      name: "Events",
      dropdown: [
         { id: "#upcoming-events", name: "Upcoming Events" },
         { id: "#past-events", name: "Past Events" },
      ],
   },
   {
      id: "#get-involved",
      name: "Get Involved",
      dropdown: [
         {
            id: "#volunteer",
            name: "Volunteer",
            link: "https://docs.google.com/forms/d/1hvdKkXfWUfCCDq7C6toln9SZvc_NCD9k44WmsFCuZQk/edit",
         },
         {
            id: "#partner",
            name: "Partner",
            link: "https://docs.google.com/forms/d/1t9nUwl18qDQkKw_0X3xUlzA3K1eUpa3zUlf9Hth8Z80/edit",
         },
      ],
   },
];

export const footerLinks = {
   company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Partners", href: "#" },
      {
         name: "For Candidates",
         href: "https://docs.google.com/forms/d/1hvdKkXfWUfCCDq7C6toln9SZvc_NCD9k44WmsFCuZQk/edit",
      },
      {
         name: "For Employers",
         href: "https://docs.google.com/forms/d/1t9nUwl18qDQkKw_0X3xUlzA3K1eUpa3zUlf9Hth8Z80/edit",
      },
   ],
   workWithUs: [
      {
         name: "Partner with us",
         href: "https://docs.google.com/forms/d/1t9nUwl18qDQkKw_0X3xUlzA3K1eUpa3zUlf9Hth8Z80/edit",
      },
      {
         name: "Become a mentor",
         href: "https://docs.google.com/forms/d/1NkmMDkLaUHOo_y8XxeIs7yBm6Rq4pRoOEAM5uAdTAgc/edit?usp=forms_home&ths=true",
      },
   ],
   companySecondary: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#team" },
      { name: "Press and Media", href: "#" },
      { name: "Contact", href: "#" },
   ],
   socialMedia: [
      // {
      //    name: "LinkedIn",
      //    href: "https://www.linkedin.com/company/malamiromba/",
      // },
      {
         name: "Slack community",
         href: "https://join.slack.com/t/malamirombainstitute/shared_invite/zt-34ez4m6z8-pA6o7Jz~ikx6Kp6uUSRbew",
      },
      {
         name: "WhatsApp community",
         href: "https://whatsapp.com/channel/0029Vao9mQVG8l5FEnVvWH3B",
      },
      // { name: "X", href: "https://x.com/Malamiromba" },
      // { name: "Instagram", href: "https://www.instagram.com/malamirombaltd/" },
   ],
   socialIcons: [
      {
         name: "Instagram",
         icon: "Instagram",
         href: "https://www.instagram.com/malamirombaltd/",
      },
      {
         name: "Facebook",
         icon: "Facebook",
         href: "https://web.facebook.com/Malamiromba/",
      },
      {
         name: "Twitter",
         icon: "BsTwitterX",
         href: "https://x.com/Malamiromba",
      },
      {
         name: "LinkedIn",
         icon: "Linkedin",
         href: "https://www.linkedin.com/company/malamiromba/",
      },
      { name: "Telegram", icon: "FaTelegram", href: "https://t.me/SkillArewa" },
   ],
};

export const teamMembers = [
   {
      id: 1,
      name: "Ibrahim Zubairu",
      role: "Founder, & Tech. Product Manager",
      image: "/images/ib-baba.jpg",
      linkedin: "https://www.linkedin.com/in/ibrahimbaba/",
      x: "https://x.com/@supersalafee",
      p_link: "",
      instagram: "",
      facebook: "https://www.facebook.com/share/18kYfQdrM2/",
      profession: "product_manager",
   },
   {
      id: 2,
      name: "Ibrahim Sani",
      role: "Full Stack Engineer",
      image: "/images/imran.jpg",
      linkedin: "https://www.linkedin.com/in/ebrahim-sani/",
      p_link: "https://www.github.com/ebrahim-sani",
      instagram: "",
      x: "https://x.com/imran_x35",
      profession: "developer",
   },
   {
      id: 3,
      name: "Muhammad A. Babaja",
      role: "Creative Designer & Animator",
      image: "/images/babaja.jpg",
      linkedin: "https://www.linkedin.com/in/muhammad-abdullahi-babaja",
      p_link: "",
      instagram: "",
      x: "https://x.com/@babajerh_design",
      profession: "designer",
   },
   {
      id: 4,
      name: "Mustapha Hussein",
      role: "UI/UX Designer",
      image: "/images/hussain.jpg",
      linkedin: "https://www.linkedin.com/in/mustapha-hussein-366645287",
      p_link: "https://dribbble.com/mustyhussein",
      instagram: "",
      x: "",
      profession: "designer",
   },
   {
      id: 5,
      name: "Abdulkhaliq Abdullahi COO",
      role: "Data Analyst & Community Manager",
      image: "/images/aa.jpeg",
      linkedin: "https://www.linkedin.com/in/abdulkhaliqaliyu/",
      p_link: "",
      instagram: "",
      x: "",
      profession: "",
   },
   {
      id: 6,
      name: "Halima Muhammad",
      role: "Customer success, Admission & Tuition Manager",
      image: "/images/halima.jpg",
      linkedin: "https://www.linkedin.com/in/halima-muhammad-26459684",
      p_link: "",
      instagram: "",
      facebook: "https://www.facebook.com/Haleemoh54",
      x: "https://x.com/@haleemohhh",
      profession: "",
   },
   {
      id: 7,
      name: "Abdulhadi N. Bashir",
      role: "Hausa Linguistic & Translator",
      image: "/images/hadi.jpg",
      linkedin: "https://www.linkedin.com/in/abdulhadi-n-bashir",
      p_link: "",
      instagram: "",
      x: "https://x.com/@abdulhadi_nasir",
      profession: "translator",
   },
   {
      id: 8,
      name: "Ukasha A. Aminu NLP",
      role: " Automation Engineer",
      image: "/images/ukasha.jpg",
      linkedin: "https://www.linkedin.com/in/ukkasha",
      p_link: "",
      instagram: "",
      x: "",
      profession: "",
   },
   {
      id: 9,
      name: "A.S Abubakar",
      role: "Product Designer",
      image: "/images/as.jpg",
      linkedin: "https://www.linkedin.com/in/a-s-abubakar-81b8502a6",
      p_link: "https://dribbble.com/ArdentInk1",
      instagram: "",
      x: "",
      profession: "designer",
   },
   {
      id: 10,
      name: "Moh'd Nasir",
      role: "Software Developer",
      image: "/images/mohdnas.jpeg",
      linkedin:
         "https://www.linkedin.com/in/ibrahim-zubairu-ib-baba-0a1b4a1b8/",
      p_link: "https://github.com/mohdnas0001",
      instagram: "",
      x: "",
      profession: "developer",
   },
   {
      id: 11,
      name: "Aleilo Q. Abiola",
      role: "Digital Growth & Creative Designer",
      image: "/images/aleio.jpg",
      linkedin: "https://www.linkedin.com/in/aleilo-qamardeen-9193ab141",
      p_link: "",
      instagram: "",
      x: "",
      profession: "",
   },
   {
      id: 12,
      name: "Abubakar Umar",
      role: "Social Lead Strategist",
      image: "/images/umar.jpg",
      linkedin: "https://www.linkedin.com/in/abubakarumar",
      p_link: "",
      instagram: "",
      x: "",
      profession: "",
   },
];

export const agency_data = {
   heading: "Join Over 25K+ Community",
   services: [
      "Active Tech Community",
      "Vibrant Job Community",
      "Training institute",
      "Tech Consulting",
      "1-on-1 Mentorship",
   ],
   cta: "Get started for free",
   aboutUs: {
      title: "About us",
      content:
         "We're more than a tech mentorship platform. We're a movement of dreamers, builders, and changemakers, committed to using technology to uplift our communities and reshape the future of Northern Nigeria and beyond.\n\nAt Malamiromba Ltd, we blend purpose with innovation. As a community-driven edutech startup, we host the largest tech community for Arewa professionals, with 25K+ members and 36+ active mentors.\n\nOur mission is simple: make tech skills accessible, relatable, and impactful.",
   },
   ourVision: {
      title: "Our Vision",
      content:
         "Empower 10,000+ African youth by 2030 through digital upskilling, job access, and tailored mentorship, especially for underserved communities.",
   },
   whatWeDo: {
      title: "What We Do",
      content:
         "Malamiromba Institute – Hands-on, high-income tech skills training in both English and Hausa. \n\nDigital Agency – Connecting top-tier talent with forward-thinking organizations, while creating content that inspires, educates, and drives change. \n\nWe’re building a future where growth, innovation, and impact are shared, together.",
   },
   offerings: {
      title: "Our offerings",
      subtitle: "Explore top services tailored to your needs",
      options: [
         {
            id: "tech-consulting",
            title: "Tech consulting",
            description:
               "Software, and tech solutions engineered to set you apart. We are very good at growing businesses with tech. start project",
            image: "/images/off1.png",
            content: {
               heading:
                  "We serve startups in need of MVP, small and growing business, including and government entities in need of technical firepower.",
               subheading:
                  "Our approach combines innovation and expertise to deliver exceptional results, ensuring your success at every stage of development.",
               journey: {
                  title: "Our process",
                  steps: [
                     {
                        title: "Discovery + Planning",
                        description:
                           "We will meet you to discuss and understand your idea. Then we outline your business objectives, the market needs and align them with the overall product goals.",
                        details:
                           "We go further to research the target user, to find out how they would interact with your solution as well as the best platforms, and infrastructure to deliver your solution to them.",
                     },
                     {
                        title: "Design + MVP",
                        description:
                           "We apply Human Centered Design to develop super simple interfaces, and experience that meet your  app goal with a smooth learning curve to the users.",
                        details:
                           "We quickly put out our Minimum Viable Product (MVP) which is a scaled down version of your app, get users feedbacks and only add what is expedient until we reach the goal.",
                     },
                     {
                        title: "Build + Launch",
                        description:
                           "We employ a mix of Agile and traditional approach to bring your app to life with clean code that passes necessary test, before they are sent out.",
                        details:
                           "From the MVP, to a full product, we kep collecting feedback, iterating, and improving the user experience while adding needed features until the entire application ships fully.",
                     },
                     {
                        title: "Support + Growth",
                        description:
                           "Product development is an ongoing exercise. Once the product goes into real world, we monitor how your customers interact with it, we walk with you all the way as your app grows to become a global phenom.",
                        details:
                           "We also help implement new features as the need arises, enhance existing ones and continue making improvements to enable you stay ahead of competitors.",
                     },
                  ],
               },
               deliverables: {
                  title: "Deliverables at every stage",
                  categories: [
                     {
                        name: "Plan",
                        items: [
                           "User Research",
                           "Market Analysis",
                           "Roadmap",
                           "Strategy",
                        ],
                     },
                     {
                        name: "Build",
                        items: [
                           "Wireframes/Mockups",
                           "Design System",
                           "UI/UX Design",
                           "Development",
                           "Development",
                           "Launch",
                        ],
                     },
                     {
                        name: "Grow",
                        items: [
                           "Usability test",
                           "Support/ Maintenance",
                           "Digital Marketing",
                        ],
                     },
                  ],
               },
               cta: "Get estimated",
            },
         },
         {
            id: "arewa-job-placement",
            title: "Arewa job placement",
            description:
               "We connect talent with purpose—offering access to jobs, mentorship, and tech-driven upskilling for Arewa professionals ready to grow in the digital economy. Whether you're launching your career or leveling up, this is your bridge from ambition to achievement.",
            image: "/images/off2.png",
            content: {
               heading: "Schedule a FREE Consultation",
               steps: [
                  {
                     number: 1,
                     title: "Discover our best matches",
                     description:
                        "Our trainers are professionals with real-world experience in the field of training.",
                  },
                  {
                     number: 2,
                     title: "Skip, save, or apply",
                     description:
                        "Your recommendations get smarter the more you interact.",
                  },
                  {
                     number: 3,
                     title: "Land your next role",
                     description:
                        "Apply smarter with useful insights and find your next dream job.",
                  },
               ],
               image: "/images/off3.png",
               cta: "Find a job",
               secondaryCta: "See what we have done for others",
            },
         },
         {
            id: "corporate-training",
            title: "Corporate training",
            description:
               "Develop your team We will get your team up to date with the latest tech education needed to boost your business. A tech savvy team saves time, achieves more and stands out. Reach your goals.",
            image: "/images/off3.png",
            content: {
               heading:
                  "Equip your team with the skill to take your organization to the next level.",
               benefits: [
                  {
                     number: 1,
                     title: "Professional.",
                     description:
                        "Our trainers are professionals with real-world experience in the field of training.",
                  },
                  {
                     number: 2,
                     title: "Connect.",
                     description:
                        "With top mentors and other industry professionals in your field.",
                  },
                  {
                     number: 3,
                     title: "Hands-on.",
                     description:
                        "Our trainings involve real-world scenarios for easy application of lessons.",
                  },
               ],
               image: "/images/team-showcase.png",
               cta: "Book program",
            },
         },
      ],
   },
};

export const institute_data = {
   heading: "LEARN TECH SKILLS",
   services: [
      "Hands-on practical training",
      "Industry-ready curriculum",
      "Expert mentorship",
      "Project-based learning",
      "Career support services",
   ],
   cta: "Explore courses",
   aboutUs: {
      title: "About our institute",
      content:
         "Our institute is dedicated to providing high-quality tech education that prepares students for real-world challenges. With a focus on practical skills and industry relevance, we ensure our graduates are ready to make an impact from day one. Our curriculum is constantly updated to reflect the latest technologies and best practices in the industry.",
   },
   offerings: {
      title: "Our programs",
      subtitle: "Find the right learning path for your career goals",
      options: [
         {
            id: "bootcamps",
            title: "Bootcamps",
            image: "/placeholder.svg?height=200&width=300",
            content: {
               heading:
                  "Intensive, immersive learning experiences to jumpstart your tech career",
               subheading:
                  "Our bootcamps are designed to transform beginners into job-ready professionals in just a few months.",
               programs: [
                  {
                     title: "Web Development",
                     duration: "12 weeks",
                     description:
                        "Learn front-end and back-end technologies to build modern web applications.",
                  },
                  {
                     title: "Data Science",
                     duration: "14 weeks",
                     description:
                        "Master data analysis, machine learning, and visualization techniques.",
                  },
                  {
                     title: "UX/UI Design",
                     duration: "10 weeks",
                     description:
                        "Develop user-centered design skills for digital products.",
                  },
                  {
                     title: "Cybersecurity",
                     duration: "16 weeks",
                     description:
                        "Learn to protect systems and networks from digital attacks.",
                  },
               ],
               features: [
                  "Full-time immersive learning",
                  "Project-based curriculum",
                  "Industry expert instructors",
                  "Career coaching and job placement assistance",
                  "Portfolio development",
               ],
               cta: "Apply now",
            },
         },
         {
            id: "part-time-courses",
            title: "Part-time courses",
            image: "/placeholder.svg?height=200&width=300",
            content: {
               heading: "Flexible learning options for working professionals",
               courses: [
                  {
                     title: "Front-end Development",
                     duration: "8 weeks",
                     schedule: "Evenings and weekends",
                  },
                  {
                     title: "Python Programming",
                     duration: "6 weeks",
                     schedule: "Weekends only",
                  },
                  {
                     title: "Digital Marketing",
                     duration: "8 weeks",
                     schedule: "Evenings only",
                  },
                  {
                     title: "Product Management",
                     duration: "10 weeks",
                     schedule: "Flexible online",
                  },
               ],
               benefits: [
                  "Learn while you work",
                  "Smaller time commitment",
                  "Focused skill development",
                  "Networking opportunities",
                  "Immediate application of skills",
               ],
               cta: "Enroll today",
            },
         },
         {
            id: "enterprise-training",
            title: "Enterprise training",
            image: "/placeholder.svg?height=200&width=300",
            content: {
               heading: "Customized training solutions for organizations",
               description:
                  "Upskill your team with tailored training programs designed to address your specific business needs.",
               offerings: [
                  {
                     title: "Custom Curriculum Development",
                     description:
                        "We create specialized learning paths aligned with your organization's goals.",
                  },
                  {
                     title: "On-site Training",
                     description:
                        "Our instructors come to your location for hands-on workshops.",
                  },
                  {
                     title: "Virtual Training Sessions",
                     description:
                        "Live online classes with interactive elements for remote teams.",
                  },
                  {
                     title: "Technical Assessment",
                     description:
                        "Evaluate your team's current skills and identify areas for improvement.",
                  },
               ],
               testimonial: {
                  quote: "The training program significantly improved our team's productivity and innovation capacity.",
                  author: "CTO, Leading Tech Company",
               },
               cta: "Request a consultation",
            },
         },
      ],
   },
};
