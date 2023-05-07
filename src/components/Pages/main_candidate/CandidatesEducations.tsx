import { Icon } from "@iconify/react";
import React from "react";
import ComboBoxInline from "../../ComboBoxComponents/ComboBoxInline";

const CandidatesEducations = () => {
  return (
    <main className="px-8">
      <h2 className="my-4 text-purple-600 font-medium text-xl ">
        Mention Your Educations
      </h2>

      <div className="p-5 bg-white rounded-3xl education-card relative ">
        <button className="absolute bg-blue-900 p-2 rounded-full right-0 -top-4 text-white">
          <Icon icon="clarity:add-line" color="white" width={26} />
        </button>
        <h2 className=" text-[#C623FF] font-medium mb-2">Education</h2>
        <p className="text-xs px-2 tracking-wide font-medium leading-5">
          I completed in Finance from Ghasidas ChamanBahar <ComboBoxInline /> in
          2010
        </p>
      </div>
    </main>
  );
};

export default CandidatesEducations;
