"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-line/60">
      {/* Editorial Watermark Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Subtle Warm Gradient Accent */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#B8860B]/10 via-[#EFE6D3]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Editorial Headline & Conversion CTAs */}
          <div className="max-w-2xl">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <Eyebrow tone="gold">
                Premium Publishing House &bull; Author Imprint
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-serif text-[2.5rem] sm:text-[2.8rem] lg:text-[3rem] font-bold leading-[1.08] text-ink tracking-[-0.015em] text-balance"
            >
              You Wrote the Book.{" "}
              <span className="font-medium text-[#B8860B] block sm:inline">
                Now Let&rsquo;s Give It
              </span>{" "}
              the Publishing It Deserves.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-[0.9rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans font-normal max-w-xl"
            >
              From your first manuscript to a beautifully published book, we help
              authors turn their ideas into professionally crafted publications
              ready to reach readers worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Button href="#inquiry" variant="primary" size="md" className="shadow-md">
                <span>Start Your Publishing Journey</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="#services" variant="outline" size="md">
                <span>Explore Our Services</span>
              </Button>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 pt-8 border-t border-line/70 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2 text-ink-soft">
                <CheckCircle2 size={16} className="text-[#B8860B] shrink-0" />
                <span className="text-xs font-sans font-medium">100% Rights Retained</span>
              </div>
              <div className="flex items-center gap-2 text-ink-soft">
                <CheckCircle2 size={16} className="text-[#B8860B] shrink-0" />
                <span className="text-xs font-sans font-medium">Bespoke Hardcover &amp; Digital</span>
              </div>
              <div className="flex items-center gap-2 text-ink-soft col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-[#B8860B] shrink-0" />
                <span className="text-xs font-sans font-medium">Global Bookstore Reach</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3-4 Overlapping 3D Book Mockups Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[500px] h-[460px] sm:h-[520px] flex items-center justify-center"
          >
            {/* Visual Depth Card Frame */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Back Book 1 - Historical & Fantasy (Left Angle) */}
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -14 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute left-2 sm:left-6 top-8 sm:top-12 w-36 sm:w-44 h-52 sm:h-64 rounded-xs shadow-book overflow-hidden border border-[#B8860B]/30 z-10 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full bg-[#162720] p-3 flex flex-col justify-between text-white book-spine-effect">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-[#B8860B]">
                    <span>Fantasy</span>
                    <span>Hardcover</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-serif text-sm sm:text-base font-bold leading-tight block text-[#F3E7CA]">
                      Chronicles of the Wolf
                    </span>
                    <span className="text-[10px] text-white/70 font-sans mt-1 block">
                      G. T. Weatherby
                    </span>
                  </div>
                  <div className="border-t border-[#B8860B]/30 pt-1 text-center">
                    <span className="text-[8px] tracking-wider text-[#B8860B] uppercase">
                      Novelora Imprint
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Back Book 2 - Mystery & Crime (Right Angle) */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 14 }}
                animate={{ opacity: 1, x: 0, rotate: 11 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute right-2 sm:right-6 top-6 sm:top-10 w-36 sm:w-44 h-52 sm:h-64 rounded-xs shadow-book overflow-hidden border border-[#B8860B]/30 z-10 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full bg-[#1C1628] p-3 flex flex-col justify-between text-white book-spine-effect">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-widest text-[#B8860B]">
                    <span>Mystery</span>
                    <span>1st Edition</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-serif text-sm sm:text-base font-bold leading-tight block text-[#F3E7CA]">
                      Shadows Over Kestrel Bay
                    </span>
                    <span className="text-[10px] text-white/70 font-sans mt-1 block">
                      Grace Tanaka
                    </span>
                  </div>
                  <div className="border-t border-[#B8860B]/30 pt-1 text-center">
                    <span className="text-[8px] tracking-wider text-[#B8860B] uppercase">
                      Novelora Imprint
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Center Main Book - Editorial & Literary Fiction / 3D Masterpiece */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-44 sm:w-56 h-64 sm:h-80 rounded-xs shadow-[0_25px_50px_-12px_rgba(11,20,38,0.4)] z-30 overflow-hidden border-2 border-[#B8860B]/60 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full bg-[#0B1426] p-4 flex flex-col justify-between text-white book-spine-effect book-edge-side">
                  {/* Gold Foil Header Border */}
                  <div className="flex items-center justify-between border-b border-[#B8860B]/40 pb-2">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8860B] font-sans font-semibold">
                      Literary Fiction
                    </span>
                    <Sparkles size={12} className="text-[#B8860B]" />
                  </div>

                  <div className="text-center my-auto py-2">
                    <span className="font-sans text-[8.5px] uppercase tracking-[0.25em] text-[#B8860B]/90 block mb-1">
                      International Bestseller
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight text-[#F7F3E9]">
                      The Quiet Harbor
                    </h3>
                    <div className="w-8 h-px bg-[#B8860B] mx-auto my-2" />
                    <span className="text-[11px] text-slate-300 font-sans block">
                      Denise Alvarado
                    </span>
                  </div>

                  {/* Foil Stamped Base Plaque */}
                  <div className="border-t border-[#B8860B]/40 pt-2 flex items-center justify-between text-[8px] text-[#B8860B] uppercase tracking-wider font-sans">
                    <span>Foil Stamped</span>
                    <span>Novelora Press</span>
                  </div>
                </div>
              </motion.div>

              {/* Front Accent Book 4 - Biography / Non-Fiction (Tilted Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute right-0 sm:right-4 bottom-2 sm:bottom-4 w-32 sm:w-40 h-44 sm:h-56 rounded-xs shadow-book overflow-hidden border border-[#B8860B]/40 z-40 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full bg-[#2A1810] p-3 flex flex-col justify-between text-white book-spine-effect">
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-wider text-[#B8860B]">
                    <span>Memoir</span>
                    <span>Trade</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-serif text-xs sm:text-sm font-bold leading-tight block text-[#F3E7CA]">
                      Everything We Buried
                    </span>
                    <span className="text-[9px] text-white/70 font-sans mt-0.5 block">
                      Dr. Michael Ostrander
                    </span>
                  </div>
                  <div className="border-t border-[#B8860B]/30 pt-1 text-center">
                    <span className="text-[7.5px] tracking-wider text-[#B8860B] uppercase">
                      Award Finalist
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Quality Assurance Seal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -bottom-4 -left-2 sm:left-4 z-50 rounded-md border border-[#B8860B]/40 bg-white/95 backdrop-blur-md px-3.5 py-2.5 shadow-xl flex items-center gap-2.5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B8860B]/15 text-[#B8860B]">
                  <BookOpen size={16} />
                </div>
                <div>
                  <span className="font-serif text-xs font-bold text-ink block leading-tight">
                    Archival Smyth-Sewn
                  </span>
                  <span className="font-sans text-[10px] text-ink-muted">
                    Bespoke Print &amp; Digital Editions
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
