"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const editorialTiers = [
  {
    tier: "Tier 01",
    name: "Developmental & Structural Editing",
    tagline: "The Big-Picture Architecture",
    description:
      "Our senior trade editors analyze narrative pacing, structural symmetry, thematic depth, character motivation, and genre conventions to ensure your book holds reader attention effortlessly.",
    focus: [
      "Narrative pacing and tension curves",
      "Plot hole detection & thematic resolution",
      "Character arc consistency and dialogue authenticity",
      "Chapter transitions & hook effectiveness",
    ],
  },
  {
    tier: "Tier 02",
    name: "Line & Stylistic Editing",
    tagline: "The Poetry and Rhythm of Your Prose",
    description:
      "Working at the paragraph and sentence level, we polish cadence, elevate vocabulary, eliminate repetition, and sharpen imagery while protecting your signature authorial voice.",
    focus: [
      "Sentence cadence, rhythm, and lyrical flow",
      "Word choice refinement & passive voice reduction",
      "Dialogue naturalness and emotional resonance",
      "Tonal consistency across all chapters",
    ],
  },
  {
    tier: "Tier 03",
    name: "Comprehensive Copyediting",
    tagline: "Trade-Grade Grammatical Rigor",
    description:
      "Strict adherence to the Chicago Manual of Style (17th Edition) and Merriam-Webster's Collegiate Dictionary. We scrutinize spelling, hyphenation, continuity, and factual references.",
    focus: [
      "Full Chicago Manual of Style (CMOS 17) compliance",
      "Grammar, punctuation, and syntax precision",
      "Timeline, character detail & fact-checking",
      "Comprehensive custom project style sheet",
    ],
  },
  {
    tier: "Tier 04",
    name: "Cold Galley Proofreading",
    tagline: "The Final Defense Before Print",
    description:
      "Performed on typeset galley proofs by fresh eyes who have never read the manuscript. We eliminate typographical slips, hyphen ladders, bad page breaks, and orphan lines.",
    focus: [
      "Fresh-eyes pass on typeset PDF proofs",
      "Widows, orphans, and awkward hyphenation ladders",
      "Running headers, pagination, and TOC verification",
      "Zero-tolerance error sweep before print run",
    ],
  },
];

const editorialSteps = [
  {
    step: "01",
    title: "Editorial Manuscript Appraisal",
    description: "A senior editor reads your opening chapters and provides an honest assessment of developmental scope, structural strengths, and projected timeline.",
  },
  {
    step: "02",
    title: "Direct Editorial Dialogue",
    description: "You meet your dedicated editor to align on authorial vision, target readers, character nuances, and stylistic preferences.",
  },
  {
    step: "03",
    title: "Line-by-Line Tracked Revisions",
    description: "We deliver annotated chapters with detailed marginal queries and tracked editorial suggestions for your direct review.",
  },
  {
    step: "04",
    title: "Reconciliation & Sign-Off",
    description: "Together, we review all editorial passes, resolve final queries, and deliver a polished, shelf-ready manuscript.",
  },
];

export default function BookEditingPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">Boutique Literary &amp; Trade Editorial House</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-bold text-ink leading-[1.08] text-balance max-w-3xl mx-auto">
              Professional Book Editing That{" "}
              <span className="text-[#B8964E] italic block sm:inline">Honors Your Voice.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans max-w-3xl mx-auto">
              True editing does not homogenize your writing—it strips away distractions so your
              original brilliance can command the page. Work with senior trade editors with decades
              of major press experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us#inquiry" variant="primary" size="md">
                <span>Request Editorial Appraisal</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="/portfolio" variant="outline" size="md">
                <span>View Edited Bestsellers</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* 4 Editorial Tiers */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Comprehensive Editorial Architecture"
              title={
                <>
                  Four Tiers of{" "}
                  <span className="italic text-[#B99750]">Literary Refinement</span>
                </>
              }
              description="Whether your manuscript requires broad developmental restructuring or cold galley proofreading, we tailor our editorial depth to your specific needs."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {editorialTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="rounded-lg border border-line bg-white p-8 shadow-card flex flex-col justify-between hover:shadow-cardHover transition-all"
                >
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B8964E]">
                      {tier.tier} &bull; {tier.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-ink mt-2">
                      {tier.name}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-line/60 flex flex-col gap-2.5">
                      {tier.focus.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-sans text-ink">
                          <CheckCircle2 size={14} className="text-[#B99750] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-line/60">
                    <Button href="/contact-us#inquiry" variant="outline" size="sm" className="w-full text-xs">
                      <span>Inquire About {tier.name.split(" ")[0]} Editing</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="The Editorial Workflow"
              title={
                <>
                  Transparent Collaboration From{" "}
                  <span className="italic text-[#B8964E]">First Chapter to Final Sign-Off</span>
                </>
              }
              description="You remain in complete creative control at every milestone."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {editorialSteps.map((step) => (
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
                      {step.description}
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
              Give Your Manuscript the Editorial Discipline It Deserves
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Submit your opening chapters for a complimentary trade review.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Claim Complimentary Review</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
