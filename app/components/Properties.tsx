"use client";
import React, { useEffect, useState } from "react";
import SearchableSelect from "./select/SearchableSelect";
import { useSearchParams } from "next/navigation";
import { option } from "../ts/option";

function Properties({ properties }: { properties: option[] }) {
  const [newProperties, setNewProperties] = useState([]);
  useEffect(() => {
    setNewProperties([...properties, { id: "other", name: "other" }]);
    console.log(properties);
  }, [properties]);
  return (
    <div className="mt-3">
      <p className="text-lg font-bold">
        Properities
        <span className="text-red-500">*</span>
      </p>
      <SearchableSelect data={newProperties} type="properties" propertyId={0} />
    </div>
  );
}

export default Properties;
