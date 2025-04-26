"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

type ArewJobPlacementProps = {
   data: any;
};

export default function ArewJobPlacement({ data }: ArewJobPlacementProps) {
   const { heading, steps, image, cta, secondaryCta } = data;

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
            <motion.div className="order-2 md:order-1" variants={itemVariants}>
               <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                     src={image}
                     alt="Job placement"
                     fill
                     className="object-cover"
                  />
               </div>
            </motion.div>

            <motion.div
               className="order-1 md:order-2 space-y-8"
               variants={containerVariants}
            >
               {steps.map((step: any, index: number) => (
                  <motion.div
                     key={index}
                     className="flex gap-4"
                     variants={itemVariants}
                     whileHover={{ x: 5 }}
                  >
                     <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                           {step.number}
                        </div>
                     </div>
                     <div>
                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                     </div>
                  </motion.div>
               ))}

               <motion.div
                  className="pt-4 flex flex-row items-center gap-4 w-full cursor-pointer"
                  variants={itemVariants}
               >
                  <Link
                     href="https://docs.google.com/forms/d/1YS6uuBlNdtHJ3iMFKEYH1OGGGlzigxBocFR36vOggC0/viewform?edit_requested=true"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 w-full"
                  >
                     <motion.button
                        className="w-full bg-primary cursor-pointer hover:bg-primary/90 text-white rounded-full py-4 px-6 font-medium"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                     >
                        {cta}
                     </motion.button>
                  </Link>

                  <Link
                     href="https://whatsapp.com/channel/0029Vao9mQVG8l5FEnVvWH3B"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-accent cursor-pointer hover:text-accent/80 text-sm font-medium"
                  >
                     <Button
                        className="h-13 w-13 rounded-full cursor-pointer"
                        variant="outline"
                        size="icon"
                     >
                        <FaWhatsapp className="h-5 w-5" />
                     </Button>
                  </Link>

                  {/* <div className="text-center">{secondaryCta}</div> */}
               </motion.div>
            </motion.div>
         </div>
      </motion.div>
   );
}
