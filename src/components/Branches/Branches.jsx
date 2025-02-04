import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Branches.module.css";

export default function Branches() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);




  const branches = [
    { id: 1,
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b1.jpg?raw=true'
    },
    {id: 2,
      name: {
        ar: "جدة",
        en: "Jeddah",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b2.webp'
    },
    
    {id: 3,
      name: {
        ar: "المدينة المنورة",
        en: "Madinah",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b3.jpg?raw=true'
    },
    {id: 4,
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b4.jpg?raw=truee'
    },
    ,
    {id: 5,
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b5.jpg?raw=true'
    },
    {id: 6,
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b6.jpg?raw=true'
    },
    {id: 7,
      name: {
        ar: "جازان",
        en: "jazan",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b7.jpg?raw=true'
    },
    {id: 8,
      name: {
        ar: "بريدة",
        en: "Buraydah",
      },
      img:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/branches/b8.jpg?raw=true'
    },
  ];







  return (
    <>

{dir=='rtl'?<>
<div className="container my-10">
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
          فروع الشركة
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

        <div className="flex flex-wrap justify-center items-stretch w-full my-9">




        {branches.map((branch, index) => {
                  return (
                    <Link key={index} to={`/branch/${branch.id}`} className="w-full md:w-1/2 p-4  lg:w-1/4">


                    <div  className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
                      <div className="overflow-hidden relative">
                        <img
                          className="rounded-t-lg h-[280px] w-full duration-700 transition-all group-hover:scale-125"
                          loading="lazy"
                          src={branch.img}
                          alt="branch image"
                          
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-xl text-nowrap font-bold tracking-tight text-gray-700">
                          <span className="mx-1 text-blue-700">
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          {branch.name.ar}
                        </h5>
        
                      </div>
                    </div>
                  </Link>
                  );
                })}


        
   

         
        </div>
      </div>

</>:<>
<div className="container my-10">
        <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
             Company Branches
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

        <div className="flex flex-wrap items-stretch w-full my-9">




        {branches.map((branch, index) => {
                  return (
                    <Link key={index} to={`/branch/${branch.id}`} className="w-full md:w-1/2 p-4  lg:w-1/4">


                    <div  className="max-w-sm relative overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-600">
                      <div className="overflow-hidden relative">
                        <img
                          className="rounded-t-lg h-[280px] w-full duration-700 transition-all group-hover:scale-125"
                          src={branch.img}
                          loading="lazy"
                          alt="branch image"
                          
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold text-nowrap tracking-tight text-gray-700">
                          <span className="mx-1 text-blue-700">
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          {branch.name.en}
                        </h5>
        
                      </div>
                    </div>
                  </Link>
                  );
                })}


        
   

         
        </div>
      </div>

</>}

    
    </>
  );
}
