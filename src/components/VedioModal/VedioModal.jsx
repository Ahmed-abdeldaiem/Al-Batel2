import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext';
import style from './VedioModal.module.css'





export default function VedioModal() {

const [isModalOpen, setIsModalOpen] = useState(false)
const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

useEffect(() => {
  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false)
    }
  }
  window.addEventListener('keydown', handleEsc)

  return () => {
    window.removeEventListener('keydown', handleEsc)
  }
}, [])





  return <>
{/* <div className=''>
  <span className=' bg-green-600 p-1 rounded-full  fixed  bottom-4 left-5 z-50'>
  <img  src="/vedio2.jpg"  alt="Vedio Icon" className='w-14 h-14  rounded-full ' />
  </span>
 
</div> */}


{/* https://drive.google.com/file/d/1UpK6Z4up09igBCCBrfWsK2Npl9m0N4qW/view?usp=sharing */}
{/* */}
<div className="fixed bottom-3 left-4 z-50 cursor-pointer">
  <button onClick={() => setIsModalOpen(true)} className="relative flex h-14 w-14">
    {/* Green ping circle behind */}
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-90"></span>

    {/* Static icon/image on top */}
    <span className="relative inline-flex rounded-full">
      <img src="/vedio2.jpg" alt="Vedio Icon" className="w-14 h-14 rounded-full" />
    </span>
  </button>





</div>

<div
    id="default-modal"
    tabIndex={-1}
    aria-hidden={!isModalOpen}
    className={`fixed top-0 right-0 left-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto flex items-center justify-center transition-opacity duration-300 ease-in-out ${
      isModalOpen ? 'bg-black bg-opacity-50' : 'opacity-0 pointer-events-none'
    }`}
    onClick={() => setIsModalOpen(false)}
  >
    <div className={`relative p-4 w-full max-w-2xl max-h-full transform transition-all duration-300 ease-in-out ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow-sm ">
        {/* Modal header */}
        <div className="flex items-center justify-center p-4 md:p-2 border-b rounded-t  border-gray-200">
<div className='w-full'>
<h3 className="md:text-3xl text-lg text-center font-semibold text-blue-900 text-shadow-blue ">
            Al-Batel CPA
          </h3>
</div>
   
     <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={() => setIsModalOpen(false)}
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
      

         
        </div>
        {/* Modal body */}
        <div className="p-4 md:p-5 space-y-4">
          {/* vedio albatel CPA */}
      <video className="" controls>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

        </div>
        {/* Modal footer */}
        <div className="flex items-center justify-evenly p-4 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
       
                      <h3 className='text-blue-800 text-shadow-blue text-lg font-semibold'>{dir=='rtl'? "تابعونا على :" : "Follow Us on:"}</h3>
                      {/* linked in */}
                      <a data-aos="fade-up"
                        href="https://www.linkedin.com/company/albatel-cpa/"
                        className="z-20 my-3 "
                        target={"_blank"}
                      >
                        <span className=" border-blue-500 border hover:border-blue-900 transition-all duration-500 rounded-full p-2 ">
                          <i className="fa-brands  fa-linkedin-in cursor-pointer px-1 text-lg text-blue-500  hover:text-blue-700 transition-all duration-500 text-shadow-green"></i>
                        </span>
                      </a>
                      {/* inestgram */}
                      <a data-aos="fade-up"
                        href="https://www.instagram.com/albatelksa/"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                        <span className=" border-red-300 border hover:border-red-700 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-instagram cursor-pointer px-1 text-lg text-red-300  hover:text-red-600 transition-all duration-500 text-shadow-green"></i>
                        </span>
                      </a>
                      {/* Twitter */}
                      <a data-aos="fade-up"
                        href="https://x.com/albatel_cpa"
                        className="z-20 my-3"
                        target={"_blank"}
                      >
                         <span className=" border-blue-500 border hover:border-blue-900 transition-all duration-500 rounded-full p-2 ">
                          <i className="fab fa-twitter cursor-pointer px-1 text-lg text-blue-400 hover:text-gray-500 transition-all duration-500 text-shadow-green"></i>
                        </span>
                      </a>
                  
        </div>
      </div>
    </div>
  </div>
  </>
}
