import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllTheUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-chi.vercel.app/getalltheusers`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDlt = (id) => {
    console.log(id);

    fetch(`https://assignment-12-server-chi.vercel.app/userdelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("deleted successfully");
        refetch();
      });
  };

  console.log(users);
  return (
    <div className="overflow-x-auto">
      <h3 className="text-3xl text-green-600">All Users :{users.length}</h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No.</th>
            <th>Email</th>
            <th>Image</th>

            <th>Brand</th>
            <th>Model</th>
            <th>price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
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
              <td>{user.price}</td>
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

export default AllTheUsers;
