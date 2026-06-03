import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    return (
        <section className="py-32 px-6 bg-[#0D0D0D] relative z-10 border-t border-white/[0.02]">
            <div id="certifications" className="max-w-6xl mx-auto scroll-mt-[15vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-white/40" size={24} />
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Education</h3>
                        </div>

                        <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">Bachelor of Commerce – Computer Applications</h4>
                            <p className="text-white/60 mb-2">Mahatma Gandhi University (MGU), Kottayam</p>
                            <span className="text-sm text-white/30 font-mono">2022 – 2025</span>
                        </div>
                    </motion.div>

                    {/* Certification */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col h-full"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-white/40" size={24} />
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Certification</h3>
                        </div>

                        <div className="p-8 bg-neutral-900/30 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors relative group flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">EF SET English Certificate</h4>
                            <p className="text-white/60 mb-4">Issued: Nov 2025</p>
                            <div className="flex items-center gap-2 text-xs text-white/40 mb-4">
                                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-md border border-green-500/20">C2 Proficient</span>
                                <span>Advanced communication skills</span>
                            </div>
                            <motion.div
                                className="absolute top-8 right-8 text-white/30 group-hover:text-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <ExternalLink size={20} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
