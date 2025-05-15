import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import { LanguageContext } from "../../Context/LanguageContext";
import { PartnersContext } from "../../Context/PartnersContext";
import Loader from "../Loader/Loader";
import style from "./MainPagePartners.module.css";

export default function MainPagePartners() {
  const { getPartners } = useContext(PartnersContext);
  const [partners, setPartners] = useState([]);
  const [Loading, setLoading] = useState(false);

  async function getPartnersData() {
    setLoading(true);
    let data = await getPartners();

    setPartners(data);

    setLoading(false);
  }

  useEffect(() => {
    getPartnersData();
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5, 
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  
  };
  
  

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  return (
    <>
      {Loading ? <Loader /> : null}
      <h2 className="text-green-600 text-3xl 4k:text-4xl text-center  my-3 font-semibold">
        {dir == "rtl" ? <>شركاء النجاح</> : <>Partners of success</>}
      </h2>
      <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
      <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
      <div className="relative w-full bg-gray-300">
        {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-green-800/30 opacity-70 z-10"></div> */}
        {partners.length > 0 ? (
          <>
            <Slider
              {...settings}
              className="w-full max-w-full  overflow-hidden "
            >
              {partners.map((sponcer, index) => {
                return (
                

                  <div  key={index} className="px-3 w-full">
                    <div className="flex flex-col-reverse border  z-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                      <div
                       
                        className=" flex h-[200px]  items-center relative overflow-hidden justify-center text-center"
                      >
                        <img
                          src={`${sponcer?.image}`}
                          className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                          alt="Partner image"
                        />

                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>{" "}
          </>
        ) : null}
      </div>
    </>
  );
}
