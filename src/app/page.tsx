import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'NextGen Finance - Doorstep Financial Services | Home Loans, Education Loans & Mutual Funds',
  description: 'NextGen Finance offers doorstep financial services including home loans, education loans, and mutual fund investments. 20+ years of banking expertise with transparent, hassle-free processes.',
  openGraph: {
    title: 'NextGen Finance - Your Trusted Financial Partner',
    description: 'Doorstep financial services with expert guidance. Home loans, education loans, mutual funds delivered to your home.',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main role="main">
        <Hero />
        <Services />
        <Trust />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}