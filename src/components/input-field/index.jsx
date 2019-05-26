import React from "react";
import "./input-field.css";

const InputField = props => (
  <div className="Input-field">
    {props.label && <label htmlFor={props.id}>{props.label}</label>}
    <input
      checked={props.checked}
      type={props.type}
      id={props.id}
      name={props.name}
      minLength="4"
      maxLength="20"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onSubmit={props.onSubmit}
      {...props}
    />
  </div>
);

export default InputField;
