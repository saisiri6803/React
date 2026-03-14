import type { SwipeState } from '../store/swipeSlice';
import type { ThemeState} from '../store/themeSlice';

export function loadState(): SwipeState | null {
  try {
    const serializedState = localStorage.getItem('swipeState');
    if (serializedState === null) return null;
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
}

export function saveState(state: SwipeState): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('swipeState', serializedState);
  } catch (err) {
    console.warn('Failed to save state to localStorage');
  }
}

export function loadThemeState(): ThemeState | null {
  try {
    const serializedState = localStorage.getItem('themeState');
    if (serializedState === null) return null;
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
}

export function saveThemeState(state: ThemeState): void {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('themeState', serializedState);
  } catch (err) {
    console.warn('Failed to save theme state to localStorage');
  }
}
