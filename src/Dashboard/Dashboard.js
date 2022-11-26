import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSellar from "../Hooks/useSellar";
import useUser from "../Hooks/useUser";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isSellar] = useSellar(user?.email);
  const [isUser] = useUser(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  // console.log(isSellar, isUser, isAdmin);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="drawer-part" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-part" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isUser && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {isSellar && (
              <>
                <li>
                  <Link to="/dashboard/sellaradd">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/sellarproduct">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddvertise">Addvertise Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/alltheusers">All the Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/allthesellars">All the sellars</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
