"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BookOpen, Globe, Check } from "lucide-react";

interface Platform {
  name: string;
  category: string;
  reach: string;
  highlight: string;
}

const platforms: Platform[] = [
  {
    name: "Amazon Kindle",
    category: "Print & Digital Marketplace",
    reach: "Global Reach in 190+ Countries",
    highlight: "Hardcover, Paperback & Kindle Direct ePub",
  },
  {
    name: "Barnes & Noble",
    category: "Retail & Online Booksellers",
    reach: "Nationwide Bookstores & NOOK Readers",
    highlight: "In-store ordering & retail catalog placement",
  },
  {
    name: "Apple Books",
    category: "Bespoke Digital Reading",
    reach: "1.5B+ Apple Devices Worldwide",
    highlight: "Interactive typography for iPhone, iPad & Mac",
  },
  {
    name: "Google Play Books",
    category: "Android & Web Ecosystem",
    reach: "Billions of Active Android Users",
    highlight: "Global digital download & cloud library sync",
  },
  {
    name: "Kobo Rakuten",
    category: "International eReading",
    reach: "Leading Marketplace in Europe & Asia",
    highlight: "OverDrive library integration & international sales",
  },
  {
    name: "Ingram Content Group",
    category: "Wholesale Trade Network",
    reach: "40,000+ Independent Bookstores & Libraries",
    highlight: "Standard wholesale trade discount & shelf listing",
  },
];

export default function Distribution() {
  return (
    <section className="bg-paper-warm py-20 lg:py-28 border-b border-line">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Global Publishing Distribution"
          title={
            <>
              Your Book Deserves to Be{" "}
              <span className="text-[#B8860B]">Read Everywhere</span>
            </>
          }
          description="Make your work accessible to readers across the world through professional publishing and distribution solutions."
        />

        {/* Clean, Premium Platform Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col justify-between rounded-md border border-line bg-white p-7 shadow-card hover:shadow-cardHover hover:border-[#B8860B]/60 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8860B]">
                    {platform.category}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-paper text-[#B8860B] text-xs">
                    <Globe size={13} />
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-[1.35rem] font-bold text-ink leading-tight group-hover:text-[#B8860B] transition-colors">
                  {platform.name}
                </h3>

                <p className="font-sans text-[0.88rem] text-ink-muted leading-relaxed">
                  {platform.reach}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2">
                <Check size={14} className="text-[#B8860B] shrink-0" />
                <span className="font-sans text-xs text-ink-soft font-medium">
                  {platform.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Distribution Guarantee Ribbon */}
        <div className="mx-auto w-full max-w-4xl rounded-xs border border-[#B8860B]/30 bg-white/70 p-5 sm:p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xs bg-[#B8860B]/15 text-[#B8860B]">
              <BookOpen size={20} />
            </div>
            <div>
              <span className="font-serif text-sm font-bold text-ink block">
                Official Bowker ISBN Registry &amp; Library Cataloging
              </span>
              <span className="font-sans text-xs text-ink-muted">
                Every title receives genuine 13-digit ISBNs and Library of Congress Control numbers.
              </span>
            </div>
          </div>
          <span className="shrink-0 font-sans text-xs font-semibold px-4 py-2 rounded-xs bg-[#0B1426] text-white">
            Standard Trade Terms
          </span>
        </div>
      </Container>
    </section>
  );
}
