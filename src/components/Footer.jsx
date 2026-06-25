




import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span className="text-xl font-bold tracking-tighter text-white">DENNIS JOSEPH</span>
                    <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/dennisjoseph2025" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/dennisjoseph2025" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/its.denjo/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
