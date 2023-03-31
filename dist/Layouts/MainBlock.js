"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const KnowledgeItem_1 = __importDefault(require("../Components/KnowledgeItem"));
const Headings_1 = __importDefault(require("../Components/Headings"));
const Controls_1 = __importDefault(require("../Components/Controls"));
function MainBlock() {
    return ((0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(Controls_1.default, {}), (0, jsx_runtime_1.jsx)(Headings_1.default, {}), (0, jsx_runtime_1.jsx)(KnowledgeItem_1.default, {}), (0, jsx_runtime_1.jsx)(KnowledgeItem_1.default, {}), (0, jsx_runtime_1.jsx)(KnowledgeItem_1.default, {})] }));
}
exports.default = MainBlock;
const Wrapper = styled_components_1.default.section `
  margin: 2% 10% ;
  border: 1px solid grey;
`;
