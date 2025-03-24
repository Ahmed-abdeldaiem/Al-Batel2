import React from "react";

import { LanguageContext } from "../../Context/LanguageContext";
import Loader from "../Loader/Loader";
import style from "./AvailableJobs.module.css";
import { useFormik } from 'formik'
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { JobContext } from "../../Context/JobContex";




export default function AvailableJobs() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  
  const { getJobs } = useContext(JobContext);
  const [jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(false);


  let formik = useFormik({
    initialValues:{
    
      search:"",
    
     
    },
    
    onSubmit:handleSearch,
  
  });

  function handleSearch(formValues){

     console.log(formValues);
     
      return formValues.search
      }



      async function getRelatedsearch(search){


    
          setLoading(true)

          let searchData= await getJobs();
         console.log(searchData);
        
          setJobs(searchData?.filter((job)=>job.name.ar.toLowerCase().includes(search.toLowerCase())))
          setLoading(false)
      
      }

      async function getRelatedsearchEn(search){


    
        setLoading(true)

        let searchDataEn= await getJobs();
       console.log(searchDataEn);
      
        setJobs(searchDataEn?.filter((job)=>job.name.en.toLowerCase().includes(search.toLowerCase())))
        setLoading(false)
    
    }



  async function getJobsData() {
    setLoading(true);
    let data = await getJobs();

    // console.log(data);
    setJobs(data);

    setLoading(false);
  }

  useEffect(() => {
  
    getJobsData();
  }, []);


  useEffect(() => {
 
    dir == "rtl" ? getRelatedsearch(formik.values.search) : getRelatedsearchEn(formik.values.search) 
    
    }, [formik.values.search]);



  return (
    <>
      {Loading ? <Loader /> : null}

      {dir == "rtl" ? (
        <>
          <div className="container flex flex-col items-center justify-center py-24">
            <h1 className="text-blue-950 text-lg lg:text-4xl  3xl:text-5xl font-bold text-center py-10">
              الوظائف المتاحة
            </h1>
            <form className="w-8/12 mx-auto mt-4 mb-10" onSubmit={formik.handleSubmit} onChange={formik.handleSubmit}>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-blue-900 sr-only"
              >
                بحث
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.search} name="search"
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm text-blue-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="محاسب, مراجع, ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
                >
                  بحث
                </button>
              </div>
            </form>

          {jobs=="No Jobs found" ? <>
            <h2 className="text-gray-500 text-center text-lg lg:text-2xl 3xl:text-3xl py-16 font-semibold">ترقبوا الوظائف المتاحة قريبا...</h2>
          </>: 
          <>

        {jobs?.map((job,index)=>{

return(
<div key={index} className="w-8/12 border border-gray-200 my-2 shadow-sm bg-white rounded-md">
{/* اللوجو واسم الوظيفة */}
<div className="px-1 md:px-2 lg:px-4 flex flex-col lg:flex-row items-center relative overflow-hidden">
  {/* new green mark */}
  <span className="absolute top-4 -end-6 text-sm px-8 font-semibold bg-[#34B171] text-white rotate-[-45deg] text-center ">
    New
  </span>

  {/* logo */}
  <div className="w-4/12 lg:w-1/12 relative flex ">
    <img
      className=" w-full lg:absolute  bottom-0"
      src="https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg?raw=true"
      alt="company logo"
    />
  </div>
  {/* location , date */}
  <div className="w-full lg:w-8/12  p-6 flex-col items-center text-gray-500 justify-around">
    <p className="text-center  w-4/12 text-lg lg:text-2xl 3xl:text-3xl text-blue-950 font-semibold">
      {job?.name?.ar}
    </p>

    <div className="py-3">
      <Tippy content="مكان العمل">
        <span className="text-gray-500 text-lg">
          {" "}
          <i className="fas fa-location-dot px-2"></i>الموقع: {job?.location?.ar}
        </span>
      </Tippy>
    </div>

    <div>
      <Tippy content="آخر موعد للتقديم">
        <span className="text-gray-500 text-lg">
          {" "}
          <i className="fas fa-clock px-2"></i>آخر موعد للتقديم: {job?.endDate}
        </span>
      </Tippy>
    </div>
  </div>

  <div className="mb-8 ld:mb-1">
    <Tippy content="تفاصيل الوظيفة">
      <a
        type="submit"
        target={"_blank"}
        href={job?.link}
        className="text-white  bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
      >
        تفاصيل
      </a>
    </Tippy>
  </div>

  {/* date of post the job */}
  <span className="absolute bottom-1 lg:bottom-4 end-0 text-sm px-8 font-semibold  text-gray-500  text-center ">
   من: {job.fromDate}
  </span>
</div>
</div>
)

        })}

      
          </>}

        


          </div>
        </>
      ) : (
        <>
          <div className="container flex flex-col items-center justify-center py-24">
            <h1 className="text-blue-950 text-lg lg:text-4xl  3xl:text-5xl font-bold text-center py-10">
              Available Jobs
            </h1>
            <form className="w-8/12 mx-auto mt-4 mb-10" onSubmit={formik.handleSubmit} onChange={formik.handleSubmit}>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-blue-900 sr-only"
              >
                بحث
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                 onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.search} name="search"
                  type="search"
                  id="search"
                  className="block w-full p-4 ps-10 text-sm text-blue-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Auditor, Accountant, ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
                >
                  Search
                </button>
              </div>
            </form>

          {jobs=="No Jobs found" ? <>
            <h2 className="text-gray-500 text-center text-lg lg:text-2xl 3xl:text-3xl py-16 font-semibold">Stay tuned for available jobs soon!</h2>
          </>: 
          <>

        {jobs?.map((job,index)=>{

return(
<div key={index} className="w-8/12 border border-gray-200 my-2 shadow-sm bg-white rounded-md">
{/* اللوجو واسم الوظيفة */}
<div className="px-1 md:px-2 lg:px-4 flex flex-col lg:flex-row items-center relative overflow-hidden">
  {/* new green mark */}
  <span className="absolute top-4 -end-6 text-sm px-8 font-semibold bg-[#34B171] text-white rotate-[45deg] text-center ">
    New
  </span>

  {/* logo */}
  <div className="w-4/12 lg:w-1/12 relative flex ">
    <img
      className=" w-full lg:absolute  bottom-0"
      src="https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg?raw=true"
      alt="company logo"
    />
  </div>
  {/* location , date */}
  <div className="w-full lg:w-8/12  p-6 flex-col items-center text-gray-500 justify-around">
    <p className="text-center  w-4/12 text-lg lg:text-2xl 3xl:text-3xl text-blue-950 font-semibold">
      {job?.name?.en}
    </p>

    <div className="py-3">
      <Tippy content="Location">
        <span className="text-gray-500 text-lg">
          {" "}
          <i className="fas fa-location-dot px-2"></i> location: {job?.location?.en}
        </span>
      </Tippy>
    </div>

    <div>
      <Tippy content="Application deadline">
        <span className="text-gray-500 text-lg">
          {" "}
          <i className="fas fa-clock px-2"></i>Deadine: {job?.endDate}
        </span>
      </Tippy>
    </div>
  </div>

  <div className="mb-8 ld:mb-1">
    <Tippy content="Job Details">
      <a
        type="submit"
        target={"_blank"}
        href={job?.link}
        className="text-white  bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
      >
        Details
      </a>
    </Tippy>
  </div>

  {/* date of post the job */}
  <span className="absolute bottom-1 lg:bottom-4 end-0 text-sm px-8 font-semibold  text-gray-500  text-center ">
   from: {job.fromDate}
  </span>
</div>
</div>
)



        })}

      
          </>}

        


          </div>
        </>
      )}
    </>
  );
}
