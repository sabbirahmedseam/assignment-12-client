import { createBrowserRouter } from "react-router-dom";
import General from "../Home/General";
import Home from "../Home/Home";
import Normal from "../Home/Normal";
import Racing from "../Home/Racing";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/racing/:id",
        element: <Racing></Racing>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      { path: "/normal", element: <Normal></Normal> },
      { path: "/general", element: <General></General> },
    ],
  },
]);
export default router;
