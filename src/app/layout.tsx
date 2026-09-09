import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SkipLink } from "@/components/site/skip-link";
import { WhatsAppFloat } from "@/components/site/wa-float";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fita-academy-website.vercel.app"),
  title: {
    default: "FITA Academy | IT Training & Placement Institute",
    template: "%s | FITA Academy",
  },
  description:
    "FITA Academy (Focus'd IT Academy) — Chennai's IT training & placement institute offering 120+ courses across Software, Cloud, Data Science, Testing, Digital Marketing and more, with classroom + live online modes, real projects and 100% placement support.",
  keywords: [
    "FITA Academy",
    "IT training Chennai",
    "software courses",
    "Java training",
    "full stack",
    "data science",
    "cloud devops",
    "placement training",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fita-academy-website.vercel.app",
    siteName: "FITA Academy",
    title: "FITA Academy | IT Training & Placement Institute",
    description:
      "120+ career courses with real projects and placement support. Classroom & live online across 8 branches.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}