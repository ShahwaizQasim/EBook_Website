"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Headphones, Video, UserCheck, Layout, Rocket, Search, ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";

interface AddService {
  title: string;
  category: string;
  description: string;
  points: string[];
  icon: typeof Headphones;
  href: string;
}

const additionalServices: AddService[] = [
  {
    title: "Audiobook Creation",
    category: "Voice & Audio Immersion",
    description: "SAG-AFTRA certified voice talent, master sound design, and ACX distribution across Audible, Apple Books, and Spotify.",
    points: ["Audition-selected voice casting", "Professional studio mastering", "Worldwide audio syndication"],
    icon: Headphones,
    href: "/audiobook",
  },
  {
    title: "Cinematic Book Trailer Production",
    category: "Visual Storytelling",
    description: "Hollywood-caliber teaser trailers crafted with cinematic motion graphics, voiceover, and soundtrack to build viral pre-launch buzz.",
    points: ["High-definition 4K rendering", "Licensed orchestral score", "Social-optimized aspect ratios"],
    icon: Video,
    href: "/marketing",
  },
  {
    title: "Author Branding & Media Kit",
    category: "Identity & Pedigree",
    description: "Comprehensive author bio curation, press kit photography guidance, and high-impact visual identity lockups for media interviews.",
    points: ["Professional trade press releases", "Curated media interview kit", "Consistent brand collateral"],
    icon: UserCheck,
    href: "/marketing",
  },
  {
    title: "Personal Author Website",
    category: "Digital Platform",
    description: "A luxury author platform engineered to build an email subscriber list, sell signed copies, and feature your growing catalog.",
    points: ["Integrated newsletter signups", "Direct bookstore sales links", "Mobile-responsive bespoke design"],
    icon: Layout,
    href: "/marketing",
  },
  {
    title: "Book Launch Strategy",
    category: "Campaign Architecture",
    description: "A calculated multi-week launch sequence orchestrating discount cadences, virtual launch parties, and reviewer momentum.",
    points: ["Strategic price promotions", "Virtual launch event management", "Goodreads launch giveaway campaigns"],
    icon: Rocket,
    href: "/marketing",
  },
  {
    title: "SEO & Book Marketing",
    category: "Search Discoverability",
    description: "Meticulous Amazon A+ Content formatting, BISAC keyword optimization, and targeted metadata to surface your title organically.",
    points: ["Amazon search algorithm indexing", "Curated literary blog outreach", "Targeted reader category keywords"],
    icon: Search,
    href: "/marketing",
  },
];

export default function AdditionalServices() {
  return (
    <section className="bg-paper-warm py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Author Growth &amp; Visibility"
          title={
            <>
              Everything You Need to{" "}
              <span className="text-[#B8860B]">Grow as an Author</span>
            </>
          }
          description="A published book is the foundation; a flourishing literary career is the goal. We equip you with high-impact multimedia and marketing assets to expand your loyal readership."
        />

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col justify-between rounded-lg border border-line bg-white p-7 sm:p-8 shadow-card hover:shadow-cardHover hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-line/60">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B8860B]">
                      {service.category}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#B8860B]/15 text-[#B8860B] group-hover:scale-105 transition-transform">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-[1.28rem] font-bold text-ink leading-tight group-hover:text-[#B8860B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-[0.9rem] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-line/60 flex flex-col gap-2">
                    {service.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2 text-xs font-sans text-ink-muted">
                        <Check size={13} className="text-[#B8860B] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-end">
                  <Button href={service.href} variant="outline" size="sm" className="text-xs">
                    <span>Explore Service</span>
                    <ArrowRight size={12} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

