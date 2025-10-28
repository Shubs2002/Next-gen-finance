'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
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
    <>
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-purple/5 via-white to-purple/10 py-20 px-4 overflow-hidden"
    >
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
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple/5 rounded-full blur-3xl"
        />
      </div>

      <Navbar />
      <div className="container mx-auto max-w-7xl mt-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-black"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto"
          >
            We'd love to hear from you. Send us a message or schedule a meeting.
          </motion.p>
        </div>

        {/* Two Column Layout with Divider */}
        <div className="relative mb-12 md:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Vertical Divider with "OR" - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10">
              <div className="h-full w-px bg-gray-300 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border-2 border-gray-300">
                  <span className="text-gray-600 font-medium text-sm">OR</span>
                </div>
              </div>
            </div>

            {/* Email Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-gradient-to-br from-purple to-purple/70 rounded-xl flex items-center justify-center shadow-md"
                >
                  <span className="text-xl">📧</span>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Email Us
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-sm md:text-base font-medium relative z-10">
                Send us a message and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all text-sm md:text-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all resize-none text-sm md:text-base"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple to-purple/80 hover:from-purple/90 hover:to-purple/70 text-white py-3 md:py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Send Message
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📩
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>

            {/* Mobile OR Divider */}
            <div className="lg:hidden flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-600 font-medium text-sm px-4 py-2 rounded-full border-2 border-gray-300 bg-white">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Schedule a Meeting Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Gradient Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-10 h-10 bg-gradient-to-br from-purple to-purple/70 rounded-xl flex items-center justify-center shadow-md"
                >
                  <span className="text-xl">📅</span>
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  Schedule a Meeting
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-sm md:text-base font-medium relative z-10">
                Book a time that works for you and let's discuss your needs in detail.
              </p>

              {/* Calendar Integration Section */}
              <div className="relative bg-gradient-to-br from-purple/10 to-purple/5 rounded-2xl p-6 mb-6 text-center border border-purple/20 overflow-hidden group/calendar">
                {/* Animated shine effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 relative z-10"
                >
                  <div className="text-center">
                    <div className="text-xs font-bold text-white bg-gradient-to-r from-purple to-purple/80 rounded-t-lg px-3 py-1">
                      JAN
                    </div>
                    <div className="text-2xl font-bold text-gray-800 px-3 py-1">
                      17
                    </div>
                  </div>
                </motion.div>

                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 relative z-10">
                  Calendar Integration
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mb-4 relative z-10">
                  To complete your calendar setup, you'll need to integrate with your preferred scheduling service.
                </p>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10 w-full bg-gradient-to-r from-purple to-purple/80 hover:from-purple/90 hover:to-purple/70 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Open Calendly
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🔗
                  </motion.span>
                </motion.button>

                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                  <p className="text-xs text-gray-500 mb-2">
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
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Available Meeting Types:
                </h4>
                <div className="space-y-3">
                  {meetingTypes.map((meeting, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      className="relative bg-gradient-to-r from-purple/5 to-purple/10 rounded-xl p-4 flex items-center gap-3 hover:from-purple/10 hover:to-purple/15 transition-all cursor-pointer border border-purple/20 shadow-sm hover:shadow-md overflow-hidden group/meeting"
                    >
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/meeting:translate-x-full transition-transform duration-700" />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md relative z-10"
                      >
                        <span className="text-xl">{meeting.icon}</span>
                      </motion.div>
                      <div className="flex-1 relative z-10">
                        <h5 className="font-semibold text-gray-800 text-sm">
                          {meeting.title}
                        </h5>
                        <p className="text-xs text-gray-600">
                          {meeting.duration}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Other Ways to Reach Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple/10 to-transparent rounded-tr-full" />
          <h3 className="text-xl md:text-2xl font-semibold text-black text-center mb-6 md:mb-8 relative z-10">
            Other Ways to Reach Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Phone */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all"
              >
                <span className="text-2xl md:text-3xl">📞</span>
              </motion.div>
              <h4 className="text-black font-semibold mb-2 text-sm md:text-base">
                Phone
              </h4>
              <p className="text-gray-600 text-xs md:text-sm font-medium">
                +1 (555) 123-4567
              </p>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all"
              >
                <span className="text-2xl md:text-3xl">📍</span>
              </motion.div>
              <h4 className="text-black font-semibold mb-2 text-sm md:text-base">
                Address
              </h4>
              <p className="text-gray-600 text-xs md:text-sm font-medium">
                123 Business St, City, State 12345
              </p>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple/20 to-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md group-hover:shadow-lg transition-all"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="text-2xl md:text-3xl inline-block"
                >
                  ⏰
                </motion.span>
              </motion.div>
              <h4 className="text-black font-semibold mb-2 text-sm md:text-base">
                Business Hours
              </h4>
              <p className="text-gray-600 text-xs md:text-sm font-medium">
                Mon-Fri: 9AM-6PM
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
}