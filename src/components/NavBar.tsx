import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { toggleTheme } from '../store/themeSlice';
import { 
  FaHome, 
  FaUserFriends, 
  FaHeart, 
  FaSun, 
  FaMoon, 
  FaBars} from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";

import { useState, useEffect } from 'react';
import { initialMatches } from '../data/mock';
import type { Match } from '../types';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const matches: Match[] = initialMatches;
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const userProfile = {
    name: "Anish",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    matches: 2,
    email: "anish@example.com"
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    setShowMobileMenu(false);
  };

  const DesktopNav = () => (
    <div className="hidden lg:flex items-center justify-between w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-700/50">

      <div className="flex items-center gap-2 lg:gap-6">
        <Link to="/login" className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all group 
          ${isActive('/login') ? 'bg-gradient-to-r from-primary-500 to-blue-600 text-white shadow-xl' : 'bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl'}`}>
          <FaHome className={`text-2xl ${isActive('/login') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`} />
          <span className={`font-bold text-sm hidden xl:inline ${isActive('/login') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`}>Home</span>
        </Link>
        
        <Link to="/feed" className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all group relative
          ${isActive('/feed') ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl' : 'bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl'}`}>
          <FaUserFriends className={`text-2xl ${isActive('/feed') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`} />
          <span className={`font-bold text-sm hidden xl:inline ${isActive('/feed') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`}>Feed</span>
        </Link>
        
        <Link to="/matches" className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all group relative
          ${isActive('/matches') ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xl' : 'bg-white/70 dark:bg-gray-800/70 hover:bg-pink-50 dark:hover:bg-pink-900/20 shadow-lg hover:shadow-xl'}`}>
          <FaHeart className={`text-2xl ${isActive('/matches') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`} />
          {matches.length > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
              {matches.length > 99 ? '99+' : matches.length}
            </div>
          )}
          <span className={`font-bold text-sm hidden xl:inline ${isActive('/matches') ? 'text-white' : isDark ? 'text-white' : 'text-gray-700'}`}>Matches</span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => dispatch(toggleTheme())} className="h-14 w-14 flex items-center justify-center p-3 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all group">
          {isDark ? <FaSun className="text-2xl text-yellow-500 group-hover:rotate-12 transition-transform" /> : <FaMoon className="text-2xl text-gray-700 group-hover:rotate-12 transition-transform" />}
        </button>
        
        <button onClick={handleProfileClick} className="h-14 flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 backdrop-blur-sm hover:shadow-xl transition-all group relative">
          <img src={userProfile.picture} alt={userProfile.name} className="w-10 h-10 rounded-full ring-2 ring-white/50 shadow-lg group-hover:scale-105 transition-transform" />
          <div className="hidden lg:block">
            <div className="font-bold text-sm text-gray-900 dark:text-white truncate max-w-24">{userProfile.name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{matches.length} matches</div>
          </div>
          {userProfile.matches > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white">
              {userProfile.matches}
            </div>
          )}
        </button>
      </div>
    </div>
  );

const MobileTopRight = () => (
  <div className="lg:hidden flex items-center justify-end p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 relative">
    <div className="relative">
      <button 
        onClick={toggleMobileMenu}
        className="p-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group relative z-50"
        aria-label="Toggle menu"
      >
        {showMobileMenu ? (
          <FaXmark className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors" />
        ) : (
          <FaBars className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-accent transition-colors" />
        )}
      </button>
      
      <MobileMenuPanel />
    </div>
  </div>
);


  const MobileMenuOverlay = () => (
    <div className={`lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
      showMobileMenu ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
    }`} onClick={toggleMobileMenu} />
  );

const MobileMenuPanel = () => (
  <div className={`lg:hidden absolute top-full right-0 mt-2 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl 
                  shadow-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl z-50 transform transition-all duration-300 
                  ${showMobileMenu ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2 pointer-events-none'}`}>
    
    <button
      onClick={handleThemeToggle}
      className="w-full flex items-center gap-4 p-4 rounded-t-3xl hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-all first:rounded-t-3xl"
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        {!isDark ? <FaSun className="text-xl text-white" /> : <FaMoon className="text-xl text-white" />}
      </div>
      <div className="flex-1 text-left min-w-0">
        <div className="font-bold text-lg text-gray-900 dark:text-white truncate">Toggle Theme</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Switch to {isDark ? 'light' : 'dark'} mode</div>
      </div>
    </button>

    <button
      onClick={handleProfileClick}
      className="w-full flex items-center gap-4 p-4 border-t border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all rounded-b-3xl"
    >
      <img 
        src={userProfile.picture} 
        alt={userProfile.name}
        className="w-12 h-12 rounded-2xl ring-2 ring-white/50 shadow-lg hover:scale-105 transition-transform object-cover"
      />
      <div className="flex-1 text-left min-w-0">
        <div className="font-bold text-lg text-gray-900 dark:text-white truncate">{userProfile.name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{matches.length} matches</div>
      </div>
      {userProfile.matches > 0 && (
        <div className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white animate-pulse ml-2">
          {userProfile.matches}
        </div>
      )}
    </button>
  </div>
);

  const MobileBottomNav = () => (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center justify-around py-3 px-4 max-w-4xl mx-auto">
        <Link to="/login" className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all ${isActive('/login') ? 'bg-primary-500 text-white shadow-xl' : 'hover:bg-primary-100 dark:hover:bg-primary-900/50'}`}>
          <FaHome className="text-2xl" />
          <span className="text-xs font-semibold">Home</span>
        </Link>
        
        <Link to="/feed" className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all relative ${isActive('/feed') ? 'bg-emerald-500 text-white shadow-xl' : 'hover:bg-emerald-100 dark:hover:bg-emerald-900/50'}`}>
          <FaUserFriends className="text-2xl" />
          <span className="text-xs font-semibold">Feed</span>
        </Link>
        
        <Link to="/matches" className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all relative ${isActive('/matches') ? 'bg-pink-500 text-white shadow-xl' : 'hover:bg-pink-100 dark:hover:bg-pink-900/50'}`}>
          <FaHeart className="text-2xl" />
          {matches.length > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg">
              {matches.length > 99 ? '99+' : matches.length}
            </div>
          )}
          <span className="text-xs font-semibold">Matches</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <DesktopNav />
      
      {isMobile && <MobileTopRight />}
      
      {isMobile && <MobileMenuOverlay />}
      
      {isMobile && <MobileMenuPanel />}
      
      {isMobile && <MobileBottomNav />}
    </>
  );
}
