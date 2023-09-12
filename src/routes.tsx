import {  ReactNode } from "react";
import Home from "./pages/Home/Home"
import Voting from "./pages/Voting/Voting"
import Breeds from "./pages/Breeds/Breeds"
import Gallery from "./pages/Gallery/Gallery"
import {HOME_ROUTE, VOTING_ROUTE, BREEDS_ROUTE, GALLERY_ROUTE, FAVOURITE_ROUTE, LIKES_ROUTE, DISLIKES_ROUTE, BREED_ROUTE} from "./utils/consts"
import Fav from "./pages/Fav/Fav";
import Likes from "./pages/Likes/Likes";
import Dislikes from "./pages/Dislikes/Dislikes";
import BreedPage from "./pages/BreedPage/BreedPage"

interface Route {
    path: string;
    element: ReactNode;
  }

export const RoutesArr:Route[] = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: VOTING_ROUTE,
        element: <Voting/>
    },
    {
        path: BREEDS_ROUTE,
        element: <Breeds/>
    },
    {
        path: GALLERY_ROUTE,
        element: <Gallery/>
    },
    {
        path: FAVOURITE_ROUTE,
        element: <Fav/>
    },
    {
        path: LIKES_ROUTE,
        element: <Likes/>
    },
    {
        path: DISLIKES_ROUTE,
        element: <Dislikes/>
    },
    {
        path: BREED_ROUTE + "/:id",
        element: <BreedPage/>
    },
 
]