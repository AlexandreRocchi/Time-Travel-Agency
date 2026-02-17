import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Gradient Overlay - Represents the Time Vortex */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="font-sans text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            L'histoire vous attend
          </motion.p>
          
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Voyagez au delà <br />
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-stardust to-gold/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              du Présent
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="font-serif text-stardust/80 text-lg md:text-xl italic max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            "Le temps n'est pas une ligne droite, c'est un océan de souvenirs dans lequel nous vous apprenons à naviguer."
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.a 
              href="#destinations" 
              className="px-8 py-3 bg-gold text-void font-sans font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explorer les époques
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3 border border-white/20 text-white font-sans uppercase tracking-widest hover:border-gold hover:text-gold transition-colors duration-300 w-full md:w-auto inline-block text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir le manifeste
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.6, delay: 1.3 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
