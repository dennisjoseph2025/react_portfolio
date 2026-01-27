import { motion } from 'framer-motion';

export const CharacterReveal = ({ children, delay = 0 }) => {
    const chars = String(children).split('');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {chars.map((char, index) => (
                <motion.span key={index} variants={child} style={{ display: 'inline-block' }}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};
