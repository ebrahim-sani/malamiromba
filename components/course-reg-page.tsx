"use client";

import Image from "next/image";
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
   GraduationCap,
   TrendingUp,
   Briefcase,
   Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Course } from "@/lib/courses-data";
import { useRouter } from "next/navigation";

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

   const router = useRouter();

   const handleBackClick = () => {
      try {
         // Check if we should return to a specific tab
         const returnTab =
            typeof window !== "undefined"
               ? localStorage.getItem("returnToTab")
               : null;

         if (returnTab === "Agency") {
            // Clean up the stored state
            localStorage.removeItem("returnToTab");
            // Navigate to home with agency tab
            router.push("/");
            // Small delay to ensure page loads before setting tab
            setTimeout(() => {
               if (typeof window !== "undefined") {
                  localStorage.setItem("activeTab", "Agency");
                  window.location.reload();
               }
            }, 100);
         } else {
            // Default back navigation
            router.push("/#bootcamp");
         }
      } catch (error) {
         console.error("Navigation error:", error);
         // Fallback navigation
         router.push("/");
      }
   };

   if (!course) {
      return (
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  Course Not Found
               </h1>
               <p className="text-gray-600 mb-8">
                  The course you're looking for doesn't exist.
               </p>
               <Button
                  onClick={() => router.push("/")}
                  className="bg-blue-600 hover:bg-blue-700"
               >
                  Go Back Home
               </Button>
            </div>
         </div>
      );
   }
   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
         <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                  <p
                     onClick={handleBackClick}
                     className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                     <ArrowLeft className="h-5 w-5" />
                     <span className="font-medium">Back to Courses</span>
                  </p>
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

                     {course.id !== 9 && (
                        <div className="flex flex-wrap gap-4 text-sm">
                           <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                 Starts - {/* {course.startDate} */}
                                 TENTATIVE
                              </span>
                           </div>
                           <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                              <Users className="h-4 w-4" />
                              <span>{course.slots} spots available</span>
                           </div>
                        </div>
                     )}

                     <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-start space-y-1.5 flex-col"
                     >
                        <Button
                           onClick={handleRegistration}
                           disabled={
                              course.opened === false || !course.formLink
                           }
                           size="lg"
                           className="bg-white cursor-pointer text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
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

         <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                     <Tabs defaultValue="overview" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-4">
                           <TabsTrigger
                              className="cursor-pointer"
                              value="overview"
                           >
                              Overview
                           </TabsTrigger>
                           <TabsTrigger
                              className="cursor-pointer"
                              value="curriculum"
                           >
                              {course.modules ? "Modules" : "Curriculum"}
                           </TabsTrigger>
                           <TabsTrigger
                              className="cursor-pointer"
                              value="outcomes"
                           >
                              Outcomes
                           </TabsTrigger>
                           <TabsTrigger
                              className="cursor-pointer"
                              value="audience"
                           >
                              Who's This For
                           </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-8">
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
                                 <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <BookOpen className="h-6 w-6 text-blue-600" />
                                    Key Learning Areas
                                 </h3>
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
                        </TabsContent>

                        <TabsContent value="curriculum" className="space-y-8">
                           <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                           >
                              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                 {course.modules ? (
                                    <>
                                       <Layers className="h-8 w-8 text-purple-600" />
                                       Course Modules
                                    </>
                                 ) : (
                                    <>
                                       <GraduationCap className="h-8 w-8 text-purple-600" />
                                       Course Curriculum
                                    </>
                                 )}
                              </h2>

                              {course.modules ? (
                                 <div className="space-y-6">
                                    {course.modules.map((module, index) => (
                                       <Card
                                          key={index}
                                          className="border-l-4 border-l-purple-500"
                                       >
                                          <CardHeader>
                                             <CardTitle className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                                   <span className="text-purple-600 font-bold text-sm">
                                                      {index + 1}
                                                   </span>
                                                </div>
                                                {module.title}
                                             </CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                             <p className="text-gray-700 mb-4">
                                                {module.description}
                                             </p>
                                             {module.topics && (
                                                <div className="space-y-2">
                                                   <h4 className="font-semibold text-gray-900">
                                                      Topics Covered:
                                                   </h4>
                                                   <ul className="space-y-1">
                                                      {module.topics.map(
                                                         (
                                                            topic,
                                                            topicIndex,
                                                         ) => (
                                                            <li
                                                               key={topicIndex}
                                                               className="flex items-start gap-2"
                                                            >
                                                               <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                                               <span className="text-gray-700 text-sm">
                                                                  {topic}
                                                               </span>
                                                            </li>
                                                         ),
                                                      )}
                                                   </ul>
                                                </div>
                                             )}
                                          </CardContent>
                                       </Card>
                                    ))}
                                 </div>
                              ) : course.curriculum ? (
                                 <div className="space-y-6">
                                    {course.curriculum.map((item, index) => (
                                       <Card
                                          key={index}
                                          className="border-l-4 border-l-blue-500"
                                       >
                                          <CardHeader>
                                             <CardTitle className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                   <span className="text-blue-600 font-bold text-sm">
                                                      {item.month ||
                                                         item.week ||
                                                         index + 1}
                                                   </span>
                                                </div>
                                                {item.title}
                                             </CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                             <p className="text-gray-700 mb-4">
                                                {item.description}
                                             </p>
                                             {item.topics && (
                                                <div className="space-y-2">
                                                   <h4 className="font-semibold text-gray-900">
                                                      Topics Covered:
                                                   </h4>
                                                   <ul className="space-y-1">
                                                      {item.topics.map(
                                                         (
                                                            topic,
                                                            topicIndex,
                                                         ) => (
                                                            <li
                                                               key={topicIndex}
                                                               className="flex items-start gap-2"
                                                            >
                                                               <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                                                               <span className="text-gray-700 text-sm">
                                                                  {topic}
                                                               </span>
                                                            </li>
                                                         ),
                                                      )}
                                                   </ul>
                                                </div>
                                             )}
                                          </CardContent>
                                       </Card>
                                    ))}
                                 </div>
                              ) : (
                                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                                    <p className="text-gray-700 text-lg">
                                       Detailed curriculum information will be
                                       provided upon enrollment. Our structured
                                       approach ensures you build skills
                                       progressively, from foundational concepts
                                       to advanced practical applications.
                                    </p>
                                 </div>
                              )}
                           </motion.div>
                        </TabsContent>

                        <TabsContent value="outcomes" className="space-y-8">
                           {course.outcomes && (
                              <motion.div
                                 initial={{ opacity: 0, y: 30 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6 }}
                              >
                                 <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Target className="h-8 w-8 text-purple-600" />
                                    Learning Outcomes
                                 </h2>
                                 <div className="space-y-4">
                                    {course.outcomes.map((outcome, index) => (
                                       <div
                                          key={index}
                                          className="flex items-start gap-3"
                                       >
                                          <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                                          <span className="text-gray-700 text-lg">
                                             {outcome}
                                          </span>
                                       </div>
                                    ))}
                                 </div>
                              </motion.div>
                           )}
                        </TabsContent>

                        <TabsContent value="audience" className="space-y-8">
                           <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                           >
                              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                 <Briefcase className="h-8 w-8 text-green-600" />
                                 Who Should Take This Course
                              </h2>
                              <p className="text-lg text-gray-700 mb-8">
                                 This course is designed for anyone seeking to
                                 develop practical skills that are applicable
                                 across industries. Whether you are a student,
                                 professional, or entrepreneur, you will gain
                                 the confidence to excel in your chosen field.
                              </p>

                              {course.targetAudience ? (
                                 <div className="grid gap-6">
                                    {course.targetAudience.map(
                                       (audience, index) => (
                                          <Card
                                             key={index}
                                             className="border-l-4 border-l-blue-500"
                                          >
                                             <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                   <div className="p-2 bg-gray-50 rounded-lg">
                                                      <Briefcase className="h-6 w-6 text-blue-600" />
                                                   </div>
                                                   <div>
                                                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                         {audience.title}
                                                      </h3>
                                                      <p className="text-gray-700">
                                                         {audience.description}
                                                      </p>
                                                   </div>
                                                </div>
                                             </CardContent>
                                          </Card>
                                       ),
                                    )}
                                 </div>
                              ) : (
                                 <div className="grid gap-6">
                                    {[
                                       {
                                          title: "Students & Recent Graduates",
                                          description:
                                             "Build foundational skills that enhance your employability across various industries.",
                                          icon: (
                                             <GraduationCap className="h-6 w-6 text-blue-600" />
                                          ),
                                       },
                                       {
                                          title: "Career Changers",
                                          description:
                                             "Gain practical knowledge to transition into new roles with confidence.",
                                          icon: (
                                             <TrendingUp className="h-6 w-6 text-green-600" />
                                          ),
                                       },
                                       {
                                          title: "Business Professionals",
                                          description:
                                             "Enhance your skills to advance in your current role or take on new challenges.",
                                          icon: (
                                             <Briefcase className="h-6 w-6 text-purple-600" />
                                          ),
                                       },
                                       {
                                          title: "Entrepreneurs",
                                          description:
                                             "Develop skills to better manage and grow your business operations.",
                                          icon: (
                                             <Target className="h-6 w-6 text-red-600" />
                                          ),
                                       },
                                    ].map((audience, index) => (
                                       <Card
                                          key={index}
                                          className="border-l-4 border-l-blue-500"
                                       >
                                          <CardContent className="p-6">
                                             <div className="flex items-start gap-4">
                                                <div className="p-2 bg-gray-50 rounded-lg">
                                                   {audience.icon}
                                                </div>
                                                <div>
                                                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                      {audience.title}
                                                   </h3>
                                                   <p className="text-gray-700">
                                                      {audience.description}
                                                   </p>
                                                </div>
                                             </div>
                                          </CardContent>
                                       </Card>
                                    ))}
                                 </div>
                              )}
                           </motion.div>
                        </TabsContent>
                     </Tabs>
                  </div>

                  <div className="space-y-8">
                     {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                     >
                        <Card className="sticky top-24 shadow-lg border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50">
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
                                 className="w-full cursor-pointer hover:bg-gradient-to-r hover:from-blue-700 hover:to-red-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
                     </motion.div> */}

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
                                 <ul className="space-y-3">
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

                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                     >
                        <Card className="shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                 <Star className="h-5 w-5 text-yellow-500" />
                                 Course Highlights
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <ul className="space-y-3">
                                 <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">
                                       Hands-on practical projects
                                    </span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">
                                       Expert instructor guidance
                                    </span>
                                 </li>
                                 <li className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">
                                       Career support & guidance
                                    </span>
                                 </li>
                                 {course.modules && (
                                    <li className="flex items-center gap-2">
                                       <CheckCircle className="h-4 w-4 text-green-500" />
                                       <span className="text-sm">
                                          Structured modular learning
                                       </span>
                                    </li>
                                 )}
                              </ul>
                           </CardContent>
                        </Card>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
