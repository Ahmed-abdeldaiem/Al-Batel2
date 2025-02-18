import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick';
import style from './Partners.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PartnersContext } from '../../Context/PartnersContext';
import Loader from '../Loader/Loader';




export default function Partners() {


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







  return <>
  

  
  {Loading ? <Loader/> : null}

  <div className="bg-blue-100/50">
          

            <div id="desc1" className="py-10 container ">
              <div className="w-full flex flex-wrap justify-center">
                {partners.map((sponcer, index) => {
                  return (
                    <div key={index} className="3xl:w-1/5 lg:w-1/4 md:w-1/3 w-11/12 px-3  overflow-hidden">
                      <div className="flex  flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex  p-2 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-1 text-lg lg:text-xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  ">
                            {sponcer.title}
                          </h5>
                         
                        </div>
                        <div className=" flex h-[200px] 3xl:h-[240px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${sponcer.image} `}
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
           
            </div>
          </div>



  </>
}
