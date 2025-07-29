import React from 'react';
import { motion } from 'framer-motion';
import { Film, Tv } from 'lucide-react';

const Header = ({ activeTab, onTabChange }) => {
  return (
    <motion.header
      className="bg-white/10 backdrop-blur-md rounded-full p-2 mb-12 shadow-xl flex justify-center items-center space-x-4 max-w-md mx-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <motion.button
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          activeTab === 'movies'
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
            : 'text-gray-300 hover:bg-white/20 hover:text-white'
        }`}
        onClick={() => onTabChange('movies')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Film className="w-5 h-5" />
        Películas
      </motion.button>
      <motion.button
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
          activeTab === 'series'
            ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg'
            : 'text-gray-300 hover:bg-white/20 hover:text-white'
        }`}
        onClick={() => onTabChange('series')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Tv className="w-5 h-5" />
        Series
      </motion.button>
    </motion.header>
  );
};

export default Header;