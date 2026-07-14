import { createBrowserRouter } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import Posts from "./pages/Post";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllPosts />,
      },
      {
        path: "/post",
        element: <Posts />,
      },
    ],
  },
]);
