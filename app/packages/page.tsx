"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check, ArrowRight, ShieldCheck, Sparkles, BookOpen, Star } from "lucide-react";

const packages = [
  {
    name: "Essential Publishing",
    badge: "For Finished Drafts",
    tagline: "Turn Your Completed Manuscript into Print",
    desc: "Ideal for authors with a polished manuscript ready for professional formatting, ISBN registration, and worldwide digital and paperback distribution.",
    features: [
      "Full interior InDesign typesetting (Paperback & ePub)",
      "Standard custom book cover design (Front, spine & back)",
      "Official 13-digit Bowker ISBN & Barcode issuance",
      "Global distribution via Amazon KDP & Barnes & Noble",
      "100% intellectual property & copyright ownership",
      "100% author royalties retained",
      "Author copies available at wholesale manufacturing cost",
    ],
    highlighted: false,
    cta: "Select Essential Plan",
  },
  {
    name: "Trade Masterpiece Imprint",
    badge: "Most Popular",
    tagline: "Collector-Grade Hardcover & Wholesale Syndication",
    desc: "Our flagship trade publishing package. Includes comprehensive copyediting, bespoke foil-embossed cloth hardcover, French-fold trade paperback, and Ingram wholesale reach.",
    features: [
      "Comprehensive trade line editing & cold galley proofreading",
      "Bespoke hardcover with cloth spine & foil stamping",
      "French-fold trade paperback & universal reflowable ePub",
      "Ingram Content Group wholesale listing (40,000+ bookstores & libraries)",
      "Amazon A+ Content layout & BISAC keyword optimization",
      "Physical galley proof review copy delivered before launch",
      "Dedicated Senior Publishing Director throughout production",
      "100% rights & 100% royalties retained",
    ],
    highlighted: true,
    cta: "Select Masterpiece Plan",
  },
  {
    name: "Full Ghostwriting & Launch",
    badge: "Turnkey Author Imprint",
    tagline: "From Concept to Bestseller Platform",
    desc: "For thought leaders, busy executives, and visionaries. We write, edit, design, publish, and market your book from scratch with complete confidentiality.",
    features: [
      "Dedicated celebrated ghostwriter for complete manuscript writing",
      "Chapter-by-chapter collaborative interview sessions",
      "Developmental editing & executive editorial sign-off",
      "Hollywood-style cinematic 4K book trailer",
      "Advance Reader Copy (ARC) review campaign",
      "Studio audiobook production with SAG-AFTRA narrator",
      "Custom mobile-optimized Author Website platform",
      "Complete NDA & 100% intellectual property guarantee",
    ],
    highlighted: false,
    cta: "Select Ghostwriting Plan",
  },
];

const packageFaqs = [
  {
    q: "Do you take any cut of my royalties?",
    a: "No. Unlike traditional publishing houses or hybrid vanity presses, Novelora Press takes 0% of your royalties. All sales revenue goes straight to your designated bank account.",
  },
  {
    q: "Can I customize a package to suit my specific needs?",
    a: "Absolutely. Every manuscript is unique. We often tailor packages to include or exclude specific services based on your budget, genre, and goals.",
  },
  {
    q: "Are payment plans available?",
    a: "Yes. All our production and ghostwriting packages offer milestone-based payment installments tied to verified deliverables.",
  },
  {
    q: "How long does production take?",
    a: "Essential and Masterpiece packages typically take 8 to 14 weeks from manuscript acceptance to print readiness. Full Ghostwriting packages typically span 4 to 8 months.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">Transparent Publishing &amp; Production Architecture</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] max-w-3xl mx-auto font-bold text-ink leading-[1.08] text-balance">
              Transparent Publishing Packages,{" "}
              <span className="text-[#B8964E] italic block sm:inline">Zero Hidden Fees.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] max-w-3xl mx-auto leading-relaxed text-ink-soft font-sans">
              Choose the tier of editorial care, binding craftsmanship, and marketing firepower that
              aligns with your ambitions. You retain 100% of your rights and royalties on every plan.
            </p>
          </Container>
        </section>

        {/* 3 Packages Grid */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-xl border p-8 sm:p-9 shadow-card flex flex-col justify-between transition-all duration-300 ${pkg.highlighted
                    ? "border-[#B8964E] bg-white ring-2 ring-[#B8964E]/20 shadow-xl hover:-translate-y-1.5"
                    : "border-line bg-white hover:border-[#B99750]/60 hover:shadow-cardHover"
                    }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#B8964E] text-white text-[11px] font-sans font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  <div>
                    {!pkg.highlighted && (
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B99750] block mb-1">
                        {pkg.badge}
                      </span>
                    )}

                    <h3 className="font-serif text-2xl sm:text-[1.7rem] font-bold text-ink mt-2">
                      {pkg.name}
                    </h3>

                    <p className="font-sans text-xs font-semibold text-[#B8964E] mt-1">
                      {pkg.tagline}
                    </p>

                    <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">
                      {pkg.desc}
                    </p>

                    <div className="w-full h-px bg-line/60 my-6" />

                    <div className="flex flex-col gap-3">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs font-sans text-ink leading-relaxed">
                          <Check size={14} className="text-[#B8964E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line/60">
                    <Button
                      href="/contact-us#inquiry"
                      variant={pkg.highlighted ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      <span>{pkg.cta}</span>
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-paper-warm border-b border-line">
          <Container className="max-w-4xl flex flex-col gap-10">
            <SectionHeading
              eyebrow="Package Guidance"
              title="Frequently Asked Questions"
              description="Learn more about our transparent publishing contracts and milestone guarantees."
            />

            <div className="flex flex-col gap-4">
              {packageFaqs.map((faq) => (
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
              Unsure Which Package Fits Your Manuscript?
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Our Acquisitions Director will review your draft and recommend the ideal scope.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Request Free Publishing Consultation</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
