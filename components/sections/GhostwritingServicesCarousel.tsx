"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  accentCircle: "purple" | "teal";
}

const servicesList: ServiceCardData[] = [
  {
    id: "marketing",
    title: "Book Marketing",
    description:
      "Need help getting people to buy your book? Don't worry; our team can take care of that! Our strategic marketing tactics are designed to ensure your book sells in the thousands benchmark, getting your story into the hands of eager readers.",
    href: "/book-marketing",
    image: "/assets/images/PulishingLogo/amazon-white.png",
    alt: "Book Marketing on Audible, Amazon Kindle, and Barnes & Noble",
    accentCircle: "purple",
  },
  {
    id: "ghostwriting",
    title: "Ghostwriting",
    description:
      "Have a compelling story, a poignant poem, or simply an incredible idea for a novel? Our team of skilled ghostwriters specializes in various niches, ready to craft your vision into the next best-seller for you! Whether it's a gripping novel, a heartfelt memoir, inspiring non-fiction, or captivating short stories, we're dedicated to bringing your narrative to life. Let us help you put pen to paper (or fingers to keyboard!).",
    href: "/ghostwriting",
    image: "/assets/images/publishing-hero-images/pen-book.svg",
    alt: "Fountain pen on manuscript representing Ghostwriting",
    accentCircle: "teal",
  },
  {
    id: "editing",
    title: "Book Editing",
    description:
      "Our adept editorial team carefully makes the necessary grammatical, literary, and punctuation corrections before each chapter is delivered to you to uphold the professional writing standard.",
    href: "/book-editing",
    image: "/assets/images/Team/alex-brown.jpg",
    alt: "Editorial reviewer working on book draft on laptop",
    accentCircle: "purple",
  },
  {
    id: "publishing",
    title: "Book Publishing",
    description:
      "Prepare your manuscript for global distribution across Amazon Kindle, Barnes & Noble, Apple Books, and Ingram wholesale networks. Complete with official ISBN registration, barcode generation, and print-on-demand setup.",
    href: "/book-publishing",
    image: "/assets/images/pulishinghero/Collingwood Web and LPs (4) (1).png",
    alt: "Global Book Publishing distribution and bookstore availability",
    accentCircle: "teal",
  },
  {
    id: "formatting",
    title: "Book Formatting",
    description:
      "Manual InDesign typography and layout engineering for archival Smyth-sewn print editions and responsive, reflowable digital ePub formats. Eliminating clumsy template artifacts with balanced margins and drop caps.",
    href: "/book-publishing",
    image: "/assets/images/PulishingLogo/ingram-white.png",
    alt: "Book Interior Formatting and Typesetting",
    accentCircle: "purple",
  },
  {
    id: "proofreading",
    title: "Proofreading",
    description:
      "The critical final pass before printing. Our meticulous proofreaders eliminate typographical anomalies, misplaced commas, homophone confusions, and formatting quirks, guaranteeing pristine commercial galleys.",
    href: "/proofreading",
    image: "/assets/images/Team/rachel-miller.jpg",
    alt: "Certified proofreader conducting line by line galley inspection",
    accentCircle: "teal",
  },
  {
    id: "cover-design",
    title: "Book Cover Design",
    description:
      "Bespoke book jackets that arrest attention in bookstores and online catalogs. Custom typography, textured embossing, and metallic foil stamping tailored to your specific genre conventions and market appeal.",
    href: "/book-cover-design",
    image: "/assets/images/bookmockups/B1F.jpg",
    alt: "Custom Book Cover Design with foil embossing",
    accentCircle: "purple",
  },
  {
    id: "author-website",
    title: "Author Website Design",
    description:
      "A sophisticated, mobile-optimized digital platform that showcases your literary catalog, media bio, newsletter signup, and direct bookstore purchase links to build a loyal, long-term readership.",
    href: "/book-marketing",
    image: "/assets/images/Team/sarah-edwards.jpg",
    alt: "Author Website Development and Digital Presence",
    accentCircle: "teal",
  },
];

export default function GhostwritingServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((curr) =>
      curr === 0 ? servicesList.length - 1 : curr - 1
    );
  };

  const next = () => {
    setStartIndex((curr) =>
      curr >= servicesList.length - 1 ? 0 : curr + 1
    );
  };

  // Visible window: 3 on desktop, 2 on tablet, 1 on mobile
  const getVisibleServices = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIndex + i) % servicesList.length;
      list.push({ ...servicesList[idx], key: `${servicesList[idx].id}-${i}` });
    }
    return list;
  };

  const visibleCards = getVisibleServices();

  return (
    <section className="bg-[#F5F6F8] py-20 lg:py-28 border-b border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow Label with Decorative Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
          <span className="w-8 sm:w-14 h-0.5 bg-[#B8860B]/70" />
          <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
            WE OFFER A RANGE OF
          </span>
          <span className="w-8 sm:w-14 h-0.5 bg-[#B8860B]/70" />
        </div>

        {/* Heading with Gold Highlight */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[2rem] sm:text-[2.8rem] lg:text-[3rem] font-bold text-ink leading-[1.14] text-balance">
            <span className="text-[#B8860B] block">
              Professional Ghostwriting Services,
            </span>
            including but not limited to:
          </h2>

          {/* Subtitle */}
          <p className="mt-4 font-sans text-[0.95rem] sm:text-[1rem] text-ink-muted leading-relaxed max-w-2xl mx-auto">
            As a leading ghostwriting company, we offer a comprehensive suite of services designed
            to support authors at every stage of their publishing journey, including but not limited
            to:
          </p>
        </div>

        {/* 3 Service Cards Container (Desktop 3, Tablet 2, Mobile 1) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {visibleCards.map((service, cardIdx) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: cardIdx * 0.08 }}
              className={`flex flex-col items-center text-center justify-between p-6 sm:p-8 rounded-xl bg-transparent transition-all duration-300 ${cardIdx === 2 ? "hidden lg:flex" : cardIdx === 1 ? "hidden md:flex" : "flex"
                }`}
            >
              <div className="flex flex-col items-center">
                {/* Top Circular Image */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="absolute -left-3 -top-2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#A78BFA]/30 blur-[2px] -z-0" />
                  <div className="absolute -right-3 -bottom-2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#8B5CF6]/25 -z-0" />
                  <div className="absolute inset-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#00C2CB]/20 scale-110 -z-0" />

                  {/* Outer Circular Ring with Colorful Border */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-white shadow-lg border-[3px] border-[#00C2CB] overflow-hidden flex items-center justify-center">
                    {/* Inner Circular Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0B1426] flex items-center justify-center">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="130px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-[1rem] sm:text-[1.3rem] font-bold text-ink leading-tight hover:text-[#B8860B] transition-colors">
                  <Link href={service.href}>{service.title}</Link>
                </h3>

                {/* Service Description */}
                <p className="mt-3.5 font-sans text-[0.91rem] sm:text-[0.8rem] text-ink-soft leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Learn More Text Link */}
              <div className="mt-6 pt-3">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8860B] hover:brightness-90 uppercase tracking-wider transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Navigation at Bottom */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous services"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#52525B] text-white hover:bg-ink transition-colors shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Central Connecting Line with Double Arrows */}
          <div className="flex items-center gap-1 px-4 text-[#52525B]">
            <span className="w-8 sm:w-16 h-0.5 bg-[#52525B]/40" />
            <span className="text-xs font-bold tracking-widest text-[#52525B]">&larr; &rarr;</span>
            <span className="w-8 sm:w-16 h-0.5 bg-[#52525B]/40" />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            aria-label="Next services"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#52525B] text-white hover:bg-ink transition-colors shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
