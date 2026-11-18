"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";

export interface PortfolioBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  image: string;
  publisherNote?: string;
}

export const portfolioBooksData: PortfolioBook[] = [
  {
    id: "b1",
    title: "Darius: The Black Dagger",
    author: "J. R. Ward",
    genre: "Paranormal Romance / Fantasy",
    description: "New York Times #1 Bestseller featuring dramatic contrast lighting, metallic sword typography lockup, and cinematic atmosphere.",
    image: "/assets/images/bookmockups/B1F.jpg",
    publisherNote: "Foil Stamping &bull; Embossed Lettering",
  },
  {
    id: "b2",
    title: "The Summer of Broken Rules",
    author: "K. L. Walther",
    genre: "Contemporary Romance",
    description: "Vibrant illustrated dust jacket with bold retro typography, sunburst gradients, and botanical coastline motifs.",
    image: "/assets/images/bookmockups/B2F.jpg",
    publisherNote: "Trade Paperback &bull; Soft-Touch Matte",
  },
  {
    id: "b3",
    title: "Through Your Eyes",
    author: "Ainsley Earhardt",
    genre: "Family & Inspirational",
    description: "Lyrical, emotive picture-book art with whimsical starlight and butterfly highlights in lush celestial watercolors.",
    image: "/assets/images/bookmockups/B3F.jpg",
    publisherNote: "Collector Hardcover &bull; Smyth-Sewn",
  },
  {
    id: "b4",
    title: "Lost on Purpose",
    author: "Patrick Taylor",
    genre: "Adventure & Mountain Memoir",
    description: "Evocative mountain summit photography paired with rugged, classical serif typesetting and frosty winter hues.",
    image: "/assets/images/bookmockups/B4F.jpg",
    publisherNote: "Archival Print &bull; French-Fold Edition",
  },
  {
    id: "b5",
    title: "Futurama: Upgrade Your Brain",
    author: "Michael Douglas, Jr.",
    genre: "Sci-Fi & Futurism",
    description: "Minimalist mid-century modern aesthetic with retro cosmic typography and striking geometric color blocking.",
    image: "/assets/images/bookmockups/B5F.jpg",
    publisherNote: "Modern Flexibound &bull; Spot UV",
  },
  {
    id: "b6",
    title: "Final Bearing: A Thriller",
    author: "Wallace and Keith",
    genre: "Military Action & Suspense",
    description: "High-octane naval thriller artwork featuring attack helicopters, submarine conning tower, and tactical fiery tones.",
    image: "/assets/images/bookmockups/B6F.jpg",
    publisherNote: "Embossed Foil &bull; Mass Market Hardcover",
  },
  {
    id: "b7",
    title: "Echo Island",
    author: "Jared C. Wilson",
    genre: "Supernatural Mystery",
    description: "Atmospheric misty pine forest with otherworldly green luminescence and stark silhouetted central figure.",
    image: "/assets/images/book-front-back/clark/WOLF FULL BOOK COVER DESIGN front.jpg",
    publisherNote: "Linen Hardcover &bull; Silver Foil",
  },
  {
    id: "b8",
    title: "Chronicles of the Northern Marches",
    author: "Gregory T. Weatherby",
    genre: "Epic Fantasy",
    description: "Gothic dark fantasy masterpiece with intricate Celtic filigree and embossed title treatment.",
    image: "/assets/images/book-front-back/paul/Paul Arata front.jpg",
    publisherNote: "Collector's Edition &bull; Gilded Edges",
  },
  {
    id: "b9",
    title: "Everything We Buried",
    author: "Dr. Michael Ostrander",
    genre: "Historical Memoir",
    description: "Archival coal-basin documentary photography rendered in rich duotones with restrained typographic elegance.",
    image: "/assets/images/book-front-back/halima/HALIMA BOOK COVER FRONT.jpg",
    publisherNote: "Trade Hardcover &bull; Dust Jacket",
  },
];

