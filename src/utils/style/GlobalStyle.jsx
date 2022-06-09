import { createGlobalStyle } from "styled-components";


const Style = createGlobalStyle`


*{
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
    max-width: 1440px;
    margin: 0 auto;
}


`

export default function GlobalStyle(){

    return <Style/>
}