import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [adminLoad, setAdminLoad] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-12-server-chi.vercel.app/user/wanted?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.message);
          if (data.message === "admin") {
            // console.log(data.message);
            setIsAdmin(data.message);
            setAdminLoad(false);
          } else {
            setAdminLoad(false);

            return;
          }
        });
    }
  }, [email]);
  return [isAdmin, adminLoad];
};

export default useAdmin;
