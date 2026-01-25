import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState, saveState } from '../utils/localStorage';
import type { User } from '../types';

export interface SwipeState {
  users: User[];
  liked: string[];
  disliked: string[];
  currentIndex: number;
  matches: string[];
}

const initialState: SwipeState = loadState() ?? {
  users: [], liked: [], disliked: [], currentIndex: 0, matches: [],
};

const swipeSlice = createSlice({
  name: 'swipe',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      saveState(state);
    },
    likeUser: (state) => {
      const userId = state.users[state.currentIndex]?.id;
      if (userId && !state.liked.includes(userId) && !state.disliked.includes(userId)) {
        state.liked.push(userId);
        state.currentIndex += 1;
        saveState(state);
      }
    },
    dislikeUser: (state) => {
      const userId = state.users[state.currentIndex]?.id;
      if (userId && !state.liked.includes(userId) && !state.disliked.includes(userId)) {
        state.disliked.push(userId);
        state.currentIndex += 1;
        saveState(state);
      }
    },
    reset: () => initialState,
  },
});

export const { setUsers, likeUser, dislikeUser, reset } = swipeSlice.actions;
export default swipeSlice.reducer;
