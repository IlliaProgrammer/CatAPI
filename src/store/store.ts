import { favoutiteApi } from './../services/FavouriteService';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { breedsApi } from "../services/BreedsService";
import { galleryApi } from "../services/GalleryService";
import { votingApi } from "../services/VotingService";


const rootReducer = combineReducers({
   [galleryApi.reducerPath]: galleryApi.reducer,
   [breedsApi.reducerPath]: breedsApi.reducer,
   [votingApi.reducerPath]: votingApi.reducer,
   [favoutiteApi.reducerPath]: favoutiteApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(galleryApi.middleware, breedsApi.middleware, votingApi.middleware, favoutiteApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']