"use client";

import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Anatomy of a Bestselling Book Cover: 5 Design Rules Trade Houses Swear By",
    slug: "anatomy-of-a-bestselling-book-cover",
    excerpt: "In bookstores and digital storefronts, your jacket design has three seconds to convey genre, emotional tone, and literary pedigree. Here is how master art directors craft iconic covers.",
    category: "Book Cover Design",
    readTime: "6 min read",
    date: "November 2026",
    author: "Sarah Edwards",
    image: "/assets/images/bookmockups/B1F.jpg",
  },
  {
    id: "post-2",
    title: "Ghostwriting Demystified: How High-Profile Memoirs Are Actually Crafted",
    slug: "ghostwriting-demystified-memoirs",
    excerpt: "Behind nearly every celebrity, business titan, and political memoir is a gifted ghostwriter. Learn the interview methodologies, narrative blueprints, and ethical standards that bring untold stories to life.",
    category: "Ghostwriting",
    readTime: "8 min read",
    date: "November 2026",
    author: "Michael Turner",
    image: "/assets/images/publishing-hero-images/pen-book.svg",
  },
  {
    id: "post-3",
    title: "Developmental Editing vs. Proofreading: What Your Manuscript Actually Needs",
    slug: "developmental-editing-vs-proofreading",
    excerpt: "Confusing line editing with proofreading is one of the costliest mistakes debut authors make. Here is how each editorial tier protects your voice while strengthening your plot.",
    category: "Editing & Proofreading",
    readTime: "7 min read",
    date: "October 2026",
    author: "Rachel Miller",
    image: "/assets/images/Team/alex-brown.jpg",
  },
  {
    id: "post-4",
    title: "The Author's Guide to Amazon A+ Content and Algorithmic Discoverability",
    slug: "amazon-a-plus-content-guide",
    excerpt: "Why some books languish on page 40 of Amazon search results while others convert at 18%. Meticulous BISAC categorization, keyword algorithms, and editorial layouts explained.",
    category: "Book Marketing",
    readTime: "5 min read",
    date: "October 2026",
    author: "Editorial Team",
    image: "/assets/images/PulishingLogo/amazon-white.png",
  },
  {
    id: "post-5",
    title: "Why Archival Smyth-Sewn Binding Still Matters in the Digital Era",
    slug: "archival-smyth-sewn-binding",
    excerpt: "A physical volume is an heirloom object. Discover why discerning collectors and independent bookstores still prize cloth-wrapped hardcovers with metallic foil spine stamping.",
    category: "Book Publishing",
    readTime: "4 min read",
    date: "September 2026",
    author: "Sarah Edwards",
    image: "/assets/images/bookmockups/B3F.jpg",
  },
  {
    id: "post-6",
    title: "Demystifying ISBNs, LCCNs, and Bowker Global Catalog Registration",
    slug: "demystifying-isbns-bowker-registry",
    excerpt: "How official 13-digit International Standard Book Numbers and Library of Congress control numbers allow 40,000 bookstores and public libraries to stock your title effortlessly.",
    category: "Publishing Legal",
    readTime: "5 min read",
    date: "September 2026",
    author: "Michael Turner",
    image: "/assets/images/bookmockups/B4F.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <UtilityBar />
      <Header />

      <main className="bg-paper min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-line bg-paper-warm/60">
          <Container className="relative z-10 text-center max-w-3xl mx-auto">
            <Eyebrow tone="gold">The Novelora Publishing Journal</Eyebrow>

            <h1 className="mt-5 font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3rem] font-bold text-ink leading-[1.08] max-w-3xl mx-auto text-balance">
              Literary Insights &amp;{" "}
              <span className="text-[#B8964E] italic block sm:inline">Publishing Wisdom.</span>
            </h1>

            <p className="mt-6 text-[0.9rem] max-w-3xl mx-auto sm:text-[1rem] leading-relaxed text-ink-soft font-sans">
              Expert articles on ghostwriting methodologies, developmental editing standards, book
              jacket art direction, and global retail distribution strategy.
            </p>
          </Container>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 lg:py-28 border-b border-line">
          <Container className="flex flex-col gap-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-lg border border-line bg-white shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    <div className="relative h-52 w-full overflow-hidden bg-navy-deep border-b border-line">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10.5px] font-sans font-bold uppercase tracking-wider text-[#B8964E] shadow-sm">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center gap-3 text-xs text-ink-muted mb-2.5 font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          <span>{post.date}</span>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="font-serif text-xl sm:text-[1.35rem] font-bold text-ink leading-tight group-hover:text-[#B8964E] transition-colors">
                        {post.title}
                      </h2>

                      <p className="font-sans text-[0.88rem] text-ink-soft leading-relaxed mt-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-2 border-t border-line/60 flex items-center justify-between">
                    <span className="font-sans text-xs text-ink-muted">
                      By {post.author}
                    </span>
                    <Link
                      href="/contact-us#inquiry"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#B8964E] hover:text-[#D1453A] uppercase tracking-wider transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 bg-navy text-white text-center">
          <Container className="max-w-3xl flex flex-col items-center gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Stay Ahead of the Publishing Curve
            </h2>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Have an idea or manuscript ready for review? Connect directly with our editorial board.
            </p>
            <Button href="/contact-us#inquiry" variant="primary" size="lg">
              <span>Submit Manuscript for Review</span>
              <ArrowRight size={15} />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
