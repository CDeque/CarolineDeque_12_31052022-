import styled from "styled-components"
import { NavLink } from "react-router-dom"
import colors from "../../utils/style/colors"
import MediationIcon from "../../assets/meditation-icon.png"
import SwimmingIcon from "../../assets/swimming-icon.png"
import ByciclesIcon from "../../assets/bycicle-icon.png"
import WeightIcon from  "../../assets/weight-icon.png"
const NavContainer= styled.div`
background-color: ${colors.navBar};
width: 117px;
min-height:830px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`
const SportCategoriesContainer= styled.ul`
height:40%;
list-style-type: none;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin-top:15rem;

`
const IconContainer= styled.li`
width:64px;
height:64px;
border-radius:6px;
background-color: ${colors.white};
display:flex;
justify-content:center;
align-items: center;
`
const SportIcons= styled.img`
width:36px;
height:36px;
object-fit:contain;
`
const CopyrightContainer= styled.div`
color: ${colors.white};
width: 140px;
margin-bottom:80px;
font-size: 12px;
font-weight:500;
display: flex;
flex-direction: column;
transform: rotate(270deg);
`

export default function LeftNav(){

return(

    <NavContainer>
        <SportCategoriesContainer>
<NavLink to="#"><IconContainer><SportIcons src={MediationIcon} alt="meditation-icon" /></IconContainer></NavLink>
<NavLink to="#"><IconContainer><SportIcons src={SwimmingIcon} alt="swimming-icon" /></IconContainer></NavLink>
<NavLink to="#"><IconContainer><SportIcons src={ByciclesIcon} alt="bicycle-icon" /></IconContainer></NavLink>
<NavLink to="#"><IconContainer><SportIcons src={WeightIcon} alt="weight-icon" /></IconContainer></NavLink>

</SportCategoriesContainer>
<CopyrightContainer><p>Copyright, SportSee 2020</p></CopyrightContainer>
    </NavContainer>
)

}