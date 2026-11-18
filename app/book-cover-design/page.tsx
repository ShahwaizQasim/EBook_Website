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
  ArrowRight
} from "lucide-react";

const designTiers = [
  {
    title: "Fiction & Fantasy Artwork",
    tagline: "Atmospheric & Cinematic Worlds",
    desc: "Epic custom illustrations, rich textures, and dramatic typography designed to immerse readers into your fictional universes before they even turn the first page.",
    features: [
      "Custom genre-specific digital painting & composition",
      "Cinematic lighting & multi-character illustration",
      "Tailored title typography & foil-embossed highlights",
    ],
    image: "/assets/images/bookmockups/B1F.jpg",
  },
  {
    title: "Non-Fiction & Memoir Jackets",
    tagline: "Authoritative & Emotional Presence",
    desc: "Restrained, high-impact editorial typography, archival photographic duotones, and tactile finishes that convey credibility and deep human resonance.",
    features: [
      "Archival duotone photo treatments & fine art motifs",
      "Bespoke font hierarchy compliant with trade publishing",
      "Soft-touch matte lamination with spot gloss accents",
    ],
    image: "/assets/images/bookmockups/B4F.jpg",
  },
  {
    title: "Business & Self-Help Covers",
    tagline: "Bold, Memorable & High-Converting",
    desc: "Clean geometric layouts, bold visual metaphors, and contrasting color psychology calibrated to command attention in airport bookstores and Amazon thumbnails.",
    features: [
      "Minimalist conceptual symbolism & high-contrast layout",
      "Optimized for thumbnail readability at 100px resolution",
      "Complete jacket spread: front, spine, back & inside flaps",
    ],
    image: "/assets/images/bookmockups/B5F.jpg",
  },
];

const designSteps = [
  {
    step: "01",
    title: "Creative Discovery & Genre Audit",
    desc: "We analyze your manuscript themes, target demographic, and bestselling titles in your subcategory to determine optimal color palettes and font styles.",
  },
  {
    step: "02",
    title: "3 Bespoke Concept Mockups",
    desc: "Our senior jacket designers develop three distinct visual concepts for you to evaluate, each offering a unique creative interpretation of your book.",
  },
  {
    step: "03",
    title: "Iterative Refinement & Polish",
    desc: "You select your favorite concept and provide feedback. We polish typography, color balance, textures, and illustration details until perfection.",
  },
  {
    step: "04",
    title: "Full Mechanical Jacket Layout",
    desc: "We calculate precise spine width based on your paper stock and page count, lay out back-cover copy, author photo, barcodes, and print-ready specs.",
  },
];

const coverFaqs = [
  {
    q: "Will my book cover look professional on Amazon thumbnails?",
    a: "Yes. We specifically test every design at micro-thumbnail size (approx. 100px wide) to ensure the title is instantly legible and the visual hook stands out in Amazon search results.",
  },
  {
    q: "Do you design the spine and back cover as well?",
    a: "Every project includes a complete print jacket spread (front, spine, back cover) calculated to your printer's exact page-count spine measurements, plus digital eBook front-cover files.",
  },
  {
    q: "Can I request changes to the initial concepts?",
    a: "Yes. All design packages include unlimited revisions on your chosen concept during the refinement stage until you are 100% delighted.",
  },
  {
    q: "Who owns the copyright to the cover artwork?",
    a: "You retain 100% full commercial copyright and ownership of the final jacket design and illustration assets.",
  },
];

export default function BookCoverDesignPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow tone="gold">Bespoke Book Cover Architecture</Eyebrow>

              <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] max-w-3xl mx-auto font-bold text-ink leading-[1.08] text-balance">
                Book Covers That Make Readers{" "}
                <span className="text-[#B8964E] italic block sm:inline">Stop and Look.</span>
              </h1>

              <p className="mt-6 text-[0.9rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans">
                In physical bookstores and digital marketplaces, your cover has three seconds to
                arrest a reader&rsquo;s attention. We craft custom, genre-calibrated dust jackets and
                eBook covers that turn casual browsers into dedicated buyers.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact-us#inquiry" variant="primary" size="md">
                  <span>Start Cover Project</span>
                  <ArrowRight size={16} />
                </Button>
                <Button href="/portfolio" variant="outline" size="md">
                  <span>View Cover Portfolio</span>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Design Tiers Grid */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Genre-Calibrated Art Direction"
              title={
                <>
                  Designed for Every Genre,{" "}
                  <span className="italic text-[#B99750]">Engineered for Sales</span>
                </>
              }
              description="Different genres obey distinct visual languages. Our design team creates tailored book jackets aligned with the expectations of trade publishers and avid readers."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {designTiers.map((tier) => (
                <div
                  key={tier.title}
                  className="rounded-lg border border-line bg-white p-7 sm:p-8 shadow-card flex flex-col justify-between hover:shadow-cardHover transition-all"
                >
                  <div>
                    <div className="relative aspect-[1/1.4] w-48 mx-auto mb-6 rounded-[4px] shadow-book overflow-hidden border border-line">
                      <Image
                        src={tier.image}
                        alt={tier.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#B8964E]">
                      {tier.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                      {tier.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">
                      {tier.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-line/60 flex flex-col gap-2">
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs font-sans text-ink">
                          <CheckCircle2 size={14} className="text-[#B99750] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <Button href="/contact-us#inquiry" variant="outline" size="sm" className="w-full text-xs">
                      <span>Request Quote for {tier.title.split(" ")[0]}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 lg:py-24 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="Our Collaborative Process"
              title={
                <>
                  From Manuscript Vision to{" "}
                  <span className="italic text-[#B8964E]">Shelf-Ready Cover</span>
                </>
              }
              description="A structured, creative process that ensures your feedback shapes every stage of the design."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-lg bg-white border border-line shadow-card flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl font-bold text-[#B8964E]/60 block mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-ink">
                      {step.title}
                    </h4>
                    <p className="font-sans text-xs text-ink-soft mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-20 border-b border-line">
          <Container className="max-w-4xl flex flex-col gap-10">
            <SectionHeading
              eyebrow="Cover Design Inquiries"
              title="Frequently Asked Questions"
              description="Key questions authors ask before commissioning custom cover design."
            />

            <div className="flex flex-col gap-4">
              {coverFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-lg bg-white border border-line shadow-card"
                >
                  <h4 className="font-serif text-lg font-bold text-ink">
                    {faq.q}
                  </h4>
                  <p className="font-sans text-sm text-ink-soft mt-2 leading-relaxed">
                    {faq.a}
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
              Ready for a Cover That Demands Attention?
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a complimentary creative call with our Art Director today.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Commission Your Book Cover</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
