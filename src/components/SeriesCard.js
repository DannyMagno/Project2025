import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Star } from 'lucide-react';

const SeriesCard = ({ series, isDarkMode }) => {
  return (
    <motion.div
      className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/90 border-gray-200/50'} backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden`}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
        {series.image ? (
          <img src={series.image} alt={series.title} className="w-full h-full object-cover" />
        ) : (
          <Tv className="w-16 h-16 opacity-50" />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{series.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 line-clamp-3`}>{series.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="text-sm font-semibold">{series.rating}</span>
          </div>
          <motion.button
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Ahora
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SeriesCard;