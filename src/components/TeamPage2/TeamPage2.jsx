import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import Hexagon from "react-hexagon";

import style from "./TeamPage2.module.css";
import Logos from "../Logos/Logos";

export default function TeamPage2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  const handleScroll = () => {
    const section = document.getElementById("team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Team = [
    {
      id: 1,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84.jpeg?raw=true",
      name: { ar: "باتل عبدالله الباتل", en: "Batel Abdullah Al-Batel" },
    },
    ,
    {
      id: 2,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "رحاب العتيبي ", en: "Rehab Alotaibi" },
    },
    {
      id: 3,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "رزان الحربي ", en: "Razan Alharbi" },
    },
    {
      id: 4,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: " فيء المطيري", en: "Fai Almutaiti" },
    },
    {
      id: 5,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: " منيرة الحربي", en: "Munirah Alharbi" },
    },
    {
      id: 6,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: " حور المبارك", en: "Hoor Almubarak" },
    },
    {
      id: 7,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "خواطر المطيري", en: "Khawatir Almotairi" },
    },
    {
      id: 8,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A3%D9%8A%D9%85%D9%86%20%D9%81%D8%A4%D8%A7%D8%AF.jpeg?raw=true",
      name: { ar: "أيمن فؤاد", en: "Ayman Fouad" },
    },
    {
      id: 9,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%8A%D8%A7%D8%B3%D8%B1%20%D8%A7%D9%84%D8%B3%D8%A8%D9%8A%D8%B9%D9%8A.jpg?raw=true",
      name: { ar: " ياسر السبيعي", en: "Yasser Alsebaie" },
    },
    {
      id: 10,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%85%D8%B5%D8%B7%D9%81%D9%89%20%D8%B9%D8%A8%D9%8A%D8%AF.png?raw=true",
      name: { ar: "مصطفى عبيد ", en: "Mostafa Obaid" },
    },
    {
      id: 11,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/sobhy%20Gaber.jpeg?raw=true",
      name: { ar: "صبحي جابر", en: "Sobhy Jaber" },
    },
    {
      id: 12,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%B3%D8%B9%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.jpg?raw=true",
      name: { ar: "سعد المطيري", en: "Saad Almotairi" },
    },
    {
      id: 13,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/ahmed%20amen.jpeg?raw=true",
      name: { ar: "أحمد أمين", en: "Ahmed Amen" },
    },

    {
      id: 14,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد عامر", en: "Mohamed Amer" },
    },
    {
      id: 15,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "حمدي عيسى", en: "Hamdy Eisa" },
    },
    {
      id: 16,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D9%84%D8%A7%D8%A1%20%D9%81%D9%83%D8%B1%D9%8A.jpeg?raw=true",
      name: { ar: "علاء فكري", en: "Alaa Fekry" },
    },

   
    {
      id: 17,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%85%D8%AC%D9%8A%D8%AF%20%D8%B5%D9%88%D8%B1%D8%A9%20%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg?raw=true",
      name: { ar: "محمد عبدالمجيد", en: "Mohamed Abdelmaged" },
    },
    {
      id: 18,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد عجور", en: "Mohamed Agour" },
    },
    {
      id: 19,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/mohamed%20Farhat.jpg?raw=true",
      name: { ar: "محمد فرحات", en: "Mohamed Farahat" },
    },
    {
      id: 20,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "أحمد داوود", en: "Ahmed Dawood" },
    },
    {
      id: 21,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "أحمد نعيم", en: "Ahmed Naiem" },
    },
    {
      id: 22,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "عبده أبوعامر", en: "Abdo Aboamer" },
    },
    {
      id: 23,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد صالح", en: "Mohamed Saleh" },
    },
    {
      id: 24,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد ابراهيم", en: "Mohamed Ebrahim" },
    },
    {
      id: 25,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%8A.jpg?raw=true",
      name: { ar: "محمد عبدالباري", en: "Mohamed Abdelbary" },
    },
    {
      id: 26,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "أشرف الدسوقي", en: "Ashraf Aldesoky" },
    },
    {
      id: 36,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%A7%D8%B3%D8%A7%D9%85%D8%A9%20%D9%87%D8%A7%D8%B4%D9%85.jpeg?raw=true",
      name: { ar: "أسامة هاشم", en: "Osama Hashem" },
    },
    
    {
      id: 28,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد الباتل", en: "Mohamed Al-Batel" },
    },
    {
      id: 29,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "محمد هاني", en: "Mohamed Hany" },
    },
    {
      id: 30,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%AB%D9%8A%D9%85%D9%8A.jpeg?raw=true",
      name: { ar: "محمد العصيمي", en: "Mohammed Alosaimi" },
    },

    {
      id: 31,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%86%D9%88%D8%A7%D9%81%20%D8%A7%D9%84%D9%85%D8%AA%D9%8A%D8%A8.jpeg?raw=true",
      name: { ar: "نواف المتيب", en: "Nawaf Almuteb" },
    },
    {
      id: 32,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/abdelelah%20altoriqi.JPG?raw=true",
      name: { ar: "عبدالإله الطريقي", en: "Abdulelah Alturiqi" },
    },
    {
      id: 33,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%AD%D8%B3%D9%8A%D9%86.jpeg?raw=true",
      name: { ar: "عبدالعزيز حسين", en: "Abdelaziz Hussein" },
    },
    {
      id: 34,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "هيثم هاشم", en: "Hitham Hashem" },
    },
    {
      id: 35,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "ريان العضيب", en: "Rayan Alodhayb" },
    },

    {
      id: 27,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "الهنوف عبدالعزيز", en: "Alhanouf Abdelaziz" },
    },

    {
      id: 37,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D8%AF%D9%8A.jpeg?raw=true",
      name: { ar: "عبدالعزيز الحمادي", en: "Abdelaziz Alhamady" },
    },
    {
      id: 38,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "عبدالعزيز الباتل", en: "Abdelaziz Al-Batel" },
    },
    {
      id: 39,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%83%D9%8A.jpeg?raw=true",
      name: { ar: "عبدالله المالكي", en: "Abdullah Almalky" },
    },
    {
      id: 40,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true",
      name: { ar: "ليلى العنزي", en: "Laila Alanzi" },
    },

    {
      id: 41,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86%20%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%D9%82.jpeg?raw=true",
      name: { ar: "سليمان الشايق", en: "Suliman Alshayeg" },
    },
    {
      id: 42,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%85.jpg?raw=true",
      name: { ar: "أحمد عبدالدايم", en: "Ahmed Abdeldaiem" },
    },
    {
      id: 43,
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D9%85%D8%B1%20%D9%86%D8%B5%D8%A7%D8%B1.jpeg?raw=true",
      name: { ar: "عمر نصار", en: "Omar Nasar" },
      job: { ar: "مساعد اداري ", en: "Administrative assistant" },
    },
  ];

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
      {/* {Loading ? <Loader /> : null} */}
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
                {Team.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group w-11/12 lg:w-1/4  md:w-1/3 3xl:w-1/5     md:p-3 p-3 overflow-hidden"
                    >
                     
                      <Link
                        to={`/team/${teamMember.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                          src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified3/certified.png?raw=true"
                          alt="certfied image"
                        />
                        <div className=" flex h-[230px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="service image"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div> */}
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-4 text-2xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember.name.ar}
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
                {Team.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group w-11/12 lg:w-1/4  md:w-1/3 3xl:w-1/5     md:p-3 p-3 overflow-hidden"
                    >
                     
                      <Link
                        to={`/team/${teamMember.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                          src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/Logos%20and%20Certified3/certified.png?raw=true"
                          alt="certfied image"
                        />
                        <div className=" flex h-[230px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="service image"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div> */}
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-4 text-xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember.name.en}
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
