import SearchableSelect from "@/app/components/select/SearchableSelect";
import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("SearchPage", () => {
  test("renders search input and filters the data based on user input", async () => {
    const data = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
      { id: 3, name: "Category 3" },
    ];

    render(<SearchableSelect data={data} type="categories" propertyId={0} />);

    const searchInput = screen.getByPlaceholderText("search ...");
    expect(searchInput).toBeInTheDocument();

    const initialItems = screen.getAllByRole("listitem");
    expect(initialItems).toHaveLength(data.length);

    await userEvent.type(searchInput, "Category 1");

    const filteredItems = screen.getAllByRole("listitem");
    expect(filteredItems).toHaveLength(1);
    expect(filteredItems[0]).toHaveTextContent("Category 1");

    fireEvent.change(searchInput, { target: { value: "" } });

    const resetItems = screen.getAllByRole("listitem");
    expect(resetItems).toHaveLength(data.length);
  });
});
