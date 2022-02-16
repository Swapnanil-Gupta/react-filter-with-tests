import CountryList from "./CountryList";
import { render, screen, within } from "@testing-library/react";

const countries = ["A", "B", "C"];
const listElTestId = "country-list";
const listItemElTestId = "country-list-item";

test("Should properly render a list of countries", () => {
  render(<CountryList countries={countries} />);
  const listEl = screen.getByTestId(listElTestId);
  expect(listEl).toBeInTheDocument();
  const listItemEls = within(listEl).getAllByTestId(listItemElTestId);
  expect(listItemEls).toHaveLength(countries.length);
  listItemEls.forEach((el, i) => expect(el).toHaveTextContent(countries[i]));
});
