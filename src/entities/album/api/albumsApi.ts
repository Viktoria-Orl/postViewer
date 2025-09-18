import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Album } from "../model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "albums",
      providesTags: ["Albums"],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: ["Albums"],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi;
