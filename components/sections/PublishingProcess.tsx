"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MessageSquare,
  Search,
  FileEdit,
  Palette,
  Globe2,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof MessageSquare;
  timeline: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    subtitle: "Author Vision & Goals",
    description: "Understand the author's vision, goals, genre expectations, target audience, and specific publishing requirements through a dedicated editorial call.",
    icon: MessageSquare,
    timeline: "Day 1 – 3",
  },
  {
    number: "02",
    title: "Manuscript Evaluation",
    subtitle: "Scope & Strategy",
    description: "Review the manuscript and determine the required editorial depth, typesetting architecture, and custom jacket finishes with a clear transparent roadmap.",
    icon: Search,
    timeline: "Week 1",
  },
  {
    number: "03",
    title: "Editing & Proofreading",
    subtitle: "Literary Refinement",
    description: "Improve clarity, grammar, narrative structure, dialogue rhythm, and stylistic consistency while preserving your authentic creative voice.",
    icon: FileEdit,
    timeline: "Weeks 2 – 5",
  },
  {
    number: "04",
    title: "Cover Design & Formatting",
    subtitle: "Visual & Interior Art",
    description: "Create a bespoke book cover with tactile embossing/foil finishes and hand-set interior pages in Adobe InDesign for both print and digital reflowable ePub.",
    icon: Palette,
    timeline: "Weeks 6 – 9",
  },
  {
    number: "05",
    title: "Publishing & Distribution",
    subtitle: "Global Retail Channels",
    description: "Prepare the title for worldwide publication, register official 13-digit ISBNs, and syndicate across Amazon, Barnes & Noble, Apple, and Ingram Content Group.",
    icon: Globe2,
    timeline: "Weeks 10 – 12",
  },
  {
    number: "06",
    title: "Final Delivery & Launch",
    subtitle: "Celebration & Guidance",
    description: "Deliver physical author copies and master digital archives, and guide the author through promotional launch strategies, press outreach, and future royalties.",
    icon: PackageCheck,
    timeline: "Shelf-Ready",
  },
];

export default function PublishingProcess() {
  return (
    <section id="process" className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Our Publishing Journey"
          title={
            <>
              Meet the Journey That Turns Your Manuscript{" "}
              <span className="italic text-[#B99750]">Into a Published Book</span>
            </>
          }
          description="A structured, transparent six-stage roadmap engineered to eliminate ambiguity and shepherd your literary work from rough draft to global bookstore shelves."
        />

        {/* 6-Step Visual Timeline Grid */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Rule for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#B99750]/20 via-[#B99750] to-[#B99750]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-lg border border-line bg-paper-card p-8 shadow-card hover:shadow-cardHover hover:border-[#B99750]/60 transition-all duration-300"
                >
                  <div>
                    {/* Step Top Header: Circle Icon + Number */}
                    <div className="flex items-center justify-between pb-5 border-b border-line/60">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xs bg-[#B99750] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                          <Icon size={22} strokeWidth={1.8} />
                        </span>
                        <div>
                          <span className="font-serif text-xs font-semibold uppercase tracking-wider text-[#B99750] block">
                            Stage {step.number}
                          </span>
                          <span className="font-sans text-[11px] text-ink-muted">
                            {step.timeline}
                          </span>
                        </div>
                      </div>
                      <span className="font-serif text-3xl font-bold text-ink-muted/30 group-hover:text-[#B99750]/60 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="mt-5 flex flex-col gap-2">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#B99750]">
                        {step.subtitle}
                      </span>
                      <h3 className="font-serif text-xl sm:text-[1.3rem] font-bold text-ink leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-sans text-[0.92rem] leading-relaxed text-ink-soft">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Progress Pill */}
                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs font-sans text-ink-muted">
                    <span>Milestone Verified</span>
                    <span className="text-[#B99750] font-semibold">100% Quality Checked</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-center">
          <Button href="#inquiry" variant="primary" size="md">
            <span>Schedule Initial Consultation</span>
            <ArrowRight size={15} />
          </Button>
          <Button href="/about-us" variant="outline" size="md">
            <span>Learn About Our Editorial Standards</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

