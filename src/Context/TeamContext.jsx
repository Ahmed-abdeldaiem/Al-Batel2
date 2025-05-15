import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let TeamContext=  createContext()

export default function TeamContextProvider(props) {

let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/team/'

let baseUrl2='https://al-batel-team-data-default-rtdb.firebaseio.com/'




function getPersonById(id) {
  return axios.get(`${baseUrl}.json`)
    .then((res) => {
      const allTeam = res.data;
      if (!Array.isArray(allTeam)) return 'Invalid data format';

      const person = allTeam.find((p) => p && String(p.id) === String(id));
      return person || 'Person not found';
    })
    .catch((err) => {
      console.error(err);
      return 'Error fetching Employee Data';
    });
}

  
  function getTeamMembers() {
    return axios.get(`${baseUrl2}TeamMember.json`, {
      
    })
    .then((data) => {
      
      
        
       

        
        return data.data ? data.data : 'TeamMembers not found';
    })
    .catch((error) => {
        console.log(error);
        return 'Error fetching Employee Data';
    });
}

    
 
   

  return (
    <TeamContext.Provider value={{getPersonById,getTeamMembers}} >
    {props.children}
    </TeamContext.Provider>
  )
}














