"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
      <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
            >
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  {title}
               </h2>
               <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  {subtitle}
               </p>
            </motion.div>

            {activeOffering ? (
               <div className="mb-12">
                  <motion.button
                     className="flex items-center cursor-pointer text-accent hover:text-accent/80 mb-8 text-base sm:text-lg"
                     onClick={() => setActiveOffering(null)}
                     whileHover={{ x: -5 }}
                     whileTap={{ scale: 0.97 }}
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                     >
                        <path d="m15 18-6-6 6-6" />
                     </svg>
                     Back to offerings
                  </motion.button>
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={activeOffering}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                     >
                        {renderOfferingContent()}
                     </motion.div>
                  </AnimatePresence>
               </div>
            ) : (
               <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                     hidden: { opacity: 0 },
                     visible: {
                        opacity: 1,
                        transition: {
                           staggerChildren: 0.1,
                        },
                     },
                  }}
               >
                  {options.map((option, index) => (
                     <motion.div
                        key={option.id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setActiveOffering(option.id)}
                        variants={{
                           hidden: { opacity: 0, y: 20 },
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
                           y: -10,
                           boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                     >
                        <div className="relative h-56 sm:h-64">
                           <Image
                              src={option.image}
                              alt={option.title}
                              fill
                              className="object-cover"
                           />
                        </div>
                        <div className="p-3 sm:p-5 text-start">
                           <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">
                              {option.title}
                           </h3>
                           <p className="text-xs sm:text-sm text-gray-700">
                              {option.description}
                           </p>
                        </div>
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </div>
      </section>
   );
}
