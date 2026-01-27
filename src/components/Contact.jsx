import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { VelocityMarquee } from './VelocityMarquee';
import { LetterStagger } from './LetterStagger';

const Contact = () => {
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
                        {[
                            { icon: <Github size={24} />, href: "https://github.com/dennisjoseph2025" },
                            { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/dennis-joseph-4a8903344" },
                            { icon: <Twitter size={24} />, href: "#" }
                        ].map((social, i) => (
                            <a key={i} href={social.href} target="_blank" rel="noopener" className="text-white hover:text-neutral-400">
                                <MagneticButton className="p-4 border border-neutral-800 rounded-full hover:bg-neutral-900 transition-colors">
                                    {social.icon}
                                </MagneticButton>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

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
