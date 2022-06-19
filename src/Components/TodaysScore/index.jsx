
import { RadialBarChart, RadialBar,  ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { GetUserData } from '../../utils/hooks/GetUserData';
import styled from "styled-components"

//------ TodayScore Function ------//
/**
 * @param {number} user today score
 * @returns today score percentage
 */

export default function TodaysScore(){

    const userData=GetUserData()
  // console.log(userData);
 
  //to display the score & change it into a percentage, assign color
    const newScore= [{
     
     value: Math.round((userData.todayScore||userData.score )*100),
     fill:"#FF0000"
    }]
// console.log(newScore);

return(
<TodayScoreContainer className="today_score_container">
  <ScoreTitle>Score</ScoreTitle>

  {/* text to display the percentage */}
  <ScoreText className="score_text"><ScoreNumber className='score_number'>{newScore[0].value + "% "}</ScoreNumber><br/>de votre <br/>objectif</ScoreText>

  <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%"innerRadius={80} outerRadius={440}  width={250}
          height={250} barSize={10} startAngle={90}  endAngle={450}  data={newScore}>
             <PolarAngleAxis
      
            type="number"
            domain={[0, 100]}
            tick={false}
            />
          <RadialBar
           background
           clockWise
           cornerRadius={10}
            type='number'
            dataKey={"value"}

          />
       
        </RadialBarChart>
      </ResponsiveContainer>
  </TodayScoreContainer>
)
}


//------ RadialChart Style ------//
const TodayScoreContainer= styled.div`
width: 258px;
height:263px;
background-color: #fbfbfb;
border-radius: 5px;
margin-left: 4rem;
margin-top: 2rem;
position:relative;
`
const ScoreTitle= styled.h2`
position:absolute;
font-size: 15px;
font-weight:500;
padding-top: 30px;
padding-left:30px;
`
const ScoreText= styled.div`
width:150px;
height:150px;
font-size:16px;
font-weight:500;
background-color: white;
position:absolute;
text-align:center;
padding: 38px;
top:56px;
left:54px;
border-radius:50%
`
const ScoreNumber= styled.span`
font-size:26px;
font-weight:700;
`