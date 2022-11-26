import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const model = form.model.value;
    const date = form.date.value;
    const image = form.image.value;
    const usage = form.usage.value;
    const condition = form.condition.value;
    const purchase_year = form.year.value;
    const phone = form.phone.value;
    const type = form.type.value;
    const email = form.email.value;
    const brand = form.brand.value;
    const original_price = form.original.value;
    const resale_price = form.resale.value;
    const product_id = form.product_id.value;
    const location = form.location.value;
    const addCar = {
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
    console.log(addCar);
    fetch("https://assignment-12-server-chi.vercel.app/sellarAddCar", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booked successfully");
        navigate("/dashboard/sellarproduct");
      });
  };

  return (
    <div className="w-1/2 my-10">
      <h2 className="text-3xl text-center">Add Your Products</h2>

      <form onSubmit={handleBooking} className="grid gap-3">
        <label>Posting Date:</label>
        <input
          name="date"
          type="text"
          placeholder="Date"
          className="input w-full input-bordered"
        />
        <label>Sellar Name:</label>
        <input
          name="name"
          type="text"
          defaultValue={user?.displayName}
          disabled
          placeholder="Your Name"
          className="input w-full input-bordered"
        />
        <label>Sellar Email:</label>
        <input
          name="email"
          defaultValue={user?.email}
          disabled
          type="email"
          placeholder="Email Address"
          className="input w-full input-bordered"
        />
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          className="input w-full input-bordered"
        />
        <label>Product_id:</label>
        <input
          type="text"
          name="product_id"
          placeholder="pls give 1/2/3"
          className="input w-full input-bordered"
        />
        <label>Model:</label>
        <input
          type="text"
          name="model"
          className="input w-full input-bordered"
        />
        <label>Type:</label>
        <input
          type="text"
          name="type"
          className="input w-full input-bordered"
        />
        <label>Image:</label>
        <input
          type="text"
          name="image"
          className="input w-full input-bordered"
        />
        <label>Condition:</label>
        <input
          type="text"
          name="condition"
          className="input w-full input-bordered"
        />
        <label>Purchase Year:</label>
        <input
          type="text"
          name="year"
          className="input w-full input-bordered"
        />
        <label>Original Price:</label>
        <input
          type="text"
          name="original"
          className="input w-full input-bordered"
        />
        <label>Resale Price:</label>
        <input
          type="text"
          name="resale"
          className="input w-full input-bordered"
        />
        <label>Usage Time:</label>
        <input
          type="text"
          placeholder="months"
          name="usage"
          className="input w-full input-bordered"
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          className="input w-full input-bordered"
        />
        <label>Contact no:</label>
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          className="input w-full input-bordered"
        />
        <input
          className="w-full input-bordered btn btn-accent"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
