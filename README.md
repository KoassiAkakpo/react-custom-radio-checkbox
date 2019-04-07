# Simple React Custom Checkbox and Radio input

Simple custom radio and checkbox input.

## Installation

Install `react-custom-radio-checkbox` with [npm](https://www.npmjs.com/):

```bash

$ npm install react-custom-radio-checkbox --save

```

## Quick Start

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { CustomRadio, CustomCheckbox } from "react-custom-radio-checkbox";

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
        name="country"
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

ReactDOM.render(<App />, document.getElementById("root"));
```

## Demo

[![Edit react-custom-radio-checkbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mjzz8qlx9y?fontsize=14)

## Props

| Name        | Type       | Description                                |
| ----------- | ---------- | ------------------------------------------ |
| `name`      | `String`   | Name of input.                             |
| `label`     | `String`   | Label for input.                           |
| `value`     | `String`   | Value for input.                           |
| `className` | `String`   | Classname for input.                       |
| `disabled`  | `boolean`  | Disabled the input.                        |
| `style`     | `Function` | Inline style for the input.                |
| `onChange`  | `Function` | The method to call when a page is clicked. |
