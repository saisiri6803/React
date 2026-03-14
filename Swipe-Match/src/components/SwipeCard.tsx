import { memo, useRef } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import type { User } from '../types';
import { MdFavorite } from 'react-icons/md';

interface SwipeCardProps {
  user: User;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  x: number;
  rotate: number;
}

const SwipeCard = memo(({ user, onSwipeLeft, onSwipeRight, x, rotate }: SwipeCardProps) => {
  const isOnline = useOnlineStatus();
  const opacity = Math.abs(x) / 150 > 1 ? 0 : 1 - Math.abs(x) / 150;
  const startX = useRef<number | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;

    const deltaX = e.clientX - startX.current;

    if (deltaX > 80) {
      onSwipeRight();
    } else if (deltaX < -80) {
      onSwipeLeft();
    }

    startX.current = null;
  };

  return (
    <div
      className="absolute inset-0 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto 
             bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 
             flex flex-col items-center justify-center cursor-grab active:cursor-grabbing 
             transition-all duration-300 z-10 touch-none"
      style={{ transform: `translateX(${x}px) rotate(${rotate}deg)`, opacity }}
      role="button"
      tabIndex={0}
      aria-label={`Swipe left to dislike ${user.name.first}, swipe right to like`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') onSwipeLeft();
        if (e.key === 'ArrowRight') onSwipeRight();
      }}
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-6">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-full h-full rounded-full object-cover border-4 border-primary-500 shadow-lg"
          loading="lazy"
        />
        {isOnline && (
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 border-3 border-white rounded-full shadow-md"
            aria-label="User is online"
          />
        )}
      </div>

      <div className="text-center space-y-2 mb-8 flex-1">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          {user.name.first}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          {user.dob.age}, {user.location.city}
        </p>
      </div>

      <div className="hidden sm:flex w-full max-w-xs gap-4 px-4 sm:px-6">
        <button
          onMouseDown={() => onSwipeLeft()}
          className="flex-1 p-4 sm:p-5 bg-red-500/10 hover:bg-red-500/20 border-2 border-red-500/30 
                     text-red-600 hover:text-red-500 rounded-2xl font-semibold text-base sm:text-lg 
                     transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
          aria-label="Dislike"
        >
          ✕ Nope
        </button>
        <button
          onMouseDown={() => onSwipeRight()}
          className="flex-1 p-4 sm:p-5 bg-gradient-to-r from-accent to-pink-500 hover:from-accent/90 
                     text-white rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl 
                     transition-all duration-200 flex items-center justify-center hover:scale-[1.02]"
          aria-label="Like"
        >
          <MdFavorite 
              size={25} 
              className="drop-shadow-2xl filter brightness-0 invert dark:invert-0 dark:brightness-100"
            /> Like
        </button>
      </div>
    </div>
  );
});

SwipeCard.displayName = 'SwipeCard';
export default SwipeCard;
