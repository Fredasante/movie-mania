import Hero from "@/components/Hero";
import { render, screen } from "@testing-library/react";

it("renders a heading", () => {
  render(<Hero />);
  const heading = screen.getByRole("heading", {
    name: /movies/i,
  });
  expect(heading).toBeInTheDocument();
});
