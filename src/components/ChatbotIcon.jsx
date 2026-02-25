import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ChatbotIcon = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-[var(--primary)] text-black flex items-center justify-center shadow-2xl"
        >
            <MessageCircle size={28} />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-[var(--primary)] pointer-events-none"
            />
        </motion.button>
    );
};

export default ChatbotIcon;
