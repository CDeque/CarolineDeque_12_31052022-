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

    @media(max-width:1340px){
      width:1024px;
      height:780px;
    }
   

}


`;

export default function GlobalStyle() {
  return <Style />;
}
