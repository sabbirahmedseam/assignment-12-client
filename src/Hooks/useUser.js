import React, { useEffect, useState } from "react";

const useUser = (email) => {
  const [isUser, setIsUser] = useState(null);
  const [userLoad, setUserLoad] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-12-server-chi.vercel.app/user/wanted?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.message);
          if (data.message === "user") {
            // console.log(data.message);
            setIsUser(data.message);
            setUserLoad(false);
          } else {
            setUserLoad(false);

            return;
          }
        });
    }
  }, [email]);
  return [isUser, userLoad];
};

export default useUser;
