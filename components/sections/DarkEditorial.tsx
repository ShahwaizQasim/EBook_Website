"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Feather, Shield, Check, ArrowRight, Award, Sparkles, BookOpen } from "lucide-react";

const pillars = [
  {
    title: "Experienced Creative Professionals",
    description:
      "Trade-veteran developmental editors, master InDesign typographers, and award-winning book jacket artists who treat your words with reverence.",
  },
  {
    title: "Author-Focused Collaboration",
    description:
      "Direct telephone, video, and editorial communications. You work directly with your lead editor—never an automated chatbot or ticket queue.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear production timelines, transparent pricing, and 100% intellectual property ownership with zero permanent royalties deducted.",
  },
  {
    title: "Professional Publishing Support",
    description:
      "Comprehensive guidance from physical galley proof inspection through international cataloging, wholesale distribution, and retail launch.",
  },
];

export default function DarkEditorial() {
  return (
    <section className="bg-[#0B1426] py-20 lg:py-28 border-b border-[#1A2946] text-white relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 -bottom-12 pointer-events-none opacity-[0.03] text-white select-none">
        <Feather size={320} strokeWidth={1} />
      </div>

      {/* Gold Ambient Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifesto & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xs bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/30">
                <Feather size={16} strokeWidth={1.75} />
              </span>
              <span className="font-sans text-[0.74rem] uppercase tracking-[0.18em] font-semibold text-[#B8860B]">
                The Novelora Press Manifesto
              </span>
            </div>

            <h2 className="font-serif text-[2.2rem] sm:text-[3rem] font-bold leading-[1.12] text-white text-balance">
              The Internet Is Full of Promises and .{" "}
              <span className="font-normal text-[#B8860B] block sm:inline">
                Your Book Deserves Real Expertise.
              </span>
            </h2>

            <p className="text-[1.05rem] leading-relaxed text-slate-300 font-sans">
              Too many commercial publishing mills lure authors with automated promises, only to
              deliver generic cookie-cutter templates, outsourced proofreading, and zero post-launch
              support. Once your payment clears, your dedicated contact disappears.
            </p>

            <p className="text-[1.02rem] leading-relaxed text-slate-300 font-sans">
              At <strong className="text-white font-semibold">Novelora Press</strong>, we uphold the
              heritage of traditional publishing houses: every author is partnered with an
              experienced creative team that refines prose, sets bespoke interior typography in
              InDesign, and manages worldwide distribution with integrity and pride.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xs border border-white/10 bg-white/[0.04] p-4.5 hover:border-[#B8860B]/40 transition-colors p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B8860B] text-[#0B1426] text-[10px] font-bold">
                      ✓
                    </span>
                    <h3 className="font-serif text-[1rem] font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed pl-7">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button href="#services" variant="primary" size="md" className="shadow-goldGlow">
                <span>Discover Our Expertise</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Illuminated Manuscript / Proof Plaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md rounded-md border-2 border-[#B8860B]/40 bg-[#060B16] p-8 sm:p-10 shadow-2xl overflow-hidden">
              {/* Subtle gold foil border */}
              <div className="absolute inset-2 border border-[#B8860B]/20 pointer-events-none rounded-xs" />

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B8860B]/50 bg-[#B8860B]/15 text-[#B8860B] mb-5 shadow-goldGlow">
                  <Shield size={32} strokeWidth={1.5} />
                </div>

                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B8860B] mb-1">
                  Editorial Integrity Seal
                </span>

                <h3 className="font-serif text-2xl font-bold text-white">
                  The Novelora Standard
                </h3>

                <p className="font-sans text-xs text-slate-300 leading-relaxed mt-3">
                  Every volume prepared by Novelora Press complies with the rigorous trade
                  benchmarks of the Independent Book Publishers Association (IBPA).
                </p>

                <div className="w-full h-px bg-white/10 my-6" />

                <div className="w-full flex flex-col gap-3 text-left font-sans text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Copyright &amp; Royalties:</span>
                    <span className="text-white font-semibold">100% Author Retained</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Editorial Model:</span>
                    <span className="text-[#B8860B] font-semibold">Senior Human Trade Editors</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Typesetting:</span>
                    <span className="text-white font-semibold">Custom Adobe InDesign</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-400">Proof Verification:</span>
                    <span className="text-white font-semibold">Physical Galley Inspection</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-[11px] text-[#B8860B]">
                  <Sparkles size={13} />
                  <span>Your Story. Your Legacy. Our Publishing Expertise.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
