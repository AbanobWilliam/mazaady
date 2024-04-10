"use client";
import { SetStateAction, useState } from "react";

const options = [
  { id: 1, name: "Products" },
  { id: 2, name: "Articles" },
  { id: 3, name: "Reviews" },
];
function Filters() {
  const [selected, setSelected] = useState("Products");

  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelected(event.target.value);
  };
  return (
    <ul className="flex gap-x-2.5">
      {options.map((option) => {
        return (
          <li key={option.id}>
            <input
              id={option.name}
              type="radio"
              value={option.name}
              name="filters"
              className="hidden"
              onChange={handleRadioChange}
              checked={selected === option.name}
            />
            <label
              htmlFor={option.name}
              className={`${
                selected === option.name
                  ? "bg-yellow-light text-yellow border-yellow font-bold"
                  : "border-[#E0E0E0]"
              } text-sm border py-2 px-5 lg:px-7 rounded-2xl block transition-all ease-in-out duration-300`}
            >
              {option.name}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default Filters;
