"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const serviceItems = [
  { label: "Ghostwriting", href: "/ghostwriting" },
  { label: "Book Editing", href: "/book-editing" },
  { label: "Book Publishing", href: "/book-publishing" },
  { label: "Book Marketing", href: "/book-marketing" },
  { label: "Book Cover Design", href: "/book-cover-design" },
  { label: "Proofreading", href: "/proofreading" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="p-2 text-ink lg:hidden rounded-xs hover:bg-paper-warm transition-colors"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-line bg-white/98 backdrop-blur-xl shadow-2xl lg:hidden z-50 max-h-[85vh] overflow-y-auto">
          <Container className="flex flex-col gap-1 py-5">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>Home</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* About Us */}
            <Link
              href="/about-us"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/about-us" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>About Us</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* Expandable Services Accordion */}
            <div className="border-b border-line/50 py-2">
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full py-2 text-[14.5px] font-medium font-sans text-ink hover:text-[#B8860B] transition-colors flex items-center justify-between"
              >
                <span>Our Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    servicesExpanded ? "rotate-180 text-[#B8860B]" : ""
                  }`}
                />
              </button>

              {servicesExpanded && (
                <div className="pl-4 pr-2 pt-2 pb-3 flex flex-col gap-2 bg-paper/50 rounded-md my-1">
                  {serviceItems.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className={`py-1.5 text-xs font-sans transition-colors ${
                        pathname === s.href ? "text-[#B8860B] font-bold" : "text-ink-soft hover:text-[#B8860B]"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/portfolio" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>Portfolio</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* Packages */}
            <Link
              href="/packages"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/packages" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>Packages</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/blog" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>Blog</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className={`py-3 text-[14.5px] font-medium font-sans border-b border-line/50 transition-colors flex items-center justify-between ${
                pathname === "/contact-us" ? "text-[#B8860B] font-bold" : "text-ink hover:text-[#B8860B]"
              }`}
            >
              <span>Contact Us</span>
              <span className="text-xs text-ink-muted/50">&rarr;</span>
            </Link>

            {/* Mobile Footer CTAs */}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+19362233644"
                className="inline-flex items-center justify-center gap-2 text-xs text-ink-soft py-1 hover:text-[#B8860B] transition-colors"
              >
                <Phone size={13} className="text-[#B8860B]" />
                <span>Publishing Consultation: +1 (936) 223-3644</span>
              </a>

              <Button
                href="/contact-us#inquiry"
                variant="primary"
                size="md"
                className="w-full text-xs font-semibold py-3"
                onClick={() => setOpen(false)}
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={14} />
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
