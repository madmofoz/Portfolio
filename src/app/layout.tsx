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
  title: "Zhifrantino's Portfolio",
  description: "Muhammad Zhifrantino's personal portfolio website.",
  verification: {
    google: "s-GwGhCOTJFDTJOrXnnXQPRJtDrx46x6YDv-SjeP7mI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics  */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z607BFHM0N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z607BFHM0N');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}