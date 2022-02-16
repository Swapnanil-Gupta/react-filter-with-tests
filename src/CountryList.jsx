function CountryList({ countries }) {
  return (
    <ul data-testid="country-list">
      {countries.map((country) => (
        <li key={country} data-testid="country-list-item">
          {country}
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
