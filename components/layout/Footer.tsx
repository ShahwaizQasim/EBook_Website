import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, Award, BookOpen, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import BrandLogo from "@/components/ui/BrandLogo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Book Portfolio", href: "/portfolio" },
  { label: "Publishing Packages", href: "/packages" },
  { label: "Publishing Blog", href: "/blog" },
  { label: "Contact & Free Quote", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Ghostwriting Services", href: "/ghostwriting" },
  { label: "Professional Book Editing", href: "/book-editing" },
  { label: "Cold Galley Proofreading", href: "/proofreading" },
  { label: "Book Cover Design", href: "/book-cover-design" },
  { label: "Book Publishing & Syndication", href: "/book-publishing" },
  { label: "Book Marketing & Launch", href: "/book-marketing" },
  { label: "Audiobook Production", href: "/audiobook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#060B16] border-t border-[#1A2946] text-white font-sans selection:bg-[#B8860B] selection:text-white">
      <Container className="pt-16 pb-12 lg:pt-20 lg:pb-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-4 lg:pr-6">
            <BrandLogo variant="dark" showTagline={true} />

            <p className="text-[0.85rem] leading-relaxed text-slate-300 max-w-sm font-sans mt-2">
              Novelora Press is an international publishing house and ghostwriting agency dedicated
              to turning manuscripts into beautifully crafted, shelf-ready publications distributed
              to readers worldwide.
            </p>

            {/* Accreditations & Guarantees */}
            <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-[#B8860B]">
                <Award size={15} className="shrink-0" />
                <span>Independent Book Publishers Association (IBPA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck size={15} className="text-[#B8860B] shrink-0" />
                <span>100% Author Copyright &amp; Full Royalties Retained</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h4 className="font-serif text-[1.05rem] font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#B8860B] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="font-serif text-[1.05rem] font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#B8860B] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Resources (3 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h4 className="font-serif text-[1.05rem] font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Press Headquarters
            </h4>
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <a
                href="tel:+19362233644"
                className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
              >
                <Phone size={14} className="text-[#B8860B] shrink-0" />
                <span>Direct Line: +1 (936) 223-3644</span>
              </a>

              <a
                href="mailto:publishing@novelorapress.com"
                className="flex items-center gap-2.5 hover:text-[#B8860B] transition-colors"
              >
                <Mail size={14} className="text-[#B8860B] shrink-0" />
                <span>publishing@novelorapress.com</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={14} className="text-[#B8860B] shrink-0 mt-0.5" />
                <span>
                  Novelora Press &bull; Editorial &amp; Ghostwriting Agency<br />
                  International Operations &bull; USA &amp; UK
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-400">
                <Clock size={14} className="text-[#B8860B] shrink-0" />
                <span>Monday &ndash; Friday &bull; 9:00 AM &ndash; 6:00 PM EST</span>
              </div>
            </div>

            {/* Publishing Resources Links */}
            <div className="mt-4 pt-3 border-t border-white/10">
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#B8860B] font-semibold block mb-2">
                Quick Access
              </span>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-slate-400">
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
                <span>&bull;</span>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Packages
                </Link>
                <span>&bull;</span>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
                <span>&bull;</span>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Novelora Press. All rights reserved.</span>
            <span className="block sm:inline sm:ml-2 text-slate-500">
              Your Story. Your Legacy. Our Publishing Expertise.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/privacy-policy" className="hover:text-[#B8860B] transition-colors">
              Privacy
            </Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="hover:text-[#B8860B] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/contact-us#inquiry" className="hover:text-[#B8860B] transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
