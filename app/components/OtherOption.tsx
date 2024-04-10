"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function OtherOption() {
  const [otherValue, setotherValue] = useState("");
  const params = useSearchParams();
  const category_id = params.get("category_id");
  const subcategory_id = params.get("subcategory_id");
  const property_id = params.get("property_id");
  const other = params.get("other");
  useEffect(() => {
    if (other !== null) {
      setotherValue(other);
    }
  }, [other]);
  const router = useRouter();
  const handleOtherInput = (e) => {
    router.push(
      `search?category_id=${category_id}&subcategory_id=${subcategory_id}&property_id=${property_id}&other=${e.target.value}`
    );
  };
  return (
    <div className="mt-3">
      <input
        type="text"
        className="border border-gray1 w-full rounded-lg h-12 px-3"
        placeholder="Other..."
        onChange={handleOtherInput}
        defaultValue={otherValue}
      />
    </div>
  );
}

export default OtherOption;
