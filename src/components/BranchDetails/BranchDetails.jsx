import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./BranchDetails.module.css";

export default function BranchDetails() {
  const branches = [
    {
      id: 1,
      name: {
        ar: "فرع الرياض",
        en: "Riyadh Branch",
      },
      location_map: {
        ar: "7126 بناية السمو ، الطريق الدائري الشرقي ، حي الربوة ، الرياض",
        en: "7162 Al-Sumo Building, Eastern Ring Road, Al-Rabwa District, Riyadh",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg",
      email: "Albatelcpa@albatelcpa.com",
      phone: "0112913377",
      postal: "28565",
      membership_num: "74389",
    },
    {
      id: 2,
      name: {
        ar: "فرع جدة الأول",
        en: "Jeddah First Branch",
      },
      location_map: {
        ar: " طريق الملك فهد فرعي، جدة 21345",
        en: "King Fahad Branch Road, Jeddah 21345",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.4430530463044!2d39.19172940160523!3d21.5513083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d139187858af%3A0x8f03ce4ecd8954ca!2z2YXZg9iq2Kgg2KfZhNio2KfYqtmEINmF2K3Yp9iz2Kgg2YLYp9mG2YjZhtmKICgg2LTYsdmD2Kkg2KfZhNio2KfYqtmEINmI2LTYsdmD2KfZhyDZhNmE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YXZh9mG2YrYqSAtIEFsIEJhdGVsIENQQSBBY2NvdW50YW50cyAmIEF1ZGl0b3JzICk!5e0!3m2!1sar!2ssa!4v1732706790474!5m2!1sar!2ssa",
      email: "jeddah@albatelcpa.com ",
      phone: "0545432724",
      postal: "21345 ",
      membership_num: "359412 ",
    },
    {
      id: 3,
      name: {
        ar: "فرع المدينة المنورة",
        en: "Madinah branch",
      },
      location_map: {
        ar: "7343 مبني وقف فيصل بن طالب حي الاسكان المدينة المنورة",
        en: "7343 Faisal Bin Talib Endowment Building, Al-Iskan District, Medina",
      },
      google_map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d336.98854276653327!2d39.642238590856316!3d24.45690336338659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2ssa!4v1732707323809!5m2!1sen!2ssa",
      email: "madinah@albatelcpa.com",
      phone: "0148160802",
      postal: "42317",
      membership_num: "130365",
    },
    {
      id: 4,
      name: {
        ar: "فرع الخبر",
        en: "Khobar Branch",
      },
      location_map: {
        ar: "6463 طريق خادم الحرمين الشريفين., 3048, الخبر 34446 ",
        en: " 6463 custodian of the Two Holy Mosques Rd., 3048, Al Khobar 34446 ",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.2310299826213!2d50.193169725073766!3d26.28660948671748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e9c36f25e185%3A0x9c4e75ae9aa4136c!2z2KfZhNio2KfYqtmEINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!5e0!3m2!1sar!2ssa!4v1732702404174!5m2!1sar!2ssa",
      email: "khobar@albatelcpa.com",
      phone: "0138335100",
      postal: "3446",
      membership_num: "267947",
    },

    {
      id: 5,
      name: {
        ar: "فرع حفر الباطن",
        en: "Hafar Al-Batin Branch",
      },
      location_map: {
        ar: "ابو موسى الأشعري، البلدية، حفر الباطن 39921 ",
        en: " Abu Musa al-Asha'ari, municipality, Hafr Al-Batin 39921 ",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.485669348642!2d45.98135672499889!3d28.434772493034554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fd7411718619da3%3A0x251128e9ea02b693!2z2KfZhNio2KfYqtmEINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!5e0!3m2!1sar!2ssa!4v1732702635007!5m2!1sar!2ssa",
      email: "Hbb@albatelcpa.com ",
      phone: "0568841118",
      postal: "3446",
      membership_num: "",
    },
    {
      id: 6,
      name: {
        ar: "فرع خميس مشيط",
        en: "Khamis Mushait Branch",
      },
      location_map: {
        ar: "  مركز بن نابت التجاري، الخالدية، خميس مشيط 62461 ",
        en: " Bin Nabat commercial center, Khalidiya, Khamis Mushait 62461 ",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.0022519517713!2d42.72537799997452!3d18.301203400003825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb5951ed525c47%3A0xd1b6417767b9fb65!2z2LnZhdin2LHYqSDYqNmGINmG2KfYqNiqINin2YTYqtis2KfYsdmK!5e0!3m2!1sar!2ssa!4v1732705295777!5m2!1sar!2ssa",
      email: "khames@albatelcpa.com",
      phone: "0172227111",
      postal: "62461",
      membership_num: "116702",
    },
    {
      id: 7,
      name: {
        ar: " فرع جازان",
        en: "Jizan Branch",
      },
      location_map: {
        ar: "طريق الملك عبدالعزيز، الصفا، جازان 82721 ",
        en: " King Abdulaziz Rd., Safa, Jazan 82721 ",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.8156447311885!2d42.580423525327404!3d16.885011817084166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607e362b7ddc8db%3A0x1a123c65347f636f!2z2KfZhNio2KfYqtmEINmI2LTYsdmD2KfZhyDZhdit2KfYs9io2YjZhiDZiNmF2LHYp9is2LnZiNmGINmC2KfZhtmI2YbZitmI2YYgLSAoINmF2K3Yp9iz2Kgg2YLYp9mG2YjZhtmKINmF2LnYqtmF2K8p!5e0!3m2!1sar!2ssa!4v1732702891326!5m2!1sar!2ssa",
      email: "jazan@albatelcpa.com ",
      phone: "0500542044",
      postal: "62461",
      membership_num: "",
    },
    {
      id: 8,
      name: {
        ar: "فرع القصيم",
        en: "Al-Qassim Branch",
      },
      location_map: {
        ar: " طريق علي بن أبي طالب، حي الأمن، بريدة 52385",
        en: " Ali bin Abi Talib road, security District, Buraydah 52385 ",
      },
      google_map:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.3738630061953!2d43.95590412507079!3d26.379106582819254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f59cffd1a1cdb%3A0xc982a91e35f5a1da!2z2KfZhNio2KfYqtmEINmF2K3Yp9iz2KjZiNmGINmIINmF2LHYp9is2LnZiNmGINmC2KfZhtmI2YbZitmI2YY!5e0!3m2!1sar!2ssa!4v1732703194794!5m2!1sar!2ssa",
      email: "buraydah@albatelcpa.com",
      phone: "0163811576",
      postal: "52385",
      membership_num: "104748",
    },
    {
      id: 2_1,
      name: {
        ar: "فرع جدة الثاني",
        en: "Jeddah Second Branch",
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
    }
  ];

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
 


  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  let { id } = useParams();

  // console.log("branch number :", id);

  // Convert id to a number, as useParams returns a string
  const branchId = Number(id);

  // Find the branch
  const branch = branches.find((branch) => branch.id === branchId);
  // console.log("branch map :", branch);
  return (

   



    <>
 {dir=='rtl'?<>
 
 
 <div className="pt-20   ">
        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
          {branch?.name.ar}
        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 my-2 mx-auto" />
      </div>
      <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/50  my-8 ">
        <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
          <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
            <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
            {branch.location_map.ar}
          </p>
          <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
            <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
            البريد الإلكتروني : {branch.email}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
            رقم الهاتف : {branch.phone}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
            الرقم البريدي : {branch.postal}
          </p>
        </div>

        <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
          <iframe
            src={branch.google_map}
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

      {branch.id == 2 ? (
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
                {Jaddah2.location_map.ar}
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
 </>:<>
 
 
 
 <div className="pt-20   ">
        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
          {branch?.name.en}

        </h3>
        <hr className="border-green-700 border-t-2 w-40 mx-auto" />
        <hr className="border-green-700 border-t-2 w-20 my-2 mx-auto" />
      </div>
      <div className=" w-full flex flex-col overflow-hidden lg:flex-row bg-blue-50/50  my-8 ">
        <div className="w-full lg:w-1/2 flex  justify-center   flex-col   p-5">
          <p className="text-gray-800 text-lg  m-2 flex font-semibold items-center ">
            <i className="fa-solid fa-location-dot  text-blue-600 text-2xl m-2"></i>
            {branch.location_map.en}
          </p>
          <p className="text-gray-800 text-lg  m-2 my-4 flex font-semibold items-center ">
            <i className="fas fa-envelope text-blue-600 text-xl m-2"></i>
               Email : {branch.email}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-phone-flip text-blue-600 text-2xl m-2"></i>
              Phone : {branch.phone}
          </p>
          <p className="text-gray-800 text-lg m-2  flex font-semibold items-center ">
            <i className=" fas fa-envelopes-bulk text-blue-600 text-2xl m-2"></i>
              Postal : {branch.postal}
          </p>
        </div>

        <div className="w-full overflow-hidden lg:w-1/2 flex justify-center items-center ">
          <iframe
            src={branch.google_map}
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

      {branch.id == 2 ? (
        <>
        
        <h3 className="text-center font-bold text-blue-900 my-3 text-2xl lg:text-4xl">
         Jeddah Second Branch
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
 
 </>}

    </>
  );
}


