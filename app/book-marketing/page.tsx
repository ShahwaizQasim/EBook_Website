"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const marketingTiers = [
  {
    title: "Amazon A+ & Algorithmic Optimization",
    desc: "Transform your Amazon product page into a luxury editorial showcase with rich visual panels, comparison charts, and optimized BISAC keywords that lift organic search rankings.",
    points: ["Custom Amazon A+ visual module design", "Metadata & category placement optimization", "Keyword density calibrated for Kindle search"],
  },
  {
    title: "Advance Reader Copy (ARC) & Reviewer Outreach",
    desc: "Generate early buzz and verified reader reviews before your launch week. We coordinate digital and physical ARC mailings to vetted literary reviewers and Bookstagram influencers.",
    points: ["Targeted outreach to book bloggers & reviewers", "Goodreads launch campaign & giveaways", "NetGalley distribution coordination"],
  },
  {
    title: "Cinematic Book Trailer Production",
    desc: "Hollywood-caliber teaser trailers crafted with cinematic motion graphics, licensed orchestral soundtrack, and professional voiceover to captivate readers on social media.",
    points: ["4K cinematic teaser video production", "Vertical aspect ratios for TikTok & Instagram Reels", "High-conversion promotional hook scripting"],
  },
  {
    title: "Author Platform & Digital Branding",
    desc: "Build a lasting author platform with a bespoke, mobile-optimized website, media press kit, and newsletter marketing funnel that converts casual readers into lifetime fans.",
    points: ["Custom mobile-optimized author portfolio site", "Newsletter lead-magnet template integration", "Professional media interview kit & press releases"],
  },
];

const launchPhases = [
  {
    phase: "Week -6 to -4",
    title: "Pre-Launch Infrastructure",
    desc: "Metadata registration, Amazon pre-order listing setup, ARC preparation, and reviewer outreach campaign launch.",
  },
  {
    phase: "Week -3 to -1",
    title: "Reader Anticipation",
    desc: "Book trailer unveiling, social media countdown teasers, Goodreads giveaways, and early review collection.",
  },
  {
    phase: "Launch Week",
    title: "Coordinated Release Surge",
    desc: "Price promotion cadence, press release distribution to trade publications, and multi-channel promotional announcements.",
  },
  {
    phase: "Post-Launch",
    title: "Sustained Visibility",
    desc: "Amazon advertising calibration, bookstore shelf placement follow-up, and author interview syndication.",
  },
];

export default function BookMarketingPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">Strategic Author Promotion &amp; Launch Campaigns</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] max-w-3xl mx-auto font-bold text-ink leading-[1.08] text-balance">
              Strategic Book Marketing to{" "}
              <span className="text-[#B8964E] italic block sm:inline">Reach Eager Readers.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] leading-relaxed text-ink-soft font-sans max-w-3xl mx-auto">
              A masterpiece on the shelf is invisible without strategic discovery. We orchestrate
              Amazon algorithmic placement, ARC reviewer campaigns, and cinematic video trailers to
              turn your publication into a cultural moment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us#inquiry" variant="primary" size="md">
                <span>Develop Marketing Strategy</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="/packages" variant="outline" size="md">
                <span>Explore Marketing Tiers</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* 4 Marketing Pillars */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14 sm:gap-16">
            <SectionHeading
              eyebrow="Targeted Discovery Solutions"
              title={
                <>
                  How We Propel Your Title to{" "}
                  <span className="italic text-[#B99750]">Bestseller Visibility</span>
                </>
              }
              description="A multi-pronged promotional architecture tailored to connect your book with loyal readers in your specific genre."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingTiers.map((tier) => (
                <div
                  key={tier.title}
                  className="rounded-lg border border-line bg-white p-8 shadow-card flex flex-col justify-between hover:shadow-cardHover transition-all"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink">
                      {tier.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-3 leading-relaxed">
                      {tier.desc}
                    </p>

                    <div className="mt-6 pt-5 border-t border-line/60 flex flex-col gap-2.5">
                      {tier.points.map((pt) => (
                        <div key={pt} className="flex items-start gap-2 text-xs font-sans text-ink">
                          <CheckCircle2 size={14} className="text-[#B99750] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-line/60">
                    <Button href="/contact-us#inquiry" variant="outline" size="sm" className="w-full text-xs">
                      <span>Inquire About Campaign</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Launch Phases Timeline */}
        <section className="py-20 bg-paper-warm border-b border-line">
          <Container className="flex flex-col gap-12 sm:gap-14">
            <SectionHeading
              eyebrow="Strategic Launch Sequence"
              title={
                <>
                  Our Coordinated Four-Phase{" "}
                  <span className="italic text-[#B8964E]">Launch Sequence</span>
                </>
              }
              description="Timing is everything in trade publishing. Here is how we build momentum from pre-launch to sustained bestseller status."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {launchPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-6 rounded-lg bg-white border border-line shadow-card flex flex-col justify-between"
                >
                  <div>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#B8964E] block mb-2">
                      {phase.phase}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-ink">
                      {phase.title}
                    </h4>
                    <p className="font-sans text-xs text-ink-soft mt-2 leading-relaxed">
                      {phase.desc}
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
              Ready to Give Your Book the Audience It Deserves?
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a personalized book marketing consultation with our campaign directors.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Start Marketing Campaign</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
