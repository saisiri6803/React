import { useSyncExternalStore } from 'react';

export function useOnlineStatus(): boolean {
  return useSyncExternalStore(subscribe, () => navigator.onLine);

  function subscribe(callback: () => void) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }
}
