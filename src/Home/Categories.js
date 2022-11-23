import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Racing",
      img: "https://i.ibb.co/VY1VgQq/images-q-tbn-ANd9-Gc-Qz-Bd-LUx0-XVr-Vb-pqm-N0-NHIq0h-Hv2k-FCNw2-PQ-usqp-CAU.jpg",
      link: "racing",
      id: 1,
    },
    {
      name: "General",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4YZ7rdmJJ96TD0Z1VApBQZUJiJDkuhIjTA&usqp=CAU",
      link: "general",
      id: 2,
    },
    {
      name: "Normal",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYFy_IBklziVCHthccklLKiIeLrQiXX2h8g&usqp=CAU",
      link: "normal",
      id: 3,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {categories.map((ctg, idx) => (
        <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img src={ctg.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{ctg.name}!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to={`/${ctg.link}/${ctg.id}`}>
                <button className="btn btn-primary">Show All</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
