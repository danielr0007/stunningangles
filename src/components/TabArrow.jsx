import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function TabArrow({ selected }) {
  return (
    <div className={`arrow-tab ${selected ? "up" : "down"}`}>
      <IoIosArrowDown />
    </div>
  );
}

export default TabArrow;
