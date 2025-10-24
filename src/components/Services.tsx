'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Home Loan',
    category: 'Financial Service',
    date: 'Home Financing',
    description: 'Owning your dream home is now easier than ever. We help you find the right loan with flexible repayment options, minimal documentation, and expert support.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    color: 'text-purple',
    tags: ['Loan consultation', 'Document assistance', 'EMI guidance'],
    link: '/services/home-loan',
  },
  {
    id: 2,
    title: 'Education Loan',
    category: 'Education Financing',
    date: 'Study Support',
    description: "Your child's education deserves the best start. We assist in securing education loans with competitive rates, ensuring financial support for higher studies.",
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    color: 'text-purple',
    tags: ['Study abroad', 'Student loan planning', 'Application support'],
    link: '/services/education-loan',
  },
  {
    id: 3,
    title: 'Mutual Funds',
    category: 'Investment Service',
    date: 'Wealth Growth',
    description: 'Grow your wealth smartly with expert mutual fund guidance. We help you choose diversified investment options that match your goals, risk appetite, and timeline.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    color: 'text-purple',
    tags: ['SIP setup', 'Portfolio review', 'Goal-based planning'],
    link: '/services/mutual-funds',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 pt-30 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-8 md:gap-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-medium md:text-xl font-medium text-gray-500"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-2xl font-medium leading-relaxed text-gray-600"
          >
            As a forward-thinking financial service built for the digital age, we blend innovation, data, and trust to simplify complex money matters. From smart investments to secure digital banking,{' '}
            <span className="text-black font-medium">we're your partner in creating long-term value and financial growth.</span>
          </motion.p>
        </div>

        {/* Portfolio Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Container - Smaller sizes */}
              <div className={`relative mb-3 overflow-hidden rounded-xl ${index === 0 ? 'aspect-[4/3] lg:aspect-[3/4]' :
                index === 1 ? 'aspect-[4/3] lg:aspect-[3/2]' :
                  'aspect-[4/3] lg:aspect-[4/5]'
                }`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500 uppercase tracking-wide font-medium">
                  {service.category} <span className="mx-1.5">•</span> {service.date}
                </p>
                <h3 className={`text-xl md:text-2xl font-medium ${service.color} transition-colors group-hover:text-purple-dark`}>
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                  {service.description}
                </p>

                {/* Tags as Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details CTA */}
                <div className="pt-2">
                  <Link href={service.link}>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer text-xs md:text-sm font-medium text-purple hover:text-purple-dark transition-colors flex items-center gap-1.5 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Link href="/Services" className="cursor-pointer">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-black hover:bg-purple text-white px-8 py-3 rounded-xl text-[15px] font-medium transition-colors duration-300 flex items-center gap-2 cursor-pointer"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
