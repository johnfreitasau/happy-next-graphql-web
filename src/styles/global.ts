import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text};
  }

  body, input, button, text-area {
    font: 600 18px Nunito, sans-serif;
  }

  a {
    cursor: pointer;
  }

`;
