import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { LetterStagger } from "./LetterStagger";
import { ParallaxText } from "./MaskedReveal";

const projects = [
    {
        id: 1,
        title: "LuxeCart",
        problem: "A frontend e-commerce application focused on state management and responsive UI.",
        tech: ["React", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
        built: [
            "Component-based UI architecture",
            "Global state handling with Redux",
            "API-driven product and cart flow",
            "Responsive layout across devices"
        ],
        outcome: "Improved understanding of state management and learned to structure reusable components.",
        color: "#8B5CF6",
    },
    {
        id: 2,
        title: "DevPortfolio",
        problem: "An interactive developer portfolio showcasing motion design and spatial UI principles.",
        tech: ["React", "Framer Motion", "Tailwind CSS", "Lenis"],
        built: [
            "Scroll-driven animations",
            "Mouse-reactive interactions",
            "Parallax layering system",
            "Performance-optimized transforms"
        ],
        outcome: "Mastered Framer Motion and advanced CSS for production-grade interactions.",
        color: "#06B6D4",
    },
    {
        id: 3,
        title: "TaskMaster",
        problem: "A productivity app with drag-and-drop task management and real-time state sync.",
        tech: ["React", "Redux Toolkit", "Context API", "CSS Grid"],
        built: [
            "Drag-and-drop interface",
            "Persistent state management",
            "Category-based task organization",
            "Responsive dashboard layout"
        ],
        outcome: "Strengthened API integration patterns and complex state handling.",
        color: "#F59E0B",
    },
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

    return (
        <motion.article
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all duration-300"
            style={{
                boxShadow: `0 20px 40px -20px ${project.color}20`,
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div
                        className="w-3 h-3 rounded-full mb-4"
                        style={{ backgroundColor: project.color }}
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="p-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ArrowUpRight size={20} className="text-white/70" />
                </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full border border-white/10"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* What I Built */}
            <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-white/30 mb-3">What I Built</h4>
                <ul className="space-y-2">
                    {project.built.map((item, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2 text-white/60 text-sm"
                        >
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Outcome */}
            <div className="pt-6 border-t border-neutral-800">
                <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Outcome</h4>
                <p className="text-white/50 text-sm leading-relaxed">{project.outcome}</p>
            </div>
        </motion.article>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-6 bg-black relative z-10 overflow-hidden">
            {/* Background accent */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <ParallaxText speed={0.2}>
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                            <LetterStagger>Projects</LetterStagger>
                        </h2>
                        <p className="text-white/40 text-lg max-w-xl">
                            Real-world applications demonstrating frontend architecture and state management.
                        </p>
                    </div>
                </ParallaxText>

                {/* Project Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
