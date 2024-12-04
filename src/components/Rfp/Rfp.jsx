import style from "./Rfp.module.css";

import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { LanguageContext } from "../../Context/LanguageContext";
import * as emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Rfp() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function sendEmail(formValues) {
    setIsLoading(true);
    const serviceID = "service_dgxxhf6";
    const publicKey = "tpDBNi84p2X5xrrVN";
    const privateKey = "XvUFG3XUKJA7x2FffAKZH";
    const connectedMail = "monafasat@albatelcpa.com";
    const templateID = "template_h0od4ff";
    console.log(formValues);
    emailjs
      .send(serviceID, templateID, formValues, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert("");
        toast.success("Message sent successfully!", {
          duration: 2500,
          position: "top-right",

          // Styling
          style: {
            background: "#4f9f4f",
            color: "#fff",
            fontWeight: "bold",
          },

          // Custom Icon
          icon: "👏",
        });
        setIsLoading(false);
        formik.resetForm(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setContactError("Failed to send message. Please try again later.");
        toast.error("Failed to send message. Please try again later.", {
          duration: 2500,
          position: "top-right",

          // Styling
          style: {
            background: "#ff004f",
            color: "#fff",
            fontWeight: "bold",
          },

          // Custom Icon
          icon: ":(",
        });
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      company_name: "",
      commercial_registration: "",
      tax_registration: "",
      job: "",
      phone: "",
      email: "",
      period_from: "",
      period_to: "",
      message: "",
    },
    validationSchema: Yup.object({
      company_name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      commercial_registration: Yup.string()
        .min(10, " commercial_registration must be 10 numbers")
        .required("commercial_registration is required"),
      tax_registration: Yup.string().min(
        15,
        "tax_registration must be 15 numbers"
      ),
      job: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name or job title is require is required"),
      phone: Yup.string()
        .matches(/^(?:\+966|0)?5\d{8}$/, "invalid Phone")
        .required("phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
      period_from: Yup.date().typeError("Invalid date format"),
      period_to: Yup.date()
        .typeError("Invalid date format")
        .test(
          "is-after",
          "End date must be after start date",
          function (value) {
            const { period_from } = this.parent;
            return value && period_from
              ? new Date(value) > new Date(period_from)
              : true;
          }
        ),
    }),
    onSubmit: sendEmail,
  });

  const isAnyInputEmpty =
    !formik.values.company_name ||
    !formik.values.commercial_registration ||
    !formik.values.job ||
    !formik.values.email ||
    !formik.values.job ||
    !formik.values.message;

  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="bg-[url('https://arnoldhill.co.uk/hubfs/Five-reasons-why-conducting-regular-business-audit-is-essential-for-business-growth.png')] flex w-full justify-center items-center lg:justify-end bg-no-repeat bg-cover  relative">
            <div className="absolute inset-0 bg-gradient-to-l from-green-300/40  to-blue-800/30 opacity-70 z-10"></div>

            <div className="lg:w-7/12 md:w-10/12 z-20">
              <div className=" py-20">
                <h2 className="text-blue-900 font-bold text-3xl lg:text-5xl text-center my-8">
                  طلب عرض سعر
                </h2>

                {contactError ? (
                  <div
                    className="p-4 text-center w-3/4 mx-auto mt-3 mb-3 text-sm text-red-800 rounded-lg bg-red-200/50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {contactError}
                  </div>
                ) : null}

                <form
                  className="w-full md:w-10/12 lg:w-8/12  mx-auto text-right  rounded-3xl p-4"
                  onSubmit={formik.handleSubmit}
                >
                  {/* اسم الشركة */}
                  <div className="p-2 ">
                    <div className="relative z-0   mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.company_name}
                        type="text"
                        name="company_name"
                        id="company_name"
                        className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="company_name"
                        className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950 ark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        إسم الشركة
                      </label>

                      {formik.errors.company_name &&
                      formik.touched.company_name ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.company_name}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* رقم السجل التجاري */}

                  <div className="p-2 ">
                    <div className="relative z-0   mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.commercial_registration}
                        type="number"
                        name="commercial_registration"
                        id="commercial_registration"
                        className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="commercial_registration"
                        className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        رقم السجل التجاري
                      </label>

                      {formik.errors.commercial_registration &&
                      formik.touched.commercial_registration ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.commercial_registration}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* رقم التسجيل الضريبي */}
                  <div className="p-2 ">
                    <div className="relative z-0   mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.tax_registration}
                        type="number"
                        name="tax_registration"
                        id="tax_registration"
                        className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="tax_registration"
                        className="peer-focus:font-medium absolute text-sm md:text-lg font-semibold text-gray-950 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        رقم التسجيل الضريبي
                      </label>

                      {formik.errors.tax_registration &&
                      formik.touched.tax_registration ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.tax_registration}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* <hr className='text-green-800 w-full border border-green-900/50 my-7'/> */}

                  {/*   وظيفة مسؤول التواصل */}
                  <div className="p-2 ">
                    <div className="relative z-0   mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.job}
                        type="text"
                        name="job"
                        id="job"
                        className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="job"
                        className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        الوظيفة
                      </label>

                      {formik.errors.job && formik.touched.job ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.job}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* رقم الجوال */}
                  <div className="p-2 ">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        type="tel"
                        name="phone"
                        id="phone"
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="phone"
                        className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        رقم الجوال{" "}
                      </label>
                      {formik.errors.phone && formik.touched.phone ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.phone}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* البريد الإلكتروني */}
                  <div className="p-2 ">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        البريد الإلكتروني
                      </label>
                      {formik.errors.email && formik.touched.email ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/*الرسالة  */}

                  <div className="p-2 ">
                    <div className="relative z-0 w-full mb-5 group">
                      <textarea
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        name="message"
                        id="message"
                        rows="4"
                        className="block pt-7 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer resize-none overflow-y-auto"
                        placeholder="اكتب تفاصيل ميزان المراجعة   "
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute font-semibold text-sm md:text-lg  text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        الرسالة
                      </label>
                      {formik.errors.message && formik.touched.message ? (
                        <div
                          className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                          role="alert"
                        >
                          {formik.errors.message}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* الفترة الزمنية */}

                  <div className="p-2 flex gap-6 ">
                    {/* from */}
                    <DatePicker
                      showIcon
                      selected={formik.values.period_from}
                      onChange={(date) =>
                        formik.setFieldValue("period_from", date)
                      }
                      onBlur={() => formik.setFieldTouched("period_from", true)}
                      // onChange={(date) => setStartDate(date)}
                      className="bg-gray-50/50 text-end relative rounded-xl focus:border-green-700 focus-visible:border-green-400 focus:text-green-900"
                      placeholderText="من"
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      scrollableYearDropdown
                      id="period_from"
                      name="period_from"
                    />
                    <label
                      htmlFor="period_from"
                      className="peer-focus:font-medium absolute font-semibold text-sm md:text-lg text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      الفترة من
                    </label>
                    {formik.errors.period_from && formik.touched.period_from ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.period_from}
                      </div>
                    ) : null}

                    {/* to */}

                    <DatePicker
                      showIcon
                      // selected={endDate}
                      // onChange={(date) => setEndDate(date)
                      className="bg-gray-50/50 text-end  relative rounded-xl focus:border-green-700 focus-visible:border-green-400 focus:text-green-900"
                      placeholderText="إلى"
                      dateFormat="dd/MM/yyyy"
                      showYearDropdown
                      showMonthDropdown
                      scrollableYearDropdown
                      selected={formik.values.period_to}
                      onChange={(date) =>
                        formik.setFieldValue("period_to", date)
                      }
                      onBlur={() => formik.setFieldTouched("period_to", true)}
                      id="to"
                      name="period_to"
                    />

                    <label
                      htmlFor="period_to"
                      className="peer-focus:font-medium absolute end-1 font-semibold text-sm md:text-lg text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      الفترة الى
                    </label>
                  </div>
                  {formik.errors.period_to && formik.touched.period_to ? (
                    <div
                      className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {formik.errors.period_to}
                    </div>
                  ) : null}

                  {formik.errors.period_from && formik.touched.period_from ? (
                    <div
                      className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {formik.errors.period_from}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-green-500 ${
                      formik.isValid && !isAnyInputEmpty
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!formik.isValid || isAnyInputEmpty}
                  >
                    {isLoading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      "إرسال الطلب"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="bg-[url('https://arnoldhill.co.uk/hubfs/Five-reasons-why-conducting-regular-business-audit-is-essential-for-business-growth.png')] flex w-full justify-center items-center lg:justify-start bg-no-repeat bg-cover  relative">
          <div className="absolute inset-0 bg-gradient-to-l from-green-300/40  to-blue-800/30 opacity-70 z-10"></div>

          <div className="lg:w-7/12 md:w-10/12 z-20">
            <div className=" py-20">
              <h2 className="text-blue-900 tracking-widest2 font-bold  text-3xl lg:text-6xl text-center my-8">
              RFP
              </h2>

              {contactError ? (
                <div
                  className="p-4 text-center w-3/4 mx-auto mt-3 mb-3 text-sm text-red-800 rounded-lg bg-red-200/50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  {contactError}
                </div>
              ) : null}

              <form
                className="w-full md:w-10/12 lg:w-8/12  mx-auto text-right  rounded-3xl p-4"
                onSubmit={formik.handleSubmit}
              >
                {/* اسم الشركة */}
                <div className="p-2 ">
                  <div className="relative z-0   mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.company_name}
                      type="text"
                      name="company_name"
                      id="company_name"
                      className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="company_name"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                       Company Name  
                    </label>

                    {formik.errors.company_name &&
                    formik.touched.company_name ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.company_name}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* رقم السجل التجاري */}

                <div className="p-2 ">
                  <div className="relative z-0   mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.commercial_registration}
                      type="number"
                      name="commercial_registration"
                      id="commercial_registration"
                      className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="commercial_registration"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                       Commercial Registration
                    </label>

                    {formik.errors.commercial_registration &&
                    formik.touched.commercial_registration ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.commercial_registration}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* رقم التسجيل الضريبي */}
                <div className="p-2 ">
                  <div className="relative z-0   mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.tax_registration}
                      type="number"
                      name="tax_registration"
                      id="tax_registration"
                      className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="tax_registration"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                         Tax Registration 
                    </label>

                    {formik.errors.tax_registration &&
                    formik.touched.tax_registration ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.tax_registration}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* <hr className='text-green-800 w-full border border-green-900/50 my-7'/> */}

                {/*   وظيفة مسؤول التواصل */}
                <div className="p-2 ">
                  <div className="relative z-0   mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.job}
                      type="text"
                      name="job"
                      id="job"
                      className="block py-2.5 px-0 w-full text-lg text-gray-950 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="job"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Job
                    </label>

                    {formik.errors.job && formik.touched.job ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.job}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* رقم الجوال */}
                <div className="p-2 ">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                          Mobile number
                    </label>
                    {formik.errors.phone && formik.touched.phone ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="p-2 ">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="email"
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email  
                    </label>
                    {formik.errors.email && formik.touched.email ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/*الرسالة  */}

                <div className="p-2 ">
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      name="message"
                      id="message"
                      rows="4"
                      className="block pt-7 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer resize-none overflow-y-auto"
                      placeholder="اكتب تفاصيل ميزان المراجعة   "
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                    {formik.errors.message && formik.touched.message ? (
                      <div
                        className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                        role="alert"
                      >
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* الفترة الزمنية */}

                <div className="p-2 flex gap-6 ">
                  {/* from */}
                  <DatePicker
                    showIcon
                    selected={formik.values.period_from}
                    onChange={(date) =>
                      formik.setFieldValue("period_from", date)
                    }
                    onBlur={() => formik.setFieldTouched("period_from", true)}
                    // onChange={(date) => setStartDate(date)}
                    className="bg-gray-50/50 text-end relative rounded-xl focus:border-green-700 focus-visible:border-green-400 focus:text-green-900"
                    placeholderText="من"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                    id="period_from"
                    name="period_from"
                  />
                  <label
                    htmlFor="period_from"
                    className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      period from
                  </label>
                  {formik.errors.period_from && formik.touched.period_from ? (
                    <div
                      className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {formik.errors.period_from}
                    </div>
                  ) : null}

                  {/* to */}

                  <DatePicker
                    showIcon
                    // selected={endDate}
                    // onChange={(date) => setEndDate(date)
                    className="bg-gray-50/50 text-end  relative rounded-xl focus:border-green-700 focus-visible:border-green-400 focus:text-green-900"
                    placeholderText="إلى"
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    showMonthDropdown
                    scrollableYearDropdown
                    selected={formik.values.period_to}
                    onChange={(date) =>
                      formik.setFieldValue("period_to", date)
                    }
                    onBlur={() => formik.setFieldTouched("period_to", true)}
                    id="to"
                    name="period_to"
                  />

                  <label
                    htmlFor="period_to"
                    className="peer-focus:font-medium absolute text-sm md:text-lg  font-semibold text-gray-950  duration-300 transform -translate-y-6  scale-75 top-1 left-1 -z-10 origin-[0]  peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                       period to
                  </label>
                </div>
                {formik.errors.period_to && formik.touched.period_to ? (
                  <div
                    className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.period_to}
                  </div>
                ) : null}

                {formik.errors.period_from && formik.touched.period_from ? (
                  <div
                    className="p-4 mt-3 mb-4 text-sm text-red-800 rounded-lg bg-red-100/60 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {formik.errors.period_from}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-green-500 ${
                    formik.isValid && !isAnyInputEmpty
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!formik.isValid || isAnyInputEmpty}
                >
                  {isLoading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "إرسال الطلب"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
      )}
    </>
  );
}
