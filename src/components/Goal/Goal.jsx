import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './Goal.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Goal() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);



  return <>

{dir=='rtl'?<>
<div className="container m-auto my-10 " data-aos="fade-up">
        
        <h2  className="text-green-600 text-3xl 4k:text-4xl text-center text-shadow-green my-3 font-semibold" data-aos="fade-up">
              هدف الشركة
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto " data-aos="fade-up"/>
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" data-aos="fade-up"/>
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
    className="rounded-full border border-green-800 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/king-1-1.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-8">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start" >
<h2 className='text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-start text-shadow-green' data-aos="fade-up">هدفنا</h2>
<p className='text-gray-800 text-lg 4k:text-3xl my-2 font-semibold text-center lg:text-start text-shadow-sm' data-aos="fade-up">نتيجة لما يشهده قطاع الأعمال من ازدهار ملحوظ بفضل رؤية 2030</p>
<p className='text-gray-800 text-lg 4k:text-3xl font-semibold text-center lg:text-start text-shadow-sm' data-aos="fade-up"> نسعى ونطمح أن نكون الخيار الأول للعميل عن طريق:</p>
<h3 className="text-gray-800 text-lg 4k:text-3xl text-shadow-sm my-4" data-aos="fade-up">
                <span className="text-green-600 mx-3 text-center lg:text-start">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                إمداد العميل باحتياجاته كافة
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl my-4 text-center lg:text-start text-shadow-sm" data-aos="fade-up">
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
تحري الدقة والاحترافية
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl  my-4 text-center lg:text-start text-shadow-sm" data-aos="fade-up">
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
الامتثال الكامل لكل مستجدات ومتطلبات المنهة
               </h3>
        </div>
      </div>


        </div>
      </div>
</>:<>
<div className="container m-auto my-10 " data-aos="fade-up">
        
        <h2 className="text-green-600 text-3xl 4k:text-4xl text-center text-shadow-green  my-3 font-semibold">
        Company Goal
         </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" data-aos="fade-up"/>
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" data-aos="fade-up"/>
        <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 py-8">
      <div className="inner flex justify-center  items-center">
  <img
  className="rounded-full border border-green-800 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/king-1-1.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-8">
        <div className="inner flex flex-col justify-center items-center lg:justify-start lg:items-start" >
<h2 className='text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-start text-shadow-green' data-aos="fade-up">Our Goal</h2>
<p className='text-gray-800 text-lg 4k:text-3xl my-2 font-semibold text-center lg:text-start' data-aos="fade-up">
As a result of the remarkable prosperity witnessed by the business sector thanks to Vision 2030  </p>
<p className='text-gray-800 text-lg 4k:text-3xl font-semibold text-center lg:text-start' data-aos="fade-up">
We strive and aspire to be the first choice for the customer by:   </p>
<h3 className="text-gray-800 text-lg 4k:text-3xl  my-4 text-center lg:text-start text-shadow-sm" data-aos="fade-up">
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                Providing the customer with all his needs
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl   my-4 text-center lg:text-start text-shadow-sm" data-aos="fade-up">
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                With precision and professionalism
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl  my-4 text-center lg:text-start text-shadow-sm" data-aos="fade-up">
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                Full compliance with all developments and requirements of the institution
               </h3>
        </div>
      </div>


        </div>
      </div>

</>}
  
 
  </>
}
