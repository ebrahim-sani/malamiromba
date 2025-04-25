"use client";

import { motion } from "framer-motion";

type AboutSectionProps = {
   data: {
      title: string;
      content: string;
   };
};

export default function OurVision({ data }: AboutSectionProps) {
   const { title, content } = data;
   const paragraphs = content.split("\n\n");

   return (
      <section
         id="about"
         className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
      >
         <div className="max-w-4xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true, amount: 0.3 }}
               className="space-y-8"
            >
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 relative inline-block">
                  {title}
                  <motion.div
                     className="absolute -bottom-3 left-1/2 h-1.5 bg-accent"
                     initial={{ width: 0 }}
                     whileInView={{ width: "80%" }}
                     transition={{ delay: 0.3, duration: 0.6 }}
                     style={{ transform: "translateX(-50%)" }}
                     viewport={{ once: true }}
                  />
               </h2>
               <div className="space-y-6">
                  {paragraphs.map((paragraph, index) => (
                     <motion.p
                        key={index}
                        className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                     >
                        {paragraph}
                     </motion.p>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
