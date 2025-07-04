import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const branches = [
    {
      id: 1,
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
    },
    {
      id: 2,
      name: {
        ar: "جدةالأول",
        en: "Jeddah 1",
      },
    },
    {
      id: 9,
      name: {
        ar: "جدة الثاني",
        en: "Jeddah 2",
      },
    },
    {
      id: 3,
      name: {
        ar: "المدينة",
        en: "Madinah",
      },
    },
    {
      id: 4,
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
    },
    ,
    {
      id: 5,
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
    },
    {
      id: 6,
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
    },
    {
      id: 7,
      name: {
        ar: "جازان",
        en: "Jazan",
      },
    },
    {
      id: 8,
      name: {
        ar: "القصيم",
        en: "Al-Qassim",
      },
    },
  ];
  const branches2 = [
    {
      name: {
        ar: "البحرين",
        en: "Bahrain",
      },
    },
    {
      name: {
        ar: "الإمارات",
        en: "The UAE",
      },
    },
    {
      name: {
        ar: "عمان",
        en: "Oman",
      },
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {dir == "rtl" ? (
        <>
          {/* About Us Header */}
          <div
            className={`relative overflow-hidden  w-full lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[370px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D9%86%20%D9%86%D8%AD%D9%864.jpeg"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div>
            <div
              className="absolute top-4 end-4 px-2 border border-green-950  hidden md:flex bg-white bg-opacity-20 rounded-full items-center justify-center z-20"
              data-aos="fade-right"
            >
              <h3 className="text-green-950   text-sm font-semibold mx-1 text-shadow-md">
                ALBatel & Co
              </h3>
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home/logo.png"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>

            <img
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
              className="w-[150px] mt-1 absolute bottom-4 start-4  hidden md:flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
              alt="logo image "
            />

            <div
              data-aos="fade-right"
              className="absolute top-3/4 hidden end-4 px-1 md:flex bg-white bg-opacity-60 border border-green-950  rounded-full items-center cursor-pointer  justify-center z-30"
            >
              <h3 className="text-gray-900 text-sm font-semibold mx-1 text-shadow-md">
                info@albatelcpa.com
              </h3>
            </div>
            <div
              data-aos="fade-right"
              className="absolute top-96  hidden end-4 lg:flex bg-white bg-opacity-60 rounded-full border border-green-950 items-center justify-center cursor-pointer z-30"
            >
              <h3 className="text-gray-900  text-sm font-semibold mx-1 text-shadow-md px-1">
                www.albatelcpa.com
              </h3>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1
                data-aos="fade-up"
                className="text-white text-center text-xl lg:text-5xl 3xl:text-6xl mb-4 font-semibold text-shadow-xl"
              >
                شركة باتل عبدالله الباتل وشركاؤه
              </h1>
              <h2
                data-aos="fade-up"
                className="text-white text-center text-lg lg:text-4xl mb-20 font-semibold text-shadow-xl"
              >
                للاستشارات المهنية
              </h2>
              <button data-aos="fade-up" onClick={handleScroll}>
                <h3 className="text-shadow-md animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-40 py-3 border-green-950 border-2 text-center z-20 text-green-950 text-md font-bold">
                  تعرف علينا
                  <span className="mx-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </h3>
              </button>
            </div>
          </div>

          <div id="desc1" className="container m-auto my-16">
            {/* company history */}
            <div
              className=" w-full  flex  flex-col justify-start items-center overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center  p-5">
                <h3
                  data-aos="fade-up"
                  className="text-center font-semibold text-green-700 my-3 text-2xl 4k:text-5xl text-shadow-green"
                >
                  تاريخ الشركة
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-justify text-xl 4k:text-3xl py-2 m-2 flex font-semibold"
                >
                  <i className="fa-solid fa-calendar-days text-green-600 text-xl m-2 text-justify"></i>
                  تأسست شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                  بموجب ترخيص الهيئة السعودية للمراجعين والمحاسبين بمزاولة مهنة
                  المحاسبة والمراجعة منذ 1427/11/08هـ الموافق 2006/11/29مـ
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-justify text-xl 4k:text-3xl m-2 py-5 flex font-semibold"
                >
                  <i className="fa-solid fa-id-card  text-green-600 text-xl m-2 text-justify"></i>
                  الشركة حاصلة على تراخيص لتقديم خدمات مراجعة الحسابات وتدقيقها،
                  والاستشارات المالية، وتقديم خدمات المحاسبة، والاستشارات
                  الإدارية، وإعداد كشوف الذمة المالية للضرائب، والاستشارات
                  المحاسبية ووضع السياسات والإجراءات، والاستشارات في مجال الزكاة
                  وضريبة الدخل، وخدمات ضريبة القيمة المضافة.
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="w-full lg:w-1/2 flex justify-center items-center "
              >
                <img
                  className=" w-full"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A8%D8%A7%D8%AA%D9%84%20%D9%84%D9%88%D8%AC%D9%88.jpg"
                  alt="history of company image"
                />
              </div>
            </div>

            {/* company location */}
            <div
              className=" w-full flex flex-col overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl my-8 rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-1/2 flex    flex-col   p-5">
                <h3
                  data-aos="fade-up"
                  className="text-shadow-green text-center font-semibold text-green-700 my-3 text-2xl 4k:text-5xl"
                >
                  مقر الشركة
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl py-2 m-2 flex font-semibold"
                >
                  <i className="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  الرياض هي نقطة البداية والفرع الرئيسي للشركة
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl py-2 m-2 my-4 flex font-semibold"
                >
                  <i className="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 مبنى السمو، الطريق الدائرى الشرقى، حى الربوة، ص ب 28565
                  الرمز البريدى 11447
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl m-2 py-5 flex font-semibold"
                >
                  <i className="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>
                  بالإضافة إلى العديد من الفروع داخل وخارج المملكة
                </p>
              </div>

              <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center font-semibold p-6"
          >
            فروعنا داخل المملكة العربية السعودية
          </h2>
          {/* branches */}
          <div className=" w-full flex bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch, index) => {
              return (
                <Link
                  data-aos="fade-up"
                  to={`/branch/${branch.id}`}
                  key={index}
                  className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500  hover:shadow-blue-400 shadow-sm rounded-full p-5"
                >
                  {/* <div className="p-4"> */}
                  <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl text-shadow-xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                  <p className="text-2xl text-shadow-green hover:text-shadow-blue text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                    {branch.name.ar}
                  </p>
                </Link>
              );
            })}
          </div>
          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center mt-14 font-semibold p-6"
          >
            فروعنا خارج المملكة العربية السعودية
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch, index) => {
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5"
                >
                  {/* <div className="p-4"> */}
                  <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                  <p className="text-2xl text-green-800 text-shadow-green hover:text-shadow-blue group-hover:text-blue-700 transition-all duration-700 font-semibold">
                    {branch.name.ar}
                  </p>
                  {/* </div> */}
                </div>
              );
            })}
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center font-semibold mt-20 p-6"
          >
            الهيكل التنظيمي والموظفين
          </h2>
          {/* الهيكل التنظيمي 1 */}
          <div data-aos="fade-up" className="container m-auto mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div data-aos="fade-up" className="w-full  lg:w-1/2   p-3">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    data-aos="fade-up"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team-about.avif"
                    className="w-[250px] h-[250px] 3xl:w-[300px] 3xl:h-[300px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div
                    data-aos="fade-up"
                    className="w-full flex flex-col justify-start"
                  >
                    <p className="text-blue-950 flex text-shadow-sm  items-center font-semibold text-xl 4k:text-3xl text-center leading-10 p-10 my-4">
                      أكثر من ثمانين كادر مؤهلين علميًا وأصحاب خبرة واسعة في
                      جميع الجوانب المالية والإدارية والقانونية، واستطاعت الشركة
                      من خلالهم تقديم خدماتها المهنية لآلاف العملاء داخل المملكة
                      وخارجها، محققة إنجازات تعكس مستوى المهنية والجودة التي
                      تميزها.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="w-full  lg:w-1/2   p-3 ">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    data-aos="fade-up"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team2-about.jpg"
                    className="w-[250px] h-[250px] 3xl:w-[300px] 3xl:h-[300px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div
                    data-aos="fade-up"
                    className="w-full flex flex-col justify-start"
                  >
                    <p className="text-blue-950 text-shadow-sm flex items-center text-center font-semibold text-lg 4k:text-3xl leading-10 p-10 my-4">
                      فريق كامل من الموظفات للعمل في الأقسام النسائية أو المواقع
                      التي تتطلب ذلك، وتتنوع مؤهلاتهن في المحاسبة وعمليات
                      المراجعة الخارجية والداخلية ولديهن خبرة واسعة في جميع
                      الجوانب المالية والمحاسبية وكذا الأعمال الإدارية والحوكمة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* الهيكل التنظيمي 2 */}
          <div className="bg-white">
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                تميزت شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                بالخبرة الواسعة في مجالات مراجعة الحسابات وتدقيقها، والاستشارات
                المالية، وتقديم خدمات المحاسبة، والاستشارات الإدارية، وإعداد
                كشوف الذمة المالية للضرائب، والاستشارات المحاسبية ووضع السياسات
                والإجراءات، والاستشارات في مجال الزكاة وضريبة الدخل، وخدمات
                ضريبة القيمة المضافة
              </span>
            </p>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                وانطلاقا من رؤية المملكة 2030 ورهانها المستمر على الشباب السعودي
                الواعد باعتبارهم من أهم وأكبر الفئات الأساسية فيها، لدى الشركة
                العديد من الشركاء والموظفين السعوديين بنسب تتجاوز تلك المحددة من
                قبل وزارة الموارد البشرية محققة بذلك نسب سعودة تضع الشركة في
                النطاق البلاتيني (معدل التوطين 56 % ومستوى النطاقات أخضر مرتفع).
                كما تحرص الشركة على توطين الوظائف وجذب المزيد من الشركاء
                والكفاءات من الموظفين السعوديين وتشجيعهم على الاستمرار معها من
                خلال برامج منح رواتب تضاهي كبرى الشركات ومنح العلاوات والترقيات
                والتدريب والتطوير والتأهيل المستمر.
              </span>
            </p>

            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                ونولي في شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                اهتمام بالغ بالتأهيل العلمي و المهني ويعمل معنا فريق مؤهل منهم
                العديد حاصلون على زمالة الهيئة السعودية للمراجعين والمحاسبين
                SOCPA وشهادة معايير المحاسبة الدولية في القطاع العام IPSAS،
                وشهادة المحاسب القانوني المعتمد CPA، وشهادة المراجع الداخلي
                المعتمد CIA، ولديهم خبرة مهنية واسعة في مجال الاستشارات
                المحاسبية والمالية كما نتميز بوجود إدارة متخصصة في أعمال الجودة
                والالتزام.
              </span>
            </p>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                وتتميز الشركة أيضًا بكادر بشرى يتمتع بالخبرات اللازمة لإتمام
                المهام المكلف بها، والذي يتميز أيضًا بحسن الخلق والمعاملة الجيدة
                والحصول على الشهادات المهنية في مختلف المجالات المحاسبية
                والاستشارية والإدارية والقانونية، والتي منها على سبيل المثال لا
                الحصر:
              </span>
            </p>
            <div
              data-aos="fade-up"
              className="flex w-full flex-wrap gap-6 justify-center items-center pb-4"
            >
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                IPSAS
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CBA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFC
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFE
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFM
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIB
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CICA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CISA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CSAA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                MBA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CERTI IFRS
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA VAT
              </span>
            </div>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                للتعرف اكثر على فريقنا يمكنك الضغط هنا
                <Link
                  className="text-sm text-green-500 hover:text-blue-500 hover:underline duration-500 transition-all mx-3"
                  to={"/team"}
                >
                  اضغط هنا
                </Link>
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          {/* About US Header */}
          <div
            className={`relative   overflow-hidden w-full lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[370px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D9%86%20%D9%86%D8%AD%D9%864.jpeg"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div>
            <div
              data-aos="fade-left"
              className="absolute top-4 end-4 px-2  border border-green-950  hidden md:flex bg-white bg-opacity-20 rounded-full items-center justify-center z-20"
            >
              <h3 className="text-green-950  text-sm font-semibold mx-1 text-shadow-md">
                ALBatel & Co
              </h3>
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home/logo.png"
                className="w-[50px] mt-1"
                alt="logo image "
              />
            </div>

            <img
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
              className="w-[150px] mt-1 absolute bottom-4 end-4  hidden md:flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
              alt="logo image "
            />

            <div
              data-aos="fade-right"
              className="absolute top-3/4 px-1 hidden start-4 md:flex bg-white bg-opacity-60 border border-green-950  rounded-full items-center cursor-pointer  justify-center z-30"
            >
              <h3 className="text-gray-900 text-sm font-semibold mx-1 text-shadow-md">
                info@albatelcpa.com
              </h3>
            </div>
            <div
              data-aos="fade-right"
              className="absolute top-96  hidden start-4 lg:flex bg-white bg-opacity-60 rounded-full border border-green-950 items-center justify-center cursor-pointer z-30"
            >
              <h3 className="text-gray-900 px-1  text-sm font-semibold mx-1 text-shadow-md">
                www.albatelcpa.com
              </h3>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1
                data-aos="fade-up"
                className="text-white text-center text-xl lg:text-5xl 3xl:text-6xl mb-4 font-semibold text-shadow-xl"
              >
                Batel Abdullah Al-Batel & Partners Company
              </h1>
              <h2
                data-aos="fade-up"
                className="text-white text-center text-lg lg:text-4xl mb-20 font-semibold text-shadow-xl"
              >
                For professional consultations
              </h2>
              <button onClick={handleScroll}>
                <h3 className="text-shadow-md animate-pulse inline-block rounded-full md:px-8 cursor-pointer mx-1 bg-blue-100 bg-opacity-40 py-3 border-green-950 border-2 text-center z-20 text-green-950 text-md font-bold">
                  More About Us
                  <span className="mx-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                </h3>
              </button>
            </div>
          </div>

          <div id="desc1" className="container m-auto my-16">
            {/* company history */}
            <div
              className=" w-full  flex  flex-col justify-start items-center overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center  p-5">
                <h3
                  data-aos="fade-up"
                  className="text-center font-semibold text-green-700 my-3 text-2xl 4k:text-5xl text-shadow-green"
                >
                  Company History
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-justify text-xl 4k:text-3xl py-2 m-2 flex font-semibold"
                >
                  <i className="fa-solid fa-calendar-days text-green-600 text-xl m-2 text-justify"></i>
                  Batel Abdullah Al Batel & Partners Professional Consulting
                  Company was established under the license of the Saudi
                  Organization for Certified Public Accountants to practice the
                  accounting and auditing profession since 11/08/1427 AH
                  corresponding to 11/29/2006 AD.
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-justify text-xl 4k:text-3xl m-2 py-5 flex font-semibold"
                >
                  <i className="fa-solid fa-id-card  text-green-600 text-xl m-2 text-justify"></i>
                  The company is licensed to provide auditing and accounting
                  services, financial consulting, accounting services,
                  management consulting, tax return preparation, accounting
                  consulting, policy and procedure development, zakat and income
                  tax consulting, and value-added tax services.
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="w-full lg:w-1/2 flex justify-center items-center "
              >
                <img
                  className=" w-full"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/%D8%A8%D8%A7%D8%AA%D9%84%20%D9%84%D9%88%D8%AC%D9%88.jpg"
                  alt="history of company image"
                />
              </div>
            </div>

            {/* company location */}
            <div
              className=" w-full flex flex-col overflow-hidden lg:flex-row bg-white shadow-md rounded-3xl my-8 rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-1/2 flex    flex-col   p-5">
                <h3
                  data-aos="fade-up"
                  className="text-shadow-green text-center font-semibold text-green-700 my-3 text-2xl 4k:text-5xl"
                >
                  Company Location
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl py-2 m-2 flex font-semibold"
                >
                  <i className="fa-solid fa-location-dot  text-green-600 text-xl m-2"></i>
                  Riyadh is the starting point and the main branch of the
                  company.
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl py-2 m-2 my-4 flex font-semibold"
                >
                  <i className="fa-solid fa-map-location text-green-600 text-xl m-2"></i>
                  7162 Al-Samoa Building, Eastern Ring Road, Al-Rabwa District,
                  P.O. Box 28565 Zip Code 11447
                </p>
                <p
                  data-aos="fade-up"
                  className="text-gray-900 text-shadow-sm text-xl 4k:text-3xl m-2 py-5 flex font-semibold"
                >
                  <i className="fa-solid fa-map-location-dot  text-green-600 text-xl m-2"></i>
                  We have many branches inside and outside the kingdom.
                </p>
              </div>

              <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center font-semibold p-6"
          >
            Our branches inside the Kingdom of Saudi Arabia
          </h2>
          {/* branches */}
          <div className=" w-full flex bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row bg-white shadow-md rounded-3xl my-8 ">
            {branches.map((branch, index) => {
              return (
                <Link
                  data-aos="fade-up"
                  to={`/branch/${branch.id}`}
                  key={index}
                  className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500  hover:shadow-blue-400 shadow-sm rounded-full p-5"
                >
                  {/* <div className="p-4"> */}
                  <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl text-shadow-xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                  <p className="text-2xl text-shadow-green hover:text-shadow-blue text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                    {branch.name.en}
                  </p>
                </Link>
              );
            })}
          </div>
          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center mt-14 font-semibold p-6"
          >
            Our branches outside the Kingdom of Saudi Arabia
          </h2>
          <div className=" w-full flex flex-wrap bg-fixed flex-col items-center justify-evenly md:flex-row bg-white shadow-md bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg')] bg-cover bg-center rounded-3xl my-8 ">
            {branches2.map((branch, index) => {
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="flex cursor-pointer flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500 hover:shadow-blue-400 shadow-sm rounded-full p-5"
                >
                  {/* <div className="p-4"> */}
                  <i className="fa-solid fa-map-location-dot text-blue-800 text-5xl group-hover:scale-110 group-hover:text-green-800 transition-all duration-700 py-3"></i>
                  <p className="text-2xl text-green-800 text-shadow-green hover:text-shadow-blue group-hover:text-blue-700 transition-all duration-700 font-semibold">
                    {branch.name.en}
                  </p>
                  {/* </div> */}
                </div>
              );
            })}
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl text-shadow-green 4k:text-4xl text-green-800 text-center font-semibold mt-20 p-6"
          >
            Organizational Structure and Staff
          </h2>
          {/* الهيكل التنظيمي 1 */}
          <div data-aos="fade-up" className="container m-auto mb-12">
            <div className="w-full flex flex-col md:flex-row  flex-wrap justify-center items-stretch">
              <div data-aos="fade-up" className="w-full  lg:w-1/2   p-3">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center  bg-white rounded-3xl flex-col  shadow-md  ">
                  <img
                    data-aos="fade-up"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team-about.avif"
                    className="w-[250px] h-[250px] 3xl:w-[300px] 3xl:h-[300px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div
                    data-aos="fade-up"
                    className="w-full flex flex-col justify-start"
                  >
                    <p className="text-blue-950 flex text-shadow-sm  items-center font-semibold text-xl 4k:text-3xl text-center leading-10 p-10 my-4">
                      More than eighty scientifically qualified staff with
                      extensive experience in all Financial, administrative and
                      legal aspects, and the company was able to During them,
                      providing its professional services to thousands of
                      clients within the kingdom And beyond, achieving
                      achievements that reflect the level of professionalism and
                      quality that Mark it.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="w-full  lg:w-1/2   p-3 ">
                <div className="flex md:h-[650px] h-[750px]  items-center justify-center bg-white rounded-3xl flex-col shadow-md  ">
                  <img
                    data-aos="fade-up"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/team2-about.jpg"
                    className="w-[250px] h-[250px] 3xl:w-[300px] 3xl:h-[300px] my-4 rounded-full shadow-md"
                    alt="team image"
                  />
                  <div
                    data-aos="fade-up"
                    className="w-full flex flex-col justify-start"
                  >
                    <p className="text-blue-950 text-shadow-sm flex items-center text-center font-semibold text-lg 4k:text-3xl leading-10 p-10 my-4">
                      A whole team of female employees to work in women's
                      departments or sites Which require it, their
                      qualifications in accounting and operations are varied
                      External and internal audit and have extensive experience
                      in all Financial and accounting aspects, as well as
                      administrative and governance work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* الهيكل التنظيمي 2 */}
          <div className="bg-white">
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm text-justify font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                Batel Abdullah Al-Batel & partners professional consulting
                company was distinguished With extensive experience in the
                fields of audit and auditing, consulting Finance, Accounting
                Services, Management Consulting, preparation of financial
                statements for taxes، Accounting consulting, policy and
                procedure development, consulting in The field of Zakat and
                Income Tax, Value Added Tax Services{" "}
              </span>
            </p>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-justify text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                Based on the kingdom's Vision 2030 and its continuous bet on
                Saudi youth As one of the most important and largest core
                categories, the company has Many Saudi partners and employees in
                percentages exceeding those specified from Accepted by the
                Ministry of human resources, thereby achieving Saudization
                ratios that put the company in The platinum band (the
                localization rate is 56 % and the band level is green High). The
                company is also keen to localize jobs and attract more partners
                And the competencies of the Saudi employees and encourage them
                to continue with it from During the programs of awarding
                salaries comparable to major companies and granting bonuses and
                promotions Continuous training, development and rehabilitation.
              </span>
            </p>

            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-justify text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                And Noli at Batel Abdullah Al Batel & partners for professional
                consulting Great interest in scientific and professional
                qualification and a qualified team works with us Many of them
                are fellows of the Saudi Commission of auditors SOCPA
                accountants and international accounting standards certificate
                in the public sector IPSAS, CPA certified public accountant
                certificate, and reference certificate CIA certified interns,
                and have extensive professional experience in consulting
                Accounting and finance we are also distinguished by the presence
                of a specialized department in the quality business And
                commitment.
              </span>
            </p>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-justify text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                The company is also characterized by a human cadre with the
                necessary expertise to complete Assigned tasks, which is also
                characterized by good manners and good treatment And obtaining
                professional certificates in various accounting fields
                Consulting, administrative and legal, of which, for example, not
                Exclusivity:
              </span>
            </p>
            <div
              data-aos="fade-up"
              className="flex w-full flex-wrap gap-6 justify-center items-center pb-4"
            >
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                IPSAS
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CBA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFC
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFE
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CFM
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIB
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CICA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CIPA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CISA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CSAA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                MBA
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                CERTI IFRS
              </span>
              <span className="text-green-950 text-shadow-sm font-semibold font-mono rounded-2xl bg-blue-50 p-2">
                SOCPA VAT
              </span>
            </div>
            <p
              data-aos="fade-up"
              className="p-5 mx-5 text-shadow-sm font-semibold text-blue-950 text-lg flex items-baseline"
            >
              <i className="fa-solid fa-circle-dot text-green-600 text-lg 4k:text-3xl mx-2"></i>
              <span>
                To learn more about our team, you can click here
                <Link
                  className="text-sm text-green-500 hover:text-blue-500 hover:underline duration-500 transition-all mx-3"
                  to={"/team"}
                >
                  Click Here
                </Link>
              </span>
            </p>
          </div>
        </>
      )}
    </>
  );
}
