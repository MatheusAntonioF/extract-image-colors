import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }
  
  body {
    background: #282c34;
    color: #eee;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
