import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const SelectDropdown = ({ options, selectTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setOption(value);
    // console.log(value);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col border shadow-sm border-background rounded-md py-2 px-1 ">
      <label
        className="w-full px-2 cursor-pointer flex flex-row items-center traking-wide justify-between text-xs font-semibold text-secondary "
        onClick={toggleDropdown}
      >
        {option || selectTitle}
        <AiOutlineDown className="" />{" "}
      </label>
      <div className="w-full relative flex flex-col ">
        {isOpen && (
          <div className="absolute z-30 left-0 top-[100%] my-2 min-w-full max-h-[12rem] border border-background  shadow-xl rounded-md bg-white overflow-auto">
            <ul className="my-2 py-1 text-secondary text-[0.6rem]">
              <li className="px-1 py-1 text-md bg-primary text-white rounded-sm cursor-pointer">
                {selectTitle}
              </li>
              {options.map((option) => (
                <li
                  className="flex flex-col my-1 px-1 py-1 text-md hover:bg-gray font-semibold rounded-sm hover:text-primary cursor-pointer"
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectDropdown;
