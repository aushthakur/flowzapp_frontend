import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2, ArrowRight, ShieldCheck, Star, Shield, Clock, Users, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
    return (
        <PageTransition>
            <section className="min-h-screen py-32 relative overflow-hidden flex items-center bg-bg-dark text-text-main">
                {/* Immersive Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.05)_0%,transparent_70%)] pointer-events-none opacity-50" />
                <div className="absolute top-0 right-0 p-12 opacity-5 text-brand-primary -rotate-12 translate-x-1/3 -translate-y-1/3">
                    <Zap size={600} strokeWidth={0.5} />
                </div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">

                        {/* Left Column: Education */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8"
                            >
                                <Star size={12} className="text-brand-primary" fill="currentColor" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary">Full Professional Access</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight uppercase text-text-main">
                                Experience the <br /><span className="vibrant-text">Future of Flows.</span>
                            </h1>

                            <p className="text-base text-text-dim mb-12 font-normal leading-relaxed max-w-xl">
                                We're not just offering a trial; we're giving you a dedicated development sandbox to prove the ROI of WhatsApp marketing within your specific business model. No credit card, no risk, total transparency.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <TrialPoint
                                    icon={<Shield size={18} />}
                                    title="Verified API"
                                    desc="Instantly link your official meta business account."
                                />
                                <TrialPoint
                                    icon={<Clock size={18} />}
                                    title="Real-Time Data"
                                    desc="Experience 100% of our tracking and dashboard capabilities."
                                />
                                <TrialPoint
                                    icon={<Zap size={18} />}
                                    title="Active Builder"
                                    desc="Deploy your first 5 complex flows immediately."
                                />
                                <TrialPoint
                                    icon={<Users size={18} />}
                                    title="Team Shared"
                                    desc="Invite up to 3 team members to test the unified inbox."
                                />
                            </div>
                        </div>

                        {/* Right Column: CTA Form Glass Box */}
                        <div className="lg:w-1/2 w-full max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="glass-panel p-10 lg:p-12 border-white/10 bg-white/[0.01] shadow-2xl relative"
                            >
                                <h2 className="text-2xl font-bold mb-6 tracking-tight uppercase text-white/90 leading-none">Activate Sandbox</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <SocialBtn
                                        text="Google Account"
                                        icon={<img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />}
                                    />
                                    <SocialBtn
                                        text="Facebook ID"
                                        icon={<img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4" alt="Facebook" />}
                                    />
                                </div>

                                <form className="space-y-6">
                                    <InputGroup label="Work Email" placeholder="you@company.com" icon={<Mail size={16} />} />

                                    <div className="grid grid-cols-2 gap-4 text-left">
                                        <SelectGroup
                                            label="Industry"
                                            options={["E-Commerce", "Finance", "Education", "Travel", "Other"]}
                                        />
                                        <SelectGroup
                                            label="Team Size"
                                            options={["Self", "2-10", "11-50", "50+"]}
                                        />
                                    </div>

                                    <SelectGroup
                                        label="Discovery Source"
                                        options={["Google", "LinkedIn", "Referral", "Other"]}
                                    />

                                    <div className="space-y-6">
                                        <Link to="/register" className="vibrant-btn w-full justify-center text-lg py-5 shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)]">
                                            Launch My 7-Day Trial <ArrowRight size={20} />
                                        </Link>
                                        <div className="text-center">
                                            <Link to="/pricing" className="text-text-muted hover:text-brand-primary transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[var(--glass-border)] pb-1">View Full Operational Tiers</Link>
                                        </div>
                                    </div>
                                </form>

                                <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-8 text-center text-text-muted uppercase font-bold text-[9px] tracking-widest">
                                    <div>No Credit Card Required</div>
                                    <div>Instant API Access</div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

const TrialPoint = ({ title, desc, icon }) => (
    <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-tight">{title}</h4>
            <p className="text-xs text-text-dim font-normal leading-relaxed">{desc}</p>
        </div>
    </div>
);

const InputGroup = ({ label, type = "text", placeholder, icon }) => (
    <div className="space-y-2 text-left">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 block ml-1">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">{icon}</div>}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 ${icon ? 'pl-12' : 'px-4'} pr-4 text-white focus:outline-none focus:border-brand-primary/40 transition-all text-sm`}
            />
        </div>
    </div>
);

const SelectGroup = ({ label, options }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 block ml-1">{label}</label>
        <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-primary/40 appearance-none text-sm">
            <option value="" disabled selected hidden>Select</option>
            {options.map((opt, i) => (
                <option key={i} value={opt} className="bg-bg-dark">{opt}</option>
            ))}
        </select>
    </div>
);

const SocialBtn = ({ text, icon }) => (
    <button className="flex items-center gap-3 justify-center py-4 px-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all text-[10px] font-bold uppercase tracking-tight text-white/70">
        {icon}
        {text}
    </button>
);

export default FreeTrial;
