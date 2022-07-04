import styled from "styled-components";
import { GetUserData } from "../../utils/hooks/GetUserData";
import KeyData from "../../Components/KeyData";
import LeftNav from "../../Components/LeftNav";
import colors from "../../utils/style/colors";
import DailyActivityChart from "../../Components/DailyActivityChart";
import UserAverageSessions from "../../Components/LineChartSessions";
import TodaysScore from "../../Components/TodaysScore";
import Performance from "../../Components/PerformanceChart";
import CaloriesIcon from "../../assets/calories-icon.png";
import ProteinsIcon from "../../assets/proteins-icon.png";
import GlucidsIcon from "../../assets/glucids-icon.png";
import LipidsIcon from "../../assets/lipids-icon.png";

/**
 * @returns HomePage
 */

export default function Home() {
  const user = GetUserData();
  //  console.log(user)

  return (
    <Main>
      <LeftNav />
      <Section>
        <UserContainer className="user_infos">
          <UserName className="user_name">
            Bonjour <Span>{user?.userInfos?.firstName}</Span>
          </UserName>
          <WelcomeText className="welcome_text">
            Félicitations! vous avez explosé vos objectifs hier 👏
          </WelcomeText>
        </UserContainer>
        <UserPerformancesContainer className="user_performances_container">
          <ChartContainerSection className="charts_container">
            <DailyActivityChart />

            <UserAverageSessions />
            <Performance />
            <TodaysScore />
          </ChartContainerSection>

          <KeyDataSection className="keydata_section">
            <KeyData
              img={CaloriesIcon}
              number={user?.keyData?.calorieCount + "KCal"}
              text={"Calories"}
              className={"calories"}
            />
            <KeyData
              img={ProteinsIcon}
              number={user?.keyData?.proteinCount + "g"}
              text={"Protéines"}
              className={"proteins"}
            />
            <KeyData
              img={GlucidsIcon}
              number={user?.keyData?.carbohydrateCount + "g"}
              text={"Glucides"}
              className={"glucids"}
            />
            <KeyData
              img={LipidsIcon}
              number={user?.keyData?.lipidCount + "g"}
              text={"Lipides"}
              className={"lipids"}
            />
          </KeyDataSection>
        </UserPerformancesContainer>
      </Section>
    </Main>
  );
}

//------ HomePage Style ------//
const Main = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;
const Section = styled.section`
  padding: 2rem 4rem;
  @media (max-width: 1340px) {
    padding: 1rem 2rem;
  }
`;
const UserPerformancesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 1340px) {
    gap: 1rem 2rem;
  }
`;
const ChartContainerSection = styled.div`
  grid-column: 1 / 4;
  display: grid;
  grid-template: 20rem 19rem / repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    grid-template: 18rem 19rem / repeat(3, 1fr);
    gap: 4rem 1rem;
  }
`;
const UserContainer = styled.div`
  height: 100px;
`;
const UserName = styled.h1`
  font-size: 48px;
  font-weight: 500;
`;
const Span = styled.span`
  color: ${colors.primary};
`;
const WelcomeText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

const KeyDataSection = styled.div`
  height: 655px;
  position: relative;
  top: 10px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;
`;
