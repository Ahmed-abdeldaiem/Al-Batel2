import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { ServiceContext } from "../../Context/ServiceContext";
import Loader from "../Loader/Loader";

export default function Services() {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  const { getServices } = useContext(ServiceContext);
  const [services, setServices] = useState([]);
  const [Loading, setLoading] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  async function getServicessData() {
    setLoading(true);
    let data = await getServices();

    setServices(data);

    setLoading(false);
  }

  useEffect(() => {
    getServicessData();
  }, []);

  return (
    <>
      {Loading ? <Loader /> : null}
      {dir == "rtl" ? (
        <>
          <div className="bg-blue-100/50">
            <div
          
              className={`relative   w-full  lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
            >
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/service-bg.jpg"
                className="w-full h-full object-fill z-10"
                alt="Service image "
              />

              <div className="absolute inset-0 bg-gradient-to-l from-blue-50/70  to-blue-800/50 opacity-70 z-10"></div>
              <div className="absolute top-4 end-4 hidden md:flex bg-white bg-opacity-50  border border-blue-900  rounded-full items-center justify-center z-20">
                <h3 className="text-green-950 text-sm  font-semibold mx-1">
                  ALBatel & Co
                </h3>
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home/logo.png"
                  className="w-[50px] mt-1"
                  alt="logo image "
                />
              </div>

              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
                className="w-[150px] mt-1 absolute bottom-4 start-4  hidden md:flex bg-black bg-opacity-50 rounded-3xl p-2 items-center justify-center z-20"
                alt="logo image "
              />

              <div className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-60 border border-blue-900  rounded-full items-center cursor-pointer  justify-center z-30">
                <h3 className="text-blue-900 text-sm font-semibold mx-1">
                  info@albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-96  hidden end-4 lg:flex  bg-white bg-opacity-60 rounded-full border border-blue-900 items-center justify-center cursor-pointer z-30">
                <h3 className="text-blue-900 text-sm font-semibold mx-1">
                  www.albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
                <h1 className="text-blue-950 text-center text-2xl lg:text-5xl mb-4 font-bold">
                  تقدم شركة باتل عبدالله الباتل وشركاؤه
                </h1>
                <h2 className="text-blue-950 text-center text-xl lg:text-4xl mb-20 font-bold">
                  العديد من الخدمات
                </h2>
                <button onClick={handleScroll}>
                  <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-40 py-3 border-blue-950 border-2 text-center z-20 text-blue-900 text-md font-bold">
                    تعرف على خدماتنا
                    <span className="mx-2">
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                  </h3>
                </button>
              </div>
            </div>

            <div id="desc1" className="py-10 container ">
              <div className="w-full flex flex-wrap justify-center">
                {services?.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="lg:w-1/3 md:w-1/2 3xl:w-1/4  px-3  overflow-hidden"
                    >
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex h-auto min-h-[300px] p-4 flex-col overflow-hidden items-center  text-center">
                          <h5 className="mb-1 text-2xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight ">
                            {service?.title?.ar}
                          </h5>
                          <p className="mb-3 font-normal text-center text-lg my-3 pt-4 text-gray-900 ">
                            {service?.description?.ar}
                          </p>
                        </div>
                        <div className=" flex h-[270px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${service?.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="service image"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-blue-900 text-xl p-4 leading-10 font-semibold">
                نقدم خدمات استشارية مهنية مخصصة لتمكن العملاء من اتخاذ قرارات
                مالية مدروسة وفعالة ونسعى لتوفير حلول شاملة لاحتياجات الشركات
                والمؤسسات والأفراد في المجالات المالية والمحاسبية والضريبية في
                مختلف القطاعات الاقتصادية.
              </p>
              <p className="text-center text-green-900 text-xl p-4 leading-10 font-semibold ">
                نعي حجم المسؤولية ونؤمن بأن العميل هو العنصر الأساسي لنجاحنا لذا
                نسعى جاهدين لتقديم خدمات تحقق الأهداف المالية والمهنية، نحن
                ملتزمون التزامًا كاملًا على سرعة الاستجابة وسرية المعلومات
                المقدمة لنا، ونحرص من خلال تقديم الاستشارة والتوجيه للعميل على
                الشفافية والاحترافية بكل جودة وتميز.
              </p>
              <p className="text-center text-blue-900 text-xl p-4 leading-10 font-semibold ">
                نلتزم بأعلى معايير الأخلاقيات المهنية في جميع جوانب عملنا، ونضمن
                الامتثال للمعايير الدولية للمراجعة والمحاسبة، كما نواكب التغيرات
                والتطورات في المجال مما يجعلنا على دراية كاملة بالتشريعات
                القانونية والتطورات الجديدة.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-100/50">
            <div
            
              className={`relative   w-full lg:h-[600px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
            >
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/service-bg.jpg"
                className="w-full h-full object-fill z-10"
                alt="Service image "
              />

              <div className="absolute inset-0 bg-gradient-to-l from-blue-50/70  to-blue-800/50 opacity-70 z-10"></div>
              <div className="absolute top-4 end-4 hidden md:flex bg-white bg-opacity-50  border border-blue-900  rounded-full items-center justify-center z-20">
                <h3 className="text-green-950 text-sm  font-semibold mx-1">
                  ALBatel & Co
                </h3>
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home/logo.png"
                  className="w-[50px] mt-1"
                  alt="logo image "
                />
              </div>

              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
                className="w-[150px] mt-1 absolute bottom-4 end-4  hidden md:flex bg-black bg-opacity-50 rounded-3xl p-2 items-center justify-center z-20"
                alt="logo image "
              />

              <div className="absolute top-3/4 hidden start-4 md:flex bg-white bg-opacity-60 border border-blue-900  rounded-full items-center cursor-pointer  justify-center z-30">
                <h3 className="text-blue-900 text-sm font-semibold mx-1">
                  info@albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-96  hidden start-4 lg:flex  bg-white bg-opacity-60 rounded-full border border-blue-900 items-center justify-center cursor-pointer z-30">
                <h3 className="text-blue-900 text-sm font-semibold mx-1">
                  www.albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
                <h1 className="text-blue-950 text-center text-2xl lg:text-5xl mb-4 font-bold">
                  Batel Abdullah Al Batel & Partners provides
                </h1>
                <h2 className="text-blue-950 text-center text-xl lg:text-4xl mb-20 font-bold">
                  many services
                </h2>
                <button onClick={handleScroll}>
                  <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-40 py-3 border-blue-950 border-2 text-center z-20 text-blue-900 text-md font-bold">
                    More About Our Service
                    <span className="mx-2">
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                  </h3>
                </button>
              </div>
            </div>

            <div id="desc1" className="py-10 container ">
              <div className="w-full flex flex-wrap justify-center">
                {services?.map((service, index) => {
                  return (
                    <div
                      key={index}
                      className="lg:w-1/3 md:w-1/2 3xl:w-1/4  px-3  overflow-hidden"
                    >
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                      
                        <div className=" flex   h-auto min-h-[300px]  p-4 flex-col overflow-hidden items-center  text-center">
                          <h5 className="mb-1 text-2xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  ">
                            {service?.title?.en}
                          </h5>
                          <p className="mb-3 font-normal text-center text-lg my-3 pt-4 text-gray-900 ">
                            {service?.description?.en}
                          </p>
                        </div>
                        <div className=" flex h-[270px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${service?.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="service image"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-blue-900 text-xl p-4 leading-10 font-semibold">
                We provide specialized professional consulting services to
                enable clients to make informed and effective financial
                decisions. We strive to provide comprehensive solutions to the
                financial, accounting, and tax needs of companies,
                organizations, and individuals across various economic sectors.
              </p>
              <p className="text-center text-green-900 text-xl p-4 leading-10 font-semibold ">
                We acknowledge the level of responsibility and firmly believe
                that the client is the key element to our success. Therefore, we
                strive to provide services that achieve financial and
                professional goals. We are fully committed to responsiveness and
                confidentiality, ensuring transparency and professionalism in
                every aspect of our consultation and guidance.
              </p>
              <p className="text-center text-blue-900 text-xl p-4 leading-10 font-semibold ">
                We adhere to the highest standards of professional ethics in all
                aspects of our work, ensuring compliance with international
                auditing and accounting standards, and keeping abreast of
                changes and developments in the field, keeping us fully aware of
                legal legislation and new developments.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
