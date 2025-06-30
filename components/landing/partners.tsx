"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Partner = {
   id: string;
   name: string;
   logo: string;
   website?: string;
   description?: string;
};

type PartnersSectionProps = {
   data: {
      title: string;
      subtitle: string;
      partners: Partner[];
   };
};

export default function Partners({ data }: PartnersSectionProps) {
   const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   const { title, subtitle, partners } = data;

   // Duplicate partners for infinite scroll effect
   const duplicatedPartners = [...partners, ...partners];

   useEffect(() => {
      setIsVisible(true);
   }, []);

   const handlePartnerClick = (partner: Partner) => {
      if (partner.website) {
         //  window.open(partner.website, "_blank", "noopener,noreferrer");
      }
   };

   return (
      <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(90deg,_#FFFFFF_0%,_#011F41_40%,_#011F41_60%,_#FFFFFF_100%)]" />

         <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
         </div>

         <div className="relative max-w-7xl mx-auto">
            <motion.div
               className="text-center mb-12 lg:mb-16"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
            >
               <motion.h2
                  className="text-xl sm:text-2xl lg:text-5xl font-bold mb-4 lg:mb-6"
                  style={{
                     background:
                        "linear-gradient(135deg, #FFFFFF 0%, #E5E7EB 50%, #FFFFFF 100%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     backgroundClip: "text",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
               >
                  {title}
               </motion.h2>
               <motion.p
                  className="text-white/90 text-sm sm:text-xl max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
               >
                  {subtitle}
               </motion.p>
            </motion.div>

            <motion.div
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8 mb-12"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
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
               {partners.map((partner, index) => (
                  <motion.div
                     key={partner.id}
                     className="group relative"
                     variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.8 },
                        visible: {
                           opacity: 1,
                           y: 0,
                           scale: 1,
                           transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 25,
                              delay: index * 0.05,
                           },
                        },
                     }}
                     onMouseEnter={() => setHoveredPartner(partner.id)}
                     onMouseLeave={() => setHoveredPartner(null)}
                     onClick={() => handlePartnerClick(partner)}
                  >
                     <motion.div
                        className="relative aspect-square bg-white/95 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20"
                        whileHover={{
                           scale: 1.05,
                           y: -8,
                           transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <div className="relative w-full h-full flex items-center justify-center">
                           <Image
                              src={partner.logo || ""}
                              alt={`${partner.name} logo`}
                              fill
                              className="object-contain p-2 transition-all duration-300 group-hover:scale-110"
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                           />
                        </div>

                        <motion.div
                           className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-2xl"
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: hoveredPartner === partner.id ? 1 : 0,
                           }}
                           transition={{ duration: 0.3 }}
                        />

                        <motion.div
                           className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"
                           animate={{
                              opacity: hoveredPartner === partner.id ? 0.3 : 0,
                           }}
                        />
                     </motion.div>

                     <AnimatePresence>
                        {hoveredPartner === partner.id && (
                           <motion.div
                              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10"
                              initial={{ opacity: 0, y: -10, scale: 0.8 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -10, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                           >
                              <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap border border-white/20">
                                 {partner.name}
                                 <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/95 rotate-45 border-l border-t border-white/20" />
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
               ))}
            </motion.div>

            <div className="relative overflow-hidden">
               <motion.div
                  className="flex gap-8 py-8"
                  animate={{
                     x: [0, -100 * partners.length],
                  }}
                  transition={{
                     x: {
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                     },
                  }}
               >
                  {duplicatedPartners.map((partner, index) => (
                     <motion.div
                        key={`scroll-${partner.id}-${index}`}
                        className="flex-shrink-0 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                        whileHover={{ scale: 1.1 }}
                     >
                        <Image
                           src={
                              partner.logo ||
                              "/placeholder.svg?height=60&width=60"
                           }
                           alt={`${partner.name} logo`}
                           width={60}
                           height={60}
                           className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                     </motion.div>
                  ))}
               </motion.div>
            </div>

            <motion.div
               className="text-center mt-12 lg:mt-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <div className="flex -space-x-2">
                     {partners.slice(0, 4).map((partner, index) => (
                        <div
                           key={partner.id}
                           className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center"
                           style={{ zIndex: 4 - index }}
                        >
                           <Image
                              src={
                                 partner.logo ||
                                 "/placeholder.svg?height=20&width=20"
                              }
                              alt={partner.name}
                              width={20}
                              height={20}
                              className="rounded-full object-contain"
                           />
                        </div>
                     ))}
                  </div>
                  <span className="text-white/90 text-sm sm:text-base font-medium">
                     Trusted by {partners.length}+ leading companies
                  </span>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
