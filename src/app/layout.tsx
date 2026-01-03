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

export const metadata: Metadata = {
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
  twitter: {
    card: "summary_large_image",
    title: "Zhifrantino | The Architect of Chaos",
    description: "Mechanical Engineering Student & Full-stack Developer.",
  },
  verification: {
    google: "s-GwGhCOTJFDTJOrXnnXQPRJtDrx46x6YDv-SjeP7mI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD untuk SEO yang lebih kuat
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
  {/* Inject JSON-LD */ }
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />

  //G-TAG
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
        {/* Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z607BFHM0N"
        ></script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z607BFHM0N');
            `,
          }}
        ></Script>

         <main className="min-h-screen flex flex-col w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}