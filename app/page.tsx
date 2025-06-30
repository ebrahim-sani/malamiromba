"use client";

import {
   agency_data,
   institute_data,
   notificationData,
} from "@/common/lib/data";
import { partnersData } from "@/common/lib/partners";
import {
   About,
   AgencyServices,
   Bootcamps,
   Events,
   Features,
   Footer,
   Hero,
   Navbar,
   Offerings,
   OurVision,
   Team,
   WhatWeDo,
} from "@/components/landing";
import Partners from "@/components/landing/partners";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
   const [activeTab, setActiveTab] = useState("Institute");
   const [showNotification, setShowNotification] = useState(true);
   const [currentData, setCurrentData] = useState<
      typeof institute_data | typeof agency_data | any
   >(institute_data);

   useEffect(() => {
      setCurrentData(activeTab === "Institute" ? institute_data : agency_data);
   }, [activeTab]);

   const handleTabChange = (tab: string) => {
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
                        <AgencyServices data={currentData} />
                        <About data={currentData.aboutUs} />
                        <OurVision data={currentData.ourVision} />
                        <WhatWeDo data={currentData.whatWeDo} />
                        <Offerings data={currentData.offerings} />
                     </>
                  )}
                  {activeTab === "Institute" && (
                     <>
                        <Events />
                        <Team />
                        <Features />
                        <Bootcamps />
                     </>
                  )}
                  <Partners data={partnersData} />
                  <Footer onAboutClick={handleAboutClick} />
               </motion.div>
            </AnimatePresence>
         </div>
      </main>
   );
}
