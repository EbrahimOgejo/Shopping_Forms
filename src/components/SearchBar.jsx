function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search items..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      data-testid="search-input"
    />
  );
}

export default SearchBar;
