import React from "react";
import bike from "../asset/ktm.jpg";

const Banner = () => {
  return (
    <div className="w-[800px] h-[500px] bg-gray-900">
      {/* <img className="w-1/2 mx-auto" src={bike} alt="" /> */}
      <img className="w-1/2 mx-auto" src='https://i.ibb.co/VB1cYbf/ktm.jpg' alt="" />
    </div>
  );
};

export default Banner;