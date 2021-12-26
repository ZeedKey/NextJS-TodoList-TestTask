import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Sans-Serif;
  }

  p{
    margin: 0; 
  }

  a{
    text-decoration: none;
  }
`;
 
export default GlobalStyle;