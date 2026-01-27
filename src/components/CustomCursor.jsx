import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 20);
            cursorY.set(e.clientY - 20);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target instanceof HTMLAnchorElement ||
                target instanceof HTMLButtonElement ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(isInteractive);

            // Check if hovering over text or images
            if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'IMG') {
                setCursorVariant('distort');
            } else {
                setCursorVariant('default');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* SVG filter for distortion effect */}
            <svg className="hidden">
                <defs>
                    <filter id="liquid-distortion">
                        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="turbulence">
                            <animate attributeName="baseFrequency" dur="3s" values="0.01;0.02;0.01" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" />
                    </filter>
                </defs>
            </svg>

            {/* Main cursor with liquid effect */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isPointer ? 1.8 : 1,
                        opacity: cursorVariant === 'distort' ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="w-full h-full rounded-full border-2 border-white bg-white/30 backdrop-blur-sm"
                    style={{
                        filter: cursorVariant === 'distort' ? 'url(#liquid-distortion)' : 'none',
                        boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                    }}
                />
            </motion.div>

            {/* Outer ring for depth */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    animate={{
                        scale: isPointer ? 2.2 : 1.3,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-full rounded-full border border-white/20"
                />
            </motion.div>
        </>
    );
};
