'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform, animate, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import houseImage from '@/app/assets/images/house.png';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms with spring physics for smoothness
  const imageYRaw = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentYRaw = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Apply spring physics for smooth transitions
  const imageY = useSpring(imageYRaw, { stiffness: 100, damping: 30, mass: 0.5 });
  const imageScale = useSpring(imageScaleRaw, { stiffness: 100, damping: 30, mass: 0.5 });
  const contentY = useSpring(contentYRaw, { stiffness: 100, damping: 30, mass: 0.5 });
  const opacity = useSpring(opacityRaw, { stiffness: 100, damping: 30, mass: 0.5 });

  // Counter animation
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 4, {
      duration: 0.7,
      delay: 0.7,
      onUpdate: (value) => setCount(Math.round(value)),
    });
    return () => controls.stop();
  }, []);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden">
      {/* Full-screen Background Image with parallax - Mobile */}
      <div className="lg:hidden">
        <motion.div 
          style={{ scale: imageScale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={houseImage}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      {/* Desktop Layout - Text over image */}
      <div className="hidden lg:block">
        {/* Full-screen Background Image with parallax */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={houseImage}
            alt="Hero background"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>

        {/* Gradient blur overlay from bottom */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/15 via-black/0 to-transparent backdrop-blur-[2px] pointer-events-none"></div>

        {/* Content overlay with parallax */}
        <motion.div
          style={{ y: contentY, opacity }}
          className="relative min-h-screen flex items-end justify-between px-6 pt-24 pb-20 mx-5"
        >
          {/* Left Content - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 z-10 max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 text-sm mb-4"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 bg-green-500 rounded-full animate-[ripple_3s_ease-out_infinite] opacity-75"></span>
                <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-gray-500">
                <span className="text-[15px] font-semibold text-gray-400">{count}</span> tie up projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-medium leading-[1.1] text-black"
            >
              Empowering Your Future Through Smarter, Next-Gen Financial Solutions
            </motion.h1>
          </motion.div>

          {/* Right Content - Description and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 z-10 max-w-xs self-end mb-20"
          >
            <p className="text-gray-600 font-medium text-medium leading-relaxed text-left">
              We're redefining financial services with Door step service, transparent insights, and seamless experiences that help individuals and businesses make confident financial decisions. Faster and smarter.
            </p>

            <div className="flex gap-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Content - Over image at center */}
      <motion.div 
        style={{ opacity }}
        className="lg:hidden relative min-h-screen flex flex-col justify-center items-center px-4 pt-12 pb-8 mx-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 text-xs mb-2"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 bg-green-500 rounded-full animate-[ripple_3s_ease-out_infinite] opacity-75"></span>
              <span className="relative w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-gray-500">
              <span className="text-sm font-semibold text-gray-400">{count}</span> tie up projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl font-medium leading-[1.15] text-black"
          >
            Empowering Your Future Through Smarter, Next-Gen Financial Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 font-medium text-xs leading-relaxed text-left"
          >
            We're redefining financial services with Door step service, transparent insights, and seamless experiences that help individuals and businesses make confident financial decisions. Faster and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
