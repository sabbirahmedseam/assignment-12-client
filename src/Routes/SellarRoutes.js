import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSellar from "../Hooks/useSellar";
import Loading from "../Loading";

const SelllarRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSellar, load] = useSellar(user?.email);
  const [isAdmin, adminLoad] = useAdmin(user?.email);

  // console.log(isSellar);
  const location = useLocation();
  if (loading || load || adminLoad) {
    return <Loading></Loading>;
  }
  if ((user && isSellar) || isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SelllarRoutes;
