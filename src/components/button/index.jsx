import React from "react";
import "./button.css";

const Button = props => (
  <button
    disabled={props.disabled}
    type={props.type}
    className={props.className}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
