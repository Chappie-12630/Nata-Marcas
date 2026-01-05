import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Library';
import { ArrowRight, Trophy, Timer, cloud } from 'lucide-react';

export default function Landing({ onGetStarted }) {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decoración de fondo (Simulando HeroImage) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-400 rounded-full filter blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {/* Call To Action & Welcome Message Fusionados */}
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6 inline-block">
          Sincronizado con la Nube de Firebase
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Tus marcas de natación <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            para siempre.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Registra tus tiempos, analiza tu progreso y compite en el leaderboard. 
          Tus récords se guardan de forma segura en la nube y nunca se borrarán.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
          >
            Empezar ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-6 px-4">
            <div className="flex flex-col items-center">
              <Trophy className="text-yellow-500 w-5 h-5 mb-1" />
              <span className="text-xs text-gray-500 uppercase">Récords</span>
            </div>
            <div className="flex flex-col items-center">
              <Timer className="text-blue-400 w-5 h-5 mb-1" />
              <span className="text-xs text-gray-500 uppercase">Tiempos</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
