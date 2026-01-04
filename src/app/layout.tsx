import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zhifrantino | The Architect of Chaos",
  description: "Muhammad Zhifrantino's personal portfolio. Mechanical Engineering student, Full-stack Developer, and Calisthenics Practitioner.",
  keywords: ["Zhifrantino", "Muhammad Zhifrantino", "Mechanical Engineering", "Web Developer", "SiliminPro", "Graphic Designer"],
  authors: [{ name: "Muhammad Zhifrantino" }],
  openGraph: {
    title: "Zhifrantino | The Architect of Chaos",
    description: "Bridging Digital Logic and Mechanical Precision.",
    url: "https://portolio-beta-black.vercel.app/",
    siteName: "Zhifrantino Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Zhifrantino",
    "alternateName": ["Tino", "Madz", "Madmofoz"],
    "url": ["https://portolio-beta-black.vercel.app/", "https://siliminpro.fly.dev/"],
    "jobTitle": "Mechanical Engineering Student & Web Developer & Graphic Designer",
    "description": "Sole developer of SiliminPro, specializing in mechanical engineering, automotive tuning tools, graphics designer and founder of Arak Empire.",
    "knowsAbout": [
      "Mechanical Engineering",
      "Automotive Tuning",
      "Web Development",
      "Python",
      "Calisthenics",
      "Entrepreneurship",
      "Graphic Designer",
      "Empire Business"
    ],
    "image": "https://siliminpro.fly.dev/static/img/Muhammad-Zhifrantino.png",
    "sameAs": [
      "https://www.instagram.com/madmofoz",
      "https://github.com/madmofoz",
      "https://www.linkedin.com/in/madmofoz"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Menggunakan Google Fonts standar untuk menghindari error next/font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
        
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Google Analytics - Menggunakan tag script HTML standar */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z607BFHM0N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z607BFHM0N');
            `,
          }}
        />
        
        <style>{`
          :root {
            --font-geist-sans: 'Inter', sans-serif;
            --font-geist-mono: 'JetBrains Mono', monospace;
          }
          body {
            font-family: var(--font-geist-sans);
          }
        `}</style>
      </head>
      <body className="antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        
        {/**/}
         <main className="min-h-screen flex flex-col w-full relative">
          {children}
        </main>
      </body>
    </html>
  );
}