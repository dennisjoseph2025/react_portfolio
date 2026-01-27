import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export const VelocityMarquee = ({ children, baseVelocity = 2 }) => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Track scroll velocity
    const scrollVelocity = useSpring(
        useTransform(scrollY, [0, 100], [0, 1]),
        { stiffness: 100, damping: 30 }
    );

    // Combine base velocity with scroll velocity
    const x = useTransform(
        scrollVelocity,
        [0, 1],
        ['0%', `-${baseVelocity * 50}%`]
    );

    return (
        <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
            <motion.div
                className="inline-flex"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                <span className="inline-block pr-8">{children}</span>
                <span className="inline-block pr-8">{children}</span>
                <span className="inline-block pr-8">{children}</span>
                <span className="inline-block pr-8">{children}</span>
            </motion.div>
        </div>
    );
};
