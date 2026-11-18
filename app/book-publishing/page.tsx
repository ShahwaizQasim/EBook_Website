"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const publishingFormats = [
  {
    title: "Collector Cloth Hardcover",
    tag: "Heirloom Grade",
    desc: "Archival Smyth-sewn binding, custom linen or cloth wrapped boards, embossed metallic foil blocking, and protective soft-touch dust jacket.",
    specs: ["Smyth-sewn lay-flat binding", "Foil stamped spine & front cover", "Acid-free 70lb archival paper stock"],
    image: "/assets/images/bookmockups/B1F.jpg",
  },
  {
    title: "Trade Bookstore Paperback",
    tag: "Retail Shelves",
    desc: "Premium French-fold paperback with scored hinges, tactile spot UV finishes, and balanced InDesign interior margins calibrated to international standards.",
    specs: ["Cream or white opaque book paper", "Scored hinges & durable PUR binding", "High-contrast bookstore spine titling"],
    image: "/assets/images/bookmockups/B3F.jpg",
  },
  {
    title: "Reflowable Universal ePub",
    tag: "Digital Ecosystem",
    desc: "Pixel-perfect reflowable digital editions hand-coded for seamless rendering on Amazon Kindle, Apple Books, Kobo Rakuten, and Barnes & Noble NOOK.",
    specs: ["Hyperlinked interactive Table of Contents", "Embedded font typography subsets", "Universal cross-device compatibility"],
    image: "/assets/images/bookmockups/B2F.jpg",
  },
];

const distributionPillars = [
  {
    name: "Ingram Content Group",
    desc: "The world's largest wholesale distributor, enabling 40,000+ bookstores, university libraries, and independent booksellers to order your physical title.",
  },
  {
    name: "Amazon & Kindle Worldwide",
    desc: "Simultaneous print-on-demand fulfillment and digital download access across Amazon US, UK, Canada, Europe, Australia, and Japan.",
  },
  {
    name: "Barnes & Noble & Apple Books",
    desc: "Complete catalog placement in Barnes & Noble stores nationwide and Apple Books storefronts across 1.5+ billion iOS and macOS devices.",
  },
  {
    name: "100% Royalty & Rights Retention",
    desc: "You retain full creative ownership and copyright. Novelora Press does not claim backend deductions or permanent copyright stakes.",
  },
];

export default function BookPublishingPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">Global Publishing &amp; Wholesale Syndication</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] max-w-3xl mx-auto font-bold text-ink leading-[1.08] text-balance">
              Worldwide Book Publishing on{" "}
              <span className="text-[#B8964E] italic block sm:inline">Your Terms.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans max-w-3xl mx-auto">
              From official ISBN registry and master InDesign interior typesetting to global
              distribution across 40,000 bookstores and online retailers—we bring your book to
              print with trade-house quality while you keep 100% of your rights and royalties.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us#inquiry" variant="primary" size="md">
                <span>Start Your Publishing Project</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="/packages" variant="outline" size="md">
                <span>View Publishing Packages</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* 3 Formats Showcase */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Multi-Format Production"
              title={
                <>
                  Crafted for the Shelf,{" "}
                  <span className="italic text-[#B99750]">Engineered for Longevity</span>
                </>
              }
              description="Every title is concurrently prepared in three distinct formats to maximize your accessibility across retail shelves and e-readers."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {publishingFormats.map((fmt) => (
                <div
                  key={fmt.title}
                  className="rounded-lg border border-line bg-white p-7 sm:p-8 shadow-card flex flex-col justify-between hover:shadow-cardHover transition-all"
                >
                  <div>
                    <div className="relative aspect-[1/1.4] w-48 mx-auto mb-6 rounded-[4px] shadow-book overflow-hidden border border-line">
                      <Image
                        src={fmt.image}
                        alt={fmt.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#B8964E]">
                      {fmt.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                      {fmt.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">
                      {fmt.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-line/60 flex flex-col gap-2">
                      {fmt.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2 text-xs font-sans text-ink">
                          <CheckCircle2 size={14} className="text-[#B99750] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <Button href="/contact-us#inquiry" variant="outline" size="sm" className="w-full text-xs">
                      <span>Inquire About {fmt.title.split(" ")[0]} Edition</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Global Distribution Network */}
        <section className="py-20 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="Global Retail Network"
              title={
                <>
                  Your Book Accessible Across{" "}
                  <span className="italic text-[#B8964E]">190+ Countries</span>
                </>
              }
              description="Direct wholesale channels that ensure any bookstore, library, or online reader can discover and purchase your physical and digital editions."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {distributionPillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="p-8 rounded-lg bg-white border border-line shadow-card flex flex-col gap-2"
                >
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {pillar.name}
                  </h3>
                  <p className="font-sans text-sm text-ink-soft leading-relaxed mt-1">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-navy text-white text-center">
          <Container className="max-w-3xl flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to See Your Book in Global Print?
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Speak with a senior publishing director to discuss your publication timeline.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Publish With Novelora Press</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
