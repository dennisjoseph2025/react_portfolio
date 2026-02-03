import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, FileText, Download, X, Eye } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { VelocityMarquee } from './VelocityMarquee';
import { LetterStagger } from './LetterStagger';

const Contact = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const socialLinks = [
        { icon: <Github size={24} />, href: "https://github.com/dennisjoseph2025" },
        { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/dennisjoseph2025" },
        {
            icon: <FileText size={24} />,
            onClick: (e) => {
                e.preventDefault();
                setIsResumeOpen(true);
            }
        },
    ];

    return (
        <section id="contact" className="min-h-screen bg-black px-6 py-32 flex flex-col justify-between relative z-10">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-20">
                    <h2 className="text-[10vw] font-black text-white leading-[0.8] tracking-tighter mb-8">
                        <LetterStagger>LET'S</LetterStagger>
                        <br />
                        <LetterStagger delay={0.3}>Connect</LetterStagger>
                    </h2>
                    <p className="text-2xl text-neutral-400 max-w-xl leading-relaxed">
                        I'm currently available for freelance work and full-time roles. If you have a project that needs some creative motion, let's talk.
                    </p>
                </div>

                <div className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <a href="mailto:dennisjoseph2025@gmail.com" className="group flex items-center gap-4 hover:text-neutral-400 transition-colors">
                        <MagneticButton className="p-4 bg-white rounded-full text-black group-hover:scale-110 transition-transform duration-300">
                            <Mail size={32} />
                        </MagneticButton>
                        <span className="text-white font-bold break-all" style={{ fontSize: 'clamp(1.25rem, 4vw, 3rem)' }}>
                            dennisjoseph2025@gmail.com
                        </span>
                    </a>

                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <div key={i}>
                                {social.href ? (
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-white hover:text-neutral-400"
                                    >
                                        <MagneticButton className="p-4 border border-neutral-800 rounded-full hover:bg-neutral-900 transition-colors">
                                            {social.icon}
                                        </MagneticButton>
                                    </a>
                                ) : (
                                    <button
                                        onClick={social.onClick}
                                        className="text-white hover:text-neutral-400"
                                    >
                                        <MagneticButton className="p-4 border border-neutral-800 rounded-full hover:bg-neutral-900 transition-colors">
                                            {social.icon}
                                        </MagneticButton>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Resume Selection Modal */}
            <AnimatePresence>
                {isResumeOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsResumeOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-neutral-900 border border-neutral-800 p-8 rounded-3xl max-w-sm w-full shadow-2xl"
                        >
                            <button
                                onClick={() => setIsResumeOpen(false)}
                                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-bold text-white mb-6">Resume Options</h3>

                            <div className="grid gap-4">
                                <a
                                    href="/Dennis Joseph.pdf"
                                    target="_blank"
                                    rel="noopener"
                                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group"
                                    onClick={() => setIsResumeOpen(false)}
                                >
                                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white group-hover:text-black transition-colors">
                                        <Eye size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">View Online</div>
                                        <div className="text-sm text-neutral-400">Opens in new tab</div>
                                    </div>
                                </a>

                                <a
                                    href="/Dennis Joseph.pdf"
                                    download="Dennis_Joseph_Resume.pdf"
                                    className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all group"
                                    onClick={() => setIsResumeOpen(false)}
                                >
                                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white group-hover:text-black transition-colors">
                                        <Download size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Download PDF</div>
                                        <div className="text-sm text-neutral-400">Save to your device</div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Velocity Marquee Footer */}
            <div className="mt-20 border-t border-neutral-800 pt-8 overflow-hidden">
                <VelocityMarquee baseVelocity={2}>
                    <span className="text-6xl md:text-8xl font-black text-white/5 tracking-tighter uppercase">
                        DENNIS JOSEPH • SOFTWARE DEVELOPER • REACT • MOTION DESIGN •
                    </span>
                </VelocityMarquee>
            </div>

            <div className="flex justify-between items-end text-neutral-600 uppercase text-sm font-medium tracking-widest pt-8">
                <span>© 2026 Dennis Joseph</span>
                <span>Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</span>
            </div>
        </section>
    );
};

export default Contact;
