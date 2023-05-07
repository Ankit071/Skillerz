import { Icon } from "@iconify/react";
import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cn from "classnames";
// import HomeLogoLink from "../../logoLinks/HomeLogoLink";
import CustomInput from "../../CustomInput/CustomInput";
import LogoSvg from "../../svgs/logoSvg";
import CustomToggle from "../../CustomToggles/CustomToggle";
const CandidateEmailVerification = () => {
  const [openModal, setModal] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const navigation = useNavigate();

  const submitEmail = () => {
    setModal((prev) => !prev);
    if (openModal) {
      navigation("/candidates/set_password");
    }
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const changeToggle = () => {
    setToggle((prev) => !prev);
    // console.log(toggle);
  };
  return (
    <>
      <div className="px-8 bg-[#F4FAFF]  py-4 h-full sm:min-h-0 min-h-screen  ">
        <h2 className="flex  flex-wrap  ">
          <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
            Let's
          </div>
          <div className=" w-12  "></div>
          <div className="font-medium text-xl mr-auto ">
            Pick up a signUp options
          </div>
        </h2>

        <div className=" flex flex-col justify-center items-center  gap-2 mt-4 ">
          <LogoSvg className="w-[12rem] h-28" />

          <div className="w-full m ">
            <div className="flex flex-col gap-5 mb-5">
              <CustomInput
                handlerChange={handlerChange}
                label="Enter your email"
                icon="fluent:mail-all-read-24-filled"
              />
            </div>

            <div className="w-full  ">
              <button
                onClick={submitEmail}
                className=" block main_btn main_btn_color  py-[0.9rem] text-white text-xs w-full capitalize tracking-widest font-medium translateYAnim hover:-translate-y-2 hover:shadow-xl mt-8  "
              >
                Submit email
              </button>

              {/* Create new Account */}
              <p className="flex gap-2 sm:gap-2 w-full justify-center mt-3 ">
                {" "}
                <span className=" text-[#5A5A5A] text-xs font-semibold tracking-wide">
                  {" "}
                  Already have an account?
                </span>{" "}
                <Link
                  to="/candidates/login"
                  className="  text-xs font-semibold tracking-wide text-second"
                >
                  Login
                </Link>{" "}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
                <div className="text-purple-500 font-semibold">Or</div>
                <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="flex flex-col gap-5 my-4 ">
                <button className=" bg-white w-full rounded-2xl scaleAnimGoogle     text-sm flex     items-center ">
                  <div className=" p-[0.35rem] px-4 border_with_boxshadow bg-white rounded-l-2xl google-border   ">
                    <Icon
                      icon="flat-color-icons:google"
                      fontSize={27}
                      // className="bg-green"
                    />{" "}
                  </div>
                  <div className="bg-google hover:bg-[#4376ce] py-[9px]  w-full h-full rounded-r-2xl ">
                    <span className="text-white  tracking-wider font-light capitalize text-xs ">
                      Login with google
                    </span>
                  </div>
                </button>
                {/* Github icon */}
                <button className=" w-full rounded-2xl scaleAnimGithub    text-sm flex      items-center ">
                  <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl github-border   ">
                    <Icon
                      icon="logos:github-icon"
                      fontSize={27}
                      className="bg-transparent"
                    />{" "}
                  </div>
                  <div className="bg-gray-800 hover:bg-gray-900 py-[9px]  w-full h-full rounded-r-2xl ">
                    <span className="text-white  tracking-wider font-light capitalize text-xs">
                      Login with github
                    </span>
                  </div>
                </button>
                <button className=" w-full rounded-2xl scaleAnimLinkedIn    text-sm flex       bg-white ">
                  <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl linkedin-border   ">
                    <Icon
                      icon="logos:linkedin-icon"
                      fontSize={27}
                      className=""
                    />{" "}
                  </div>
                  <div className="bg-linked-in hover:bg-blue-900 py-[9px]  w-full h-full rounded-r-2xl ">
                    <span className="text-white  tracking-wider font-light capitalize text-xs">
                      Login with linkedin
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        onClick={() => {
          setModal(false);
        }}
        className={`${
          openModal ? "fixed inset-0   bg-[rgba(0,0,0,0.7)] z-[1]" : ""
        } `}
      ></div> */}
      <div
        className={cn(
          " fixed bottom-0 policies-box-shadow   rounded-t-xl bg-policies p-3 pb-5 transition duration-300 opacity-100 flex items-center gap-2 z-[2] ",
          {
            "translate-y-[150%] opacity-0 ": !openModal,
          }
        )}
      >
        <CustomToggle
          dimColor="bg-blue-900"
          brightColor="bg-blue-700 shadow-xl"
          toggleBoolean={toggle}
          toggleSet={changeToggle}
        />
        <p className="text-white text-xs tracking-wider font-light">
          By clicking on this button you agree to our terms of services and
          privacy policy
        </p>
        <button
          onClick={() => setModal(false)}
          className="bg-red-500 w-6 h-6 p-2 rounded-xl"
        >
          <Icon
            icon="bytesize:close"
            fontSize={9}
            color={"white"}
            className="bg-transparent"
          />
        </button>
      </div>
    </>
  );
};

export default CandidateEmailVerification;
