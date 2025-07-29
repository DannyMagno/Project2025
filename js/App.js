import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MovieCard from './components/MovieCard';
import SeriesCard from './components/SeriesCard';
import Header from './components/Header';
import { defaultMovies, defaultSeries } from './mock/movies';
import { Search, Film, Tv, Sun, Moon } from 'lucide-react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [activeTab, setActiveTab] = useState('movies'); // 'movies' o 'series'
  const [isDarkMode, setIsDarkMode] = useState(true); // Estado para el modo oscuro/claro

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const movieGenres = ['all', 'Comedia', 'Acción', 'Drama', 'Ciencia Ficción', 'Romance'];
  const seriesGenres = ['all', 'Ciencia Ficción', 'Drama', 'Comedia'];

  const currentContent = activeTab === 'movies' ? defaultMovies : defaultSeries;
  const currentGenres = activeTab === 'movies' ? movieGenres : seriesGenres;

  const filteredContent = currentContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || item.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm(''); // Limpiar búsqueda al cambiar de pestaña
    setSelectedGenre('all'); // Limpiar género al cambiar de pestaña
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900' } p-8 transition-colors duration-500`}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            className={`text-5xl font-extrabold bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-700'} drop-shadow-lg`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            CineNerd
          </motion.h1>
          <motion.button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full ${isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} transition-colors duration-300 shadow-lg`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>
        </div>

        <Header activeTab={activeTab} onTabChange={handleTabChange} />

        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder={`Busca tu ${activeTab === 'movies' ? 'película' : 'serie'} favorita...`}
              className={`w-full px-6 py-3 pl-12 ${isDarkMode ? 'bg-white/10 border-white/20 text-white placeholder-gray-300' : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'} rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-lg`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          </div>

          <div className="relative">
            <select
              className={`w-full md:w-auto px-6 py-3 pr-12 ${isDarkMode ? 'bg-white/10 border-white/20 text-white' : 'bg-gray-100 border-gray-300 text-gray-900'} rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 text-lg`}
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {currentGenres.map(genre => (
                <option key={genre} value={genre} className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                  {genre === 'all' ? 'Todos los Géneros' : genre}
                </option>
              ))}
            </select>
            {activeTab === 'movies' ? (
              <Film className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pointer-events-none`} />
            ) : (
              <Tv className={`absolute right-4 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'} pointer-events-none`} />
            )}
          </div>
        </motion.div>

        {filteredContent.length === 0 && (
          <motion.p
            className={`text-center text-xl font-medium mt-10 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ¡Vaya! Parece que esa {activeTab === 'movies' ? 'película' : 'serie'} solo existe en tu imaginación... o no la hemos añadido aún.
          </motion.p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {activeTab === 'movies' ? (
                <MovieCard movie={item} isDarkMode={isDarkMode} />
              ) : (
                <SeriesCard series={item} isDarkMode={isDarkMode} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;