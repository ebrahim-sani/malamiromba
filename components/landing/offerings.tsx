"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft } from "lucide-react";

import TechConsulting from "./offerings/tech-consulting";
import ArewJobPlacement from "./offerings/job-placement";
import CorporateTraining from "./offerings/corporate-training";

type OfferingsSectionProps = {
   data: {
      title: string;
      subtitle: string;
      options: Array<{
         id: string;
         title: string;
         description?: string;
         image: string;
         content: any;
      }>;
   };
};

export default function Offerings({ data }: OfferingsSectionProps) {
   const [activeOffering, setActiveOffering] = useState<string | null>(null);
   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
   const { title, subtitle, options } = data;

   const renderOfferingContent = () => {
      const offering = options.find((opt) => opt.id === activeOffering);
      if (!offering) return null;

      switch (offering.id) {
         case "tech-consulting":
            return <TechConsulting data={offering.content} />;
         case "arewa-job-placement":
            return <ArewJobPlacement data={offering.content} />;
         case "corporate-training":
            return <CorporateTraining data={offering.content} />;
         default:
            return null;
      }
   };

   return (
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
         <div className="max-w-7xl mx-auto">
            <motion.div
               className="text-center mb-12 lg:mb-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
            >
               <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
               >
                  {title}
               </motion.h2>
               <motion.p
                  className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  {subtitle}
               </motion.p>
            </motion.div>

            {activeOffering ? (
               <div className="mb-12">
                  <motion.button
                     className="group flex items-center gap-3 text-blue-600 hover:text-blue-700 mb-8 text-lg font-medium transition-colors duration-200"
                     onClick={() => setActiveOffering(null)}
                     whileHover={{ x: -8 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                        <ChevronLeft className="w-5 h-5" />
                     </div>
                     Back to offerings
                  </motion.button>

                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeOffering}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                        transition={{
                           duration: 0.5,
                           type: "spring",
                           stiffness: 300,
                           damping: 30,
                        }}
                     >
                        {renderOfferingContent()}
                     </motion.div>
                  </AnimatePresence>
               </div>
            ) : (
               <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                     hidden: { opacity: 0 },
                     visible: {
                        opacity: 1,
                        transition: {
                           staggerChildren: 0.15,
                        },
                     },
                  }}
               >
                  {options.map((option, index) => (
                     <motion.div
                        key={option.id}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                        onClick={() => setActiveOffering(option.id)}
                        onMouseEnter={() => setHoveredCard(option.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        variants={{
                           hidden: { opacity: 0, y: 30 },
                           visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                 type: "spring",
                                 stiffness: 300,
                                 damping: 24,
                                 delay: index * 0.1,
                              },
                           },
                        }}
                        whileHover={{
                           y: -12,
                           scale: 1.02,
                           transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.98 }}
                     >
                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                           <Image
                              src={option.image || ""}
                              alt={option.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           />

                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                           <motion.div
                              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                 opacity: hoveredCard === option.id ? 1 : 0,
                                 scale: hoveredCard === option.id ? 1 : 0.8,
                              }}
                              transition={{ duration: 0.2 }}
                           >
                              <ArrowRight className="w-5 h-5 text-blue-600" />
                           </motion.div>
                        </div>

                        <div className="p-6 lg:p-8">
                           <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                 {option.title}
                              </h3>

                              <motion.div
                                 className="flex-shrink-0 ml-4 p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300"
                                 whileHover={{ rotate: -45 }}
                                 transition={{ duration: 0.2 }}
                              >
                                 <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                              </motion.div>
                           </div>

                           <p className="text-gray-600 text-sm leading-relaxed">
                              {option.description}
                           </p>
                        </div>

                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </div>
      </section>
   );
}
