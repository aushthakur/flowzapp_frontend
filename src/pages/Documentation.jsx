import React from 'react';
import { motion } from 'framer-motion';
import { Search, Book, Code, Terminal, MessageSquare, Zap, ArrowRight, ChevronRight, FileText, Globe, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Documentation = () => {
    const categories = [
        {
            title: "Getting Started",
            items: [
                { name: "Quick Start Guide", desc: "Get your first message sent in 5 minutes." },
                { name: "Account Verification", desc: "Official steps for Meta business verification." },
                { name: "Pricing & Billing", desc: "Understanding volume-based tiers and invoices." }
            ]
        },
        {
            title: "API Reference",
            items: [
                { name: "Authentication", desc: "Managing bearer tokens and API security." },
                { name: "Sending Templates", desc: "Payload structures for official templates." },
                { name: "Webhooks", desc: "Real-time message status and incoming events." }
            ]
        },
        {
            title: "Flow Design",
            items: [
                { name: "Logic Nodes", desc: "Conditionals, variables, and math operators." },
                { name: "CRM Mapping", desc: "Storing user responses in your CRM." },
                { name: "Media Assets", desc: "Optimizing images, videos, and PDFs." }
            ]
        }
    ];

    return (
        <PageTransition>
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                        {/* Sidebar Nav */}
                        <aside className="lg:col-span-3 hidden lg:block border-r border-white/5 pr-10">
                            <div className="sticky top-32 space-y-12">
                                {categories.map((cat) => (
                                    <div key={cat.title}>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-8">{cat.title}</h4>
                                        <ul className="space-y-6">
                                            {cat.items.map((item) => (
                                                <li key={item.name}>
                                                    <a href="#" className="text-text-dim hover:text-brand-primary transition-colors font-bold tracking-tight flex items-center gap-2 group text-xs uppercase">
                                                        <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="lg:col-span-9">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-24"
                            >
                                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-text-main lowercase">
                                    Technical <br /><span className="vibrant-text">Blueprints.</span>
                                </h1>
                                <p className="text-lg text-text-dim font-normal leading-relaxed max-w-2xl">
                                    Access detailed implementation guides, comprehensive API documentation, and tactical best practices for scaling your WhatsApp operations.
                                </p>

                                <div className="mt-12 relative group max-w-xl">
                                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-primary transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search functions, nodes, or setup guides..."
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-brand-primary/40 focus:bg-white/[0.06] transition-all font-normal text-base"
                                    />
                                </div>
                            </motion.div>

                            {/* Featured Guides */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                                <DocCard
                                    icon={<Terminal size={20} />}
                                    title="Developer Quickstart"
                                    desc="The absolute fastest path to authenticating and sending your first API-triggered message."
                                />
                                <DocCard
                                    icon={<FileText size={20} />}
                                    title="Templates & Compliance"
                                    desc="Learn the rules for official Meta message templates to avoid delivery rejections."
                                />
                            </div>

                            {/* Section Detail */}
                            <div className="space-y-20">
                                {categories.map((cat, i) => (
                                    <div key={i} className="border-t border-white/5 pt-16">
                                        <h2 className="text-2xl font-bold mb-10 text-white/90 uppercase tracking-tight">{cat.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {cat.items.map((item, j) => (
                                                <div key={j} className="p-8 glass-panel border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all group cursor-pointer">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <h3 className="text-sm font-bold text-brand-primary uppercase tracking-widest leading-none">{item.name}</h3>
                                                        <ArrowRight size={14} className="text-white/20 group-hover:text-brand-primary transition-colors" />
                                                    </div>
                                                    <p className="text-xs text-text-dim font-normal leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-32 p-12 lg:p-16 glass-panel border-white/5 bg-brand-primary/[0.02]">
                                <h2 className="text-2xl font-bold mb-10 tracking-tight leading-none uppercase">Advanced Operational Support</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-tight">Enterprise Success</h4>
                                        <p className="text-xs text-text-dim mb-8 font-normal italic leading-relaxed">"Flowzapp's technical documentation is the clearest we've used. It reduced our integration time by 60% compared to our previous provider."</p>
                                        <button className="vibrant-btn text-xs px-8 py-3 uppercase tracking-widest font-bold">Contact Solutions Architect</button>
                                    </div>
                                    <div className="border-l border-white/5 pl-12 hidden md:block">
                                        <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-tight">Core System Status</h4>
                                        <div className="space-y-4">
                                            <StatusItem label="API Endpoint" status="Operational" color="text-green-500" />
                                            <StatusItem label="Media Server" status="Operational" color="text-green-500" />
                                            <StatusItem label="Webhook Relay" status="Monitoring" color="text-yellow-500" />
                                            <StatusItem label="Flow Engine" status="Operational" color="text-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

const DocCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ x: 5 }}
        className="p-8 glass-panel border-white/5 bg-white/[0.02] flex gap-6 items-start cursor-pointer group"
    >
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-black transition-all">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold mb-3 tracking-tight uppercase text-white/90 leading-none">{title}</h3>
            <p className="text-xs text-text-dim font-normal leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const StatusItem = ({ label, status, color }) => (
    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
        <span className="text-text-muted">{label}</span>
        <span className={color}>{status}</span>
    </div>
);

export default Documentation;
