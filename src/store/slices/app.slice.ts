import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  showSidebar: Boolean;
}
const initialAppState: IAppState = {
  showSidebar: false,
};
const AppSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
});
export const AppActions = AppSlice.actions;

export default AppSlice.reducer;
