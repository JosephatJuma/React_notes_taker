const Add = ({ onAdd, showAdd }) => {
  return (
    <div className="add-item">
      <h2>Add Item.....</h2>
      <button className="add" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default Add;
