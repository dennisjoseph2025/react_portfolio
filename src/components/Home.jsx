import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { motionConfig, prefersReducedMotion } from '../utils/motionConfig';

const techStack = ['React', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'Python', 'Django'];

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const scaleText = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section id="home" ref={ref} className="h-screen w-full relative flex flex-col justify-center px-6 overflow-hidden">
            <motion.div
                style={{ y: yText, scale: scaleText, opacity: opacityText }}
                className="max-w-[90vw] mx-auto z-10"
            >
                <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8 mb-4">
                    <h1 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.85] text-white"
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                        DENNIS
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row items-baseline gap-6">
                    <h1 className="text-[14vw] md:text-[12vw] font-black tracking-tighter leading-[0.85] text-white/30 ml-0 md:ml-[12vw]"
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
                        JOSEPH
                    </h1>
                    <div className="flex flex-col gap-2">
                        <span className="text-lg md:text-2xl font-light text-white/40 tracking-[0.3em] uppercase">
                            Software Developer
                        </span>
                        <div className="flex items-center gap-2 text-white/30 text-sm">
                            <MapPin size={14} />
                            <span>Kozhikode, Kerala</span>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-wrap gap-3 mt-8"
                >
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="px-4 py-2 text-xs uppercase tracking-widest text-white/50 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: prefersReducedMotion() ? 0 : 1,
                    duration: prefersReducedMotion() ? 0 : motionConfig.duration.slow
                }}
                className="absolute bottom-12 left-6 md:left-12 flex items-end gap-12 z-20"
            >
                <div className="max-w-xs text-neutral-400 text-sm md:text-base leading-relaxed">
                    Crafting digital experiences where motion meets function. Building scalable interfaces that feel alive.
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
