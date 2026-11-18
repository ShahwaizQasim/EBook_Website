"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How much does professional book publishing cost?",
    answer:
      "Because each manuscript requires a tailored level of developmental editing, custom interior typesetting, and cover illustration, production costs vary based on word count, genre, and desired formats (e.g., cloth hardcover with foil embossing vs. trade paperback and digital ePub). During your initial manuscript evaluation, we provide a transparent, itemized proposal with zero hidden fees or permanent royalty cuts.",
  },
  {
    question: "Do I retain the ownership and rights to my book?",
    answer:
      "Yes, absolutely. At Novelora Press, you retain 100% of your copyright, creative ownership, and publishing rights at all times. Unlike traditional vanity presses or restrictive rights-holding contracts, we act strictly as your professional publishing and production partner. All intellectual property remains yours, and all author royalties flow directly to you.",
  },
  {
    question: "Can you help me publish an unfinished manuscript?",
    answer:
      "Certainly. Many authors come to us with partial drafts, outlines, or rough manuscripts in progress. Our developmental editors and ghostwriting team can collaborate with you to flesh out narrative arcs, structure chapters, conduct research, and bring your first draft across the finish line before typesetting begins.",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "A comprehensive, trade-quality publication journey typically takes 10 to 14 weeks from manuscript acceptance to shelf readiness. This timeline allows dedicated care for thorough developmental editing, InDesign interior layout, custom jacket illustration, physical galley proof review, and global wholesale syndication.",
  },
  {
    question: "Can you publish my book on Amazon?",
    answer:
      "Yes. We distribute your book across Amazon in hardcover, trade paperback, and Kindle Direct formats. Furthermore, our publishing package extends far beyond Amazon: your title is syndicated into Barnes & Noble, Apple Books, Kobo Rakuten, Google Play Books, and the Ingram Content Group wholesale network supplying 40,000+ bookstores and public libraries worldwide.",
  },
  {
    question: "Do you offer editing and proofreading?",
    answer:
      "Yes. Our editorial department provides three distinct tiers of literary service: Developmental Editing (deep structure, pacing, voice, and narrative cohesion), Line/Copy Editing (sentence flow, syntax, and tone), and Proofreading (final pass for typographical, grammatical, and formatting precision).",
  },
  {
    question: "Can I receive printed copies of my book?",
    answer:
      "Yes. Prior to launch, you will receive physical proof copies to evaluate paper opacity, binding strength, and dust jacket finishes. Following publication, you can order author copies directly at wholesale manufacturing cost whenever you need volumes for book signings, speaking engagements, or gifts.",
  },
  {
    question: "Do you provide book marketing services?",
    answer:
      "Yes. A great book deserves an eager audience. We offer comprehensive marketing support including Amazon A+ Content design, BISAC category and keyword optimization, Advance Reader Copy (ARC) distribution to book reviewers, Goodreads campaign coordination, cinematic book trailers, and bespoke author website development.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Publishing Guidance &amp; Clarifications"
          title={
            <>
              Questions Authors Ask{" "}
              <span className="text-[#B8860B]">Before Entering the Publishing World</span>
            </>
          }
          description="Publishing should be governed by transparency, mutual respect, and clarity. Here are candid answers to our authors' most frequent inquiries."
        />

        {/* Two-Column Balanced FAQ Grid */}
        <div className="mx-auto w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
          {faqList.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className="group rounded-lg border border-line bg-paper-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-cardHover hover:border-[#B8860B]/50"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left hover:bg-paper/40 transition-colors"
                >
                  <span className="font-serif text-[1rem] sm:text-[1.08rem] font-semibold text-ink leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xs border transition-all duration-300 ${isOpen
                        ? "border-[#B8860B] bg-[#B8860B] text-white"
                        : "border-line bg-paper text-[#B8860B] group-hover:border-[#B8860B]"
                      }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-[0.92rem] font-sans leading-relaxed text-ink-soft border-t border-line/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mx-auto w-full max-w-2xl rounded-xs border border-[#B8860B]/30 bg-paper-warm/80 p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B8860B]/15 text-[#B8860B]">
              <HelpCircle size={20} />
            </span>
            <div>
              <span className="font-serif text-sm font-bold text-ink block">
                Have a specific question about your manuscript?
              </span>
              <span className="font-sans text-xs text-ink-muted">
                Our editorial directors are happy to discuss your project directly.
              </span>
            </div>
          </div>
          <Button href="#inquiry" variant="primary" size="sm" className="shrink-0 text-xs">
            <span>Speak with an Editor</span>
            <ArrowRight size={13} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
