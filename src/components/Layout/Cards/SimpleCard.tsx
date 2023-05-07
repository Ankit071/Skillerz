import { Icon } from "@iconify/react";

const SimpleCard = () => {
  const cards = [
    {
      head: "Broadcast with candidate sourcing",
      icon: (
        <Icon icon={"ic:twotone-track-changes"} color={"#9E23FF"} width={40} />
      ),
      color: "text-[#9E23FF]",
      bg: "bg-[#E8C9FF]",
    },
    {
      head: "Collaborate on hiring",
      icon: (
        <Icon
          icon={"fluent:people-community-16-regular"}
          width={40}
          color="#4392F0"
        />
      ),
      color: "text-[#4392F0]",
      bg: "bg-[#D3E8FF]",
    },
    {
      head: "Candidate screening tools",
      icon: (
        <Icon icon={"ic:twotone-track-changes"} color={"#9E23FF"} width={40} />
      ),
      color: "text-[#9E23FF]",
      bg: "bg-[#E8C9FF]",
    },
    {
      head: "Track applicants and offers",
      icon: (
        <Icon
          icon={"fluent:box-multiple-20-filled"}
          color={"#0074FF"}
          width={40}
        />
      ),
      color: "text-[#4392F0]",
      bg: "bg-[#D3E8FF]",
    },
  ];
  return (
    <div className="mb-8 ">
      <div className="text-center my-8 mb-10">
        <div>
          <h3 className=" mb-1 tracking-wider  md:text-2xl md:my-5 ">
            {" "}
            Why you will{" "}
            <span className="text-[#7C00A7] text-3xl md:text-5xl font-medium">
              love
            </span>{" "}
            using RecruiterX Hire
          </h3>
          <span className="tracking-wider md:text-2xl ">
            We inform all things in{" "}
            <span className="text-2xl font-medium text-blue-600 md:text-5xl">
              realtime
            </span>
          </span>
        </div>
      </div>
      <h2 className="md:text-2xl my-4 mb-8 text-[#0069E7] font-medium border-b-[0.1px]  border-blue-300 w-fit text-sm">
        Structured based Solutions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-3 gap-5 ">
        {cards.map((card, i) => (
          <div
            className={`p-3 md:p-5 sm:p-4 px-4  hover:shadow-lg transition duration-200 cursor-pointer rounded-xl flex  flex-col items-center  hover:-translate-y-3 ${card.bg} `}
            key={i}
          >
            {card.icon}
            <h3
              className={`${card.color} text-[0.6rem] font-medium mb-2 tracking-wider break-words md:text-lg `}
            >
              {card.head}
            </h3>
            <p className="text-[0.4rem] sm:text-xs tracking-wide font-light break-all md:text-sm  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit soluta
              dicta ipsum dolorum sit possimus? voluptatem
            </p>
            <button
              className={` ${
                i % 2 !== 0 ? "main_btn_color" : "card_btn_color"
              } block   py-[0.1rem] md:py-2 md:px-8 px-5 text-white md:text-xs text-[0.6rem]  capitalize tracking-widest mt-3 rounded-xl hover:shadow-lg transition-shadow duration-150  `}
              // onClick={redirect_to_login}
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCard;
