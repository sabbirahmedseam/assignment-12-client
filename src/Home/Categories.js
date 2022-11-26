import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Racing",
      img: "https://i.ibb.co/qB4fk0x/images-q-tbn-ANd9-Gc-Rw-Va54-Mj-EDSz-0zk9-CSECGUc-VJl-Gwp-Pb-Fmw-usqp-CAU.jpg",
      link: "racing",
      id: 1,
    },
    {
      name: "General",
      img: "https://i.ibb.co/ck533dS/43177-ANI8066.jpg",
      link: "general",
      id: 2,
    },
    {
      name: "Normal",
      img: "https://i.ibb.co/qNgzLvQ/pulsar-1-20181127.jpg",
      link: "normal",
      id: 3,
    },
  ];
// seam a  d
  return (
    <div className="my-5">
      <h2 className="text-5xl text-center my-12 text-primary font-bold">
        We are Providing All three categories Bike
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((ctg, idx) => (
          <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
            <figure className=" h-[189px]">
              <img src={ctg.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ctg.name}!</h2>

              <div className="card-actions justify-end">
                <Link to={`/${ctg.link}/${ctg.id}`}>
                  <button className="btn btn-primary">Show All</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
