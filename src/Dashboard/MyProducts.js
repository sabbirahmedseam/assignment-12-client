import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
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

  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl text-green-600">{user?.email} </h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Advertise</th>
            <th>Delete</th>
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
              <td><button className="btn">Advertise</button></td>
              <td>
                <button
                  onClick={() => handleDlt(product._id)}
                  className="btn btn-primary"
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
