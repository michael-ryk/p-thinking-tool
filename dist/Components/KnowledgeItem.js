"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
function KnowledgeItem() {
    return ((0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)("h1", { children: "Knowledge Item - Data" }) }));
}
exports.default = KnowledgeItem;
const Wrapper = styled_components_1.default.section `
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: var(--border-radius);
  margin: 0.25rem;
  padding: 0.1rem;
  justify: center;
  height: 3rem;
`;
