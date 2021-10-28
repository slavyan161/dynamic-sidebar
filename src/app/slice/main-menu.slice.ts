import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { MainMenuService } from './main-menu-service';

export interface IMainMenuState {
  id: string,
  isShowed: boolean,
  isAllowed: boolean
  childs?: IMainMenuState[],
}
const initialState: IMainMenuState[] = [];

export const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    onInit: (state, action) => state = action.payload,
    onToggleChange: (state, action: PayloadAction<any>) => {
      MainMenuService.filterMenu(state, action.payload.id)
    },
    reset: state => state = initialState
  }
});

export const { onToggleChange, onInit } = mainMenuSlice.actions;

export const mainMenuState = (state: RootState) => state.mainMenu;

export default mainMenuSlice.reducer;