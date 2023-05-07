import React from "react";
import { useNavigate } from "react-router-dom";
import Candidate from "../../svgs/Candidate";
import LogoSvg from "../../svgs/logoSvg";
import Recruiter from "../../svgs/Recruiter";

const Choose = () => {
  const navigation = useNavigate();

  return (
    <div className="px-7 flex flex-col items-center bg-[#F4FAFF] min-h-screen">
      <LogoSvg height="80" />

      <h2 className="my-4 tracking-wider">
        <span className="text-2xl text-second font-medium">Who</span>{" "}
        <span className="text-lg">are you ??</span>
      </h2>

      <div className="flex justify-around w-full mt-6 ">
        <input
          type="radio"
          name="official"
          id="candidate"
          value={"candidate"}
          //   onChange={()=>}
          className="absolute opacity-0"
        />
        <label
          className="card p-6 bg-white rounded-2xl shadow-md transition duration-200 hover:bg-[#90EEFB] ease-in hover:shadow-xl"
          htmlFor="candidate"
        >
          <Candidate />
          <h5 className="mt-4 text-center towards-down text-sm font-medium text-linked-in">
            Candidate
          </h5>
        </label>

        <input
          type="radio"
          name="official"
          id="recruiter"
          value={"Recruiter"}
          className="absolute opacity-0"
        />
        <label
          htmlFor="recruiter"
          className="card p-6 hover:bg-[#F2CBFF] ease-in bg-white rounded-2xl shadow-md transition duration-200 hover:shadow-xl"
        >
          <Recruiter />
          <h5 className="mt-4 towards-down text-center  text-sm font-medium text-purple-900">
            Recruiter
          </h5>
        </label>
      </div>

      <div className="w-full mt-6 flex justify-center">
        <button
          className="choose-gradient py-2  text-sm text-white rounded-2xl w-[70%] "
          onClick={() => navigation("/candidates/options")}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Choose;
