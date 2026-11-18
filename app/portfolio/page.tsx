"use client";

import { useState } from "react";
import Image from "next/image";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { ArrowRight, Sparkles, X, BookOpen, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookItem {
  id: string;
  title: string;
  author: string;
  genre: string;
  category: "Fiction" | "Romance" | "Mystery" | "Non-Fiction" | "Business" | "Fantasy";
  image: string;
  desc: string;
  specs: string;
}

const allPortfolioBooks: BookItem[] = [
  {
    id: "p1",
    title: "Darius: The Black Dagger",
    author: "J. R. Ward",
    genre: "Paranormal Romance",
    category: "Romance",
    image: "/assets/images/bookmockups/B1F.jpg",
    desc: "New York Times #1 Bestseller featuring dramatic contrast lighting and metallic sword typography.",
    specs: "Collector's Edition &bull; Embossed Foil",
  },
  {
    id: "p2",
    title: "The Summer of Broken Rules",
    author: "K. L. Walther",
    genre: "Contemporary Romance",
    category: "Romance",
    image: "/assets/images/bookmockups/B2F.jpg",
    desc: "Vibrant illustrated dust jacket with bold retro typography and botanical coastline motifs.",
    specs: "Trade Paperback &bull; Soft-Touch Matte",
  },
  {
    id: "p3",
    title: "Through Your Eyes",
    author: "Ainsley Earhardt",
    genre: "Family & Inspirational",
    category: "Non-Fiction",
    image: "/assets/images/bookmockups/B3F.jpg",
    desc: "Lyrical, emotive picture-book art with whimsical starlight and butterfly highlights.",
    specs: "Hardcover &bull; Smyth-Sewn",
  },
  {
    id: "p4",
    title: "Lost on Purpose",
    author: "Patrick Taylor",
    genre: "Adventure & Mountain Memoir",
    category: "Non-Fiction",
    image: "/assets/images/bookmockups/B4F.jpg",
    desc: "Evocative mountain summit photography paired with rugged, classical serif typesetting.",
    specs: "French-Fold Edition &bull; Archival Print",
  },
  {
    id: "p5",
    title: "Futurama: Upgrade Your Brain",
    author: "Michael Douglas, Jr.",
    genre: "Business & Personal Growth",
    category: "Business",
    image: "/assets/images/bookmockups/B5F.jpg",
    desc: "Minimalist mid-century modern aesthetic with retro cosmic typography and color blocking.",
    specs: "Flexibound Journal &bull; Spot Gloss",
  },
  {
    id: "p6",
    title: "Final Bearing: A Thriller",
    author: "Wallace and Keith",
    genre: "Military Action & Suspense",
    category: "Fiction",
    image: "/assets/images/bookmockups/B6F.jpg",
    desc: "High-octane naval thriller artwork featuring helicopters, submarine conning tower, and fiery tones.",
    specs: "Mass Market Hardcover &bull; Foil Spine",
  },
  {
    id: "p7",
    title: "Echo Island",
    author: "Jared C. Wilson",
    genre: "Supernatural Mystery",
    category: "Mystery",
    image: "/assets/images/book-front-back/clark/WOLF FULL BOOK COVER DESIGN front.jpg",
    desc: "Atmospheric misty pine forest with otherworldly green luminescence and silhouetted figure.",
    specs: "Linen Hardcover &bull; Silver Foil",
  },
  {
    id: "p8",
    title: "Chronicles of the Wolf",
    author: "Gregory T. Weatherby",
    genre: "Epic Fantasy",
    category: "Fantasy",
    image: "/assets/images/book-front-back/paul/Paul Arata front.jpg",
    desc: "Gothic dark fantasy masterpiece with Celtic filigree and embossed title treatment.",
    specs: "Collector's Hardcover &bull; Gilded Edges",
  },
  {
    id: "p9",
    title: "Everything We Buried",
    author: "Dr. Michael Ostrander",
    genre: "Historical Memoir",
    category: "Non-Fiction",
    image: "/assets/images/book-front-back/halima/HALIMA BOOK COVER FRONT.jpg",
    desc: "Archival coal-basin documentary photography rendered in rich duotones with restrained typography.",
    specs: "Trade Hardcover &bull; Dust Jacket",
  },
  {
    id: "p10",
    title: "The Silent Watcher",
    author: "Philip J. Sterling",
    genre: "Psychological Thriller",
    category: "Mystery",
    image: "/assets/images/book-front-back/philip/front.jpg",
    desc: "Taut psychological crime drama featuring sharp shadow framing and high-contrast red typography.",
    specs: "1st Trade Edition &bull; Matte Finish",
  },
  {
    id: "p11",
    title: "Legacy of the Timberline",
    author: "Mark L. Brother",
    genre: "Historical Fiction",
    category: "Fiction",
    image: "/assets/images/book-front-back/markL/MARK L. BROTHER front.jpg",
    desc: "A generational frontier chronicle set against mountainous timberlands with rich earth tones.",
    specs: "Archival Cloth &bull; Foil Stamped",
  },
  {
    id: "p12",
    title: "Father's Voice",
    author: "Arslan Vance",
    genre: "Family Memoir & Non-Fiction",
    category: "Non-Fiction",
    image: "/assets/images/book-front-back/arslan/father book cover design Front.jpg",
    desc: "A poignant remembrance honoring immigrant resilience and generational paternal wisdom.",
    specs: "Hardcover with Ribbon &bull; Gold Foil",
  },
];

const categories = ["All", "Fiction", "Romance", "Mystery", "Non-Fiction", "Business", "Fantasy"] as const;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const filteredBooks =
    activeCategory === "All"
      ? allPortfolioBooks
      : allPortfolioBooks.filter((b) => b.category === activeCategory);

  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">Bestsellers &bull; Literary Honors &bull; Bespoke Editions</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] max-w-3xl mx-auto font-bold text-ink leading-[1.08] text-balance">
              Our Complete Book{" "}
              <span className="text-[#B8964E] italic block sm:inline">Portfolio Gallery.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] sm:text-[1rem] max-w-3xl mx-auto leading-relaxed text-ink-soft font-sans">
              Explore our diverse collection of bestselling trade publications, bespoke dust
              jackets, and collector editions. Each title represents an author&rsquo;s vision
              brought to life with trade-house craftsmanship.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact-us#inquiry" variant="primary" size="md">
                <span>Start Your Publishing Project</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </Container>
        </section>

        {/* Filter Bar & Grid */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-10">
            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2.5">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 ${isActive
                      ? "bg-[#B8964E] text-white shadow-sm"
                      : "bg-white text-ink-soft border border-line hover:border-[#B8964E] hover:bg-paper-warm"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                  className="group cursor-pointer flex flex-col justify-between p-4 rounded-lg bg-white border border-line shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[1/1.5] w-full rounded-[4px] overflow-hidden bg-navy-deep shadow-book border border-white/40">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 160px, 240px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs font-sans">
                      <span>View Specifications &rarr;</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#B8964E]">
                      {book.genre}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ink leading-tight group-hover:text-[#B8964E] transition-colors">
                      {book.title}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted">
                      By {book.author}
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
              Ready to See Your Name on a Bestselling Cover?
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Let&rsquo;s collaborate to turn your manuscript into an enduring literary publication.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Publish Your Book With Us</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

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
                  <span className="font-sans text-xs uppercase tracking-wider text-[#B8964E] font-bold">
                    {selectedBook.genre}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                    {selectedBook.title}
                  </h3>

                  <p className="font-sans text-xs text-ink-muted italic">
                    By {selectedBook.author}
                  </p>

                  <p className="font-sans text-sm text-ink-soft leading-relaxed">
                    {selectedBook.desc}
                  </p>

                  <div className="pt-2 text-xs font-sans text-ink-muted flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#B99750]" />
                    <span dangerouslySetInnerHTML={{ __html: selectedBook.specs }} />
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <Button href="/contact-us#inquiry" variant="primary" size="sm">
                      <span>Publish a Similar Book</span>
                      <ArrowRight size={13} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
