import { useState, useEffect } from "react";
import COUNTRIES from "./countries";
import CountryList from "./CountryList";
import Input from "./Input";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setFilteredCountries(COUNTRIES);
    } else {
      setFilteredCountries(
        COUNTRIES.filter((country) =>
          country.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  function searchHandler(search) {
    setSearchTerm(search);
  }

  return (
    <>
      <Input onSearch={searchHandler} />
      <CountryList countries={filteredCountries} />
    </>
  );
}

export default App;
