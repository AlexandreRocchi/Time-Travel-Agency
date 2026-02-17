import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-void border-t border-white/5 py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h4 
            className="font-display text-xl font-bold text-white mb-2"
            whileHover={{ scale: 1.05, color: "#D4AF37" }}
            transition={{ duration: 0.3 }}
          >
            TIMETRAVEL AGENCY
          </motion.h4>
          <p className="text-stardust/50 text-sm font-sans">
            © 2084 Tous droits réservés. Voyagez à vos risques et périls.
          </p>
        </motion.div>
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a 
            href="#" 
            className="text-stardust/50 hover:text-gold text-sm uppercase tracking-widest transition-colors"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            Mentions Légales
          </motion.a>
          <motion.a 
            href="#" 
            className="text-stardust/50 hover:text-gold text-sm uppercase tracking-widest transition-colors"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
          >
            Sécurité Temporelle
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
