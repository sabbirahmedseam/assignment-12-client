import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ModalPart = ({ itemInfo,setItemInfo }) => {
    const {name:nam}=useContext(AuthContext)
    console.log(nam);
  console.log(itemInfo);
  const { name } = itemInfo;

  const handleBooking=(data)=>{

  }


  return (
    <div>
      {/* user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name} </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
            //   value={}
              className="input w-full input-bordered"
            />
            
            <input
              name="name"
              type="text"
            //   defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
            //   defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email Address"
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
