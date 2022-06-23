import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { GetUserSession } from '../../utils/hooks/GetUserSessions';


/**
 * @param {object} user Average Sessions
 * @returns average sessions graph
 */

export default function UserAverageSessions(){

    const userAverageSessionsData=GetUserSession()
  //  console.log( userAverageSessionsData);
  
  // To check if data or not
  if(userAverageSessionsData.length=== 0)return null

    //To change the data in days
    const weekDays= [ "L","M","M","J","V","S","D" ]
    weekDays.forEach((day, index)=>{
        userAverageSessionsData.sessions[index].day=day
       
    })
    

    return(
<AverageSessionContainer className='average_session_container' >
  {/* Line chart title */}
<ChartTitle className="chart_title">
     <Title>Durée moyenne des sessions</Title>
  </ChartTitle>
        <ResponsiveContainer width="100%" height="100%" >
          
        <LineChart
   
          data={userAverageSessionsData.sessions}
          margin={{
            top: 5,
            right: 10,
            left: -50,
            bottom: 15,
          }}
          
        >
          
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fill:"#FFF",fontSize:"14px", fontWeight:"500" }} interval={'preserveStartEnd'} />
          <YAxis tickLine={false} axisLine={false} tick={{display:"none"}}  domain={["dataMin-30", "dataMax+50"]}  />
          <Tooltip width={258} height={264}
          itemStyle={{color:"black", fontSize:10, fontWeight:500}}
          formatter={(value, name, unit) => [value, unit]}
          labelStyle={{ display: 'none' }}
          contentStyle={{ width:"39px", height:"25px",border:"none",textAlign:"center", display: "flex", alignItems: 'center',justifyContent: "center"}}
          cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40, }}
          offset={20}
          />
     
          <Line type="natural" dataKey="sessionLength" width={258} 
          stroke="#fff" strokeWidth={1.7} dot={false} activeDot={{ r: 4 }} unit={"min"} name='Durée moyenne des sessions' />
         
        </LineChart>
      </ResponsiveContainer>
      </AverageSessionContainer>
    )
}


//------Line Chart Style------//

const AverageSessionContainer= styled.div`
width: 258px;
height:263px;
background-color: #FF0000;
border-radius: 5px;
margin-left: 4rem;
margin-top: 2rem;
`
const ChartTitle= styled.div`
color: ${colors.white};
position: relative;
font-size: 15px;
font-weight:500;

width: 170px;
`
const Title=styled.h2`
font-size: 15px;
font-weight:500;
position: absolute;
top:30px;
left:30px
`