import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, MessageSquare, Shield, Zap, TrendingUp, Sun, Moon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Features', path: '/features' },
        { name: 'Integration', path: '/integration' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Why Flowzapp', path: '/why-flowzapp' },
        { name: 'Docs', path: '/documentation' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--glass-border)] shadow-2xl' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center max-w-7xl">
                {/* Logo */}
                <Link to="/" className="relative z-[1100] transition-transform hover:scale-105 active:scale-95">
                    <img src="/logo.png" alt="Flowzapp Logo" className="h-10 md:h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-semibold tracking-wide transition-all hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-text-dim'}`}
                        >
                            <div className="flex flex-col items-center">
                                <span>{link.name}</span>
                                {location.pathname === link.path && (
                                    <motion.div layoutId="nav-underline" className="h-0.5 w-full bg-brand-primary mt-1 rounded-full" />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <ThemeToggle />
                    <Link
                        to="/free-trial"
                        className="px-6 py-2.5 text-sm font-bold text-text-main border-2 border-brand-primary/30 rounded-full hover:bg-brand-primary/5 hover:border-brand-primary transition-all"
                    >
                        7 Day Free Trial
                    </Link>
                    <Link to="/register" className="vibrant-btn group py-3">
                        Get Started
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden relative z-[1100] w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white active:scale-90 transition-transform"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-bg-dark z-[1000] p-6 pt-32 flex flex-col items-center"
                    >
                        {/* Background Gradient */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)] pointer-events-none" />

                        <div className="flex flex-col gap-8 text-center relative z-10 w-full max-w-md">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-black uppercase tracking-tighter hover:text-brand-primary transition-colors ${location.pathname === link.path ? 'text-brand-primary' : 'text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="pt-12 flex flex-col gap-6">
                                <Link to="/free-trial" className="text-xl font-bold text-text-dim hover:text-white transition-colors">7 Day Free Trial</Link>
                                <Link to="/register" className="vibrant-btn justify-center text-xl py-6 mx-4">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
