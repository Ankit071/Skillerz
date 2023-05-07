import { Icon } from "@iconify/react";
import cn from "classnames";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import HomeLogoLink from "../../logoLinks/HomeLogoLink";
// import LogoSvg from "../../svgs/logoSvg";
import ResumeFileIcon from "../../svgs/ResumeFileIcon";
import { SuccessGreenColor } from "../../svgs/SuccessGreenColor";
import UploadResumeSvg from "../../svgs/UploadResumeSvg";

const UploadResume = () => {
  const navigation = useNavigate();

  const [resume, setResume] = useState<any>();
  const submitPass = () => {
    navigation(-1);
  };
  const changePassword = () => {
    navigation("/main_candidates/education");
  };

  const extractFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setResume(e.target.files[0]);
    }
  };
  return (
    <div className="px-8  py-2 h-full  ">
      {/* <div className=" flex justify-center w-full"> */}
      <h2 className="flex  flex-wrap mt-4  ">
        <div className=" font-medium text-[#C623FF] text-3xl tracking-wide w-full  ">
          Let's
        </div>
        <div className=" w-12  "></div>
        <div className="font-medium text-xl mr-auto ">Upload your Resume</div>
      </h2>
      {/* <div className="flex justify-center mt-4">
        <LogoSvg className="w-[12rem] h-28" />
      </div> */}

      <div className=" flex flex-col justify-center items-center  gap-2 mt-10 ">
        <div className="w-full m ">
          <div className=" block mx-auto w-[80%] h-[15rem] bg-white rounded-lg p-5 upload-box-shadow relative">
            {!resume ? (
              <div className="w-full h-full bg-blue-50 border-dashed border-[0.2px] border-purple-400  rounded-[28px] flex border-spacing flex-col justify-center items-center p-6">
                <input
                  type="file"
                  onChange={extractFile}
                  name=""
                  className="absolute -translate-x-[500%]"
                  id="resume"
                />
                <label
                  htmlFor="resume"
                  className="w-20 h-[5rem] cursor-pointer "
                >
                  <UploadResumeSvg />
                </label>
                <div className="mt-4">
                  <h4 className="text-xs text-center text-[#7C7C7C] font-medium ">
                    Drag your resume in pdf, jpeg format for start uploading
                  </h4>
                </div>
                <button className="mt-6 py-2 rounded-[10px] px-5 bg-[#933EFF] text-white text-xs cursor-pointer">
                  <label
                    htmlFor="resume"
                    className="w-full h-full cursor-pointer"
                  >
                    Browse files
                  </label>
                </button>
              </div>
            ) : (
              <div
                className={cn(
                  "flex justify-center items-center flex-col ll bg-green-50  p-12 "
                )}
              >
                <SuccessGreenColor />
                <h4 className="text-[#00C874] font-medium mt-5">
                  Successfully Uploaded
                </h4>
              </div>
            )}

            <div
              className={cn(
                "absolute  bg-white left-8 right-8 text-xs  z-10 p-3 rounded-2xl shadow-md  flex flex-col gap-1 pointer-events-none transition duration-200",
                {
                  "opacity-100  pointer-events-auto upload-box-shadow-bottom translate-y-[0.8rem] ":
                    resume,
                  "opacity-0 pointer-events-none -translate-y-full": !resume,
                }
              )}
            >
              <div className="flex gap-2 mt-2 items-center">
                <div className="p-2 bg-[#F2F2F2] rounded-full">
                  <div className="w-[1.2rem] h-[1.2rem]">
                    <ResumeFileIcon />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className=" rounded-xl h-[0.36rem] bg-blue-100 w-full mb-[0.4rem]">
                    <div className="w-1/2 bg-green-400 h-full rounded-xl"></div>
                  </div>
                  <div className="flex justify-between -mt-1  ">
                    <p className="text-[0.6rem]  text-gray-600 font-medium">
                      John doe
                    </p>
                    <p className="text-[0.5rem] font-light text-gray-500">
                      1.36 MB
                    </p>
                  </div>
                </div>
              </div>

              {/* <p className="text-center text-xs text-blue-600 font-medium">
                Upload Successfully
              </p> */}
            </div>
          </div>

          <div className=" mt-16 max-w-xs mx-auto  ">
            <button
              className=" block main_btn main_btn_color  py-[0.5rem] text-white text-sm w-full capitalize tracking-widest hover:-translate-y-1 transition duration-200 hover:shadow-lg  "
              onClick={changePassword}
            >
              Submit
            </button>

            <button
              className="w-full  flex justify-center mt-10 bg-[#03C8A4] rounded-lg text-white py-[0.4rem] items-center hover:-translate-y-1 transition duration-200 hover:shadow-lg "
              onClick={submitPass}
            >
              <Icon icon="ep:back" fontSize={17} className="bg-transparent" />{" "}
              <span className="inline-block ml-3">Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
