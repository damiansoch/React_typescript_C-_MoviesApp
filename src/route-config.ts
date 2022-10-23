import IndexGenres from "./genres/IndexGenres";
import LandingPage from "./movies/LandingPage";

export const routes = [
  {
    path: "/genres",
    component: IndexGenres,
  },
  {
    path: "/",
    component: LandingPage,
  },
];
