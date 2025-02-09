import React, { useState } from 'react'
import style from './Logos.module.css'





export default function Logos() {

const [counter, setcounter] = useState(0)

const logos = [
  {

    word:'SOCPA'
  },
  {
  
    word:'CPA'
  }
  ,
  {

    word:'CISA'
  },
  ,
  {

    word: 'CIA'
  }
  ,  
  {
   
    word:'IFES'
  },
  {
   
    word:'CICA'
  },

  {
    
word:'VAT'
  },
  {
 
    word:'CIPA'
  },
  
  {
 
    word:'CIB'
  },
 
  {

    word:'ACCA'
  },
  {
  
    word:"CFC"
  },
  {

    word:'CBA'
  },
  {
    word:'AAOIFI'
  },
  
];


  return <>
  
  <div className="lg:fixed relative lg:start-0 lg:top-16 z-10 flex  flex-wrap  lg:flex-col w-full  lg:w-1/12 justify-center">
    {logos.map((logo, index)=>{
      return(
      <div key={index} className='p-2 w-3/12 md:w-2/12 lg:w-full '>
          {/* <img id={index} className="  rounded-xl px-1 w-[90px] h-[35px]" src={logo.img} alt="logo image" /> */}
          <h4 className='text-[#3a497b] text-sm md:text-lg 3xl:text-xl 3xl:py-2 font-semibold border-2 text-center bg-slate-100/60 rounded-tl-2xl rounded-br-2xl border-[#3a497b] cursor-pointer transition-all duration-500 ease-linear hover:bg-slate-400/80 hover:shadow-lg '>{logo.word}</h4>
      </div>
      )
    })}
</div>
  </>
}
