import type { Metadata } from "next";

/**
 * Global site configuration for easy maintenance
 */
export const siteConfig = {
  name: "Muhammad Zhifrantino",
  description: "Muhammad Zhifrantino's personal portfolio. Mechanical Engineering student, Full-stack Developer, and Calisthenics Practitioner.",
  url: "https://portolio-beta-black.vercel.app/",
  ogImage: "https://siliminpro.fly.dev/static/img/Muhammad-Zhifrantino.png",
  links: {
    instagram: "https://www.instagram.com/madmofoz",
    github: "https://github.com/madmofoz",
    linkedin: "https://www.linkedin.com/in/madmofoz",
  },
};

/**
 * Main metadata object used in the root layout
 */
export const rootMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | An Outlier by Design`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Zhifrantino",
    "Muhammad Zhifrantino", 
    "Mechanical Engineering", 
    "Web Developer", 
    "SiliminPro", 
    "Automotive Tuning Tools"
  ],
  authors: [{ name: "Muhammad Zhifrantino" }],
  creator: "Muhammad Zhifrantino",
  openGraph: {
    title: `${siteConfig.name} | An Outlier by Design`,
    description: "Bridging Digital Logic and Mechanical Precision.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | An Outlier by Design`,
    description: "Bridging Digital Logic and Mechanical Precision.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  }
};

/**
 * Structured Data (JSON-LD) for SEO
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Zhifrantino",
  "alternateName": ["Tino", "Madz", "Madmofoz"],
  "url": siteConfig.url,
  "jobTitle": "Mechanical Engineering Student & Web Developer",
  "image": siteConfig.ogImage,
  "sameAs": [
    siteConfig.links.instagram,
    siteConfig.links.github,
    siteConfig.links.linkedin
  ],
  "knowsAbout": [
    "Mechanical Engineering",
    "Automotive Tuning",
    "Web Development",
    "Python",
    "Graphic Design"
  ]
};