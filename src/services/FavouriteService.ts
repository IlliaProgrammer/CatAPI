import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_KEY } from "../utils/consts";

export const favoutiteApi = createApi({
    reducerPath: 'favoutiteApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchAllFavourites: build.query({
            query: () => '/favourites',
          }),
          addFavourite: build.mutation({
            query: (imageId) => ({
              url: '/favourites',
              method: 'POST',
              headers: {
                "sub_id":"user-123"
              },
              body: { image_id: imageId },
            }),
          }),
          removeFavourite: build.mutation({
            query: (favouriteId) => ({
              url: `/favourites/${favouriteId}`,
              method: 'DELETE',
            }),
          }),
        }),
      });