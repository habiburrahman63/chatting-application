import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("activeInfo")
    ? JSON.parse(localStorage.getItem("activeInfo"))
    : null,
};

export const activeSlice = createSlice({
  name: "active",
  initialState,
  reducers: {
    activeInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { activeInfo } = activeSlice.actions;

export default activeSlice.reducer;
