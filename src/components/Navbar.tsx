'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="px-4 md:px-6 my-2 mx-2 md:mx-5 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Logo - Left */}
          <div className="md:absolute md:left-0">
            <Link href="/" className="text-sm md:text-base font-normal text-black hover:text-purple transition-colors">
              NextGen Finance
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-purple transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              href="/" 
              onMouseEnter={() => setHoveredLink('home')}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[15px] font-medium transition-all duration-[400ms] px-3 py-2 ${
                hoveredLink === null || hoveredLink === 'home'
                  ? 'text-black hover:text-purple blur-0'
                  : 'text-gray-400 blur-[1px]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onMouseEnter={() => setHoveredLink('services')}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[15px] font-medium transition-all duration-[1200ms] px-3 py-2 ${
                hoveredLink === null || hoveredLink === 'services'
                  ? 'text-black hover:text-purple blur-0'
                  : 'text-gray-400 blur-[1px]'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/how-it-works" 
              onMouseEnter={() => setHoveredLink('how-it-works')}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[15px] font-medium transition-all duration-[1200ms] px-3 py-2 ${
                hoveredLink === null || hoveredLink === 'how-it-works'
                  ? 'text-black hover:text-purple blur-0'
                  : 'text-gray-400 blur-[1px]'
              }`}
            >
              How it works
            </Link>
            <Link 
              href="/contact" 
              onMouseEnter={() => setHoveredLink('contact')}
              onMouseLeave={() => setHoveredLink(null)}
              className={`text-[15px] font-medium transition-all duration-[1200ms] px-3 py-2 ${
                hoveredLink === null || hoveredLink === 'contact'
                  ? 'text-black hover:text-purple blur-0'
                  : 'text-gray-400 blur-[1px]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Apply Now CTA - Right (Desktop) */}
          <div className="hidden md:block md:absolute md:right-0">
            <Link
              href="/apply"
              className="bg-black hover:bg-purple-dark text-white px-5 py-3 rounded-xl text-[15px] font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-black hover:text-purple transition-colors py-2"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-black hover:text-purple transition-colors py-2"
            >
              Services
            </Link>
            <Link 
              href="/how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-black hover:text-purple transition-colors py-2"
            >
              How it works
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-black hover:text-purple transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              href="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-black hover:bg-purple-dark text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors text-center mt-4"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
