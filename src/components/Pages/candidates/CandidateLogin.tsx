import { Icon } from "@iconify/react";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../../CustomInput/CustomInput";
import PasswordInput from "../../CustomInput/PasswordInput";
// import HomeLogoLink from "../../logoLinks/HomeLogoLink";
import HomeLogo1 from "../../svgs/HomeLogo1";
import LogoSvg from "../../svgs/logoSvg";
const CandidateLogin = () => {
  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div className="px-8 bg-[#F4FAFF]  py-4 h-full sm:min-h-0 min-h-screen  ">
      <div className="md:flex md:mx-auto md:max-w-7xl justify-between items-center ">
        <div className="md:w-[35%] sm:w-[45%] w-full">
          <h2 className="flex  flex-wrap  ">
            <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
              Let's
            </div>
            <div className=" w-12  "></div>
            <div className="font-medium text-xl mr-auto ">
              get login for new updates
            </div>
          </h2>

          <div className=" flex flex-col justify-center items-center mt-4    ">
            <LogoSvg className="w-[11rem] h-24" />
            {/* <HomeLogoLink height="40" className=" mb-8" /> */}
            <div className="w-full m ">
              <div className="flex flex-col gap-5 mb-5 ">
                <CustomInput
                  handlerChange={handlerChange}
                  label="Enter your email"
                  icon="fluent:mail-all-read-24-filled"
                />
                <PasswordInput
                  label="Enter your password"
                  icon="ic:sharp-key"
                  passwordClosedIcon="ic:sharp-key-off"
                />
              </div>

              <div className="w-full  ">
                <button className="  block main_btn main_btn_color  py-3 text-white text-sm w-full capitalize tracking-widest translateYAnim  mt-8 hover:shadow-xl duration-200 ">
                  Login
                </button>

                {/* Forgot password */}
                <p className="flex gap-2 w-full justify-center mt-3 ">
                  {" "}
                  <span className="capitalize text-[#5A5A5A] text-xs font-semibold tracking-wide">
                    {" "}
                    forgot password ?
                  </span>{" "}
                  <a
                    href="/candidates/forgot_password"
                    className="capitalize  text-xs font-semibold tracking-wide text-second"
                  >
                    Reset
                  </a>{" "}
                </p>
                <div className="flex items-center gap-6 my-4">
                  <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
                  <div className="text-purple-500 font-semibold">Or</div>
                  <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
                </div>

                {/* SOCIAL BUTTONS */}
                <div className="flex flex-col gap-5 ">
                  <button className="scaleAnimGoogle bg-white w-full rounded-2xl     text-sm flex     items-center ">
                    <div className=" p-[0.35rem] px-4 border_with_boxshadow bg-white rounded-l-2xl google-border   ">
                      <Icon
                        icon="flat-color-icons:google"
                        fontSize={27}
                        // className="bg-green"
                      />{" "}
                    </div>
                    <div className="bg-google py-[9px]  w-full h-full rounded-r-2xl ">
                      <span className="text-white  tracking-wider font-light capitalize text-xs">
                        Login with google
                      </span>
                    </div>
                  </button>
                  {/* Github icon */}
                  <button className=" scaleAnim w-full rounded-2xl     text-sm flex      items-center  scaleAnimGithub">
                    <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl github-border   ">
                      <Icon
                        icon="logos:github-icon"
                        fontSize={27}
                        className="bg-transparent"
                      />{" "}
                    </div>
                    <div className="bg-gray-800 py-[9px]  w-full h-full rounded-r-2xl ">
                      <span className="text-white  tracking-wider font-light capitalize text-xs ">
                        Login with github
                      </span>
                    </div>
                  </button>
                  <button className=" scaleAnimLinkedIn w-full rounded-2xl    text-sm flex       bg-white ">
                    <div className=" p-[0.35rem] px-4 bg-white rounded-l-2xl linkedin-border   ">
                      <Icon
                        icon="logos:linkedin-icon"
                        fontSize={27}
                        className=""
                      />{" "}
                    </div>
                    <div className="bg-linked-in py-[9px]  w-full h-full rounded-r-2xl ">
                      <span className="text-white  tracking-wider font-light capitalize text-xs">
                        Login with linkedin
                      </span>
                    </div>
                  </button>
                </div>

                {/* Create new Account */}
                <p className="flex  w-full justify-center mt-3 gap-1 ">
                  {" "}
                  <span className="capitalize text-[#5A5A5A] text-xs font-semibold tracking-wide">
                    {" "}
                    Don't have an account?
                  </span>{" "}
                  <Link
                    to="/candidates/email_verification"
                    className="capitalize   font-semibold tracking-wide text-xs text-second"
                  >
                    Create new account
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:block hidden">
          <h2 className="my-4 mb-8 text-4xl  leading-relaxed">
            We Provide{" "}
            <span className="text-7xl text-purple-600 font-medium">Best</span>{" "}
            service for you
            <br />{" "}
            <div className="flex w-full">
              <span className="inline-block text-3xl ml-auto ">
                We will{" "}
                <span className="text-blue-600 font-medium text-5xl capitalize">
                  always
                </span>{" "}
                be with you
              </span>
            </div>
          </h2>

          <HomeLogo1 className="w-full h-[30rem] hidden sm:block" />
        </div>
      </div>
    </div>
  );
};

export default CandidateLogin;
