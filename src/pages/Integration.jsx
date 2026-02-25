import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Database, Share2, Globe, ArrowRight, CheckCircle2, Link as LinkIcon, RefreshCw, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Integration = () => {
    const integrations = [
        {
            name: "Shopify",
            category: "E-Commerce",
            desc: "Bi-directional synchronization for orders, customers, and fulfillment status. Automated recovery for 40% more abandoned carts.",
            tech: "Webhook-based, Real-time Sync"
        },
        {
            name: "WooCommerce",
            category: "E-Commerce",
            desc: "Native WordPress plugin that handles inventory updates and order notifications via WhatsApp instantly.",
            tech: "REST API, OAuth 2.0"
        },
        {
            name: "Salesforce",
            category: "CRM",
            desc: "Map WhatsApp conversations directly to Lead and Contact objects. Automate follow-ups based on CRM stage changes.",
            tech: "Managed Package, Bulk API"
        },
        {
            name: "HubSpot",
            category: "CRM",
            desc: "Sync marketing contact lists and trigger WhatsApp workflows from HubSpot Workflows and sequences.",
            tech: "Custom Card, Timeline API"
        },
        {
            name: "Zapier",
            category: "Automation",
            desc: "Connect to 5,000+ apps. Trigger WhatsApp messages from Spreadsheets, Typeform, or Gmail automation.",
            tech: "Action-based, Polling"
        },
        {
            name: "Custom Webhook",
            category: "Developer",
            desc: "Build proprietary logic by receiving real-time event notifications for delivered, read, and replied messages.",
            tech: "HTTPS, HMAC Signing"
        }
    ];

    return (
        <PageTransition>
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="max-w-4xl mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                        >
                            <Share2 size={12} className="text-brand-primary" fill="currentColor" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Enterprise Connectivity</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
                            Unified Ecosystem <br /> for Your <span className="vibrant-text">Tech Stack.</span>
                        </h1>
                        <p className="text-lg text-text-dim font-normal max-w-2xl leading-relaxed">
                            Stop managing communication in a silo. Flowzapp provides deep, native integrations that ensure your WhatsApp data flows natively into your existing CRM, ERP, and marketing automation tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                        {integrations.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 lg:p-10 glass-panel border-white/5 bg-white/[0.02] flex flex-col items-start h-full group"
                            >
                                <div className="flex justify-between items-start w-full mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all">
                                        <LinkIcon size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{item.category}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase text-white/90 leading-none">{item.name}</h3>
                                <p className="text-sm text-text-dim font-normal leading-relaxed mb-8 flex-grow">{item.desc}</p>
                                <div className="w-full pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-primary/60">
                                    <span>{item.tech}</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Deep Dive: Shopify */}
                    <section className="p-12 lg:p-20 glass-panel border-white/10 bg-white/[0.01] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 text-brand-primary -rotate-12 translate-x-1/4 -translate-y-1/4">
                            <Layers size={400} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10 max-w-3xl">
                            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-10 border border-brand-primary/20">Advanced Feature</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter leading-tight uppercase">The Bi-Directional <br /> Shopify Bridge.</h2>
                            <p className="text-lg text-text-dim font-normal leading-relaxed mb-12">
                                Unlike basic notification tools, our Shopify integration keeps a live, two-way heart rate between your store and your WhatsApp inbox. When a customer asks about their order in WhatsApp, our bot can instantly pull real-time tracking data from your Shopify backend.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                                <SyncFeature title="Inventory Sync" desc="Messages are only triggered for items currently in stock." />
                                <SyncFeature title="Order Tagging" desc="Automatically tag customers in Shopify based on WhatsApp behavior." />
                                <SyncFeature title="Discount Codes" desc="Generate and send unique, trackable Shopify codes in seconds." />
                                <SyncFeature title="Fulfillment Alerts" desc="Send automated tracking links as soon as labels are printed." />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link to="/register" className="vibrant-btn text-base">Connect My Store</Link>
                                <Link to="/documentation" className="secondary-btn text-base flex items-center justify-center">Read Technical Docs</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </PageTransition>
    );
};

const SyncFeature = ({ title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
            <RefreshCw size={10} strokeWidth={3} />
        </div>
        <div>
            <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight">{title}</h4>
            <p className="text-xs text-text-dim font-normal leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default Integration;
