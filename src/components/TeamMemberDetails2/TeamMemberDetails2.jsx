import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";
import style from "./TeamMemberDetails2.module.css";

export default function TeamMemberDetails2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({});
  let { id } = useParams();


  async function getEmployeeData(id) {
    setLoading(true);
    let data = await getPersonById(id);

    console.log('function',id);

    console.log(data);

    setEmployee(data);

    setLoading(false);
  }

  useEffect(() => {
    // console.log('useeffect',id);
    getEmployeeData(id);
  }, [id]);




  return (

  

    <>
      {Loading ? <Loader/> : null}
        {dir == "rtl" ?<>
        <div className="w-full flex flex-col lg:flex-row pt-20 bg-blue-100/50">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="lg:w-5/12">
          <div className="w-full h-[220px] flex items-center bg-white md:rounded-e-full px-4">
            {/* employee image */}
          
          
            <div className="w-5/12 ">
                
              <img
                className="w-[180px] h-[180px] rounded-3xl border-2 border-blue-800"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div className="w-7/12">
              <h2 className="text-blue-950 text-4xl my-2 pb-2 font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.ar}
              </h2>
              <h3 className="text-blue-950 text-2xl my-4 font-bold">
                {/* employee.job.ar / .en */}
               الوظيفة: {employee?.job?.ar}
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col p-4">
            <div className=" bg-white rounded-2xl">
              <div className="p-2">
                <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold ">
                  الشهادات
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-900 my-2">
                  {/* employee.certificates.ar / .en */}
                  
                  {employee?.certificates?.ar}
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* second section description / brieaf about employee */}
        <div className="lg:w-7/12  py-2 px-8">
          <div className="p-8 w-full bg-white rounded-2xl">
            <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold">الخبرة المهنية:</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900 my-2">
            
            {employee?.experienceDesc?.ar}
            </p>
            <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold"> المناصب الرئيسية خلال المسيرة المهنية:</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp)=>{
                return <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 my-4"><i className="fas fa-circle text-sm text-green-700"></i> {exp.ar}</h3>
              })}
          </div>
          
            {/* <button className="bg-[#065995] relative overflow-hidden z-10 text-white w-full font-semibold text-xl p-3 rounded-xl my-5 duration-500 transition-all  group  hover:shadow-md hover:shadow-blue-600/50">
              عرض السيرة الذاتية بالتفصيل
              <div className=" bg-gray-200/30 w-0 start-0 top-0 bottom-0 absolute group-hover:w-full duration-700 transition-all ease-in-out"></div>
            </button> */}
            
         
        </div>
      </div>
        </> : <>
        <div className="w-full flex flex-col lg:flex-row pt-20 bg-blue-100/50">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="lg:w-5/12">
          <div className="w-full h-[220px] flex items-center bg-white md:rounded-e-full px-4">
            {/* employee image */}
          
          
            <div className="w-5/12 ">
                
              <img
                className="w-[180px] h-[180px] rounded-3xl border-2 border-blue-800"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div className="w-7/12">
              <h2 className="text-blue-950 text-4xl my-2 pb-2 font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.en}
              </h2>
              <h3 className="text-blue-950 text-2xl my-4 font-bold">
                {/* employee.job.ar / .en */}
           Job: {employee?.job?.en}
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col p-4">
            <div className=" bg-white rounded-2xl">
              <div className="p-2">
                <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold ">
                  Certificates
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-900 my-2">
                  {/* employee.certificates.ar / .en */}
                  
                  {employee?.certificates?.en}
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* second section description / brieaf about employee */}
        <div className="lg:w-7/12  py-2 px-8">
          <div className="p-8 w-full bg-white rounded-2xl">
            <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold">Professional experience:</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900 my-2">
            
            {employee?.experienceDesc?.en}
            </p>
            <h2 className="text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold"> Main positions during career:</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp)=>{
                return <h3 className="text-lg md:text-xl lg:text-2xl text-gray-900 my-4"><i className="fas fa-circle text-sm text-green-700"></i> {exp.en}</h3>
              })}
          </div>
          
            {/* <button className="bg-[#065995] relative overflow-hidden z-10 text-white w-full font-semibold text-xl p-3 rounded-xl my-5 duration-500 transition-all  group  hover:shadow-md hover:shadow-blue-600/50">
              عرض السيرة الذاتية بالتفصيل
              <div className=" bg-gray-200/30 w-0 start-0 top-0 bottom-0 absolute group-hover:w-full duration-700 transition-all ease-in-out"></div>
            </button> */}
            
         
        </div>
      </div>
        </>}

     
    </>
  );
}


// english section