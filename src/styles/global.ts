import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    //color: #fff;
    //background: #ebf2f5;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
  }

  body, input, button, text-area {
    font: 600 18px Nunito, sans-serif;
  }

`;
