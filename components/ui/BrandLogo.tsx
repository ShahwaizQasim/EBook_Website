import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  showTagline = false,
  className = "",
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 select-none transition-opacity hover:opacity-95 ${className}`}
      aria-label="Novelora Press - Home"
    >
      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif text-[1.25rem] sm:text-[1.45rem] font-bold tracking-[0.06em] leading-tight ${isDark ? "text-white" : "text-[#242424]"
              }`}
          >
            NOVELORA
          </span>
          <span
            className="font-serif text-[1.25rem] sm:text-[1.45rem] font-medium tracking-[0.06em] leading-tight text-[#B8860B]"
          >
            PRESS
          </span>
        </div>

        {showTagline ? (
          <span
            className={`font-sans text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-medium mt-0.5 ${isDark ? "text-slate-400" : "text-[#6B6762]"
              }`}
          >
            Your Story. Your Legacy. Our Publishing Expertise.
          </span>
        ) : (
          <span
            className={`font-sans text-[8px] sm:text-[9px] tracking-[0.2em] uppercase font-medium ${isDark ? "text-slate-400" : "text-[#857F74]"
              }`}
          >
            Publishing House &bull; Editorial Agency
          </span>
        )}
      </div>
    </Link>
  );
}
