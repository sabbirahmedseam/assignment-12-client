import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Loading";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [isAdmin, adminLoad] = useAdmin(user?.email);

  // console.log(isSellar);
  const location = useLocation();
  if (loading || adminLoad) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
