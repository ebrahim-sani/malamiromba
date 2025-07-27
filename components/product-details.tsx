"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
   ArrowLeft,
   Calendar,
   Zap,
   Target,
   Users,
   Code,
   Star,
   Play,
   X,
   ChevronLeft,
   ChevronRight,
   ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/products";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface ProductDetailPageProps {
   product: Product;
}

const statusConfig = {
   LIVE: {
      label: "Live",
      className: "bg-green-100 text-green-700 border-green-200",
      icon: <Zap className="h-4 w-4" />,
      prefix: "Live since",
   },
   IN_DEVELOPMENT: {
      label: "In Development",
      className: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <Calendar className="h-4 w-4" />,
      prefix: "Expected launch",
   },
   COMING_SOON: {
      label: "Coming Soon",
      className: "bg-purple-100 text-purple-700 border-purple-200",
      icon: <Calendar className="h-4 w-4" />,
      prefix: "Estimated launch",
   },
};

export default function ProductDetailPage({ product }: ProductDetailPageProps) {
   const router = useRouter();
   const [selectedImage, setSelectedImage] = useState<number | null>(null);
   const statusInfo = statusConfig[product.status];

   const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("en-US", {
         year: "numeric",
         month: "long",
         day: "numeric",
      });
   };

   const handleImageClick = (index: number) => {
      setSelectedImage(index);
   };

   const closeModal = () => {
      setSelectedImage(null);
   };

   const navigateImage = (direction: "prev" | "next") => {
      if (!product.gallery || selectedImage === null) return;

      if (direction === "prev") {
         setSelectedImage(
            selectedImage === 0
               ? product.gallery.length - 1
               : selectedImage - 1,
         );
      } else {
         setSelectedImage(
            selectedImage === product.gallery.length - 1
               ? 0
               : selectedImage + 1,
         );
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
         <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex items-center justify-between h-16">
                  <button
                     onClick={() => router.push("/products")}
                     className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                     <ArrowLeft className="h-5 w-5" />
                     <span className="font-medium">Back to Products</span>
                  </button>
                  <Badge
                     className={`${statusInfo.className} flex items-center gap-1`}
                  >
                     {statusInfo.icon}
                     {statusInfo.label}
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
                           {product.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                           {product.tagline}
                        </p>
                        {product.launchDate && (
                           <p className="text-blue-200 flex items-center gap-2">
                              {statusInfo.icon}
                              {statusInfo.prefix}:{" "}
                              {formatDate(product.launchDate)}
                           </p>
                        )}
                     </div>

                     {product.badges && product.badges.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                           {product.badges.map((badge, index) => (
                              <Badge
                                 key={index}
                                 variant="secondary"
                                 className="bg-white/10 text-white border-white/20"
                              >
                                 {badge}
                              </Badge>
                           ))}
                        </div>
                     )}

                     {product.demoUrl && (
                        <motion.div
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.97 }}
                        >
                           <Button
                              size="lg"
                              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                           >
                              <Play className="mr-2 h-5 w-5" />
                              Watch Demo
                           </Button>
                        </motion.div>
                     )}
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="relative"
                  >
                     <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                           src={product.imageSrc || "/placeholder.svg"}
                           alt={product.title}
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
                  <div className="lg:col-span-2 space-y-12">
                     <div className="space-y-8">
                        <Card className="border-l-4 border-l-red-500 bg-red-50/50">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-red-700">
                                 <Target className="h-5 w-5" />
                                 The Problem
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-gray-700 leading-relaxed">
                                 {product.problem}
                              </p>
                           </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500 bg-green-50/50">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2 text-green-700">
                                 <Zap className="h-5 w-5" />
                                 Our Solution
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-gray-700 leading-relaxed">
                                 {product.solution}
                              </p>
                           </CardContent>
                        </Card>
                     </div>

                     {product.impact && product.impact.length > 0 && (
                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                 <Star className="h-5 w-5 text-yellow-500" />
                                 Key Results & Impact
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <div className="grid md:grid-cols-2 gap-4">
                                 {product.impact.map((item, index) => (
                                    <div
                                       key={index}
                                       className="flex items-start gap-3"
                                    >
                                       <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                       <span className="text-gray-700 font-medium">
                                          {item}
                                       </span>
                                    </div>
                                 ))}
                              </div>
                           </CardContent>
                        </Card>
                     )}

                     <Card>
                        <CardContent className="p-8">
                           <div className="prose prose-lg max-w-none">
                              <ReactMarkdown
                                 components={{
                                    h1: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <h1 className="text-3xl font-bold text-gray-900 mb-6">
                                          {children}
                                       </h1>
                                    ),
                                    h2: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                                          {children}
                                       </h2>
                                    ),
                                    h3: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                                          {children}
                                       </h3>
                                    ),
                                    p: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <p className="text-gray-700 leading-relaxed mb-4">
                                          {children}
                                       </p>
                                    ),
                                    blockquote: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 rounded-r-lg">
                                          <div className="text-gray-700 italic">
                                             {children}
                                          </div>
                                       </blockquote>
                                    ),
                                    ul: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <ul className="space-y-2 mb-4">
                                          {children}
                                       </ul>
                                    ),
                                    li: ({
                                       children,
                                    }: {
                                       children?: React.ReactNode;
                                    }) => (
                                       <li className="flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                          <span className="text-gray-700">
                                             {children}
                                          </span>
                                       </li>
                                    ),
                                 }}
                              >
                                 {product.detail}
                              </ReactMarkdown>
                           </div>
                        </CardContent>
                     </Card>

                     {product.gallery && product.gallery.length > 0 && (
                        <Card>
                           <CardHeader>
                              <CardTitle>Screenshots & Gallery</CardTitle>
                           </CardHeader>
                           <CardContent>
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                 {product.gallery.map((image, index) => (
                                    <motion.div
                                       key={index}
                                       whileHover={{ scale: 1.05 }}
                                       className="relative aspect-video rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                                       onClick={() => handleImageClick(index)}
                                    >
                                       <Image
                                          src={image || "/placeholder.svg"}
                                          alt={`${product.title} screenshot ${
                                             index + 1
                                          }`}
                                          fill
                                          className="object-cover"
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                       />
                                    </motion.div>
                                 ))}
                              </div>
                           </CardContent>
                        </Card>
                     )}

                     {product.demoUrl && (
                        <Card>
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                 <Play className="h-5 w-5" />
                                 Product Demo
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <div className="aspect-video rounded-lg overflow-hidden">
                                 <iframe
                                    src={product.demoUrl}
                                    title={`${product.title} Demo`}
                                    className="w-full h-full"
                                    allowFullScreen
                                 />
                              </div>
                           </CardContent>
                        </Card>
                     )}
                  </div>

                  <div className="space-y-8">
                     {product.features && product.features.length > 0 && (
                        <Card className="shadow-lg">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                 <Star className="h-5 w-5 text-yellow-500" />
                                 Key Features
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <ul className="space-y-3">
                                 {product.features.map((feature, index) => (
                                    <li
                                       key={index}
                                       className="flex items-start gap-2"
                                    >
                                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                       <span className="text-sm text-gray-700">
                                          {feature}
                                       </span>
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>
                        </Card>
                     )}

                     {product.audience && product.audience.length > 0 && (
                        <Card className="shadow-lg">
                           <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                 <Users className="h-5 w-5 text-blue-500" />
                                 Target Audience
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <div className="space-y-2">
                                 {product.audience.map((item, index) => (
                                    <Badge
                                       key={index}
                                       variant="outline"
                                       className="mr-2 mb-2"
                                    >
                                       {item}
                                    </Badge>
                                 ))}
                              </div>
                           </CardContent>
                        </Card>
                     )}

                     {product.technologies &&
                        product.technologies.length > 0 && (
                           <Card className="shadow-lg">
                              <CardHeader>
                                 <CardTitle className="flex items-center gap-2">
                                    <Code className="h-5 w-5 text-purple-500" />
                                    Technologies
                                 </CardTitle>
                              </CardHeader>
                              <CardContent>
                                 <div className="flex flex-wrap gap-2">
                                    {product.technologies.map((tech, index) => (
                                       <Badge
                                          key={index}
                                          variant="secondary"
                                          className="bg-gray-100"
                                       >
                                          {tech}
                                       </Badge>
                                    ))}
                                 </div>
                              </CardContent>
                           </Card>
                        )}

                     <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                        <CardContent className="p-6 text-center space-y-4">
                           <h3 className="text-xl font-bold text-gray-900">
                              Interested in {product.title}?
                           </h3>
                           <p className="text-gray-600">
                              {product.status === "LIVE"
                                 ? "Get started today and transform your workflow."
                                 : "Join our waitlist to be notified when it launches."}
                           </p>
                           <Button
                              style={{
                                 background:
                                    "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                              }}
                              className="w-full cursor-pointer"
                              size="lg"
                           >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {product.status === "LIVE"
                                 ? "Get Started"
                                 : "Join Waitlist"}
                           </Button>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </section>

         {selectedImage !== null && product.gallery && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
               <div className="relative max-w-4xl max-h-full">
                  <button
                     onClick={closeModal}
                     className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  >
                     <X className="h-8 w-8" />
                  </button>

                  <div className="relative">
                     <Image
                        src={
                           product.gallery[selectedImage] || "/placeholder.svg"
                        }
                        alt={`${product.title} screenshot ${selectedImage + 1}`}
                        width={800}
                        height={600}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                     />

                     {product.gallery.length > 1 && (
                        <>
                           <button
                              onClick={() => navigateImage("prev")}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                           >
                              <ChevronLeft className="h-8 w-8" />
                           </button>
                           <button
                              onClick={() => navigateImage("next")}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                           >
                              <ChevronRight className="h-8 w-8" />
                           </button>
                        </>
                     )}
                  </div>

                  <div className="text-center mt-4 text-white">
                     {selectedImage + 1} of {product.gallery.length}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}
