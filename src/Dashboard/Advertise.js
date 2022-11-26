import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Advertise = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["showadd"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/getadvertise");
      const data = await res.json();
      return data;
    },
  });
  console.log(products);

  const handleDeleteAddvertise = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteadvertiseitem/${id}`, {
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
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Brand</th>
              <th>Model</th>
              <th> Delete Advertise</th>
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
                  <button
                    onClick={() => handleDeleteAddvertise(product._id)}
                    className="btn btn-sm"
                  >
                    Dlt Advertise
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Advertise;
