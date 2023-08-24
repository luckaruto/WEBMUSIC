import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./Redux/playReducer";
import playerReducer from "./Redux/features/playerSlice";
import { spotify } from "./Redux/services/spotify";
import { spotifydownloadmusic } from "./Redux/services/downloadedsportify";
import { spotifydownloadmusicTemp } from "./Redux/services/downloadedsportifytemp";
import { getMp3Music } from "./Redux/services/getMp3music";

export const store = configureStore({
  reducer: {
    nav: playReducer,
    [spotify.reducerPath]: spotify.reducer,
    [spotifydownloadmusic.reducerPath]: spotifydownloadmusic.reducer,
    [spotifydownloadmusicTemp.reducerPath]: spotifydownloadmusicTemp.reducer,
    [getMp3Music.reducerPath]: getMp3Music,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(spotify.middleware)
      .concat(spotifydownloadmusic.middleware)
      .concat(spotifydownloadmusicTemp.middleware)
      .concat(getMp3Music.middleware),
});
