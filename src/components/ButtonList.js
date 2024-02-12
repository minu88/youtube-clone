import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Live", "Songs", "Cooking", "Valentines", "Cricket"];
  return (
    <div className="flex">
      {list.map((single, index) => (
        <Button key={index} name={single} />
      ))}
    </div>
  );
};

export default ButtonList;
