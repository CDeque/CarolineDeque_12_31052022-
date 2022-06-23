import axios from "axios"
import { useState, useEffect } from "react";
import {   useParams } from "react-router-dom";
import { GetMockedUserSessions } from "../../data/mockedUser";

// to get the data from backEnd repo
const baseUrl= 'http://localhost:3000/user/'
 export function useAxios() {

      const [data, setData]= useState([])
      const {userId}= useParams()

      useEffect(()=>{
           if(userId==="mocked"){
              return
           }
            async function getData(){
               try{
                  await axios.get(baseUrl+userId+"/average-sessions")
                  .then((res)=> {setData(res.data.data)})
                }catch(err){
                  console.log(err, "error occured");
                  }                          
                   }
                  getData()  
           
            }, [userId])
            
return {data}

}

export function GetUserSession(){
      const{userId}=useParams()
      const {data}= useAxios()
      
      
  // if "mocked" return mocked data else return useAxios data
  if(userId==="mocked"){
   const userAverageSessionsData= GetMockedUserSessions()

     return userAverageSessionsData
  
   } else{
  
      return data
  }
  }