import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/theme';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // Diğer reducer'larınızı buraya ekleyebilirsiniz
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Özel Redux hook'larını burada tanımlıyoruz
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default store;
