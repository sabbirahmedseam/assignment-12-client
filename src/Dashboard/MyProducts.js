import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myproduct?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);

  const handleDlt = (id) => {
    fetch(`http://localhost:5000/mydeleteproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("deleted successfully");
        refetch();
      });
  };

  const handleGiveAddvertise = (product) => {
    // console.log(product);
    const {
      name,
      model,
      image,
      type,
      usage,
      condition,
      date,
      product_id,
      purchase_year,
      phone,
      email,
      brand,
      original_price,
      resale_price,
      location,
    } = product;
    const addvertiseCar = {
      name,
      model,
      image,
      type,
      usage,
      condition,
      date,
      product_id,
      purchase_year,
      phone,
      email,
      brand,
      original_price,
      resale_price,
      location,
    };
    // console.log(addvertiseCar);

    fetch(`http://localhost:5000/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addvertiseCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Advertise car  successfully");
      });
  };

  

  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-green-600 my-3">{user?.email} </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Model</th>
            <th>SellStatus</th>
            <th>Advertise</th>
            <th>Delete Seller</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={product.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{product.brand}</td>
              <td>{product.model}</td>
              <td>
                {product.resale ? (
                  <button className="btn btn-sm" disabled>
                    sold
                  </button>
                ) : (
                  <button className="btn btn-sm">unsold</button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleGiveAddvertise(product)}
                  className="btn btn-sm"
                >
                  Advertise
                </button>
              </td>

              <td>
                <button
                  onClick={() => handleDlt(product._id)}
                  className="btn btn-sm btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
