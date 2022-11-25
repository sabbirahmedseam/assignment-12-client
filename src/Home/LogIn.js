import { fromJSON } from "postcss";
import React, { useContext, useState } from "react";
// import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useToken from "../Hooks/useToken";
// import useToken from "../../hooks/useToken";
const LogIn = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const [actEmail, setActEmail] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(actEmail,from);


  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    console.log(data);
    signIn(data.email, data.password)
      .then(() => {
        // const user = result.user;
        setActEmail(data.email);
        toast.success("login successfully");
      })
      .catch((err) => setLoginError(err.message));
  };

  return (
    <div className="h-[800px] flex justify-center items-center ">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>

          <input
            className=" btn btn-accent w-full max-w-xs"
            value="login"
            type="submit"
          />
          {loginError && <p className="text-red-500">{loginError}</p>}
        </form>
        <p className="my-3">
          New to Resale Bike Hunt?
          <Link className="text-accent" to="/registration">
            Create new account
          </Link>
        </p>
       
      </div>
    </div>
  );
};

export default LogIn;
