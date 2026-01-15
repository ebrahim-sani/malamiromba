export const notificationData = {
   id: "event-1",
   type: "event",
   message: "Join Our Upcoming Tech Workshop & Webinar",
   date: "June 15, 2024",
   time: "2:00 PM",
   dismissible: true,
};

export const links = [
   { id: "/", name: "Home" },
   { id: "#about", name: "About us" },
   {
      id: "#projects",
      name: "Projects",
      dropdown: [
         {
            id: "#projects-edusync",
            name: "Edusync",
            link: "https://malamiromba.com/edusync",
         },
      ],
   },
   {
      id: "#work-with-us",
      name: "Work With Us",
      dropdown: [
         {
            id: "#work-individual",
            name: "Individual",
            link: "https://docs.google.com/forms/d/1hvdKkXfWUfCCDq7C6toln9SZvc_NCD9k44WmsFCuZQk/viewform",
         },
         {
            id: "#work-business",
            name: "Business",
            link: "https://docs.google.com/forms/d/1t9nUwl18qDQkKw_0X3xUlzA3K1eUpa3zUlf9Hth8Z80/viewform",
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
   heading: "Our Products",
   services: [
      "Tathschool",
      "E-Learning Provider",
      "Edusync ng",
      "EcoTalent App",
   ],
   cta: "Get started for free",
   aboutUs: {
      title: "About Us",
      content:
         "At Malamiromba Ltd, we are a Northern Nigeria based software and media company on a mission: to empower people, businesses, and communities through technology, creativity, and opportunities.\n\nWe work with clients to build apps, websites, and digital solutions, craft branding and creative campaigns, and leverage AI and automation to make work simpler, smarter, and more impactful.",
   },
   ourVision: {
      title: "Our Vision",
      content:
         "To be the largest go-to hub in Northern Nigeria for freelancers, digital talent, and innovative solutions turning skills into opportunities and opportunities into real impact.",
   },
   whatWeDo: {
      title: "What We Do",
      content:
         "We create digital solutions that empower businesses, and at the same time, we equip freelancers, creators, and professionals with the skills and opportunities to grow, earn, and make an impact. Every project, every connection, and every opportunity is a step toward changing lives one at a time and building a stronger Northern Nigeria ecosystem.",
   },
   offerings: {
      title: "Featured Projects",
      subtitle: "Check out what we're working on",
      options: [
         {
            id: "tathschool",
            title: "Tathschool",
            description:
               "E-Learning Provider — Making learning truly digital, simple, and memorable with short bilingual courses.",
         },
         {
            id: "edusync",
            title: "Edusync ng",
            description:
               "Bridging The Digital Gap Between Classrooms and the AI Powered Future.",
         },
         {
            id: "ecotalent",
            title: "EcoTalent App",
            description:
               "The Northern Talent Ecosystem — Connecting talent, opportunities, and growth across the North.",
         },
      ],
   },
};

export type HubData = {
   eyebrow: string;
   title: string;
   subtitle: string;
   description: string;
   focusAreas: { title: string; copy: string }[];
   stats: { label: string; value: string }[];
   ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
      tertiary?: { label: string; href: string };
   };
};

export const hub_data: HubData = {
   eyebrow: "Skills Arewa",
   title: "Backing bold community ideas across society, environment, and country.",
   subtitle: "Skills Arewa Hub advocates for digital inclusion, skills, and opportunity.",
   description:
      "Skills Arewa Hub started as an informal network that now feeds into the NGO arm of Malamiromba. We hold digital literacy bootcamps, youth empowerment labs, and culturally grounded community workrooms, keeping underserved learners — especially women — close to mentorship, safe spaces, and support circles.",
   focusAreas: [
      {
         title: "Women in Tech Hausa (WTH)",
         copy: "Women in Tech Hausa trains Hausa-speaking women and girls on essential tech and business skills, pairing mentorship, peer circles, and culturally rooted safe spaces that normalise women in digital roles.",
      },
      {
         title: "Talents Fellowship",
         copy: "Micro fellowships provide stipends, real project briefs, and accountability partners so promising learners can stay in school while shipping meaningful work.",
      },
      {
         title: "Arewa Job Board",
         copy: "A growing space where northern talent and new opportunities meet — from internships to partner roles — so community members can transition straight into dignified work.",
      },
   ],
   stats: [
      { label: "Community members", value: "60K+" },
      { label: "Volunteers", value: "30" },
      { label: "Core team members", value: "6" },
      { label: "Learners supported", value: "3,000" },
      { label: "Mentors", value: "08" },
   ],
   ctas: {
      primary: {
         label: "Join us",
         href: "https://www.facebook.com/Malamiromba",
      },
      secondary: {
         label: "Partner with the Hub",
         href: "https://wa.link/oloq4b",
      },
      tertiary: {
         label: "Download impact report",
         href: "https://drive.google.com/malamiromba-impact-report",
      },
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
