import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useToken = (email, from) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      fetch(`https://assignment-12-server-chi.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            localStorage.setItem("security", data.accessToken);
            setToken(data.accessToken);
            navigate(from, { replace: true });
            toast.success("token add successfully");
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
