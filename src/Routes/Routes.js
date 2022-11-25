import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../Dashboard/AddProducts";
import AllTheSellars from "../Dashboard/AllTheSellars";
import AllTheUsers from "../Dashboard/AllTheUsers";
import Dashboard from "../Dashboard/Dashboard";
import MyOrders from "../Dashboard/MyOrders";
import MyProducts from "../Dashboard/MyProducts";
import Payment from "../Dashboard/Payment";
import Blog from "../Home/Blog";
import General from "../Home/General";
import Home from "../Home/Home";
import LogIn from "../Home/LogIn";
import Normal from "../Home/Normal";
import Racing from "../Home/Racing";
import Registration from "../Home/Registration";
import Main from "../Layout/Main";
import AdminRoutes from "./AdminRoutes";
import ErrrorRoutes from "./ErrrorRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SelllarRoutes from "./SellarRoutes";
import UserRoutes from "./UserRoutes";

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
      { path: "/*", element: <ErrrorRoutes></ErrrorRoutes> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: (
          <UserRoutes>
            <MyOrders></MyOrders>
          </UserRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <UserRoutes>
            <Payment></Payment>
          </UserRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/getpayment/${params.id}`),
      },
      {
        path: "/dashboard/sellaradd",
        element: (
          <SelllarRoutes>
            <AddProducts></AddProducts>
          </SelllarRoutes>
        ),
      },
      {
        path: "/dashboard/sellarproduct",
        element: (
          <SelllarRoutes>
            <MyProducts></MyProducts>
          </SelllarRoutes>
        ),
      },
      {
        path: "/dashboard/alltheusers",
        element: (
          <AdminRoutes>
            <AllTheUsers></AllTheUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allthesellars",
        element: (
          <AdminRoutes>
            <AllTheSellars></AllTheSellars>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
