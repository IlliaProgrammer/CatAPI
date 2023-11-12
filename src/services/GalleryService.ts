import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGallary, IGallaryRoot, IGalleryProps } from '../models/IGallary';
import { API_KEY } from "../utils/consts";

export const galleryApi = createApi({
    reducerPath: 'galleryApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        fetchAllGallery: build.query<IGallaryRoot, IGalleryProps>({
            query: (args) => ({
                url: '/images/search',
                params: {
                    limit: args.limit,
                    breed_ids: args.breed,
                    order: args.order,
                    mime_types: args.mime_types
                }
            }),
        }),
        uploadGallary: build.mutation({
            query: (formData) => {
                console.log(Object.entries(formData))
                return{
                url: '/images/upload',
                method: "POST",
                body: formData,
                formData: true,
                headers: {
                    'content-type': 'multipart/form-data', 
                },
            }},
            invalidatesTags: ["POST"]
        }),
    }),
});

