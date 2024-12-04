import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";
import style from "./Team.module.css";

export default function Team() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getAllFirstTeam } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [team3, setTeam3] = useState([]);
  const [team4, setTeam4] = useState([]);
  

  useEffect(() => {
    getFirstTeam();
  }, []);

  async function getFirstTeam() {
    setLoading(true);
    let all = await getAllFirstTeam();
    console.log("team ", all.record.team);
    setTeam1(all.record.team);
    setTeam2(all.record.team2);
    setTeam3(all.record.team3);
    setTeam4(all.record.team4);
   

    setLoading(false);
  }

  return (
    <>
      {Loading ? <Loader /> : null}
      {dir=='rtl'?<>
      {/*  bg-[url('https://images.pexels.com/photos/13566152/pexels-photo-13566152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] */}
      {/* <div className="container relative bg-gradient-to-l from-green-300/20  to-blue-400/30 bg-opacity-70  bg-no-repeat bg-cover  py-24  "> */}
      <div className="container bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center   py-24  ">
        {/* <div className="absolute inset-0 -z-10">
        <img className="absolute w-full h-full -z-10"  src="https://images.pexels.com/photos/4194853/pexels-photo-4194853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="absolute inset-0 bg-gradient-to-l from-blue-300/50  to-blue-800/30 opacity-70 -z-10"></div>

        </div>
   */}
 <h2 className="text-blue-900 text-3xl text-center my-6  font-semibold">
        
        فريق عمل شركة الباتل
       
      </h2>
      <hr className="border-green-500 border-t-2 w-40 mx-auto" />
      <hr className="border-green-600 border-t-2 w-20 my-2 pb-8 mx-auto" />
     
     
     
      <a
  className="text-blue-400 text-2xl"
  href="#/CV_Template"
  target="_blank"
  rel="noopener noreferrer"
>
  Go to CV Template
</a>


      <div className="flex flex-wrap w-full items-center justify-center">
        {team1.length == 0 ? (
          <p className="text-2xl text-blue-800 font-bold">
            No team members available
          </p>
        ) : (
          team1.map((person) => {
            return (
              <Link
                to={`/team/${person.id}`}
                key={person.id}
                className="w-full group md:w-1/2 lg:w-1/4 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
              >
                <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                  {/* Team Member Image */}
                  <img
                    className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                    src={person.image?.url} // Fallback if image URL is missing
                    alt={person.image?.description?.ar}
                  />
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {person.name.ar}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {person.job_title.ar}
                    </p>
                    {/* Read More Button */}

                    <Link
                      to={`/team/${person.id}`}
                      className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                    >اضغط لعرض المزيد</Link>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        الاستشارات الإدارية والمالية    
      </h2>
      <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
      <div className="flex flex-wrap w-full items-center justify-center">
        {team2.length == 0 ? (
          <p className="text-2xl text-blue-800 font-bold">
            No team members available
          </p>
        ) : (
          team2.map((person) => {
            return (
              <Link
                to={`/team/${person.id}`}
                key={person.id}
                className="w-full group md:w-1/2 lg:w-1/4 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
              >
                <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                  {/* Team Member Image */}
                  <img
                    className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                    src={person.image?.url} // Fallback if image URL is missing
                    alt={person.image?.description?.ar}
                  />
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {person.name.ar}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {person.job_title.ar}
                    </p>
                    {/* Read More Button */}

                    <Link
                      to={`/team/${person.id}`}
                      className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                    >اضغط لعرض المزيد</Link>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>

      <div className="flex w-full flex-wrap flex-col md:flex-row justify-center items-center">

          <div className="w-full md:w-1/2">
          <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        الاستشارات الضريبية والزكوية
      </h2>
      <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
      <div className="flex flex-wrap w-full items-center justify-center my-6">
        {team3.length == 0 ? (
          <p className="text-2xl text-blue-800 font-bold">
            No team members available
          </p>
        ) : (
          team3.map((person) => {
            return (
              <Link
                to={`/team/${person.id}`}
                key={person.id}
                className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
              >
                <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                  {/* Team Member Image */}
                  <img
                    className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                    src={person.image?.url} // Fallback if image URL is missing
                    alt={person.image?.description?.ar}
                  />
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {person.name.ar}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {person.job_title.ar}
                    </p>
                    {/* Read More Button */}

                    <Link
                      to={`/team/${person.id}`}
                      className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                    >اضغط لعرض المزيد</Link>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
          </div>
          <div className="w-full md:w-1/2">
          <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
        استشارات قانونية
      </h2>
      <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
      <div className="flex flex-wrap w-full items-center justify-center">
        {team4.length == 0 ? (
          <p className="text-2xl text-blue-800 font-bold">
            No team members available
          </p>
        ) : (
          team4.map((person) => {
            return (
              <Link
                to={`/team/${person.id}`}
                key={person.id}
                className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
              >
                <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                  {/* Team Member Image */}
                  <img
                    className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                    src={person.image?.url} // Fallback if image URL is missing
                    alt={person.image?.description?.ar}
                  />
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {person.name.ar}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {person.job_title.ar}
                    </p>
                    {/* Read More Button */}

                    <Link
                      to={`/team/${person.id}`}
                      className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                    >اضغط لعرض المزيد</Link>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
          </div>
          <div className="w-full md:w-1/2">
          <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
الرقابة والجودة
      </h2>
      <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
      <div className="flex flex-wrap w-full items-center justify-center">
     
              <Link
               
               
                className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
              >
                <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                  {/* Team Member Image */}
                  <img
                    className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                    alt='الصورة الشخصية للهنوف عبدالعزيز'
                    src='https://pbs.twimg.com/profile_images/1772264055920603136/nHhDFMe2_400x400.jpg'
                    
                  />
                  {/* Card Content */}
                  <div className="p-5 flex flex-col justify-center items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                     الهنوف عبدالعزيز
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      مدقق رقابة وجودة
                    </p>
                    {/* Read More Button */}

                    <Link
                    
                      className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                    >اضغط لعرض المزيد</Link>
                  </div>
                </div>
              </Link>
            
      </div>
          </div>

      </div>

     
 
      
       
      </div>
      </>:<>
      <div className="container  py-24  ">
<h2 className="text-blue-900 text-3xl text-center my-6  font-semibold">

Al-batel Company Team 
</h2>
<hr className="border-green-500 border-t-2 w-40 mx-auto" />
<hr className="border-green-600 border-t-2 w-20 my-2 pb-8 mx-auto" />

<div className="flex flex-wrap w-full items-center justify-center">
  {team1.length == 0 ? (
    <p className="text-2xl text-blue-800 font-bold">
      No team members available
    </p>
  ) : (
    team1.map((person) => {
      return (
        <Link
          to={`/team/${person.id}`}
          key={person.id}
          className="w-full group md:w-1/2 lg:w-1/4 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
        >
          <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
            {/* Team Member Image */}
            <img
              className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
              src={person.image?.url} // Fallback if image URL is missing
              alt={person.image?.description?.en}
            />
            {/* Card Content */}
            <div className="p-5 flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {person.name.en}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {person.job_title.en}
              </p>
              {/* Read More Button */}

              <Link
                to={`/team/${person.id}`}
                className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
              >
Click to view more              </Link>
            </div>
          </div>
        </Link>
      );
    })
  )}
</div>

<h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
Management and financial consulting
</h2>
<hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
<div className="flex flex-wrap w-full items-center justify-center">
  {team2.length == 0 ? (
    <p className="text-2xl text-blue-800 font-bold">
      No team members available
    </p>
  ) : (
    team2.map((person) => {
      return (
        <Link
          to={`/team/${person.id}`}
          key={person.id}
          className="w-full group md:w-1/2 lg:w-1/4 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
        >
          <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
            {/* Team Member Image */}
            <img
              className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
              src={person.image?.url} // Fallback if image URL is missing
              alt={person.image?.description?.en}
            />
            {/* Card Content */}
            <div className="p-5 flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {person.name.en}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {person.job_title.en}
              </p>
              {/* Read More Button */}

              <Link
                to={`/team/${person.id}`}
                className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
              >
 Click to view more              </Link>
            </div>
          </div>
        </Link>
      );
    })
  )}
</div>

<div className="flex w-full flex-wrap flex-col md:flex-row justify-center items-center">

    <div className="w-full md:w-1/2">
    <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
    Tax and Zakat Consultations  
</h2>
<hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
<div className="flex flex-wrap w-full items-center justify-center my-6">
  {team3.length == 0 ? (
    <p className="text-2xl text-blue-800 font-bold">
      No team members available
    </p>
  ) : (
    team3.map((person) => {
      return (
        <Link
          to={`/team/${person.id}`}
          key={person.id}
          className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
        >
          <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
            {/* Team Member Image */}
            <img
              className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
              src={person.image?.url} // Fallback if image URL is missing
              alt={person.image?.description?.en}
            />
            {/* Card Content */}
            <div className="p-5 flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {person.name.en}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {person.job_title.en}
              </p>
              {/* Read More Button */}

              <Link
                to={`/team/${person.id}`}
                className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
              >
Click to view more
              </Link>
            </div>
          </div>
        </Link>
      );
    })
  )}
</div>
    </div>
    <div className="w-full md:w-1/2">
    <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
    Legal consultations
</h2>
<hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
<div className="flex flex-wrap w-full items-center justify-center">
  {team4.length == 0 ? (
    <p className="text-2xl text-blue-800 font-bold">
      No team members available
    </p>
  ) : (
    team4.map((person) => {
      return (
        <Link
          to={`/team/${person.id}`}
          key={person.id}
          className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
        >
          <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
            {/* Team Member Image */}
            <img
              className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
              src={person.image?.url} // Fallback if image URL is missing
              alt={person.image?.description?.en}
            />
            {/* Card Content */}
            <div className="p-5 flex flex-col justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {person.name.en}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                {person.job_title.en}
              </p>
              {/* Read More Button */}

              <Link
                to={`/team/${person.id}`}
                className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
              >
Click to view more
              </Link>
            </div>
          </div>
        </Link>
      );
    })
  )}
</div>
    </div>
    <div className="w-full md:w-1/2">
            <h2 className="text-green-600 text-3xl text-center  my-5 font-semibold">
            Control and Quality
        </h2>
        <hr className="border-blue-700 border-t-2 w-60 my-5 mx-auto" />
        <div className="flex flex-wrap w-full items-center justify-center">
       
                <Link
                 
                 
                  className="w-full group md:w-2/3 lg:w-1/2 hover:-translate-y-9  rounded-lg transition-all ease-in-out duration-700 p-6"
                >
                  <div className="bg-white hover:bg-slate-100 flex flex-col h-[400px]  justify-center items-center overflow-hidden border border-gray-200 rounded-3xl rounded-tl-none shadow-md hover:shadow-green-500 transition-all duration-700 ease-in-out">
                    {/* Team Member Image */}
                    <img
                      className="rounded-full my-auto mx-auto group-hover:scale-110 transition-all duration-500  w-40 h-40 object-center"
                      alt='Personal photo for elhanof'
                      src='https://pbs.twimg.com/profile_images/1772264055920603136/nHhDFMe2_400x400.jpg'
                      
                    />
                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-center items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Alhanof Abdelaziz
                      </h5>
                      <p className="mb-3 font-normal text-gray-700">
                      Quality Control Auditor
                      </p>
                      {/* Read More Button */}

                      <Link
                      
                        className="relative text-wrap opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full border-green-300 bg-indigo-300 bg-opacity-50  inline-flex items-center justify-center p-2 text-sm  overflow-hidden  text-yellow-900 font-semibold transition-all duration-700 ease-out border-2  rounded-lg shadow-md group"
                      >
Click to view more
                    
                      </Link>
                    </div>
                  </div>
                </Link>
              
        </div>
            </div>

</div>




</div>
      </>}
   
    </>
  );
}





