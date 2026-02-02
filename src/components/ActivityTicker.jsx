import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Activity } from 'lucide-react';

const activityLog = [
    { type: 'learned', text: 'Completed Student Management Platform Using Django', date: 'Today' },
    { type: 'learning', text: 'Completed Advanced React Portfolio Using Antigravity AI', date: '1 day ago' },
    { type: 'learned', text: 'Completed SQL Queries and Database Management Using Postgresql', date: '1 week ago' },
    { type: 'learning', text: 'Deep dive into Python/Django Backend Development', date: '2 weeks ago' },
    { type: 'learned', text: 'Mastered Redux Toolkit & RTK Query', date: '2 months ago' },
    { type: 'project', text: 'Shipped Denjo-C E-Commerce Frontend with API Integration', date: '3 months ago' },
    { type: 'milestone', text: 'Intern at Bridgeon Solutions - Frontend Development', date: 'Current' },
];

const getTypeColor = (type) => {
    switch (type) {
        case 'learning': return 'text-yellow-400';
        case 'learned': return 'text-blue-400';
        case 'project': return 'text-purple-400';
        case 'milestone': return 'text-green-400';
        case 'breakthrough': return 'text-amber-400';
        default: return 'text-white/50';
    }
};

const getTypePrefix = (type) => {
    switch (type) {
        case 'learning': return '[LEARNING]';
        case 'learned': return '[LEARNED]';
        case 'project': return '[PROJECT]';
        case 'milestone': return '[MILESTONE]';
        case 'breakthrough': return '[BREAKTHROUGH]';
        default: return '[LOG]';
    }
};

export const ActivityTicker = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

    return (
        <motion.section
            style={{ opacity }}
            className="py-32 px-6 bg-black relative z-10 border-t border-b border-neutral-900"
        >
            <div id="activity" className="max-w-7xl mx-auto scroll-mt-[15vh]">
                <div className="flex items-center gap-3 mb-8">
                    <Terminal size={20} className="text-green-400" />
                    <h3 className="text-xl font-mono text-white/80 uppercase tracking-wider">
                        Dev.Log
                    </h3>
                    <div className="flex items-center gap-2 ml-auto">
                        <Activity size={14} className="text-green-400 animate-pulse" />
                        <span className="text-xs text-green-400 font-mono">LIVE</span>
                    </div>
                </div>

                {/* Terminal-style container */}
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 font-mono text-sm overflow-hidden">
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-neutral-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-neutral-500 ml-4 text-xs">dennis@portfolio:~</span>
                    </div>

                    <div className="space-y-3 max-h-[300px] overflow-y-auto scrollbar-hide">
                        {activityLog.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <span className="text-neutral-600 shrink-0">{`>`}</span>
                                <span className={`shrink-0 ${getTypeColor(item.type)}`}>
                                    {getTypePrefix(item.type)}
                                </span>
                                <span className="text-white/70">{item.text}</span>
                                <span className="text-neutral-600 ml-auto shrink-0 text-xs">
                                    {item.date}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center gap-2">
                        <span className="text-green-400">{`>`}</span>
                        <span className="text-white/50">Building the future...</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-2 h-4 bg-green-400"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
