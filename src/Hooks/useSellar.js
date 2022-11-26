import React, { useEffect, useState } from "react";

const useSellar = (email) => {
  const [isSellar, setIsSellar] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-12-server-chi.vercel.app/user/wanted?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.message);
          if (data.message === "sellar") {
            setIsSellar(data.message);
            setLoad(false);
          } else {
            setLoad(false);

            return;
          }
        });
    }
  }, [email]);
  return [isSellar, load];
};

export default useSellar;
