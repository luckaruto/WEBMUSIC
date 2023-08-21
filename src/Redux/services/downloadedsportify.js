import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifydownloadmusic = createApi({
  reducerPath: "spotifydownloadmusic",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-downloader3.p.rapidapi.com/spotify/download",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "5905beffebmsh939a54e6aaaa26bp1caf11jsnf6b174336718"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetDownLoadMusic: builder.query({
      query: (url) => `/?url=${encodeURIComponent(url)}`,
    }),
  }),
});

export const { useGetDownLoadMusicQuery } = spotifydownloadmusic;
