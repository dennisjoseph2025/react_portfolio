import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, ChevronRight, LayoutGrid } from "lucide-react";
import { LetterStagger } from "./LetterStagger";
import { ParallaxText } from "./MaskedReveal";

const projects = [

    {
        id: 1,
        title: "EduCom.",
        problem: "Robust student management system for educational institutions to track students, courses, and attendance.",
        tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
        built: [
            "User Authentication System",
            "Record management",
            "Responsive Dashboard",
            "Attendance Tracking"
        ],
        outcome: "Deepened knowledge in full-stack Python development and database management.",
        color: "#06B6D4",
        github: "https://github.com/dennisjoseph2025/student_management_django",
        demo: "https://student-management-django-omega.vercel.app/",
        image: "/projects/student_management.png"
    },
    {
        id: 2,
        title: "Portfolio",
        problem: "Interactive career portfolio designed to showcase skills and projects with a premium aesthetic.",
        tech: ["React", "Framer Motion", "Tailwind CSS", "Lenis"],
        built: [
            "Parallax scroll effects",
            "Dynamic project grid",
            "Interactive contact form",
            "Custom cursor logic"
        ],
        outcome: "Focused on high-end UI/UX principles and interactive motion design.",
        color: "#F59E0B",
        github: "https://github.com/dennisjoseph2025/React_Portfolio",
        demo: "https://dennis-r.vercel.app/",
        image: "/projects/Portfolio.png"
    },
    {
        id: 3,
        title: "Denjo-C",
        problem: "Modern e-commerce platform with a focus on seamless shopping experience and premium product presentation.",
        tech: ["React", "Vite", "Tailwind CSS", "Redux Toolkit"],
        built: [
            "Dynamic product listing",
            "Shopping cart logic",
            "Responsive Slider Navigation",
            "Premium Visual Aesthetic"
        ],
        outcome: "Enhanced frontend architectural skills and state management implementation.",
        color: "#8B5CF6",
        github: "https://github.com/dennisjoseph2025/React-ECommerce-Website",
        demo: "https://react-e-commerce-website-omega.vercel.app/",
        image: "/projects/E_Commerce.png"
    },
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-black relative z-10 overflow-hidden">
            {/* Background accent */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="max-w-7xl mx-auto relative">
                {/* Main Showcase Container - Sharper edges (rounded-lg) */}
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

                        {/* Right Side: content Area */}
                        <div className="lg:w-3/4 p-8 lg:p-14 relative overflow-hidden flex flex-col">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="flex flex-col h-full"
                                >
                                    {/* Top: Header Info */}
                                    <div className="mb-12">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="h-px w-8 bg-white/20" />
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                                                Project details
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                            {activeProject.title}
                                        </h3>

                                        <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                                            {activeProject.problem}
                                        </p>
                                    </div>

                                    {/* Bottom Grid */}
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-end mt-auto">
                                        {/* info Box (Bottom Left) */}
                                        <div className="space-y-10 pb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {activeProject.tech.map(t => (
                                                    <span key={t} className="px-3 py-1 text-xs font-mono bg-white/5 text-white/50 rounded-sm border border-white/10">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4 font-bold">Key features</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        {activeProject.built.map((item, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-white/50 text-sm italic">
                                                                <ChevronRight size={12} className="text-white/20" />
                                                                <span>{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="pt-8 border-t border-neutral-800/50">
                                                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold">The Takeaway</h4>
                                                    <p className="text-white/40 text-sm leading-relaxed italic">{activeProject.outcome}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image showcase (Bottom Right) */}
                                        <div className="flex flex-col gap-4">
                                            <a
                                                href={activeProject.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="block relative aspect-video rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700/50 shadow-2xl group"
                                            >
                                                <img
                                                    src={activeProject.image}
                                                    alt={activeProject.title}
                                                    className="w-full h-full object-cover transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>

                                            {/* Link Icons Under Image */}
                                            <div className="flex justify-end gap-3 px-2">
                                                <a
                                                    href={activeProject.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-2 p-3 bg-neutral-900/50 hover:bg-white/5 rounded-lg border border-neutral-800 text-white/40 hover:text-white transition-all text-xs font-mono uppercase tracking-widest"
                                                >
                                                    <ExternalLink size={14} />
                                                    <span>Code</span>
                                                </a>
                                                <a
                                                    href={activeProject.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center gap-2 p-3 bg-white text-black rounded-lg hover:scale-[1.02] transition-all text-xs font-mono uppercase tracking-widest font-bold"
                                                >
                                                    <ArrowUpRight size={14} />
                                                    <span>Launch</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for border-text stroke */}
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
