"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
   ArrowRight,
   BookOpen,
   Users,
   Activity,
   TrendingUp,
   Play,
} from "lucide-react";
import Link from "next/link";

export default function Features() {
   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

   const features = [
      {
         icon: <BookOpen className="h-6 w-6" />,
         title: "Learn",
         description:
            "...from practicing experts in the industry. Gain real world experience.",
      },
      {
         icon: <Users className="h-6 w-6" />,
         title: "Connect",
         description:
            "...with top mentors and industry professionals in your field.",
      },
      {
         icon: <Activity className="h-6 w-6" />,
         title: "Do",
         description:
            "...by solving real problems for real companies assisted by mentors.",
      },
      {
         icon: <TrendingUp className="h-6 w-6" />,
         title: "Grow",
         description:
            "...yourself and your organization with industry ready skills.",
      },
   ];

   const cards = [
      {
         id: 1,
         image: "/images/off1.png",
         title: "Looking to build a career in tech?",
         description:
            "Join live (virtual) interactive bootcamps. Get real-time mentorship, solve real problems, and gain exposure.",
         cta: "Explore bootcamps",
         ctaLink: "#",
      },
      {
         id: 2,
         image: "/images/feature2.png",
         title: "Grow your tech knowledge on the go!",
         description:
            "Access bite-sized learning modules, expert tutorials, and practical exercises anywhere, anytime.",
         cta: "Explore bootcamps",
         ctaLink: "#",
      },
   ];

   return (
      <section className="bg-white w-full">
         <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Hands-On Tech Training You <br className="hidden sm:block" />
                  Need, To Be More
               </h2>
               <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="flex flex-col items-center text-center"
                  >
                     <div className="w-16 h-16 rounded-full bg-[#FFFCC8] flex items-center justify-center mb-4">
                        {feature.icon}
                     </div>
                     <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                     <p className="text-sm text-gray-600">
                        {feature.description}
                     </p>
                  </div>
               ))}
            </div>

            <div className="hidden md:flex gap-6 h-[400px]">
               {cards.map((card, index) => {
                  const isFirstCard = index === 0;
                  const isHovered = hoveredCard === index;
                  const isOtherCardHovered =
                     hoveredCard !== null && hoveredCard !== index;

                  // Calculate width based on hover state
                  const width = isHovered
                     ? "65%"
                     : isOtherCardHovered
                     ? "35%"
                     : isFirstCard
                     ? "65%"
                     : "35%";

                  return (
                     <motion.div
                        key={card.id}
                        className="relative overflow-hidden rounded-xl cursor-pointer"
                        style={{
                           backgroundImage: `url(${card.image})`,
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                        }}
                        animate={{ width }}
                        initial={false}
                        transition={{
                           type: "spring",
                           stiffness: 300,
                           damping: 30,
                        }}
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                     >
                        <div className="absolute inset-0 bg-primary/60"></div>

                        <div className="relative h-full p-8 flex flex-col justify-end text-white">
                           <h3 className="text-2xl font-bold mb-2">
                              {card.title}
                           </h3>

                           <AnimatePresence>
                              {(isFirstCard && !isOtherCardHovered) ||
                              isHovered ? (
                                 <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                 >
                                    <p className="mb-4 text-white/90">
                                       {card.description}
                                    </p>
                                    <span className="flex items-center justify-end">
                                       <Link
                                          href={card.ctaLink}
                                          className="inline-flex font-semibold items-center text-white hover:text-accent transition-colors"
                                       >
                                          {card.cta}{" "}
                                          <div className="ml-2 rounded-full bg-blue-700 hover:bg-primary/60 transition-colors">
                                             <Play size={20} className="p-1" />
                                          </div>
                                       </Link>
                                    </span>
                                 </motion.div>
                              ) : null}
                           </AnimatePresence>
                        </div>
                     </motion.div>
                  );
               })}
            </div>

            <div className="md:hidden space-y-6">
               {cards.map((card) => (
                  <div
                     key={card.id}
                     className="relative overflow-hidden rounded-xl h-[300px]"
                     style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                  >
                     <div className="absolute inset-0 bg-primary/60"></div>

                     <div className="relative h-full p-6 flex flex-col justify-end text-white">
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="mb-4 text-white/90 text-sm">
                           {card.description}
                        </p>
                        <Link
                           href={card.ctaLink}
                           className="inline-flex items-center text-white hover:text-accent transition-colors text-sm"
                        >
                           {card.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
