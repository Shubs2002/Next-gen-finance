'use client';

import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We provide a range of digital financial solutions, including savings & investment accounts, personalized financial planning, instant loans, and automated wealth management – all accessible via web and mobile apps."
    },
    {
        id: 2,
        question: "How secure are my transactions and data?",
        answer: "Security is our top priority. We use end-to-end encryption, multi-factor authentication, and continuous monitoring to ensure your data and transactions remain safe at all times."
    },
    {
        id: 3,
        question: "How quickly can I get started?",
        answer: "Opening an account or accessing our services is fast and digital-first. Most onboarding processes take less than 5 minutes, and approvals for loans or investments are often instant."
    },
    {
        id: 4,
        question: "Can I integrate my existing bank accounts or financial tools?",
        answer: "Yes! Our platform allows you to link multiple accounts, investment platforms, and payment tools for a seamless view of your financial health in one place."
    },
    {
        id: 5,
        question: "Do you offer personalized financial advice?",
        answer: "Absolutely. Using AI-driven analytics and expert insights, we provide tailored recommendations to help you save, invest, and grow your wealth efficiently."
    },
    {
        id: 6,
        question: "Can I access your services on mobile?",
        answer: "Yes, all our services are fully optimized for mobile devices. You can manage your finances, track investments, and complete transactions anytime, anywhere."
    },
    {
        id: 7,
        question: "What fees or charges should I expect?",
        answer: "We believe in transparency. Fees, if any, are clearly displayed before you complete a transaction, with no hidden charges. Some services may even be completely free."
    },
    {
        id: 8,
        question: "How do I get support if I need help?",
        answer: "Our support team is available via email, chat, or phone. For urgent queries, our AI-powered assistant can guide you 24/7."
    },
    {
        id: 9,
        question: "Can I customize the platform to my needs?",
        answer: "Yes! From notifications and dashboards to automated investment strategies, our platform adapts to your preferences for a truly personalized financial experience."
    }
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    return (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50" aria-labelledby="faq-heading">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-500 text-sm md:text-base font-medium mb-4">FAQs</p>
                        <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-6 leading-tight">
                            Answers to common questions to help you understand{' '}
                            <span className="text-black">the process and how we can work together</span>
                        </h2>
                        <button
                            type="button"
                            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                        >
                            Email Me
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex justify-end mb-6">
                            <div className="bg-black text-white text-sm px-4 py-2 rounded-full">
                                I'm here to help you
                            </div>
                        </div>

                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-base md:text-lg font-medium text-gray-800 pr-4">
                                        {faq.question}
                                    </span>
                                    {openId === faq.id ? (
                                        <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    )}
                                </button>
                                
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
