import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Zap, TrendingUp } from 'lucide-react';

const PlayerCard = ({ player }) => {
  const statIcon = (stat) => {
    if (stat === 'attack') return <Zap className="w-4 h-4 text-red-500" />;
    if (stat === 'defense') return <Shield className="w-4 h-4 text-blue-500" />;
    if (stat === 'speed') return <TrendingUp className="w-4 h-4 text-green-500" />;
    return <User className="w-4 h-4 text-gray-500" />;
  };

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-gray-200/50 flex flex-col items-center text-center"
      whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
        <User className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{player.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{player.position}</p>
      <div className="grid grid-cols-3 gap-2 w-full">
        {Object.entries(player.stats).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center bg-gray-100 rounded-lg p-2">
            {statIcon(key)}
            <span className="text-xs font-semibold text-gray-700 mt-1">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span className="text-sm font-bold text-gray-900">{value}</span>
          </div>
        ))}
      </div>
      <motion.button
        className="mt-5 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver Perfil
      </motion.button>
    </motion.div>
  );
};

export default PlayerCard;