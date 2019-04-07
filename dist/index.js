"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomRadio = exports.CustomCheckbox = exports.MyComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CustomRadio = require("./components/CustomRadio");

var _CustomRadio2 = _interopRequireDefault(_CustomRadio);

var _CustomCheckbox = require("./components/CustomCheckbox");

var _CustomCheckbox2 = _interopRequireDefault(_CustomCheckbox);

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent() {
  return _react2.default.createElement(
    "h1",
    null,
    "Hello from My Component"
  );
};
exports.MyComponent = MyComponent;
exports.CustomCheckbox = _CustomCheckbox2.default;
exports.CustomRadio = _CustomRadio2.default;