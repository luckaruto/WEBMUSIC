import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./Redux/playReducer";

export const store = configureStore({
  reducer: {
    nav: playReducer,
  },
});
