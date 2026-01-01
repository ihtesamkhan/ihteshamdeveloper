
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Figma, Server, Layers, Cpu, Database, Binary } from 'lucide-react';

const SkillCard: React.FC<{ name: string; level: number; icon: React.ReactNode; delay: number }> = ({ name, level, icon, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative p-8 bg-royal-900 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-gold-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
    >
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity scale-150 group-hover:scale-110 transition-transform duration-700">
        {icon}
      </div>
      
      <div className="relative z-10">
        <div className="p-4 bg-white/5 w-fit rounded-2xl text-gold-500 mb-8 group-hover:bg-gold-500 group-hover:text-royal-900 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{name}</h3>
        
        <div className="mt-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Expertise Level</span>
            <span className="text-sm font-black text-gold-500">{level}%</span>
          </div>
          <div className="bg-white/5 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-gold-600 to-gold-400 relative"
            >
              <div className="absolute top-0 right-0 h-full w-20 bg-white/20 blur-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const stack = [
    { name: "Frontend Development", level: 98, icon: <Code2 size={24} /> },
    { name: "UX Engineering", level: 94, icon: <Figma size={24} /> },
    { name: "Node.js & API Design", level: 90, icon: <Server size={24} /> },
    { name: "React Ecosystem", level: 96, icon: <Layers size={24} /> },
    { name: "Database Systems", level: 85, icon: <Database size={24} /> },
    { name: "Cloud Architecture", level: 82, icon: <Binary size={24} /> },
  ];

  return (
    <section id="skills" className="py-32 bg-royal-950 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-500/5 rounded-full blur-[150px] -mr-80 -mt-80" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full blur-[150px] -ml-80 -mb-80" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-[1px] bg-gold-500"></div>
            <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px]">Technical Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
            Mastering the modern <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">digital landscape.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            My stack is carefully curated for performance, maintainability, and security. I don't just use tools; I architect solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stack.map((item, index) => (
            <SkillCard key={index} {...item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
