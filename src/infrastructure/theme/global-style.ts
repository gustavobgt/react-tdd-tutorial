import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, #root {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: #ffffff;
	  background-color: rgb(47, 47, 47);
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`;
