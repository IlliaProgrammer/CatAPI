import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFavRoot } from "../models/IFavoutite";

import { API_KEY } from "../utils/consts";

export const favoutiteApi = createApi({
    reducerPath: 'favoutiteApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            headers.set("sub_id", "user-123");
            return headers;
        }
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllFavourites: build.query<IFavRoot, string>({
            query: () => '/favourites',
            providesTags:  ['Post']
          }),
          addFavourite: build.mutation({
            query: (imageId) => ({
              url: '/favourites',
              method: 'POST',
              body: { image_id: imageId },
            }),
            invalidatesTags: ['Post']
          }),
          removeFavourite: build.mutation({
            query: (favouriteId) => ({
              url: `/favourites/${favouriteId}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['Post']
          }),
        }),
      });