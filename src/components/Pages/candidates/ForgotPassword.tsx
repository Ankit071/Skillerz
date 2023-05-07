import { Icon } from "@iconify/react";

import { useNavigate } from "react-router-dom";
import HomeLogoLink from "../../logoLinks/HomeLogoLink";

const ForgotPassword = () => {
  const navigation = useNavigate();
  return (
    <div className="px-8 bg-[#F4FAFF]  py-2 h-full sm:min-h-0 min-h-screen ">
      {/* <div className=" flex justify-center w-full"> */}
      <h2 className="flex flex-col mt-4 ">
        <div className=" font-medium text-[#C623FF] text-2xl tracking-wide  ">
          We will always
        </div>

        <div className=" -mt-1 tracking-wide ml-auto    font-medium  text-lg ">
          secured your account
        </div>
      </h2>

      <HomeLogoLink className=" w-full h-20 inline-block mt-4" />

      <div className=" flex flex-col justify-center items-center  gap-2 mt-5 ">
        <div className="w-full m ">
          <div className="flex flex-col gap-5 mb-5">
            <h2 className="text-second font-semibold tracking-wide">
              Reset your password
            </h2>
            <input
              type="text"
              className="w-full py-[0.8rem] px-3 rounded-lg font-medium text-sm input-shadow"
              placeholder="Current password"
            />
            <input
              type="text"
              className="w-full py-[0.8rem] px-3 rounded-lg font-medium text-sm input-shadow"
              placeholder="New password"
            />
            <input
              type="text"
              className="w-full py-[0.8rem] px-3 rounded-lg font-medium text-sm input-shadow"
              placeholder="New password"
            />
          </div>

          <div className="w-full mt-7  ">
            <button className=" block main_btn main_btn_color  py-[0.85rem] text-white text-sm w-full capitalize tracking-widest  ">
              Change password
            </button>
          </div>

          <button
            className="w-full  flex justify-center mt-10 bg-[#03C8A4] rounded-lg text-white py-[0.4rem] items-center"
            onClick={() => navigation(-1)}
          >
            <Icon icon="ep:back" fontSize={17} className="bg-transparent" />
            <span className="inline-block ml-3"> Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
