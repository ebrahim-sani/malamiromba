"use client";

import { useState, useEffect, RefObject } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Megaphone, X, Clock } from "lucide-react";
import Link from "next/link";

export type NotificationType = "reminder" | "announcement" | "event";

export type NotificationData = {
   id: string;
   type: string | NotificationType;
   message: string;
   date?: string;
   time?: string;
   link?: string;
   linkText?: string;
   dismissible?: boolean;
   expiresAt?: Date;
};

type NotificationBannerProps = {
   notification: NotificationData;
   onDismiss?: (id: string) => void;
   customClass?: string;
   bannerRef?: RefObject<HTMLDivElement | null>;
};

export default function NotificationBanner({
   notification,
   onDismiss,
   customClass = "",
   bannerRef,
}: NotificationBannerProps) {
   const [isVisible, setIsVisible] = useState(true);
   const [isMounted, setIsMounted] = useState(false);
   const [screenSizes, setScreenSizes] = useState({
      isSmall: false,
      isXSmall: false,
   });

   useEffect(() => {
      if (typeof window === "undefined") return;

      setIsMounted(true);

      const checkScreenSize = () => {
         const width = window.innerWidth;
         const cssWidth = width / window.devicePixelRatio;

         // console.log(
         //    `Window width: ${width}px (CSS pixels: ${cssWidth.toFixed(2)}px)`,
         // );

         setScreenSizes((prevSizes) => ({
            ...prevSizes,
            isSmall: cssWidth >= 365 && cssWidth < 400,
            isXSmall: cssWidth < 365,
         }));
      };
      checkScreenSize();
      let timeoutId: ReturnType<typeof setTimeout>;
      const handleResize = () => {
         clearTimeout(timeoutId);
         timeoutId = setTimeout(checkScreenSize, 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
         clearTimeout(timeoutId);
      };
   }, []);

   const getMessage = () => {
      if (!isMounted) return notification.message;

      // console.log(screenSizes.isSmall);
      // console.log(screenSizes.isXSmall);

      return screenSizes.isSmall
         ? `${notification.message.slice(0, 45)}...`
         : screenSizes.isXSmall
         ? `${notification.message.slice(0, 32)}...`
         : notification.message;
   };

   useEffect(() => {
      if (
         notification.expiresAt &&
         new Date() > new Date(notification.expiresAt)
      ) {
         setIsVisible(false);
         onDismiss?.(notification.id);
      }
   }, [notification, onDismiss]);

   const handleDismiss = () => {
      setIsVisible(false);
      if (onDismiss) {
         onDismiss(notification.id);
      }
   };

   const getIcon = () => {
      switch (notification.type) {
         case "reminder":
            return <Bell className="h-4 w-4" />;
         case "announcement":
            return <Megaphone className="h-4 w-4" />;
         case "event":
            return <Calendar className="h-4 w-4" />;
         default:
            return <Bell className="h-4 w-4" />;
      }
   };

   const getBgColor = () => {
      switch (notification.type) {
         case "reminder":
            return "bg-blue-500";
         case "announcement":
            return "bg-accent";
         case "event":
            return "bg-green-500";
         default:
            return "bg-blue-500";
      }
   };

   if (!isVisible) return null;

   return (
      <div
         ref={bannerRef}
         className={`${
            !isMounted && "hidden"
         } w-full text-white ${customClass}`}
      >
         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className={`${getBgColor()} inline p-1 rounded-full`}>
                  {getIcon()}
               </div>
               <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <p className="text-[10px] md:text-sm font-medium text-clip">
                     {getMessage()}
                  </p>
                  {(notification.date || notification.time) && (
                     <div className="hidden md:flex items-center text-xs text-white/80 mt-1 sm:mt-0">
                        {notification.date && (
                           <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {notification.date}
                           </span>
                        )}
                        {notification.time && (
                           <span className="flex items-center ml-2">
                              <Clock className="h-3 w-3 mr-1" />
                              {notification.time}
                           </span>
                        )}
                     </div>
                  )}
               </div>
            </div>

            <div className="flex items-center space-x-1 md:space-x-3">
               {notification.link && (
                  <Link
                     target="_blank"
                     rel="noopener noreferrer"
                     href={notification.link}
                     className="text-[10px] md:text-xs font-medium underline hover:text-white/80 transition-colors"
                  >
                     {notification.linkText || "Learn more"}
                  </Link>
               )}
               {notification.dismissible !== false && (
                  <motion.button
                     onClick={handleDismiss}
                     className="text-white/80 hover:text-white cursor-pointer"
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     aria-label="Dismiss notification"
                  >
                     <X className="h-4 w-4" />
                  </motion.button>
               )}
            </div>
         </div>
      </div>
   );
}
