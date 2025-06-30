import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Vision.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Vision() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="container m-auto my-10 " data-aos="fade-up">
            <h2 className="text-green-600 text-3xl 4k:text-4xl text-center text-shadow-green  my-3 font-semibold" data-aos="fade-up">
              رؤية الشركة
            </h2>
            <hr className="border-blue-700 border-t-2 w-40 mx-auto" data-aos="fade-up" />
            <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto"data-aos="fade-up" />

            <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner flex px-1 lg:px-4 flex-col justify-center items-center lg:justify-start lg:items-start">
                  <h2 className="text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center mx-3 text-shadow-green " data-aos="fade-up">
                    رؤيتنا
                  </h2>

                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                      الاستمرار في كوننا شركة رائدة في تقديم خدمات المحاسبة
                      والمراجعة والاستشارات المالية والإدارية ونموذجا متميزا
                      للمهنية
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                    أن نسعى جاهدين بخبراتنا ومعرفتنا العميقة في مجالنا لخدمة
                    العميل                    </span>
                  </h3>
                 
                 
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                      الالتزام بجعل أخلاقيات المهنة أساساً لنا في جميع جوانب
                      عملنا من خلال تقديم خدماتنا بكل أمانة وشفافية وصدق
                    </span>
                  </h3>
                </div>
              </div>

              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner flex justify-center  items-center">
                  <img
                    className="rounded-full border-2 border-green-700 shadow-md transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/logo-1.png"
                    alt="mohamed ben salman image"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container m-auto my-10 " data-aos="fade-up">
            <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold text-shadow-green">
            Company Vision
            </h2>
            <hr className="border-blue-700 border-t-2 w-40 mx-auto" data-aos="fade-up" />
            <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" data-aos="fade-up" />

            <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner px-1 lg:px-4 flex flex-col justify-center items-center lg:justify-start lg:items-start" >
                  <h2 className="text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center text-shadow-green mx-3" data-aos="fade-up">
                    Our Vision
                  </h2>

                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    To continue to be a leading company in providing accounting, auditing, financial and administrative consulting services and a distinguished model of professionalism.
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>                    To strive with our deep experience and knowledge in our field to serve the client
</span>
                  </h3>
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" data-aos="fade-up">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    Commitment to making professional ethics a foundation for us in all aspects of our work by providing our services with complete honesty, transparency and sincerity.
                    </span>
                  </h3>
                </div>
              </div>

              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner flex justify-center  items-center">
                  <img
                    className="rounded-full border-2 border-green-700 shadow-md transition-all duration-700 hover:scale-105 hover:border-blue-700 hover:shadow-green-700 shadow-blue-300 w-[350px] h-[350px] 4k:w-[450px] 4k:h-[450px] object-fit"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/logo-1.png"
                    alt="mohamed ben salman image"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
