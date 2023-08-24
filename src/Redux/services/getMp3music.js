import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getMp3Music = createApi({
  reducerPath: "getMp3Music",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-mp36.p.rapidapi.com/dl",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2d15467778mshefa5da6b8c65800p1e1da7jsnbdaf6eae3dd3"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetDownLoadMusicTempMp3: builder.query({
      query: (url) => `?id=${url}`,
    }),
  }),
});

export const { useGetDownLoadMusicTempMp3Query } = getMp3Music;
