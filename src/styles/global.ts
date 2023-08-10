import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root{
    --black-primary: #000000;
    --black-secundary: #0C0B0B;
    --white: #FFFFFF;
    --red-primary: #E2181A;
    --red-secundary: #B01316;
  }

  *{
    margin: 0  ;
    padding: 0 ;
  }

  body{
    font-family:'Roboto', 'Baloo 2', cursive, sans-serif;
    background-color: var(--black-primary) ;
    color: var(--white);
  }


`