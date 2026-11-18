import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Novelora Press luxury editorial palette
        paper: {
          DEFAULT: "#F7F3E9",   // Primary background: Warm Ivory
          warm: "#EFE6D3",      // Secondary background: Soft Cream
          card: "#FCFBF7",      // Off-white card surface
          muted: "#E5DAC4",
        },
        ink: {
          DEFAULT: "#242424",   // Charcoal text
          soft: "#3A3836",      // Secondary charcoal
          muted: "#6B6762",     // Muted body text
          faint: "#99938A",
        },
        navy: {
          DEFAULT: "#0B1426",   // Dark sections: Deep Navy
          deep: "#060B16",
          soft: "#121F38",
          card: "#0F1B33",
          tint: "#1A2946",
        },
        primary: {
          DEFAULT: "#B8860B",   // Primary Accent: Dark Golden Yellow
          hover: "#9E7309",
          dark: "#876208",
          light: "#B8860B",
        },
        accent: {
          DEFAULT: "#B8860B",
          hover: "#9E7309",
        },
        gold: {
          DEFAULT: "#B8860B",   // Accent: Dark Golden Yellow (#B8860B)
          dark: "#9E7309",
          deep: "#876208",
          light: "#B8860B",
          pale: "#FAF5EA",
          tint: "#FAF5EA",
        },
        coral: {
          DEFAULT: "#B8860B",   // Unified to #B8860B
          dark: "#9E7309",
          light: "#B8860B",
          tint: "#FDF8ED",
        },
        teal: {
          accent: "#00C2CB",
          wave: "#2DD4BF",
          soft: "#E6FBFB",
        },
        purple: {
          disc: "#A78BFA",
          soft: "#EDE9FE",
          deep: "#7C3AED",
        },
        lightgray: {
          DEFAULT: "#F4F5F7",
          warm: "#F8F9FA",
          border: "#E5E7EB",
        },
        line: {
          DEFAULT: "#E2D7C2",   // Subtle borders
          subtle: "#EDE4D3",
          strong: "#CFC0A3",
          gold: "#B8860B40",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        editorial: "860px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(36, 36, 36, 0.04), 0 12px 30px -10px rgba(36, 36, 36, 0.08)",
        cardHover: "0 8px 24px rgba(36, 36, 36, 0.08), 0 24px 44px -12px rgba(36, 36, 36, 0.14)",
        book: "0 8px 16px -4px rgba(11, 20, 38, 0.18), 0 24px 48px -12px rgba(11, 20, 38, 0.32), -6px 0 16px rgba(11, 20, 38, 0.15)",
        bookHover: "0 14px 28px -4px rgba(11, 20, 38, 0.22), 0 34px 64px -16px rgba(11, 20, 38, 0.4), -8px 0 20px rgba(11, 20, 38, 0.22)",
        goldGlow: "0 0 25px rgba(184, 134, 11, 0.25)",
        subtle: "0 1px 3px rgba(36, 36, 36, 0.05)",
      },
      borderRadius: {
        xs: "3px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      letterSpacing: {
        editorial: "0.06em",
        widestLg: "0.18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
