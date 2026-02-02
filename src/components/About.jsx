import { motion } from 'framer-motion';
import { MapPin, Globe, Zap, Code, Layers, RefreshCw, Target } from 'lucide-react';

const AboutBlock = ({ title, children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="group"
    >
        <h3 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">{title}</h3>
        {children}
    </motion.div>
);

const AboutItem = ({ children, icon: Icon, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        whileHover={{ x: 8 }}
        className="flex items-center gap-3 py-3 border-b border-white/5 text-white/70 hover:text-white transition-colors cursor-default"
    >
        {Icon && <Icon size={16} className="text-white/30" />}
        <span>{children}</span>
    </motion.div>
);

const IdentityTag = ({ children, delay = 0 }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        whileHover={{ scale: 1.05 }}
        className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm font-medium mr-2 mb-2"
    >
        {children}
    </motion.span>
);

const About = () => {
    return (
        <section className="py-32 px-6 bg-black relative z-10">
            <div id="about" className="max-w-6xl mx-auto scroll-mt-[15vh]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                        ABOUT
                    </h2>
                    <div className="w-24 h-1 bg-white/20" />
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* A. Identity Block */}
                    <AboutBlock title="Identity" delay={0}>
                        <div className="flex flex-wrap">
                            <IdentityTag delay={0.1}>Software Developer</IdentityTag>
                            <IdentityTag delay={0.15}>React-focused</IdentityTag>
                            <IdentityTag delay={0.2}>Expanding into Backend</IdentityTag>
                            <IdentityTag delay={0.25}>Python / Django</IdentityTag>
                            <IdentityTag delay={0.3}>Scalable UI Systems</IdentityTag>
                        </div>
                    </AboutBlock>

                    {/* B. What I Do */}
                    <AboutBlock title="What I Do" delay={0.1}>
                        <AboutItem icon={Code} delay={0.1}>Build responsive, production-ready UIs</AboutItem>
                        <AboutItem icon={Layers} delay={0.15}>Create reusable React components</AboutItem>
                        <AboutItem icon={Zap} delay={0.2}>Manage global state with Redux Toolkit</AboutItem>
                        <AboutItem icon={Globe} delay={0.25}>Integrate REST APIs into frontend</AboutItem>
                        <AboutItem icon={RefreshCw} delay={0.3}>Improve UI consistency & performance</AboutItem>
                    </AboutBlock>

                    {/* C. How I Work */}
                    <AboutBlock title="How I Work" delay={0.2}>
                        <AboutItem delay={0.1}>Learn by building</AboutItem>
                        <AboutItem delay={0.15}>Fundamentals before frameworks</AboutItem>
                        <AboutItem delay={0.2}>Clean structure over visual noise</AboutItem>
                        <AboutItem delay={0.25}>Improve through iteration</AboutItem>
                    </AboutBlock>

                    {/* D. Current Focus */}
                    <AboutBlock title="Current Focus" delay={0.3}>
                        <AboutItem icon={Target} delay={0.1}>Deepening React & state management</AboutItem>
                        <AboutItem icon={Target} delay={0.15}>Strengthening backend fundamentals</AboutItem>
                        <AboutItem icon={Target} delay={0.2}>Writing cleaner, scalable code</AboutItem>
                        <AboutItem icon={Target} delay={0.25}>Building real-world projects</AboutItem>
                    </AboutBlock>

                    {/* E. Quick Facts */}
                    <AboutBlock title="Quick Facts" delay={0.4}>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-white/60">
                                <MapPin size={16} />
                                <span>Kozhikode, Kerala</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <span className="w-4 h-4 rounded-full bg-green-500/50 flex items-center justify-center">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                </span>
                                <span>On-site developer</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <Globe size={16} />
                                <span>English communication</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/60">
                                <Zap size={16} />
                                <span>Active learner & builder</span>
                            </div>
                        </div>
                    </AboutBlock>
                </div>
            </div>
        </section>
    );
};

export default About;
