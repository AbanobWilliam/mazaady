"use cleint";

import { useEffect, useState } from "react";
import Chivron from "../icons/Chivron";

function SelectHead({
  sendToggleEventToParent,
  selectedItem,
  toggleSelect,
}: {
  sendToggleEventToParent: any;
  selectedItem: string;
  toggleSelect: boolean;
}) {
  const [clicked, setClicked] = useState(toggleSelect);
  useEffect(() => {
    setClicked(toggleSelect);
    console.log(selectedItem);
  }, [selectedItem, toggleSelect]);
  const handleSelectClick = () => {
    sendToggleEventToParent(!clicked);
    setClicked(!clicked);
  };
  return (
    <button
      className="h-12 w-full border border-gray1 rounded-lg flex justify-between items-center px-3"
      onClick={handleSelectClick}
    >
      {selectedItem !== "" ? selectedItem : "Select Option"}
      <span
        className={`${
          clicked ? "" : "rotate-180"
        } transition-all ease-in-out duration-300`}
      >
        <Chivron />
      </span>
    </button>
  );
}

export default SelectHead;
