"use client";

import { useState } from "react";
import { option } from "../../ts/option";
import SelectBody from "./SelectBody";
import SelectHead from "./SelectHead";
import { useRouter, useSearchParams } from "next/navigation";
function SearchableSelect({
  data,
  type,
  propertyId,
}: {
  data: option[];
  type: string;
  propertyId: number;
}) {
  const params = useSearchParams();
  const [toggleSelect, setToggleSelect] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const router = useRouter();
  const handleSelectToggle = (clicked: boolean) => {
    setToggleSelect(clicked);
  };
  const handleSelectId = (id: number, name: string, property_id: number) => {
    if (window !== undefined) {
      setSelectedItem(name);
      setToggleSelect(false);
      if (type === "categories") {
        router.push("search?category_id=" + id);
      } else if (type === "subcategories") {
        const category_id = params.get("category_id");
        router.push(`search?category_id=${category_id}&subcategory_id=${id}`);
      } else if (type === "properties") {
        const category_id = params.get("category_id");
        const subcategory_id = params.get("subcategory_id");
        router.push(
          `search?category_id=${category_id}&subcategory_id=${subcategory_id}&property_id=${id}`
        );
      } else {
        const keys = window.location.search
          .split("?")[1]
          .split("&")
          .map((param) => {
            return param.split("=")[0];
          });
        console.log(keys);
        const filteredKeys = keys.filter((key) => {
          return key.toLowerCase() === property_id.toString().toLowerCase();
        });
        if (filteredKeys.length == 0) {
          router.push(`${window.location.href}&${propertyId}=${name}`);
        } else {
          setSelectedItem(propertyId.toString());
          const keys = window.location.search
            .split("?")[1]
            .split("&")
            .map((param) => {
              return param.split("=");
            });
          keys.map((key) => {
            if (key[0].toLowerCase() === property_id.toString().toLowerCase()) {
              return (key[1] = name);
            }
          });
          const newKeys = keys.map((key) => {
            return key.join("=");
          });
          const newUrl = newKeys.join("&");
          router.push(`${window.location.pathname}?${newUrl}`);
        }
      }
    }
  };
  const handleSelectedParam = (id: number, name: string) => {
    setSelectedItem(name);
  };
  return (
    <div className="mt-2 relative">
      <SelectHead
        sendToggleEventToParent={handleSelectToggle}
        selectedItem={selectedItem}
        toggleSelect={toggleSelect}
      />
      <SelectBody
        data={data}
        toggleSelect={toggleSelect}
        propertyId={propertyId}
        moveIdToParent={handleSelectId}
        moveParamToParent={handleSelectedParam}
      />
    </div>
  );
}

export default SearchableSelect;
