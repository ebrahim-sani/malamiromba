"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
   ArrowLeft,
   Calendar,
   Clock,
   Users,
   CheckCircle,
   Star,
   BookOpen,
   Target,
   Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Course } from "@/lib/courses-data";

interface CourseRegistrationPageProps {
   course: Course;
}

export default function CourseRegistrationPage({
   course,
}: CourseRegistrationPageProps) {
   const handleRegistration = () => {
      if (course.formLink) {
         window.open(course.formLink, "_blank", "noopener,noreferrer");
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
         <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                  <Link
                     href="/#bootcamp"
                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                     <ArrowLeft className="h-5 w-5" />
                     <span className="font-medium">Back to Courses</span>
                  </Link>
                  <Badge
                     variant="secondary"
                     className="bg-green-100 text-green-700 border-green-200"
                  >
                     {course.opened !== false
                        ? "Registration Open"
                        : "Coming Soon"}
                  </Badge>
               </div>
            </div>
         </nav>

         <section
            style={{
               background: "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
            }}
            className="relative overflow-hidden text-white"
         >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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

                     <div className="flex flex-wrap gap-4 text-sm">
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
                     </div>

                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Button
                           onClick={handleRegistration}
                           disabled={
                              course.opened === false || !course.formLink
                           }
                           size="lg"
                           className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                           {course.opened === false
                              ? "Coming Soon"
                              : "Register Now"}
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
                           src={course.image || ""}
                           alt={course.title}
                           fill
                           className="object-contain"
                           priority
                           sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-12">
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                           Course Overview
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                           {course.longDescription || course.description}
                        </p>
                     </motion.div>

                     {course.features && (
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.1 }}
                        >
                           <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                              <BookOpen className="h-8 w-8 text-blue-600" />
                              What You'll Learn
                           </h2>
                           <div className="grid md:grid-cols-2 gap-4">
                              {course.features.map((feature, index) => (
                                 <div
                                    key={index}
                                    className="flex items-start gap-3"
                                 >
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">
                                       {feature}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        </motion.div>
                     )}

                     {course.outcomes && (
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                        >
                           <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                              <Target className="h-8 w-8 text-purple-600" />
                              Learning Outcomes
                           </h2>
                           <div className="space-y-3">
                              {course.outcomes.map((outcome, index) => (
                                 <div
                                    key={index}
                                    className="flex items-start gap-3"
                                 >
                                    <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">
                                       {outcome}
                                    </span>
                                 </div>
                              ))}
                           </div>
                        </motion.div>
                     )}
                  </div>

                  <div className="space-y-8">
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                     >
                        <Card
                           style={{
                              borderColor:
                                 "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                           }}
                           className="sticky top-24 shadow-md border bg-gradient-to-br from-white to-gray-50"
                        >
                           <CardHeader className="text-center pb-4">
                              <CardTitle className="text-2xl font-bold text-gray-900">
                                 Registration
                              </CardTitle>
                              <p className="text-gray-600">
                                 Secure your spot today
                              </p>
                           </CardHeader>
                           <CardContent className="space-y-6">
                              <div className="space-y-4">
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                       Duration:
                                    </span>
                                    <span className="font-semibold">
                                       {course.duration}
                                    </span>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                       Start Date:
                                    </span>
                                    <span className="font-semibold">
                                       {course.startDate}
                                    </span>
                                 </div>
                                 <div className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                       Available Spots:
                                    </span>
                                    <span className="font-semibold text-green-600">
                                       {course.slots}
                                    </span>
                                 </div>
                              </div>

                              <Separator />

                              <Button
                                 onClick={handleRegistration}
                                 disabled={
                                    course.opened === false || !course.formLink
                                 }
                                 className="w-full cursor-pointer text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                                 size="lg"
                                 style={{
                                    background:
                                       "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                                 }}
                              >
                                 {course.opened === false
                                    ? "Coming Soon"
                                    : "Register Here"}
                              </Button>

                              {course.opened !== false && (
                                 <p className="text-xs text-gray-500 text-center">
                                    You'll be redirected to our registration
                                    form
                                 </p>
                              )}
                           </CardContent>
                        </Card>
                     </motion.div>

                     {course.prerequisites && (
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.4 }}
                        >
                           <Card className="shadow-lg">
                              <CardHeader>
                                 <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-orange-500" />
                                    Prerequisites
                                 </CardTitle>
                              </CardHeader>
                              <CardContent>
                                 <ul className="space-y-2">
                                    {course.prerequisites.map(
                                       (prereq, index) => (
                                          <li
                                             key={index}
                                             className="flex items-start gap-2"
                                          >
                                             <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                             <span className="text-sm text-gray-700">
                                                {prereq}
                                             </span>
                                          </li>
                                       ),
                                    )}
                                 </ul>
                              </CardContent>
                           </Card>
                        </motion.div>
                     )}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
