import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #1D1E2C;
    --dark-purple: #6320EE;
    --light-purple: #8075FF; 
    --dark-green: #33FF5C;
    --light-green: #B6FF85;
    --gray: #5B5B5B;
    --white: #ffffff;
  }

  @media (max-width: 1080) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 728) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
