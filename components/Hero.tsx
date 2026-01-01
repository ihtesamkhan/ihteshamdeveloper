
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-royal-950">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-royal-950 to-royal-950" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow delay-700" />
        
        {/* Modern Technical Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-500 backdrop-blur-sm"
          >
            <Terminal size={14} className="animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Ready for new challenges</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-9xl font-heading font-black text-white leading-[0.85] mb-6 tracking-tighter">
              EHTE<span className="text-gold-500 text-glow">SHAM</span>
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-3xl text-gray-400 font-light tracking-wide uppercase mt-6"
          >
            Web Developer <span className="text-gold-500 mx-2">•</span> UI Designer
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a 
              href="#portfolio"
              className="group relative px-12 py-5 bg-gold-500 text-royal-900 font-black tracking-widest transition-all duration-300 uppercase text-xs rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <Sparkles size={14} />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="#contact"
              className="px-12 py-5 border border-white/20 text-white font-black tracking-widest hover:bg-white hover:text-royal-900 transition-all duration-300 uppercase text-xs rounded-full backdrop-blur-md"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-gold-500/30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
