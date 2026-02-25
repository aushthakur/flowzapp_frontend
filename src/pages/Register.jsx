import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, ShieldCheck, Zap, Lock, Globe, Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-bg-dark text-text-main flex flex-col lg:flex-row transition-colors duration-500">

                {/* Left: Brand Education Side */}
                <div className="lg:w-2/5 relative flex items-center justify-center p-12 lg:p-20 overflow-hidden min-h-[500px] border-r border-white/5 bg-bg-dark">
                    {/* Background Subtle Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,136,0.05)_0%,transparent_70%)] opacity-50" />

                    <div className="relative z-20 max-w-md">
                        <Link to="/" className="inline-block mb-16 transition-transform hover:opacity-80">
                            <img src="/logo.png" alt="Flowzapp Logo" className="h-8 w-auto filter invert dark:invert-0" />
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-10 leading-tight tracking-tight uppercase"
                        >
                            Elevate Your <br /> Commerce <span className="vibrant-text">Today.</span>
                        </motion.h1>

                        <div className="space-y-12 mb-16">
                            <FeatureBrief
                                icon={<ShieldCheck size={20} />}
                                title="Official Meta Onboarding"
                                desc="Direct verified access through our automated Meta-onboarding wizard. No technical friction."
                            />
                            <FeatureBrief
                                icon={<Lock size={20} />}
                                title="Tier-1 Data Security"
                                desc="Your customer data is encrypted using AES-256 and hosted on secure, isolated cloud instances."
                            />
                            <FeatureBrief
                                icon={<Globe size={20} />}
                                title="Global Reach"
                                desc="Send messages to customers in 180+ countries with local delivery optimization."
                            />
                        </div>

                        <div className="p-8 glass-panel border-white/5 bg-white/[0.01]">
                            <p className="text-base font-normal text-text-dim italic mb-6 leading-relaxed">
                                "The onboarding was seamless. We had our first automated flow live within 40 minutes of signing up. A total game changer for our D2C brand."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=elena" alt="Elena" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Elena Rodriguez</div>
                                    <div className="text-brand-primary text-[9px] font-bold uppercase tracking-[0.2em]">CTO, VentureScale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Registration Form */}
                <div className="lg:w-3/5 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white/[0.01]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl glass-panel p-10 md:p-12 border-white/10"
                    >
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-3 tracking-tight uppercase text-white/90">Join the Infrastructure</h2>
                            <p className="text-sm text-text-dim font-normal leading-relaxed">Start your 7-day full-access trial. No credit card required.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <SocialBtn
                                text="Continue with Google"
                                icon={<img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />}
                            />
                            <SocialBtn
                                text="Continue with Facebook"
                                icon={<img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4" alt="Facebook" />}
                            />
                        </div>

                        <div className="relative mb-10 flex items-center justify-center">
                            <div className="absolute inset-x-0 h-px bg-white/5" />
                            <span className="relative z-10 px-6 bg-bg-dark text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">Corporate Registration</span>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="First Name" placeholder="John" />
                                <InputGroup label="Last Name" placeholder="Smith" />
                            </div>

                            <InputGroup label="Business Email" type="email" placeholder="john@company.com" icon={<Mail size={16} />} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <SelectGroup
                                    label="Business Niche"
                                    options={["E-Commerce", "Real Estate", "EdTech", "Healthcare", "Travel", "Retail", "Other"]}
                                />
                                <SelectGroup
                                    label="Company Size"
                                    options={["1-10 Employee", "11-50 Employee", "51-200 Employee", "201+ Employee"]}
                                />
                            </div>

                            <SelectGroup
                                label="How did you hear about us?"
                                options={["Google Search", "Social Media", "Friend/Colleague", "Online Ad", "Article/Blog", "Other"]}
                            />

                            <InputGroup label="Access Password" type="password" placeholder="••••••••" />

                            <div className="pt-4">
                                <button className="vibrant-btn w-full justify-center text-lg py-5 shadow-brand">
                                    Launch Free Trial <ArrowRight size={20} />
                                </button>
                            </div>

                            <p className="text-[10px] text-text-muted text-center leading-relaxed">
                                By signing up, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                            </p>
                        </form>

                        <p className="mt-10 text-center text-sm text-text-dim font-normal">
                            Already have an account? <Link to="/login" className="text-brand-primary font-bold hover:opacity-80 ml-1">Log In</Link>
                        </p>
                    </motion.div>
                </div>

            </div>
        </PageTransition>
    );
};

const FeatureBrief = ({ title, desc, icon }) => (
    <div className="flex gap-6">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary flex-shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold tracking-tight text-white/90 uppercase mb-2 leading-none">{title}</h3>
            <p className="text-xs text-text-dim leading-relaxed font-normal">{desc}</p>
        </div>
    </div>
);

const InputGroup = ({ label, type = "text", placeholder, icon }) => (
    <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 block ml-1">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20">{icon}</div>}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 ${icon ? 'pl-12' : 'px-4'} pr-4 text-white placeholder:text-white/10 focus:outline-none focus:border-brand-primary/40 focus:bg-white/[0.06] transition-all font-normal text-sm`}
            />
        </div>
    </div>
);

const SelectGroup = ({ label, options }) => (
    <div className="space-y-3">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 block ml-1">{label}</label>
        <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-primary/40 focus:bg-white/[0.06] transition-all font-normal text-sm appearance-none outline-none">
            <option value="" disabled selected hidden>Select option</option>
            {options.map((opt, i) => (
                <option key={i} value={opt} className="bg-bg-dark text-white">{opt}</option>
            ))}
        </select>
    </div>
);

const SocialBtn = ({ text, icon }) => (
    <button className="flex items-center gap-3 justify-center py-4 px-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-[10px] font-bold uppercase tracking-tight text-white/70">
        {icon}
        {text}
    </button>
);

export default Register;
