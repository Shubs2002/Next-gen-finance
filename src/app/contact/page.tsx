'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Contact() {
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

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const meetingTypes = [
    {
      icon: '💼',
      title: 'Business Consultation',
      duration: '30-60 minutes',
      bgColor: 'bg-amber-50'
    },
    {
      icon: '🎯',
      title: 'Project Discussion',
      duration: '45 minutes',
      bgColor: 'bg-red-50'
    },
    {
      icon: '💬',
      title: 'Quick Chat',
      duration: '15 minutes',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="min-h-screen bg-background py-20 px-4 overflow-hidden"
    >
      <Navbar/>
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-medium mb-4 text-foreground"
            style={{ 
              fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.03em', 
              lineHeight: '1.2',
              fontWeight: 500
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-700"
            style={{ 
              fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.03em', 
              lineHeight: '1.6',
              fontWeight: 400
            }}
          >
            We'd love to hear from you. Send us a message or schedule a meeting.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Email Us Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <h3 
                className="text-2xl font-semibold text-foreground"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em',
                  fontWeight: 600
                }}
              >
                Email Us
              </h3>
            </div>
            
            <p 
              className="text-gray-600 mb-6"
              style={{ 
                fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em',
                fontSize: '0.95rem',
                fontWeight: 400
              }}
            >
              Send us a message and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all resize-none"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple to-purple-dark text-white py-4 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em',
                  fontWeight: 500
                }}
              >
                Send Message
                <span>📩</span>
              </button>
            </form>
          </motion.div>

          {/* Schedule a Meeting Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">📅</span>
              </div>
              <h3 
                className="text-2xl font-semibold text-foreground"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.03em',
                  fontWeight: 600
                }}
              >
                Schedule a Meeting
              </h3>
            </div>
            
            <p 
              className="text-gray-600 mb-6"
              style={{ 
                fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: '-0.03em',
                fontSize: '0.95rem',
                fontWeight: 400
              }}
            >
              Book a time that works for you and let's discuss your needs in detail.
            </p>

            {/* Calendar Integration Section */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                <div className="text-center">
                  <div className="text-xs font-bold text-white bg-red-500 rounded-t-lg px-3 py-1">
                    JAN
                  </div>
                  <div className="text-2xl font-bold text-gray-800 px-3 py-1">
                    17
                  </div>
                </div>
              </div>
              
              <h4 
                className="text-lg font-semibold text-gray-800 mb-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Calendar Integration
              </h4>
              <p 
                className="text-sm text-gray-600 mb-4"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em',
                  fontSize: '0.9rem'
                }}
              >
                To complete your calendar setup, you'll need to integrate with your preferred scheduling service.
              </p>

              <button
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em',
                  fontWeight: 500
                }}
              >
                Open Calendly
                <span>🔗</span>
              </button>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p 
                  className="text-xs text-gray-500 mb-2"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Popular scheduling options:
                </p>
                <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
                  <span>Calendly</span>
                  <span>•</span>
                  <span>Acuity</span>
                  <span>•</span>
                  <span>Cal.com</span>
                </div>
              </div>
            </div>

            {/* Meeting Types */}
            <div>
              <h4 
                className="text-sm font-semibold text-gray-700 mb-3"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Available Meeting Types:
              </h4>
              <div className="space-y-3">
                {meetingTypes.map((meeting, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`${meeting.bgColor} rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer`}
                  >
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{meeting.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h5 
                        className="font-semibold text-gray-800 text-sm"
                        style={{ 
                          fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {meeting.title}
                      </h5>
                      <p 
                        className="text-xs text-gray-600"
                        style={{ 
                          fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                          letterSpacing: '-0.02em'
                        }}
                      >
                        {meeting.duration}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Ways to Reach Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
        >
          <h3 
            className="text-2xl font-semibold text-foreground text-center mb-8"
            style={{ 
              fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: '-0.03em'
            }}
          >
            Other Ways to Reach Us
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h4 
                className="text-foreground font-semibold mb-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Phone
              </h4>
              <p 
                className="text-gray-600 text-sm"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                +1 (555) 123-4567
              </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h4 
                className="text-foreground font-semibold mb-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Address
              </h4>
              <p 
                className="text-gray-600 text-sm"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                123 Business St, City, State 12345
              </p>
            </div>

            {/* Business Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h4 
                className="text-foreground font-semibold mb-2"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Business Hours
              </h4>
              <p 
                className="text-gray-600 text-sm"
                style={{ 
                  fontFamily: 'var(--font-instrument-sans), -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Mon-Fri: 9AM-6PM
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}