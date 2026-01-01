
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Nova SaaS Dashboard",
    category: "Full Stack Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Tailwind"]
  },
  {
    id: 2,
    title: "Luxe E-commerce",
    category: "Next.js Storefront",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Stripe", "Prisma"]
  },
  {
    id: 3,
    title: "Crypto Wallet UI",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    tags: ["Figma", "UI/UX", "Animation"]
  },
  {
    id: 4,
    title: "Eco-Track Analytics",
    category: "Enterprise Solution",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800",
    tags: ["D3.js", "Vue", "Python"]
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-gold-500 font-black tracking-[0.2em] uppercase text-xs mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-royal-900">Digital Deliverables.</h2>
          </div>
          <p className="max-w-md text-slate-500 mt-4 md:mt-0">
            A selection of my recent works across different industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10] mb-6 shadow-2xl bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-royal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href="#" className="p-4 bg-gold-500 text-royal-900 rounded-full hover:bg-white transition-colors">
                    <Monitor size={24} />
                  </a>
                  <a href="#" className="p-4 bg-white/10 text-white rounded-full hover:bg-white hover:text-royal-900 transition-colors backdrop-blur-md">
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-black text-royal-900 group-hover:text-gold-500 transition-colors">{project.title}</h3>
                <div className="flex gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded-full uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
