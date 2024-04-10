"use client";

import { useEffect, useState } from "react";
import { option } from "../../ts/option";
import SelectItem from "./SelectItem";

function SelectBody({
  data,
  toggleSelect,
  propertyId,
  moveIdToParent,
  moveParamToParent,
}: {
  data: option[];
  toggleSelect: boolean;
  propertyId: number;
  moveIdToParent: any;
  moveParamToParent: any;
}) {
  const [filteredArray, setFilteredArray] = useState(data);
  useEffect(() => {
    setFilteredArray(data);
  }, [data]);
  const [inputValue, setInputValue] = useState("");
  const handleId = (id: number, name: string, propertyId: number) => {
    moveIdToParent(id, name, propertyId);
  };
  const handleSelectedParam = (id: number, name: string, itemName: string) => {
    moveParamToParent(id, name, itemName);
  };
  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = data.filter((item: option) =>
      item?.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArray(filtered);
  };
  return (
    <ul
      className={`bg-white rounded-lg border border-gray-1 absolute top-14 w-full p-1 z-10 ${
        !toggleSelect && "hidden"
      }`}
    >
      <li>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="search ..."
          className="w-full border border-gray1 rounded-lg px-3 py-2"
        />
      </li>
      {filteredArray &&
        filteredArray.map((item: option) => {
          return (
            <SelectItem
              key={item.id}
              item={item}
              propertyId={propertyId}
              moveSelectedItemToParent={handleId}
              moveSelectedParamToParent={handleSelectedParam}
            />
          );
        })}
    </ul>
  );
}

export default SelectBody;
