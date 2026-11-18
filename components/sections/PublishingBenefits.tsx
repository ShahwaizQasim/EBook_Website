"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Globe2, Sparkles, HeartHandshake, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    tag: "Market Penetration",
    title: "Global Publishing Opportunities",
    description:
      "Seamless catalog distribution to over 40,000 independent bookstores, major retailers, and public libraries worldwide through the Ingram Content Group wholesale network and international digital storefronts.",
    points: [
      "Wholesale availability across 190+ countries",
      "Direct ordering for independent booksellers",
      "Full digital and print-on-demand fulfillment",
    ],
  },
  {
    icon: Sparkles,
    tag: "Aesthetic Excellence",
    title: "Professional Book Presentation",
    description:
      "From archival Smyth-sewn binding and tactile soft-touch dust jackets with metallic foil stamping to hand-kerned InDesign interior galleys, every volume is constructed to stand proudly beside major trade publications.",
    points: [
      "Custom foil-blocked dust jackets",
      "Acid-free paper stock & durable binding",
      "Flawless typography free of template artifacts",
    ],
  },
  {
    icon: HeartHandshake,
    tag: "Author Advocacy",
    title: "Author-Focused Support",
    description:
      "We believe publishing should be a collaborative partnership rooted in respect. You retain 100% ownership of your intellectual property, keep all author royalties, and enjoy direct phone access to your dedicated team.",
    points: [
      "100% copyright & intellectual property retained",
      "Zero royalty clawbacks or hidden fees",
      "Dedicated senior publishing director from day one",
    ],
  },
];

export default function PublishingBenefits() {
  return (
    <section className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="The Novelora Publishing Advantage"
          title={
            <>
              Your Book Is in Print.{" "}
              <span className="italic text-[#B99750]">Now We Help You Reach More Hands.</span>
            </>
          }
          description="Crafting a fine volume is half the journey. We engineer the presentation, wholesale channels, and author support systems essential for reaching readers across the globe."
        />

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-paper-card p-8 sm:p-9 shadow-card hover:shadow-cardHover hover:border-[#B99750]/60 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-line/60">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#B99750]/15 text-[#B99750] border border-[#B99750]/30 group-hover:scale-105 transition-transform">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B99750]">
                      {benefit.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-bold text-ink leading-tight group-hover:text-[#B99750] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 font-sans text-[0.93rem] leading-relaxed text-ink-soft">
                    {benefit.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-line/60 flex flex-col gap-2.5">
                    {benefit.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs font-sans text-ink">
                        <CheckCircle2 size={14} className="text-[#B99750] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-sans text-ink-muted">
                  <span>Publication Standard</span>
                  <span className="text-[#B99750] font-semibold">Verified Trade Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

