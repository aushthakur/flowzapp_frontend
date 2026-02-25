import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, BarChart3, Users, ArrowRight, ShieldCheck, Search, Share2, MousePointer2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Version 4.0 Live</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                                Transform Your WhatsApp <br />
                                <span className="vibrant-text">Into a Sales Engine.</span>
                            </h1>

                            <p className="text-base md:text-lg text-text-dim mb-8 font-normal leading-relaxed max-w-xl">
                                Flowzapp is the enterprise-grade WhatsApp Business API platform designed for high-velocity brands. Automate customer journeys, manage team collaborations, and skyrocket conversions with official Meta-powered infrastructure.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/register" className="vibrant-btn text-base px-8 py-4">
                                    Start 7-Day Free Trial
                                </Link>
                                <Link to="/features" className="secondary-btn text-base px-8 py-4">
                                    View Full Capabilities
                                </Link>
                            </div>

                            <div className="mt-12 flex items-center gap-8 opacity-60">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">99.9%</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Uptime</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">5M+</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Messages/Day</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white">2.5k</div>
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Global Brands</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-20 bg-brand-primary/5 blur-[120px] rounded-full" />
                            <div className="glass-panel p-2 border-white/20 shadow-2xl relative z-10 overflow-hidden">
                                <img
                                    src="/hero-dashboard.png"
                                    alt="Flowzapp Dashboard"
                                    className="rounded-lg opacity-90"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section className="py-24 relative border-t border-white/5 bg-white/[0.01]">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The Modern Standard for <br /> WhatsApp Marketing.</h2>
                        <p className="text-base text-text-dim font-normal leading-relaxed">
                            Beyond simple broadcasting, Flowzapp offers a comprehensive suite of tools to manage every touchpoint of your customer's WhatsApp experience. From discovery to post-purchase support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <DetailCard
                            icon={<Zap size={24} />}
                            title="Visual Flow Orchestrator"
                            desc="Design complex multi-step automation without writing a single line of code. Support branching logic, variable substitution, and external API hooks."
                            items={["Drag-and-drop UI", "Timed Delays", "Segmented Triggers"]}
                        />
                        <DetailCard
                            icon={<Users size={24} />}
                            title="Shared Team Inbox"
                            desc="Centralize communications with multiple agents on a single WhatsApp number. Assign conversations, add internal notes, and track agent performance."
                            items={["Real-time Sync", "Team Routing", "Internal Chat"]}
                        />
                        <DetailCard
                            icon={<BarChart3 size={24} />}
                            title="Performance Analytics"
                            desc="Deep-dive into your campaign stats. Track open rates, response times, and conversion attribution directly within your dashboard."
                            items={["ROI Forecasting", "Heatmaps", "Exportable Data"]}
                        />
                        <DetailCard
                            icon={<Search size={24} />}
                            title="Smart List Management"
                            desc="Organize your contacts with dynamic tags and custom fields. Import thousands of leads and filter them based on real-time behavior."
                            items={["Dynamic Tags", "CSV Imports", "Activity Filtering"]}
                        />
                        <DetailCard
                            icon={<ShieldCheck size={24} />}
                            title="Official Meta Safety"
                            desc="We use official API protocols to ensure your business remains compliant with Meta policies. No risk of account bans or shadow-blocking."
                            items={["Tier 3 Security", "Compliance Guard", "Cloud Hosting"]}
                        />
                        <DetailCard
                            icon={<Share2 size={24} />}
                            title="Native Integrations"
                            desc="Connect seamlessly with Shopify, WooCommerce, Salesforce, and Zapier. Keep your CRM and WhatsApp perfectly in sync."
                            items={["One-click Shopify", "Webhooks", "REST API"]}
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Three Steps to Deployment.</h2>
                        <p className="text-base text-text-dim font-normal">Our onboarding process is optimized to get you live in under an hour.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
                        <div className="hidden lg:block absolute top-[60px] left-0 w-full h-px bg-white/5 z-0" />

                        <StepCard
                            number="01"
                            title="Connect API"
                            desc="Link your WhatsApp Business Account through our streamlined Meta-onboarding. We handle all the technical verification in the background."
                        />
                        <StepCard
                            number="02"
                            title="Design Flows"
                            desc="Use the Pro Builder to set up your welcome series, abandoned cart recovery, or status updates. Choose from 50+ enterprise templates."
                        />
                        <StepCard
                            number="03"
                            title="Go Live"
                            desc="Activate your automation and watch the dashboard come to life. Monitor performance in real-time and iterate on the fly."
                        />
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 text-center border-t border-[var(--glass-border)]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter text-text-main">
                        The Smartest way to <br />
                        <span className="vibrant-text">Automate WhatsApp</span>
                    </h1>
                    <p className="text-lg text-text-dim mb-10 font-medium">Join 2,500+ businesses scaling with Flowzapp every day.</p>
                    <Link to="/register" className="vibrant-btn text-lg px-12 py-5 shadow-[0_0_40px_rgba(0,255,136,0.3)] mx-auto hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] transition-all">
                        Activate Free Trial <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </PageTransition>
    );
};

const DetailCard = ({ icon, title, desc, items }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-panel p-8 border-white/5 bg-white/[0.02] flex flex-col items-start h-full"
    >
        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 tracking-tight uppercase text-white/90">{title}</h3>
        <p className="text-sm text-text-dim mb-6 font-normal leading-relaxed flex-grow">{desc}</p>
        <div className="space-y-3 w-full pt-4 border-t border-white/5">
            {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[11px] font-bold tracking-widest text-brand-primary/70 uppercase">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40" />
                    {item}
                </div>
            ))}
        </div>
    </motion.div>
);

const StepCard = ({ number, title, desc }) => (
    <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="text-5xl font-bold text-white/5 mb-6 leading-none selection:bg-transparent">{number}</div>
        <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">{title}</h3>
        <p className="text-sm text-text-dim font-normal leading-relaxed">{desc}</p>
    </div>
);

export default Home;
