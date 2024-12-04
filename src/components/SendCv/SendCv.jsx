import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './SendCv.module.css'





export default function SendCv() {

const [counter, setcounter] = useState(0)
const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  return <>
  
  {dir == "rtl" ? (
<>
<div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/under-Development.avif')] bg-cover bg-center  py-80 h-96   bg-blue-500 flex flex-col justify-center items-center">
 <h2 className='text-7xl font-semibold  text-blue-800'> أرسل سيرتك الذاتية  </h2>
  <p className='text-6xl font-semibold  text-green-800 my-4 pb-28'>الصفحة تحت الإنشاء</p>
  
 </div>
</>
    ): (
<>
<div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/under-Development.avif')] bg-cover bg-center  py-80 h-96   bg-blue-500 flex flex-col justify-center items-center">
 <h2 className='text-7xl font-semibold  text-blue-800'>Send Your CV</h2>
  <p className='text-6xl font-semibold  text-green-800 my-4 pb-28'>The page is under Development</p>
  
 </div>
</>
    )}
  </>
}
