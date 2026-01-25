import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { FaHeart, FaUsers, FaArrowLeft, FaPhone, FaMoon, FaSun } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toggleTheme } from '../store/themeSlice';
import { initialMatches } from '../data/mock';
import type { Match } from '../types';


const userProfile = {
  name: "Anish Kumar",
  age: 28,
  picture: "https://randomuser.me/api/portraits/men/32.jpg",
  email: "anish@example.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, Karnataka",
  bio: "Full-stack developer passionate about building beautiful web apps. Loves React, Next.js, and Tailwind CSS.",
  interests: ["Web Development", "UI/UX Design", "Open Source", "Coffee "],
  joined: "Jan 2026"
};

export default function ProfilePage() {
  const navigate = useNavigate();
  const matches: Match[] = initialMatches;

  const goBack = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">

      <div className="fixed top-6 left-6 z-50 lg:hidden">
        <button
          onClick={goBack}
          className="flex items-center gap-2 px-4 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl hover:bg-white dark:hover:bg-gray-700 shadow-2xl hover:shadow-3xl rounded-3xl transition-all duration-300 group border border-white/50 dark:border-gray-700/50"
        >
          <FaArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold hidden sm:inline text-gray-700 dark:text-gray-300">Back</span>
        </button>
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl hover:bg-white dark:hover:bg-gray-700 shadow-2xl hover:shadow-3xl transition-all group border border-white/50 dark:border-gray-700/50"
          >
            {isDark ? (
              <FaSun className="text-2xl text-yellow-400 group-hover:rotate-12 transition-transform" />
            ) : (
              <FaMoon className="text-2xl text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform" />
            )}
          </button>
        </div>

      </div>

      <div className="lg:pt-20 pt-28 max-w-2xl mx-auto px-4">

        <div className="lg:flex lg:items-center lg:gap-4 lg:mb-8 hidden mb-12">
          <button
            onClick={goBack}
            className={`flex items-center gap-2 px-5 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 shadow-xl hover:shadow-2xl rounded-2xl transition-all group ${isDark ? 'text-white' : 'text-gray-700'}`}
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-700'}`}>Back</span>
          </button>

          <div className="flex-1 text-center">
            <h1 className="text-3xl font-black bg-gradient-to-r from-accent via-pink-500 to-rose-500 bg-clip-text text-transparent">
              My Profile
            </h1>
          </div>
          <button
            onClick={() => dispatch(toggleTheme())}
            className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl hover:bg-white dark:hover:bg-gray-700 shadow-2xl hover:shadow-3xl transition-all group border border-white/50 dark:border-gray-700/50"
          >
            {isDark ? (
              <FaSun className="text-2xl text-yellow-400 group-hover:rotate-12 transition-transform" />
            ) : (
              <FaMoon className="text-2xl text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform" />
            )}
          </button>
        </div>

        <div className="text-center mb-12">
          <div className="relative inline-block mb-8 mx-auto">
            <img
              src={userProfile.picture}
              alt={userProfile.name}
              className="w-32 h-32 rounded-full object-cover shadow-2xl ring-8 ring-white/50 dark:ring-gray-800/50"
            />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-accent to-pink-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900">
              <FaHeart className="w-6 h-6 text-white animate-pulse" />
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
              {userProfile.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-1">{userProfile.age} • {userProfile.location}</p>
            <p className="text-2xl font-bold text-accent mb-6">{matches.length} Matches</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 dark:border-gray-700/50">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 font-black text-3xl text-accent mb-2">
              <FaHeart className="w-8 h-8" />
              {matches.length}
            </div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Matches</div>
          </div>
          <div className="text-center">
            <div className="font-black text-3xl text-primary-600 mb-2">127</div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Profiles Viewed</div>
          </div>
          <div className="text-center">
            <div className="font-black text-3xl text-green-600 mb-2">100%</div>
            <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">Free Account</div>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-2xl border border-white/50 dark:border-gray-700/50">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
            <FaUsers className="w-8" />
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            {userProfile.bio}
          </p>
          <div className="flex flex-wrap gap-3">
            {userProfile.interests.map((interest, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-accent/20 to-pink-500/20 text-accent font-semibold rounded-full text-sm border border-accent/30">
                {interest}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">Contact Info</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center"><MdEmail className="w-6 h-6" /></div>
              <span>{userProfile.email}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center"><FaPhone className="w-6 h-6" /></div>
              <span>{userProfile.phone}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center"><FaLocationDot className="w-6 h-6" /></div>
              <span>{userProfile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
