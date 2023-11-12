import { BreedType, IBreedProps } from './../models/IBreed';
import { API_KEY } from './../utils/consts';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBreed } from '../models/IBreed';

export const breedsApi = createApi({
    reducerPath: 'breedsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchAllBreeds: build.query<BreedType, string>({
            query: (args) => ({
                url: "/breeds",
            }),
        }),
        fetchAllBreedsImages: build.query<BreedType, IBreedProps>({
            query: (args) => ({
                url: "/images/search?has_breeds=1",
                params: {
                    limit: args.limit,
                    breed_ids: args.breed,
                    order: args.order,
                }
            }),
        })
    }),
});

