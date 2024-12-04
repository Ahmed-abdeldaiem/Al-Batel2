import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";
import style from "./TeamMemberDetails.module.css";

export default function TeamMemberDetails() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState([]);

  let { id } = useParams();

  async function getEmployeeData(id) {
    setLoading(true);
    let data = await getPersonById(id);

    // console.log('function',id);

    console.log(data.qualifications.map((q, index) => q.title.ar));

    setEmployee(data);

    setLoading(false);
  }

  useEffect(() => {
    // console.log('useeffect',id);
    getEmployeeData(id);
  }, [id]);

  return (
    <>
      {Loading ? <Loader /> : null}

      {dir=='rtl'?<>
      <div className="container py-24 ">
        {employee.length == 0 ? (
          <>
            <h1>no data yet from server</h1>
          </>
        ) : (
          <>
            <h1 className="text-lg md:text-xl lg:text-4xl text-center font-bold text-blue-900 py-8">
              {employee?.name.ar}
            </h1>

            <div className="flex flex-wrap w-full items-center justify-center my-6 border-double border-4 rounded-xl bg-white  ">
              {/* employee image */}
              <div className="w-full md:w-1/2 flex p-3 justify-center items-center">
                <img
                  className="rounded-full w-1/2 border-2 border-opacity-40 border-blue-800 shadow-md shadow-green-300 transition-all duration-500 hover:shadow-blue-300 hover:border-green-600"
                  src={employee?.image?.url}
                  alt={employee?.image?.description?.ar}
                />
              </div>
              {/* employee main data */}
              <div className="w-full md:w-1/2 p-2 flex flex-col items-start">
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  الوظيفة:
                  <span className="text-gray-700 font-normal">
                    {employee?.job_title.ar}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  الجنسية:
                  <span className="text-gray-700 font-normal">
                    {employee?.nationality.ar}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  التخصص:
                  <span className="text-gray-700 font-normal">
                    {employee?.field.ar}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  الدرجة العلمية:
                  <span className="text-gray-700 font-normal">
                    {employee?.degree.ar}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  الخبرة:
                  <span className="text-gray-700 font-normal">
                    {employee?.experience_years.ar}
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap w-full  items-center justify-center my-12">
              <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3  text-green-600 font-semibold text-lg lg:text-2xl">
                        المؤهلات المهنية
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee?.qualifications?.map((q, index) =>  (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-normal  text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {q?.title?.ar } <span className="px-5">{q?.abbreviation?.ar}</span>
                            
                          </th>
                        </tr>
                      ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      </>:<>
      
      <div className="container py-24 ">
        {employee.length == 0 ? (
          <>
            <h1>no data yet from server</h1>
          </>
        ) : (
          <>
            <h1 className="text-lg md:text-xl lg:text-4xl text-center font-bold text-blue-900 py-8">
              {employee?.name.en}
            </h1>

            <div className="flex flex-wrap w-full items-center justify-center my-6 border-double border-4 rounded-xl bg-white ">
              {/* employee image */}
              <div className="w-full md:w-1/2 p-3 flex justify-center items-center">
                <img
                  className="rounded-full w-1/2 border-2 border-opacity-40 border-blue-800 shadow-md shadow-green-300 transition-all duration-500 hover:shadow-blue-300 hover:border-green-600"
                  src={employee?.image?.url}
                  alt={employee?.image?.description?.en}
                />
              </div>
              {/* employee main data */}
              <div className="w-full md:w-1/2 flex flex-col p-2 items-start">
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                Job Title :
                  <span className="text-gray-700 font-normal">
                    {employee?.job_title.en}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                  
                Nationality :
                  <span className="text-gray-700 font-normal">
                    {employee?.nationality.en}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                Field :
                  <span className="text-gray-700 font-normal">
                    {employee?.field.en}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                Academic degree:
                  <span className="text-gray-700 font-normal">
                    {employee?.degree.en}
                  </span>
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-950 font-semibold my-4">
                Experience Years :
                  <span className="text-gray-700 font-normal">
                    {employee?.experience_years.en}
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap w-full  items-center justify-center my-12">
              <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-blue-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3  text-green-600 font-semibold text-lg lg:text-2xl">
                      Professional qualifications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee?.qualifications?.map((q, index) =>  (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-normal  text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {q?.title?.en } <span className="px-5">{q?.abbreviation?.en}</span>
                            
                          </th>
                        </tr>
                      ))
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      
      </>}

     
    </>
  );
}
