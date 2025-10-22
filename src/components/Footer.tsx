import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16 px-8 bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-normal text-white">NextGen</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Smart. Simple. Secure.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Redefining finance for the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-purple transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-purple transition-colors">Services</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-purple transition-colors">How It Works</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-purple transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-white">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-purple transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-purple transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/security" className="text-gray-400 hover:text-purple transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-medium mb-4 text-sm text-white">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-purple transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-purple transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-purple transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-purple transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Need help? Email us at <Link href="mailto:support@nextgen.com" className="text-purple hover:text-purple-light transition-colors">support@nextgen.com</Link> or chat with our 24/7 AI assistant.
            </p>
            <Link
              href="/book-call"
              className="inline-block bg-white hover:bg-gray-300 text-black px-6 py-2.5 rounded text-sm font-medium transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} <span className='text-purple'>NextGen</span>  – Redefining finance for the digital age.</p>
        </div>
      </div>
    </footer>
  );
}
