"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, BookOpen, Sparkles, PhoneCall } from "lucide-react";
import Button from "@/components/ui/Button";

interface ExpertProfile {
  name: string;
  role: string;
  category: "Senior Publishing Consultant" | "Professional Book Editor" | "Creative Book Designer";
  experience: string;
  bio: string;
  quote: string;
  image: string;
  specialties: string[];
}

const experts: ExpertProfile[] = [
  {
    name: "Michael Turner",
    role: "Senior Acquisitions & Publishing Consultant",
    category: "Senior Publishing Consultant",
    experience: "24 Years in Literary & Trade Publishing",
    bio: "Former trade acquisitions editor. Michael counsels authors on genre viability, publication contracts, and positioning titles for competitive wholesale catalog adoption.",
    quote: "“A true publishing consultant doesn’t alter your creative destiny; they build the platform that lets your story command the audience it deserves.”",
    image: "/assets/images/Team/mike-turner.jpg",
    specialties: ["Acquisitions Strategy", "Commercial Positioning", "Wholesale Distribution"],
  },
  {
    name: "Rachel Miller",
    role: "Editorial Director & Senior Book Editor",
    category: "Professional Book Editor",
    experience: "16 Years in Developmental & Line Editing",
    bio: "With an editorial tenure across university presses and boutique literary imprints, Rachel balances structural discipline with profound reverence for an author’s natural voice.",
    quote: "“Editing is an act of deep listening. We polish the glass until your narrative shines without distraction or hesitation.”",
    image: "/assets/images/Team/rachel-miller.jpg",
    specialties: ["Developmental Editing", "Narrative Arc Pacing", "Stylistic Refinement"],
  },
  {
    name: "Sarah Edwards",
    role: "Chief Book Designer & Master Typographer",
    category: "Creative Book Designer",
    experience: "18 Years in Book Architecture & Jacket Art",
    bio: "A master of classical InDesign typesetting and bespoke jacket illustration. Sarah creates physical and digital editions that look and feel like museum-grade heirlooms.",
    quote: "“The finest typography is invisible to the eye—it welcomes the reader into the heart of the prose with effortless grace.”",
    image: "/assets/images/Team/sarah-edwards.jpg",
    specialties: ["Custom Jacket Illustration", "InDesign Typesetting", "Foil Stamping Finishes"],
  },
];

export default function Team() {
  return (
    <section id="experts" className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Publishing Leadership &amp; Craft"
          title={
            <>
              Meet the People Behind{" "}
              <span className="italic text-[#B99750]">Your Work</span>
            </>
          }
          description="At Novelora Press, your manuscript is never handed off to anonymous freelancers or automated ticket queues. Meet the dedicated trade professionals who personally guide your journey."
        />

        {/* 3 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group flex flex-col justify-between rounded-lg border border-line bg-paper-card shadow-card hover:shadow-cardHover hover:border-[#B99750]/60 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Executive Portrait Frame */}
                <div className="relative h-68 sm:h-74 w-full overflow-hidden bg-paper-warm">
                  <Image
                    src={expert.image}
                    alt={`${expert.name} - ${expert.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale-[12%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1426]/85 via-[#0B1426]/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#D4B36D] font-semibold block mb-0.5">
                      {expert.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold leading-tight">
                      {expert.name}
                    </h3>
                    <span className="font-sans text-xs text-slate-300 block mt-0.5">
                      {expert.experience}
                    </span>
                  </div>
                </div>

                {/* Bio & Philosophy Quote */}
                <div className="p-7 flex flex-col gap-4">
                  <div>
                    <span className="font-sans text-xs font-semibold text-[#B99750] uppercase tracking-wider block mb-2">
                      {expert.role}
                    </span>
                    <p className="font-sans text-[0.91rem] text-ink-soft leading-relaxed">
                      {expert.bio}
                    </p>
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="border-l-2 border-[#B99750] pl-3.5 my-1 font-serif italic text-[0.93rem] text-ink leading-relaxed">
                    {expert.quote}
                  </blockquote>

                  {/* Specialties Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {expert.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-2.5 py-1 rounded-xs bg-paper-warm text-[10.5px] font-sans font-medium text-ink-soft border border-line"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-7 pb-6 pt-2">
                <Button href="#inquiry" variant="outline" size="sm" className="w-full text-xs">
                  <span>Consult with {expert.name.split(" ")[0]}</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

