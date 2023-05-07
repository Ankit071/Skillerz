import React from "react";

type Props = {
  buttonLabel: string;
  className?: string;
  buttonFunc: () => void;
};

const CustomButtonHome = ({ buttonLabel, className, buttonFunc }: Props) => {
  return (
    <button
      className={
        className +
        " w-[50%] block main_btn main_btn_color  py-[0.60rem] text-white text-sm  capitalize tracking-widest hover:-translate-y-1  shadow1 transition duration-200 btn-animation sm:hidden"
      }
      onClick={buttonFunc}
    >
      {buttonLabel}
    </button>
  );
};

export default CustomButtonHome;
