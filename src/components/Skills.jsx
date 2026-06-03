import { motion } from 'framer-motion';
import { Database, GitBranch, Layout, Layers, Server } from 'lucide-react';

const skillCategories = [
    {
        title: "Backend",
        icon: Server,
        color: "#10B981",
        skills: ["Python", "Django", "Django REST Framework", "REST APIs", "Celery", "Redis", "JWT", "OAuth"]
    },
    {
        title: "Cloud & DevOps",
        icon: GitBranch,
        color: "#EF4444",
        skills: ["AWS (EC2, RDS, S3, CloudFront)", "Docker", "GitHub Actions", "Linux", "Nginx", "PgBouncer"]
    },
    {
        title: "Database",
        icon: Database,
        color: "#F59E0B",
        skills: ["PostgreSQL", "SQL", "Redis", "Database Design"]
    },
    {
        title: "Frontend",
        icon: Layout,
        color: "#8B5CF6",
        skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "State Management",
        icon: Layers,
        color: "#06B6D4",
        skills: ["Redux Toolkit", "Context API", "RTK Query"]
    }
];

const SkillCategory = ({ category, index }) => {
    const Icon = category.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
        >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                    >
                        <Icon size={20} style={{ color: category.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, i) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm cursor-default transition-colors"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section className="py-32 px-6 bg-[#0D0D0D] relative z-10 border-t border-white/[0.02]">
            <div id="skills" className="max-w-6xl mx-auto scroll-mt-[15vh]">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                        SKILLS
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl">
                        Technologies I work with, organized by domain.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
