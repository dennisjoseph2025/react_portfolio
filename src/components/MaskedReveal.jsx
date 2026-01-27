import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const MaskedReveal = ({ children, delay = 0 }) => {
    const words = String(children).split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = delay) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: i,
            },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden inline-flex flex-wrap"
        >
            {words.map((word, index) => (
                <div key={index} className="overflow-hidden mr-2">
                    <motion.span
                        variants={child}
                        className="inline-block"
                        style={{ willChange: 'transform' }}
                    >
                        {word}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    );
};

export const ParallaxText = ({ children, speed = 0.5 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    return (
        <motion.div
            ref={ref}
            style={{ y, willChange: 'transform' }}
        >
            {children}
        </motion.div>
    );
};
