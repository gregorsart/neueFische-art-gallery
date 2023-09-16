import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default createGlobalStyle`

  *, *::before, *::after {
  box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }

:root {--main-spacing: 2rem; --color-lightgray: #E5E4E2}

  body {
    line-height: 1.5;
    font-family: ${inter.style.fontFamily}; 
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  main {
    margin-top: 8rem;
    margin-bottom: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  h2{
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0 .4rem;
  }

`;
