"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type AgencyServicesProps = {
   data: {
      heading: string;
      services: string[];
      cta: string;
   };
};

export default function AgencyServices({ data }: AgencyServicesProps) {
   const { heading, cta } = data;
   const courseServices = [
      {
         title: "Advanced Web/App Development",
         meta: "Hire developer",
      },
      {
         title: "AI Automation",
         meta: "AI consultation",
      },
      {
         title: "IT Consultation",
         meta: "Technical advisory",
      },
      {
         title: "Creative Design",
         meta: "Brand storytelling",
      },
      {
         title: "Brand, Graphics & Animation",
         meta: "Hire for services",
      },
      {
         title: "Digital Marketing",
         meta: "SEO, ads, content, social media...",
      },
      {
         title: "Hausa–English Translation & Localization",
         meta: "Culture-first delivery",
      },
   ];
   const techConsultingHref = "/#tech-consulting";

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

   const sectionVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { staggerChildren: 0.08, when: "beforeChildren" },
      },
   };

   const imageFloat = {
      hidden: { y: 0, rotate: 0 },
      visible: {
         y: [0, -8, 0],
         rotate: [0, 0.5, 0],
         transition: { duration: 6, repeat: Infinity, repeatType: "loop" as const, ease: "easeInOut" },
      },
   };

   return (
      <motion.section
         className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
         variants={sectionVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.15 }}
      >
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
                        Our services — explore what we offer and get in touch
                     </motion.p>
                     <div className="rounded-2xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
                        {courseServices.map((service) => (
                           <Link
                              key={service.title}
                              href={`mailto:malamiromba@gmail.com?subject=Inquiry about ${service.title}`}
                              className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 hover:bg-primary/5 transition-colors"
                           >
                              <div className="flex items-start gap-3">
                                 <div className="mt-1 bg-accent/10 rounded-full p-1">
                                    <Check className="h-4 w-4 text-accent" />
                                 </div>
                                 <div>
                                    <p className="text-base sm:text-lg font-semibold text-primary">
                                       {service.title}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                       {service.meta}
                                    </p>
                                 </div>
                              </div>
                              <ArrowRight className="h-5 w-5 text-gray-400" />
                           </Link>
                        ))}
                     </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                           <Link
                              href="https://t.me/SkillArewa"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-accent hover:text-accent/80 text-sm font-medium inline-block"
                        >
                           <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base">
                              {cta}
                           </Button>
                        </Link>
                     </motion.div>
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
                     <div className="relative rounded-3xl p-4 overflow-hidden shadow-2xl ">
                        <motion.div
                           className="relative aspect-[4/3] w-full"
                           variants={imageFloat}
                           initial="hidden"
                           whileInView="visible"
                           viewport={{ once: false, amount: 0.5 }}
                        >
                           <Image
                              src="/images/pie-chart.svg"
                              alt="Course services showcase placeholder"
                              fill
                              className="object-cover"
                              priority
                           />
                        </motion.div>
                        
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
}
