import React from "react";
import "./Input.css";

export default function Input({value, name, placeholder, type, onValueChange, invalid}) {

  return (
    <div>
      <input
      className={`form-control ${invalid ? "" : "invalid"}`}
      value={value}
      onChange={(e) =>onValueChange(e)}
      name={name}
      type={type}
      placeholder={placeholder}
    />
    </div>
    
  );
}