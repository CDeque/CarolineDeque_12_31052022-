import { Radar, RadarChart, PolarGrid, PolarAngleAxis,  ResponsiveContainer } from 'recharts';
import { GetUserPerformance } from '../../utils/hooks/GetUserPerformance';
import styled from 'styled-components';



//------ Performance function ------//

/**
 * @param {object} user Performance
 * @returns user Performance graph
 */

export default function Performance(){

const userPerformanceData= GetUserPerformance()
// console.log(userPerformanceData);

// To check if data or not
if(userPerformanceData.length===0) return null

  //TO translate categories in french
  const PerformanceKinds =["Cardio", "Energie", "Endurance", "Force", "vitesse", "Intensité" ]
    PerformanceKinds.forEach((kind, index)=>{
    userPerformanceData.data[index].kind= kind
})

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

//------Radar Style ------//
const PerformanceContainer= styled.div`
width: 258px;
height:263px;
background-color: #282D30;
border-radius: 5px;
margin-left: 4rem;
margin-top: 2rem;
`