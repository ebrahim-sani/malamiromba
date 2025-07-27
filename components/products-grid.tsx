"use client";

import { motion } from "framer-motion";
import ProductCard from "./product-card";
import type { Product } from "@/lib/products";

interface ProductsGridProps {
   products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
   return (
      <div className="space-y-8">
         <div className="text-center space-y-4">
            <h2 className="text-sm md:text-3xl font-bold text-gray-900">
               Choose the Right Solution for Your Business
            </h2>
            <p className="text-xs md:text-base text-gray-600 max-w-2xl mx-auto">
               Designed to drive results and support your business every step of
               the way.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
               <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
               >
                  <ProductCard product={product} />
               </motion.div>
            ))}
         </div>
      </div>
   );
}
