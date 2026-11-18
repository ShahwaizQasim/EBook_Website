import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.novelorapress.com"),
  title: {
    default: "Novelora Press | Premium Book Publishing & Editorial Agency",
    template: "%s | Novelora Press",
  },
  description:
    "Your Story. Your Legacy. Our Publishing Expertise. Novelora Press turns first-draft manuscripts into professionally crafted publications ready to reach readers worldwide.",
  keywords: [
    "book publishing agency",
    "premium book publisher",
    "professional ghostwriting",
    "book editing and formatting",
    "custom book cover design",
    "global book distribution",
    "audiobook production",
    "author website design",
  ],
  openGraph: {
    title: "Novelora Press | Your Story. Your Legacy. Our Publishing Expertise.",
    description:
      "From your first manuscript to a beautifully published book, we help authors turn ideas into professionally crafted publications ready to reach readers worldwide.",
    url: "https://www.novelorapress.com",
    siteName: "Novelora Press",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novelora Press | Premium Book Publishing Agency",
    description:
      "Your Story. Your Legacy. Our Publishing Expertise. Professional ghostwriting, editing, cover design, and global distribution.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-ink bg-paper selection:bg-[#B8860B] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
