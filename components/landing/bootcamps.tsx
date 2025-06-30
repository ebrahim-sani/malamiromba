"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Badge } from "../ui/badge";

type Course = {
   id: number;
   title: string;
   type?: "physical" | "online";
   description: string;
   image: string;
   slots: number;
   duration: string;
   startDate: string;
   opened?: boolean;
   formLink?: string;
};

const generateSlug = (title: string): string => {
   return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
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
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/Gkz6sDvdoZMw6nxm7",
      },
      {
         id: 2,
         title: "Creative Design",
         description:
            "Beginner-friendly training in graphics, branding, and product design. Get hands-on with industry tools, and start creating beautiful visuals.",
         image: "/images/creative-design.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "JUNE 9, 2025",
      },
      {
         id: 3,
         title: "Data Analysis",
         description:
            "Learn to analyze complex datasets, create meaningful insights, and make data-driven decisions using modern analytical tools.",
         image: "/images/data-analysis.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/7MQXWzFnP6nF8ehdA",
      },
      {
         id: 4,
         title: "Digital Marketing",
         description:
            "Master digital marketing strategies, from SEO and social media to content marketing and analytics-driven campaign optimization.",
         image: "/images/digital-marketing.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/24nNkCfZrwLqf4Jv5",
      },
      {
         id: 5,
         title: "Backend Development",
         description:
            "Build robust server-side applications, design APIs, and master database management using modern backend technologies.",
         image: "/images/backend.jpg",
         slots: 48,
         duration: "8 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/TZgmFPSrHHK28pSF6",
      },
      {
         id: 6,
         title: "Basic Computer Skills",
         description:
            "Get started with essential computer skills, including office software, internet navigation, and fundamental digital literacy.",
         image: "/images/basic-comp.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/Uz3jH8v9TzUC3e3M7",
      },
      {
         id: 7,
         title: "Web Development",
         description:
            "Learn modern web development technologies, build responsive websites, and master HTML, CSS, and JavaScript frameworks.",
         image: "/images/web-dev.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/JomvgxuE3qLRm5bQ6",
      },
      {
         id: 8,
         title: "Basic Video Editing",
         description:
            "Learn the foundations of video editing using popular tools. Cut, trim, and enhance footage to create engaging and professional content.",
         image: "/images/video-editing.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
      },
      {
         id: 9,
         title: "GenAI Accelerator for Business",
         description:
            "Explore how Generative AI transforms modern businesses. Learn to integrate AI tools for automation, content, and strategic advantage.",
         image: "/images/genai-business.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/pnojRCz8i4gTqP4r9",
      },
      {
         id: 10,
         title: "GenAI Skill Up",
         description:
            "Level up your knowledge of Generative AI with practical skills. Learn prompt engineering, tool workflows, and real-world applications.",
         image: "/images/genai-skillup.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "JUNE 9, 2025",
         formLink: "https://forms.gle/4RZveCdv1C8yRj9Y9",
      },
      {
         id: 11,
         title: "Physical Bootcamp",
         description:
            "Join our in-person bootcamps and gain hands-on skills in a collaborative environment. Coming soon to Kano, Abuja, Sokoto, Lagos, and Jigawa.",
         image: "/images/bootcamps.jpg",
         slots: 48,
         duration: "4 Weeks",
         startDate: "Coming Soon",
         type: "physical",
         formLink: "https://forms.gle/Jg79Cqgs2KPpSWRz5",
      },
   ];

   const onlineCourses = bootcamps
      .filter((c) => c.type !== "physical")
      .map((course) => ({
         ...course,
         id: course.id + 100,
      }));

   const physicalClasses = bootcamps
      .filter((c) => c.type === "physical")
      .map((course) => ({
         ...course,
         id: course.id + 100,
      }));

   const CourseCard = ({
      course,
      index,
      opened = true,
   }: {
      course: Course;
      index: number;
      opened?: boolean;
   }) => {
      const courseSlug = generateSlug(course.title);

      return (
         <motion.div
            id="bootcamp"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               duration: 0.5,
               delay: index * 0.1,
               ease: [0.25, 0.1, 0.25, 1.0],
            }}
            whileHover={{
               y: -8,
               transition: { duration: 0.2 },
            }}
            layout
         >
            <div className="relative h-64 overflow-hidden bg-gray-100">
               <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  quality={95}
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
               />
               <div className="absolute top-3 right-4">
                  <Badge className="bg-neutral-100 text-green-500 border border-neutral-300 font-extralight px-3 py-1 text-xs">
                     {opened ? "Open" : "Coming soon!"}
                  </Badge>
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow space-y-4">
               <div className="space-y-3">
                  <h3 className="font-bold text-xl text-gray-900 leading-tight line-clamp-2">
                     {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                     {course.description}
                  </p>
               </div>

               <div className="mt-auto pt-4">
                  <motion.div
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="w-full"
                  >
                     <Link
                        href={`/courses/${courseSlug}`}
                        className="block w-full"
                     >
                        <Button
                           disabled={opened === false}
                           className={`w-full cursor-pointer ${
                              opened === false
                                 ? "bg-primary/55"
                                 : "bg-primary hover:bg-primary/80"
                           } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2`}
                           variant="default"
                        >
                           <ArrowRight className="h-5 w-5" />
                           Enroll Now
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
            <Tabs defaultValue="online-courses" className="w-full">
               <div className="mb-8">
                  <TabsList className="border-b bg-white w-full justify-start rounded-none p-0 h-auto">
                     <TabsTrigger
                        value="online-courses"
                        className="data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-accent px-4 py-3 text-lg font-medium"
                     >
                        Online courses
                     </TabsTrigger>
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
                  </TabsList>
               </div>

               <TabsContent value="bootcamps" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {physicalClasses.map((course, index) => (
                        <CourseCard
                           key={course.id}
                           course={course}
                           index={index}
                           opened={course.opened}
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
                           opened={course.opened}
                        />
                     ))}
                  </div>
               </TabsContent>
            </Tabs>
         </div>
      </section>
   );
}
