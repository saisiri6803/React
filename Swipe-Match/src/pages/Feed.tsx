import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dislikeUser, likeUser, setUsers } from '../store/swipeSlice';
import SwipeCard from '../components/SwipeCard';
import type { AppDispatch, RootState } from '../store/store';
import NavBar from '../components/NavBar';

export default function Feed() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, currentIndex, liked, disliked } = useSelector((state: RootState) => state.swipe);

  useEffect(() => {
    if (users.length === 0) {
      fetch('https://randomuser.me/api/?results=50&inc=name,picture,email,location,dob,gender,nat&noinfo')
        .then((res) => res.json())
        .then((data) =>
          dispatch(
            setUsers(
              data.results.map((u: any, i: number) => ({
                ...u,
                id: `user-${i}`,
              }))
            )
          )
        )
        .catch(console.error);
    }
  }, [dispatch, users.length]);

  const currentUser = users[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-100 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 flex flex-col 
                    pb-20 lg:pb-0">
      
      <NavBar />

      <main className="flex-1 flex items-center justify-center max-w-4xl mx-auto w-full px-4 pt-4 lg:pt-20">
        <div className="relative h-80 sm:h-96 lg:h-[500px] w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          {currentUser ? (
            <SwipeCard
              user={currentUser}
              onSwipeLeft={() => dispatch(dislikeUser())}
              onSwipeRight={() => dispatch(likeUser())}
              x={0}
              rotate={0}
            />
          ) : (
            <div className="w-full h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl 
                            rounded-3xl flex flex-col items-center justify-center text-center p-8 
                            shadow-2xl border border-white/40">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-accent to-pink-500 
                              rounded-full flex items-center justify-center mb-6 shadow-2xl">
                <span className="text-3xl sm:text-4xl">❤️</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-4">
                No more profiles!
              </h2>
              <div className="space-y-2 text-lg max-w-md">
                <p className="text-gray-600 dark:text-gray-400">
                  Liked: <span className="font-bold text-accent">{liked.length}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Disliked: <span className="font-bold text-red-500">{disliked.length}</span>
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-primary-500 to-blue-600 text-white 
                             rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  Refresh Users
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
