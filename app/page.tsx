"use client";

import { agency_data, hub_data, notificationData } from "@/common/lib/data";
import {
   About,
   AgencyServices,
   HubShowcase,
   Footer,
   Hero,
   Navbar,
   FeaturedProjects,
   OurVision,
   WhatWeDo,
} from "@/components/landing";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
   const [activeTab, setActiveTab] = useState<"Agency" | "Hub">("Agency");
   const [showNotification, setShowNotification] = useState(false);

   const handleTabChange = (tab: "Agency" | "Hub") => {
      setActiveTab(tab);
   };

   const handleAboutClick = () => {
      setActiveTab("Agency");
      setTimeout(() => {
         const element = document.getElementById("about");
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      }, 100);
   };

   const handleDismissNotification = () => {
      setShowNotification(false);
   };

   return (
      <main className="min-h-screen bg-primary flex flex-col">
         <div className="fixed top-0 left-0 w-full z-[1000]">
            <Navbar
               onDismissNotification={handleDismissNotification}
               onAboutClick={handleAboutClick}
               notification={notificationData}
               showNotification={showNotification}
            />
         </div>

         <div
            className="flex-1 min-h-0"
            style={{
               paddingTop: showNotification ? "calc(56px + 36px)" : "56px",
               transition: "padding-top 0.3s ease-in-out",
            }}
         >
            <Hero onTabChange={handleTabChange} activeTab={activeTab} />

            <AnimatePresence mode="wait">
               <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  {activeTab === "Agency" && (
                     <>
                        <AgencyServices data={agency_data} />
                        <About data={agency_data.aboutUs} />
                        <OurVision data={agency_data.ourVision} />
                        <WhatWeDo data={agency_data.whatWeDo} />
                        <FeaturedProjects data={agency_data.offerings} />
                     </>
                  )}
                  {activeTab === "Hub" && (
                     <HubShowcase data={hub_data} />
                  )}
                  <Footer onAboutClick={handleAboutClick} />
               </motion.div>
            </AnimatePresence>
         </div>
      </main>
   );
}
