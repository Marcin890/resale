import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  body {
    font-family: ${({ theme }) => theme.fonts.text}
  }

  h1,h2,h3,h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    line-height: 1.68em;
  }

  h1 {
    font-size: 29.6px;
  }

  h2 {
    font-size: 20.8px;
  }

  h3 {
    font-size: 16.4px;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
    margin-bottom:10px;
  }
  body {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.normal};
    line-height: 1.68em;
    
  }

  input {
    font-size: 16.1px;
    color: ${({ theme }) => theme.colors.primary.normal};
    border: none;
    box-sizing:border-box;
     font-weight: 500;  
    font-family: ${({ theme }) => theme.fonts.heading};   
    &:focus {
      outline: none;
    }  
  }
  

  input[type=text] {
    border-radius: 7px 0px 0px 7px;
    background:none;
    color: ${({ theme }) => theme.colors.primary.normal};
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.accent.normal} ;
    border-right: none;
    cursor: text;
    &:focus {      
      background: rgba(255,255,255,0.2)
    }

  }

  input[type=submit] {
    background: ${({ theme }) => theme.colors.accent.normal};
    border: none;
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.accent.normal}; 
    border-radius: 0px 7px 7px 0px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.colors.accent.dark};
      border-color: ${({ theme }) => theme.colors.accent.dark}; 
    }
  }

  div {
    box-sizing: border-box;
  }
  `;
