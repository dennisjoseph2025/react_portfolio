// Motion configuration - unified easing and durations for consistency
export const motionConfig = {
    // Easing curves
    easing: {
        smooth: [0.43, 0.13, 0.23, 0.96], // Smooth cubic
        snappy: [0.4, 0, 0.2, 1], // Material design standard
        bounce: [0.68, -0.55, 0.265, 1.55], // Elastic bounce
    },

    // Duration ranges
    duration: {
        fast: 0.2,
        normal: 0.4,
        slow: 0.6,
        verySlow: 1.0,
    },

    // Spring configurations
    spring: {
        soft: { stiffness: 100, damping: 20, mass: 1 },
        medium: { stiffness: 150, damping: 15, mass: 0.5 },
        stiff: { stiffness: 300, damping: 30, mass: 0.1 },
    },

    // Stagger delays
    stagger: {
        fast: 0.05,
        normal: 0.1,
        slow: 0.15,
    }
};

// Detect reduced motion preference
export const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Safe animation variants (respects reduced-motion)
export const safeVariants = (variants) => {
    if (prefersReducedMotion()) {
        // Return instant transitions if reduced motion is preferred
        return {
            initial: variants.initial,
            animate: { ...variants.animate, transition: { duration: 0 } },
        };
    }
    return variants;
};
