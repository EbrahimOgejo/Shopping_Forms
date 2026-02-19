import { useState } from "react";

function ItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Groceries");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newItem = {
      id: Date.now(),
      name,
      category
    };

    addItem(newItem);

    setName("");
    setCategory("Groceries");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="item-form">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="item-name-input"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        data-testid="item-category-select"
      >
        <option value="Groceries">Groceries</option>
        <option value="Toiletries">Toiletries</option>
        <option value="Stationery">Stationery</option>
      </select>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
