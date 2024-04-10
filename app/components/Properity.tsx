import { option } from "../ts/option";
import SearchableSelect from "./select/SearchableSelect";

function Properity({ properity }: any) {
  return (
    <div className="mt-3">
      <p className="text-lg font-bold">
        {properity.name}
        <span className="text-red-500">*</span>
      </p>
      <SearchableSelect
        data={properity.options}
        type="supproperities"
        propertyId={properity.id}
      />
    </div>
  );
}

export default Properity;
