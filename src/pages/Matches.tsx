import { useSelector } from 'react-redux';
import { initialMatches} from '../data/mock';
import type { RootState } from '../store/store';
import type { Match } from '../types';
import NavBar from '../components/NavBar';

export default function Matches() {
  const liked = useSelector((state: RootState) => state.swipe.liked);

  const allMatches: Match[] = initialMatches;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 
                    dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 flex flex-col 
                    pb-20 lg:pb-0">
      
      <NavBar />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 pt-4 lg:pt-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r 
                         from-accent via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Your Matches
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {allMatches.length} total matches
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {allMatches.map((match) => (
            <div
              key={match.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl 
                       p-6 sm:p-8 shadow-2xl border border-white/40 hover:border-accent/40 
                       hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 
                       cursor-pointer flex items-center gap-4 sm:gap-6"
              role="button"
              tabIndex={0}
              onClick={() => console.log('Open chat:', match.name.first)}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={match.picture.large}
                  alt={`${match.name.first} ${match.name.last}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover 
                             shadow-lg ring-4 ring-white/50 group-hover:ring-accent/50 transition-all"
                />
                {match.online && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 
                                 rounded-full border-3 border-white shadow-md ring-2 ring-green-500/50 
                                 animate-pulse" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-xl text-gray-900 dark:text-white 
                               truncate group-hover:text-accent">
                  {match.name.first} {match.name.last}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                  {match.lastMessage}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-pink-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-500">1h ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mb-12 text-2xl sm:text-xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent'>Liked Profiles: {liked.length}</div>
      </main>
    </div>
  );
}
