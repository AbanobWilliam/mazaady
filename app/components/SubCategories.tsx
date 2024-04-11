"use client";
import React, { useEffect, useState } from "react";
import SearchableSelect from "./select/SearchableSelect";
import { useSearchParams } from "next/navigation";
import { option } from "../ts/option";

function SubCategories({ categories }: { categories: option[] }) {
  const [subCategories, setSubCategories] = useState<option[] | undefined>([]);
  const params = useSearchParams();
  useEffect(() => {
    const cat_id = params.get("category_id");
    if (cat_id !== null) {
      const subCat = categories?.filter((c) => {
        return c.id.toString() == cat_id;
      });
      setSubCategories(subCat[0]?.children);
    }
  }, [categories, params]);
  return (
    <div className="mt-3">
      <p className="text-lg font-bold">
        Sub Categories
        <span className="text-red-500">*</span>
      </p>
      <SearchableSelect
        data={subCategories ?? []}
        type="subcategories"
        propertyId={0}
      />
    </div>
  );
}

export default SubCategories;
