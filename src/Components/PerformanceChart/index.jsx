import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from 'recharts';
import { GetMockedUserPerformance } from '../../data/mockedUser';
import styled from 'styled-components';

//------Radar Style ------//
const PerformanceContainer= styled.div`
width: 258px;
height:263px;
background-color: #282D30;
border-radius: 5px;
margin-left: 4rem;
margin-top: 2rem;
`

//------ Performance function ------//

export default function Performance(){

const userPerformanceData= GetMockedUserPerformance()
// console.log(userPerformanceData.kind);


    return(
        <PerformanceContainer className="radar_chart_container">
           
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="48%" cy="52%" outerRadius="80%" data={userPerformanceData.data} 
         margin={{ top: 0, right: 30, bottom: 0, left: 38 }}
        >
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis  dataKey="kind" tick={{fontSize:"12", fontWeight:"500", fill: "#fff"}}  />
          <Radar name="performance" dataKey="value" stroke="rgba(255, 1, 1, 0.7)" fill="rgba(255, 1, 1, 0.7)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </PerformanceContainer>
    )
}