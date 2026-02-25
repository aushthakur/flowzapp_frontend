import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: 'Product',
            links: [
                { name: 'Features', path: '/features' },
                { name: 'Integrations', path: '/integration' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Docs', path: '/documentation' },
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/why-flowzapp' },
                { name: 'Careers', path: '#' },
                { name: 'Blog', path: '#' },
                { name: 'Contact', path: '#' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' },
                { name: 'Cookie Policy', path: '#' },
                { name: 'Security', path: '#' },
            ]
        }
    ];

    return (
        <footer className="bg-bg-dark border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="inline-block mb-8 hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="Flowzapp Logo" className="h-8 w-auto" />
                        </Link>
                        <p className="text-text-dim text-lg leading-relaxed mb-8 max-w-sm">
                            The world's most intuitive WhatsApp marketing platform. Scale your business with powerful automation and AI-driven conversions.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={20} />} href="#" />
                            <SocialIcon icon={<Twitter size={20} />} href="#" />
                            <SocialIcon icon={<Instagram size={20} />} href="#" />
                            <SocialIcon icon={<Linkedin size={20} />} href="#" />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="grid grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-text-main">Platform</h4>
                                <ul className="space-y-4 text-sm text-text-dim">
                                    <li><Link to="/features" className="hover:text-brand-primary transition-colors">Features</Link></li>
                                    <li><Link to="/pricing" className="hover:text-brand-primary transition-colors">Pricing</Link></li>
                                    <li><Link to="/integration" className="hover:text-brand-primary transition-colors">Integrations</Link></li>
                                    <li><Link to="/why-flowzapp" className="hover:text-brand-primary transition-colors">Why Flowzapp</Link></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-text-main">Resource</h4>
                                <ul className="space-y-4 text-sm text-text-dim">
                                    <li><Link to="/documentation" className="hover:text-brand-primary transition-colors">Documentation</Link></li>
                                    <li><Link to="/free-trial" className="hover:text-brand-primary transition-colors">Sandbox Trial</Link></li>
                                    <li><Link to="/register" className="hover:text-brand-primary transition-colors">Client Portal</Link></li>
                                    <li><Link to="/login" className="hover:text-brand-primary transition-colors">Internal Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-sm font-medium text-text-muted">
                        <span>© {currentYear} Flowzapp Inc.</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>Built for high-scale growth.</span>
                    </div>

                    <div className="flex items-center gap-3 glass-panel px-4 py-2 bg-white/5 border-white/10">
                        <Mail size={16} className="text-brand-primary" />
                        <span className="text-sm font-bold text-white">hello@flowzapp.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-dim hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300"
    >
        {icon}
    </a>
);

export default Footer;
