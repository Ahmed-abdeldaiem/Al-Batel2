import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import { BranchesContext } from '../../Context/branchesContext';
import style from "./BranchDetails.module.css";
import Loader from "../Loader/Loader";

export default function BranchDetails() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  
  const { getBranches } = useContext(BranchesContext);
 
  const [Loading, setLoading] = useState(false);

  const [branchDetails, setBranchDetails] = useState({});


  let { id } = useParams();


  // Convert id to a number, as useParams returns a string
  const branchId = Number(id);


  async function getBranchData(branchId) {
    setLoading(true);
    let data = await getBranches();
    console.log(data);

    // Find the branch
    const branch = data?.find((branch) => branch.id === branchId);


    setBranchDetails(branch);


 
    setLoading(false);
  }

  useEffect(() => {
  
    getBranchData(branchId);


  }, []);


 




 
  const Jaddah2 = {
    id: 2_1,
    name: {
      ar: "فرع جدة",
      en: "Jeddah Branch",
    },
    location_map: {
      ar: "شارع فلسطين، الحمراء، Al-Hamra Plaza، جدة 23212",
      en: "Palestine Street, Al-Hamra Plaza, Jeddah 23212 ",
    },
    google_map:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4413.934733448382!2d39.16322389368351!3d21.520959416806384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0348b7c1c55%3A0xf27ff67b4681530!2z2KfZhNio2KfYqtmEINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!5e0!3m2!1sar!2ssa!4v1732700674610!5m2!1sar!2ssa",
    email: "jeddah@albatelcpa.com ",
    phone: "0126296088",
    postal: "23337 ",
    membership_num: "359412 ",
  };
 
  return (

   



    <>
      
  {Loading ? <Loader/> : null}
 {dir=='rtl'?
 <>
   
 <div className=" bg-center bg-no-repeat bg-cover bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg?raw=true')]">
 <div className="bg-white/85 py-20">

        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
          {branchDetails?.name?.ar}
        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 mt-2 mb-10 mx-auto" />
     
      <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/85  ">
        <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
          <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
            <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
            {branchDetails?.location_map?.ar}
          </p>
          <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
            <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
            البريد الإلكتروني : {branchDetails?.email}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
            رقم الهاتف : {branchDetails?.phone}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
            الرقم البريدي : {branchDetails?.postal}
          </p>
        </div>

        <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
          <iframe
            src={branchDetails?.google_map}
            width={`100%`}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div></div>
      </div>

      {branchDetails?.id == 2 ? (
        <>
           <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
          فرع جدة الثاني
        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 my-2 mx-auto" />
          <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/50  my-8 ">
       
            <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
              <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
                <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
                {Jaddah2.location_map?.ar}
              </p>
              <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
                <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
                البريد الإلكتروني : {Jaddah2.email}
              </p>
              <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
                <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
                رقم الهاتف : {Jaddah2.phone}
              </p>
              <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
                <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
                الرقم البريدي : {Jaddah2.postal}
              </p>
            </div>

            <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
              <iframe
                src={Jaddah2.google_map}
                width={`100%`}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div></div>
          </div>
        </>
      ) : null}

</div>
</div>
 </>:
 <>
 
 <div className=" bg-center bg-no-repeat bg-cover bg-[url('https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg?raw=true')]">
 <div className="bg-white/85 py-20">

 
        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
          {branchDetails?.name?.en}

        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 my-2 mx-auto" />
   
      <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/85 ">
        <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
          <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
            <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
            {branchDetails?.location_map?.en}
          </p>
          <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
            <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
               Email : {branchDetails?.email}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
              Phone : {branchDetails?.phone}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
              Postal : {branchDetails?.postal}
          </p>
        </div>

        <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
          <iframe
            src={branchDetails?.google_map}
            width={`100%`}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div></div>
      </div>

      {branchDetails?.id == 2 ? (
        <>
        
        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
         Jeddah Second branchDetails?
        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 my-2 mx-auto" />
          <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/50  my-8 ">
            <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
              <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
                <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
                {Jaddah2.location_map.en}
              </p>
              <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
                <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
                   Email : {Jaddah2.email}
              </p>
              <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
                <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
                   Phone : {Jaddah2.phone}
              </p>
              <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
                <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
                  Postal : {Jaddah2.postal}
              </p>
            </div>

            <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
              <iframe
                src={Jaddah2.google_map}
                width={`100%`}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div></div>
          </div>
        </>
      ) : null}
 
 </div>
 </div>

 </>}
 
    </>
  );
}


