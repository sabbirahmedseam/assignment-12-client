import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: cars = [] } = useQuery({
    queryKey: ["cars", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-chi.vercel.app/getBookedCar?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(cars);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-green-500 my-3">{user.email}</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Image</th>

            <th>Brand</th>
            <th>Model</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{car.name}</td>
              <td>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={car.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>
                <Link to={`/dashboard/payment/${car._id}`}>
                  {car.paid ? (
                    <button className="btn btn-primary" disabled>
                      Paid
                    </button>
                  ) : (
                    <button className="btn btn-primary">Pay</button>
                  )}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
