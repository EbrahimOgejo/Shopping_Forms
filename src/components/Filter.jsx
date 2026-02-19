function Filter({ selectedCategory, setSelectedCategory }) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      data-testid="category-filter"
    >
      <option value="All">All</option>
      <option value="Groceries">Groceries</option>
      <option value="Toiletries">Toiletries</option>
      <option value="Stationery">Stationery</option>
    </select>
  );
}

export default Filter;
