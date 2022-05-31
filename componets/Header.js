import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const btnClicked = () => {
  //   console.log("button clicked");
  //   //alert("clicked");
  // };
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add note"}
        color={showAdd ? "black" : "green"}
        onClick={onAdd}
      />
    </div>
  );
};

export default Header;
