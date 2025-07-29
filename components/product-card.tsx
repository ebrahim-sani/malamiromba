"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap } from "lucide-react";
import type { Product } from "@/lib/products";

interface ProductCardProps {
   product: Product;
}

const statusConfig = {
   LIVE: {
      label: "Live",
      className: "bg-green-100 text-green-700 border-green-200",
      icon: <Zap className="h-3 w-3" />,
   },
   IN_DEVELOPMENT: {
      label: "In Development",
      className: "bg-blue-100 text-blue-700 border-blue-200",
      icon: <Calendar className="h-3 w-3" />,
   },
   COMING_SOON: {
      label: "Coming Soon",
      className: "bg-purple-100 text-purple-700 border-purple-200",
      icon: <Calendar className="h-3 w-3" />,
   },
};

export default function ProductCard({ product }: ProductCardProps) {
   const statusInfo = statusConfig[product.status];

   return (
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
         <Card className="h-full gap-4 pb-6 pt-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
            <div className="relative">
               <div className="aspect-video relative overflow-hidden">
                  <Image
                     src={product.imageSrc || "/placeholder.svg"}
                     alt={product.title}
                     fill
                     className="object-cover transition-transform duration-300 hover:scale-105"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
               </div>

               <div className="absolute top-4 right-4">
                  <Badge
                     className={`${statusInfo.className} flex items-center gap-1 text-[8px] md:text-xs`}
                  >
                     {statusInfo.icon}
                     {statusInfo.label}
                  </Badge>
               </div>

               {product.badges && product.badges.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                     {product.badges.map((badge, index) => (
                        <Badge
                           key={index}
                           variant="secondary"
                           className="bg-white/90 text-gray-700 text-[8px] md:text-xs"
                        >
                           {badge}
                        </Badge>
                     ))}
                  </div>
               )}
            </div>

            <CardHeader className="px-4">
               <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                     {product.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-blue-600">
                     {product.tagline}
                  </p>
               </div>
            </CardHeader>

            <CardContent className="pt-0 px-4 flex flex-col h-full">
               <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {product.summary}
               </p>

               {product.technologies && product.technologies.length > 0 && (
                  <div className="mb-4">
                     <div className="flex flex-wrap gap-1">
                        {product.technologies.slice(0, 3).map((tech, index) => (
                           <Badge
                              key={index}
                              variant="outline"
                              className="text-xs bg-gray-50"
                           >
                              {tech}
                           </Badge>
                        ))}
                        {product.technologies.length > 3 && (
                           <Badge
                              variant="outline"
                              className="text-xs bg-gray-50"
                           >
                              +{product.technologies.length - 3} more
                           </Badge>
                        )}
                     </div>
                  </div>
               )}

               <Link href={`/products/${product.slug}`} className="mt-auto">
                  <Button
                     style={{
                        background:
                           "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
                     }}
                     className="text-xs md:text-sm w-full group text-white cursor-pointer"
                  >
                     Learn More
                     <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
               </Link>
            </CardContent>
         </Card>
      </motion.div>
   );
}
