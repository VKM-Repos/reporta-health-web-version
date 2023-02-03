import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const SelectDropdown = ({
  options,
  selectTitle,
  onOptionClicked,
  isOpen,
  selectedOption,
  toggleDropdown,
  close,
}) => {
  return (
    <>
      <div className="w-full flex flex-col shadow-sm border-2 border-black/10 rounded-md py-2 px-1 ">
        <label
          className="w-full px-2 cursor-pointer flex flex-row items-center traking-wide justify-between text-xs font-semibold text-black "
          onClick={toggleDropdown}
        >
          {selectedOption || selectTitle}
          {/* <AiOutlineDown className="" />{" "} */}
          {isOpen ? (
            <span className="rotate-180 transition-all ease-in duration-150">
              <AiOutlineDown />
            </span>
          ) : (
            <span className="transition-all ease-in duration-150">
              <AiOutlineDown />
            </span>
          )}
        </label>
        <div className="w-full relative flex flex-col ">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="profile"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "15rem", opacity: 1 }}
                exit={{ height: "-15rem", opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute z-30 left-0 top-[100%] my-2 min-w-full max-h-[12rem] border border-background  shadow-xl rounded-md bg-white/90 overflow-auto "
              >
                <div
                  onClick={close}
                  className="w-screen h-screen fixed inset-0"
                ></div>
                <ul className="my-2 py-1 text-secondary text-[0.6rem] relative">
                  <li className="px-1 py-1 text-md bg-secondary text-white rounded-sm cursor-pointer">
                    {selectTitle}
                  </li>
                  {options.map((option) => (
                    <li
                      className="flex flex-col my-1 px-1 py-1 text-md hover:bg-black/20 font-semibold rounded-sm hover:text-primary cursor-pointer"
                      onClick={onOptionClicked}
                      key={Math.random()}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
export default SelectDropdown;
