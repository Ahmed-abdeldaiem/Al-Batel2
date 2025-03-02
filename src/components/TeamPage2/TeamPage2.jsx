import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import Hexagon from "react-hexagon";

import style from "./TeamPage2.module.css";
import Logos from "../Logos/Logos";
import { TeamContext } from "../../Context/TeamContext";
import Loader from "../Loader/Loader";

export default function TeamPage2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getTeamMembers } = useContext(TeamContext);
  const [employees, setEmployees] = useState([]);
  const [Loading, setLoading] = useState(false);


  async function getEmployeesData() {
    setLoading(true);
    let data = await getTeamMembers();


    // console.log(data);

    setEmployees(data);

    setLoading(false);
  }

  useEffect(() => {
  
    getEmployeesData();
  }, []);





  const handleScroll = () => {
    const section = document.getElementById("team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  const words = [
    { word: { ar: "تعاون", en: "Cooperation" } },
    { word: { ar: "خبرة", en: "Experience" } },
    { word: { ar: "كفاءة", en: "Efficiency" } },
    { word: { ar: "ابداع", en: "Creativity" } },
    { word: { ar: "ابتكار", en: "innovation" } },
    { word: { ar: "جودة", en: "Quality" } },
    { word: { ar: "نزاهة ", en: "Integrity" } },
    { word: { ar: "انتاجية ", en: "Productivity" } },
    { word: { ar: "احترافية", en: "Professionalism" } },
  ];

  return (
    <>
       {Loading ? <Loader/> : null}
      {dir == "rtl" ? (
        <>
          {/* header section */}
          <div
          // https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/enhanced2/team-bg2.jpeg?raw=true
            className="relative flex flex-col lg:h-[620px] 3xl:h-[790px] h-[300px] md:h-[370px] justify-center items-center mt-16 py-10  bg-center bg-no-repeat bg-cover bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%81%D8%B1%D9%8A%D9%82%D9%86%D8%A7.jpeg?raw=true')]"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-l from-gray-400/50  to-blue-800/40 opacity-70 z-10"></div> */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/70 to-blue-200/50 opacity-80 z-10"></div>
            {/* certified */}
            <div className="absolute bottom-2 end-2 w-2/12 ">
              <img
                className="w-full"
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified2/111-removebg-preview.png?raw=true"
                alt="certified image"
              />
            </div>
            {/* hexagon */}
            <div className="hidden lg:flex flex-wrap lg:gap-4 z-30  justify-center">
              {words.map((word, index) => {
                return (
                  <Hexagon
                    key={index}
                    className="lg:w-1/12 md:w-1/6 w-1/5 lg:p-3 md:p-2 p-1 cursor-pointer  "
                    style={{
                      stroke: "#3a497b",
                      strokeWidth: 10,
                      fill: "#ffffff66",
                    }}
                  >
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      className="text-2xl text-gray-900"
                      style={{
                        fill: "#3a497b",
                        fontSize: "75px",
                        fontWeight: "bold",
                      }}
                    >
                      {word.word.ar}
                    </text>
                  </Hexagon>
                );
              })}
            </div>

            <h2 className="text-white text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4 lg:my-8 z-30 font-bold">
              فريق عمل شركة الباتل
            </h2>

            <h3 className="text-white text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2 lg:mt-6 z-30 font-semibold">
            فريق واحد<span className="text-2xl md:text-7xl font-normal">..</span>رؤية مشتركة<span className="text-2xl md:text-7xl font-normal">..</span>نجاح بلا حدود

            </h3>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8  lg:mt-3 z-30 font-semibold">
              <span>من الفكرة إلى النجاح</span>
              <span className="text-2xl md:text-7xl font-normal">..</span>
             <span>فريقنا في خدمتك</span>
            </h3>

            <button className="my-2 md:my-8 lg:my-12 z-30" onClick={handleScroll}>
              <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-50 py-2 lg:py-3 border-blue-950 border-2 text-center z-20 text-blue-950 text-sm md:text-lg font-bold">
                تعرف على فريق العمل
                <span className="mx-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </h3>
            </button>
          </div>

          {/* team member section */}
          <div className="container bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center   py-14  ">
            <Logos />
            <div id="team" className="py-2  container w-full ">
              {/* Team members */}
              <div className="w-full flex flex-wrap justify-center">
                {employees?.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group w-11/12 lg:w-1/4  md:w-1/3 3xl:w-1/5     md:p-3 p-3 overflow-hidden"
                    >
                     
                      <Link
                        to={`/team/${teamMember?.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                          src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified3/certified.png?raw=true"
                          alt="certfied image"
                        />
                        <div className=" flex h-[230px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember?.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="Team Member image"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div> */}
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-4 text-2xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember?.name?.ar}
                          </h5>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        {/* header section */}
        <div
        // https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/enhanced2/team-bg2.jpeg?raw=true
          className="relative flex flex-col lg:h-[620px] 3xl:h-[790px] h-[300px] md:h-[370px] justify-center items-center mt-16 py-10  bg-center bg-no-repeat bg-cover bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%81%D8%B1%D9%8A%D9%82%D9%86%D8%A7.jpeg?raw=true')]"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-l from-gray-400/50  to-blue-800/40 opacity-70 z-10"></div> */}
          {/* <div className="absolute inset-0 bg-gradient-to-l from-blue-700/70 to-blue-200/50 opacity-80 z-10"></div> */}
          <div className="absolute inset-0 bg-gradient-to-l from-blue-200/50 to-blue-700/70 opacity-80 z-10"></div>
          {/* certified */}
          <div className="absolute bottom-2 end-2 w-2/12 ">
            <img
              className="w-full"
              src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified2/111-removebg-preview.png?raw=true"
              alt="certified image"
            />
          </div>
          {/* hexagon */}
          <div className="hidden lg:flex flex-wrap lg:gap-4 z-30  justify-center">
            {words.map((word, index) => {
              return (
                <Hexagon
                  key={index}
                  className="lg:w-1/12 md:w-1/6 w-1/5 lg:p-3 md:p-2 p-1 cursor-pointer  "
                  style={{
                    stroke: "#3a497b",
                    strokeWidth: 10,
                    fill: "#ffffff66",
                  }}
                >
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="text-2xl text-gray-900"
                    style={{
                      fill: "#3a497b",
                      fontSize: "58px",
                      fontWeight: "bold",
                    }}
                  >
                    {word.word.en}
                  </text>
                </Hexagon>
              );
            })}
          </div>

          <h2 className="text-white text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4 lg:my-8 z-30 font-bold">
          Al-Batel Company Team
            </h2>

            <h3 className="text-white text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2 lg:mt-6 z-30 font-semibold">
            One Team<span className="text-2xl md:text-7xl font-normal">..</span>One Vision<span className="text-2xl md:text-7xl font-normal">..</span>Boundless Success

            </h3>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8  lg:mt-3 z-30 font-semibold">
              <span>From Vision to Victory</span>
              <span className="text-2xl md:text-7xl font-normal">..</span>
             <span>Our Team at Your Service</span>
            </h3>

            <button className="my-2 md:my-8 lg:my-12 z-30" onClick={handleScroll}>
              <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-50 py-2 lg:py-3 border-blue-950 border-2 text-center z-20 text-blue-950 text-sm md:text-lg font-bold">
               More About Our Team
                <span className="mx-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </h3>
            </button>
        </div>

        {/* team member section */}
        <div className="container bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center   py-14  ">
          <Logos />
          <div id="team" className="py-2  container w-full ">
            {/* Team members */}
            <div className="w-full flex flex-wrap justify-center">
                {employees?.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group w-11/12 lg:w-1/4  md:w-1/3 3xl:w-1/5     md:p-3 p-3 overflow-hidden"
                    >
                     
                      <Link
                        to={`/team/${teamMember?.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                          src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified3/certified.png?raw=true"
                          alt="certfied image"
                        />
                        <div className=" flex h-[230px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember?.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="Team Member image"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div> */}
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-4 text-xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember?.name?.en}
                          </h5>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
          
          </div>
        </div>
      </>
      )}
    </>
  );
}
