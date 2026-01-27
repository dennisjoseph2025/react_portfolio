import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticWrapper = ({ children, className = "", strength = 0.3 }) => {
    const ref = useRef(null);
    const [isNear, setIsNear] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            // Magnetic effect within 60px
            if (distance < 60) {
                const power = 1 - distance / 60;
                x.set(distanceX * power * strength);
                y.set(distanceY * power * strength);
                setIsNear(true);
            } else {
                x.set(0);
                y.set(0);
                setIsNear(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y, strength]);

    return (
        <motion.div
            ref={ref}
            style={{ x: xSpring, y: ySpring }}
            className={`inline-block ${className}`}
        >
            <motion.div
                animate={{ scale: isNear ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};
