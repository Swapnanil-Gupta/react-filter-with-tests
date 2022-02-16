import App from "./App";
import { render, screen, within, fireEvent } from "@testing-library/react";

jest.mock("./countries.js", () => ({
  __esModule: true,
  default: ["A", "B", "C"],
}));

const listElTestId = "country-list";
const listItemElTestId = "country-list-item";
const searchInputTestId = "search-input";

test("Should properly render a list of countries", () => {
  render(<App />);
  let listElem = screen.getByTestId(listElTestId);
  let listItemElems = within(listElem).getAllByTestId(listItemElTestId);
  expect(listItemElems).toHaveLength(3);
});

test("should perform case-insensitive filtering of the list of countries", () => {
  render(<App />);
  let searchInputEl = screen.getByTestId(searchInputTestId);
  fireEvent.change(searchInputEl, {
    target: {
      value: "A",
    },
  });
  let listElem = screen.getByTestId(listElTestId);
  let listItemElems = within(listElem).getAllByTestId(listItemElTestId);
  expect(listItemElems).toHaveLength(1);
  expect(listItemElems[0]).toHaveTextContent("A");
  fireEvent.change(searchInputEl, {
    target: {
      value: "b",
    },
  });
  listItemElems = within(listElem).getAllByTestId(listItemElTestId);
  expect(listItemElems).toHaveLength(1);
  expect(listItemElems[0]).toHaveTextContent("B");
});
