import React, { useState } from 'react';
import { Destination } from '../types';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  destination: Destination | null;
  onClose: () => void;
}

const BookingModal: React.FC<Props> = ({ destination, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  
  if (!destination) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-void/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div 
          className="relative w-full max-w-lg bg-slate-900 border border-gold/30 rounded-2xl p-8 shadow-2xl shadow-gold/10"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button 
            onClick={onClose}
            className="absolute top-4 right-4 text-stardust hover:text-white transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h2 
                  className="font-display text-2xl text-white mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Réservation : {destination.title}
                </motion.h2>
                <motion.p 
                  className="text-gold font-sans text-sm uppercase tracking-widest mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Année de destination : {destination.year}
                </motion.p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-xs font-sans uppercase tracking-widest text-stardust mb-2">
                      Date de départ (Temps présent)
                    </label>
                    <input 
                      type="date" 
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-xs font-sans uppercase tracking-widest text-stardust mb-2">
                      Nombre de voyageurs
                    </label>
                    <select className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors">
                      <option>1 Voyageur</option>
                      <option>2 Voyageurs</option>
                      <option>3 Voyageurs</option>
                      <option>Groupe (4+)</option>
                    </select>
                  </motion.div>

                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                     <motion.button 
                      type="submit"
                      className="w-full bg-gold text-void font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Confirmer la demande
                    </motion.button>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xs text-center text-slate-500 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    *Votre demande sera traitée par nos experts temporels sous 24h.
                  </motion.p>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                className="text-center py-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.1 
                  }}
                >
                  <Check className="w-8 h-8" />
                </motion.div>
                <motion.h3 
                  className="font-display text-2xl text-white mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Demande Reçue
                </motion.h3>
                <motion.p 
                  className="text-stardust mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  L'agence TimeTravel prépare votre itinéraire pour {destination.title}.
                  Chronos vous contactera sous peu.
                </motion.p>
                <motion.button 
                  onClick={onClose}
                  className="px-8 py-2 border border-stardust text-stardust hover:border-white hover:text-white transition-colors uppercase text-xs tracking-widest"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Fermer
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
