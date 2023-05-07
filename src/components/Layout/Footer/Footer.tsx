import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#1D3E73] p-5 mt-4">
      <div className=" flex gap-2 md:justify-end  items-center rounded-2xl   justify-center mb-12 px-4 md:pt-5 ">
        <div className="flex gap-2 items-center rounded-2xl pr-4 bg-white w-[90%] md:w-[25%]">
          <input
            type="email"
            name=""
            placeholder="Enter your email"
            className="bg-transparent w-full py-[0.5rem] md:py-[0.55rem] text-xs  px-4 "
            id=""
          />

          <button className="bg-[#00DDFB] rounded-xl px-4 py-[0.15rem] text-white text-xs h-full ">
            {/* <Icon
          icon={"ic:baseline-alternate-email"}
          className="w-full h-full"
        /> */}
            subscribe
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-4 ">
        {[
          {
            head: "Company",
            links: ["About us", "Contact us", "Events"],
          },
          {
            head: "Product",
            links: ["Small business", "Customers"],
          },
          {
            head: "Support",
            links: ["Partner with Us", "FAQS", "Resources"],
          },
        ].map((item, i) => (
          <div className="mt-6 md:m-0" key={i}>
            <h3 className="text-center mb-6 tracking-wide font-light text-sm text-white">
              {item.head}
            </h3>
            <ul className=" flex flex-col justify-center gap-4">
              {item.links.map((link, si) => (
                <li className=" flex justify-center" key={si}>
                  <Link
                    to={""}
                    className=" text-xs text-center text-gray-100 hover:text-gray-300 font-extralight tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full h-[0.5px] bg-gray-400 opacity-40 my-6"></div>
      <p className="text-[0.60rem] md:text-xs md:my-4 my-2 mt-4 text-center text-white font-thin md:font-extralight tracking-widest md:py-4 md:px-2 ">
        RecruiterX © 2022 – Privacy Policy – Terms of Use
      </p>
    </div>
  );
};

export default Footer;
