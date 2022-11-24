import { createBrowserRouter } from "react-router-dom";
import Blog from "../Home/Blog";
import General from "../Home/General";
import Home from "../Home/Home";
import LogIn from "../Home/LogIn";
import Normal from "../Home/Normal";
import Racing from "../Home/Racing";
import Registration from "../Home/Registration";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/racing/:id",
        element: (
          <PrivateRoutes>
            <Racing></Racing>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/general/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <General></General>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/normal/:id",
        element: (
          <PrivateRoutes>
            <Normal></Normal>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/registration", element: <Registration></Registration> },
    ],
  },
]);
export default router;
