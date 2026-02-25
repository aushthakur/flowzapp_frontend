import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown, Star, HelpCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: "Growth",
            price: "$49",
            icon: <Zap size={24} />,
            desc: "For small teams moving fast.",
            features: ["Up to 5,000 Messages", "Basic Flow Builder", "3 Team Member Access", "Daily Analytics Reports", "Standard Meta Support"],
            note: "No hidden setup fees"
        },
        {
            name: "Scale",
            price: "$129",
            icon: <Shield size={24} />,
            desc: "For mid-size brands scaling up.",
            features: ["Up to 25,000 Messages", "Advanced Logic Nodes", "10 Team Member Access", "Real-time Dashboard", "Priority 24/7 Support", "Shopify Native Sync"],
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            icon: <Crown size={24} />,
            desc: "For global high-volume ops.",
            features: ["Unlimited Messaging", "Full Multi-inbox Ops", "Dedicated Account Manager", "White-label Options", "Custom API Integrations", "SLA Guarantees"],
            note: "Volume-based discounts"
        }
    ];

    return (
        <PageTransition>
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                        >
                            <Star size={12} className="text-brand-primary" fill="currentColor" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Volume-based Efficiency</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-text-main lowercase">
                            Scale with <br /><span className="vibrant-text">Precision.</span>
                        </h1>
                        <p className="text-lg text-text-dim font-normal max-w-2xl mx-auto">
                            Choose the infrastructure that matches your current momentum. All plans include official Meta API access and our core security suite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`glass-panel p-10 relative flex flex-col group ${plan.popular ? 'border-brand-primary/30 bg-brand-primary/[0.02]' : 'hover:border-white/10'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-brand-primary text-black text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">
                                        Recommended
                                    </div>
                                )}

                                <button
                                    onClick={() => window.location.href = '/register'}
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${plan.popular ? 'vibrant-btn justify-center' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-text-main'}`}
                                >
                                    Select {plan.name}
                                </button>

                                <h3 className="text-xl font-bold mb-2 tracking-tight uppercase text-white/90">{plan.name}</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-4xl font-bold tracking-tighter">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-text-muted text-[10px] font-bold uppercase tracking-widest">/mo</span>}
                                </div>

                                <p className="text-sm text-text-dim mb-10 font-normal leading-relaxed">{plan.desc}</p>

                                <div className="space-y-5 mb-12 flex-grow">
                                    {plan.features.map((feat, j) => (
                                        <div key={j} className="flex items-start gap-3 text-xs font-semibold tracking-tight text-white/70">
                                            <Check size={14} className="text-brand-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/register"
                                    className={`w-full py-4 text-base font-bold tracking-tight rounded-xl flex items-center justify-center transition-all ${plan.popular ? 'vibrant-btn' : 'secondary-btn'}`}
                                >
                                    {plan.price === "Custom" ? 'Contact Sales' : 'Start Trial'}
                                </Link>
                                {plan.note && <p className="text-center text-[9px] font-bold uppercase tracking-widest text-text-muted mt-4">{plan.note}</p>}
                            </motion.div>
                        ))}
                    </div>

                    {/* Pricing FAQ or Detail */}
                    <div className="glass-panel p-12 lg:p-16 border-white/5 bg-white/[0.01]">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="lg:w-1/3">
                                <h2 className="text-2xl font-bold mb-4 tracking-tight uppercase">Plan Details</h2>
                                <p className="text-sm text-text-dim font-normal italic">Have specific questions about volume or integrations? Our technical team is ready to assist.</p>
                            </div>
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <FAQItem q="Is there a daily message limit?" a="Limits are set by your Meta API Tier. We help you warm up your account to hit the 100k+ daily tier as quickly as possible." />
                                <FAQItem q="What counts as a message?" a="We count outgoing messages sent via the platform. Incoming messages are always free and unlimited on all plans." />
                                <FAQItem q="Do you charge per agent?" a="No. We charge based on message volume and feature tiers. You can add as many agents as you need within your tier limits." />
                                <FAQItem q="Can I cancel anytime?" a="Yes. All our paid plans are month-to-month with no long-term lock-in period required for standard tiers." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

const FAQItem = ({ q, a }) => (
    <div>
        <div className="flex items-center gap-2 mb-3">
            <HelpCircle size={14} className="text-brand-primary" />
            <h4 className="text-sm font-bold text-white uppercase tracking-tight">{q}</h4>
        </div>
        <p className="text-xs text-text-dim leading-relaxed font-normal">{a}</p>
    </div>
);

export default Pricing;
