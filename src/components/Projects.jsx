import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ExternalLink, ChevronRight, LayoutGrid } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-neutral-950 relative z-10 overflow-hidden border-t border-white/[0.03]">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative">
                <div id="projects" className="relative bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden backdrop-blur-sm scroll-mt-[15vh]">
                    <div className="flex flex-col lg:flex-row min-h-[700px]">

                        {/* Left Side: Navigation Sidebar */}
                        <div className="lg:w-1/4 border-r border-neutral-800/50 p-8 pt-12 flex flex-col justify-start gap-4 bg-neutral-950/20">
                            <div className="mb-12 px-2">
                                <h2 className="text-5xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                                    PROJECTS
                                </h2>
                                <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
                                    <LayoutGrid size={12} />
                                    <span>Select Project</span>
                                </div>
                            </div>
                            {projects.map((project, index) => (
                                <button
                                    key={project.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group relative text-left p-4 rounded-md transition-all duration-500 ${activeIndex === index
                                        ? 'bg-white/5 border-white/10 translate-x-2'
                                        : 'hover:bg-white/[0.02] border-transparent'
                                        } border`}
                                >
                                    <div className="relative z-10">
                                        <span className={`text-[10px] font-mono mb-1 block ${activeIndex === index ? 'text-white/40' : 'text-white/20'
                                            }`}>
                                            0{index + 1}
                                        </span>
                                        <h3 className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-white/30 group-hover:text-white/60'
                                            }`}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    {activeIndex === index && (
                                        <motion.div
                                            layoutId="activeGlow"
                                            className="absolute inset-x-0 -left-0 w-1 h-8 bg-current rounded-full m-auto"
                                            style={{ backgroundColor: project.color, left: '-2px', top: '0', bottom: '0' }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right Side: Content Area */}
                        <div className="lg:w-3/4 p-8 lg:p-14 relative overflow-hidden flex flex-col">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col h-full"
                            >
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="h-px w-8 bg-white/20" />
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                                            Project details
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                                        {activeProject.title}
                                    </h3>
                                    <p className="text-white/30 text-sm mb-4">{activeProject.tagline}</p>

                                    <p className="text-white/50 text-base leading-relaxed max-w-2xl">
                                        {activeProject.problem}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start mt-auto">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {activeProject.tech.map(t => (
                                                    <span key={t} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 text-white/40 rounded-sm border border-white/10">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold">Key features</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                                {activeProject.built.slice(0, 4).map((item, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-white/50 text-xs">
                                                        <ChevronRight size={10} className="mt-0.5 shrink-0" style={{ color: activeProject.color }} />
                                                        <span>{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {activeProject.built.length > 4 && (
                                                <p className="text-[10px] text-white/20 mt-2 font-mono">
                                                    +{activeProject.built.length - 4} more features on detail page
                                                </p>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <button
                                                onClick={() => navigate(`/project/${activeProject.slug}`)}
                                                className="px-4 py-2 text-[11px] font-mono uppercase tracking-widest font-bold rounded-lg transition-all"
                                                style={{ backgroundColor: activeProject.color, color: '#000' }}
                                            >
                                                View Full Details
                                            </button>
                                            <a
                                                href={activeProject.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-2 bg-neutral-800/50 hover:bg-white/5 rounded-lg border border-neutral-700 text-white/40 hover:text-white transition-all text-[11px] font-mono uppercase tracking-widest"
                                            >
                                                <ExternalLink size={12} />
                                                <span>Code</span>
                                            </a>
                                            <a
                                                href={activeProject.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all text-[11px] font-mono uppercase tracking-widest"
                                            >
                                                <ArrowUpRight size={12} />
                                                <span>Live</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={() => navigate(`/project/${activeProject.slug}`)}
                                            className="block relative aspect-video rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700/50 shadow-2xl group w-full text-left cursor-pointer"
                                        >
                                            <img
                                                src={activeProject.image}
                                                alt={activeProject.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white font-mono uppercase tracking-wider">
                                                    View Full Details →
                                                </span>
                                            </div>
                                        </button>

                                        <div className="pt-4 border-t border-neutral-800/50">
                                            <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">The Takeaway</h4>
                                            <p className="text-white/40 text-xs leading-relaxed italic line-clamp-2">{activeProject.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .border-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.1);
                    text-stroke: 1px rgba(255,255,255,0.1);
                }
            `}} />
        </section>
    );
};

export default Projects;