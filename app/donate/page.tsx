"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Gift,
   Copy,
   CreditCard,
   Globe,
   CheckCircle,
   Building,
   Banknote,
} from "lucide-react";
import Link from "next/link";
import { Footer, Navbar } from "@/components/landing";

export default function Donate() {
   const [copied, setCopied] = useState<string | null>(null);

   const copyToClipboard = (text: string, field: string) => {
      navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
   };

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
         },
      },
   };

   const bankAccounts = [
      {
         type: "naira",
         icon: <Building className="h-5 w-5" />,
         bankName: "Lotus Bank",
         accountNumber: "1007595032",
         accountName: "Malamiromba Ltd",
         copyId: "lotus-number",
      },
      {
         type: "naira",
         icon: <Building className="h-5 w-5" />,
         bankName: "Opay Fintech Bank",
         accountNumber: "6116730071",
         accountName: "Malamiromba Ltd",
         copyId: "opay-number",
      },
      {
         type: "dollar",
         icon: <Globe className="h-5 w-5" />,
         bankName: "Access",
         accountNumber: "1802484939",
         accountName: "Zubairu Ibrahim",
         accountCurrency: "USD",
         swiftCode: "ABNGNGLAXXX",
         copyId: "dollar-number",
      },
   ];

   return (
      <main className="flex flex-col">
         <div className="fixed top-0 left-0 w-full z-50">
            <Navbar onAboutClick={() => console.log("About clicked")} />
         </div>
         <motion.section
            className="py-20 flex px-4 sm:px-6 md:px-8 lg:px-12 bg-white min-h-screen items-start md:items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
         >
            <div className="max-w-5xl max-md:mt-10 mx-auto">
               <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-16 text-start"
                  variants={itemVariants}
               >
                  Donate to our programs.
               </motion.h1>

               <motion.div
                  className="mb-12 bg-accent/10 rounded-xl p-6 sm:p-8 md:p-10"
                  variants={itemVariants}
               >
                  <div className="flex items-start gap-4 mb-4">
                     <div className="bg-accent/20 p-2 rounded-full">
                        <Gift className="h-6 w-6 text-accent" />
                     </div>
                     <h2 className="text-xl sm:text-2xl font-bold text-primary">
                        Donate in kind
                     </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                     We accept donations in kind. If you&apos;d like to donate
                     laptops, books, or other tech gear for our community
                     members, please reach out to us on{" "}
                     <Link
                        href="mailto:malamiromba@gmail.com"
                        className="text-accent hover:underline"
                     >
                        malamiromba@gmail.com
                     </Link>{" "}
                     so that we can plan delivery logistics. We appreciate the
                     gesture in advance :)
                  </p>
               </motion.div>

               <motion.div
                  className="bg-accent/10 rounded-xl p-6 sm:p-8 md:p-10"
                  variants={itemVariants}
               >
                  <div className="flex items-start gap-4 mb-4">
                     <div className="bg-accent/20 p-2 rounded-full">
                        <Banknote className="h-6 w-6 text-accent" />
                     </div>
                     <h2 className="text-xl sm:text-2xl font-bold text-primary">
                        Donate in cash
                     </h2>
                  </div>

                  <p className="text-gray-700 mb-6">
                     We recognize that every cash donation is significant, and
                     we&apos;re committed to ensuring that your donation has the
                     greatest possible impact. By donating to us, you&apos;ll be
                     contributing to a brighter future for the tech industry,
                     and helping to create opportunities for entry level tech
                     professionals who need these opportunities to scale their
                     careers.
                  </p>

                  <Dialog>
                     <DialogTrigger asChild>
                        <motion.div
                           whileHover={{ scale: 1.03 }}
                           whileTap={{ scale: 0.97 }}
                        >
                           <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white px-6 py-6 rounded-lg text-base flex items-center gap-2">
                              <CreditCard className="h-5 w-5" />
                              Donate via bank transfer
                           </Button>
                        </motion.div>
                     </DialogTrigger>
                     <DialogContent className="sm:max-w-md max-h-[90vh] overflow-auto">
                        <DialogHeader>
                           <DialogTitle className="text-xl text-primary mb-2">
                              Bank Transfer Details
                           </DialogTitle>
                           <DialogDescription>
                              Please use any of the following bank accounts to
                              make your donation.
                           </DialogDescription>
                        </DialogHeader>

                        <div className="mt-6 space-y-6">
                           <div>
                              <h3 className="font-medium text-primary flex items-center gap-2 mb-4">
                                 <span className="bg-accent/20 p-1 rounded-full">
                                    <CreditCard className="h-4 w-4 text-accent" />
                                 </span>
                                 Naira Accounts
                              </h3>

                              <div className="grid gap-4">
                                 {bankAccounts
                                    .filter(
                                       (account) => account.type === "naira",
                                    )
                                    .map((account, index) => (
                                       <div
                                          key={index}
                                          className="bg-gray-50 rounded-lg overflow-hidden"
                                       >
                                          <div className="bg-primary/5 p-3 flex items-center justify-between">
                                             <div className="flex items-center gap-2">
                                                <span className="bg-accent/20 p-1 rounded-full">
                                                   {account.icon}
                                                </span>
                                                <span className="font-medium">
                                                   {account.bankName}
                                                </span>
                                             </div>
                                             <motion.button
                                                className="text-accent hover:text-accent/80 flex items-center gap-1"
                                                onClick={() =>
                                                   copyToClipboard(
                                                      account.accountNumber,
                                                      account.copyId,
                                                   )
                                                }
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                             >
                                                {copied === account.copyId ? (
                                                   <>
                                                      <CheckCircle className="h-4 w-4" />
                                                      <span className="text-xs">
                                                         Copied!
                                                      </span>
                                                   </>
                                                ) : (
                                                   <>
                                                      <Copy className="h-4 w-4" />
                                                      <span className="text-xs">
                                                         Copy
                                                      </span>
                                                   </>
                                                )}
                                             </motion.button>
                                          </div>
                                          <div className="p-3 space-y-2">
                                             <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Account Number
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.accountNumber}
                                                   </p>
                                                </div>
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Account Name
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.accountName}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                              </div>
                           </div>

                           <div>
                              <h3 className="font-medium text-primary flex items-center gap-2 mb-4">
                                 <span className="bg-accent/20 p-1 rounded-full">
                                    <Globe className="h-4 w-4 text-accent" />
                                 </span>
                                 Dollar Account
                              </h3>

                              <div className="grid gap-4">
                                 {bankAccounts
                                    .filter(
                                       (account) => account.type === "dollar",
                                    )
                                    .map((account, index) => (
                                       <div
                                          key={index}
                                          className="bg-gray-50 rounded-lg overflow-hidden"
                                       >
                                          <div className="bg-primary/5 p-3 flex items-center justify-between">
                                             <div className="flex items-center gap-2">
                                                <span className="bg-accent/20 p-1 rounded-full">
                                                   {account.icon}
                                                </span>
                                                <span className="font-medium">
                                                   {account.bankName}
                                                </span>
                                             </div>
                                             <motion.button
                                                className="text-accent hover:text-accent/80 flex items-center gap-1"
                                                onClick={() =>
                                                   copyToClipboard(
                                                      account.accountNumber,
                                                      account.copyId,
                                                   )
                                                }
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                             >
                                                {copied === account.copyId ? (
                                                   <>
                                                      <CheckCircle className="h-4 w-4" />
                                                      <span className="text-xs">
                                                         Copied!
                                                      </span>
                                                   </>
                                                ) : (
                                                   <>
                                                      <Copy className="h-4 w-4" />
                                                      <span className="text-xs">
                                                         Copy
                                                      </span>
                                                   </>
                                                )}
                                             </motion.button>
                                          </div>
                                          <div className="p-3 space-y-2">
                                             <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Account Number
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.accountNumber}
                                                   </p>
                                                </div>
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Account Name
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.accountName}
                                                   </p>
                                                </div>
                                             </div>
                                             <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Currency
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.accountCurrency}
                                                   </p>
                                                </div>
                                                <div>
                                                   <p className="text-xs text-gray-500">
                                                      Swift Code
                                                   </p>
                                                   <p className="font-medium">
                                                      {account.swiftCode}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                              </div>
                           </div>
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-500">
                           Thank you for your generous support!
                        </div>
                     </DialogContent>
                  </Dialog>
               </motion.div>
            </div>
         </motion.section>

         <Footer onAboutClick={() => console.log("Footer About clicked")} />
      </main>
   );
}
