import Link from 'next/link';
import Navbar from '../../components/Navbar';
import './styles.css';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="services-main">
        {/* Breadcrumb */}
        <div className="services-breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span className="current">SERVICES</span>
        </div>

        {/* Hero Section */}
        <section className="services-hero">
          <h1 className="services-hero-title">
            Empowering Individuals and Businesses with Smart, Secure, and Seamless Financial Solutions.
          </h1>
        </section>

        {/* Stats Section */}
        <section className="services-stats">
          {/* Clients Served */}
          <div className="services-stat-card">
            <h3 className="services-stat-label">
              CLIENTS SERVED
            </h3>
            <div className="services-stat-number">
              10,000+
            </div>
            <p className="services-stat-description">
              Over 10,000 clients have trusted us to manage, grow, and optimize their finances with ease and confidence.
            </p>
          </div>

          {/* Experience */}
          <div className="services-stat-card">
            <h3 className="services-stat-label">
              EXPERIENCE
            </h3>
            <div className="services-stat-number">
              5+
            </div>
            <p className="services-stat-description">
              Years of expertise in delivering innovative digital-first financial services, from savings and investments to loans and wealth management.
            </p>
          </div>

          {/* Success Rate */}
          <div className="services-stat-card">
            <h3 className="services-stat-label">
              SUCCESS RATE
            </h3>
            <div className="services-stat-number">
              99%
            </div>
            <p className="services-stat-description">
              99% client satisfaction, reflecting our commitment to secure, efficient, and personalized financial experiences.
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}