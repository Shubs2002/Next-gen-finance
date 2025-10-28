'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Phone, FileText, CheckCircle, Headphones, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Connect With Us',
    description: "Schedule a quick call or doorstep appointment. We'll understand your financial goals and guide you toward the best options.",
    icon: Phone,
  },
  {
    number: '2',
    title: 'Document Collection',
    description: 'Our team assists in collecting the required documents at your doorstep for a smooth and stress-free process.',
    icon: FileText,
  },
  {
    number: '3',
    title: 'Application & Approval',
    description: "We handle all formalities with complete transparency. Every step is tracked and communicated clearly. You'll receive regular updates until the process is complete.",
    icon: CheckCircle,
  },
  {
    number: '4',
    title: 'Ongoing Support',
    description: 'We provide continuous assistance, timely reminders, and help with renewals or new financial needs.',
    icon: Headphones,
  },
];

export default function HowItWorks() {
  const router = useRouter();

  const handleCardClick = (index: number) => {
    if (index === 0) {
      router.push('/contact');
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-black overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="how-it-works-heading" className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium max-w-2xl mx-auto">
            A Simple and Hassle-Free Process to Get You Started
          </p>
        </motion.div>

        <div className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 pt-10 scrollbar-hide">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleCardClick(index)}
              className={`relative flex-shrink-0 w-[280px] md:w-auto mt-0 ${index === 0 ? 'cursor-pointer' : ''}`}
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-medium text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-purple drop-shadow-lg"></div>
                </div>
              </div>

              <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 pt-8 hover:bg-white/10 transition-all duration-300 h-full ${index === 0 ? 'hover:border-purple/50' : ''}`}>
                <div className="flex justify-center mb-4">
                  <step.icon className="w-10 h-10 text-purple" />
                </div>

                <div className="text-center">
                  <h3 className="text-base md:text-lg font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 z-20">
                  <ArrowDown className="w-5 h-5 text-purple rotate-[-90deg]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
