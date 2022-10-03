import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    change: (state) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

export const { change } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
