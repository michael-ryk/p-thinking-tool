"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
function Headings() {
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)("h1", { children: "Headings" }) }));
}
exports.default = Headings;
const Wrapper = styled_components_1.default.section `
  border: 1px solid grey;
  margin: 0.25rem;
`;
