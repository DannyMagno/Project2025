import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, BarChart2 } from 'lucide-react';

const TeamOverview = ({ teamName, playersCount, trophies, winRate }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users className="w-8 h-8 text-white" />
        </motion.div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {teamName}
          </h1>
          <p className="text-gray-500 font-medium">Tu equipo de ensueño</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="flex items-center gap-4 bg-blue-50/80 border border-blue-200/50 rounded-xl p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Users className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Jugadores</p>
            <p className="text-xl font-bold text-gray-800">{playersCount}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 bg-yellow-50/80 border border-yellow-200/50 rounded-xl p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Trophy className="w-6 h-6 text-yellow-600" />
          <div>
            <p className="text-gray-500 text-sm">Trofeos</p>
            <p className="text-xl font-bold text-gray-800">{trophies}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 bg-purple-50/80 border border-purple-200/50 rounded-xl p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <BarChart2 className="w-6 h-6 text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Tasa de Victorias</p>
            <p className="text-xl font-bold text-gray-800">{winRate}%</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamOverview;