import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";

export default function Services() {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceAr = [
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9.jpg?raw=true",
      title: "مراجعة القوائم المالية",
      description:
        " مراجعة القوائم المالية من قائمة المركز المالي وقائمة الدخل و التدفقات النقدية وحقوق الملكية ويتم ذلك وفقا للمعايير الدولية",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D8%B9%D9%85%D8%A7%D9%84%20%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9.jpg?raw=true",
      title: "القيام بالأعمال المحاسبية",
      description:
        " متابعة الدفاتر واعداد القوائم المالية الدورية وكذلك تقارير الأداء المالية",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%85%D8%A7%D9%84%D9%8A.webp",
      title: "التخطيط المالي و التحليل",
      description:
        "   وضع خطط مالية إستراتيجية للمستقبل وتحليل البيانات المالية المتاحة لتقييم الأداء المالي وتحديد نقاط القوة والضعف و فرص التحسين",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81.webp",
      title: "ادارة التكاليف",
      description:
        "خدمات ادارة التكاليف من اجل تحسين كفاءة استخدام الموارد وتقليل التكلفة بما في ذلك تحليل وتقييم التكاليف المختلفة وتوفير استراتيجيات لتحسين الأداء المالي",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A7%D9%84%D8%B6%D8%B1%D8%A7%D8%A6%D8%A8.jfif",
      title: "تخطيط الضرائب والإمتثال الضريبي",
      description:
        "خدمات استشارية في مجال الضرائب وتحديد الإستراتيجيات الضريبة الملائمة للشركات والأفراد وتقديم المشورة حول الإمتثال الضريبي",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%AA%D8%AF%D9%82%D9%8A%D9%82%20%D8%AF%D8%A7%D8%AE%D9%84%D9%8A.jpg?raw=true",
      title: "التدقيق الداخلي",
      description:
        "خدمات التدقيق الداخلي للتحقق من تطبيق السياسات والإجراءات المالية في الشركات والإمتثال للمعايير المحاسبية والقوانين المالية المعمول بها",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9.jpg?raw=true",
      title: "تطوير السياسات المالية ",
      description:
        "وضع السياسات المالية المناسبة وتطوير الإجراءات المحاسبية والمالية الفعالة بهدف تحسين الرقابة المالية وادارة المخاطر وتحقيق الكفاءة في العمليات المالية",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1.jfif",
      title: "التدريب والتطوير",
      description:
        "برامج تدريبية وتطويرية للشركات والموظفين لتعزيز المهارات المحاسبية والمالية وتطوير القدرات لتحسين جودة الأعمال",
    },
  ];
  const serviceEn = [
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9%20%D8%A7%D9%84%D9%82%D9%88%D8%A7%D8%A6%D9%85%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9.jpg?raw=true",
      title: "Audit of financial statements",
      description:
        "The audit of the financial statements from the statement of financial position and the statement of income, cash flows and equity is carried out in accordance with international standards",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D8%B9%D9%85%D8%A7%D9%84%20%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%8A%D8%A9.jpg?raw=true",
      title: "Doing accounting work",
      description:
        "Follow-up of books and preparation of periodic financial statements as well as financial performance reports",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AA%D8%AE%D8%B7%D9%8A%D8%B7%20%D9%85%D8%A7%D9%84%D9%8A.webp",
      title: "Financial planning and analysis",
      description:
        "Develop strategic financial plans for the future and analyze the available financial data to assess financial performance and identify strengths, weaknesses and opportunities for improvement",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D8%A7%D9%84%D9%8A%D9%81.webp",
      title: "Cost management",
      description:
        "Cost management services in order to improve the efficiency of resource use and reduce the cost, including the analysis and evaluation of various costs and the provision of strategies to improve financial performance",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A7%D9%84%D8%B6%D8%B1%D8%A7%D8%A6%D8%A8.jfif",
      title: "Tax planning and tax compliance",
      description:
        "Tax advisory services, identification of appropriate tax strategies for companies and individuals and advice on tax compliance",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%AA%D8%AF%D9%82%D9%8A%D9%82%20%D8%AF%D8%A7%D8%AE%D9%84%D9%8A.jpg?raw=true",
      title: "Internal audit",
      description:
        "Internal audit services to verify the application of financial policies and procedures in companies and compliance with accounting standards and applicable financial laws",
    },
    {
      image:
        "https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9.jpg?raw=true",
      title: "Development of financial policies",
      description:
        "Develop appropriate financial policies and develop effective accounting and financial procedures in order to improve financial control, risk management and efficiency in financial operations",
    },
    {
      image:
        "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%AA%D8%AF%D8%B1%D9%8A%D8%A8%20%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1.jfif",
      title: "Training and development",
      description:
        "Training and development programs for companies and employees to enhance accounting and financial skills and develop capabilities to improve business quality",
    },
  ];

  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="bg-blue-100/50">
            <div
              className={`relative   w-full lg:h-[530px] h-[300px] md:h-[350px]  mt-16 flex justify-center items-center`}
            >
              <img
                // https://afexpert.es/wp-content/uploads/2023/11/ciberseguridad_empresas_buensa_practicas.jpg
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/service-bg.jpg?raw=true"
                className="w-full h-full object-fill z-10"
                alt="Service image "
              />
              {/* Gradient blue overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-l from-blue-800/60 to-gray-700/50 opacity-80 z-10"></div> */}
              <div className="absolute inset-0 bg-gradient-to-l from-gray-300/40  to-blue-800/30 opacity-70 z-10"></div>
              <div className="absolute top-4 end-4 hidden md:flex bg-white bg-opacity-30  border border-blue-600  rounded-full items-center justify-center z-20">
                <h3 className="text-green-950 text-sm font-semibold mx-1">
                  ALBatel & Co
                </h3>
                <img
                  src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
                  className="w-[50px] mt-1"
                  alt="logo image "
                />
              </div>
              <div className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-30 border border-blue-600  rounded-full items-center cursor-pointer  justify-center z-30">
                <h3 className="text-blue-700 text-sm font-semibold mx-1">
                  info@albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-80  hidden end-4 md:flex  bg-white bg-opacity-30 rounded-full border border-blue-600 items-center justify-center cursor-pointer z-30">
                <h3 className="text-blue-700 text-sm font-semibold mx-1">
                  www.albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
                <h1 className="text-blue-950 text-center text-2xl lg:text-4xl mb-4 font-bold">
                  تقدم شركة باتل عبدالله الباتل وشركاؤه
                </h1>
                <h2 className="text-blue-950 text-center text-xl lg:text-3xl mb-20 font-semibold">
                  العديد من الخدمات
                </h2>
                <button onClick={handleScroll}>
                  <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-20 py-3 border-blue-800 border-2 text-center z-20 text-blue-900 text-md font-bold">
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
                {serviceAr.map((service, index) => {
                  return (
                    <div key={index} className="lg:w-1/3 md:w-1/2 3xl:w-1/4  px-3  overflow-hidden">
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex h-[250px] p-4 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-1 text-2xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  dark:text-white">
                            {service.title}
                          </h5>
                          <p className="mb-3 font-normal text-center text-lg my-3 pt-4 text-gray-900 dark:text-gray-400">
                            {service.description}
                          </p>
                        </div>
                        <div className=" flex h-[270px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${service.image} `}
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
                لدينا التزام كامل بالأخلاق المهنية في جميع جوانب عملنا، ونضمن
                الامتثال للمعايير الدولية الخاصة بالمراجعة والمحاسبة وما يتطلبه
                عملنا، إنا مواكبون للتغيرات والتطورات التي تحدث في المجال مما
                يجعلنا على دراية بالتغيرات القانونية والتشريعات الجديدة.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-100/50">
            <div
              className={`relative   w-full lg:h-[530px] h-[300px] md:h-[350px]  mt-16 flex justify-center items-center`}
            >
              <img
                // https://afexpert.es/wp-content/uploads/2023/11/ciberseguridad_empresas_buensa_practicas.jpg
                src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/service-bg.jpg?raw=true"
                className="w-full h-full object-fill z-10"
                alt="Service image "
              />
              {/* Gradient blue overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-l from-blue-800/60 to-gray-700/50 opacity-80 z-10"></div> */}
              <div className="absolute inset-0 bg-gradient-to-l from-gray-300/40  to-blue-800/30 opacity-70 z-10"></div>
              <div className="absolute top-4 end-4 hidden md:flex bg-white bg-opacity-30  border border-blue-600  rounded-full items-center justify-center z-20">
                <h3 className="text-green-950 text-sm font-semibold mx-1">
                  ALBatel & Co
                </h3>
                <img
                  src="https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true"
                  className="w-[50px] mt-1"
                  alt="logo image "
                />
              </div>
              <div className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-30 border border-blue-600  rounded-full items-center cursor-pointer  justify-center z-30">
                <h3 className="text-blue-700 text-sm font-semibold mx-1">
                  info@albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-80  hidden end-4 md:flex  bg-white bg-opacity-30 rounded-full border border-blue-600 items-center justify-center cursor-pointer z-30">
                <h3 className="text-blue-700 text-sm font-semibold mx-1">
                  www.albatelcpa.com
                </h3>
              </div>
              <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
                <h1 className="text-blue-950 text-center text-2xl lg:text-4xl mb-4 font-bold">
                  Batel Abdullah Al Batel & Partners provides
                </h1>
                <h2 className="text-blue-950 text-center text-xl lg:text-3xl mb-20 font-semibold">
                  many services
                </h2>
                <button onClick={handleScroll}>
                  <h3 className="animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-20 py-3 border-blue-800 border-2 text-center z-20 text-blue-900 text-md font-bold">
                    more about our services
                    <span className="mx-2">
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                  </h3>
                </button>
              </div>
            </div>

            <div id="desc1" className="py-10 container ">
              <div className="w-full flex flex-wrap justify-center">
                {serviceEn.map((service, index) => {
                  return (
                    <div key={index} className="lg:w-1/3 md:w-1/2 3xl:w-1/4 px-3  overflow-hidden">
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex h-[250px] p-4 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-1 text-2xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  dark:text-white">
                            {service.title}
                          </h5>
                          <p className="mb-3 font-normal text-center text-lg my-3 pt-4 text-gray-900 dark:text-gray-400">
                            {service.description}
                          </p>
                        </div>
                        <div className=" flex h-[270px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${service.image} `}
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
                We adhere to professional ethics in all aspects of our work.
                Additionally, we ensure compliance with international standards
                in auditing, accounting, and other relevant areas of our work.
                We stay updated with changes and developments in the field,
                enabling us to be aware of legal changes and new regulations.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
