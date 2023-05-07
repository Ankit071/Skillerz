import LogoSvg from "../../svgs/logoSvg";
import OptionsPageSvg from "../../svgs/OptionsPageSvg";
import { useNavigate } from "react-router-dom";
const CandidateOptions = () => {
  const navigation = useNavigate();

  const redirect_to_create = () => {
    navigation("/candidates/email_verification");
  };
  const redirect_to_login = () => {
    navigation("/candidates/login");
  };

  return (
    <div className="px-8 bg-[#F4FAFF]  py-2 h-full sm:min-h-0 min-h-screen ">
      <div className=" flex flex-col justify-center items-center  gap-2 ">
        <LogoSvg className="w-[15rem] h-32 mt-4" />

        <div className="w-full ">
          <OptionsPageSvg />

          <div className="w-full  ">
            <button
              className=" block main_btn main_btn_color  py-3 text-white text-sm w-full capitalize tracking-widest  "
              onClick={redirect_to_create}
            >
              create new Account
            </button>
            <div className="flex items-center gap-6 my-6">
              <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
              <div className="text-purple-500 font-semibold">Or</div>
              <div className="w-full h-[0.2px] bg-[#9DCDFF]"></div>
            </div>
            <button
              className=" block main_btn main_btn_color  py-3 text-white text-sm w-full capitalize tracking-widest  "
              onClick={redirect_to_login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateOptions;
