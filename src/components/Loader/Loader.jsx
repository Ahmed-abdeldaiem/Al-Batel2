import React, { useState } from 'react'
import style from './Loader.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import { PulseLoader } from 'react-spinners'




export default function Loader() {

const [counter, setcounter] = useState(0)

  return <>
  
  <div className="fixed inset-0 z-30 flex justify-center items-center bg-gray-100 bg-opacity-50">
  {/* Image Container */}
  <div className="absolute inset-0 flex justify-center items-center">
    <img
      src="/logo.png"
      alt="Centered Logo"
      className="w-48 h-48 object-contain opacity-50"
    />
  </div>

  {/* Pulse Loader */}
  <PulseLoader color={"#0099"} loading={true} />

</div>

  </>
}
