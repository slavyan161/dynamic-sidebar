import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mainMenuSlice from './slice/main-menu.slice';

export const store = configureStore({
  reducer: {
    mainMenu: mainMenuSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
