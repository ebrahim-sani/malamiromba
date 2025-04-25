"use client";

import React from "react";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { footerLinks } from "@/common/lib/data";
import { BsTwitterX } from "react-icons/bs";

const iconComponents = {
   Instagram,
   Facebook,
   BsTwitterX,
   Linkedin,
   FaTelegram,
};

interface FooterProps {
   onAboutClick: () => void;
}

export default function Footer({ onAboutClick }: FooterProps) {
   const [email, setEmail] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);

   const footerRef = useRef(null);
   const isInView = useInView(footerRef, { once: true, amount: 0.2 });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      setTimeout(() => {
         setIsSubmitting(false);
         setIsSubmitted(true);
         setEmail("");

         setTimeout(() => {
            setIsSubmitted(false);
         }, 3000);
      }, 1000);
   };

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

   const socialIconVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: (i: number) => ({
         scale: 1,
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5 + i * 0.1,
         },
      }),
   };

   const LinkList = ({
      title,
      links,
   }: {
      title: string;
      links: { name: string; href: string }[];
   }) => (
      <div className="space-y-4">
         <h3 className="text-md md:text-lg font-semibold mb-4">{title}</h3>
         <ul className="space-y-2">
            {links.map((link, index) => (
               <li key={index}>
                  {link.name === "About" || link.name === "About Us" ? (
                     <button
                        onClick={(e) => {
                           e.preventDefault();
                           onAboutClick();
                        }}
                        className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                     >
                        {link.name}
                     </button>
                  ) : (
                     <Link
                        target="_blank"
                        href={link.href}
                        className="text-gray-300 text-sm hover:text-white transition-colors duration-200"
                     >
                        {link.name}
                     </Link>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );

   return (
      <footer ref={footerRef} className="bg-primary text-white py-12 md:py-16">
         <div className="container mx-auto px-4 md:px-8">
            <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               <motion.div variants={itemVariants} className="space-y-6">
                  <div className="flex items-center space-x-2">
                     <Image
                        src="/logo/malamiromba_logo.svg"
                        alt="Malamiromba Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                     />
                     <span className="text-xl font-bold">Malamiromba</span>
                  </div>

                  <div className="mt-6">
                     <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
                     <p className="text-sm text-gray-300 mb-4">
                        Subscribe to Malamiromba email list for exclusive events
                        and future opportunities.
                     </p>

                     {isSubmitted ? (
                        <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="text-green-400 text-sm py-2"
                        >
                           Thank you for subscribing!
                        </motion.div>
                     ) : (
                        <form onSubmit={handleSubmit} className="space-y-3">
                           <div className="relative">
                              <Input
                                 type="email"
                                 placeholder="Email Address"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 required
                                 className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-gray-400 rounded-md w-full"
                              />
                           </div>
                           <Button
                              type="submit"
                              className="w-full text-white"
                              disabled={isSubmitting}
                              style={{
                                 background:
                                    "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                              }}
                           >
                              {isSubmitting
                                 ? "Subscribing..."
                                 : "Subscribe now"}
                           </Button>
                        </form>
                     )}
                  </div>
               </motion.div>

               <motion.div variants={itemVariants}>
                  <LinkList title="Company" links={footerLinks.company} />
               </motion.div>

               <motion.div variants={itemVariants} className="space-y-8">
                  <LinkList
                     title="Work with us"
                     links={footerLinks.workWithUs}
                  />
                  {/* <LinkList
                     title="Company"
                     links={footerLinks.companySecondary}
                  /> */}
               </motion.div>

               <motion.div variants={itemVariants} className="space-y-4">
                  <LinkList
                     title="Social media"
                     links={footerLinks.socialMedia}
                  />

                  <div className="flex  space-x-4 mt-8">
                     {footerLinks.socialIcons.map((item, i) => {
                        const IconComponent =
                           iconComponents[
                              item.icon as keyof typeof iconComponents
                           ];

                        return (
                           <motion.a
                              target="_blank"
                              key={i}
                              href={item.href}
                              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full transition-colors duration-200"
                              custom={i}
                              variants={socialIconVariants}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={item.name}
                           >
                              <IconComponent className="w-5 h-5" />
                           </motion.a>
                        );
                     })}
                  </div>
                  <p className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                     malamiromba@gmail.com
                  </p>
               </motion.div>
            </motion.div>

            <motion.div
               className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400"
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ delay: 0.8 }}
            >
               © {new Date().getFullYear()} Malamiromba. All rights reserved.
            </motion.div>
         </div>
      </footer>
   );
}
