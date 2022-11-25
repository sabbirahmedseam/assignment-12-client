import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ModalPart = ({ itemInfo, setItemInfo }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(itemInfo);
  const { model, brand, resale_price, image } = itemInfo;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const brand = form.brand.value;
    const price = form.resale_price.value;
    const location = form.location.value;
    const cndCar = {
      name,
      phone,
      image,
      model,
      email,
      brand,
      price,
      location,
    };
    console.log(cndCar);
    fetch("http://localhost:5000/bookedCar", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cndCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("booked successfully");
        setItemInfo(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setItemInfo(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{model} </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="brand"
              disabled
              value={brand}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="resale_price"
              disabled
              value={`${resale_price}$`}
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="location"
              placeholder="location"
              className="input w-full input-bordered"
            />
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
      </div>
    </div>
  );
};

export default ModalPart;
