import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VSN Careers - Build Your Future with Digital Skills & AI",
    template: "%s | VSN Careers"
  },
  description: "Master Digital Skills & Build High Income Careers with AI. Learn Graphic Design, Web Design, Digital Marketing, Performance Marketing & AI Tools for Jobs, Freelancing & Business.",
  keywords: ["digital careers", "AI careers", "freelancing", "digital marketing", "graphic design", "career guidance", "online income", "AI tools"],
  openGraph: {
    title: "VSN Careers - Build Your Future with Digital Skills & AI",
    description: "Master Digital Skills & Build High Income Careers with AI",
    type: "website",
    locale: "en_IN",
    siteName: "VSN Careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSN Careers - Build Your Future with Digital Skills & AI",
    description: "Master Digital Skills & Build High Income Careers with AI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link rel="canonical" href="https://vsncareers.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
