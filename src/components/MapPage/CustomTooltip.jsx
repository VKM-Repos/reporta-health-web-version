import React from "react";

const CustomTooltip = ({ text, children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute top-0 right-0 p-2 bg-primary text-white rounded-lg hidden hover:block">
        {text}
      </div>
    </div>
  );
};

export default CustomTooltip;
