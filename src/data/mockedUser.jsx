import { useParams } from "react-router-dom"
import {USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE} from "./MockedData.js"


    export function GetMockedUserData(){
const {id}= useParams()
        const user = USER_MAIN_DATA.find(user => user.userId === id)
        return user

    }


    export function GetMockedUserActivity(){
const {id}= useParams()
const userActivity= USER_ACTIVITY.find(user=> user.id=== id)

// to change the date in the data and show the day only. Creating an array of number & display then according their index
const days= ["1","2","3","4","5","6","7"]
days.forEach((day, index)=>{
    userActivity.sessions[index].day= day
})
return userActivity

    }

    export function GetMockedUserSessions(){
        const {id}= useParams()
        const userAverageSessions= USER_AVERAGE_SESSIONS.find(user=> user.id=== id)

        const weekDays= [ "L","M","M","J","V","S","D" ]
        weekDays.forEach((day, index)=>{
            userAverageSessions.sessions[index].day=day
        })

        return userAverageSessions
    }

    export function GetMockedUserPerformance(){
        const {id}= useParams()
        const UserPerformance= USER_PERFORMANCE.find(user=> user.id===id)
        
        
        return UserPerformance
    }
