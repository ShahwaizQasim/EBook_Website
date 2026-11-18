"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Compass,
  Heart,
  Search,
  UserCheck,
  TrendingUp,
  Sparkles,
  Smile,
  Feather,
  ArrowRight,
} from "lucide-react";

interface GenreItem {
  title: string;
  tagline: string;
  description: string;
  icon: typeof Compass;
  href: string;
}

const genres: GenreItem[] = [
  {
    title: "Fiction & Fantasy",
    tagline: "Worldbuilding & Lore",
    description: "Immersive narrative universes, complex magic systems, dynamic character arcs, and unforgettable epic adventures.",
    icon: Compass,
    href: "/ghostwriting",
  },
  {
    title: "Romance & Drama",
    tagline: "Passion & Emotional Depth",
    description: "Slow-burn tension, heartfelt contemporary connections, historical romance, and rich emotional resonance.",
    icon: Heart,
    href: "/ghostwriting",
  },
  {
    title: "Mystery & Thrillers",
    tagline: "Suspense & High Stakes",
    description: "Taut psychological crime, detective procedurals, espionage, unexpected plot twists, and relentless narrative pacing.",
    icon: Search,
    href: "/ghostwriting",
  },
  {
    title: "Memoirs & Biography",
    tagline: "Legacy & Life Stories",
    description: "Personal triumphs, executive journeys, familial memoirs, and historical reminiscences told with honesty and heart.",
    icon: UserCheck,
    href: "/ghostwriting",
  },
  {
    title: "Business & Leadership",
    tagline: "Authority & Strategy",
    description: "Actionable frameworks, entrepreneurial insights, organizational psychology, and thought-leadership books.",
    icon: TrendingUp,
    href: "/ghostwriting",
  },
  {
    title: "Self-Help & Wellness",
    tagline: "Growth & Transformation",
    description: "Uplifting psychological guides, mindfulness routines, personal development strategies, and empowering life lessons.",
    icon: Sparkles,
    href: "/ghostwriting",
  },
  {
    title: "Children's & YA",
    tagline: "Imagination & Wonder",
    description: "Whimsical picture books, middle-grade adventures, and young adult coming-of-age journeys with vibrant storytelling.",
    icon: Smile,
    href: "/ghostwriting",
  },
  {
    title: "Poetry Collections",
    tagline: "Lyrical & Evocative",
    description: "Free verse, classical rhyming meter, and themed collections with delicate, bespoke interior typography.",
    icon: Feather,
    href: "/ghostwriting",
  },
];

export default function BookGenres() {
  return (
    <section className="bg-paper py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading
          eyebrow="Specialized Literary Niches"
          title={
            <>
              Book Genres We{" "}
              <span className="text-[#B8860B]">Specialize In</span>
            </>
          }
          description="Every literary genre obeys distinct conventions, reader expectations, and pacing rhythms. Our ghostwriters and editors are hand-matched to your manuscript's exact niche."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {genres.map((genre, i) => {
            const Icon = genre.icon;
            return (
              <motion.div
                key={genre.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group p-7 rounded-lg border border-line bg-white shadow-card hover:shadow-cardHover hover:border-[#B8860B]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xs bg-[#B8860B]/10 text-[#B8860B] group-hover:scale-105 transition-transform">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                      Trade Niche
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ink leading-tight group-hover:text-[#B8860B] transition-colors">
                    {genre.title}
                  </h3>

                  <span className="font-sans text-xs text-[#B8860B] font-semibold block mt-1">
                    {genre.tagline}
                  </span>

                  <p className="font-sans text-xs text-ink-soft mt-3 leading-relaxed">
                    {genre.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60">
                  <Link
                    href={genre.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:brightness-90 uppercase tracking-wider transition-colors"
                  >
                    <span>Ghostwrite in {genre.title.split(" ")[0]}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
