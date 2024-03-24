import { createBrowserRouter } from "react-router-dom";
import Popular from "./pages/popular";
import ComingSoon from "./pages/coming-soon";
import NowPlaying from "./pages/now-playing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Popular />,
    children: [
      {
        path: "popular/:id",
        element: <Popular />,
      },
    ],
  },
  {
    path: "/coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "/now-playing",
    element: <NowPlaying />,
  },
]);
