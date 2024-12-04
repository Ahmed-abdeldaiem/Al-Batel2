import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Vision.module.css";

export default function Vision() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="container my-10 ">
            <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
              رؤية الشركة
            </h2>
            <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
            <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

            <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner ps-16 flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <h2 className="text-green-600 text-2xl my-4 font-semibold text-center mx-3">
                    رؤيتنا
                  </h2>

                  <h3 className="text-gray-800 text-lg flex  my-4">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                      {" "}
                      الاستمرار في كوننا شركة رائدة في تقديم خدمات المحاسبة
                      والمراجعة والاستشارات المالية والادارية ونموذجا متميزا
                      للمهنية
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg   my-4">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    أن نسعى جاهدين بخبراتنا ومعرفتنا العميقة في مجالنا لخدمة
                    العميل
                  </h3>
                  <h3 className="text-gray-800 text-lg flex  my-4">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                      الالتزام بجعل اخلاقيات المهنة اساسا لنا في جميع جوانب
                      عملنا من خلال تقديم خدماتنا بكل امانة وشفافية وصدق
                    </span>
                  </h3>
                </div>
              </div>

              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner flex justify-center  items-center">
                  <img
                    className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
                    alt="mohamed ben salman image"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container my-10 ">
            <h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
            Company Vision
            </h2>
            <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
            <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />

            <div className="bg-white rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
              <div className=" w-full lg:w-1/2 py-8">
                <div className="inner ps-16 flex flex-col justify-center items-center lg:justify-start lg:items-start">
                  <h2 className="text-green-600 text-2xl my-4 font-semibold text-center mx-3">
                    Our Vision
                  </h2>

                  <h3 className="text-gray-800 text-lg flex  my-4">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    To continue to be a leading company in providing accounting, auditing, financial and administrative consulting services and a distinguished model of professionalism.
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg flex  my-4">
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>                    To strive with our deep experience and knowledge in our field to serve the client
</span>
                  </h3>
                  <h3 className="text-gray-800 text-lg flex  my-4">
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
                    className="rounded-full border-2 border-green-600 shadow-lg transition-all duration-700 hover:scale-105 hover:border-blue-500 hover:shadow-green-500 shadow-blue-300 w-[350px] h-[350px] object-fit"
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
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
