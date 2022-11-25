import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ModalPart from "./ModalPart";
import { HiCheckBadge } from "react-icons/hi2";


const Racing = () => {
  const categories = useLoaderData();
  console.log(categories);
  const [itemInfo, setItemInfo] = useState(null);

  return (
    <div>
      <h2 className="text-3xl text-green-700">Racing Part</h2>

      <div className="grid grid-cols-3 gap-3">
        {categories.map((ctg, idx) => (
          <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={ctg.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Brand : {ctg.brand}</h2>
              <h2 className="card-title">Model : {ctg.model}</h2>
              <h2 className="card-title">Condition : {ctg.condition}</h2>
              <h2 className="card-title">
                Sellar Name : {ctg.name}{" "}
                {ctg?.sellarVerified ? (
                  <HiCheckBadge className="text-blue-500"></HiCheckBadge>
                ) : (
                  ""
                )}
              </h2>
              <h2 className="card-title">Posting Date : {ctg.date}</h2>
              <h2 className="card-title">Location : {ctg.location}</h2>
              <h2 className="card-title">
                Purchase Year : {ctg.purchase_year}
              </h2>
              <h2 className="card-title">
                Original Price:{ctg.original_price}$
              </h2>
              <h2 className="card-title">Resale Price : {ctg.resale_price}$</h2>
              <h2 className="card-title">Usage Time : {ctg.usage} Months</h2>
              <h2 className="card-title">Type : {ctg.type}</h2>
              <h2 className="card-title">Email : {ctg.email}</h2>
              <h2 className="card-title">Phone : {ctg.phone}</h2>
              <div className="card-actions justify-center">
                <label
                  onClick={() => setItemInfo(ctg)}
                  htmlFor="my-modal-3"
                  className="btn btn-primary"
                >
                  Book Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {itemInfo && (
        <ModalPart itemInfo={itemInfo} setItemInfo={setItemInfo}></ModalPart>
      )}
    </div>
  );
};

export default Racing;
