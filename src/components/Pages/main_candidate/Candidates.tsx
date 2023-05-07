import { Outlet } from "react-router-dom";
import { SmallLogoIcon } from "../../svgs/SmallLogoIcon";

const Candidates = () => {
  return (
    <div className="sm:min-h-0 min-h-screen bg-[#F4FAFF] ">
      <header className="px-6  flex justify-between py-[0.10rem] items-center h-full ">
        <div className="w-[3.5rem] h-full mt-2">
          <SmallLogoIcon />
        </div>

        <button className=" h-full">
          <svg
            className="w-[2rem] h-full inline-block"
            viewBox="0 0 33 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="13.5" width="19.5" height="3" rx="1.5" fill="#6B00F2" />
            <rect y="9" width="33" height="3" rx="1.5" fill="#6B00F2" />
            <rect x="9" y="18" width="24" height="3" rx="1.5" fill="#6B00F2" />
          </svg>
        </button>
      </header>
      <Outlet />
    </div>
  );
};

export default Candidates;
