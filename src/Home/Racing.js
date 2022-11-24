import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ModalPart from "./ModalPart";

const Racing = () => {
  const categories = useLoaderData();
  const [itemInfo, setItemInfo] = useState(null);

  return (
    <div>
      racing {categories.length}
      <div className="grid grid-cols-3 gap-3">
        {categories.map((ctg, idx) => (
          <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img src={ctg.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ctg.name}!</h2>
              <h2 className="card-title">{ctg.brand}!</h2>
              <h2 className="card-title">{ctg.condition}!</h2>
              <h2 className="card-title">{ctg.ctg_id}!</h2>
              <h2 className="card-title">{ctg.date}!</h2>
              <h2 className="card-title">{ctg.location}!</h2>
              <h2 className="card-title">{ctg.oirginal_price}!</h2>
              <h2 className="card-title">{ctg.resale_price}!</h2>
              <h2 className="card-title">{ctg.seller_name}!</h2>
              <h2 className="card-title">{ctg.usase_years}!</h2>
              <h2 className="card-title">{ctg.type}!</h2>

              <div className="card-actions justify-center">
                <label onClick={()=>setItemInfo(ctg)} htmlFor="my-modal-3" className="btn btn-primary">
                  Buy Now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      {itemInfo && <ModalPart itemInfo={itemInfo} setItemInfo={setItemInfo}></ModalPart>}
    </div>
  );
};

export default Racing;
