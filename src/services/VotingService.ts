import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGallary } from '../models/IGallary';
import { API_KEY } from "../utils/consts";

export const votingApi = createApi({
    reducerPath: 'votingApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://api.thecatapi.com/v1/',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    tagTypes: ["POST"],
    endpoints: (build) => ({
        voteUp: build.mutation({
            query: (up) => {
                return{
                url: '/votes',
                method: "POST",
                body: up,
            }},
            invalidatesTags: ["POST"]
        }),
    })
})