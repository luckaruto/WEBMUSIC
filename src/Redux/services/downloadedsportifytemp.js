import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifydownloadmusicTemp = createApi({
  reducerPath: "spotifydownloadmusicTemp",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-downloader-api.p.rapidapi.com/Home",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "5905beffebmsh939a54e6aaaa26bp1caf11jsnf6b174336718"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetDownLoadMusicTemp: builder.query({
      query: (url) =>
        `/GetSpotifyUserInfo?Tracklink=${encodeURIComponent(url)}`,
    }),
  }),
});

export const { useGetDownLoadMusicTempQuery } = spotifydownloadmusicTemp;
