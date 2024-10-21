import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

// Function to get the initial theme from localStorage
const getInitialTheme = (): 'light' | 'dark' => {
  try {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' ? 'dark' : 'light';
  } catch (error) {
    console.error('Error accessing localStorage', error);
    return 'light';
  }
};

// Function to save the theme to localStorage
const saveThemeToLocalStorage = (theme: 'light' | 'dark') => {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Error saving theme to localStorage', error);
  }
};

// Set the initial state using the value from localStorage
const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Reducer to toggle between light and dark themes
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      // Save the updated theme to localStorage
      saveThemeToLocalStorage(state.theme);
    },
    // Reducer to set the theme explicitly
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      // Save the updated theme to localStorage
      saveThemeToLocalStorage(state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
