"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, Phone, Mail, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#0B1426] py-20 lg:py-28 border-b border-[#1A2946] text-white relative overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#121F38]/60 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="rounded-xl border-2 border-[#B8860B]/40 bg-gradient-to-br from-[#0D182E] via-[#0B1426] to-[#070E1B] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/30 w-fit text-xs font-sans font-semibold tracking-wider uppercase">
                <Sparkles size={13} />
                <span>Begin Your Publication Journey</span>
              </div>

              <h2 className="font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-bold leading-[1.08] text-white text-balance">
                Your Story Is Worth Sharing{" "}
                <span className="font-medium text-[#B8860B] block sm:inline">
                  With the World.
                </span>
              </h2>

              <p className="font-sans text-[1.05rem] sm:text-[1.12rem] text-slate-300 leading-relaxed max-w-xl">
                Let&rsquo;s transform your manuscript into a professionally published book that you
                can proudly call your own.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="#inquiry" variant="primary" size="lg" className="shadow-goldGlow">
                  <span>Start Your Publishing Journey</span>
                  <ArrowRight size={16} />
                </Button>
                <a
                  href="tel:+19362233644"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs border border-white/20 hover:border-[#B8860B] text-sm font-sans font-medium text-white hover:text-[#B8860B] hover:bg-white/5 transition-all"
                >
                  <Phone size={15} className="text-[#B8860B]" />
                  <span>Call +1 (936) 223-3644</span>
                </a>
              </div>

              {/* Trust Subtext */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#B8860B]" />
                  <span>100% Intellectual Property Retained</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#B8860B]" />
                  <span>Physical Galley Proof Verification</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-[#B8860B]" />
                  <span>24–48 Hour Editorial Response</span>
                </span>
              </div>
            </motion.div>

            {/* Right Book Mockup Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[340px] h-[380px] sm:h-[420px] flex items-center justify-center"
            >
              {/* Layered Hardcover Volume with Gold Foil Frame */}
              <div className="relative w-52 sm:w-60 h-76 sm:h-84 rounded-xs shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] book-spine-effect book-edge-side border-2 border-[#B8860B]/60 overflow-hidden bg-[#060B16] flex flex-col justify-between p-5 text-center">
                <div className="flex items-center justify-between border-b border-[#B8860B]/40 pb-2 text-[9px] uppercase tracking-widest text-[#B8860B]">
                  <span>Novelora Imprint</span>
                  <span>1st Edition</span>
                </div>

                <div className="my-auto py-4">
                  <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#B8860B] block mb-1">
                    Your Future Volume
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                    Your Title Here
                  </h3>
                  <div className="w-8 h-px bg-[#B8860B] mx-auto my-2" />
                  <span className="font-sans text-xs text-slate-300">
                    Your Name Here
                  </span>
                </div>

                <div className="border-t border-[#B8860B]/40 pt-2 flex items-center justify-between text-[8px] uppercase tracking-wider text-[#B8860B]">
                  <span>Foil Stamped</span>
                  <span>Global Distribution</span>
                </div>
              </div>

              {/* Overlay Badge */}
              <div className="absolute -bottom-3 -right-2 sm:right-2 rounded-md border border-[#B8860B]/50 bg-[#0B1426]/95 backdrop-blur-md px-3.5 py-2 shadow-xl flex items-center gap-2">
                <Sparkles size={14} className="text-[#B8860B]" />
                <span className="font-serif text-xs font-bold text-white">
                  Publish With Dignity
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
