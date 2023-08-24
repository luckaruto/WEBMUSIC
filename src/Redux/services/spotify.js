import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotify = createApi({
  reducerPath: "spotify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com",

    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "2d15467778mshefa5da6b8c65800p1e1da7jsnbdaf6eae3dd3"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/top_200_tracks?country=VN&period=daily&date=2023-08-15",
    }),
  }),
});

export const { useGetTopChartsQuery } = spotify;
