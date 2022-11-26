import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useToken from "../Hooks/useToken";
import Loading from "../Loading";

const Registration = () => {
  const { createUser, loading, updateUser, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [actEmail, setActEmail] = useState(null);
  const [token] = useToken(actEmail);
  const [seller, setSeller] = useState(false);
  const [buyer, setBuyer] = useState(false);
  const [value, setValue] = useState("");
  const [loginError, setLoginError] = useState("");
  if (loading) {
    <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   normal sign in
  const handleRegister = (data) => {
    let role = value;
    // console.log(data.email, data.password);

    // console.log(seller, buyer);
    // console.log(value);

    const profile = {
      displayName: data.name,
    };
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUser(profile)
          .then(() => {
            collectUser(data.name, data.email, role);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => setLoginError(err.message));

    const collectUser = (name, email, role) => {
      const user = { name, email, role };
      fetch("https://assignment-12-server-chi.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setActEmail(email);
          toast.success("user added successfully");
        });
    };
  };

  const handleSeller = () => {
    setSeller("sellar");
    setValue("seller");
    setBuyer(false);
  };
  const handleBuyer = () => {
    setBuyer("user");
    setValue("user");

    setSeller(false);
  };

  // google sign in
  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        const data = res.user;
        const email = data.email;
        const name = data.displayName;
        let role = "user";
        const user = { email, name, role };

        fetch("https://assignment-12-server-chi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setActEmail(email);
            toast.success("user added successfully");
            navigate("/");
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-[800px] flex justify-center items-cente ">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Registration</h2>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
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
          </div>
          <div className="mt-3">
            <span>Registration as a</span>

            <button
              onClick={() => handleBuyer()}
              className="btn btn-sm"
              disabled={buyer}
            >
              user
            </button>

            <button
              disabled={seller}
              onClick={() => handleSeller()}
              className="btn btn-sm"
            >
              seller
            </button>
          </div>
          {(seller || buyer) && (
            <>
              <input
                className=" btn btn-accent w-full max-w-xs"
                value="Registration"
                type="submit"
              />
              {loginError && <p className="text-red-500">{loginError}</p>}
            </>
          )}
        </form>
        <p>
          Already have an account?
          <Link className="text-accent" to="/login">
            login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={() => handleGoogle()}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Registration;
