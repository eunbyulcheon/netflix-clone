import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  body {
    background-color: #000;
  }

  button, input {
    outline: none;
    border: none; 
    background: none; 
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
    margin-right: 20px;

    &:hover {
      color: red;
    }
  }
`;
