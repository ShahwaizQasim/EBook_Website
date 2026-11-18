"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { BookOpen, Users, Globe2, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: BookOpen,
    title: "Professional Book Publishing",
    subtitle: "Complete Trade Production",
    description: "Bespoke hardcover, trade paperback, and reflowable digital editions crafted to international bookstore standards.",
  },
  {
    icon: Users,
    title: "Dedicated Editorial Team",
    subtitle: "Personal Trade Editors",
    description: "Experienced literary editors, proofreaders, and typographers dedicated directly to your manuscript.",
  },
  {
    icon: Globe2,
    title: "Global Distribution",
    subtitle: "Worldwide Retail Reach",
    description: "Seamless catalog placement across Amazon, Barnes & Noble, Apple Books, Ingram, and independent bookstores.",
  },
  {
    icon: ShieldCheck,
    title: "Author-Focused Process",
    subtitle: "100% Rights & Royalties",
    description: "You retain full copyright and creative control. Transparent milestones with zero hidden royalty deductions.",
  },
];

export default function TrustStats() {
  return (
    <section className="bg-[#0B1426] border-y border-[#1A2946] py-12 lg:py-16 text-white relative overflow-hidden">
      {/* Subtle gold glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#B99750]/5 blur-3xl rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
          {metrics.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-4 sm:px-6 lg:border-r lg:border-[#B99750]/20 lg:last:border-r-0"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#B99750]/15 text-[#B99750] border border-[#B99750]/30 mb-4 shadow-sm">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <span className="font-serif text-[1.18rem] sm:text-[1.25rem] font-bold text-white leading-tight">
                  {item.title}
                </span>

                <span className="mt-1 font-sans text-xs uppercase tracking-[0.14em] text-[#D4B36D] font-medium">
                  {item.subtitle}
                </span>

                <p className="mt-2.5 text-[0.85rem] text-slate-300 leading-relaxed font-sans max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

