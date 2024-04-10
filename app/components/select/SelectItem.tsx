import React, { useEffect, useState } from "react";
import { option } from "../../ts/option";
import { useSearchParams } from "next/navigation";

function SelectItem({
  item,
  propertyId,
  moveSelectedItemToParent,
  moveSelectedParamToParent,
}: {
  item: option;
  propertyId: number;
  moveSelectedItemToParent: any;
  moveSelectedParamToParent: any;
}) {
  const params = useSearchParams();
  useEffect(() => {
    const cat_id = params.get("category_id");
    const subcat_id = params.get("subcategory_id");
    const properity_id = params.get("property_id");
    const itemName = params.get(item.name);
    if (cat_id !== null) {
      if (cat_id == item.id.toString()) {
        moveSelectedParamToParent(item.id, item.name);
      }
    }
    if (subcat_id !== null) {
      if (subcat_id == item.id.toString()) {
        moveSelectedParamToParent(item.id, item.name);
      }
    }
    if (properity_id !== null) {
      if (properity_id == item.id.toString()) {
        moveSelectedParamToParent(item.id, item.name);
      }
    }
    if (properity_id !== null) {
      if (properity_id == item.id.toString()) {
        moveSelectedParamToParent(item.id, item.name);
      }
    }
    if (item.name !== null) {
      if (itemName == item.name) {
        moveSelectedParamToParent(item.id, item.name, itemName);
      }
    }
  }, [
    item.id,
    item.name,
    moveSelectedItemToParent,
    moveSelectedParamToParent,
    params,
  ]);
  const hadleItemClick = () => {
    moveSelectedItemToParent(item.id, item.name, propertyId);
  };
  return (
    <li className="px-2 py-1" key={item.id}>
      <button onClick={hadleItemClick}>{item.name}</button>
    </li>
  );
}

export default SelectItem;
