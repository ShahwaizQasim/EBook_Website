"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, ChevronLeft, ChevronRight, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialItem {
  name: string;
  role: string;
  book: string;
  genre: string;
  quote: string;
  rating: number;
  avatar: string;
  coverImage: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Denise Alvarado",
    role: "Debut Historical Novelist",
    book: "The Quiet Harbor",
    genre: "Historical Fiction",
    quote:
      "I had collected polite rejections from four commercial literary agencies. At Novelora Press, my editor read my manuscript with genuine literary sensitivity. The physical hardcover edition feels like an heirloom volume.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "/assets/images/bookmockups/B1F.jpg",
  },
  {
    name: "Dr. Michael Ostrander",
    role: "Memoirist & Historian",
    book: "Everything We Buried",
    genre: "Literary Memoir",
    quote:
      "No hollow promises, no automated templates, and no bait-and-switch. Michael Turner challenged my prose where it needed discipline and preserved my voice where it counted. Truly an editor’s press.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "/assets/images/book-front-back/halima/HALIMA BOOK COVER FRONT.jpg",
  },
  {
    name: "Grace Tanaka-Reyes",
    role: "Mystery Author",
    book: "Shadows Over Kestrel Bay",
    genre: "Literary Mystery",
    quote:
      "The dust jacket design alone secured stocking orders from three independent bookshops before launch week. Novelora Press understands that a book’s physical presence is its first dialogue with a reader.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "/assets/images/book-front-back/paul/Paul Arata front.jpg",
  },
  {
    name: "Warren Pruitt",
    role: "Speculative Fiction Author",
    book: "Signal Loss",
    genre: "Speculative Fiction",
    quote:
      "Preparing dual interior layouts for archival Smyth-sewn print and responsive typography for digital readers seemed insurmountable. Sarah delivered flawless InDesign galleys with zero template artifacts.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    coverImage: "/assets/images/bookmockups/B3F.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const item = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-paper-warm py-20 lg:py-28 border-b border-line relative overflow-hidden">
      <Container className="flex flex-col gap-14 sm:gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Author Acclaim &amp; Editorial Case Studies"
            title={
              <>
                Authors Who Trusted Us With{" "}
                <span className="italic text-[#B99750]">Their Stories</span>
              </>
            }
            description="Read representative accounts of authors who partnered with Novelora Press to refine raw drafts into shelf-ready, internationally distributed publications."
          />

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xs border border-line bg-white text-ink hover:border-[#B99750] hover:text-[#B99750] transition-colors shadow-subtle"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xs border border-line bg-white text-ink hover:border-[#B99750] hover:text-[#B99750] transition-colors shadow-subtle"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Featured Editorial Testimonial Card */}
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-full max-w-5xl rounded-lg border-2 border-line bg-white p-8 sm:p-12 shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-center">
            {/* Book Cover Frame */}
            <div className="mx-auto w-36 sm:w-44 h-52 sm:h-64 relative rounded-xs shadow-book book-spine-effect overflow-hidden">
              <Image
                src={item.coverImage}
                alt={`${item.book} published book cover`}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>

            {/* Testimonial Quote & Author Info */}
            <div className="flex flex-col gap-5">
              {/* Star Rating & Verified Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#B99750]">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={17} fill="currentColor" />
                  ))}
                  <span className="font-sans text-xs font-semibold text-ink ml-1.5">5.0 / 5.0</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-sans text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xs border border-emerald-200">
                  <CheckCircle size={12} />
                  <span>Verified Publication</span>
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-serif italic text-lg sm:text-[1.3rem] leading-relaxed text-ink text-balance border-l-2 border-[#B99750] pl-4 sm:pl-5 my-1">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author Meta */}
              <div className="flex items-center gap-4 pt-2 border-t border-line/60">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={52}
                  height={52}
                  unoptimized
                  className="w-13 h-13 rounded-full object-cover border border-line-strong shadow-subtle"
                />
                <div>
                  <h4 className="font-serif text-[1.15rem] font-bold text-ink">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-ink-muted">
                    {item.role} &bull; Author of <span className="font-serif italic text-ink font-semibold">{item.book}</span> ({item.genre})
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 pt-6 border-t border-line/60 flex items-center justify-between">
            <span className="font-sans text-[11px] text-ink-muted">
              Curated Author Experience Showcase
            </span>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-[#B99750]" : "w-2 bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
