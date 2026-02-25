import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Target, MessageSquare, ShieldCheck, Globe, Code2, Layers, Cpu, Database, Layout, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Features = () => {
    const categories = [
        {
            title: "Automation & Logic",
            icon: <Cpu size={24} />,
            features: [
                {
                    title: "Visual Flow Orchestrator",
                    desc: "The most powerful drag-and-drop builder in the business. Create multi-path journeys based on user intent, time of day, and custom database queries.",
                    details: ["Conditional Branching", "JSON Export/Import", "Shared Variables"]
                },
                {
                    title: "Smart Delays & Scheduling",
                    desc: "Simulate natural conversation patterns with human-like delays. Schedule broadcasts based on customer local timezones to maximize engagement.",
                    details: ["Timezone Awareness", "Natural Pacing", "Batch Processing"]
                },
                {
                    title: "API Triggers",
                    desc: "Launch WhatsApp flows from any external system via our secure REST API. Trigger messages from order updates, signups, or support tickets.",
                    details: ["Webhooks", "RESTful Endpoints", "Rate Limit Control"]
                }
            ]
        },
        {
            title: "AI & Intelligence",
            icon: <Bot size={24} />,
            features: [
                {
                    title: "LLM Trained Chatbots",
                    desc: "Our bots are powered by tailored LLMs that understand your specific product catalog and documentation. No more generic 'I don't understand' responses.",
                    details: ["Knowledge Base Sync", "Sentiment Analysis", "Auto-Escalation"]
                },
                {
                    title: "Predictive Targeting",
                    desc: "Use machine learning to identify customers most likely to convert. Optimize message frequency to avoid churn while maintaining high visibility.",
                    details: ["Conversion Propensity", "A/B Testing", "Behavioral Scoring"]
                }
            ]
        },
        {
            title: "Team Collaboration",
            icon: <Layers size={24} />,
            features: [
                {
                    title: "Unified Shared Inbox",
                    desc: "Give your whole team access to one WhatsApp number. Manage thousands of conversations with advanced sorting, filtering, and tagging.",
                    details: ["Agent Assignment", "Collision Detection", "Team SLAs"]
                },
                {
                    title: "Internal Notes & Tags",
                    desc: "Leave private notes for team members within a conversation thread. Use global tags to categorize customers for follow-up marketing.",
                    details: ["Mention System", "Custom Labels", "Searchable History"]
                }
            ]
        }
    ];

    return (
        <PageTransition>
            <section className="relative pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-brand-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
                        >
                            System Capabilities
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-text-main lowercase">
                            Tools for the <br /><span className="vibrant-text">Next Evolution.</span>
                        </h1>
                        <p className="text-lg text-text-dim leading-relaxed max-w-2xl font-normal">
                            Flowzapp isn't just a communication tool; it's a modular platform designed to replace fragmented systems with a single, highly-integrated WhatsApp command center.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Sections */}
            <section className="py-20 bg-white/[0.01]">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="space-y-32">
                        {categories.map((cat, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-4 mb-16 px-4">
                                    <div className="text-brand-primary">{cat.icon}</div>
                                    <h2 className="text-2xl font-bold uppercase tracking-wider text-white/90">{cat.title}</h2>
                                    <div className="flex-grow h-px bg-white/10" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {cat.features.map((feat, j) => (
                                        <div key={j} className="glass-panel p-8 border-white/5 bg-white/[0.02]">
                                            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-tight">{feat.title}</h3>
                                            <p className="text-sm text-text-dim mb-8 font-normal leading-relaxed">{feat.desc}</p>
                                            <div className="space-y-3">
                                                {feat.details.map((detail, k) => (
                                                    <div key={k} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-brand-primary/60 uppercase">
                                                        <div className="w-1 h-1 rounded-full bg-brand-primary/40" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="glass-panel p-12 lg:p-20 border-white/10 bg-white/[0.01]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 tracking-tight">Technical Architecture</h2>
                                <p className="text-base text-text-dim font-normal leading-relaxed mb-10">
                                    Built on a serverless, horizontally scalable cloud infrastructure. We ensure that your messages are processed with sub-100ms latency, even during peak global events.
                                </p>
                                <div className="grid grid-cols-2 gap-8">
                                    <StatItem title="API Latency" val="< 85ms" />
                                    <StatItem title="Uptime SLA" val="99.99%" />
                                    <StatItem title="Security" val="AES-256" />
                                    <StatItem title="Scaling" val="Dynamic" />
                                </div>
                            </div>
                            <div className="relative aspect-video glass-panel overflow-hidden border-white/10 flex items-center justify-center">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-primary)_0%,transparent_70%)]" />
                                <Code2 size={80} className="text-brand-primary/20" />
                                <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border-white/5 text-[10px] font-mono text-brand-primary/80 overflow-hidden whitespace-nowrap">
                                    POST /v1/messages/send {'{'} "to": "+12345...", "type": "template" {'}'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8 tracking-tight uppercase">Ready to elevate your operations?</h2>
                    <Link to="/register" className="vibrant-btn text-base px-12 py-5 shadow-brand mx-auto">
                        Get Technical Access Now
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
};

const StatItem = ({ title, val }) => (
    <div>
        <div className="text-2xl font-bold text-white mb-1 tracking-tight">{val}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{title}</div>
    </div>
);

export default Features;
