import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PopularPage from "./pages/popular";
import ComingSoonPage from "./pages/coming-soon";
import NowPlayingPage from "./pages/now-playing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PopularPage />,
      },
      {
        path: "coming-soon",
        element: <ComingSoonPage />,
      },
      {
        path: "now-playing",
        element: <NowPlayingPage />,
      },
    ],
  },
]);
