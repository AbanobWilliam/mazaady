export const dynamic = "force-dynamic";

import MainCategory from "../components/MainCategory";
import OtherOption from "../components/OtherOption";
import Properties from "../components/Properties";
import SubCategories from "../components/SubCategories";
import SubProperities from "../components/SubProperities";
import SubmitForm from "../components/SubmitForm";
async function getCategories() {
  const res = await fetch("https://staging.mazaady.com/api/v1/get_all_cats", {
    headers: {
      "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
async function getProperties(id: string | string[]) {
  console.log(id);
  const res = await fetch(
    `https://staging.mazaady.com/api/v1/properties?cat=${id}`,
    {
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  return res.json();
}

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categories = await getCategories();
  let properties = [];
  if (
    searchParams &&
    Object.keys(searchParams).length > 0 &&
    searchParams.subcategory_id !== undefined
  ) {
    properties = await getProperties(searchParams.subcategory_id);
  }
  return (
    <div className="container mx-auto mt-12 px-5 lg:px-0">
      <div className="bg-white rounded-2xl p-4 lg:p-6">
        <MainCategory categories={categories.data.categories} />
        <SubCategories categories={categories.data.categories} />
        {properties && properties?.data?.length > 0 && (
          <Properties properties={properties.data} />
        )}
        {searchParams.property_id === "other" && <OtherOption />}
        {properties && properties?.data?.length > 0 && (
          <SubProperities properties={properties.data} />
        )}
        <SubmitForm />
      </div>
    </div>
  );
}

export default page;
