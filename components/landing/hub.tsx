"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HubData } from "@/common/lib/data";

type HubShowcaseProps = {
   data: HubData;
};

const iconMap = [HeartHandshake, Sparkles, ArrowUpRight];

export default function HubShowcase({ data }: HubShowcaseProps) {
   return (
      <section
         id="skills-arewa"
         className="bg-[#041126] text-white py-24 border-t border-white/5"
      >
         <div className="container mx-auto px-4 space-y-16">
            <header className="max-w-3xl space-y-4">
               {/* <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Image
                     src="/logo/skill-arewa.svg"
                     alt="Skills Arewa Hub logo"
                     width={112}
                     height={32}
                     className="h-6 w-auto"
                  />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">
                     Skills Arewa Hub
                  </span>
               </div> */}
               <Image
                  src="/images/skills-arewa.png"
                  alt="Skills Arewa Hub logo"
                  width={172}
                  height={48}
                  className=""
                  />
               {/* <p className="text-2xl uppercase tracking-[0.4em] text-accent">
                  {data.eyebrow}
               </p> */}
               <h2 className="text-3xl md:text-5xl font-semibold">
                  {data.title}
               </h2>
               <p className="text-lg text-white/70">{data.subtitle}</p>
               <p className="text-base text-white/80">{data.description}</p>
            </header>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
               <div className="space-y-6">
                  {data.focusAreas.map((area, index) => {
                     const Icon = iconMap[index % iconMap.length];
                     return (
                        <article
                           key={area.title}
                           className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                        >
                           <div className="flex items-center gap-3 text-accent">
                              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                                 <Icon className="h-5 w-5" />
                              </span>
                              <h3 className="text-xl font-semibold text-white">
                                 {area.title}
                              </h3>
                           </div>
                           <p className="text-white/75 text-base leading-relaxed">
                              {area.copy}
                           </p>
                        </article>
                     );
                  })}
               </div>

               <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-accent/10 to-accent/5 p-6 space-y-8">
                  <div>
                     <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                        Pulse
                     </p>
                     <h4 className="text-2xl font-semibold">Impact snapshot</h4>
                     <p className="text-white/75 text-sm mt-2">
                        Updated numbers from our community of builders, mentors, and fellows.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     {data.stats.map((stat) => (
                        <div
                           key={stat.label}
                           className="rounded-xl border border-white/10 bg-black/20 px-4 py-5 text-center"
                        >
                           <p className="text-3xl font-semibold text-accent">
                              {stat.value}
                           </p>
                           <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                              {stat.label}
                           </p>
                        </div>
                     ))}
                  </div>
                  <div className="space-y-4">
                     <Link href={data.ctas.primary.href} target="_blank" rel="noreferrer">
                        <Button className="w-full justify-between rounded-full bg-accent px-6 py-6 my-2 text-base font-medium text-white hover:bg-accent/90">
                           {data.ctas.primary.label}
                           <ArrowUpRight className="h-5 w-5" />
                        </Button>
                     </Link>
                     <Link
                        href={data.ctas.secondary.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:border-accent"
                     >
                        {data.ctas.secondary.label}
                     </Link>
                     {data.ctas.tertiary && (
                        <Link
                           href={data.ctas.tertiary.href}
                           target="_blank"
                           rel="noreferrer"
                           className="inline-flex w-full items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-medium text-white/80 hover:text-white"
                        >
                           {data.ctas.tertiary.label}
                           <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                     )}
                  </div>
               </aside>
            </div>
         </div>
      </section>
   );
}
