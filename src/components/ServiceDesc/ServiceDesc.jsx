import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { LanguageContext } from '../../Context/LanguageContext';
import style from './ServiceDesc.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function ServiceDesc() {

const [counter, setcounter] = useState(0)
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
  <div className="container m-auto my-16 "   >
    <div data-aos="fade-up">
    <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold text-shadow-green" data-aos="fade-up">
          خدماتنا
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
    </div>
    
        <div className=" flex flex-col md:flex-row w-full overflow-hidden rounded-md md:rounded-full border-2 border-blue-300 shadow-md shadow-green-200 transition-all duration-700  hover:border-green-400 hover:shadow-blue-300">
          <div
            className={`relative w-full  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7.webp')] bg-fixed bg-cover bg-no-repeat`}
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>
            <div className="z-20  flex flex-col md:flex-row  justify-center gap-5 4k:gap-14 p-10">
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">إدارة</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">تخطيط</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">تدقيق</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">تطوير</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">تدريب</span>
            </div>
            <div className="z-20 flex justify-center items-center gap-5 p-10">
              <span data-aos="fade-up" className="animate-pulse	 z-20 text-yellow-400 text-xl 4k:text-3xl font-semibold text-shadow-xl">يمكنك الاطلاع على خدماتنا من هنا<span className="mx-2"><i className="fa-solid fa-arrow-left"></i></span></span>
              <Link className="z-20" to={'services'} >
              <button data-aos="fade-up" className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-green overflow-hidden border-2 border-green-600 transition-all duration-700 hover:border-blue-700 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-full">
                  خدماتنا
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
  </>:<>
  <div className="container m-auto my-16 ">
      <div data-aos="fade-up">
      <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold text-shadow-green" data-aos="fade-up">
          Our Services
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
      </div>
        <div className=" flex flex-col md:flex-row w-full overflow-hidden rounded-md md:rounded-full border-2 border-blue-300 shadow-md shadow-green-200 transition-all duration-700  hover:border-green-400 hover:shadow-blue-300">
          <div
            className={`relative w-full  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%86%D8%A7.webp')] bg-fixed bg-cover bg-no-repeat`}
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>
            <div className="z-20  flex flex-col md:flex-row  justify-center gap-5 4k:gap-14 p-10">
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">administration</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">planning</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">Audit</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">development</span>
              <span data-aos="fade-up" className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 cursor-pointer text-shadow-xl ">Training</span>
            </div>
            <div className="z-20 flex justify-center items-center gap-5 p-10">
              <span data-aos="fade-up" className="animate-pulse	 z-20 text-yellow-500 text-xl 4k:text-3xl font-semibold text-shadow-xl ">You Can Show More Abou Our Service From Here<span className="mx-2"><i className="fa-solid fa-arrow-right"></i></span></span>
              <Link className="z-20" to={'services'} >
              <button data-aos="fade-up" className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-green overflow-hidden border-2 border-green-600 transition-all duration-700 hover:border-blue-700 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-full">
                  Our Services
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
  
  </>}



  </>
}
