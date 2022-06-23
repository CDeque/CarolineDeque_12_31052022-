import styled from "styled-components";
import { GetUserData } from "../../utils/hooks/GetUserData";
import KeyData from "../../Components/KeyData";
import LeftNav from "../../Components/LeftNav"
import colors from "../../utils/style/colors";
import DailyActivityChart from "../../Components/DailyActivityChart";
import UserAverageSessions from "../../Components/LineChartSessions";
import TodaysScore from "../../Components/TodaysScore";
import Performance from "../../Components/PerformanceChart";
import CaloriesIcon from "../../assets/calories-icon.png"
import ProteinsIcon from "../../assets/proteins-icon.png"
import GlucidsIcon from "../../assets/glucids-icon.png"
import LipidsIcon from "../../assets/lipids-icon.png"




/**
 * @returns HomePage
 */

export default  function Home(){
 

const user= GetUserData()
//  console.log(user)

   return(

    <Main>
       <LeftNav/> 
       <Div>
           <UserContainer className="user_infos">
           <UserName className="user_name">Bonjour <Span>{user?.userInfos?.firstName }</Span></UserName>
           <WelcomeText className="welcome_text">Félicitations! vous avez explosé vos objectifs hier 👏</WelcomeText>
           </UserContainer>
           <UserPerformancesContainer className="user_performances_container">
           <section className="charts_container">
           <DailyActivityChart/>
           <SmallChartsContainer className="small-chars-container">
            <UserAverageSessions/>
            <Performance/>
            <TodaysScore/>
           </SmallChartsContainer>
       </section>

       <KeyDataSection className="keydata_section">
           <KeyData img={CaloriesIcon} number={user?.keyData?.calorieCount+"KCal"} text={"Calories"} className={"calories"}/>
           <KeyData img={ProteinsIcon} number={user?.keyData?.proteinCount+"g"} text={"Protéines"}className={"proteins"}/>
           <KeyData img={GlucidsIcon} number={user?.keyData?.carbohydrateCount+"g"} text={"Glucides"} className={"glucids"}/>
           <KeyData img={LipidsIcon} number={user?.keyData?.lipidCount+"g"} text={"Lipides"} className={"lipids"}/>
       </KeyDataSection>
       </UserPerformancesContainer>
       </Div>
    </Main>
   )
}

//------ HomePage Style ------//
const Main= styled.main`
display: flex;

`
const Div= styled.div`
width:100%;
`
const UserContainer= styled.div`
margin: 2rem 6rem 1rem 4rem;
height: 100px;

`
const UserName= styled.h1`
font-size: 48px;
font-weight: 500;
`
const Span= styled.span`
color: ${colors.primary}
`
const WelcomeText= styled.p`
font-size: 18px;
font-weight: 400;
`
const UserPerformancesContainer= styled.div`
width:100%;
display:flex;
justify-content: space-between;
`
const KeyDataSection= styled.section`
height:655px;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-right:2rem;
margin-top:-10px;
`
const SmallChartsContainer= styled.div`
display:flex;
`