"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const proofingChecks = [
  {
    title: "Orthography & Typos",
    desc: "Rigorous detection of spelling anomalies, repeated words, transposed letters, and misused homophones (e.g., complement/compliment).",
  },
  {
    title: "Punctuation & Syntax",
    desc: "Strict compliance with Chicago Manual of Style (CMOS 17) for em-dashes, en-dashes, serial commas, quotation marks, and dialogue tags.",
  },
  {
    title: "Typographical Hygiene",
    desc: "Eliminating double spaces, improper italics, inconsistent font weights, missing drop caps, and bad hyphenation ladders in galleys.",
  },
  {
    title: "Formatting & Page Proofs",
    desc: "Final verification of chapter headings, running headers, folios/page numbering, table of contents alignment, and widow/orphan suppression.",
  },
];

const proofSteps = [
  {
    step: "01",
    title: "Intake & Style Sheet Setup",
    desc: "We analyze your project's custom style sheet, character names, specific dialect spellings, and preferred dictionary conventions.",
  },
  {
    step: "02",
    title: "Fresh-Eyes Proof Pass",
    desc: "A certified proofreader who has never seen your manuscript reads word-by-word with unbiased analytical focus.",
  },
  {
    step: "03",
    title: "Annotated Proof Delivery",
    desc: "You receive marked-up Microsoft Word files with Track Changes or annotated PDF galley sticky notes for transparent review.",
  },
  {
    step: "04",
    title: "Final Print Sign-Off",
    desc: "All revisions are reconciled, leaving your files 100% clean and certified ready for digital publishing and printing press runs.",
  },
];

export default function ProofreadingPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">The Final Defense Before Print</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-bold text-ink leading-[1.08] text-balance">
              Professional Proofreading for{" "}
              <span className="text-[#B8964E] italic block sm:inline">Flawless Publications.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] max-w-3xl mx-auto leading-relaxed text-ink-soft font-sans">
              Even a single typo on page one can shatter an author&rsquo;s credibility. Our certified
              proofreaders perform an exhaustive word-by-word sweep to ensure your book meets the
              impeccable standards of major publishing houses.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us#inquiry" variant="primary" size="md">
                <span>Submit Manuscript for Proofing</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="/book-editing" variant="outline" size="md">
                <span>Explore Full Editing Services</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* What We Scrutinize */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Precision Proofreading Scope"
              title={
                <>
                  What Our Proofreaders{" "}
                  <span className="italic text-[#B99750]">Scrutinize</span>
                </>
              }
              description="Proofreading is not a casual read-through; it is a forensic inspection of typographical, grammatical, and layout consistency."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {proofingChecks.map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-lg border border-line bg-white shadow-card flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#B99750]/15 text-[#B99750]">
                      <CheckCircle size={20} />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-ink-soft leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4-Step Process */}
        <section className="py-20 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="Our Verification Workflow"
              title={
                <>
                  A Meticulous Four-Stage{" "}
                  <span className="italic text-[#B8964E]">Proofreading Workflow</span>
                </>
              }
              description="How we ensure zero errors escape before your book hits printing presses and digital stores."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {proofSteps.map((step) => (
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

        {/* CTA */}
        <section className="py-20 bg-navy text-white text-center">
          <Container className="max-w-3xl flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Certify Your Manuscript Error-Free
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Send us your manuscript or sample chapter for a prompt turn-around estimate.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Request Proofreading Quote</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
