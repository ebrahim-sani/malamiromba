"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building, Briefcase, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

type HeroTab = "Agency" | "Hub";

type HeroSectionProps = {
   onTabChange: (tab: HeroTab) => void;
   activeTab: HeroTab;
};

export default function Hero({ onTabChange, activeTab }: HeroSectionProps) {
   const [currentWord, setCurrentWord] = useState(0);

   const cyclingWords = ["Business", "Market", "Nation"];
   const taglinePrefix = "BUILD. AUTOMATE. GROW for your";
   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentWord((prev) => (prev + 1) % cyclingWords.length);
      }, 3000);

      return () => clearInterval(interval);
   }, []);

   const tabData: Record<HeroTab, {
      title: string;
      description: string;
      image: string;
      cta: string;
      link: string;
   }> = {
      Agency: {
         title: taglinePrefix,
         description:
            "Partner with us to find the right tech talent for your projects and business needs.",
         image: "/images/hero-section-people.svg",
         cta: "Get Estimate",
         link: "https://wa.link/oloq4b",
      },
      Hub: {
         title: taglinePrefix,
         description:
            "Backing bold community ideas across society, environment, and country. Skills Arewa Hub advocates for digital inclusion, skills, and opportunity.",
         image: "/images/hero-section-people.svg",
         cta: "Meet Skills Arewa",
         link: "#skills-arewa",
      },
   };

   const currentTabData = tabData[activeTab];
   const instituteUrl = "https://tath.school/";
   const isExternalLink = currentTabData.link.startsWith("http");

   const handleInstituteClick = () => {
      window.open(instituteUrl, "_blank", "noopener,noreferrer");
   };

   return (
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-25px)] w-full overflow-hidden">
         <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
               backgroundImage: "url('/images/arewa-building.svg')",
               backgroundBlendMode: "overlay",
            }}
         >
            <div className="absolute inset-0 bg-primary/80"></div>
         </div>

         <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 h-full flex flex-col">
            <motion.div
               className="flex justify-center mt-8 md:mt-12"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.5 }}
            >
               <div
                  className="flex rounded-full p-1 shadow-lg"
                  style={{
                     background:
                        "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                  }}
               >
                  <motion.button
                     onClick={() => onTabChange("Agency")}
                     className={`flex items-center cursor-pointer px-4 py-2 md:px-6 md:py-2.5 rounded-full space-x-2 transition-colors duration-300 ${
                        activeTab === "Agency"
                           ? "bg-black/50 text-white"
                           : "text-white"
                     }`}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                     <span className="text-sm md:text-base font-medium">
                        Agency
                     </span>
                  </motion.button>

                  <motion.button
                     onClick={handleInstituteClick}
                     className="flex items-center cursor-pointer px-4 py-2 md:px-6 md:py-2.5 rounded-full space-x-2 text-white transition-colors duration-300"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Building className="w-4 h-4 md:w-5 md:h-5" />
                     <span className="text-sm md:text-base font-medium">
                        Institute
                     </span>
                  </motion.button>

                  <motion.button
                     onClick={() => onTabChange("Hub")}
                     className={`flex items-center cursor-pointer px-4 py-2 md:px-6 md:py-2.5 rounded-full space-x-2 transition-colors duration-300 ${
                        activeTab === "Hub"
                           ? "bg-black/50 text-white"
                           : "text-white"
                     }`}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Users className="w-4 h-4 md:w-5 md:h-5" />
                     <span className="text-sm md:text-base font-medium">
                        Hub
                     </span>
                  </motion.button>
               </div>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left"
                     >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                           {currentTabData.title}{" "}
                           <span className="inline-block relative">
                              <AnimatePresence mode="wait">
                                 <motion.span
                                    key={cyclingWords[currentWord]}
                                    className="text-accent absolute"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{
                                       type: "spring",
                                       stiffness: 300,
                                       damping: 20,
                                    }}
                                 >
                                    {cyclingWords[currentWord]}
                                 </motion.span>
                              </AnimatePresence>
                              <span className="opacity-0">
                                 {cyclingWords.reduce((a, b) =>
                                    a.length > b.length ? a : b,
                                 )}
                              </span>
                           </span>
                        </h1>

                        <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90 max-w-lg mx-auto md:mx-0">
                           {currentTabData.description}
                        </p>

                        <motion.div
                           className="mt-8"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.3 }}
                        >
                           <Link
                              href={currentTabData.link}
                              target={isExternalLink ? "_blank" : undefined}
                              rel={isExternalLink ? "noreferrer" : undefined}
                           >
                              <Button
                                 className="bg-accent cursor-pointer font-bold hover:bg-accent/90 text-white rounded-full px-6 py-6 text-base"
                                 variant="default"
                              >
                                 {currentTabData.cta}{" "}
                                 <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                           </Link>
                        </motion.div>
                     </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeTab}
                        className="flex justify-center md:justify-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                     >
                        <div className="relative w-full max-w-md">
                           <motion.div
                              initial={{ y: 0 }}
                              animate={{ y: [0, -10, 0] }}
                              transition={{
                                 repeat: Number.POSITIVE_INFINITY,
                                 duration: 3,
                                 ease: "easeInOut",
                              }}
                              className="absolute md:relative inset-25 md:inset-2 flex items-center justify-center"
                           >
                              <div className="h-52 w-52 md:h-full md:w-full">
                                 <Image
                                    src={currentTabData.image}
                                    alt={activeTab}
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                 />
                              </div>
                           </motion.div>

                           <motion.div
                              className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-accent/20"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                 repeat: Number.POSITIVE_INFINITY,
                                 duration: 4,
                                 ease: "easeInOut",
                              }}
                           />
                           <motion.div
                              className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-primary/40"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{
                                 repeat: Number.POSITIVE_INFINITY,
                                 duration: 3.5,
                                 ease: "easeInOut",
                                 delay: 0.5,
                              }}
                           />
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>

         <motion.div
            className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
         />
         <motion.div
            className="absolute top-20 right-10 w-24 h-24 rounded-full bg-primary/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
         />
      </section>
   );
}
