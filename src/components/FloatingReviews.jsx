import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    { name: "Rahul S.", rating: 5, text: "Flowzapp doubled our sales in 2 weeks!" },
    { name: "Priya M.", rating: 5, text: "The flow builder is just magical." },
    { name: "Karan J.", rating: 5, text: "Best WhatsApp API tool out there." },
    { name: "Sneha W.", rating: 5, text: "AI bots saved us 40 hours a week." },
    { name: "Anita K.", rating: 5, text: "Super intuitive and powerful." },
    { name: "Vikram R.", rating: 5, text: "Highly recommended for D2C brands." }
];

const FloatingReviews = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const review = reviews[index];

    return (
        <div className="fixed bottom-8 left-8 z-[100]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel p-6 border-brand-primary/30 w-72 shadow-brand bg-bg-dark/80 backdrop-blur-3xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-xs border border-brand-primary/20">
                            {review.name[0].toUpperCase()}
                        </div>
                        <div>
                            <div className="text-sm font-black text-white">{review.name}</div>
                            <div className="flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={10} fill="#00FF88" stroke="none" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-text-dim text-sm font-medium leading-relaxed italic">
                        "{review.text}"
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FloatingReviews;
