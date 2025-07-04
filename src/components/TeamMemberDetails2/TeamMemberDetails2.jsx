import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";
import style from "./TeamMemberDetails2.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TeamMemberDetails2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({});
  let { id } = useParams();
let navigate=useNavigate();

  async function getEmployeeData(id) {
    setLoading(true);
    let data = await getPersonById(id);
    // console.log(data);
    if (!data) {
      navigate('/notfound'); // redirect to not found component
    } else {
      setEmployee(data);
      setLoading(false);
    }

  }

  useEffect(() => {
    // console.log('useeffect',id);
    getEmployeeData(id);
  }, [id]);


  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  

  return (

    <>
      {Loading ? <Loader/> : null}
        {dir == "rtl" ?<>
     

      
      <div className="bg-center bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg')]">
      <div className="w-full flex flex-col lg:flex-row pt-20 bg-blue-100/80">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="lg:w-6/12 3xl:w-5/12">
          <div className="w-full h-[220px] flex items-center bg-white/95 md:rounded-e-full px-4">
            {/* employee image */}
          
          
            <div className="w-5/12 ">
                
              <img
                className="w-[180px] h-[180px] rounded-3xl border-2 ms-2 border-blue-800"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div  className="w-7/12">
              <h2 data-aos="fade-up" className="text-blue-950 text-shadow-blue text-xl md:text-3xl lg:text-4xl 3xl:text-5xl my-2 pb-2 text-center font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.ar}
              </h2>
              <h3 data-aos="fade-up" data-aos-delay="400" className="text-blue-950 text-shadow-blue text-xl md:text-2xl lg:text-3xl 3xl:text-4xl my-4 text-center font-bold">
                {/* employee.job.ar / .en */}
                {employee?.job?.ar}
              </h3>
            </div>
          </div>
         
        </div>

        {/* second section description / brieaf about employee */}
        
      </div>
      <div className="w-full flex flex-col  bg-blue-100/80">
      <div className="w-full flex flex-col p-4">
            <div className=" bg-white/95 rounded-2xl">
              <div className="p-2">
                <h2 data-aos="fade-up" className="text-xl text-shadow-blue lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold ">
                  الشهادات
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-shadow-md md:text-xl lg:text-2xl text-gray-900 my-2 p-2 text-justify">                  
                  {employee?.certificates?.ar}
                </p>
              </div>
              
            </div>
          </div>
        <div className="w-full  p-4 ">
          <div className="p-8 w-full bg-white/95 rounded-2xl">
            <h2 data-aos="fade-up"  className="text-shadow-blue  text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold">الخبرة المهنية:</h2>
            <p data-aos="fade-up"   className="text-shadow-md text-lg md:text-xl lg:text-2xl text-gray-900 my-2 text-justify">
            
            {employee?.experienceDesc?.ar}
            </p>
            <h2 data-aos="fade-up" className="text-shadow-blue text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold text-justify"> المناصب الرئيسية خلال المسيرة المهنية:</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp,index)=>{
                return <h3  data-aos="fade-up" key={index} className="text-shadow-md text-lg md:text-xl lg:text-2xl text-gray-900 my-4"><i className="fas fa-circle text-sm text-green-700"></i> {exp.ar}</h3>
              })}
          </div>
     
        </div>
      </div>
      </div>
    
        </> : <>
        <div className="bg-center bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg')]">
      <div className="w-full flex flex-col lg:flex-row pt-20 bg-blue-100/80">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="lg:w-6/12 3xl:w-5/12">
          <div className="w-full h-[220px] flex items-center bg-white/95 md:rounded-e-full px-4">
            {/* employee image */}
          
          
            <div className="w-5/12 ">
                
              <img
                className="w-[180px] h-[180px] rounded-3xl border-2 ms-2 border-blue-800"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div  className="w-7/12">
              <h2 data-aos="fade-up" className="text-blue-950 text-shadow-blue text-xl md:text-3xl lg:text-4xl 3xl:text-5xl my-2 pb-2 text-center font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.en}
              </h2>
              <h3 data-aos="fade-up" data-aos-delay="400" className="text-blue-950 text-shadow-blue text-xl md:text-2xl lg:text-3xl 3xl:text-4xl my-4 text-center font-bold">
                {/* employee.job.ar / .en */}
                {employee?.job?.en}
              </h3>
            </div>
          </div>
         
        </div>

        {/* second section description / brieaf about employee */}
        
      </div>
      <div className="w-full flex flex-col  bg-blue-100/80">
      <div className="w-full flex flex-col p-4">
            <div className=" bg-white/95 rounded-2xl">
              <div className="p-2">
                <h2 data-aos="fade-up" className="text-xl text-shadow-blue lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold ">
                Certificates
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="text-lg text-shadow-md md:text-xl lg:text-2xl text-gray-900 my-2 p-2 text-justify">                  
                  {employee?.certificates?.en}
                </p>
              </div>
              
            </div>
          </div>
        <div className="w-full  p-4 ">
          <div className="p-8 w-full bg-white/95 rounded-2xl">
            <h2 data-aos="fade-up"  className="text-shadow-blue  text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold">Professional experience:</h2>
            <p data-aos="fade-up"   className="text-shadow-md text-lg md:text-xl lg:text-2xl text-gray-900 my-2 text-justify">
            
            {employee?.experienceDesc?.en}
            </p>
            <h2 data-aos="fade-up" className="text-shadow-blue text-xl lg:text-3xl text-blue-950 my-1 md:my-4 font-semibold text-justify">Main positions during career:</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp,index)=>{
                return <h3  data-aos="fade-up" key={index} className="text-shadow-md text-lg md:text-xl lg:text-2xl text-gray-900 my-4"><i className="fas fa-circle text-sm text-green-700"></i> {exp.en}</h3>
              })}
          </div>
     
        </div>
      </div>
      </div>
        </>}

     
    </>
  );
}


// english section