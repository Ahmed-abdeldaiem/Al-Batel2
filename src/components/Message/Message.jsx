import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './Message.module.css'





export default function Message() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);


  return <>

{dir=='rtl'?<>
<div className="container my-10 ">
        
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
              رسالة الشركة
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
    className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/message-1.jpg?raw=true"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-6">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start">
<h2 className='text-green-600 text-2xl mb-4 font-semibold text-start'>رسالتنا</h2>
<p className='text-gray-800 text-lg  font-semibold text-center my-4 lg:text-start'>
انطلاقا من الشعور الراسخ بالمسؤولية تجاه وطننا ودعما لرواد الأعمال نؤمن بقدرتنا على تقديم استشارات مهنية داعمة ومتخصصة بكل شفافية وموثوقية
  </p>
<p className='text-green-600 text-2xl font-semibold text-center'>
لنكن شريك اقتصادي فعال لوطن طموح.
   </p>

        </div>
      </div>


        </div>
      </div>
</>:
  <div className="container my-10 ">
        
  <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
        Company Message   </h2>
  <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
  <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
  <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
<div className=" w-full lg:w-1/2 py-8">
<div className="inner flex justify-center  items-center">
<img
className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/message-1.jpg?raw=true"
alt="mohamed ben salman image"
/>
</div>

</div>
<div className=" w-full lg:w-1/2 py-6">
  <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start">
<h2 className='text-green-600 text-2xl mb-4 font-semibold text-start'>Our Message</h2>
<p className='text-gray-800 text-lg  font-semibold text-center my-4 lg:text-start'>
Based on a deep sense of responsibility towards our country and in support of entrepreneurs, we believe in our ability to provide supportive and specialized professional consultations with complete transparency and reliability.
</p>
<p className='text-green-600 text-2xl font-semibold text-center'>
Let us be an effective economic partner for an ambitious nation.
</p>

  </div>
</div>


  </div>
</div>
}
  



  </>
}
