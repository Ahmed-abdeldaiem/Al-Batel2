import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import ScrollToTop from "../ScrollTop/ScrollTop";
import VedioModal from "../VedioModal/VedioModal";
import style from "./LayOut.module.css";

export default function LayOut() {
  const [counter, setcounter] = useState(0);

  return (
    <>
      <div className="bg-[#f2f1ef]">
        <VedioModal />

        <NavBar />

        {/* <div className="container mt-20 min-h-96"> */}
        <ScrollToTop />
        <Outlet />

        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}
