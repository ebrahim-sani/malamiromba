"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import GenAICourseHero from "@/components/GenAICourseHero";

type CorporateTrainingProps = {
   data: any;
};

export default function CorporateTraining({ data }: CorporateTrainingProps) {
   const { heading, benefits, image, cta } = data;

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
      <>
         <motion.div
            className="py-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            exit={{ opacity: 0, y: 20 }}
         >
            <motion.h2
               className="text-2xl md:text-3xl font-bold text-center mb-12"
               variants={itemVariants}
            >
               {heading}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <motion.div variants={itemVariants}>
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                     <Image
                        src={image}
                        alt="Corporate training"
                        fill
                        className="object-cover"
                     />
                  </div>
               </motion.div>

               <motion.div className="space-y-8" variants={containerVariants}>
                  {benefits.map((benefit: any, index: number) => (
                     <motion.div
                        key={index}
                        className="flex gap-4"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                     >
                        <div className="flex-shrink-0">
                           <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                              {benefit.number}
                           </div>
                        </div>
                        <div>
                           <h3 className="text-lg font-bold mb-1">
                              {benefit.title}
                           </h3>
                           <p className="text-gray-600 text-xs md:text-sm">
                              {benefit.description}
                           </p>
                        </div>
                     </motion.div>
                  ))}

                  <motion.div className="pt-4" variants={itemVariants}>
                     <Link
                        // href="https://wa.link/4uv9l2"
                        href="http://wa.link/ufabpi" // Bot
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <motion.div
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                        >
                           <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white rounded-full px-8 py-6">
                              {cta}
                           </Button>
                        </motion.div>
                     </Link>
                  </motion.div>
               </motion.div>
            </div>
         </motion.div>
      </>
   );
}
