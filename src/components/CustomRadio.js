import React from "react";
import "./styles.css";
const CustomRadio = ({ name, label, onChange, value, disabled, style }) => {
  return (
    <label style={style} className="labelClassname">
      <input
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        className="radio-input"
        disabled={disabled}
      />{" "}
      <span className="label-text">{label}</span>
    </label>
  );
};

export default CustomRadio;
