import { option } from "../ts/option";
import SearchableSelect from "./select/SearchableSelect";

function MainCategory({ categories }: { categories: option[] }) {
  return (
    <div>
      <p className="text-lg font-bold">
        Main Category
        <span className="text-red-500">*</span>
      </p>

      <SearchableSelect data={categories} type="categories" propertyId={0} />
    </div>
  );
}

export default MainCategory;
