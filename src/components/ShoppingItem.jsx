function ShoppingItem({ item }) {
  return (
    <li data-testid="shopping-item">
      {item.name} - {item.category}
    </li>
  );
}

export default ShoppingItem;
