"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  PenTool,
  FileCheck,
  CheckCircle,
  Palette,
  BookOpen,
  FileText,
  Globe,
  Headphones,
  TrendingUp,
  Layout,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  icon: typeof PenTool;
  description: string;
  highlight: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Ghostwriting Services",
    icon: PenTool,
    description:
      "Collaborate with celebrated memoirists, novelists, and subject-matter authors who capture your distinctive narrative voice and write your complete manuscript from outline to final chapter.",
    highlight: "Collaborative interviews & chapter milestones",
    href: "/ghostwriting",
  },
  {
    number: "02",
    title: "Professional Book Editing",
    icon: FileCheck,
    description:
      "Comprehensive developmental restructuring, character pacing, and line-by-line editorial refinement by seasoned trade publishing editors with decades of major house experience.",
    highlight: "Developmental, line & structural editing",
    href: "/editing",
  },
  {
    number: "03",
    title: "Proofreading",
    icon: CheckCircle,
    description:
      "The critical final pass before typesetting. Our certified proofreaders eradicate typos, punctuation discrepancies, grammatical inconsistencies, and typographical anomalies.",
    highlight: "Double-blind proof verification",
    href: "/editing",
  },
  {
    number: "04",
    title: "Book Cover Design",
    icon: Palette,
    description:
      "Bespoke book jackets that arrest attention in bookstores and online catalogs. Custom typography, textured embossing, and metallic foil stamping tailored to your genre conventions.",
    highlight: "Custom artwork & foil-stamped jackets",
    href: "/publishing",
  },
  {
    number: "05",
    title: "Book Formatting & Typesetting",
    icon: BookOpen,
    description:
      "Manual InDesign composition crafted to classical press standards. We balance gutter margins, eliminate hyphen ladders, and engineer reflowable ePubs for Kindle and Apple Books.",
    highlight: "Smyth-sewn print & reflowable ePub",
    href: "/publishing",
  },
  {
    number: "06",
    title: "ISBN & Copyright Assistance",
    icon: FileText,
    description:
      "Complete administrative stewardship: official 13-digit Bowker ISBNs, EAN barcodes, Library of Congress Control Numbers (LCCN), and formal copyright registration in your name.",
    highlight: "100% author copyright registration",
    href: "/publishing",
  },
  {
    number: "07",
    title: "Book Publishing & Distribution",
    icon: Globe,
    description:
      "Global catalog syndication through Ingram Content Group, Amazon, Barnes & Noble, and independent booksellers across 190 countries with standard trade terms.",
    highlight: "Global wholesale & retail syndication",
    href: "/publishing",
  },
  {
    number: "08",
    title: "Audiobook Production",
    icon: Headphones,
    description:
      "Studio-grade narration by SAG-AFTRA voice actors, sound engineering, mastering, and seamless distribution across Audible, Apple Books, and Spotify Audiobooks.",
    highlight: "Studio-mastered ACX narration",
    href: "/audiobook",
  },
  {
    number: "09",
    title: "Book Marketing",
    icon: TrendingUp,
    description:
      "Targeted launch campaigns, Advance Reader Copy (ARC) outreach, Goodreads promotions, Amazon A+ editorial copy, and curated pitches to independent literary reviewers.",
    highlight: "ARC outreach & Amazon A+ optimization",
    href: "/marketing",
  },
  {
    number: "10",
    title: "Author Website Development",
    icon: Layout,
    description:
      "A sophisticated, mobile-optimized digital platform that showcases your literary catalog, media bio, newsletter signup, and direct bookstore purchase links.",
    highlight: "Custom editorial portfolio & newsletter integration",
    href: "/marketing",
  },
];

export default function CompleteServices() {
  return (
    <section id="services" className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Comprehensive Publishing Agency"
          title={
            <>
              Your Manuscript Is Finished.{" "}
              <span className="text-[#B8860B]">Now We Prepare It for the World.</span>
            </>
          }
          description="From developmental line edits and bespoke foil-stamped jackets to global bookstore distribution and author platforms, Novelora Press provides full-spectrum publishing expertise."
        />

        {/* 10-Service Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-paper-card p-8 shadow-card hover:shadow-cardHover hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Editorial Service Number */}
                  <div className="flex items-center justify-between pb-5 border-b border-line/60">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#B8860B]/15 text-[#B8860B] border border-[#B8860B]/30 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="font-serif text-lg font-bold text-ink-muted/50 group-hover:text-[#B8860B] transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5 flex flex-col gap-2.5">
                    <h3 className="font-serif text-[1.35rem] font-bold text-ink leading-snug group-hover:text-[#B8860B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[0.92rem] leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Highlight & Learn More Link */}
                <div className="mt-6 pt-5 border-t border-line/60 flex items-center justify-between">
                  <span className="font-sans text-[11px] font-medium text-ink-muted">
                    {service.highlight}
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8860B] hover:brightness-90 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
