
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GetMockedUserActivity } from "../../data/mockedUser"
import styled from 'styled-components';


const ActivityChartContainer= styled.div`
width: 835px !important;
background-color: #FBFBFB !important;
border-radius: 5px;
margin-left: 4rem;
margin-top: 10px;
padding-top: 60px;
`
const ChartTitle= styled.h1`
font-size: 15px;
font-weight: 500;
margin-left: 30px;
padding-bottom: 12px;
`


export default function DailyActivityChart(){

    const userActivityData= GetMockedUserActivity()
// console.log(userActivityData.sessions);


// change the color legend using formatter
const changeColorLegend= (value)=>{
  return <span style={{color:"#74798C "}} >{value}</span>
}

return(
  <ActivityChartContainer className='activity_chart_container'>
    <ChartTitle className='chart_title'>Activité quotidienne</ChartTitle>
    <ResponsiveContainer width="100%"  height={230}  >
        <BarChart
          width={500}
          height={200}
          data={userActivityData.sessions}
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
          
        >
          <CartesianGrid strokeDasharray="6 4" vertical={false} stroke="#DEDEDE" strokeWidth={1.5}/>
          <XAxis dataKey={"day"} tickLine={false} stroke="#DEDEDE" strokeWidth={2} tick={{fill: "#9B9EAC", fontSize:"14", fontWeight:"500"}} />
          <YAxis dataKey={"kilogram"} tickCount={3} vertical={false} tickLine={false} axisLine={false} orientation="right" type="number" domain={[75, 85]} yAxisId={0}/>
          <YAxis dataKey={"calories"} hide={true}  domain={["dataMin - 100", "dataMax +10"]} yAxisId={1}/>
          <Tooltip   itemStyle={{
                color: 'white',
                fontSize: 10,
                fontWeight: 500,
              }}
         
              // to display only the unit and its value
              formatter={(value, name, unit) => [value, unit]}

              // to style the label container
              labelStyle={{ display: 'none' }} 
              contentStyle={{
                backgroundColor: '#E60000', width:"48px" ,height:"63px", border:"none",  textAlign:"center",  display: "flex",
                justifyContent: "center", alignItems: 'center'
              }}/>
              
          <Legend 
          iconType={"circle"}
            layout='horizontal' 
            verticalAlign='top' 
            align='right' 
            iconSize={8} 
            wrapperStyle={{right:45, top:-30, fontSize: 14, fontWeight: 500, }} 
            formatter={changeColorLegend}
    />

          <Bar 
          dataKey="kilogram" 
          fill="#282D30" 
          name='Poids(kg)' 
          unit={"kg"} 
          yAxisId={0} 
          barSize={10} 
          radius={[10, 10, 0, 0]}
           />
          <Bar 
          dataKey="calories" 
          fill="#E60000" 
          name='Calories brûlées (Kcal)'
          unit={"kCal"}  
          yAxisId={1} 
          barSize={10} 
          radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      </ActivityChartContainer>
)
}