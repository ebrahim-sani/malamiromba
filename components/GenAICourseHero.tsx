"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Course, coursesData, generateSlug } from "@/lib/courses-data";
import { useEffect, useState } from "react";

export default function GenAICourseHero() {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(true);
   const [course, setCourse] = useState<Course | any>(null);

   // Get the GenAI Accelerator for Business course (id: 9)
   useEffect(() => {
      const timer = setTimeout(() => {
         const foundCourse = coursesData.find((c) => c.id === 9);
         setCourse(foundCourse);
         setIsLoading(false);
      }, 100);

      return () => clearTimeout(timer);
   }, []);

   if (!course) return null;

   const handleLearnMore = () => {
      const slug = generateSlug(course.title);
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("tab", "agency");

      sessionStorage.setItem("homeTabState", currentUrl.toString());

      router.push(`/courses/${slug}`);
   };

   return (
      <section
         style={{
            background: "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
         }}
         className="relative overflow-hidden text-white"
      >
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
               >
                  <div className="space-y-4">
                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {course.title}
                     </h1>
                     <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                        {course.description}
                     </p>
                  </div>

                  {/* <div className="flex flex-wrap gap-4 text-sm">
                     <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                     </div>
                     <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                        <Calendar className="h-4 w-4" />
                        <span>Starts {course.startDate}</span>
                     </div>
                     <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                        <Users className="h-4 w-4" />
                        <span>{course.slots} spots available</span>
                     </div>
                  </div> */}

                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Button
                        onClick={handleLearnMore}
                        size="lg"
                        className="bg-white cursor-pointer text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                     >
                        Learn More
                     </Button>
                  </motion.div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
               >
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                     <Image
                        src={
                           course.image ||
                           "/placeholder.svg?height=400&width=600"
                        }
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
