import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CvTemplate from '../CvTemplate/CvTemplate'
import style from './CvLayout.module.css'





export default function CvLayout() {

const [counter, setcounter] = useState(0)

  return <>
  
  <Outlet/>



  </>
}
