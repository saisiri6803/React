import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from '../store/themeSlice';
import type { RootState } from '../store/store';
import {  FaSun, FaMoon } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

export default function Login() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`
      min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 
      relative overflow-hidden transition-all duration-500
      ${isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-500 to-pink-500' 
        : 'bg-gradient-to-br from-primary-500 via-blue-600 to-accent'
      }
    `}>
      
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={handleThemeToggle}
          className="flex items-center gap-2 px-4 py-3 bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl 
                   hover:bg-white/30 dark:hover:bg-gray-700/60 shadow-2xl hover:shadow-3xl rounded-3xl 
                   transition-all duration-300 border border-white/30 dark:border-gray-600/50 group"
          title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        >
          {isDark ? (
            <FaSun className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-200 group-hover:rotate-12 transition-transform" />
          )}
        </button>
      </div>

      <main className="relative z-10 w-full max-w-md">
        <div className={`
          bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 
          border border-white/30 dark:border-gray-600/50 shadow-2xl hover:shadow-3xl text-center 
          transform hover:scale-[1.02] transition-all duration-500 group
          ${isDark ? 'dark-glass-effect' : ''}
        `}>
          
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 
                         bg-gradient-to-r from-accent to-slate-100/10 dark:from-pink-500 dark:to-slate-500
                         rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl 
                         group-hover:shadow-3xl group-hover:rotate-6 transition-all duration-500">
            <MdFavorite 
              size={40} 
              className="drop-shadow-2xl filter brightness-0 invert dark:invert-0 dark:brightness-100"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r 
                         from-white via-primary-100 to-accent dark:from-gray-100 dark:via-pink-300 dark:to-pink-300
                         bg-clip-text text-transparent mb-6 leading-tight">
            Swipe & Match
          </h1>

          <p className="text-xl sm:text-2xl text-white/95 dark:text-gray-200 mb-12 opacity-90 
                       leading-relaxed max-w-sm mx-auto drop-shadow-sm">
            Swipe right to discover your perfect match
          </p>

          <div className="space-y-4 mb-8">
            <Link
              to="/feed"
              className="block w-full bg-white/90 dark:bg-white text-primary-600 dark:text-gray-900 
                       font-black py-5 sm:py-6 px-8 rounded-3xl text-xl shadow-2xl hover:shadow-3xl 
                       hover:-translate-y-1 transition-all duration-500 border border-white/30 
                       active:scale-[0.98] group relative overflow-hidden backdrop-blur-sm
                       hover:bg-white dark:hover:bg-white/95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/50 to-blue-500/50 
                             opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              <span className="relative z-10 font-black tracking-wide group-hover:text-white">Start Swiping</span>
            </Link>

            <Link
              to="/matches"
              className="block w-full bg-white/30 dark:bg-white/20 hover:bg-white/50 dark:hover:bg-white/40 
                       text-white font-semibold py-4 sm:py-5 px-8 rounded-2xl border-2 border-white/40 
                       hover:border-white/70 transition-all duration-500 backdrop-blur-xl 
                       hover:shadow-2xl active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 
                             transition-all duration-500 backdrop-blur-sm"></div>
              <span className="relative z-10 font-semibold tracking-wide">View My Matches</span>
            </Link>
          </div>
          
          {/* <div className="grid grid-cols-3 gap-6 text-sm sm:text-base text-white/90 dark:text-gray-200/90 mb-8 opacity-95">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 drop-shadow-md">50+</div>
              <div className="font-medium tracking-wide">Profiles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent dark:text-pink-400 mb-1 drop-shadow-md">2</div>
              <div className="font-medium tracking-wide">Matches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 drop-shadow-md">100%</div>
              <div className="font-medium tracking-wide">Free</div>
            </div>
          </div> */}
        </div>
      </main>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300/20 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-ping"></div>
      </div>
    </div>
  );
}
