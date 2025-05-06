import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [openDropdownLanguage, setOpenDropdownLanguage] = useState(null); // Track which dropdown is open
  const [openDropdown2, setOpenDropdown2] = useState(false); // Track which dropdown is open
  const [currentLanguage, setCurrentLanguage] = useState("ar");

  const [isOpen, setIsOpen] = useState(false);

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  const toggleDropdown = (dropdownName) => {
    if (openDropdownLanguage === dropdownName) {
      setOpenDropdownLanguage(null); // Close if the same dropdown is clicked
    } else {
      setOpenDropdownLanguage(dropdownName); // Open the dropdown
    }
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  // Function to switch languages
  const switchLanguage = (language) => {
    setCurrentLanguage(language);
    // Close language dropdown after selecting a language
    setOpenDropdownLanguage(null);
  };

  // Handle clicks outside the menu or dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest(".menu-toggle-button")
      ) {
        setIsOpen(false);
      }

      // Close the dropdown if click outside of the dropdowns
      if (
        !event.target.closest("#dropdownNavbarLink") &&
        !event.target.closest("#dropdownNavbar")
      ) {
        setOpenDropdown(null); // Close dropdowns on large screens
      }

      // Close the mobile submenu if click outside the submenu
      if (
        openDropdown2 &&
        !event.target.closest("#dropdownNavbarLinkMobile") &&
        !event.target.closest("#dropdownNavbar")
      ) {
        setOpenDropdown2(false); // Close submenu
      }
      // close dropdown menu if click outside
      if (
        openDropdownLanguage &&
        !event.target.closest("#languageDropdownButton") &&
        !event.target.closest("#languageDropdownMenu")
      ) {
        setOpenDropdownLanguage(null);
      }
    };

    // Add event listener on mount
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, openDropdown2, openDropdownLanguage]);

  return (
    <>
      {dir == "rtl" ? (
        <>
          <header className="bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 backdrop-blur-lg shadow-sm shadow-gray-500 fixed top-0 z-50 w-full">
            <div className="mx-auto flex justify-center md:justify-evenly h-16 w-full items-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
              <div className="flex w-full items-center justify-start gap-2 lg:gap-16 mx-8 lg:text-xl">
                <Link
                  className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5 md:border-e-4 md:rounded-e-full  md:border-blue-800"
                  to=""
                >
                  <img
                    src="/BatelLogo1.png"
                    className="w-20 inline-block px-3"
                    alt="Albatel Logo"
                  />
                  <span className="text-green-600 mx-3">الباتل</span>
                </Link>

                <div>
                  <nav aria-label="Global" className="hidden lg:block">
                    <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
                      <li>
                        <NavLink className="p-2 text-gray-700 linkStyle" to="">
                          الرئيسية
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="p-2 text-gray-700 text-nowrap linkStyle"
                          to="about"
                        >
                          من نحن
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="p-2 text-gray-700 linkStyle"
                          to="services"
                        >
                          خدماتنا{" "}
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="p-2 text-gray-700 linkStyle"
                          to="team"
                        >
                          {" "}
                          فريقنا
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          className="p-2 text-gray-700 text-nowrap linkStyle"
                          to="partners"
                        >
                          شركاء النجاح
                        </NavLink>
                      </li>

                      {/* Dropdown submenu in large screen */}
                      <li className="relative">
                        <button
                          onClick={() => toggleDropdown("company")}
                          id="dropdownNavbarLink"
                          className="flex linkStyle text-nowrap items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
                        >
                          تواصل معنا
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>

                        <div
                          className={`absolute -bottom-34 mt-2 z-10 shadow-sm shadow-gray-500 bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 transition-all duration-500 ${
                            openDropdown === "company"
                              ? "opacity-100 max-h-60"
                              : "opacity-0 max-h-0"
                          } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg overflow-hidden rounded-lg w-44`}
                        >
                          <ul className="py-2 text-sm text-gray-700">
                            <li>
                              <NavLink
                                to="contact"
                                className="block text-gray-700 linkStyle px-4 py-2"
                              >
                                تواصل
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="RFP"
                                className="block text-gray-700 px-4 text-nowrap py-2 linkStyle"
                              >
                                طلب عرض سعر
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="jobs"
                                className="block text-gray-700 text-nowrap px-4 py-2 linkStyle"
                              >
                                وظائف متاحة
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Toggle Button between Arabic and English */}
              <div className="flex items-center lg:me-8 md:order-2">
                <button
                  type="button"
                  onClick={() => toggleDropdown("language")}
                  className="border border-blue-800 inline-flex text-nowrap relative px-5 items-center bg-blue-100 bg-opacity-50 backdrop-blur-lg font-medium justify-center py-2 text-sm text-gray-900 transition-all duration-700 rounded-lg cursor-pointer hover:bg-gray-100"
                  id="languageDropdownButton"
                >
                  <img
                    src={
                      currentLanguage === "en"
                        ? "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                        : "https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                    }
                    className="w-5 h-5 rounded-full me-3"
                    alt={currentLanguage === "en" ? "English" : "Arabic"}
                  />
                  {currentLanguage === "en" ? "English (US)" : "العربية"}
                </button>

                {/* Dropdown for Language */}
                <div
                  className={`absolute top-12 my-4 z-50 overflow-hidden text-base list-none bg-blue-100 bg-opacity-80 backdrop-blur-lg divide-y divide-gray-100 rounded-lg shadow-sm shadow-green-200 transition-all duration-500  ${
                    openDropdownLanguage === "language"
                      ? "opacity-100 max-h-60"
                      : "opacity-0 max-h-0"
                  }`}
                  id="languageDropdownMenu"
                >
                  <ul className="py-2 font-medium">
                    <li>
                      <button
                        onClick={() => {
                          switchLanguage("en");
                          leftToRight();
                        }}
                        className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-500 w-full"
                      >
                        <img
                          src="https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                          className="h-4 w-4 rounded-full me-2"
                          alt="English"
                        />
                        English (US)
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          switchLanguage("ar");
                          rightToLeft();
                        }}
                        className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500 transition-all duration-500 w-full "
                      >
                        <img
                          src="https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                          className="h-4 w-4 rounded-full me-2"
                          alt="Arabic"
                        />
                        العربية
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Menu button for small screens */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="menu-toggle-button block rounded bg-gray-300 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* menu in small screen */}
            <div
              className={`${
                isOpen ? "max-h-screen" : "max-h-0"
              } lg:hidden overflow-hidden text-center transition-max-height duration-700 ease-in-out`}
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
                <NavLink
                  className="p-2 linkStyle"
                  onClick={() => setIsOpen(false)}
                  to=""
                >
                  الرئيسية
                </NavLink>
                <NavLink
                  className="p-2 linkStyle"
                  onClick={() => setIsOpen(false)}
                  to="about"
                >
                  من نحن
                </NavLink>

                <NavLink
                  className="p-2 linkStyle"
                  onClick={() => setIsOpen(false)}
                  to="services"
                >
                  خدماتنا
                </NavLink>
                <NavLink
                  className="p-2 linkStyle"
                  onClick={() => setIsOpen(false)}
                  to="team"
                >
                  فريقنا
                </NavLink>
                <NavLink
                  className="p-2 linkStyle"
                  onClick={() => setIsOpen(false)}
                  to="partners"
                >
                  شركاء النجاح
                </NavLink>

                <button
                  onClick={() => setOpenDropdown2(!openDropdown2)}
                  id="dropdownNavbarLinkMobile"
                  className="flex relative p-2 linkStyle items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >
                  تواصل معنا
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown menu in small screen */}
                <div
                  id="dropdownNavbar"
                  className={`absolute -bottom-28 end-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                    openDropdown2
                      ? "opacity-100 max-h-40 "
                      : "opacity-0 max-h-0 "
                  } font-semibold transition-all duration-500  shadow-gray-500 bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 backdrop-blur-lg  shadow-sm  rounded-lg  w-44`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <NavLink
                        to="contact"
                        onClick={() => {
                          setOpenDropdown2(false);
                          setIsOpen(false);
                        }}
                        className="block linkStyle px-4 py-2"
                      >
                        تواصل
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="RFP"
                        onClick={() => {
                          setOpenDropdown2(false);
                          setIsOpen(false);
                        }}
                        className="block px-4 py-2 linkStyle"
                      >
                        طلب عرض سعر
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="jobs"
                        onClick={() => {
                          setOpenDropdown2(false);
                          setIsOpen(false);
                        }}
                        className="block px-4 py-2 linkStyle"
                      >
                        وظائف متاحة
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        <header className="bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 backdrop-blur-lg shadow-sm shadow-gray-500 fixed top-0 z-50 w-full">
          <div className="mx-auto flex justify-center md:justify-evenly h-16 w-full items-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex w-full items-center justify-start gap-2 lg:gap-16 mx-8 lg:text-xl">
              <Link
                className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5 md:border-e-4 md:rounded-e-full  md:border-blue-600"
                to=""
              >
                <img
                    src="/BatelLogo1.png"
                    className="w-20 inline-block px-3"
                    alt="Albatel Logo"
                  />
                <span className="text-green-600 mx-3">Al-Batel</span>
              </Link>

              <div>
                <nav aria-label="Global" className="hidden lg:block">
                  <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
                    <li>
                      <NavLink className="p-2 text-gray-700 linkStyle" to="">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="p-2 text-gray-700 text-nowrap linkStyle"
                        to="about"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="p-2 text-gray-700 linkStyle"
                        to="services"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="p-2 text-gray-700 linkStyle"
                        to="team"
                      >
                        {" "}
                        Our Team
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className="p-2 text-gray-700 text-nowrap linkStyle"
                        to="partners"
                      >
                        Partners
                      </NavLink>
                    </li>

                    {/* Dropdown submenu in large screen */}
                    <li className="relative">
                      <button
                        onClick={() => toggleDropdown("company")}
                        id="dropdownNavbarLink"
                        className="flex linkStyle text-nowrap items-center justify-between w-full py-2 px-3 text-gray-700 rounded"
                      >
                        Contact Us
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        className={`absolute -bottom-34 mt-2 z-10 shadow-sm shadow-gray-500 bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 transition-all duration-500 ${
                          openDropdown === "company"
                            ? "opacity-100 max-h-60"
                            : "opacity-0 max-h-0"
                        } font-semibold bg-blue-100 bg-opacity-90 backdrop-blur-lg overflow-hidden rounded-lg w-44`}
                      >
                        <ul className="py-2 text-sm text-gray-700">
                          <li>
                            <NavLink
                              to="contact"
                              className="block text-gray-700 linkStyle px-4 py-2"
                            >
                              Contact
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="RFP"
                              className="block text-gray-700 px-4 text-nowrap py-2 linkStyle"
                            >
                              RFP
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="jobs"
                              className="block text-gray-700 text-nowrap px-4 py-2 linkStyle"
                            >
                              Available Jobs
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Toggle Button between Arabic and English */}
            <div className="flex items-center lg:me-8 md:order-2">
              <button
                type="button"
                onClick={() => toggleDropdown("language")}
                className="border border-blue-800 inline-flex text-nowrap relative px-5 items-center bg-blue-100 bg-opacity-50 backdrop-blur-lg font-medium justify-center py-2 text-sm text-gray-900 transition-all duration-700 rounded-lg cursor-pointer hover:bg-gray-100"
                id="languageDropdownButton"
              >
                <img
                  src={
                    currentLanguage === "en"
                      ? "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                      : "https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                  }
                  className="w-5 h-5 rounded-full me-3"
                  alt={currentLanguage === "en" ? "English" : "Arabic"}
                />
                {currentLanguage === "en" ? "English (US)" : "العربية"}
              </button>

              {/* Dropdown for Language */}
              <div
                className={`absolute top-12 my-4 z-50 overflow-hidden text-base list-none bg-blue-100 bg-opacity-80 backdrop-blur-lg divide-y divide-gray-100 rounded-lg shadow-sm shadow-green-200 transition-all duration-500 ${
                  openDropdownLanguage === "language"
                    ? "opacity-100 max-h-60"
                    : "opacity-0 max-h-0"
                }`}
                id="languageDropdownMenu"
              >
                <ul className="py-2 font-medium">
                  <li>
                    <button
                      onClick={() => {
                        switchLanguage("en");
                        leftToRight();
                      }}
                      className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-all duration-500 w-full"
                    >
                      <img
                        src="https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFsS0JBaTJVbEwuX0FDX1NMMTUwMF8uanBn.jpg"
                        className="h-4 w-4 rounded-full me-2"
                        alt="English"
                      />
                      English (US)
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        switchLanguage("ar");
                        rightToLeft();
                      }}
                      className="flex text-nowrap items-center px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-500 transition-all duration-500 w-full"
                    >
                      <img
                        src="https://m.media-amazon.com/images/I/61eIGogZI2L.jpg"
                        className="h-4 w-4 rounded-full me-2"
                        alt="Arabic"
                      />
                      العربية
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Menu button for small screens */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-toggle-button block rounded bg-gray-300 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* menu in small screen */}
          <div
            className={`${
              isOpen ? "max-h-screen" : "max-h-0"
            } lg:hidden overflow-hidden text-center transition-max-height duration-700 ease-in-out`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
              <NavLink
                className="p-2 linkStyle"
                onClick={() => setIsOpen(false)}
                to=""
              >
                Home
              </NavLink>
              <NavLink
                className="p-2 linkStyle"
                onClick={() => setIsOpen(false)}
                to="about"
              >
                About Us
              </NavLink>

              <NavLink
                className="p-2 linkStyle"
                onClick={() => setIsOpen(false)}
                to="services"
              >
                Services
              </NavLink>
              <NavLink
                className="p-2 linkStyle"
                onClick={() => setIsOpen(false)}
                to="team"
              >
                Our Team
              </NavLink>
              <NavLink
                className="p-2 linkStyle"
                onClick={() => setIsOpen(false)}
                to="partners"
              >
                partners
              </NavLink>

              <button
                onClick={() => setOpenDropdown2(!openDropdown2)}
                id="dropdownNavbarLinkMobile"
                className="flex relative p-2 linkStyle items-center justify-center w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
              >
                Contact Us
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown menu in small screen */}
              <div
                id="dropdownNavbar"
                className={`absolute -bottom-28 end-1/2 -translate-x-1/2 z-10 transition-all duration-500 ${
                  openDropdown2 ? "opacity-100 max-h-40 " : "opacity-0 max-h-0 "
                } font-semibold transition-all duration-500  shadow-gray-500 bg-gray-100 lg:bg-gray-300 lg:bg-opacity-60 bg-opacity-80 backdrop-blur-lg  shadow-sm  rounded-lg  w-44`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <NavLink
                      to="contact"
                      onClick={() => {
                        setOpenDropdown2(false);
                        setIsOpen(false);
                      }}
                      className="block linkStyle px-4 py-2"
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="RFP"
                      onClick={() => {
                        setOpenDropdown2(false);
                        setIsOpen(false);
                      }}
                      className="block px-4 py-2 linkStyle"
                    >
                      RFP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="jobs"
                      onClick={() => {
                        setOpenDropdown2(false);
                        setIsOpen(false);
                      }}
                      className="block px-4 py-2 linkStyle"
                    >
                      Available Jobs
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
