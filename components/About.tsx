
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="Ehtesham Workspace" 
                className="w-full h-auto object-cover aspect-[4/5] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-royal-900/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* Visual background elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/20 rounded-3xl -z-10" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-royal-900/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-[1px] bg-gold-500"></div>
              <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-[10px]">The Developer</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-black text-royal-900 mb-8 leading-[1.1]">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-800 to-royal-950">Logic & Aesthetics.</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I'm <span className="font-bold text-royal-900">Ehtesham</span>, a senior-level engineer with a designer's eye. I specialize in building scalable web architectures that deliver world-class user experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Layout className="text-gold-500" />, title: "Full Stack UI", text: "React/Next.js Expert" },
                { icon: <Smartphone className="text-gold-500" />, title: "Adaptive Layouts", text: "Mobile-first philosophy" },
                { icon: <Database className="text-gold-500" />, title: "Data Systems", text: "PostgreSQL & MongoDB" },
                { icon: <Zap className="text-gold-500" />, title: "Optimization", text: "Core Web Vitals Focus" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 transition-all shadow-sm hover:shadow-md">
                  <div className="shrink-0 p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-royal-900 text-sm">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-3 font-bold text-royal-900 hover:text-gold-600 transition-colors uppercase text-xs tracking-widest">
              Learn about my process
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
