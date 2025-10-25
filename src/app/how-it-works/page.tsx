'use client';

import { motion } from 'framer-motion';
import { Phone, FileText, CheckCircle, Headphones, ArrowDown, Clock, Shield, Users, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const steps = [
  {
    number: '1',
    title: 'Connect With Us',
    shortDesc: "Schedule a quick call or doorstep appointment. We'll understand your financial goals and guide you toward the best options.",
    detailedDesc: "Getting started is simple. Reach out to us via phone, WhatsApp, or our website. We'll schedule a convenient time for a consultation—either at your doorstep or over a call. During this initial conversation, we take the time to understand your unique financial needs, goals, and preferences. Whether you're looking for a home loan, personal loan, investment advice, or insurance, we'll guide you through the available options and help you make an informed decision.",
    icon: Phone,
    features: [
      'Free consultation at your doorstep',
      'Flexible scheduling options',
      'Expert guidance on all financial products',
      'No obligation to proceed'
    ]
  },
  {
    number: '2',
    title: 'Document Collection',
    shortDesc: 'Our team assists in collecting the required documents at your doorstep for a smooth and stress-free process.',
    detailedDesc: "Once you've decided to move forward, we make the documentation process effortless. Our experienced team will visit your location to collect all necessary documents. We'll provide you with a clear checklist of required papers and help you organize everything properly. No need to visit multiple offices or stand in long queues—we bring the service to you. Our team ensures all documents are verified and complete before submission to avoid any delays.",
    icon: FileText,
    features: [
      'Doorstep document collection',
      'Complete checklist provided',
      'Document verification assistance',
      'Secure handling of sensitive information'
    ]
  },
  {
    number: '3',
    title: 'Application & Approval',
    shortDesc: "We handle all formalities with complete transparency. Every step is tracked and communicated clearly. You'll receive regular updates until the process is complete.",
    detailedDesc: "After collecting your documents, we submit your application to the relevant financial institutions. Our strong relationships with banks and financial partners help expedite the approval process. Throughout this stage, we maintain complete transparency—you'll receive regular updates on your application status via calls, messages, or WhatsApp. We handle all follow-ups with the institutions, so you don't have to worry about chasing approvals. If any additional information is needed, we'll coordinate with you promptly.",
    icon: CheckCircle,
    features: [
      'Fast-track application processing',
      'Regular status updates',
      'Direct coordination with banks',
      'Transparent communication at every step'
    ]
  },
  {
    number: '4',
    title: 'Ongoing Support',
    shortDesc: 'We provide continuous assistance, timely reminders, and help with renewals or new financial needs.',
    detailedDesc: "Our relationship doesn't end with approval. We believe in building long-term partnerships with our clients. After your loan is disbursed or your investment is set up, we continue to provide support. We'll send you timely reminders for EMI payments, policy renewals, and investment reviews. If you need assistance with any financial matter in the future—whether it's refinancing, additional loans, or new investment opportunities—we're just a call away. Your financial success is our priority.",
    icon: Headphones,
    features: [
      'Lifetime support for all services',
      'Timely payment reminders',
      'Assistance with renewals and refinancing',
      'Priority service for existing clients'
    ]
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'No need to visit multiple offices or wait in long queues'
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Your documents and information are handled with utmost security'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Backed by years of banking experience and industry knowledge'
  },
  {
    icon: Sparkles,
    title: 'Hassle-Free',
    description: 'We handle all the paperwork and follow-ups for you'
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
          {/* Animated Background Elements */}
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

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6"
            >
              How It Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto"
            >
              A Simple, Transparent, and Hassle-Free Process to Help You Achieve Your Financial Goals
            </motion.p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="pb-16 px-4 md:px-6 bg-black">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple to-purple/20 -mb-12" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-purple/50 transition-all duration-300 group">
                  {/* Step Number Badge */}
                  <div className="absolute -left-4 top-8">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-16 h-16 bg-gradient-to-br from-purple to-purple/80 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple/50"
                      >
                        {step.number}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-16">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-purple/20 rounded-xl flex items-center justify-center"
                      >
                        <step.icon className="w-6 h-6 text-purple" />
                      </motion.div>
                      <h2 className="text-xl md:text-2xl font-semibold text-white">
                        {step.title}
                      </h2>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base font-medium">
                      {step.detailedDesc}
                    </p>

                    {/* Features List */}
                    <div className="bg-purple/10 rounded-xl p-4 border border-purple/20">
                      <h3 className="text-sm font-semibold text-white mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowDown className="w-6 h-6 text-purple animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
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
                Why Choose Our Process?
              </h2>
              <p className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto">
                We've designed our process to be as convenient and efficient as possible
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple/50 text-center transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 bg-gradient-to-br from-purple to-purple/80 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple/50"
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-purple to-purple/80 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-purple/30"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90">
              Let's discuss your financial needs and find the perfect solution for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/30 cursor-pointer"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
