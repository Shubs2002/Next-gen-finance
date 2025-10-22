import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services/>
      </main>
      <Footer />
    </>
  );
}