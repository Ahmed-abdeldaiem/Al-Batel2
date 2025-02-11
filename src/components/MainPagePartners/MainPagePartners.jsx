import React, { useContext, useRef, useState } from 'react'
import Slider from 'react-slick';
import { LanguageContext } from '../../Context/LanguageContext';
import style from './MainPagePartners.module.css'





export default function MainPagePartners() {

const [counter, setcounter] = useState(0)




const sponcersAr=[
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s1.jpg?raw=true',
    title:'هيئة المحاسبة والمراجعة',
    description:'مجلس التعاون لدول الخليج العربية'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s2.jpg?raw=true',
    title:'شركة مياه حياة',
    description:'لتقنية وتعبئة المياه'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s3.jpg?raw=true',
    title:'مستشفى الملك خالد',
    description:'التخصصي للعيون'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s4.jpg?raw=true',
    title:'جامعة الأميرة نورة بنت عبدالرحمن',
    description:''
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s5.png?raw=true',
    title:'KPMG',
    description:''
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s6.jpg?raw=true',
    title:'هيئة التقييس GSO',
    description:'لدول مجلس التعاون لدول الخليج العربية'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s7.jpg?raw=true',
    title:'مجموعة البيان القابضة',
    description:'للعقارات والأوراق المالية وإدارة الثروات'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s8.png?raw=true',
    title:'نادي الإبل',
    description:'لرعاية الإبل والمهتمين بها والأنشطة المختصة بها '
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s9.jpg?raw=true',
    title:'التموينية للمشاريع',
    description:''
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s10.png?raw=true',
    title:'اتقان العقارية',
    description:'Etqaan Real Estate'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s11.jpg?raw=true',
    title:'بيت التطوير',
    description:'للتجارة وتوريد الحديد'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s12.png?raw=true',
    title:'شركة نجوم السلام',
    description:'للإستثمار والتطوير العقاري'
  },
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s13.jpg?raw=true',
    title:'شركة دار الخيول ',
    description:'للمقاولات العامة'
  }
  ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s14.png?raw=true',
    title:'شركة مناجم الخليجية',
    description:'لإستكشاف وتطوير وتشغيل مشاريع التعدين'
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s15.png?raw=true',
    title:'أمانة منطقة تبوك    ',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s16.jpg?raw=true',
    title:'الهيئة العامة للتجارة الخارجية    ',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s17.png?raw=true',
    title:'برنامج الخدمات المشتركة',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s18.png?raw=true',
    title:'المعهد الملكي للفنون التقليدية',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s19.png?raw=true',
    title:'جامعة حفر الباطن',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s20.png?raw=true',
    title:'أمانة محافظة جدة',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s21.png?raw=true',
    title:'المركز الوطني للأرصاد',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s22.png?raw=true',
    title:'برنامج تنمية القدرات البشرية',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s23.png?raw=true',
    title:'رئاسة الهيئة الملكية للجبيل وينبع',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s24.png?raw=true',
    title:'مدينة الملك فهد الطبية',
    description:''
  }
 ,
  {
    image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/sponcers-1/s25.png?raw=true',
    title:'المجلس الدولي للتمور',
    description:''
  }
 
 
  
]


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
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);



  return <>
<h2 className="text-green-600 text-3xl text-center  my-3 font-semibold">
           {dir=='rtl'?<>شركاء النجاح</>:<>Partners of success</>}  
        </h2>
        <hr className="border-blue-700 border-t-2 w-40 mx-auto" />
        <hr className="border-blue-700 border-t-2 w-20 my-2 mx-auto" />
  <div className='relative w-full bg-gray-300'>
  {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-green-800/30 opacity-70 z-10"></div> */}
  <Slider  {...settings}  className='w-full flex overflow-hidden flex-wrap justify-center z-20'>
  {sponcersAr.map((sponcer, index) => {
                  return (
                    <div key={index} className="lg:w-1/4 md:w-1/3 px-3  overflow-hidden ">
                      {/* rounded-tr-3xl rounded-tl-3xl */}
                      <div className="flex  flex-col-reverse border rounded-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        {/* <div className=" flex  p-2 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-1 text-xl border-b border-green-600 pb-3 text-blue-900 font-bold text-center tracking-tight  ">
                            {sponcer.title}
                          </h5>
                         
                        </div> */}
                        <div className=" flex h-[200px] items-center relative overflow-hidden justify-center text-center">
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
</Slider>

  </div>
  






  </>
}
