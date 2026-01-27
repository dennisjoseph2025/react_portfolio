import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
    {
        title: "Software Developer (Apprenticeship)",
        company: "Bridgeon",
        location: "Kozhikode, Kerala",
        period: "Aug 2025 – Present",
        responsibilities: [
            "Frontend development using HTML, CSS, JavaScript, React",
            "Component-based architecture implementation",
            "Global state management with Redux Toolkit & Context API",
            "REST API integration for dynamic data flow",
            "UI refinement and cross-team collaboration"
        ],
        tech: ["React", "Redux Toolkit", "Tailwind", "REST APIs", "JavaScript"]
    }
];

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-neutral-800"
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

            <div className="bg-neutral-900/30 border border-neutral-800/50 rounded-2xl p-6 md:p-8 hover:bg-neutral-900/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                            <span className="flex items-center gap-1.5 font-medium text-white/60">
                                <Briefcase size={14} />
                                {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} />
                                {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                {exp.location}
                            </span>
                        </div>
                    </div>
                </div>

                <ul className="space-y-3 mb-8">
                    {exp.responsibilities.map((resp, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3 text-white/60 text-sm md:text-base leading-relaxed"
                        >
                            <ChevronRight size={16} className="mt-1 shrink-0 text-white/30" />
                            {resp}
                        </motion.li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/40">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 px-6 bg-black relative z-10 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                        Experience
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        Professional path and contributions in frontend excellence.
                    </p>
                </motion.div>

                <div className="mt-20">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
