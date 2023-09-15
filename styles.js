import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
