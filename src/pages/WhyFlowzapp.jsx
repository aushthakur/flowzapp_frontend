import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, Users, Heart, ArrowRight, Building2, ShoppingBag, GraduationCap, Plane } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const WhyFlowzapp = () => {
    return (
        <PageTransition>
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-brand-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
                        >
                            Strategic Differentiation
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
                            Why Global Enterprises <br /> Choose <span className="vibrant-text">Flowzapp.</span>
                        </h1>
                        <p className="text-lg text-text-dim leading-relaxed font-normal">
                            In a market crowded with simple wrappers, Flowzapp stands out as the only platform that combines enterprise stability with startup agility. We don't just send messages; we build relationships.
                        </p>
                    </div>

                    {/* Industry Solutions */}
                    <div className="mb-40">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Vertical Specific Solutions</h2>
                            <div className="w-20 h-1 bg-brand-primary/20 mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <IndustryCard icon={<ShoppingBag size={24} />} title="E-Commerce" desc="Abandoned cart recovery that converts at 45%+. Seamless order tracking and support." />
                            <IndustryCard icon={<Building2 size={24} />} title="Real Estate" desc="Automated property viewing schedules and lead nurturing via personalized video tours." />
                            <IndustryCard icon={<GraduationCap size={24} />} title="EdTech" desc="Class reminders, assignment submissions, and student support in one unified thread." />
                            <IndustryCard icon={<Plane size={24} />} title="Travel" desc="Instant flight updates, digital boarding passes, and 24/7 concierge services." />
                        </div>
                    </div>

                    {/* Deep Differentiators */}
                    <div className="space-y-40">
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <div className="mb-10 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">01</div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-text-main uppercase">
                                    The <span className="vibrant-text">Flowzapp</span> <br />Advantage.
                                </h1>
                                <p className="text-base text-text-dim leading-relaxed mb-8 font-normal">
                                    While others share servers, our enterprise clients enjoy dedicated infrastructure. We adhere to GDPR, CCPA, and HIPAA compliance standards, ensuring your customer data is yours alone.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    <CheckItem text="Single-tenant database options available." />
                                    <CheckItem text="End-to-end encrypted message archival." />
                                    <CheckItem text="SOC2 Type II certified infrastructure." />
                                </ul>
                            </div>
                            <div className="glass-panel p-12 bg-white/[0.01] border-white/5 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                                <Shield size={120} className="text-brand-primary/10" />
                                <div className="absolute bottom-10 left-10 right-10 p-6 glass-panel border-white/10">
                                    <div className="text-2xl font-bold mb-2">99.99%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Security Audit Score</div>
                                </div>
                            </div>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1 glass-panel p-12 bg-white/[0.01] border-white/5 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                                <TrendingUp size={120} className="text-brand-primary/10" />
                                <div className="absolute top-10 left-10 right-10 p-6 glass-panel border-white/10">
                                    <div className="text-2xl font-bold mb-2">3.5x</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">Average ROI Increase</div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="mb-10 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">02</div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">ROI Focused Analytics.</h2>
                                <p className="text-base text-text-dim leading-relaxed mb-8 font-normal">
                                    Don't just measure 'delivered'—measure 'decided'. Our analytics suite links directly to your checkout and CRM to show you the exact revenue impact of every message sent.
                                </p>
                                <Link to="/register" className="vibrant-btn text-base px-10 py-4">
                                    See the Data Yourself <ArrowRight size={20} />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-32 border-t border-white/5 bg-white/[0.01]">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <Heart size={32} className="text-red-500 mb-10 mx-auto" fill="currentColor" />
                    <p className="text-2xl md:text-3xl font-semibold mb-12 leading-relaxed tracking-tight italic text-white/90">
                        "Transitioning to Flowzapp wasn't just a technical upgrade; it was a strategic shift in how we handle customer relations. The granularity of data and the reliability of the system are unmatched in the industry."
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-lg">Michael Henderson</div>
                        <div className="text-brand-primary text-[10px] font-bold uppercase tracking-widest mt-2">Director of Digital Strategy, Sephora</div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

const IndustryCard = ({ icon, title, desc }) => (
    <div className="p-8 glass-panel border-white/5 bg-white/[0.02] flex flex-col items-center">
        <div className="text-brand-primary mb-6">{icon}</div>
        <h3 className="text-lg font-bold mb-4 tracking-tight uppercase text-white/90">{title}</h3>
        <p className="text-sm text-text-dim font-normal leading-relaxed">{desc}</p>
    </div>
);

const CheckItem = ({ text }) => (
    <li className="flex items-center gap-3 text-sm font-medium text-text-dim">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/60" />
        {text}
    </li>
);

export default WhyFlowzapp;
