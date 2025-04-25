"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Bounce, toast } from "react-toastify";

type Event = {
   id: number;
   title: string;
   description: string;
   image: string;
   date: string;
   category: string;
   slug: string;
};

export default function Events() {
   const allEvents: Event[] = [
      {
         id: 1,
         title: "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
         description:
            "Learn strategies to improve workplace morale and boost employee engagement.",
         image: "/images/event1.png",
         date: "20 March 2024",
         category: "TECH",
         slug: "revitalizing-workplace-morale",
      },
      {
         id: 2,
         title: "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
         description:
            "Learn strategies to improve workplace morale and boost employee engagement.",
         image: "/images/event2.png",
         date: "20 March 2024",
         category: "BUSINESS",
         slug: "revitalizing-workplace-morale-2",
      },
      {
         id: 3,
         title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
         description:
            "Learn strategies to improve workplace morale and boost employee engagement.",
         image: "/images/event3.png?height=400&width=600",
         date: "20 March 2024",
         category: "BLOCKCHAIN",
         slug: "",
      },
      {
         id: 4,
         title: "Digital Transformation in Healthcare: Challenges and Opportunities",
         description:
            "Explore how digital technologies are reshaping the healthcare industry.",
         image: "/images/event4.png",
         date: "15 April 2024",
         category: "HEALTHCARE",
         slug: "digital-transformation-healthcare",
      },
      {
         id: 5,
         title: "AI Ethics: Navigating the Future of Responsible Innovation",
         description:
            "Discuss ethical considerations in artificial intelligence development.",
         image: "/images/event5.png",
         date: "5 May 2024",
         category: "ARTIFICIAL INTELLIGENCE",
         slug: "ai-ethics-responsible-innovation",
      },
      {
         id: 6,
         title: "Cybersecurity Best Practices for Remote Work Environments",
         description:
            "Learn how to secure your remote work setup against cyber threats.",
         image: "/images/event6.png",
         date: "12 June 2024",
         category: "CYBERSECURITY",
         slug: "cybersecurity-remote-work",
      },
      // {
      //    id: 7,
      //    title: "The Future of E-commerce: Trends and Predictions",
      //    description:
      //       "Explore upcoming trends that will shape the future of online retail.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "8 July 2024",
      //    category: "E-COMMERCE",
      //    slug: "future-ecommerce-trends",
      // },
      // {
      //    id: 8,
      //    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
      //    description:
      //       "Discover practical applications of blockchain technology across industries.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "20 August 2024",
      //    category: "BLOCKCHAIN",
      //    slug: "blockchain-real-world-applications",
      // },
      // {
      //    id: 9,
      //    title: "Data Privacy Regulations: Compliance Strategies for Businesses",
      //    description:
      //       "Navigate the complex landscape of data privacy regulations worldwide.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "15 September 2024",
      //    category: "DATA PRIVACY",
      //    slug: "data-privacy-compliance",
      // },
      // {
      //    id: 10,
      //    title: "Sustainable Tech: Building Eco-Friendly Digital Solutions",
      //    description:
      //       "Learn how to develop technology solutions with minimal environmental impact.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "10 October 2024",
      //    category: "SUSTAINABILITY",
      //    slug: "sustainable-tech-solutions",
      // },
      // {
      //    id: 11,
      //    title: "The Rise of No-Code Development: Democratizing Software Creation",
      //    description:
      //       "Explore how no-code platforms are changing the software development landscape.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "5 November 2024",
      //    category: "SOFTWARE DEVELOPMENT",
      //    slug: "no-code-development",
      // },
      // {
      //    id: 12,
      //    title: "Virtual Reality in Education: Transforming Learning Experiences",
      //    description:
      //       "Discover how VR technology is revolutionizing educational approaches.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "12 December 2024",
      //    category: "EDUCATIONAL TECH",
      //    slug: "vr-education-transformation",
      // },
      // {
      //    id: 13,
      //    title: "5G Technology: Unlocking New Possibilities for Business",
      //    description:
      //       "Learn how 5G networks will transform business operations and opportunities.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "18 January 2025",
      //    category: "TELECOMMUNICATIONS",
      //    slug: "5g-business-possibilities",
      // },
      // {
      //    id: 14,
      //    title: "The Future of Work: Adapting to AI and Automation",
      //    description:
      //       "Prepare for workplace changes driven by artificial intelligence and automation.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "22 February 2025",
      //    category: "FUTURE OF WORK",
      //    slug: "future-work-ai-automation",
      // },
      // {
      //    id: 15,
      //    title: "Digital Marketing Trends: Staying Ahead in 2025",
      //    description:
      //       "Explore emerging digital marketing strategies for the coming year.",
      //    image: "/placeholder.svg?height=400&width=600",
      //    date: "15 March 2025",
      //    category: "DIGITAL MARKETING",
      //    slug: "digital-marketing-trends-2025",
      // },
   ];

   const isSmallScreen = useMediaQuery("(max-width: 768px)");
   const initialItemCount = isSmallScreen ? 3 : 6;

   const [visibleEvents, setVisibleEvents] = useState<Event[]>([]);
   const [itemsToShow, setItemsToShow] = useState(initialItemCount);

   useEffect(() => {
      setVisibleEvents(allEvents.slice(0, itemsToShow));
   }, [itemsToShow]);

   useEffect(() => {
      setItemsToShow(
         isSmallScreen
            ? Math.min(3, allEvents.length)
            : Math.min(6, allEvents.length),
      );
   }, [isSmallScreen]);

   const handleLoadMore = () => {
      const increment = isSmallScreen ? 3 : 6;
      const newItemsToShow = Math.min(
         itemsToShow + increment,
         allEvents.length,
      );
      setItemsToShow(newItemsToShow);
   };

   const allEventsVisible = visibleEvents.length === allEvents.length;
   const notify = () =>
      toast("📫 This post will be available soon!", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
      });
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
         },
      },
   };

   return (
      <section className="bg-white">
         <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
               <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-bold">
                     Recent events
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-accent"></div>
               </div>
               <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
               >
                  <ArrowUpRight size={40} className="text-primary" />
               </motion.div>
            </div>

            <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               <AnimatePresence>
                  {visibleEvents.map((event) => (
                     <motion.div
                        key={event.id}
                        variants={itemVariants}
                        onClick={notify}
                        layout
                        className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full"
                        whileHover={{
                           y: -5,
                           boxShadow:
                              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                        }}
                     >
                        <div className="relative">
                           <div className="absolute top-3 left-3 z-10">
                              <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                                 News
                              </span>
                           </div>
                           <div className="relative h-48 overflow-hidden">
                              <Image
                                 src={event.image}
                                 alt={event.title}
                                 fill
                                 className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                           </div>
                           <div className="absolute bottom-0 left-0 right-0 bg-accent text-white px-4 py-1 text-xs font-medium">
                              {event.category}
                           </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                           <p className="text-gray-500 text-xs mb-2">
                              {event.date}
                           </p>
                           <h3 className="font-bold text-md line-clamp-2 cursor-pointer">
                              {event.title}
                           </h3>
                           <p className="text-gray-500 text-xs my-2">
                              {event.description}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>

            {!allEventsVisible && (
               <div className="flex justify-center mt-10">
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="cursor-pointer"
                  >
                     <Button
                        onClick={handleLoadMore}
                        className="bg-accent cursor-pointer hover:bg-accent/90 text-white rounded-full px-8 py-2"
                     >
                        Load more
                     </Button>
                  </motion.div>
               </div>
            )}
         </div>
      </section>
   );
}
