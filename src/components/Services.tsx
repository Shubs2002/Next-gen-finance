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
          >
            Services <span className="block text-gray-400 text-lg font-normal mt-1">(on hold)</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-gray-700 max-w-4xl leading-relaxed"
          >
            As a forward-thinking financial service built for the digital age, we blend innovation, 
            data, and trust to simplify complex money matters. From smart investments to secure 
            digital banking, we're your partner in creating long-term value and financial growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Home Loan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white hover:bg-gradient-to-br hover:from-purple hover:to-purple-dark rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent hover:scale-110 hover:z-10"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-white transition-colors duration-500">
                Home Loan
              </h3>
              <p className="text-gray-700 group-hover:text-white/90 leading-relaxed font-normal transition-colors duration-500">
                Owning your dream home is now easier than ever. We help you find the right loan 
                with flexible repayment options, minimal documentation, and expert support — making 
                the home-buying journey smooth and stress-free.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Loan consultation
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Document assistance
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                EMI guidance
              </span>
            </div>
          </motion.div>

          {/* Education Loan Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group bg-white hover:bg-gradient-to-br hover:from-purple hover:to-purple-dark rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent hover:scale-110 hover:z-10"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-white transition-colors duration-500">
                Education Loan
              </h3>
              <p className="text-gray-700 group-hover:text-white/90 leading-relaxed font-normal transition-colors duration-500">
                Your child's education deserves the best start. We assist in securing education 
                loans with competitive rates, ensuring financial support for higher studies — 
                whether in India or abroad.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Study abroad
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Student loan planning
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Application support
              </span>
            </div>
          </motion.div>

          {/* Mutual Funds Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group bg-white hover:bg-gradient-to-br hover:from-purple-dark hover:to-[#6d28d9] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent hover:scale-110 hover:z-10"
          >
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-white transition-colors duration-500">
                Mutual Funds
              </h3>
              <p className="text-gray-700 group-hover:text-white/90 leading-relaxed font-normal transition-colors duration-500">
                Grow your wealth smartly with expert mutual fund guidance. We help you choose 
                diversified investment options that match your goals, risk appetite, and timeline.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                SIP setup
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Portfolio review
              </span>
              <span className="px-3 py-1 bg-purple/10 group-hover:bg-white/20 text-purple group-hover:text-white rounded-full text-sm backdrop-blur-sm font-normal transition-all duration-500">
                Goal-based planning
              </span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}