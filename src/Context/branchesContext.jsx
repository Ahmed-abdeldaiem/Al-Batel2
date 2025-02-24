import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let BranchesContext=  createContext()

export default function BranchesContextProvider(props) {



let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/'




 

  function getBranches() {
    return axios.get(`${baseUrl}branches.json`, {
      
    })
    .then((data) => {
      
        console.log(data);
        
       

        
        return data.data ? data.data : 'Branches not found';
    })
    .catch((error) => {
        console.log(error);
        return 'Error fetching Branches Data';
    });
}

    
 
   

  return (
    <BranchesContext.Provider value={{getBranches}} >
    {props.children}
    </BranchesContext.Provider>
  )
}













