import React from "react";

const Button = ({ clickAddBtnHandler }) => {
  return <button onClick={clickAddBtnHandler} className="add-button">추가!</button>
}

export default Button;
