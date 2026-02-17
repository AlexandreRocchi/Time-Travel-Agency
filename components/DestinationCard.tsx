import React from 'react';
import { Destination } from '../types';
import { Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  destination: Destination;
  onBook: (destination: Destination) => void;
}

const DestinationCard: React.FC<Props> = ({ destination, onBook }) => {
  return (
    <motion.div 
      className="group relative h-[500px] w-full overflow-hidden rounded-xl border border-white/5 bg-void/50 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-80"
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Top Label */}
        <motion.div 
          className="absolute top-6 left-6"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <motion.span 
             className="px-3 py-1 bg-gold text-void text-xs font-bold uppercase tracking-widest rounded-sm inline-block"
             whileHover={{ scale: 1.05 }}
           >
             {destination.era}
           </motion.span>
        </motion.div>

        {/* Main Info */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h3 
            className="font-display text-3xl text-white mb-2"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {destination.title}
          </motion.h3>
          
          <div className="flex items-center gap-4 text-gold mb-4 font-sans text-sm tracking-wider">
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-4 h-4" />
              <span>{destination.year}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Tag className="w-4 h-4" />
              <span>{destination.price}</span>
            </motion.div>
          </div>

          <motion.p 
            className="text-stardust/80 font-serif text-sm mb-6 line-clamp-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {destination.description}
          </motion.p>

          <motion.button 
            onClick={(e) => {
              e.stopPropagation();
              onBook(destination);
            }}
            className="w-full py-3 border border-gold text-gold font-sans uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-void transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Réserver ce voyage
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
