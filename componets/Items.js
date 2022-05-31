import Item from "./Item";
const Items = ({ items, onAdd }) => {
  return (
    <div>
      <div>
        {items.map((pro) => (
          <Item key={pro.number} item={pro} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
};

export default Items;
