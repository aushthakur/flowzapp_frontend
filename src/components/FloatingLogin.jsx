import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingLogin = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 1 }}
            className="fixed top-1/3 right-0 z-[1001] hidden lg:flex flex-col items-end select-none"
        >
            <Link
                to="/login"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="group relative flex items-center gap-3 overflow-hidden rounded-l-2xl shadow-[0_0_30px_rgba(0,255,136,0.25)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all duration-500"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,20,10,0.95) 100%)',
                    border: '1px solid rgba(0,255,136,0.3)',
                    borderRight: 'none',
                    backdropFilter: 'blur(20px)',
                    padding: hovered ? '14px 28px 14px 16px' : '14px 20px 14px 16px',
                    transition: 'padding 0.4s ease',
                }}
            >
                {/* Animated glow orb behind */}
                <div className="absolute -inset-1 bg-brand-primary/5 blur-xl rounded-l-2xl group-hover:bg-brand-primary/15 transition-all duration-500 pointer-events-none" />

                {/* Pulse ring */}
                <div className="relative flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-brand-primary/10 border border-brand-primary/40 flex items-center justify-center">
                        <UserCheck size={18} className="text-brand-primary" strokeWidth={2.5} />
                    </div>
                    <div className="absolute inset-0 rounded-full border border-brand-primary/30 animate-ping opacity-60" />
                </div>

                {/* Text block */}
                <div className="flex flex-col relative z-10">
                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-primary/60 leading-none mb-0.5">Portal</span>
                    <span className="text-sm font-black uppercase tracking-wider text-white group-hover:text-brand-primary transition-colors whitespace-nowrap">
                        Client Login
                    </span>
                </div>

                {/* Sparkle on hover */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -30 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="text-brand-primary relative z-10"
                        >
                            <Sparkles size={14} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Link>

            {/* Bottom accent line */}
            <div
                className="h-0.5 bg-gradient-to-l from-brand-primary/60 to-transparent transition-all duration-500"
                style={{ width: hovered ? '100%' : '40%' }}
            />
        </motion.div>
    );
};

export default FloatingLogin;
