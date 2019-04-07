import React from "react";
import { render } from "react-dom";
import { CustomCheckbox, CustomRadio } from "../../src";

const options = [
  {
    label: "France",
    value: "FR"
  },
  {
    label: "China",
    value: "CN"
  },
  {
    label: "New Zealand",
    value: "NZ"
  },
  {
    label: "Ukraine",
    value: "UA"
  }
];
const radioChange = e => {
  console.log(e.target.value);
};
const checkboxChange = e => {
  console.log(e.target.checked);
};

const App = () => (
  <div>
    {options.map(option => (
      <CustomRadio
        key={option.value}
        label={option.label}
        name="countries"
        value={option.value}
        style={{ display: "block" }}
        onChange={radioChange}
      />
    ))}
    <div>
      <CustomCheckbox label="Remember Me" onChange={checkboxChange} />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
