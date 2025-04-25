"use client";

import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AgencyServicesProps = {
   data: {
      heading: string;
      services: string[];
      cta: string;
      videoId?: string;
   };
};

export default function AgencyServices({ data }: AgencyServicesProps) {
   const { heading, services, cta, videoId = "x3KfiQPanes" } = data;
   const [isPlaying, setIsPlaying] = useState(false);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
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
      <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
               <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
               >
                  <motion.h2
                     className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary"
                     variants={itemVariants}
                  >
                     {heading}
                  </motion.h2>

                  <motion.div
                     className="space-y-6"
                     variants={containerVariants}
                  >
                     <motion.p
                        className="text-gray-600 font-medium text-lg"
                        variants={itemVariants}
                     >
                        Our Services Include:
                     </motion.p>
                     <ul className="space-y-4">
                        {services.map((service, index) => (
                           <motion.li
                              key={index}
                              className="flex items-start gap-3"
                              variants={itemVariants}
                              custom={index}
                              whileHover={{ x: 5 }}
                           >
                              <div className="mt-1 bg-accent/10 rounded-full p-1">
                                 <Check className="h-4 w-4 text-accent" />
                              </div>
                              <span className="text-base sm:text-lg">
                                 {service}
                              </span>
                           </motion.li>
                        ))}
                     </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href="https://t.me/SkillArewa "
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-accent hover:text-accent/80 text-sm font-medium inline-block"
                        >
                           <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base">
                              {cta}
                           </Button>
                        </Link>
                     </motion.button>
                  </motion.div>
               </motion.div>

               <motion.div
                  className="relative mx-auto w-full max-w-md md:max-w-none"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
               >
                  <div className="flex flex-col">
                     <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
                        <div className="relative aspect-video w-full">
                           <iframe
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                                 isPlaying ? 1 : 0
                              }&rel=0&modestbranding=1`}
                              title="Introduction to our community"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full rounded-t-xl"
                           ></iframe>
                        </div>

                        <div className="p-4 bg-white border-t border-gray-100">
                           <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                              Welcome to Malamiromba
                           </h3>

                           <p className="text-gray-600 text-[8px] sm:text-xs mb-4">
                              Discover how we're empowering Northern Nigeria's
                              tech talent through innovative training,
                              mentorship, and real-world projects. Join our
                              thriving community of tech enthusiasts and
                              professionals.
                           </p>

                           <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                 <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                                 <p className="text-sm text-gray-500">
                                    29,789+ community members
                                 </p>
                              </div>

                              <motion.button
                                 className="flex items-center cursor-pointer text-sm gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium hover:bg-primary/20 transition-colors"
                                 onClick={() => setIsPlaying(true)}
                                 whileHover={{ scale: 1.05 }}
                                 whileTap={{ scale: 0.95 }}
                              >
                                 <Play className="h-3 w-3" />
                                 {isPlaying ? "Now Playing" : "Watch Video"}
                              </motion.button>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
               {/* <motion.div
                  className="relative mx-auto w-full max-w-md md:max-w-none"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
               >
                  <div className="flex flex-col">
                     <div className="relative rounded-xl overflow-hidden shadow-lg">


                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
                           <Image
                              src="/images/yt.png"
                              alt="Agency services"
                              fill
                              className="object-cover"
                           />
                        </div>

                        <div className="p-4 bg-white">
                           <p className="text-xs sm:text-sm text-gray-500 mb-2">
                              30 March 2024
                           </p>

                           <h3 className="text-sm sm:text-base md:text-lg font-medium mb-3 line-clamp-2">
                              Revitalizing Workplace Morale: Innovative Tactics
                              For Boosting Employee Engagement In 2024
                           </h3>

                           <div className="flex justify-between items-center">
                              <Link
                                 href="#"
                                 className="text-sm text-primary font-medium flex items-center hover:underline"
                              >
                                 Read more
                                 <ChevronRight className="h-4 w-4 ml-1" />
                              </Link>

                              <div className="flex space-x-3">
                                 <motion.button
                                    className="p-1.5 cursor-pointer rounded-md border border-gray-200 hover:bg-gray-50"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                 >
                                    <ChevronLeft className="h-4 w-4" />
                                 </motion.button>
                                 <motion.button
                                    className="p-1.5 cursor-pointer rounded-md border border-gray-200 hover:bg-gray-50"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                 >
                                    <ChevronRight className="h-4 w-4" />
                                 </motion.button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div> */}
            </div>
         </div>
      </section>
   );
}
