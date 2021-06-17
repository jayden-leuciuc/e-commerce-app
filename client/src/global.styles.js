import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  background-color: white;
  color: black;
}

body {
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}

`;
