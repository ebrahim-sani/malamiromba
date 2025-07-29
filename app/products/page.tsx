import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductsGrid from "@/components/products-grid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/landing";

export const metadata: Metadata = {
   title: "Products - Innovative Software Solutions",
   description:
      "Discover our suite of AI-powered tools designed to transform your business operations and drive growth.",
   openGraph: {
      title: "Products - Innovative Software Solutions",
      description:
         "Discover our suite of AI-powered tools designed to transform your business operations and drive growth.",
   },
};

export default function ProductsPage() {
   return (
      <>
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <section
               style={{
                  background:
                     "linear-gradient(90deg, #011F41 0%, #FF0C0C 100%)",
               }}
               className="relative overflow-hidden text-white"
            >
               <div className="absolute inset-0 bg-black/20"></div>
               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                  <Link
                     href="/"
                     className="flex absolute top-3 md:top-6 left-3 md:left-4 sm:left-6 lg:left-8 rounded-full w-fit px-3 md:px-6 py-1 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 items-center gap-2 text-white hover:text-white transition-all duration-200 hover:scale-105"
                  >
                     <ArrowLeft className="h-3 md:h-4 w-3 md:w-4" />
                     <span className="font-medium text-xs md:text-sm">
                        Back
                     </span>
                  </Link>
                  <div className="text-center space-y-6">
                     <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Our Products
                     </h1>
                     <p className="text-xs sm:text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Innovative software solutions powered by AI to transform
                        your business operations and drive sustainable growth.
                     </p>
                  </div>
               </div>
            </section>

            <section className="py-16 lg:py-20">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <ProductsGrid products={products} />
               </div>
            </section>
         </div>

         <Footer />
      </>
   );
}
