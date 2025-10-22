import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="px-6 my-2 mx-5 py-4">
        <div className="flex items-center justify-center relative">
          {/* Logo - Left */}
          <div className="absolute left-0">
            <Link href="/" className="text-base font-normal text-black hover:text-purple transition-colors">
              NextGen Finance
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[15px] text-black hover:text-purple transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-[15px] text-black hover:text-purple transition-colors">
              Services
            </Link>
            <Link href="/how-it-works" className="text-[15px] text-black hover:text-purple transition-colors">
              How it works
            </Link>
            <Link href="/contact" className="text-[15px] text-black hover:text-purple transition-colors">
              Contact
            </Link>
          </div>

          {/* Apply Now CTA - Right */}
          <div className="absolute right-0">
            <Link
              href="/apply"
              className="bg-purple hover:bg-purple-dark text-white px-5 py-2 rounded-full text-[15px] font-medium transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
