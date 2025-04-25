import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
   title: "Malamiromba Ltd.",
   description: "A platform for community engagement and events.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="antialiased font-poppins bg-white">
            {children}
            <ToastContainer />
         </body>
      </html>
   );
}
