import Header from "@/app/components/Header";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Header rendering", () => {
  it("toggle mobile menue", async () => {
    render(<Header />);
    expect(screen.queryByTestId("toggled-menu")).not.toBeInTheDocument();
    const menuButton = screen.getByTestId("toggle-menu");
    await userEvent.click(menuButton);
    expect(screen.getByTestId("toggled-menu")).toBeInTheDocument();
  });
});
