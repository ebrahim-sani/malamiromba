import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import ProductDetailPage from "@/components/product-details";

interface PageProps {
   params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
   return products.map((product) => ({
      slug: product.slug,
   }));
}

export async function generateMetadata({
   params,
}: PageProps): Promise<Metadata> {
   const { slug } = await params;
   const product = getProductBySlug(slug);

   if (!product) {
      return { title: "Product Not Found" };
   }

   return {
      title: `${product.title} - ${product.tagline}`,
      description: product.summary,
      openGraph: {
         title: `${product.title} - ${product.tagline}`,
         description: product.summary,
         images: [product.imageSrc],
      },
   };
}

export default async function ProductPage({ params }: PageProps) {
   const { slug } = await params;
   const product = getProductBySlug(slug);

   if (!product) {
      notFound();
   }

   return <ProductDetailPage product={product} />;
}
