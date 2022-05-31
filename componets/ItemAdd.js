import { useState } from "react";

const ItemAdd = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const submitItem = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter name of the product");
      return;
    }
    onAdd({ name, number });
    setName("");
    setNumber(0);
  };

  return (
    <form className="add-form" onSubmit={submitItem}>
      <div className="form-control">
        <h2>Add new item</h2>
      </div>
      <div className="form-control">
        <label> Item name</label>
        <input
          type="text"
          placeholder="name of the item"
          onChange={(p) => setName(p.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Number items</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input type="submit" value="Add" className="btn" />
      </div>
    </form>
  );
};

export default ItemAdd;
