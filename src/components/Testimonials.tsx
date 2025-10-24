'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

// JSON data structure for easy editing
const testimonials = [
    {
        id: 1,
        name: 'Rohit Deshmukh',
        location: 'Virar',
        testimonial: 'I got my home loan approved faster than I expected! The team explained every detail clearly and handled everything right from my doorstep.',
        image: 'https://res.cloudinary.com/dc3o4l7rx/image/upload/v1760381075/Gemini_Generated_Image_4hmirp4hmirp4hmi_2_u2mi6w.png',
        rating: 5,
    },
    {
        id: 2,
        name: 'Anita Kulkarni',
        location: 'Mumbai',
        testimonial: 'From document collection to disbursement, everything was smooth and transparent. Their guidance helped me choose the right investment plan.',
        image: '/testimonials/anita.jpg',
        rating: 5,
    },
    {
        id: 3,
        name: 'Onkar Suryavanshi',
        location: 'Mumbai',
        testimonial: "They made my education loan process completely hassle-free. I didn't have to visit the bank even once — everything was done at home!",
        image: '/testimonials/onkar.jpg',
        rating: 5,
    },
    {
        id: 4,
        name: 'Kamini Rege',
        location: 'Virar',
        testimonial: "I've been consulting them for years for my mutual funds and insurance. Their advice is practical, honest, and backed by deep experience.",
        image: '/testimonials/kamini.jpg',
        rating: 5,
    },
    {
        id: 5,
        name: 'Dilip Joshi',
        location: 'Palghar',
        testimonial: 'Their banking background really shows. I felt confident throughout the process, and their doorstep service saved me a lot of time.',
        image: '/testimonials/dilip.jpg',
        rating: 5,
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 420; // Card width + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-purple/5 via-white to-purple/10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-4">
                        Client Stories
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                        Real experiences from people we've helped achieve their financial goals
                    </p>
                </motion.div>

                {/* Testimonials Container with Navigation */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        type="button"
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple hover:text-white text-purple rounded-full p-3 shadow-lg transition-all duration-300 -translate-x-1/2"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple hover:text-white text-purple rounded-full p-3 shadow-lg transition-all duration-300 translate-x-1/2"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Testimonials Scrollable */}
                    <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="flex-shrink-0 w-[85vw] md:w-[400px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Profile */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple/20">
                                        {testimonial.image.startsWith('http') ? (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-purple to-purple/60 flex items-center justify-center">
                                                <span className="text-white font-semibold text-xl">
                                                    {testimonial.name.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">{testimonial.name}</h3>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-purple text-purple" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <Quote className="w-6 h-6 text-purple/30 mb-2" />
                                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                    {testimonial.testimonial}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
