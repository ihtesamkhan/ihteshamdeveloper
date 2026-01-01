
import React from 'react';
import { motion } from 'framer-motion';

export const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-royal-900 text-white">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-24 h-24 flex items-center justify-center border-4 border-gold-400 rounded-full shadow-[0_0_25px_rgba(234,179,8,0.3)]"
        >
          <span className="font-heading text-4xl font-bold tracking-widest text-gold-400">E</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 font-light text-sm tracking-[0.4em] text-gold-400/80 uppercase"
        >
          Ehtesham
        </motion.p>
      </div>
    </div>
  );
};
