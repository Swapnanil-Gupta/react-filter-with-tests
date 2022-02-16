import Input from "./Input";
import { render, screen, fireEvent } from "@testing-library/react";

const searchInputTestId = "search-input";

test("Should render an input element of type search", () => {
  render(<Input />);
  const searchInputEl = screen.getByTestId(searchInputTestId);
  expect(searchInputEl).toBeInTheDocument();
  expect(searchInputEl).toHaveAttribute("type", "search");
});

test("onSearch should be called with the typed value", () => {
  const onSearchMock = jest.fn();
  render(<Input onSearch={onSearchMock} />);
  const searchInputEl = screen.getByTestId(searchInputTestId);
  fireEvent.change(searchInputEl, {
    target: {
      value: "test",
    },
  });
  expect(searchInputEl).toHaveValue("test");
  expect(onSearchMock).toHaveBeenCalledWith("test");
});
