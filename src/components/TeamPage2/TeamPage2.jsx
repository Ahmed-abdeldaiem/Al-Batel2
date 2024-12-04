import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";



import style from "./TeamPage2.module.css";

export default function TeamPage2() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);


  const Team=[
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A8%D8%A7%D8%AA%D9%84.jpeg?raw=true',
      name:{ar:'باتل عبدالله الباتل' , en: 'Batel Abdullah Al-Batel'},
      job: {ar:'' , en: ''}
    },
    ,
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'رحاب العتيبي ' , en: 'Rehab Al-Eteby'},
      job: {ar:' ' , en: ''}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'رزان الحربي ' , en: 'Razan Al-Harby'},
      job: {ar:' ' , en: ''}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' فيء المطيري' , en: 'Fai Al-Motery'},
      job: {ar:' ' , en: ''}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%81%D9%8A%D8%B5%D9%84%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84.jpg?raw=true',
      name:{ar:' فيصل الباتل' , en: 'Faisal Al-Batel'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' منيرة الحربي' , en: 'Monera Al-Harby'},
      job: {ar:' ' , en: ''}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' حور المبارك' , en: 'Hor Al-Mobarak'},
      job: {ar:' ' , en: ''}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'خواطر المطيري' , en: 'Khawater Al-Motery'},
      job:  {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A3%D9%8A%D9%85%D9%86%20%D9%81%D8%A4%D8%A7%D8%AF.jpeg?raw=true',
      name:{ar:'أيمن فؤاد' , en: 'Ayman Fouad'},
      job: {ar:' مستشار مالي ومراجع معتمد' , en: 'Certified Financial Advisor and Auditor'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%8A%D8%A7%D8%B3%D8%B1%20%D8%A7%D9%84%D8%B3%D8%A8%D9%8A%D8%B9%D9%8A.jpg?raw=true',
      name:{ar:' ياسر السبيعي' , en: 'Yasser Al-Sebeie'},
      job:{ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%85%D8%B5%D8%B7%D9%81%D9%89%20%D8%B9%D8%A8%D9%8A%D8%AF.png?raw=true',
      name:{ar:'مصطفى عبيد ' , en: 'Mostafa Obeid'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' صبحي جابر' , en: 'Sobhy Jaber'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' أحمد أمين ' , en: 'Ahmed Amen'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد ابراهيم' , en: 'Mohamed Ebrahim'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%B3%D8%B9%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.jpg?raw=true',
      name:{ar:' سعد المطيري' , en: 'Saad Al-motery'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد عامر' , en: 'Mohamed Amer'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'أحمد داوود ' , en: 'Ahmed Dawood'},
      job:{ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد صالح' , en: 'Mohamed Saleh'},
      job: {ar:'    ' , en: '   '}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' حمدي عيسى' , en: 'Hamdy Eisa'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D9%84%D8%A7%D8%A1%20%D9%81%D9%83%D8%B1%D9%8A.jpeg?raw=true',
      name:{ar:'علاء فكري ' , en: 'Alaa Fekry'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%A7%D8%B3%D8%A7%D9%85%D8%A9%20%D9%87%D8%A7%D8%B4%D9%85.jpeg?raw=true',
      name:{ar:' أسامة هاشم ' , en: 'Osama Hashem'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' محمد الباتل' , en: 'Mohamed Al-Batel'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد عبدالمجيد ' , en: 'Mohamed Abd-Almaged'},
      job: {ar:'مستشار إداري ' , en: 'Management consultant'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' محمد عجور' , en: 'Mohamed Agour'},
      job: {ar:'مستشار إداري ' , en: 'Management consultant'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' عبدالعزيز الباتل' , en: 'Abdelaziz Al-Batel'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },


    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'أحمد نعيم' , en: 'Ahmed Naiem'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%AD%D8%B3%D9%8A%D9%86.jpeg?raw=true',
      name:{ar:' عبدالعزيز حسين' , en: 'Abdelaziz Hussein'},
      job: {ar:'    ' , en: '   '}
    },  {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' عبده أبوعامر' , en: 'Abdo Abo-Amer'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' أحمد على' , en: 'Ahmed Ali'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },


    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A7%D9%84%D9%87%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%81%D9%8A.jpeg?raw=true',
      name:{ar:'عبدالإله الطريفي ' , en: 'Abd-Alelah Altorefy'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' ليلى العنزي ' , en: 'Lila Alanzy'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
   
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' الهنوف عبدالعزيز' , en: 'Alhanouf Abd-alaziz'},
      job: {ar:' الرقابةوالجودة' , en: 'Control and quality'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%86%D9%88%D8%A7%D9%81%20%D8%A7%D9%84%D9%85%D8%AA%D9%8A%D8%A8.jpeg?raw=true',
      name:{ar:'نواف المتيب' , en: 'Nawaf Almoteb'},
      job: {ar:' ' , en: '  '}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%B9%D8%AB%D9%8A%D9%85%D9%8A.jpeg?raw=true',
      name:{ar:'محمد العصيمي ' , en: 'mohamed Alosemy'},
      job: {ar:' ' , en: '  '}
    }, {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D9%8A.jpg?raw=true',
      name:{ar:'محمد عبدالباري ' , en: 'Mohamed Abd-Albary'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' هيثم هاشم' , en: 'Haitham Hashem'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    
   
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد فرحات ' , en: 'Mohamed Farahat'},
      job: {ar:' مستشار قانوني' , en: 'Legal advisor'}
    },
    
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D8%AF%D9%8A.jpeg?raw=true',
      name:{ar:' عبدالعزيز الحمادي' , en: 'Abd-Alaziz Alhamady'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86%20%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%D9%82.jpeg?raw=true',
      name:{ar:' سليمان الشايق  ' , en: '   Soliman Alshaiek'},
      job: {ar:'    ' , en: '   '}
    },
    
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' ريان العضيب' , en: 'Rayan Aladeb'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'محمد هاني ' , en: 'Mohamed Hany'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
   
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'أشرف الدسوقي ' , en: 'Ashraf Aldesoky'},
      job: {ar:' المحاسبة والمراجعة' , en: 'Accounting and auditing'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%83%D9%8A.jpeg?raw=true',
      name:{ar:' عبدالله المالكي  ' , en: 'Abdallah Almalky'},
      job: {ar:'    ' , en: '   '}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/team/%D8%B9%D9%85%D8%B1%20%D9%86%D8%B5%D8%A7%D8%B1.jpeg?raw=true',
      name:{ar:' عمر نصار ' , en: 'Omar Nasar'},
      job: {ar:'مساعد اداري ' , en: 'Administrative assistant'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/%D8%A7%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%AF%D8%A7%D9%8A%D9%85.jpg?raw=true',
      name:{ar:' أحمد عبدالدايم ' , en: 'Ahmed Abdeldaiem  '},
      job: {ar:'مساعد اداري ' , en: 'Administrative assistant'}
    },
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:' محمد الحربي' , en: 'Mohamed Alharby'},
      job: {ar:' محلل مالي' , en: 'Financial analyst'}
    },
   
   
    {
      image:'https://github.com/Ahmed-abdeldaiem/Albatel-API/blob/main/home/logo.png?raw=true',
      name:{ar:'خالد خضير' , en: ' khaled khodeir'},
      job: {ar:'    ' , en: '   '}
    },
    
   
    

  
  ]
  
  

 


  return (
    <>
      {/* {Loading ? <Loader /> : null} */}
      {dir=='rtl'?
      <>
    
    
  <div className="container bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center   py-24  ">
    
    
 <h2 className="text-blue-900 text-3xl text-center my-4  font-semibold">
        
        فريق عمل شركة الباتل
       
      </h2>
      <hr className="border-green-500 border-t-2 w-40 mx-auto" />
      <hr className="border-green-600 border-t-2 w-20 my-2 pb-8 mx-auto" />
     
     
     
      {/* <a
  className="text-blue-400 text-2xl"
  href="#/CV_Template"
  target="_blank"
  rel="noopener noreferrer"
>
  Go to CV Template
</a> */}

<div className="py-2 container ">
              <div className="w-full flex flex-wrap justify-center">
                {Team.map((teamMember, index) => {
                  return (
                    <div key={index} className="relative group lg:w-1/4  md:w-1/3 3xl:w-1/5 4k:w-1/6 p-6  overflow-hidden">
                      <div className="flex flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                        <div className=" flex  relative flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="mb-8 text-lg md:text-xl  border-b border-green-600 pb-3 text-blue-950 font-bold text-center tracking-tight  dark:text-white">
                            {teamMember.name.ar}
                          </h5>
                          <h5 className="mb-1 text-lg  pb-3 text-blue-900 font-semibold text-center tracking-tight  dark:text-white">
                            {/* {teamMember.job.ar} */}
                          </h5>
                         
                         <button className=" absolute -bottom-7 opacity-0 group-hover:opacity-100 group-hover:bottom-0  my-2 px-4 z-20 py-1 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-lg font-semibold text-blue-700 hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-xl">
                  عرض المزيد
                </button>
                <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>

                        </div>
                        <div className=" flex h-[220px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${teamMember.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="service image"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
           
            </div>


 
      
       
      </div>
      </>:
      <>
   <div className="container bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center   py-24  ">
    
    
    <h2 className="text-blue-900 text-3xl text-center my-4  font-semibold">
           
    Al-Batel company team

         </h2>
         <hr className="border-green-500 border-t-2 w-40 mx-auto" />
         <hr className="border-green-600 border-t-2 w-20 my-2 pb-8 mx-auto" />
        
        
        
         {/* <a
     className="text-blue-400 text-2xl"
     href="#/CV_Template"
     target="_blank"
     rel="noopener noreferrer"
   >
     Go to CV Template
   </a> */}
   
   <div className="py-2 container ">
                 <div className="w-full flex flex-wrap justify-center">
                   {Team.map((teamMember, index) => {
                     return (
                       <div key={index} className="relative group lg:w-1/4 md:w-1/3 p-6  overflow-hidden">
                         <div className="flex flex-col-reverse border rounded-tr-3xl rounded-tl-3xl shadow-lg overflow-hidden hover:shadow-green-100 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full">
                           <div className=" flex relative  flex-col overflow-hidden items-center justify-center text-center">
                             <h5 className="mb-8 text-lg md:text-xl  border-b border-green-600 pb-3 text-blue-950 font-bold text-center tracking-tight  dark:text-white">
                               {teamMember.name.en}
                             </h5>
                             <h5 className="mb-1 text-lg  pb-3 text-blue-900 font-semibold text-center tracking-tight  dark:text-white">
                               {/* {teamMember.job.ar} */}
                             </h5>
                            
                            <button className=" absolute -bottom-7 opacity-0 group-hover:opacity-100 group-hover:bottom-0  my-2 px-4 z-20 py-1 overflow-hidden border-2 border-green-300 transition-all duration-500 hover:border-blue-400 text-lg font-semibold text-blue-700 hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-xl">
                       see more
                   </button>
                   <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>

                           </div>
                           <div className=" flex h-[220px] items-center relative overflow-hidden justify-center text-center">
                             <img
                               src={`${teamMember.image} `}
                               loading="lazy"
                               className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                               alt="service image"
                             />
                           </div>
                         </div>
                       </div>
                     );
                   })}
                 </div>
              
               </div>
   
   
    
         
          
         </div>
 
      </>}
   
    </>
  );
}





