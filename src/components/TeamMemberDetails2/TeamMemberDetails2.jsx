import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import style from "./TeamMemberDetails2.module.css";

export default function TeamMemberDetails2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);

  let { id } = useParams();

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row pt-20 bg-blue-100/50">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="w-5/12">
          <div className="w-full h-[220px] flex items-center bg-[#065995] rounded-e-full px-4">
            {/* employee image */}
            <div className="w-5/12 ">
              <img
                className="w-[180px] rounded-3xl"
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84.jpeg?raw=true"
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div className="w-7/12">
              <h2 className="text-white text-3xl my-2 pb-2 font-semibold">
                باتل عبدالله الباتل
              </h2>
              <h3 className="text-white text-xl my-4 font-semibold">
                شريك(CEO)
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col p-4">
            <div className=" bg-white rounded-2xl">
              <div className="p-2">
                <h2 className="text-2xl font-semibold ">
                  أكثر من * عاما من الخبرة في :
                </h2>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
              <div className="p-2">
                <h2 className="text-2xl font-semibold">الشهادات والتدريب </h2>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
                <p>*</p>
              </div>
            </div>
          </div>
        </div>

        {/* second section description / brieaf about employee */}
        <div className="w-7/12  py-2 px-8">
          <div className="p-8 w-full bg-white rounded-2xl">
            <h2 className="text-2xl font-semibold">الخبرة المهنية:</h2>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
            <p>*</p>
          </div>
          
            {/* <button className="bg-[#065995] relative overflow-hidden z-10 text-white w-full font-semibold text-xl p-3 rounded-xl my-5 duration-500 transition-all  group  hover:shadow-md hover:shadow-blue-600/50">
              عرض السيرة الذاتية بالتفصيل
              <div className=" bg-gray-200/30 w-0 start-0 top-0 bottom-0 absolute group-hover:w-full duration-700 transition-all ease-in-out"></div>
            </button> */}
            
         
        </div>
      </div>
    </>
  );
}
