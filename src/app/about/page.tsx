'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'Your financial success is our priority. We build lasting relationships based on trust and transparency.'
  },
  {
    icon: Shield,
    title: 'Integrity & Trust',
    description: 'We operate with complete honesty and maintain the highest ethical standards in all our dealings.'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'We focus on understanding and achieving your unique financial goals with personalized solutions.'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We leverage modern technology and best practices to deliver efficient, hassle-free services.'
  }
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '₹50Cr+', label: 'Loans Disbursed' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Satisfaction Rate' }
];

const team = [
  {
    name: 'Founder & CEO',
    role: 'Ex-Banking Professional',
    description: 'With over 15 years of experience in banking and financial services, our founder brings deep industry knowledge and a passion for helping people achieve their financial dreams.',
    image: '/team/founder.jpg'
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple/5 via-white to-purple/10">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-6">
                About Us
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
                We're not just financial advisors—we're your partners in building a secure financial future.
                With years of banking experience and a commitment to personalized service, we bring expertise
                right to your doorstep.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4 md:px-6 bg-black relative overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-40 -left-40 w-96 h-96 bg-purple/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple/20 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="font-medium">
                    Founded by seasoned banking professionals, NextGen Finance was born from a simple observation:
                    people needed financial services that were accessible, transparent, and truly customer-centric.
                  </p>
                  <p className="font-medium">
                    After spending years in traditional banking, we saw firsthand the challenges people face—
                    complex processes, long wait times, and impersonal service. We knew there had to be a better way.
                  </p>
                  <p className="font-medium">
                    Today, we bring that vision to life by offering doorstep financial services backed by deep
                    industry expertise. Whether it's a home loan, personal loan, investment advice, or insurance,
                    we handle everything with care, transparency, and a personal touch.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="w-24 h-24 text-purple mx-auto mb-4" />
                      <p className="text-xl font-semibold text-white">Excellence in Service</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-r from-purple to-purple/80">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/90 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
                Our Values
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple/50 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-300 font-medium leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-4">
                Why Choose Us?
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                What sets us apart from traditional financial services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Personalized Service
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  We take time to understand your unique needs and provide tailored solutions
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Doorstep Convenience
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  No need to visit offices—we bring our services directly to you
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Expert Guidance
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  Backed by years of banking experience and industry knowledge
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-[#f5f5f5]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-purple to-purple/80 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-purple/30"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Let's discuss how we can help you achieve your financial goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/30 cursor-pointer"
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
