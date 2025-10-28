import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextGen Finance - Doorstep Financial Services | Home Loans, Education Loans & Mutual Funds",
    template: "%s | NextGen Finance"
  },
  description: "Experience hassle-free doorstep financial services with 20+ years of banking expertise. Get home loans, education loans, mutual funds, and investment guidance delivered to your doorstep. Expert consultation, transparent process, and ongoing support.",
  keywords: ["home loans", "education loans", "mutual funds", "doorstep financial services", "investment planning", "loan consultation", "financial advisor", "banking services", "personal finance", "wealth management"],
  authors: [{ name: "NextGen Finance" }],
  creator: "NextGen Finance",
  publisher: "NextGen Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextgenfinance.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "NextGen Finance - Doorstep Financial Services",
    description: "Professional financial services at your doorstep. Home loans, education loans, mutual funds with 20+ years of banking experience.",
    url: 'https://nextgenfinance.com',
    siteName: 'NextGen Finance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NextGen Finance - Doorstep Financial Services",
    description: "Professional financial services at your doorstep. Home loans, education loans, mutual funds with expert guidance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body
        className={`${instrumentSans.variable} ${inter.variable} antialiased bg-white text-black font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
