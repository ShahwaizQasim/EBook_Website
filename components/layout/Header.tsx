"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import MobileMenu from "../ui/MobileMenu";

export const serviceNavLinks = [
  {
    label: "Ghostwriting",
    href: "/ghostwriting",
    desc: "Bespoke full-manuscript writing by veteran trade authors",
  },
  {
    label: "Book Editing",
    href: "/book-editing",
    desc: "Developmental restructuring, line polish & stylistic editing",
  },
  {
    label: "Book Publishing",
    href: "/book-publishing",
    desc: "ISBN, cloth hardcover, paperback & wholesale syndication",
  },
  {
    label: "Book Marketing",
    href: "/book-marketing",
    desc: "Amazon A+, ARC campaigns, trailers & bestseller launch",
  },
  {
    label: "Book Cover Design",
    href: "/book-cover-design",
    desc: "Foil-embossed dust jackets & high-impact genre art",
  },
  {
    label: "Proofreading",
    href: "/proofreading",
    desc: "Exhaustive typo sweep & final galley proof inspection",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    dropdown: serviceNavLinks,
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActiveLink = (item: (typeof navLinks)[number]) => {
    if (item.dropdown) {
      return (
        pathname === item.href ||
        item.dropdown.some(
          (service) =>
            pathname === service.href ||
            pathname.startsWith(`${service.href}/`)
        )
      );
    }

    if (!item.href) return false;

    return (
      pathname === item.href ||
      (item.href !== "/" &&
        pathname.startsWith(`${item.href}/`))
    );
  };

  const navLinkClass = (active: boolean) =>
    `relative flex items-center gap-2 py-2 text-[15px] font-sans font-medium
     transition-colors duration-300
     after:absolute after:bottom-0 after:left-0
     after:h-[2px] after:bg-[#B8860B]
     after:transition-all after:duration-300
     ${active
      ? "text-[#B8860B] after:w-full"
      : "text-gray-900 after:w-0 hover:text-[#B8860B] hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-[#FBF9F5]/95 backdrop-blur-md transition-all shadow-subtle">
      <Container className="flex items-center justify-between py-3.5 sm:py-4">
        {/* Brand Logo */}
        <BrandLogo variant="light" />

        {/* Desktop Navigation Links */}
        <nav className="bg-transparent px-4 py-2">
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = isActiveLink(item);
              const isOpen = activeDropdown === item.label;

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.dropdown) {
                      setActiveDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className={navLinkClass(isActive || isOpen)}
                      >
                        {item.label}

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#B8860B]" : ""
                            }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="absolute left-0 top-full z-50 w-[420px] pt-3">
                          <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-xl">
                            {item.dropdown.map((service) => {
                              const serviceActive =
                                pathname === service.href ||
                                pathname.startsWith(`${service.href}/`);

                              return (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`block rounded-lg p-3 transition-colors duration-300 ${serviceActive
                                    ? "bg-[#B8860B]/10"
                                    : "hover:bg-[#B8860B]/10"
                                    }`}
                                >
                                  <h4
                                    className={`font-semibold transition-colors ${serviceActive
                                      ? "text-[#B8860B]"
                                      : "text-gray-900 hover:text-[#B8860B]"
                                      }`}
                                  >
                                    {service.label}
                                  </h4>

                                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                                    {service.desc}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={navLinkClass(isActive)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Prominent CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            href="/contact-us#inquiry"
            variant="primary"
            size="sm"
            className="px-5 py-2.5 text-xs font-semibold shadow-sm hover:shadow-goldGlow"
          >
            <span>Get a Free Quote</span>
            <ArrowRight size={14} />
          </Button>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileMenu />
      </Container>
    </header>
  );
}
