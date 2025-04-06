import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./Footer.module.css";

export default function Footer() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  return (
    <>
      {dir == "rtl" ? (
        <>
          <footer className="relative bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/footer1.jpg?raw=true')] bg-no-repeat bg-center bg-cover shadow z-30 ">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl mx-auto p-4 md:pt-8 md:pb-4  ">
              {/* الباتل وتواصل معنا  */}
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link
                  to=""
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/logo-1.png?raw=true"
                    className="h-8 cursor-pointer "
                    alt="elbatel Logo"
                  />
                  <span className="self-center text-2xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap ">
                    الباتل
                  </span>
                </Link>
              </div>

              <div className="w-full flex flex-col justify-center items-center md:justify-around md:flex-row ">
                {/* important links */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-center md:justify-start md:items-start items-center p-3">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      روابط مهمة
                    </h3>
                    <Link
                      to="contact"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all "
                    >
                      تواصل
                    </Link>
                    <Link
                      to="RFP"
                      className="block text-blue-100 text-lg   px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all "
                    >
                      طلب عرض سعر
                    </Link>
                    <Link
                      to="jobs"
                      className="block text-blue-100 text-lg   px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all "
                    >
                      وظائف
                    </Link>
                    <Link
                      to="services"
                      className="block text-blue-100 text-lg   px-4 text-nowrap pt-2  hover:text-blue-300 duration-500 transition-all "
                    >
                      خدماتنا
                    </Link>
                  </div>
                </div>

                {/* media */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col p-3 justify-center items-center">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      تابعنا على
                    </h3>
                    <div className="flex gap-4 ">
                      {/* linked in */}
                      <a
                        href="https://www.linkedin.com/company/albatel-cpa/"
                        className="z-20 my-3   "
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-blue-500 transition-all duration-500 rounded-full p-2 ">
                          <i className="fa-brands  fa-linkedin-in cursor-pointer px-1 text-lg text-green-50 hover:text-blue-500 transition-all duration-500"></i>
                        </span>
                      </a>
                      {/* inestgram */}
                      <a
                        href="https://www.instagram.com/albatelksa/"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-red-300 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-instagram cursor-pointer px-1 text-lg text-green-50 hover:text-red-300 transition-all duration-500"></i>
                        </span>
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/albatel_cpa"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-gray-500 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-twitter cursor-pointer px-1 text-lg text-gray-50 hover:text-gray-500 transition-all duration-500"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* contact */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-center items-center p-3">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      تواصل معنا
                    </h3>

                    {/* email */}
                    <a
                      href="mailto:albatelcpa@albatelcpa.com?subject=I Contact From Your Website&body=Hello%20team,"
                      className="text-green-600 text-lg z-20 my-3 cursor-pointer hover:text-blue-300 duration-500 transition-all"
                    >
                      <i className="fa-solid fa-envelope px-1 hover:text-blue-300 duration-500 transition-all"></i>
                      <span className="text-blue-100 hover:text-blue-300 duration-500 transition-all">
                        albatelcpa@albatelcpa.com
                      </span>
                    </a>

                    {/* الهاتف */}
                    <span className="text-green-600 text-lg z-20 my-3 cursor-pointer  hover:text-blue-300 duration-500 transition-all">
                      <i className="fa-solid fa-square-phone px-1  hover:text-blue-300 duration-500 transition-all "></i>
                      <span className="text-blue-100  hover:text-blue-300 duration-500 transition-all ">
                        966550554262+{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-green-500 sm:mx-auto  lg:my-3" />
              <div className="text-center">
                <span className="block text-sm text-gray-400 sm:text-center z-20 ">
                  © 2025 All Rights Reserved @ Al-Batel
                </span>

                <span className="block text-sm z-40 cursor-pointer text-gray-400 sm:text-center ">
                <Link to="/team/42" className="px-1" target="_blank">
                    <img
                      src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84_%D9%84%D9%88%D8%AC%D9%882-removebg-preview.png?raw=true"
                      className="w-5 inline-block hover:rotate-[180deg] transition-all duration-700"
                      alt="Elbatel Logo"
                    />
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                    className=" px-1"
                    target={"_blank"}
                  >
                    <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                    className="px-2"
                    target="_blank"
                  >
                    <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                  </a>
                 
                  by Ahmed Abdeldaiem
                </span>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <footer className="relative bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/footer1.jpg?raw=true')] bg-no-repeat bg-center bg-cover shadow z-30 ">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl mx-auto p-4 md:pt-8 md:pb-4 ">
              {/* الباتل وتواصل معنا  */}
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link
                  to=""
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home%20images/logo-1.png?raw=true"
                    className="h-8 cursor-pointer "
                    alt="elbatel Logo"
                  />
                  <span className="self-center text-2xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap ">
                    Al-Batel
                  </span>
                </Link>
              </div>

              <div className="w-full flex flex-col justify-center items-center  md:justify-between md:flex-row ">
                {/* important links */}
                <div className="w-full md:w-1/3 ">
                  <div className="flex flex-col justify-center md:justify-start md:items-start items-center p-3">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      Important Links
                    </h3>
                    <Link
                      to="contact"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all "
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                    <Link
                      to="RFP"
                      className="block text-blue-100 text-lg  tracking-widest2 px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all "
                    >
                      {" "}
                      RFP{" "}
                    </Link>
                    <Link
                      to="jobs"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all "
                    >
                      Jobs
                    </Link>
                    <Link
                      to="services"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all "
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </div>
                </div>

                {/* media */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-center items-center p-3">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      Follow Us
                    </h3>
                    <div className="flex gap-4">
                      {/* linked in */}
                      <a
                        href="https://www.linkedin.com/company/albatel-cpa/"
                        className="z-20 my-3 "
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-blue-500 transition-all duration-500 rounded-full p-2 ">
                          <i className="fa-brands  fa-linkedin-in cursor-pointer px-1 text-lg text-green-50 hover:text-blue-500 transition-all duration-500"></i>
                        </span>
                      </a>
                      {/* inestgram */}
                      <a
                        href="https://www.instagram.com/albatelksa/"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-red-300 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-instagram cursor-pointer px-1 text-lg text-green-50 hover:text-red-300 transition-all duration-500"></i>
                        </span>
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/albatel_cpa"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                        <span className=" border-green-600 border hover:border-gray-500 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-twitter cursor-pointer px-1 text-lg text-gray-50 hover:text-gray-500 transition-all duration-500"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* contact */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-center items-center p-3">
                    <h3 className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl">
                      Contact On
                    </h3>

                    {/* email */}
                    <a
                      href="mailto:albatelcpa@albatelcpa.com?subject=I Contact From Your Website &body=Hello%20team,"
                      className="text-green-600 text-lg z-20 my-3 cursor-pointer hover:text-blue-300 duration-500 transition-all"
                    >
                      <i className="fa-solid fa-envelope px-1 hover:text-blue-300 duration-500 transition-all"></i>
                      <span className="text-blue-100 hover:text-blue-300 duration-500 transition-all">
                        albatelcpa@albatelcpa.com
                      </span>
                    </a>
                    {/* الهاتف */}
                    <span className="text-green-600 text-lg z-20 my-3 cursor-pointer  hover:text-blue-300 duration-500 transition-all">
                      <i className="fa-solid fa-square-phone px-1  hover:text-blue-300 duration-500 transition-all "></i>
                      <span className="text-blue-100  hover:text-blue-300 duration-500 transition-all ">
                        966550554262+{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <hr className="my-4 border-green-500 sm:mx-auto  lg:my-3" />
                <span className="block text-sm text-gray-400 sm:text-center z-20 ">
                  © 2025 All Rights Reserved @ Al-Batel
                </span>

                <span className="block text-sm z-40 cursor-pointer text-gray-400 sm:text-center ">
                  by Ahmed Abdeldaiem
                  <a
                    href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                    className=" px-2"
                    target={"_blank"}
                  >
                    <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                    className="px-2"
                    target="_blank"
                  >
                    <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                  </a>
                  <Link to="/team/42" className="px-1" target="_blank">
                    <img
                      src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84_%D9%84%D9%88%D8%AC%D9%882-removebg-preview.png?raw=true"
                      className="w-5 inline-block hover:rotate-[180deg] transition-all duration-700"
                      alt="Elbatel Logo"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