export default function BookPortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedBook, setSelectedBook] = useState<PortfolioBook | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // Subtle auto-scroll with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 240, behavior: "smooth" });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="portfolio"
      className="relative bg-[#FAF7F2] py-20 lg:py-28 overflow-hidden border-b border-line/60"
    >

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Top Eyebrow: Badge with Horizontal Lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
          <span className="w-10 sm:w-16 h-0.5 bg-[#B8860B]/70" />
          <span className="px-4 py-1 rounded-full bg-[#B8860B] text-white text-[11px] font-sans font-bold uppercase tracking-[0.18em] shadow-sm">
            BOOK PORTFOLIO
          </span>
          <span className="w-10 sm:w-16 h-0.5 bg-[#B8860B]/70" />
        </div>

        {/* Heading: Two Lines */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-bold text-ink leading-[1.12] text-balance">
            Achieve the dream you crave
            <br />
            Envision your work{" "}
            <span className="text-[#B8860B] font-medium">coming into reality</span>
          </h2>

          {/* Centered Supporting Paragraph */}
          <p className="mt-4 font-sans text-[0.9rem] sm:text-[1rem] text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Don&rsquo;t just go by our words; look at the top best-sellers we&rsquo;ve worked on. Our
            portfolio showcases the diverse range of creative book cover design projects we&rsquo;ve
            brought to life, demonstrating our commitment to quality and innovation for every author.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex items-center justify-end gap-2 mt-8 mb-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous portfolio books"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-[#B8860B] hover:text-[#B8860B] transition-all shadow-subtle hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next portfolio books"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:border-[#B8860B] hover:text-[#B8860B] transition-all shadow-subtle hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* 6+ Book Covers Horizontal Row */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-center gap-5 sm:gap-6 overflow-x-auto pb-8 pt-3 scroll-smooth scrollbar-none select-none"
        >
          {portfolioBooksData.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setSelectedBook(book)}
              className="shrink-0 w-[170px] sm:w-[190px] md:w-[210px] lg:w-[200px] xl:w-[215px] cursor-pointer group"
            >
              {/* Realistic Book Cover Frame with Subtle Rounded Corners & Border */}
              <div className="relative aspect-[1/1.52] w-full rounded-[6px] overflow-hidden bg-navy-deep shadow-[0_8px_20px_-6px_rgba(0,0,0,0.22)] group-hover:shadow-[0_18px_32px_-8px_rgba(0,0,0,0.35)] transition-all duration-300 border border-white/40">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  sizes="(max-width: 640px) 170px, 220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B1426]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                  <span className="font-serif text-xs font-bold leading-tight block text-white">
                    {book.title}
                  </span>
                  <span className="font-sans text-[10px] text-[#B8860B] block mt-0.5">
                    {book.genre}
                  </span>
                  <span className="font-sans text-[9px] text-slate-300 mt-1 block">
                    Click to view details &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Portfolio Button */}
        <div className="mt-6 flex justify-center">
          <Button href="/portfolio" variant="primary" size="md" className="shadow-md">
            <span>View All Portfolio</span>
            <ArrowRight size={15} />
          </Button>
        </div>
      </div>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBook(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-xl border border-line bg-paper-card p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedBook(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink rounded-full hover:bg-paper-warm transition-colors"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6 items-center">
                <div className="relative aspect-[1/1.5] w-full max-w-[200px] mx-auto rounded-md overflow-hidden shadow-book border border-line">
                  <Image
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#B8860B] font-bold">
                    {selectedBook.genre}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                    {selectedBook.title}
                  </h3>

                  <p className="font-sans text-xs text-ink-muted">
                    By {selectedBook.author}
                  </p>

                  <p className="font-sans text-sm text-ink-soft leading-relaxed">
                    {selectedBook.description}
                  </p>

                  {selectedBook.publisherNote && (
                    <div className="pt-2 text-xs font-sans text-ink-muted flex items-center gap-1.5">
                      <Sparkles size={14} className="text-[#B8860B]" />
                      <span
                        dangerouslySetInnerHTML={{ __html: selectedBook.publisherNote }}
                      />
                    </div>
                  )}

                  <div className="pt-4 flex items-center gap-3">
                    <Button href="/portfolio" variant="primary" size="sm">
                      <span>Explore Similar Titles</span>
                      <ArrowRight size={13} />
                    </Button>
                    <Button href="/contact-us#inquiry" variant="outline" size="sm">
                      <span>Inquire About Design</span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
