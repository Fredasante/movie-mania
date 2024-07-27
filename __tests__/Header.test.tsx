import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  test("renders input and button", () => {
    render(<Header />);

    const inputElement = screen.getByPlaceholderText("Search...");
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(<Header />);

    const inputElement = screen.getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "test search" } });

    expect(inputElement).toHaveValue("test search");
  });
});

test("submits form with search query", () => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });

  render(<SearchInput />);

  const inputElement = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button");

  fireEvent.change(inputElement, { target: { value: "test search" } });
  fireEvent.submit(submitButton);

  expect(push).toHaveBeenCalledWith("/search?query=test%20search");
});
