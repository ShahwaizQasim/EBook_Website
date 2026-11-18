"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Feather, Layers, Compass, CheckCircle } from "lucide-react";

const cards = [
  {
    step: "01",
    icon: Feather,
    title: "Professional Editing & Proofreading",
    tagline: "Narrative Rigor & Literary Precision",
    description:
      "A raw draft holds the spark of greatness, but developmental editing gives it wings. Our senior editors read line-by-line to strengthen story structure, dialogue rhythm, and factual consistency without diluting your authentic voice.",
    features: [
      "Developmental & structural analysis",
      "Line-by-line editorial polishing",
      "Meticulous grammar & style proofreading",
    ],
    accentNote: "Dedicated Senior Trade Editor",
  },
  {
    step: "02",
    icon: Layers,
    title: "Quality Book Design & Formatting",
    tagline: "Bespoke Typography & Tactile Covers",
    description:
      "Readers judge books by their covers in less than three seconds. We craft custom dust jackets with tactile embossing, foil blocking, and interior pages hand-set in Adobe InDesign—eliminating clumsy template artifacts.",
    features: [
      "Custom genre-specific cover illustration",
      "Interior typesetting & font architecture",
      "Archival Smyth-sewn hardcover binding",
    ],
    accentNote: "Master Adobe InDesign Craftsmanship",
  },
  {
    step: "03",
    icon: Compass,
    title: "Publishing Guidance & Distribution",
    tagline: "Worldwide Retail Channels & Copyright",
    description:
      "Navigating ISBNs, Library of Congress numbers, copyright, and global wholesale distributors can feel daunting. We manage the entire administrative and distribution journey while ensuring you retain 100% rights and royalties.",
    features: [
      "Worldwide retail & library cataloging",
      "Official Bowker ISBN & Barcode issuance",
      "100% intellectual property ownership",
    ],
    accentNote: "Author-First Publishing Model",
  },
];

export default function WhyPublishing() {
  return (
    <section className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[radial-gradient(#242424_1px,transparent_1px)] [background-size:32px_32px]" />

      <Container className="flex flex-col gap-14 sm:gap-16 relative z-10">
        <SectionHeading
          eyebrow="Why Authors Choose Professional Publishing"
          title={
            <>
              Because Your First Draft Deserves a{" "}
              <span className="italic text-[#B99750]">Beautiful Future</span>
            </>
          }
          description="Transforming a raw manuscript into an enduring volume requires seasoned craftsmanship. Here is how Novelora Press bridges the gap between solitary writing and worldwide readership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-paper-card p-8 sm:p-9 shadow-card hover:shadow-cardHover hover:border-[#B99750]/60 transition-all duration-300"
              >
                <div>
                  {/* Card Header with Step Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-line/60">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#B99750]/15 text-[#B99750] border border-[#B99750]/30 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-serif text-2xl font-bold text-ink-muted/50 group-hover:text-[#B99750] transition-colors">
                      {card.step}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B99750]">
                      {card.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-sans text-[0.93rem] leading-relaxed text-ink-soft">
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="mt-6 pt-6 border-t border-line/60 flex flex-col gap-2.5">
                    {card.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-sans text-ink">
                        <CheckCircle size={14} className="text-[#B99750] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="font-sans text-[11px] font-medium text-ink-muted">
                    Standard Guarantee
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-paper-warm text-[11px] font-medium text-ink-soft border border-line">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B99750]" />
                    {card.accentNote}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

