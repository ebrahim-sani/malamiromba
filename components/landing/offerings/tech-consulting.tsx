"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
   ArrowDown,
   CheckCircle,
   ClipboardList,
   Code,
   FileText,
   LineChart,
} from "lucide-react";

type TechConsultingProps = {
   data: any;
};

export default function TechConsulting({ data }: TechConsultingProps) {
   const { heading, subheading, journey, deliverables, cta } = data;

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
      <motion.div
         className="py-12 px-4 sm:px-6 md:px-8"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
         exit={{ opacity: 0, y: 20 }}
      >
         <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
               {heading}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
               {subheading}
            </p>
         </motion.div>

         <motion.div className="mb-20" variants={itemVariants}>
            <div className="flex flex-col items-center mb-8">
               <p className="text-primary font-medium mb-2">How we work</p>
               <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
               >
                  <ArrowDown className="h-8 w-8 text-accent" />
               </motion.div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-16">
               {journey.title}
            </h3>

            <div className="relative max-w-5xl mx-auto">
               {journey.steps.map((step: any, index: number) => (
                  <motion.div
                     key={index}
                     className={`relative mb-20 md:mb-28 ${
                        index % 2 === 0
                           ? "md:ml-0 md:mr-auto"
                           : "md:ml-auto md:mr-0"
                     } max-w-full md:max-w-[85%] lg:max-w-[75%]`}
                     variants={itemVariants}
                  >
                     <div className="relative z-10 p-6 sm:p-8 rounded-lg max-w-xl bg-transparent">
                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-primary">
                           {step.title}
                        </h4>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <p className="text-gray-600 text-sm">{step.details}</p>
                     </div>
                     <div
                        className={`
                          absolute ${
                             index % 2 === 0 ? "left-0" : "-left-28"
                          } top-0
                          transform -translate-y-1/3
                          ${
                             index % 2 === 0
                                ? "-translate-x-1/4"
                                : "translate-x-1/4"
                          }
                        `}
                     >
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8 }}
                           whileInView={{ opacity: 0.8, scale: 1 }}
                           viewport={{ once: false, amount: 0.1 }}
                           transition={{
                              duration: 0.8,
                              delay: 0.3 + index * 0.2,
                              ease: "easeOut",
                           }}
                           style={{ transformOrigin: "center" }}
                        >
                           <span className="text-[120px] sm:text-[150px] md:text-[180px] font-bold text-gray-200">
                              {String(index + 1).padStart(2, "0")}
                           </span>
                        </motion.div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </motion.div>

         <motion.div
            className="bg-gray-50 py-12 px-4 sm:px-8 rounded-lg"
            variants={itemVariants}
         >
            <h3 className="text-xl md:text-2xl font-bold text-center mb-10">
               {deliverables.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               {deliverables.categories.map((category: any, index: number) => {
                  let CategoryIcon;
                  if (category.name.toLowerCase().includes("plan")) {
                     CategoryIcon = ClipboardList;
                  } else if (category.name.toLowerCase().includes("build")) {
                     CategoryIcon = Code;
                  } else if (
                     category.name.toLowerCase().includes("grow") ||
                     category.name.toLowerCase().includes("support")
                  ) {
                     CategoryIcon = LineChart;
                  } else {
                     CategoryIcon = FileText;
                  }

                  return (
                     <motion.div
                        key={index}
                        className="text-center"
                        variants={itemVariants}
                     >
                        <div className="flex flex-col items-center mb-6 md:mb-8">
                           <div className="bg-accent/10 p-3 rounded-full mb-4">
                              <CategoryIcon className="h-8 w-8 text-accent" />
                           </div>
                           <h4 className="text-lg font-bold text-primary">
                              {category.name}
                           </h4>
                        </div>
                        <ul className="space-y-4">
                           {category.items.map((item: string, idx: number) => (
                              <li
                                 key={idx}
                                 className="flex items-start text-left gap-3"
                              >
                                 <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                 <span className="text-gray-700">{item}</span>
                              </li>
                           ))}
                        </ul>
                     </motion.div>
                  );
               })}
            </div>
         </motion.div>

         <motion.div
            className="text-center mt-16 cursor-pointer"
            variants={itemVariants}
         >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
               <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg">
                  {cta}
               </Button>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
