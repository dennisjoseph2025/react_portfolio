import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const MagneticLink = ({ href, children, onHoverStart, onHoverEnd }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
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

      // Magnetic effect within 50px
      if (distance < 50) {
        const strength = 1 - distance / 50;
        x.set(distanceX * strength * 0.3);
        y.set(distanceY * strength * 0.3);
        if (!isHovered) {
          setIsHovered(true);
          onHoverStart?.();
        }
      } else {
        x.set(0);
        y.set(0);
        if (isHovered) {
          setIsHovered(false);
          onHoverEnd?.();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, isHovered, onHoverStart, onHoverEnd]);

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: xSpring, y: ySpring }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHoverStart?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd?.();
      }}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group inline-block"
    >
      {children}
      <motion.span
        animate={{ width: isHovered ? '100%' : '0%' }}
        className="absolute left-0 bottom-0 h-0.5 bg-white"
      />
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    {
      name: 'Details',
      dropdown: [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Logs', href: '#activity' },
      ]
    },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDetailsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDetailsOpen(false);
    }, 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-neutral-800' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter text-white">
              DENNIS Joseph
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${detailsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {detailsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-50"
                        >
                          <div className="py-2">
                            {link.dropdown.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <MagneticLink key={link.name} href={link.href}>
                    {link.name}
                  </MagneticLink>
                )
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <div className="text-white/40 text-xs uppercase tracking-widest px-3 py-4 pb-2">
                        {link.name}
                      </div>
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-300 hover:text-white block px-6 py-3 rounded-md text-base font-medium border-l-2 border-transparent hover:border-white hover:bg-white/5 transition-all"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-l-2 border-transparent hover:border-white hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
