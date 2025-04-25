"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";

type Course = {
   id: number;
   title: string;
   description: string;
   image: string;
   slots: number;
   duration: string;
   startDate: string;
};

export default function BootcampsSection() {
   const bootcamps: Course[] = [
      {
         id: 1,
         title: "Product Management",
         description:
            "Master the art of product management, from ideation to launch. Learn market research, roadmap planning, and agile methodologies.",
         image: "/images/product-management.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 2,
         title: "Creative design",
         description:
            "Dive into UI/UX design principles, master industry-standard tools, and create stunning visual experiences for digital products.",
         image: "/images/creative-design.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 3,
         title: "Data analysis",
         description:
            "Learn to analyze complex datasets, create meaningful insights, and make data-driven decisions using modern analytical tools.",
         image: "/images/data-analysis.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 4,
         title: "Digital Marketing",
         description:
            "Master digital marketing strategies, from SEO and social media to content marketing and analytics-driven campaign optimization.",
         image: "/images/digital-marketing.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 5,
         title: "Backend Development",
         description:
            "Build robust server-side applications, design APIs, and master database management using modern backend technologies.",
         image: "/images/backend.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 6,
         title: "Basic Computer Skills",
         description:
            "Get started with essential computer skills, including office software, internet navigation, and fundamental digital literacy.",
         image: "/images/basic-comp.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "August 18, 2025",
      },
      {
         id: 7,
         title: "Web development",
         description:
            "Learn modern web development technologies, build responsive websites, and master HTML, CSS, and JavaScript frameworks.",
         image: "/images/web-dev.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "August 18, 2025",
      },
   ];

   const onlineCourses = bootcamps.map((course) => ({
      ...course,
      id: course.id + 100,
   }));

   const CourseCard = ({
      course,
      index,
   }: {
      course: Course;
      index: number;
   }) => {
      return (
         <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               duration: 0.4,
               delay: index * 0.1,
               ease: [0.25, 0.1, 0.25, 1.0],
            }}
            whileHover={{
               y: -5,
               boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
            layout
         >
            <div className="relative h-56 overflow-hidden">
               <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
               />
            </div>
            <div className="p-5 flex flex-col flex-grow">
               <h3 className="font-bold text-lg text-primary mb-2">
                  {course.title}
               </h3>
               <p className="text-gray-600 text-xs mb-4">
                  {course.description}
               </p>
               <div className="text-[8px] md:text-[10px] text-gray-500 mb-2">
                  {course.slots} available slots |{" "}
                  <span className="text-green-600">open</span>
               </div>
               <div className="text-[8px] md:text-[10px] text-gray-500 mb-4">
                  {course.duration} | Starting {course.startDate}
               </div>
               <div className="mt-auto flex justify-end">
                  <motion.div
                     whileHover={{ scale: 1.03 }}
                     whileTap={{ scale: 0.97 }}
                  >
                     <Link
                        href="https://docs.google.com/forms/d/1mNLcJW98v2iC7P5pBnUSCtW0phi-C3xaSBsk1CFXXlM/edit#settings"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <Button
                           className="bg-primary cursor-pointer hover:bg-primary/90 text-white rounded-full px-6"
                           variant="default"
                        >
                           Enroll <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                     </Link>
                  </motion.div>
               </div>
            </div>
         </motion.div>
      );
   };

   return (
      <section id="bootcamp" className="bg-white">
         <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <Tabs defaultValue="bootcamps" className="w-full">
               <div className="mb-8">
                  <TabsList className="border-b bg-white w-full justify-start rounded-none p-0 h-auto">
                     <TabsTrigger
                        value="bootcamps"
                        className="relative data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-accent px-4 py-3 text-lg font-medium"
                     >
                        Bootcamps
                        <motion.span
                           className="absolute text-accent -right-1 top-4"
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                           }}
                        >
                           *
                        </motion.span>
                     </TabsTrigger>
                     <TabsTrigger
                        value="online-courses"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-accent px-4 py-3 text-lg font-medium"
                     >
                        Online courses
                     </TabsTrigger>
                  </TabsList>
               </div>

               <TabsContent value="bootcamps" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {bootcamps.map((course, index) => (
                        <CourseCard
                           key={course.id}
                           course={course}
                           index={index}
                        />
                     ))}
                  </div>
               </TabsContent>

               <TabsContent value="online-courses" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {onlineCourses.map((course, index) => (
                        <CourseCard
                           key={course.id}
                           course={course}
                           index={index}
                        />
                     ))}
                  </div>
               </TabsContent>
            </Tabs>
         </div>
      </section>
   );
}
