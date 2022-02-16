function Input({ onSearch }) {
  function inputChangeHandler(e) {
    onSearch(e.target.value);
  }

  return (
    <input
      type="search"
      placeholder="Search..."
      onChange={inputChangeHandler}
      data-testid="search-input"
    />
  );
}

export default Input;
