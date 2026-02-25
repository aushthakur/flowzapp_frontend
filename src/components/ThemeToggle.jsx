import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsLight(true);
            document.documentElement.classList.add('light');
        }
    }, []);

    const toggleTheme = () => {
        if (isLight) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsLight(false);
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary hover:bg-brand-primary/20 transition-all flex items-center justify-center shadow-lg shadow-brand/10"
            aria-label="Toggle Theme"
        >
            {isLight ? <Moon size={20} strokeWidth={2.5} /> : <Sun size={20} strokeWidth={2.5} />}
        </motion.button>
    );
};

export default ThemeToggle;
