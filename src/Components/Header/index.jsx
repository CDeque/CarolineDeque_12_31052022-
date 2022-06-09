import Logo from "../../assets/logo.png"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import colors from "../../utils/style/colors"

const NavContainer= styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${colors.navBar};
height:91px;
padding-left: 30px;



`
const ImageLogo= styled.img`
width:178px;
height:61px;

`
const NavBar= styled.ul`
display:flex;
justify-content: space-around;
list-style-type: none;
width:100%;
`
const StyledLink= styled(NavLink)`
text-decoration: none;
color:${colors.white};
font-size:24px;
font-weight: 500;


`



export default function Header(){

return(

    <NavContainer>
        <NavLink to="/">
            <ImageLogo src={Logo} alt=" logo SportSee" />
        </NavLink>
        <NavBar>
          <StyledLink to="#"><li>Accueil</li></StyledLink> 
          <StyledLink to="#"><li>Profil</li></StyledLink> 
          <StyledLink to ="#"><li>Réglage</li></StyledLink>
          <StyledLink to ="#"><li>Communauté</li></StyledLink>
        
            
        </NavBar>
    </NavContainer>
)


}