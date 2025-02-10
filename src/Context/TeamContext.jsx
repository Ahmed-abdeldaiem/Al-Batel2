import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let TeamContext=  createContext()

export default function TeamContextProvider(props) {

let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/team/'




 
    
    function getPersonById(id) {
      return axios.get(`${baseUrl}${Number(id)-1}.json`, {
        
      })
      .then((data) => {
        
          // console.log(data);
          
         

          
          return data.data ? data.data : 'Person not found';
      })
      .catch((error) => {
          console.log(error);
          return 'Error fetching Employee Data';
      });
  }
  
  
    
 
   

  return (
    <TeamContext.Provider value={{getPersonById}} >
    {props.children}
    </TeamContext.Provider>
  )
}













