import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home page rendering", () => {
  it("it should have products text", () => {
    render(<Home />);
    expect(screen.getAllByText("Products"));
  });
});
