import React, { useState } from 'react'
import style from './Loader.module.css'
import FadeLoader from 'react-spinners/FadeLoader'
import { PulseLoader } from 'react-spinners'




export default function Loader() {

const [counter, setcounter] = useState(0)

  return <>
  
  <div className="fixed inset-0  flex justify-center items-center bg-gray-100 bg-opacity-80 z-50">
  {/* Image Container */}
  {/* <div className="absolute inset-0 flex justify-center items-center z-50">
    <img
      src="https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg?raw=true"
      alt="Centered Logo"
      className="w-full h-full object-contain opacity-80"
    />
  </div> */}

  {/* Pulse Loader */}
  <PulseLoader color={"#0099"} loading={true} />

</div>

  </>
}
