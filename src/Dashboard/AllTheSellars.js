import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllTheSellars = () => {
  const { data: sellars = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/getallthesellars`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(sellars);
  console.log(sellars[2]?.sellarVerified);
  const handleVerify = (id) => {
    fetch(`http://localhost:5000/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("verified successfully");
        refetch();
      });
  };
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
      <h3 className="text-3xl text-green-600">All Sellars :{sellars.length}</h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Email</th>
            <th>Image</th>

            <th>Brand</th>
            <th>Model</th>
            <th>Verify</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sellars.map((user, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{user.email}</td>
              <td>
                <div className="avatar">
                  <div className="w-[50px] rounded-full">
                    <img src={user.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{user.brand}</td>
              <td>{user.model}</td>
              <td>
                {user?.sellarVerified ? (
                  <button className="btn btn-sm " disabled>
                    verified
                  </button>
                ) : (
                  <button
                    onClick={() => handleVerify(user._id)}
                    className="btn btn-sm"
                  >
                    Verify
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDlt(user._id)}
                  className="btn btn-sm"
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

export default AllTheSellars;
