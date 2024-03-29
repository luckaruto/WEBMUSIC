import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifydownloadmusic = createApi({
  reducerPath: "spotifydownloadmusic",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-downloader3.p.rapidapi.com/spotify/download",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2d15467778mshefa5da6b8c65800p1e1da7jsnbdaf6eae3dd3"
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
