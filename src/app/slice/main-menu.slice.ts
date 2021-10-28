import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IMainMenuState {
    id: string,
    isShowed: boolean,
    isAllowed: boolean
    status?: string
    childs?: IMainMenuState[]
}
const initialJsonData = require('./../../assets/dummy-menu.json');
const initialState: IMainMenuState = initialJsonData;

// export const getAsyncData = createAsyncThunk(
//   'mainMenu/fetchData',
//   async (promiseRestService: Function) => {
//     const response = await promiseRestService();
//     return response.data;
//   }
// );

export const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    onToggleChange: (state, action: PayloadAction<Array<Record<any, any>>>) => {
        console.log(state)
    //   state.selectedData = action.payload;
    },
    reset: state => state = initialState
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAsyncData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getAsyncData.fulfilled, (state, action) => {
//         state.status = 'idle';
//         console.log('getAsyncData Extra Reducers', action.payload)
//         // state.listData = action.payload;
//       });
//   },
});

export const { onToggleChange } = mainMenuSlice.actions;

export const mainMenuState = (state: RootState) => state.mainMenu;

export default mainMenuSlice.reducer;