import type React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });q

export const metadata: Metadata = {
  title: {
    default: "Md Hasibur Hasan – Video Editor",
    template: "%s | Md Hasibur Hasan",
  },
  description:
    "Turning raw footage into visual stories — with style, precision, and a touch of cinematic magic. Md Hasibur Hasan specializes in DaVinci Resolve — delivering cinematic edits, motion graphics, and polished storytelling.",
  keywords: [
    "Md Hasibur Hasan",
    "Video Editor",
   // "Motion Graphics Designer",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Color Grading",
    "YouTube Video Editing",
    "Course Video Editing",
   // "Logo Animation",
    "Visual Storytelling",
    "Freelance Video Editor",
    "Bangladesh Video Editor",
    "Cinematic Editing",
    "Content Creator",
    "Lower Thirds",
    "Audio Sync",
  ],
  authors: [{ name: "Md Hasibur Hasan", url: "https://www.hasiburhasan.me" }],
  creator: "Md Hasibur Hasan",
  publisher: "Md Hasibur Hasan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hasiburhasan.me",
    title: "Md Hasibur Hasan – Video Editor",
    description:
      "Passionate Video Editor and Motion Graphics Designer delivering clean, cinematic edits and dynamic visual storytelling using DaVinci Resolve, Premiere Pro, and After Effects.",
    siteName: "Md Hasibur Hasan Portfolio",
    images: [
      {
        url: "/hasib.png",
        width: 1200,
        height: 630,
        alt: "Md Hasibur Hasan - Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Hasibur Hasan – Video Editor",
    description:
      "Crafting cinematic edits, motion graphics, and powerful stories. Let's make your content stand out.",
    creator: "@niloy_bhowmick", // update if you have a real Twitter handle
    images: ["/hasib.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.hasiburhasan.me",
  },
  category: "Video Editing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Hasibur Hasan",
              url: "https://www.hasiburhasan.me",
              image: "/hasib.png",
              sameAs: [
                "https://www.hasiburhasan.me",
                "https://linkedin.com/in/niloybhowmick", // update if available
                "https://youtube.com/@niloybhowmick", // update if available
                "https://twitter.com/niloy_bhowmick", // update if available
              ],
              jobTitle: "Video Editor",
              knowsAbout: [
                "Video Editing",
                "Motion Graphics",
                "DaVinci Resolve",
                "Adobe Premiere Pro",
                "Adobe After Effects",
                "Color Grading",
                "Audio Syncing",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "Organization",
                name: "Green University of Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <MouseMoveEffect />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <JumpToTop />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
