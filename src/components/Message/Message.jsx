import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './Message.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Message() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  return <>

{dir=='rtl'?
<>
<div className="container m-auto my-10 " data-aos="fade-up">
        
        <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold text-shadow-green" data-aos="fade-up">
              رسالة الشركة
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" data-aos="fade-up"/>
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" data-aos="fade-up"/>
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
    className="rounded-full border-2 border-green-700 shadow-md transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/message-1.jpg"
    alt="Message image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-6">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start" >
<h2 className='text-green-600 text-2xl 4k:text-4xl mb-4 font-semibold text-start text-shadow-green' data-aos="fade-up">رسالتنا</h2>
<p className='text-gray-800 text-lg 4k:text-3xl px-1  font-semibold text-center my-4 lg:text-start text-shadow-sm' data-aos="fade-up">
انطلاقا من الشعور الراسخ بالمسؤولية تجاه وطننا ودعما لرواد الأعمال نؤمن بقدرتنا على تقديم استشارات مهنية داعمة ومتخصصة بكل شفافية وموثوقية
  </p>
<p className='text-green-600 text-2xl 4k:text-3xl font-semibold text-center text-shadow-green' data-aos="fade-up">
لنكن شريك اقتصادي فعال لوطن طموح.
   </p>

        </div>
      </div>


        </div>
      </div>
</>:
  <div className="container m-auto my-10 " data-aos="fade-up">
        
  <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold text-shadow-green" data-aos="fade-up">
        Company Message   </h2>
  <hr className="border-blue-700 border-t-2 w-40 mx-auto" data-aos="fade-up"/>
  <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" data-aos="fade-up"/>
  <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
<div className=" w-full lg:w-1/2 py-8">
<div className="inner flex justify-center  items-center">
<img
className="rounded-full border-2 border-green-700 shadow-md transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/message-1.jpg"
alt="Message image"
/>
</div>

</div>
<div className=" w-full lg:w-1/2 py-6">
  <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start">
<h2 className='text-green-600 text-2xl mb-4 font-semibold text-start text-shadow-green' data-aos="fade-up">Our Message</h2>
<p className='text-gray-800 text-lg 4k:text-3xl font-semibold text-center my-4 lg:text-start text-shadow-sm' data-aos="fade-up">
Based on a deep sense of responsibility towards our country and in support of entrepreneurs, we believe in our ability to provide supportive and specialized professional consultations with complete transparency and reliability.
</p>
<p className='text-green-600 text-2xl 4k:text-3xl font-semibold text-center text-shadow-green' data-aos="fade-up">
Let us be an effective economic partner for an ambitious nation.
</p>

  </div>
</div>


  </div>
</div>
}
  



  </>
}
