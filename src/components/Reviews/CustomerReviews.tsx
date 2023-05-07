import { Icon } from "@iconify/react";
import Smile from "../../assets/img/smile.png";
import Earth from "../svgs/Earth";
const CustomerReviews = () => {
  return (
    <div className="md:my-8 md:mt-16">
      <h2 className="text-[#0069E7] text-sm mb-8 w-fit border-b-[0.1px] border-blue-300 md:font-medium md:text-2xl ">
        Customer Reviews
      </h2>
      <div className="md-container-6x">
        <div className="sm:flex  sm:justify-between sm:items-center md:mt-10">
          <div className=" xl:w-[68%] md:w-[72%] sm:w-[68%]   ">
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 ">
              {[1, 2, 3].map((b, i) => (
                <div
                  className={` ${i < 1 ? "hidden md:block" : "md:block"}
                  ${i === 0 || i === 2 ? "md:mt-10 " : " h-fit mt-0"}
                 rounded-xl card-shadow-2  p-4 bg-[#FFFFFF] transition duration-200   z-40`}
                  key={i}
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 hover:scale-[1.1] transition">
                      <img
                        src={Smile}
                        alt=""
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-xs tracking-wide md:text-sm ">
                        Aliya lima
                      </h3>
                      <p className="text-[0.6rem] text-[#B9B9B9] ">
                        Web designer
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.6rem] mt-2 md:text-xs ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae eveniet repudiandae, commodi velit quia ipsam dolores
                    hic,
                  </p>
                  <div className="flex items-center gap-2 justify-between mt-1 md:mt-3 ">
                    <h4 className="font-semibold  sm:text-xs text-[0.5rem]  ">
                      aliyalima124@gmail.com
                    </h4>
                  </div>
                  <div className="flex gap-2 md:gap-4 items-center justify-end mt-2">
                    <a
                      href="https://google.com"
                      className="hover:scale-[1.1] transition sm:w-5 sm:h-5 md:w-6 md:h-6 h-4 w-4"
                    >
                      <Icon
                        icon="logos:google-gmail"
                        className="w-full h-full"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="hover:scale-[1.05] transition sm:w-5 sm:h-5 md:w-6 md:h-6 h-4 w-4"
                    >
                      <Icon
                        icon="akar-icons:facebook-fill"
                        color="#1279F3"
                        className="w-full h-full "
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between md:max-w-md sm:max-w-[16rem]    mx-auto relative z-[1] md:-top-9 max-w-[15rem] ">
              {new Array(3).fill(0).map((v, i) => (
                <div
                  key={i}
                  className={`flex
                
                   flex-col gap-[2px]  `}
                >
                  {new Array(85).fill(0).map((x, i) => (
                    <div className="flex gap-[1.2px]">
                      {new Array(6).fill(0).map((v, i) => (
                        <div
                          className="w-[2px] h-[2px]  bg-blue-300"
                          key={i}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className=" flex flex-col  justify-center items-center  relative -top-[7rem] md:-top-[10rem] z-[1]   ">
              <Earth />

              <div className="absolute md:top-[13rem] top-[7rem] md:right-[40%] right-[25%] z-20">
                <div className=" w-5 h-5 sm:w-8 sm:h-8 relative  hover:scale-105 transition hover:-translate-y-1">
                  <Icon
                    icon="carbon:location-filled"
                    color="orange"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 sm:w-6 sm:h-6 h-5 w-5 absolute -top-[0.15rem] md:top-[0.10rem] md:left-1 left-0 "
                  />
                </div>
              </div>
              <div className="absolute md:left-[20%] md:top-[12rem] top-[7rem] left-[5%] z-20">
                <div className=" w-5 h-5 sm:w-8 sm:h-8 relative  hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="orange"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 sm:w-6 sm:h-6 h-5 w-5 absolute -top-[0.15rem] md:top-[0.10rem] md:left-1 left-0 "
                  />
                </div>
              </div>

              <div className="absolute md:left-[35%] md:top-28 top-[5rem] left-[25%] z-20">
                <div className=" sm:w-10 sm:h-10 w-8 h-8  relative  hover:scale-105 transition hover:-translate-y-1">
                  <Icon
                    icon="carbon:location-filled"
                    color="blue"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-7 h-7 absolute top-[0.05rem] sm:left-[0.4rem] left-[0.10rem]"
                  />
                </div>
              </div>
              <div className="absolute right-[5%]  top-[5rem] sm:top-[13rem] sm:right-[25%] z-20">
                <div className=" w-10 h-10 relative  hover:scale-105 transition hover:-translate-y-1">
                  <Icon
                    icon="carbon:location-filled"
                    color="blue"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-7 h-7 absolute top-1 left-[0.4rem]"
                  />
                </div>
              </div>
              <div className="absolute top-24 right-[45%] z-20">
                <div className=" w-10 h-10 relative hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="brown"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-7 h-7 absolute top-1 left-[0.4rem]"
                  />
                </div>
              </div>

              <div className="absolute md:top-16 top-10 right-[25%] z-20">
                <div className=" w-10 h-10 relative hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="aqua"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-7 h-7 absolute top-1 left-[0.4rem]"
                  />
                </div>
              </div>
              <div className="absolute md:top-14 top-10 left-[25%] z-20">
                <div className=" w-10 h-10 relative  hover:scale-105 transition hover:-translate-y-1">
                  <Icon
                    icon="carbon:location-filled"
                    color="green"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-7 h-7 absolute top-1 left-[0.4rem]"
                  />
                </div>
              </div>
              <div className="absolute top-3 left-[45%] z-20">
                <div className=" w-12 h-12 relative hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="red"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-8 h-8 absolute top-1 left-2"
                  />
                </div>
              </div>
              <div className="absolute top-24 md:top-[13rem] md:left-[35%] left-[15%] z-20">
                <div className=" w-8 h-8 relative hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="yellow"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-6 h-6 absolute top-0 left-1"
                  />
                </div>
              </div>
              <div className="absolute top-24 md:right-[35%]  right-[15%] z-20">
                <div className=" w-8 h-8 relative hover:scale-105 transition hover:-translate-y-1 ">
                  <Icon
                    icon="carbon:location-filled"
                    color="purple"
                    className="w-full h-full"
                  />
                  <img
                    src={Smile}
                    alt=""
                    className="rounded-full p-1 w-6 h-6 absolute top-0 left-1"
                  />
                </div>
              </div>

              <h3 className="text-center tracking-widest  md:text-2xl my-8 mb-[5rem] md:mb-8  ">
                We are{" "}
                <span className="text-[#7C00A7] text-3xl md:text-5xl font-medium">
                  growing
                </span>{" "}
                all over the world{" "}
              </h3>
            </div>
          </div>

          <div className=" md:self-start md:w-[25%] sm:w-[25%] self-start  justify-self-start hidden sm:block  ">
            <div
              className={` 
          
                 rounded-xl card-shadow  p-4 bg-[#FFFFFF] transition duration-200  card-shadow-2 shadow`}
            >
              <div className="flex gap-2">
                <div className="w-8 h-8 hover:scale-[1.1] transition">
                  <img
                    src={Smile}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xs tracking-wide md:text-sm ">
                    Aliya lima
                  </h3>
                  <p className="text-[0.6rem] text-[#B9B9B9] ">Web designer</p>
                </div>
              </div>
              <p className="text-[0.6rem] mt-2 md:text-xs ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                eveniet repudiandae, commodi velit quia ipsam dolores hic,Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Ex nisi fuga
                inventore quia perspiciatis facere ducimus ratione repudiandae
                asperiores quis accusamus ea, alias accusantium neque deserunt
                ipsa molestiae harum aliquam quisquam consequatur, impedit rem
                ipsum dolor sit amet consectetur, adipisicing elit. Facere
              </p>
              <div className="flex items-center gap-2 justify-between mt-1 md:mt-3 ">
                <h4 className="font-semibold text-[0.5rem] md:text-sm text-xs ">
                  aliyalima124@gmail.com
                </h4>
              </div>
              <div className="flex gap-2 md:gap-4 items-center justify-end mt-2">
                <a
                  href="https://google.com"
                  className="hover:scale-[1.1] transition md:w-8 md:h-8 h-4 w-4"
                >
                  <Icon icon="logos:google-gmail" className="w-full h-full" />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="hover:scale-[1.05] transition md:w-8 md:h-8 h-4 w-4"
                >
                  <Icon
                    icon="akar-icons:facebook-fill"
                    color="#1279F3"
                    className="w-full h-full "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-36"></div>
      {/* <h3 className="text-center tracking-widest  md:text-2xl md:-mt-24 mb-24  ">
        We are{" "}
        <span className="text-[#7C00A7] text-3xl md:text-5xl font-medium">
          growing
        </span>{" "}
        all over the world{" "}
      </h3> */}
    </div>
  );
};

export default CustomerReviews;
