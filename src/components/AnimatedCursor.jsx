import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
    "Can't catch me!",
    "Missed!",
    "Try harder!",
    "Too slow!",
    "I'm over here now!",
    "WhatsApp Marketing is faster than you!",
    "Deploy Flows in seconds!",
    "24/7 Automation active!",
    "Flowzapp is speed!",
];

const getRandomEdgePos = () => {
    const edge = Math.floor(Math.random() * 4);
    const pad = 5;
    switch (edge) {
        case 0: return { x: Math.random() * 90 + 5, y: pad };
        case 1: return { x: 100 - pad, y: Math.random() * 90 + 5 };
        case 2: return { x: Math.random() * 90 + 5, y: 100 - pad };
        default: return { x: pad, y: Math.random() * 90 + 5 };
    }
};

const calcTooltipOffset = (pos) => {
    let tx = 0, ty = -50;
    if (pos.y < 20) ty = 50;
    if (pos.x < 20) tx = 50;
    if (pos.x > 80) tx = -50;
    return { tx, ty };
};

const AnimatedCursor = () => {
    const [pos, setPos] = useState({ x: 5, y: 50 });
    const [instant, setInstant] = useState(false);
    const [showMsg, setShowMsg] = useState(false);
    const [message, setMessage] = useState('');
    const [accent, setAccent] = useState('default'); // 'default' | 'info'
    const [tooltipOffset, setTooltipOffset] = useState({ tx: 0, ty: -50 });
    const timerRef = useRef(null);

    /* --- helpers --- */
    const triggerMessage = ({ newPos, msg, acc = 'default' }) => {
        const { tx, ty } = calcTooltipOffset(newPos);
        setAccent(acc);
        setMessage(msg);
        setTooltipOffset({ tx, ty });
        setShowMsg(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setShowMsg(false);
            setMessage('');
        }, 4000);
    };

    /* --- self-interaction (user hovers the dot) --- */
    const handleSelfHover = () => {
        const newPos = getRandomEdgePos();
        setInstant(false);
        setPos(newPos);
        triggerMessage({
            newPos,
            msg: MESSAGES[Math.floor(Math.random() * MESSAGES.length)],
            acc: 'default'
        });
    };

    /* --- external trigger (other components fire window event) --- */
    useEffect(() => {
        setPos(getRandomEdgePos());

        const handleTrigger = (e) => {
            const { x, y, message: msg, accent: acc, instant: isInstant } = e.detail;
            const newPos = { x, y };
            setInstant(isInstant ?? false);
            setPos(newPos);
            triggerMessage({
                newPos,
                msg: msg || "👋 Are you a current user? Press it — or try Free Trial!",
                acc: acc || 'info'
            });
        };

        window.addEventListener('cursor-trigger', handleTrigger);
        return () => window.removeEventListener('cursor-trigger', handleTrigger);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* --- tooltip style based on accent --- */
    const bubbleClass = accent === 'info'
        ? 'bg-white text-bg-dark border-2 border-brand-primary/30 shadow-[0_8px_30px_rgba(0,255,136,0.25)]'
        : 'bg-brand-primary text-black border-2 border-black/10';

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <motion.div
                animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                transition={instant
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 380, damping: 22 }
                }
                className="absolute pointer-events-auto"
                style={{ width: 28, height: 28, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={handleSelfHover}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Glowing dot */}
                    <div className="w-5 h-5 bg-brand-primary rounded-full shadow-[0_0_24px_rgba(0,255,136,1)] cursor-help border-2 border-white/20" />
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-full animate-ping" />

                    {/* Tooltip */}
                    <AnimatePresence>
                        {showMsg && message && (
                            <motion.div
                                key={message}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: tooltipOffset.tx,
                                    y: tooltipOffset.ty,
                                }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                className="absolute whitespace-nowrap text-sm font-black px-5 py-2.5 rounded-full shadow-xl bg-brand-primary text-black border-2 border-black/10"
                                style={{ transformOrigin: 'bottom center' }}
                            >
                                {message}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default AnimatedCursor;
