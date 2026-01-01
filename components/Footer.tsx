
import React from 'react';
import { Github, Twitter, Linkedin, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-950 text-white py-20 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-16">
          <div className="space-y-6">
            <span className="font-heading font-black text-3xl tracking-tighter">
              EHTE<span className="text-gold-500">SHAM</span>
            </span>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Designing and developing digital solutions that solve real-world problems through innovation and precision.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-royal-900 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest flex items-center gap-2">
            Built with <Heart size={12} className="text-gold-500 fill-gold-500" /> by Ehtesham &copy; 2025
          </p>
          <a href="#" className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
            Source Code <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};
