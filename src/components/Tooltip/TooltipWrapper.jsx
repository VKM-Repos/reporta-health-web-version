import { useState } from "react";

function TooltipWrapper({ children, text, className }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={`relative md:inline-block hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="bg-primary min-w-fit flex   text-white text-xs rounded px-4 py-2 absolute top-0 left-[3rem] transform  whitespace-nowrap">
          <div className="w-3 h-3 bg-primary transform rotate-45 -mt-[0.3rem] absolute top-1/2 -left-1" />
          {text}
        </div>
      )}
    </div>
  );
}

export default TooltipWrapper;
