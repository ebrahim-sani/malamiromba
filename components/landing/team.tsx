"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { teamMembers } from "@/common/lib/data";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa6";

type TeamMember = {
   id: number;
   name: string;
   role: string;
   image: string;
   profession: "developer" | "designer" | string;
   facebook?: string;
   linkedin: string;
   x: string;
   p_link: string;
};

export default function Team() {
   const [hoveredMember, setHoveredMember] = useState<number | null>(null);
   const sectionRef = useRef(null);
   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
         },
      },
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
         },
      },
   };

   const titleVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: "easeOut",
         },
      },
   };

   const underlineVariants = {
      hidden: { width: 0 },
      visible: {
         width: "60px",
         transition: {
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
         },
      },
   };

   return (
      <section ref={sectionRef} className="py-16 px-4 md:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
               <motion.h2
                  className="text-2xl md:text-3xl font-bold text-primary"
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
               >
                  People Impacting Lives
                  <br />
                  At Malamiromba
               </motion.h2>
               <div className="flex justify-center mt-2">
                  <motion.div
                     className="h-1 bg-accent"
                     variants={underlineVariants}
                     initial="hidden"
                     animate={isInView ? "visible" : "hidden"}
                  />
               </div>
            </div>

            <motion.div
               className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               {teamMembers.map((member: TeamMember) => (
                  <motion.div
                     key={member.id}
                     className="flex flex-col items-center text-center"
                     variants={itemVariants}
                     onMouseEnter={() => setHoveredMember(member.id)}
                     onMouseLeave={() => setHoveredMember(null)}
                     whileHover={{ y: -5 }}
                  >
                     <motion.div
                        className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4"
                        animate={{
                           scale: hoveredMember === member.id ? 1.05 : 1,
                           boxShadow:
                              hoveredMember === member.id
                                 ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                 : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                     >
                        <Image
                           src={member.image || "/placeholder.svg"}
                           alt={member.name}
                           fill
                           className="object-cover"
                        />
                     </motion.div>
                     <h3 className="font-bold text-md md:text-lg text-primary">
                        {member.name}
                     </h3>
                     <TeamMemberSocial member={member} />
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}

type TeamMemberSocialProps = {
   member: TeamMember;
};

function TeamMemberSocial({ member }: TeamMemberSocialProps) {
   const getProfessionIcon = () => {
      if (member.profession === "developer") {
         return <Github size={16} />;
      }
      if (member.profession === "designer") {
         return <FaDribbble size={18} />;
      }
      return <Instagram size={16} />;
   };

   const iconVariants = {
      initial: { scale: 1 },
      hover: {
         scale: 1.2,
         y: -3,
         transition: { type: "spring", stiffness: 400, damping: 10 },
      },
      tap: { scale: 0.9 },
   };

   return (
      <section id="team" className="flex flex-col gap-3 items-center">
         <p className="text-xs md:text-sm text-gray-600 font-medium">{member.role}</p>

         <div className="flex items-center space-x-2">
            {member.linkedin && (
               <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-700 hover:text-[#0077b5] transition-colors"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
               >
                  <Linkedin size={18} />
               </motion.a>
            )}

            {member.x && (
               <motion.a
                  href={member.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="text-gray-700 hover:text-black transition-colors"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
               >
                  <BsTwitterX size={14} />
               </motion.a>
            )}

            {member.facebook && (
               <motion.a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="text-gray-700 hover:text-[#0030b5] transition-colors"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
               >
                  <Facebook size={16} />
               </motion.a>
            )}

            {member.p_link && (
               <motion.a
                  href={member.p_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${
                     member.profession === "developer" ? "GitHub" : "Linkedin"
                  } Profile`}
                  className={`text-gray-700 ${
                     member.profession === "developer"
                        ? "hover:text-[#333]"
                        : "hover:text-[#E1306C]"
                  } transition-colors`}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconVariants}
               >
                  {getProfessionIcon()}
               </motion.a>
            )}
         </div>
      </section>
   );
}
