'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms with spring physics
  const yRaw = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, mass: 0.5 });
  const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <section ref={ref} id="services" className="min-h-screen bg-background py-20 px-4 overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-4xl font-medium mb-4 text-foreground"
            style={{ 
              fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.03em', 
              lineHeight: '1.2',
              fontWeight: 500
            }}
          >
            Services <span className="block text-gray-400 text-lg font-normal mt-1">(on hold)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-700 max-w-4xl"
            style={{ 
              fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.03em', 
              lineHeight: '1.6',
              fontWeight: 500
            }}
          >
            As a forward-thinking financial service built for the digital age, we blend innovation, 
            data, and trust to simplify complex money matters. From smart investments to secure 
            digital banking, we're your partner in creating long-term value and financial growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid auto-rows-fr">
          
          {/* Home Loan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            {/* Header Box */}
            <div className="relative bg-white group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-dark rounded-[2rem] p-8 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent h-32 flex items-center">
              {/* Icon Badge - Top Right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-500">
                <span className="text-2xl">🏠</span>
              </div>
              
              <h3 
                className="text-2xl text-foreground group-hover:text-white transition-colors duration-500 pr-14"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.2',
                  fontWeight: 600
                }}
              >
                Home Loan
              </h3>
            </div>

            {/* Content Box */}
            <div className="bg-white group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-dark rounded-[2rem] p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent flex-1 flex flex-col">
              <p 
                className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 mb-6 flex-1"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.6',
                  fontWeight: 500
                }}
              >
                Owning your dream home is now easier than ever. We help you find the right loan 
                with flexible repayment options, minimal documentation, and expert support — making 
                the home-buying journey smooth and stress-free.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  Loan consultation
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  Document assistance
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  +more
                </span>
              </div>
            </div>
          </motion.div>

          {/* Education Loan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            {/* Header Box */}
            <div className="relative bg-white group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-dark rounded-[2rem] p-8 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent h-32 flex items-center">
              {/* Icon Badge - Top Right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-500">
                <span className="text-2xl">🎓</span>
              </div>
              
              <h3 
                className="text-2xl text-foreground group-hover:text-white transition-colors duration-500 pr-14"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.2',
                  fontWeight: 600
                }}
              >
                Education Loan
              </h3>
            </div>

            {/* Content Box */}
            <div className="bg-white group-hover:bg-gradient-to-br group-hover:from-purple group-hover:to-purple-dark rounded-[2rem] p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent flex-1 flex flex-col">
              <p 
                className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 mb-6 flex-1"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.6',
                  fontWeight: 500
                }}
              >
                Your child's education deserves the best start. We assist in securing education 
                loans with competitive rates, ensuring financial support for higher studies — 
                whether in India or abroad.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  Study abroad
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  Student loan planning
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  +more
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mutual Funds Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer flex flex-col h-full"
          >
            {/* Header Box */}
            <div className="relative bg-white group-hover:bg-gradient-to-br group-hover:from-purple-dark group-hover:to-[#6d28d9] rounded-[2rem] p-8 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent h-32 flex items-center">
              {/* Icon Badge - Top Right */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-green-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors duration-500">
                <span className="text-2xl">💼</span>
              </div>
              
              <h3 
                className="text-2xl text-foreground group-hover:text-white transition-colors duration-500 pr-14"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.2',
                  fontWeight: 600
                }}
              >
                Mutual Funds
              </h3>
            </div>

            {/* Content Box */}
            <div className="bg-white group-hover:bg-gradient-to-br group-hover:from-purple-dark group-hover:to-[#6d28d9] rounded-[2rem] p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-1 border-black group-hover:border-transparent flex-1 flex flex-col">
              <p 
                className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 mb-6 flex-1"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em', 
                  lineHeight: '1.6',
                  fontWeight: 500
                }}
              >
                Grow your wealth smartly with expert mutual fund guidance. We help you choose 
                diversified investment options that match your goals, risk appetite, and timeline.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  SIP setup
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  Portfolio review
                </span>
                <span 
                  className="px-4 py-2 bg-gray-100 group-hover:bg-white/20 text-gray-700 group-hover:text-white rounded-full text-sm transition-all duration-500"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.03em',
                    fontWeight: 500
                  }}
                >
                  +more
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* CSS for grayscale effect on non-hovered cards */}
      <style jsx>{`
        .group\/grid:has(.group:hover) .group:not(:hover) {
          filter: grayscale(70%) brightness(0.6);
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
}