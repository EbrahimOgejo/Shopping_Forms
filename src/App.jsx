import { useState } from "react";
import { initialItems } from "./data/initialItems";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add new item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Filtered + searched items
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>Shopping List</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ItemForm addItem={addItem} />

      <ItemList items={filteredItems} />
    </div>
  );
}

export default App;
