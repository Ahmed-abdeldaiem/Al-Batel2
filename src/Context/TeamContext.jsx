import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let TeamContext=  createContext()

export default function TeamContextProvider(props) {

let baseUrl='https://my-json-server.typicode.com/Ahmed-abdeldaiem/Albatel-API'

let key='$2a$10$lsiPImdgxhQ/5hNc18QrKep9fw0O6QDW/S5IahlZHZI0pdRIh.xkG'
let binId='66e89f5aad19ca34f8a73276'
// let masterKey='$2a$10$lsiPImdgxhQ/5hNc18QrKep9fw0O6QDW/S5IahlZHZI0pdRIh.xkG'

    function getAllFirstTeam(){
     

        return  axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
            headers: {
              'X-Master-Key': `${key}`,
              'Content-Type': 'application/json',
            },
          })
        .then((data)=>{
            console.log("context",data.data);
            return data.data
        })
        .catch((error)=>{
            console.log(error);
          
        })
    }
    
 
    
    function getPersonById(id) {
      return axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
          headers: {
              'X-Master-Key': `${key}`,
              'Content-Type': 'application/json',
          },
      })
      .then((data) => {
          let personFound = null;
          // console.log(data.data.record);
          
          Object.values(data.data.record).forEach((peopleArray) => {
            peopleArray.forEach((person) => {

              if (person.id === id) {
                personFound = person;
              }
            });
          });
          
          return personFound ? personFound : 'Person not found';
      })
      .catch((error) => {
          console.log(error);
          return 'Error fetching person';
      });
  }
  
  
    
 
   

  return (
    <TeamContext.Provider value={{getAllFirstTeam,getPersonById}} >
    {props.children}
    </TeamContext.Provider>
  )
}













