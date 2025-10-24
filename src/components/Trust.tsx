'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-black text-center mb-16"
        >
          Trusted by Experience, Driven by Vision
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Card - About Us Connector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-purple" />
              <h3 className="text-xl md:text-2xl font-medium text-black">
                Recognized for Financial Excellence
              </h3>
            </div>
            <p className="text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed mb-4">
              Built on decades of banking expertise and a deep understanding of financial growth, we help clients navigate today's evolving economic landscape with confidence.
            </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link 
                href="/about" 
                className="text-sm font-medium text-purple hover:text-purple-dark transition-colors"
              >
                (Learn more on our About Us page.)
              </Link>
            </div>
          </motion.div>

          {/* Middle Card - Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-6xl text-gray-600 mb-4">"</div>
            <p className="text-base md:text-lg font-medium leading-relaxed mb-6">
              Finance is not just about numbers—it's about trust, timing, and thoughtful decisions that shape a secure tomorrow.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-medium text-lg">
                DK
              </div>
              <div>
                <p className="font-medium text-white">Dinkar Kanekar</p>
                <p className="text-sm text-gray-400">Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-medium text-black">Trusted by Many</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-[15px] text-gray-600 font-medium">
                  20+ years of experience in loan services
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-[15px] text-gray-600 font-medium">
                  Former Service Manager at a Nationalised Bank
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-[15px] text-gray-600 font-medium">
                  30+ years of expertise in Advances & Investments
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple mt-0.5 flex-shrink-0" />
                <p className="text-sm md:text-[15px] text-gray-600 font-medium">
                  Guided 200+ clients toward smarter financial decisions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
