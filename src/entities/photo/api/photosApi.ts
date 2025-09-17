import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Photo } from "../../../shared/model/types";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => "photos",
      providesTags: ["Photos"],
    }),
    getPhotosByAlbumId: builder.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      providesTags: ["Photos"],
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotosByAlbumIdQuery } = photosApi;
