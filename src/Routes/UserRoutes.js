import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useUser from "../Hooks/useUser";
import Loading from "../Loading";

const UserRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isUser, userLoad] = useUser(user?.email);
  const [isAdmin, adminLoad] = useAdmin(user?.email);
  // console.log(loading,userLoad,adminLoad);
  const location = useLocation();
  if (loading || userLoad||adminLoad) {
    return <Loading></Loading>;
  }
  if ((user && isUser) || isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoutes;
