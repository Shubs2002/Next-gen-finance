import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Trust from '@/components/Trust';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trust />
      </main>
      <Footer />
    </>
  );
}