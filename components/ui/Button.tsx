import { ReactNode } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "outline" | "dark" | "secondary" | "goldOutline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B8860B] text-white border border-[#B8860B] hover:brightness-95 active:brightness-90 shadow-sm hover:shadow-goldGlow transition-all duration-300 transform hover:-translate-y-0.5",
  outline:
    "bg-transparent text-[#B8860B] border border-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5",
  goldOutline:
    "bg-transparent text-[#B8860B] border border-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5",
  secondary:
    "bg-white text-[#B8860B] border border-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 shadow-subtle hover:shadow-sm transform hover:-translate-y-0.5",
  dark:
    "bg-[#0B1426] text-white border border-[#0B1426] hover:bg-[#121F38] hover:border-[#B8860B]/50 transition-all duration-300 shadow-sm",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-[0.88rem]",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xs font-sans font-medium tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B] disabled:opacity-60 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
