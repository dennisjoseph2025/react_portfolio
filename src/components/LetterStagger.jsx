import { motion } from 'framer-motion';

export const LetterStagger = ({ children, delay = 0 }) => {
    const text = String(children);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay,
            },
        },
    };

    const letter = {
        hidden: {
            opacity: 0,
            rotateX: -90,
            y: 20,
        },
        visible: {
            opacity: 1,
            rotateX: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex"
            style={{ perspective: 1000 }}
        >
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    variants={letter}
                    className="inline-block"
                    style={{
                        transformOrigin: 'bottom',
                        willChange: 'transform',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>

            ))}
        </motion.span>
    );
};
