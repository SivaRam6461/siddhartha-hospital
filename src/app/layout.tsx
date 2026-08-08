import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { FloatingContactBar } from "@/components/layout/floating-contact-bar";
import { EmergencyBanner } from "@/components/layout/emergency-banner";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { PageLoader } from "@/components/layout/page-loader";
import { Analytics } from "@/components/analytics";
import { defaultMetadata, organizationSchema, hospitalSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"]
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1626" }
  ],
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), hospitalSchema()])
          }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        <Providers>
          <div className="fixed inset-x-0 top-0 z-50">
            <EmergencyBanner />
            <Navbar />
          </div>
          <div className="h-24 sm:h-28" aria-hidden />
          <ScrollProgress />
          <PageLoader />
          <main id="main">{children}</main>
          <Footer />
          <FloatingContactBar />
          <ScrollToTop />
          <CookieBanner />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
