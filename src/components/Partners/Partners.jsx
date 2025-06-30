import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import style from './Partners.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PartnersContext } from '../../Context/PartnersContext';
import Loader from '../Loader/Loader';
import { LanguageContext } from '../../Context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Partners() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPartners } = useContext(PartnersContext);
  const [partners, setPartners] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  let navigate=useNavigate();

  async function getPartnersData() {
    setLoading(true);
    let data = await getPartners();

    if (!data) {
      navigate('/notfound'); // redirect to not found component
    } else {
      setPartners(data);

      setLoading(false);
    }

  }

  useEffect(() => {
  
    getPartnersData();
  }, []);


  return <>
  

  
  {Loading ? <Loader/> : null}

{dir == "rtl" ? <>
<div
      
            className={`relative overflow-hidden  w-full lg:h-[430px] 3xl:h-[500px] h-[270px] md:h-[330px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="/homeSlide3.jpg"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div>
            <div data-aos="fade-right" className="absolute top-4 end-4 px-2  border border-green-950  hidden md:flex bg-white bg-opacity-20 rounded-full items-center justify-center z-20">
              <h3 className="text-green-950 text-shadow-md  text-sm font-semibold mx-1">
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
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
                className="w-[150px] mt-1 absolute bottom-4 start-4  flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
                alt="logo image "
              />
         
            <div data-aos="fade-right" className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-60 border border-green-950  rounded-full items-center cursor-pointer  justify-center z-30">
              <h3 className="text-gray-900 text-shadow-md px-2 text-sm font-semibold mx-1">
                info@albatelcpa.com
              </h3>
            </div>
            <div data-aos="fade-right" className="absolute top-96  hidden end-4 lg:flex bg-white bg-opacity-60 rounded-full border border-green-950 items-center justify-center cursor-pointer z-30">
              <h3 className="text-gray-900 text-shadow-md px-2 text-sm font-semibold mx-1">
                www.albatelcpa.com
              </h3>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
              <h1 data-aos="fade-up" className="text-white text-shadow-xl text-center text-lg lg:text-4xl 3xl:text-5xl mb-4 font-semibold">
              عملاؤنا هم جوهر نجاحنا..شراكة مبنية على الثقة والخبرة
              </h1>
              <h2 data-aos="zoom-in"  data-aos-delay="500" className="text-white text-shadow-xl text-center text-lg lg:text-4xl mb-20 font-semibold">
              معًا نحو قرارات مالية أكثر دقة ونجاح مستدام
              </h2>
            
            </div>
</div>
</> 
:<>
<div
      
      className={`relative overflow-hidden  w-full lg:h-[430px] 3xl:h-[500px] h-[270px] md:h-[330px]  mt-16 flex justify-center items-center`}
    >
      <img
        src="/homeSlide3.jpg"
        className="w-full h-full  z-10"
        alt="about us image "
      />
      {/* Gradient blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div>
      <div data-aos="fade-right" className="absolute top-4 end-4 px-2  border border-green-950  hidden md:flex bg-white bg-opacity-20 rounded-full items-center justify-center z-20">
        <h3 className="text-green-950 text-shadow-md  text-sm font-semibold mx-1">
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
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
          className="w-[150px] mt-1 absolute bottom-4 start-4  flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
          alt="logo image "
        />
   
      <div data-aos="fade-right" className="absolute top-3/4 hidden end-4 md:flex bg-white bg-opacity-60 border border-green-950  rounded-full items-center cursor-pointer  justify-center z-30">
        <h3 className="text-gray-900 text-shadow-md px-2 text-sm font-semibold mx-1">
          info@albatelcpa.com
        </h3>
      </div>
      <div data-aos="fade-right" className="absolute top-96  hidden end-4 lg:flex bg-white bg-opacity-60 rounded-full border border-green-950 items-center justify-center cursor-pointer z-30">
        <h3 className="text-gray-900 text-shadow-md px-2 text-sm font-semibold mx-1">
          www.albatelcpa.com
        </h3>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
        <h1 data-aos="fade-up" className="text-white text-shadow-xl text-center text-lg lg:text-4xl 3xl:text-5xl mb-4 font-semibold">
        Our Clients are The Core of Our Success..Partnership Built on Trust and Experience
        </h1>
        <h2 data-aos="zoom-in"  data-aos-delay="500" className="text-white text-shadow-xl text-center text-lg lg:text-4xl mb-20 font-semibold">
        Together Towards More Accurate Financial Decisions and Sustainable Success
        </h2>
      
      </div>
</div>
</>}

  <div className="bg-blue-100/50">
          

            <div id="desc1" className="py-10 container m-auto  ">
              <div className="w-full flex flex-wrap justify-center">
                {partners.map((sponcer, index) => {
                  return (
                    <div data-aos="fade-up" key={index} className="3xl:w-1/5  lg:w-1/4 md:w-1/3 w-11/12 px-1 lg:px-2  overflow-hidden">
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-9  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex  p-2 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="text-shadow-blue mb-1 text-lg xl:text-xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  ">
                            {sponcer.title}
                          </h5>
                         
                        </div>
                        <div className=" flex h-[200px] 3xl:h-[240px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${sponcer.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="Partner image"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
           
            </div>
          </div>

       

  </>
}
