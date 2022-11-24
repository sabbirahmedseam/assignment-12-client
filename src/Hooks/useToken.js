import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useToken = (email) => {
  const [token, setToken] = useState("");
  const [tkLoad, setTkLoad] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.accessToken) {
            localStorage.setItem("security", data.accessToken);
            setToken(data.accessToken);
            toast.success("token add successfully");
          }
          setTkLoad(false);
        });
    }
  }, [email]);
  return [token, tkLoad];
};

export default useToken;
