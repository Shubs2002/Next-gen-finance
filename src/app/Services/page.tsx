import Link from 'next/link';
import './styles.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Header/Navigation */}
      <header className="services-header">
        <nav className="services-nav">
          <div className="services-nav-content">
            {/* Logo */}
            <Link href="/" className="services-logo">
              <div className="services-logo-icon">
                <span>T</span>
              </div>
              <span className="services-logo-text">TELLO</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="services-nav-links">
              <Link href="/about" className="services-nav-link">
                ABOUT
              </Link>
              <Link href="/projects" className="services-nav-link">
                PROJECTS
              </Link>
              <Link href="/services" className="services-nav-link active">
                SERVICES
              </Link>
              <Link href="/blog" className="services-nav-link">
                BLOG
              </Link>
              <Link href="/contact" className="services-nav-link">
                CONTACT
              </Link>
              <button className="services-cta-btn">
                GET TEMPLATE
              </button>
            </div>

            {/* Phone Number */}
            <div className="services-phone">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +O2I345678 - Book a call
            </div>
          </div>
        </nav>
      </header>

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
    </div>
  );
}