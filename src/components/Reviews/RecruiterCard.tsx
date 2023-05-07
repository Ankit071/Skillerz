// import { Icon } from "@iconify/react";
import { Icon } from "@iconify/react";
import Smile from "../../assets/img/smile.png";
const RecruiterCard = () => {
  return (
    <div className="my-6">
      <h2 className="md:text-2xl my-4 mb-8 text-[#0069E7] font-medium border-b-[0.1px]  border-blue-300 w-fit text-sm">
        Recruiters Feedback
      </h2>
      <div className="md:flex justify-between w-full my-8 items-center  ">
        <div className="md:w-[20%] mb-8 sm:mb-0">
          <div className=" p-6 bg-white rounded-lg card-shadow-2">
            <div className="mb-1  justify-between items-center flex flex-col">
              <img
                src={Smile}
                alt=""
                className="object-cover rounded-full block w-24 h-24"
              />
              <h3 className=" ">William Henry</h3>
              <p className="my-1 text-gray-400 text-[0.6rem]">
                Management Officer
              </p>
              <p className="text-xs mt-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                numquam, voluptatum ducimus cupiditate, optio iusto ut eaque at
                nesciunt modi et temporibus labore laborum tempora
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[70%] my-20 ">
          <div className="p-10 card-3 bg-[#CBE3F9] w-full rounded-md relative z-[5]">
            <div className="absolute sm:w-10 w-16 h-20 bg-[#CBE3F9] z-[20] top-0 right-0 rounded-lg "></div>
            <div className="absolute right-0 -top-4  z-[1] ">
              <div className=" absolute rounded-full bg-[#007DFF] w-12 h-12 sm:translate-x-[80%] translate-x-[30%]  z-[1]"></div>
              <div className=" flex flex-col gap-1 translate-x-[30%] sm:translate-x-[50%] -translate-y-6 ">
                {new Array(12).fill(0).map((v, i) => (
                  <>
                    <div className=" sm:flex gap-2  -left-24 hidden">
                      {new Array(6).fill(0).map((v, i) => (
                        <div className="w-1  h-1 bg-blue-700 rounded-full "></div>
                      ))}
                    </div>
                    <div className=" sm:hidden flex gap-2  -left-24 ">
                      {new Array(5).fill(0).map((v, i) => (
                        <div className="w-1  h-1 bg-blue-700 rounded-full "></div>
                      ))}
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="mb-1  justify-between items-center flex gap-10 w-full">
              <div className="w-[15%]">
                <div className="w-16 h-16">
                  <img
                    src={Smile}
                    alt=""
                    className="object-cover rounded-full block w-full h-full"
                  />
                </div>
              </div>
              <div className="w-[40%] hidden sm:block">
                <h3 className="  font-semibold text-sm sm:text-lg text-blue-700  ">
                  William Henry
                </h3>
                <p className="my-1 md:text-xs text-[#6F6F6F] text-[0.6rem] font-medium">
                  Management Officer
                </p>
              </div>
              <div>
                <div>
                  <div className=" flex flex-col  sm:hidden">
                    <h3 className="  font-semibold text-lg sm:text-base  ">
                      William Henry
                    </h3>
                    <p className="my-1 text-gray-400 text-[0.6rem] font-medium">
                      Management Officer
                    </p>
                  </div>
                  <div className="sm:flex sm:flex-row flex-col  gap-5 items-center mb-2">
                    <h4 className="font-semibold text-sm sm:text-base ">
                      Rating Overall
                    </h4>
                    <div className="flex gap-1 items-center">
                      {[1, 2, 3, 4, 5].map((v, i) => (
                        <Icon
                          icon="ant-design:star-filled"
                          color=" #00DDFB"
                          width={20}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Description
                </h3>
                <p className="text-xs mt-1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla numquam, voluptatum ducimus cupiditate, optio iusto ut
                  eaque at nesciunt modi et temporibus labore laborum tempora
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <div className="absolute bg-[#00DDFB] w-14 h-14 rounded-full -translate-x-full -left-1  z-[1]"></div>
              <div className="absolute w-11 h-11 bg-[#CBE3F9] -translate-x-[94%] z-[10] rounded-lg -translate-y-1"></div>
              <div className="absolute flex flex-col gap-1 -translate-x-full translate-y-2 ">
                {new Array(8).fill(0).map((v, i) => (
                  <div className=" flex gap-2  -left-24">
                    {new Array(10).fill(0).map((v, i) => (
                      <div className="w-1  h-1 bg-blue-700 rounded-full "></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;
