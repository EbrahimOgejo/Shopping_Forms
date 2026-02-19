import ShoppingItem from "./ShoppingItem";

function ItemList({ items }) {
  if (items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul data-testid="item-list">
      {items.map((item) => (
        <ShoppingItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemList;
