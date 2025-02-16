import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'



import About from './components/About/About'
import Services from './components/Services/Services'

import ContactUs from './components/ContactUs/ContactUs'
import Partners from './components/Partners/Partners'



import LanguageContextProvider from './Context/LanguageContext'
import TeamContextProvider from './Context/TeamContext'

import SendCv from './components/SendCv/SendCv'
import Rfp from './components/Rfp/Rfp'
import BranchDetails from './components/BranchDetails/BranchDetails'
import CvTemplate from './components/CvTemplate/CvTemplate'
import CvLayout from './components/CvLayout/CvLayout'
import TeamPage2 from './components/TeamPage2/TeamPage2'
import TeamMemberDetails2 from './components/TeamMemberDetails2/TeamMemberDetails2'

import PartnersContextProvider from './Context/PartnersContext'


function App() {

  

  let route = createHashRouter([
    {path:'',element:<LayOut/>,children:[
      {index:true ,element: <Home/>},
     
      {path:'about' ,element:<About/>},
      {path:'services' ,element:<Services/>},
      {path:'team' ,element:<TeamPage2/>},
      {path:'team/:id' ,element:<TeamMemberDetails2/>},
      {path:'branch/:id' ,element:<BranchDetails/>},
      {path:'contact' ,element:<ContactUs/>},
      {path:'partners' ,element:<Partners/>},
      {path:'sendCv' ,element:<SendCv/>},
    
      {path:'RFP' ,element:<Rfp/>},
    ]},{
      path:'/CV_Template',element:<CvLayout/>,children:[
        {index: true ,element:<CvTemplate/>}
      ]
    }
  ])

  

  return (
    <>
    <LanguageContextProvider>

  <TeamContextProvider>
<PartnersContextProvider>
    <RouterProvider router={route}>

</RouterProvider>
</PartnersContextProvider>
</TeamContextProvider>
    </LanguageContextProvider>
  
    </>
  )
}

export default App
