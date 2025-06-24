import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import ScrollToTopButton from "@/components/landing/scroll-to-top";

export const metadata: Metadata = {
   title: {
      default: "Malamiromba Ltd. | Northern Largest Tech Community",
      template: "%s | Malamiromba Ltd.",
   },
   description:
      "Join Northern Nigeria's largest tech community. We offer tech training, mentorship, consulting, and career development for aspiring tech professionals.",
   keywords: [
      "tech community",
      "Northern Nigeria tech",
      "tech training",
      "mentorship",
      "tech consulting",
      "career development",
      "Malamiromba",
      "tech education",
      "coding bootcamp",
      "software development",
   ],
   authors: [{ name: "Malamiromba Ltd." }],
   creator: "Malamiromba Ltd.",
   publisher: "Malamiromba Ltd.",
   formatDetection: {
      email: false,
      address: false,
      telephone: false,
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   openGraph: {
      type: "website",
      locale: "en_NG",
      url: "https://malamiromba.com",
      siteName: "Malamiromba Ltd.",
      title: "Malamiromba Ltd. | Northern Largest Tech Community",
      description:
         "Join Northern Nigeria's largest tech community. We offer tech training, mentorship, consulting, and career development for aspiring tech professionals.",
      images: [
         {
            url: "/images/malamiromba.png",
            width: 800,
            height: 540,
            alt: "Malamiromba Ltd.",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: "Malamiromba Ltd. | Tech Community & Training Platform",
      description:
         "Join Northern Nigeria's largest tech community. We offer tech training, mentorship, consulting, and career development for aspiring tech professionals.",
      creator: "@Malamiromba",
      images: ["/images/malamiromba.png"],
   },
   // verification: {
   //    google: "your-google-verification-code",
   //    yandex: "your-yandex-verification-code",
   // },
   alternates: {
      canonical: "https://malamiromba.com",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicon.ico" />
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
         </head>
         <body className="antialiased font-poppins bg-white">
            {children}
            <ToastContainer />
            <ScrollToTopButton />
         </body>
      </html>
   );
}
