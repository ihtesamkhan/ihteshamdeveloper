
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Code, Trophy, Users } from 'lucide-react';

export const Achievements: React.FC = () => {
  const stats = [
    { icon: <Code />, count: "120+", label: "Projects Completed", color: "text-gold-500" },
    { icon: <Users />, count: "45+", label: "Happy Clients", color: "text-blue-400" },
    { icon: <Coffee />, count: "2K+", label: "Cups of Coffee", color: "text-orange-400" },
    { icon: <Trophy />, count: "12", label: "Award Wins", color: "text-green-400" }
  ];

  return (
    <section className="py-20 bg-royal-900 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className={`flex justify-center mb-4 ${stat.color} opacity-80`}>
                {React.cloneElement(stat.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.count}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
