import { createGlobalStyle } from "styled-components";
import { PrimaryBackground } from "../Theme";
const Globals = createGlobalStyle`

body {
    background: ${PrimaryBackground};
  }`;

export default Globals;
