'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Users, CheckCircle, ExternalLink, Quote } from 'lucide-react';

export default function Trust() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto p-4 md:p-10 lg:p-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="trust-heading"
          className="text-2xl md:text-3xl lg:text-5xl font-medium text-black text-center mb-8 md:mb-16"
        >
          Trusted by Experience, Driven by Vision
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-3 lg:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-[#f5f5f5] rounded-3xl p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 min-h-[380px] md:min-h-[480px] flex flex-col relative"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-purple" />
                <h3 className="text-xl md:text-2xl font-medium text-black">
                  Recognized for Financial Excellence
                </h3>
              </div>
              <p className="text-sm md:text-[15px] text-gray-600 font-medium leading-relaxed pb-20 mt-10">
                Built on decades of banking expertise and a deep understanding of financial growth, we help clients navigate today's evolving economic landscape with confidence.
              </p>
            </div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300">
              <Link
                href="/about"
                className="text-sm font-medium text-purple hover:text-purple-dark transition-colors flex items-center gap-1"
              >
                (Learn more on our About Us page.)
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black text-white rounded-3xl p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 min-h-[380px] md:min-h-[480px] flex flex-col relative"
          >
            <div>
              <Quote className="w-10 h-10 text-gray-800 mb-4" />
              <p className="text-base md:text-lg font-medium leading-relaxed pb-24 mt-15">
                Finance is not just about numbers—it's about trust, timing, and thoughtful decisions that shape a secure tomorrow.
              </p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-purple rounded flex items-center justify-center text-white font-medium text-lg">
                DK
              </div>
              <div>
                <p className="font-medium text-white">Dinkar Kanekar</p>
                <p className="text-sm text-gray-400">Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-[#f5f5f5] rounded-2xl p-6 md:p-10 md:px-3 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center relative min-h-[380px] md:min-h-[480px] lg:overflow-visible"
          >
            <div className="lg:hidden mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Trusted by many</span>
              </div>
            </div>

            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Trusted by many</span>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-2xl p-6 px-0 flex items-center justify-center lg:min-h-[320px]">
              <div className="relative flex flex-col gap-3 lg:gap-0 w-full lg:h-[240px] lg:justify-center">
                <div className="bg-white border border-gray-200 rounded-full px-4 py-3 flex items-center justify-center gap-1 shadow-sm transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-[calc(50%+15px)] lg:w-[90%] lg:group-hover:-translate-y-[calc(50%+130px)] lg:group-hover:shadow-lg lg:z-10">
                  <CheckCircle className="w-5 h-5 text-purple flex-shrink-0" />
                  <span className="text-sm md:text-[15px] text-gray-700 font-medium text-center">
                    20+ years of experience in loan services
                  </span>
                </div>

                <div className="bg-white border border-gray-200 rounded-full px-4 py-3 flex items-center justify-center gap-1 shadow-sm transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-[calc(50%+5px)] lg:w-[90%] lg:group-hover:-translate-y-[calc(50%+45px)] lg:group-hover:shadow-lg lg:z-20">
                  <span className="text-lg">🚀</span>
                  <span className="text-sm md:text-[15px] text-gray-700 font-medium text-center">
                    Former Service Manager at a Nationalised Bank
                  </span>
                </div>

                <div className="bg-white border border-gray-200 rounded-full px-4 py-3 flex items-center justify-center gap-1 shadow-sm transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:translate-y-[calc(-50%+5px)] lg:w-[90%] lg:group-hover:translate-y-[calc(-50%+45px)] lg:group-hover:shadow-lg lg:z-30">
                  <CheckCircle className="w-5 h-5 text-purple flex-shrink-0" />
                  <span className="text-sm md:text-[15px] text-gray-700 font-medium text-center">
                    30+ years of expertise in Advances & Investments
                  </span>
                </div>

                <div className="bg-white border border-gray-200 rounded-full px-4 py-3 flex items-center justify-center gap-1 shadow-sm transition-all duration-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:translate-y-[calc(-50%+15px)] lg:w-[90%] lg:group-hover:translate-y-[calc(-50%+130px)] lg:group-hover:shadow-lg lg:z-40">
                  <span className="text-lg">😊</span>
                  <span className="text-sm md:text-[15px] text-gray-700 font-medium text-center">
                    Guided 200+ clients toward smarter financial decisions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
