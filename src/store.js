import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./Redux/playReducer";
import playerReducer from "./Redux/features/playerSlice";
import { spotify } from "./Redux/services/spotify";
import { spotifydownloadmusic } from "./Redux/services/downloadedsportify";

export const store = configureStore({
  reducer: {
    nav: playReducer,
    [spotify.reducerPath]: spotify.reducer,
    [spotifydownloadmusic.reducerPath]: spotifydownloadmusic.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(spotify.middleware)
      .concat(spotifydownloadmusic.middleware),
});
