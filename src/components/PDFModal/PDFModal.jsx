import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

export default function PDFModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);



  return (
    <>
      <div className="fixed bottom-16 left-4 z-50 cursor-pointer">
      <a  className="relative flex h-11 w-11" href="https://drive.google.com/file/d/16r0v2HODzY7ZLRVR-Ks4njjOFUzsMMta/view?usp=drive_link" target={"_blank"}>
      
          {/* Green ping circle behind */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-90"></span>

          {/* Static icon/image on top */}
          <span className="relative inline-flex rounded-full">
            <img src="/pdf.webp" alt="PDF Icon" className="w-11 h-11" />
          </span>
          </a>
      
      </div>

   
    </>
  );
}
