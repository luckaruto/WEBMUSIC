import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./Redux/playReducer";
import playerReducer from "./Redux/features/playerSlice";
import { spotify } from "./Redux/services/spotify";

export const store = configureStore({
  reducer: {
    nav: playReducer,
    [spotify.reducerPath]: spotify.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotify.middleware),
});
