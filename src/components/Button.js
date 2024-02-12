import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1 m-2 rounded-xl bg-gray-200">{name}</button>
    </div>
  );
};

export default Button;
