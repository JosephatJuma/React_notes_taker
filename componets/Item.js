import { useState } from "react";
const Item = ({ item }) => {
  const [n, setN] = useState(item.number);

  //increase/decrease number for each item using hook
  const increment = () => {
    const newN = n + 1;
    setN(newN);
  };
  const decrement = () => {
    const newN = n - 1;
    if (newN < 0) return;
    setN(newN);
  };
  return (
    <>
      <div className="items-container">
        <div className="item">
          <h2>{item.name}:</h2>
        </div>
        <div className="details">
          <div>
            <button className="on" onClick={() => decrement()}>
              &#60;{" "}
            </button>
          </div>
          <div className="on">{n}</div>
          <div>
            <button className="on" onClick={() => increment()}>
              &#62;
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Item;
