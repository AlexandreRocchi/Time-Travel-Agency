import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import ChatWidget from './components/ChatWidget';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import { DESTINATIONS } from './constants';
import { Destination } from './types';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <div className="min-h-screen bg-void text-stardust font-sans selection:bg-gold selection:text-void">
      <Navbar />
      
      <main>
        <Hero />

        {/* Destinations Gallery Section */}
        <section id="destinations" className="py-24 px-6 md:px-12 relative">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="text-gold font-sans text-sm uppercase tracking-[0.2em] block mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Notre Collection
              </motion.span>
              <motion.h2 
                className="font-display text-4xl md:text-5xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Destinations Exclusives
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gold mx-auto mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESTINATIONS.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <DestinationCard 
                    destination={dest} 
                    onBook={setSelectedDestination}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-20">
             <motion.div 
               className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[100px]"
               animate={{ 
                 x: [0, 50, 0],
                 y: [0, 30, 0]
               }}
               transition={{ 
                 duration: 20,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             />
             <motion.div 
               className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]"
               animate={{ 
                 x: [0, -50, 0],
                 y: [0, -30, 0]
               }}
               transition={{ 
                 duration: 25,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
             />
          </div>
        </section>

        {/* Feature/USP Section */}
        <section id="about" className="py-24 bg-slate-900/50 border-y border-white/5">
           <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.h3 
                  className="font-display text-xl text-gold mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Sécurité Absolue
                </motion.h3>
                <p className="font-serif text-stardust/70">Nos bulles de stase quantique garantissent une intégrité physique totale, même face à un T-Rex.</p>
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <motion.h3 
                  className="font-display text-xl text-gold mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Immersion Totale
                </motion.h3>
                <p className="font-serif text-stardust/70">Costumes, dialectes, monnaie : nous nous occupons de chaque détail pour une intégration parfaite.</p>
              </motion.div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <motion.h3 
                  className="font-display text-xl text-gold mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Retour Garanti
                </motion.h3>
                <p className="font-serif text-stardust/70">Grâce à notre ancre temporelle brevetée, vous ne manquerez jamais le train du retour vers le présent.</p>
              </motion.div>
           </div>
        </section>
      </main>

      <Footer />
      
      <ChatWidget />
      
      {selectedDestination && (
        <BookingModal 
          destination={selectedDestination} 
          onClose={() => setSelectedDestination(null)} 
        />
      )}
    </div>
  );
};

export default App;
