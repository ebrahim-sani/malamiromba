"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { links } from "@/common/lib/data";
import type { NotificationData } from "./notification-banner";
import NotificationBanner from "./notification-banner";

type NavbarProps = {
   onAboutClick?: () => void;
   notification?: NotificationData;
   showNotification?: boolean;
   onDismissNotification?: () => void;
};

export default function Navbar({
   onAboutClick,
   notification,
   showNotification = false,
   onDismissNotification,
}: NavbarProps) {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
   const [scrolled, setScrolled] = useState(false);
   const [notificationHeight, setNotificationHeight] = useState(0);
   const bannerRef = useRef<HTMLDivElement>(null);
   const pathname = usePathname();

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setIsMobileMenuOpen(false);
         }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (!showNotification || !bannerRef.current) {
         setNotificationHeight(0);
         return;
      }

      const updateHeight = () => {
         if (bannerRef.current) {
            setNotificationHeight(bannerRef.current.offsetHeight);
         }
      };

      updateHeight();

      const observer = new ResizeObserver(updateHeight);
      observer.observe(bannerRef.current);

      return () => {
         observer.disconnect();
      };
   }, [showNotification]);

   const toggleDropdown = (linkName: string) => {
      setActiveDropdown(activeDropdown === linkName ? null : linkName);
   };

   const isLinkActive = (linkId: string) => {
      if (pathname === "/donate") return false;

      if (linkId === "#nav" && (pathname === "/" || pathname === ""))
         return true;
      return pathname === linkId || pathname.startsWith(linkId);
   };

   return (
      <header id="nav" className="relative z-[999]">
         {notification && showNotification && (
            <NotificationBanner
               notification={notification}
               onDismiss={onDismissNotification}
               customClass="bg-[linear-gradient(90deg,_#FFFFFF_0%,_#011F41_30%,_#FF0C0C_70%,_#FFFFFF_100%)]"
               bannerRef={bannerRef}
            />
         )}

         <motion.div
            className={`fixed top-[${notificationHeight}px] left-0 w-full h-16 md:h-20 backdrop-blur-md shadow-lg ${
               scrolled ? "bg-primary/95" : "bg-primary/90"
            } transition-all duration-300`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
         />

         <nav
            className={`fixed top-[${notificationHeight}px] left-0 w-full px-4 md:px-8 py-3 md:py-4 transition-all duration-300`}
         >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
               <Link href="/">
                  <motion.div
                     className="flex items-center space-x-2 z-10 cursor-pointer"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <Image
                           src="/logo/malamiromba_logo.svg"
                           alt="malamiromba logo"
                           fill
                           className="object-contain"
                        />
                     </div>
                     <span className="text-lg md:text-xl font-bold text-white">
                        Malamiromba
                     </span>
                  </motion.div>
               </Link>

               <div className="hidden md:flex items-center space-x-8">
                  <ul className="flex items-center space-x-1">
                     {links.map((link, index) => (
                        <motion.li
                           key={link.id}
                           className="relative"
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                           {link.name === "About us" ? (
                              <a
                                 href="#about"
                                 onClick={(e) => {
                                    e.preventDefault();
                                    onAboutClick?.();
                                 }}
                                 className="block px-3 py-2 text-white hover:text-accent transition-colors duration-200 relative"
                              >
                                 {link.name}
                              </a>
                           ) : link.dropdown ? (
                              <div className="relative group">
                                 <button
                                    className="flex items-center px-3 py-2 text-white hover:text-accent transition-colors duration-200 group"
                                    onMouseEnter={() =>
                                       setActiveDropdown(link.name)
                                    }
                                    onMouseLeave={() => setActiveDropdown(null)}
                                 >
                                    {link.name}
                                    <motion.div
                                       animate={{
                                          rotate:
                                             activeDropdown === link.name
                                                ? 180
                                                : 0,
                                       }}
                                       transition={{ duration: 0.3 }}
                                       className="ml-1"
                                    >
                                       <ChevronDown className="h-4 w-4" />
                                    </motion.div>
                                 </button>
                                 <AnimatePresence>
                                    {activeDropdown === link.name && (
                                       <motion.div
                                          initial={{
                                             opacity: 0,
                                             y: 10,
                                             height: 0,
                                          }}
                                          animate={{
                                             opacity: 1,
                                             y: 0,
                                             height: "auto",
                                          }}
                                          exit={{
                                             opacity: 0,
                                             y: 10,
                                             height: 0,
                                          }}
                                          transition={{ duration: 0.3 }}
                                          className="absolute left-0 mt-1 w-48 bg-primary border border-gray-700 rounded-md shadow-lg overflow-hidden z-50"
                                          onMouseEnter={() =>
                                             setActiveDropdown(link.name)
                                          }
                                          onMouseLeave={() =>
                                             setActiveDropdown(null)
                                          }
                                       >
                                          {link.dropdown.map((item) => (
                                             <Link
                                                key={item.id}
                                                target={
                                                   "link" in item && item.link
                                                      ? "_blank"
                                                      : ""
                                                }
                                                rel={
                                                   "link" in item && item.link
                                                      ? "noopener noreferrer"
                                                      : ""
                                                }
                                                href={item.link}
                                                className="block px-4 py-2 text-sm text-white hover:bg-accent/10 hover:text-accent transition-colors duration-200"
                                             >
                                                {item.name}
                                             </Link>
                                          ))}
                                       </motion.div>
                                    )}
                                 </AnimatePresence>
                              </div>
                           ) : (
                              <Link
                                 href={link.id === "#nav" ? "/" : link.id}
                                 className={`block px-3 py-2 text-white hover:text-accent transition-colors duration-200 relative ${
                                    isLinkActive(link.id) ? "text-accent" : ""
                                 }`}
                              >
                                 {link.name}
                                 {isLinkActive(link.id) && (
                                    <motion.span
                                       className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
                                       layoutId="navbar-underline"
                                    />
                                 )}
                              </Link>
                           )}
                        </motion.li>
                     ))}
                  </ul>
                  <Link href="/donate">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                     >
                        <Button
                           className="bg-accent cursor-pointer hover:bg-accent/90 text-white rounded-full px-6"
                           variant="default"
                        >
                           Donate
                        </Button>
                     </motion.div>
                  </Link>
               </div>

               <motion.button
                  className="md:hidden z-10 text-white p-2 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileTap={{ scale: 0.9 }}
               >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </motion.button>
            </div>
         </nav>

         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  className={`fixed top-[${notificationHeight}px] inset-x-0 bottom-0 bg-primary z-40 pt-16 pb-6 px-4 overflow-y-auto`}
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
               >
                  <div className="max-w-md mx-auto mt-8">
                     <ul className="space-y-1">
                        {links.map((link, index) => (
                           <motion.li
                              key={link.id}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="border-b border-gray-800"
                           >
                              {link.name === "About us" ? (
                                 <a
                                    href="#about"
                                    onClick={(e) => {
                                       e.preventDefault();
                                       onAboutClick?.();
                                       setIsMobileMenuOpen(false);
                                    }}
                                    className="block py-4 text-lg font-medium text-white hover:text-accent"
                                 >
                                    {link.name}
                                 </a>
                              ) : link.dropdown ? (
                                 <div>
                                    <button
                                       onClick={() => toggleDropdown(link.name)}
                                       className="flex items-center justify-between w-full py-4 text-white"
                                    >
                                       <span className="text-lg font-medium">
                                          {link.name}
                                       </span>
                                       <motion.div
                                          animate={{
                                             rotate:
                                                activeDropdown === link.name
                                                   ? 180
                                                   : 0,
                                          }}
                                          transition={{ duration: 0.3 }}
                                       >
                                          <ChevronDown className="h-5 w-5" />
                                       </motion.div>
                                    </button>
                                    <AnimatePresence>
                                       {activeDropdown === link.name && (
                                          <motion.div
                                             initial={{ height: 0, opacity: 0 }}
                                             animate={{
                                                height: "auto",
                                                opacity: 1,
                                             }}
                                             exit={{ height: 0, opacity: 0 }}
                                             transition={{ duration: 0.3 }}
                                             className="overflow-hidden bg-gray-900/50 rounded-md mb-2"
                                          >
                                             {link.dropdown.map((item) => (
                                                <Link
                                                   key={item.id}
                                                   href={item.id}
                                                   className="block py-3 px-6 text-gray-300 hover:text-accent"
                                                   onClick={() =>
                                                      setIsMobileMenuOpen(false)
                                                   }
                                                >
                                                   {item.name}
                                                </Link>
                                             ))}
                                          </motion.div>
                                       )}
                                    </AnimatePresence>
                                 </div>
                              ) : (
                                 <Link
                                    href={link.id === "#nav" ? "/" : link.id}
                                    className={`block py-4 text-lg font-medium ${
                                       isLinkActive(link.id)
                                          ? "text-accent"
                                          : "text-white"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                 >
                                    {link.name}
                                 </Link>
                              )}
                           </motion.li>
                        ))}
                     </ul>
                     <motion.div
                        className="mt-8 flex justify-center cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                     >
                        <Link
                           href="/donate"
                           onClick={() => setIsMobileMenuOpen(false)}
                        >
                           <Button
                              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg w-full"
                              variant="default"
                           >
                              Donate
                           </Button>
                        </Link>
                     </motion.div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </header>
   );
}
