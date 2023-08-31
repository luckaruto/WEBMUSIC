import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotify = createApi({
  reducerPath: "spotify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify81.p.rapidapi.com",

    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "23f9191a61msh2b609a4dc2d299ep1aa38cjsnb964cec3dca2"
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
