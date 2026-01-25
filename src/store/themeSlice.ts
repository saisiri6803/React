import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  isDark: boolean;
}

const loadThemeFromStorage = (): boolean => {
  try {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : false;
  } catch {
    return false;
  }
};

const initialState: ThemeState = {
  isDark: loadThemeFromStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
