'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-end px-8 pt-24 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Background Image - Large centered portrait with parallax */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[500px] h-[600px] lg:w-[600px] lg:h-[700px]"
        >
          <div className="relative w-full h-full bg-gradient-to-b from-transparent via-gray-50 to-white">
            {/* Placeholder for main portrait image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="text-sm">Add portrait image here</span>
            </div>
          </div>
        </motion.div>

        {/* Content Grid with parallax */}
        <motion.div
          style={{ y: contentY, opacity }}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-12"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 text-sm"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 bg-green-500 rounded-full animate-[ripple_3s_ease-out_infinite] opacity-75"></span>
                <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-gray-600">
                <span className="text-[15px] font-medium text-black">4</span> tie up projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-lg text-black"
            >
              Empowering Your Future Through Smarter, Next-Gen Financial Solutions
            </motion.h1>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 z-10 lg:text-right lg:ml-auto max-w-md"
          >
            <p className="text-gray-600 text-base leading-relaxed">
              As a digital product designer with a strong focus on visual design and Framer websites, he collaborates closely with teams to craft seamless, user-centered experiences. A reliable partner in bringing ideas to life
            </p>

            <div className="flex gap-4 lg:justify-end">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple hover:bg-purple-dark text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Email Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
