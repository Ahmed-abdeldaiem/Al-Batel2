import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let ServiceContext=  createContext()

export default function ServiceContextProvider(props) {



let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/'




 

  function getServices() {
    return axios.get(`${baseUrl}service.json`, {
      
    })
    .then((data) => {
      
        // console.log(data);
        
       

        
        return data.data ? data.data : 'Services not found';
    })
    .catch((error) => {
        console.log(error);
        return 'Error fetching Employee Data';
    });
}

    
 
   

  return (
    <ServiceContext.Provider value={{getServices}} >
    {props.children}
    </ServiceContext.Provider>
  )
}













