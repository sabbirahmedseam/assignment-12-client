import React from "react";

const Loading = () => {
  return (
    <div>
      <progress className="progress w-56" value="10" max="100"></progress>
    </div>
  );
};

export default Loading;
