import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Manager.module.css";

export default function Manager() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  return (
    <>

{dir=='rtl'?<>

<div className="container m-auto my-16 ">
        <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold">
          فريق العمل
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className=" flex flex-col md:flex-row w-full overflow-hidden rounded-md md:rounded-full border-2 border-blue-300 shadow-md shadow-green-200 transition-all duration-700  hover:border-green-400 hover:shadow-blue-300">
          <div
            className={`relative w-full  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D9%81%D8%B1%D9%8A%D9%82%D9%86%D8%A7.jpeg')] bg-fixed bg-cover bg-no-repeat`}
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>
            <div className="z-20  flex flex-col md:flex-row  justify-center gap-5 4k:gap-14 p-10">
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">خبرة</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">كفاءة</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">تعاون</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">ابداع</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">ابتكار</span>
            </div>
            <div className="z-20 flex justify-center items-center gap-5 p-10">
              <span className="animate-pulse	 z-20 text-yellow-500 text-xl 4k:text-3xl font-semibold ">يمكنك الاطلاع على فريقنا من هنا<span className="mx-2"><i className="fa-solid fa-arrow-left"></i></span></span>
              <Link className="z-20" to={'team'} >
              <button className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                  فريقنا
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>

</>:<>

<div className="container m-auto my-16 ">
        <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold">
          Our Team
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
        <div className=" flex flex-col md:flex-row w-full overflow-hidden rounded-md md:rounded-full border-2 border-blue-300 shadow-md shadow-green-200 transition-all duration-700  hover:border-green-400 hover:shadow-blue-300">
          <div
            className={`relative w-full  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D9%81%D8%B1%D9%8A%D9%82%D9%86%D8%A7.jpeg')] bg-fixed bg-cover bg-no-repeat`}
          >
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600  to-blue-600/50 opacity-70 z-10"></div>
            <div className="z-20  flex flex-col md:flex-row  justify-center gap-5 4k:gap-14 p-10">
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">expertise</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">efficiency</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">cooperation</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">creativity</span>
              <span className="rounded-full z-20 md:px-8 mx-1 4k:px-12 4k:mx-4 text-center bg-blue-100 bg-opacity-20 text-white font-semibold text-xl 4k:text-3xl py-3 border-green-600 border-2 ">innovation</span>
            </div>
            <div className="z-20 flex justify-center items-center gap-5 p-10">
              <span className="animate-pulse	 z-20 text-yellow-500 text-xl 4k:text-3xl font-semibold ">You Can Show More About Our Team From Here<span className="mx-2"><i className="fa-solid fa-arrow-right"></i></span></span>
              <Link className="z-20" to={'team'} >
              <button className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
                  Our Team
                </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>

</>}


     
    </>
  );
}
