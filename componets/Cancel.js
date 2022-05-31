import React from "react";

const Cancel = ({ onCancel }) => {
  return (
    <div className="add-item">
      <h2>Cancel.....</h2>
      <button className="add" onClick={onCancel}>
        -
      </button>
    </div>
  );
};

export default Cancel;
