import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/header";
import { MinimalFooter } from "@/components/site/minimal-footer";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SkipLink } from "@/components/site/skip-link";
import { WhatsAppFloat } from "@/components/site/wa-float";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Script from "next/script";
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
    images: [
      {
        url: "/og/default.svg",
        width: 1200,
        height: 630,
        alt: "FITA Academy — IT Training & Placement Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FITA Academy | IT Training & Placement Institute",
    description:
      "120+ career courses with real projects and placement support. Classroom & live online across 8 branches.",
    images: ["/og/default.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange={false}>
          <SkipLink />
          <ScrollProgress />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <MinimalFooter />
          <WhatsAppFloat />
          <Toaster position="bottom-right" />
          {gaId && <GoogleAnalytics />}
        </ThemeProvider>
      </body>
    </html>
  );
}
