import React from "react";

const AdvertiseItems = ({ product }) => {
  console.log(product);
  const { brand, image, model, resale_price,type } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-[189px]">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Brand Name :{brand}</h2>
          <h2 className="card-title">Model Name :{model}</h2>
          <h2 className="card-title">Type :{type}</h2>
          <h2 className="card-title">Price :{resale_price}$</h2>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseItems;
