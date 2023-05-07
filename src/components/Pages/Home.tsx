import {
  useEffect,
  // useEffect,
  // useRef,
  useState,
} from "react";
import VideoImage from "../../assets/img/unsplash.png";
import cn from "classnames";
import CookiesLogo from "../svgs/CookiesLogo";
import LogoSvg from "../svgs/logoSvg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
// import HomeLogo1 from "../svgs/HomeLogo1";
import Footer from "../Layout/Footer/Footer";
import SimpleCard from "../Layout/Cards/SimpleCard";
import Overviews from "../Layout/Overviews/Overviews";
import CustomerReviews from "../Reviews/CustomerReviews";
import HomeCaraousel from "../caraousels/HomeCaraousel";
import LandingSvg from "../svgs/LandingSvg";
import Smile from "../../assets/img/smile.png";
// import HomeLogoLink from "../logoLinks/HomeLogoLink";
import RecruiterCard from "../Reviews/RecruiterCard";
import { MobHomeSvg } from "../svgs/MobHomeSvg";
// import HomeLogo1 from "../svgs/HomeLogo1";
import DesktopLogo from "../svgs/DesktopLogo";
import CustomButtonHome from "../CustomButtons/CustomButtonHome";

const Home = () => {
  const [openModal, setModal] = useState<boolean>(true);
  const [ham, setHam] = useState<boolean>(true);
  const navigation = useNavigate();
  // const controlScroll = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ham) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [ham]);

  const redirect_to_login = () => {
    navigation("candidates/login");
  };
  return (
    <>
      <div
        className={cn("bg-main-light min-h-screen     w-full", {
          "overflow-y-hidden": !ham,
          "overflow-auto": ham,
        })}
      >
        <header className="sticky  top-0 left-0 right-0  flex justify-between items-center px-4 md:hidden py-2  ">
          <div className="w-[28px] h-[28px] sm:hidden z-50"></div>
          <LogoSvg />
          <button
            onClick={() => setHam((prev) => !prev)}
            className={cn("transition duration-200  hamAnim md:hidden ", {})}
          >
            <Icon
              fontSize={28}
              width={32}
              icon={"ci:menu-alt-02"}
              color={"#005ECE"}
              className={cn("transition duration-200", {
                "rotate-45 ": !ham,
                "rotate-0 ": ham,
              })}
            />
          </button>
        </header>

        {/* HEADINGS */}
        <h2 className="px-4 md:px-4 flex  flex-wrap my-6 sm:hidden  ">
          <div className=" font-medium text-[#7C00A7] text-2xl tracking-wide w-full  ">
            RecruiterX is a
          </div>
          <div className=" w-12  "></div>
          <div className="font-medium  ml-auto ">
            Candidate Empowerment Platform
          </div>
          <div className="font-medium text-[#00D1EE] text-lg tracking-wide w-full break-all  ">
            designed to flip recruitment table
          </div>
        </h2>
        <header className=" sticky top-0 left-0 right-0 md-container-7x  sm:hidden md:block w-full    ">
          <div className=" sm:flex  justify-between  w-full h-[80px] bg-transparent hidden items-center">
            <DesktopLogo />
            {/* <LogoSvg className="inline-block h-full  " /> */}
            {/* <HomeLogo1 /> */}
            <nav className="w-[35%] flex items-center ml-auto ">
              <ul className="flex justify-between items-center  w-full">
                <li>
                  <NavLink className={"head-link"} to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"head-link"} to={"/"}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className={"head-link"} to={"/"}>
                    About
                  </NavLink>
                </li>
                <li></li>
              </ul>
            </nav>

            <div className="flex items-center justify-between w-[43%] ">
              <div className="flex items-center bg- rounded-md gap-4 pl-2 bg-gray-200 ">
                <Icon icon="bi:search" color="#CCCCCC" />
                <input
                  type="text"
                  name=""
                  id=""
                  className="rounded-xl bg-transparent h-full py-[0.5rem] tracking-wide text-sm "
                  placeholder="Search..."
                />
              </div>
              <a
                href="/candidates/login"
                className="py-2 text-[#00DDFB] font-medium  px-5  rounded-lg text-sm  capitalize tracking-widest  "
              >
                Login
              </a>
              <button
                className="py-3  main_btn_color px-5  rounded-lg   text-white text-xs  capitalize tracking-widest "
                onClick={redirect_to_login}
              >
                Request a call
              </button>
            </div>
          </div>
        </header>
        <div className=" hidden md:flex items-center  justify-between w-full px-[80px] md:mx-auto md:max-w-[1400px] h-full min-h-[90vh]">
          <div className="w-[40%]">
            <h3 className="text-base mb-6 text-[#FCA473]">Why Choose Us</h3>
            <h2 className="text-4xl font-semibold my-4 leading-[1.40]">
              We are Hiring a massive amount of Employees for Software
              Development.
            </h2>
            <h6 className="text-base my-6 text-[#868686] w-[85%] ">
              So be ready and unleased your skills instantly as soon. This skill
              will help to greater success of your life{" "}
            </h6>
            <div className="flex gap-8 items-center my-6">
              <button className="bg-[#00DDFB] rounded-md py-2   text-white px-8 ">
                Read More
              </button>
              <button className="flex justify-between gap-5 items-center">
                <div className="h-13 w-13 border-[#8FF2FF] border-t-[6px] rotate-[-40deg]  border-l-[6px] rounded-full p-[0.42rem]">
                  <div className="rounded-full play-btn-gradient h-10 w-10 p-2 rotate-[40deg] ">
                    <Icon
                      icon={"bi:play-fill"}
                      className="w-full h-full text-white"
                    />
                  </div>
                </div>

                <span className="font-semibold tracking-wide">Watch now</span>
              </button>
            </div>

            <div className="flex gap-4 my-6">
              <div className="flex -space-x-10 ">
                {[1, 2, 3, 4].map((img, i) => (
                  <div
                    className="w-12 h-12 hover:scale-[1.1] transition"
                    key={i}
                  >
                    <img
                      src={Smile}
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col ">
                <h3 className="text-xs tracking-wide w-[85%]  text-[#C623FF] ">
                  27,500 candidates gots their jobs from cocca
                </h3>
                <p className="text-[0.6rem] text-[#B9B9B9] ">Web designer</p>
              </div>
            </div>
          </div>

          <div className="w-[50%] h-full">
            <div className="w-full h-full ">
              <LandingSvg />
            </div>
          </div>
        </div>
        {/* SVG1 */}

        <div className="w-full">
          <MobHomeSvg />
        </div>
        {/* <HomeLogo1 /> */}
        <div className="flex justify-center mb-8     ">
          {/* <button
            className=" w-[50%] block main_btn main_btn_color  py-[0.60rem] text-white text-sm  capitalize tracking-widest hover:-translate-y-2  shadow1 transition duration-200 btn-animation sm:hidden"
            onClick={redirect_to_login}
          >
            Let's give us Try
          </button> */}
          <CustomButtonHome
            className="sm:hidden"
            buttonLabel="Let's give us Try"
            buttonFunc={redirect_to_login}
          />
        </div>
        {/* WIDTH INFO */}
        <div className="w-full flex gap-3 justify-between items-center p-4 px-4  bg-[#D3E7FF]  mt-4 sm:hidden">
          <h4 className="text-xs text-[#0079FA] font-medium  ">300,000+</h4>
          <div className="flex-1 border-r-[1px] border-l-[1px] border-[#0079FA] self-center px-2  ">
            <div className="">
              <h3 className="text-xs text-[#0079FA] font-medium">1 Million+</h3>
              <p className="text-xs">Applicants interviewed</p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xs text-[#0079FA] font-medium">5000+</h3>
            <p className="text-xs">Hired per month using</p>
          </div>
        </div>
        <section className="my-12 ">
          {/* <div className="md:px-10 px-8"> */}

          {/* </div> */}
          <div className="w-full flex justify-center">
            <div className="h-[15rem] md:px-12 md:w-1/2 relative ">
              <img
                src={VideoImage}
                alt="video_thumbnail"
                className="w-full h-full md:rounded-md object-cover"
              />
              <h2 className="  my-4 mb-8 text-[#519efc] font-medium  text-2xl    md:text-4xl absolute top-[40%] text-center left-[30%]">
                Explore our Work
              </h2>
            </div>
          </div>
        </section>

        <section className="px-8 md:px-12  ">
          <Overviews />
          <CustomerReviews />
        </section>
        <section className="-translate-y-8">
          <HomeCaraousel />
        </section>
        <section className="px-8  md:px-12 md:max-w-7xl md:mx-auto">
          <SimpleCard />

          <RecruiterCard />
        </section>
        <Footer />
      </div>

      {/* Cookies Modal */}
      <div
        className={cn(
          " fixed bottom-0 left-0 right-0  cookies-box-shadow   rounded-t-xl bg-[#FFEDED] p-3 pb-6 transition duration-300 opacity-100 gap-2 z-[2] ",
          {
            "translate-y-[150%] opacity-0 ": !openModal,
          }
        )}
      >
        <CookiesLogo />
        <p className="text-[#4F2C2C] text-xs tracking-wider text-center ">
          This website uses cookies to ensure you get the best experience
        </p>
        <div className="mt-4 flex gap-4 justify-around  sm:justify-center  ">
          <button
            className="bg-[#966A5C] hover:bg-[#755247] transition duration-200 ease-in py-2  w-[9rem] text-xs text-white font-light tracking-wider rounded-2xl"
            onClick={() => setModal(false)}
          >
            Got it
          </button>
          <button
            className="border-[#966A5C] border-[0.3px] w-[9rem] py-2  text-xs text-[#966A5C] bg-white hover:opacity-80  tracking-wider rounded-2xl"
            onClick={() => navigation("/cookies")}
          >
            Learn more
          </button>
        </div>
      </div>

      {/* SIDEBAR ITEM */}
      <div
        // onClick={() => setHam(true)}
        // className={cn(" transition duration-200 fixed -translate-x-full", {
        //   "transition duration-200 z-[-1]   w-0 ": ham,
        //   " transition duration-200 translate-x-0  inset-0  bg-[rgba(0,0,0,0.7)] z-[1] pointer-events-auto  ":
        //     !ham,
        // })}
        className={cn(" transition-all duration-200 fixed inset-0  ", {
          "-translate-x-full z-[-1]    w-0  opacity-0  ": ham,
          "translate-x-0   w-full bg-[rgba(0,0,0,0.8)] z-[1] pointer-events-auto    ":
            !ham,
        })}
      >
        <div
          className={cn(
            "sidebar-gradient transition relative delay-500  duration-1000    py-4      ",
            {
              "w-[35%] z-[2] h-full delay-500 ": !ham,
              "w-0   ": ham,
            }
          )}
        >
          {/* <div> */}
          <button
            onClick={() => setHam((prev) => !prev)}
            className="w-6 h-6 bg-white rounded-full p-1 shadow-md transition hover:scale-125 absolute top-6 -right-3 "
          >
            <Icon
              className="w-full h-full"
              icon={"clarity:close-line"}
              color={"#FF3E3E"}
            />
          </button>
          {/* </div> */}
          <ul className="flex flex-col justify-between gap-4  mt-8 overflow-hidden">
            <li className="w-full">
              <Link className="sidebar-link " to="">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                About
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                Contact
              </Link>
            </li>
            <li className="">
              <Link className="sidebar-link" to="">
                Webinars
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
