"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";

type FeaturedProjectsProps = {
   data: {
      title: string;
      subtitle: string;
      options: Array<{
         id: string;
         title: string;
         description?: string;
      }>;
   };
};

export default function FeaturedProjects({ data }: FeaturedProjectsProps) {
   const [selectedProject, setSelectedProject] = useState<string | null>(null);
   const [isOpen, setIsOpen] = useState(false);
   const { title, subtitle, options } = data;

   const handleProjectClick = (projectId: string) => {
      setSelectedProject(projectId);
      setIsOpen(true);
   };

   const handleCloseDialog = () => {
      setIsOpen(false);
      setSelectedProject(null);
   };

   // Dummy logo colors for each project
   const logoColors = ["#6366F1", "#EC4899", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

   return (
      <section className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            <motion.div
               className="text-center mb-16"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
            >
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  {title}
               </h2>
               <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                  {subtitle}
               </p>
            </motion.div>

            <motion.div
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
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
               {options.map((project, index) => (
                  <motion.div
                     key={project.id}
                     className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                     onClick={() => handleProjectClick(project.id)}
                     variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                           opacity: 1,
                           y: 0,
                           transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 24,
                              delay: index * 0.1,
                           },
                        },
                     }}
                     whileHover={{
                        y: -10,
                        boxShadow:
                           "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                     }}
                  >
                     {/* Dummy Logo Container */}
                     <div className="h-56 sm:h-64 flex items-center justify-center bg-white">
                        <motion.div
                           className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold"
                           style={{ backgroundColor: logoColors[index % logoColors.length] }}
                           whileHover={{ scale: 1.1 }}
                           transition={{ type: "spring", stiffness: 300 }}
                        >
                           {project.title.charAt(0).toUpperCase()}
                        </motion.div>
                     </div>

                     {/* Content */}
                     <div className="p-3 sm:p-5 text-start">
                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">
                           {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-700">
                           {project.description || "Coming soon..."}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>

         {/* Coming Soon Modal */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                  onClick={handleCloseDialog}
               >
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.95, opacity: 0 }}
                     transition={{ type: "spring", stiffness: 300, damping: 24 }}
                     className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                     onClick={(e) => e.stopPropagation()}
                  >
                     <motion.div
                        className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
                        style={{
                           backgroundColor:
                              logoColors[
                                 options.findIndex((p) => p.id === selectedProject) %
                                    logoColors.length
                              ],
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                           type: "spring",
                           stiffness: 300,
                           damping: 24,
                           delay: 0.1,
                        }}
                     >
                        {options.find((p) => p.id === selectedProject)?.title.charAt(0).toUpperCase()}
                     </motion.div>

                     <h2 className="text-2xl font-bold text-center text-primary mb-4">
                        {options.find((p) => p.id === selectedProject)?.title}
                     </h2>

                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                     >
                        <p className="text-center text-xl font-semibold text-accent mb-6">
                           Coming Soon
                        </p>
                        <p className="text-center text-gray-600 mb-8">
                           We&apos;re working on something amazing! Check back soon for updates.
                        </p>
                     </motion.div>

                     <motion.button
                        className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 rounded-lg transition-colors"
                        onClick={handleCloseDialog}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        Got it
                     </motion.button>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </section>
   );
}
