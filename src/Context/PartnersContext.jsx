import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let PartnersContext=  createContext()

export default function PartnersContextProvider(props) {



let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/'




 

  function getPartners() {
    return axios.get(`${baseUrl}partners.json`, {
      
    })
    .then((data) => {
      
        // console.log(data);
        return data.data ? data.data : null ;
    })
    .catch((error) => {
        // console.log(error);
        return null;
    });
}

    
 
   

  return (
    <PartnersContext.Provider value={{getPartners}} >
    {props.children}
    </PartnersContext.Provider>
  )
}













