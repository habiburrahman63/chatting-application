import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import activeSlice from "./Slices/activeSlice";

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    activeChatInfo: activeSlice,
  },
});
