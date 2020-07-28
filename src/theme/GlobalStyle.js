import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 62.5%;
}

body {
    padding-left: 200px;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

`;

export default GlobalStyle;
