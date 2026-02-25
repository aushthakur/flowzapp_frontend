import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Lock, ShieldCheck, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-bg-dark text-text-main flex flex-col lg:flex-row transition-colors duration-500">

                {/* Left Side: Brand Context (Hidden on mobile) */}
                <div className="lg:w-2/5 relative hidden lg:flex items-center justify-center p-20 overflow-hidden border-r border-[var(--glass-border)] bg-bg-dark">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,136,0.05)_0%,transparent_70%)] opacity-50" />

                    <div className="relative z-20 max-w-md">
                        <Link to="/" className="inline-block mb-16 transition-transform hover:opacity-80">
                            <img src="/logo.png" alt="Flowzapp Logo" className="h-10 w-auto" />
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-10 leading-tight tracking-tight uppercase"
                        >
                            Welcome Back <br /> to <span className="vibrant-text">Flowzapp.</span>
                        </motion.h1>

                        <div className="space-y-10 mb-16">
                            <FeatureLink title="Real-time Analytics" desc="Monitor your flow performance as it happens across all timezones." />
                            <FeatureLink title="Team Collaboration" desc="Seamlessly transition between individual and group chat management." />
                        </div>

                        <div className="p-8 glass-panel border-[var(--glass-border)] bg-white/[0.01]">
                            <p className="text-sm font-normal text-text-dim italic leading-relaxed">
                                "Accessing the dashboard is like entering the cockpit of a performance engine. Everything is where it needs to be."
                            </p>
                            <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-brand-primary">Mark Jenkins, CEO @ DataSync</div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="lg:w-3/5 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-white/[0.01]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-lg glass-panel p-10 md:p-12 border-[var(--glass-border)]"
                    >
                        <div className="mb-10 text-center lg:text-left">
                            <h2 className="text-2xl font-bold mb-3 tracking-tight uppercase text-text-main">Access Dashboard</h2>
                            <p className="text-sm text-text-dim font-normal">Enter your credentials to manage your WhatsApp infrastructure.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <SocialBtn
                                text="Google Auth"
                                icon={<img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />}
                            />
                            <SocialBtn
                                text="Facebook Auth"
                                icon={<img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4" alt="Facebook" />}
                            />
                        </div>

                        <div className="relative mb-10 flex items-center justify-center">
                            <div className="absolute inset-x-0 h-px bg-[var(--glass-border)]" />
                            <span className="relative z-10 px-6 bg-bg-dark text-[9px] font-bold uppercase tracking-[0.4em] text-text-muted whitespace-nowrap">Secure Login</span>
                        </div>

                        <form className="space-y-6">
                            <InputBox label="Work Email" type="email" placeholder="you@company.com" icon={<Mail size={16} />} />
                            <InputBox label="Secure Password" type="password" placeholder="••••••••" icon={<Lock size={16} />} />

                            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--glass-border)] bg-white/5 checked:bg-brand-primary" />
                                    <span className="text-text-dim group-hover:text-text-main transition-colors">Remember Me</span>
                                </label>
                                <a href="#" className="text-brand-primary hover:opacity-80 transition-all">Forgot Password?</a>
                            </div>

                            <button className="vibrant-btn w-full justify-center text-lg py-5 shadow-brand">
                                Log In to Flowzapp <ArrowRight size={20} />
                            </button>
                        </form>

                        <p className="mt-10 text-center text-sm text-text-dim font-normal">
                            New to our infrastructure? <Link to="/register" className="text-brand-primary font-bold hover:opacity-80 ml-1">Create Account</Link>
                        </p>
                    </motion.div>
                </div>

            </div>
        </PageTransition>
    );
};

const FeatureLink = ({ title, desc }) => (
    <div className="flex gap-4">
        <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
        <div>
            <h3 className="text-sm font-bold tracking-tight text-text-main uppercase mb-1">{title}</h3>
            <p className="text-xs text-text-dim leading-relaxed font-normal">{desc}</p>
        </div>
    </div>
);

const InputBox = ({ label, type, placeholder, icon }) => (
    <div className="space-y-2 text-left">
        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted block ml-1">{label}</label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/40">{icon}</div>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/[0.02] border border-[var(--glass-border)] rounded-xl py-4 pl-12 pr-4 text-text-main placeholder:text-text-muted/20 focus:outline-none focus:border-brand-primary/40 focus:bg-white/[0.04] transition-all font-normal text-sm"
            />
        </div>
    </div>
);

const SocialBtn = ({ text, icon }) => (
    <button className="flex items-center gap-3 justify-center py-4 px-4 rounded-xl bg-white/[0.02] border border-[var(--glass-border)] hover:bg-white/[0.05] transition-all text-[10px] font-bold uppercase tracking-tight text-text-dim">
        {icon}
        {text}
    </button>
);

export default Login;
