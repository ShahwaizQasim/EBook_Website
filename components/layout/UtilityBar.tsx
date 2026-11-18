import { Mail, Phone, ShieldCheck, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function UtilityBar() {
  return (
    <div className="border-b hidden lg:block border-line/60 bg-paper-warm/90 text-ink-soft py-2 px-3 text-[0.78rem] font-sans">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <Link
            href="mailto:publishing@novelorapress.com"
            className="inline-flex items-center gap-1.5 hover:text-[#B8860B] transition-colors tracking-wide"
          >
            <Mail size={13} className="text-[#B8860B]" />
            <span>publishing@novelorapress.com</span>
          </Link>
          <span className="hidden md:inline-block w-[1px] h-3 bg-line-strong" />
          <Link
            href="tel:+19362233644"
            className="hidden md:inline-flex items-center gap-1.5 hover:text-[#B8860B] transition-colors"
          >
            <Phone size={13} className="text-[#B8860B]" />
            <span>Author Support Line: +1 (936) 223-3644</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-ink-muted text-[0.76rem]">
          <span className="inline-flex items-center gap-1.5">
            <Award size={13} className="text-[#B8860B]" />
            <span>Independent Book Publishers Association (IBPA)</span>
          </span>
          <span className="w-[1px] h-3 bg-line-strong" />
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-[#B8860B]" />
            <span>100% Author Ownership &amp; Royalties Retained</span>
          </span>
        </div>
      </Container>
    </div>
  );
}
