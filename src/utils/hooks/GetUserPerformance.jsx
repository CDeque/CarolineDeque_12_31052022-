import axios from "axios"
import { useState, useEffect } from "react";
import {   useParams } from "react-router-dom";
import { GetMockedUserPerformance } from "../../data/mockedUser";

// to get the data from backEnd repo
const baseUrl= 'http://localhost:3000/user/'
 export function useAxios() {

      const [data, setData]= useState([])
      const {userId}= useParams()

      useEffect(()=>{
           
             function getData(){
                             axios.get(baseUrl+userId+"/performance")
                              .then((res)=> {setData(res.data.data)})
                              .then((err)=>console.log(err))           
                  }
                  getData()  
           
            }, [userId])
            
return {data}

}

export function GetUserPerformance(){
    const{userId}=useParams()
    const {data}= useAxios()
    // console.log(data);
    
// if "mocked" return mocked data else return useAxios data
if(userId==="mocked"){
   const userPerformanceData= GetMockedUserPerformance()
//    console.log("data mockées");
   return userPerformanceData

 } else{

    const userPerformanceData=data
     console.log("data fetchées");
   
    return userPerformanceData
}
}