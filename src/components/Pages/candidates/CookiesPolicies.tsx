import CookiepolicyLogo from "../../svgs/CookiepolicyLogo";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CookiesHomeLogo from "../../svgs/CookiesHomeLogo";
import CustomToggle from "../../CustomToggles/CustomToggle";

const CookiesPolicies = () => {
  const [toggle, setToggle] = useState<{ essential: boolean; exp: boolean }>({
    essential: false,
    exp: false,
  });

  const essentialFunc = () => {
    setToggle({
      ...toggle,
      essential: !toggle.essential,
    });
  };
  const expFunc = () => {
    setToggle({
      ...toggle,
      exp: !toggle.exp,
    });
  };
  const navigation = useNavigate();
  const policies = [
    {
      head: "Authentication",
      desc: "We us e cookies and similiar technologies to recognize you when you visit our service our Services.If you’re signed into LinkedIn, these technologies help us show you the right information and personalize your experience your experience in line with your settings.",
    },
    {
      head: "Security",
      desc: "We use cookies and similiar technologies to make your interaction with our Services faster  and more secure.",
    },
    {
      head: "Preferences, Features and services",
      desc: "We use cookies and similiar technologies to enable the functionality of our services, such as helping you to fill out forms on our Services more easily and providing you with features, insights and customized content in conjunction with our plugins, We also use these technolgies about your browser and your preferences.",
    },
    {
      head: "Customized contents",
      desc: "We use cookies and similiar technologies to customize your experience on our Services.",
    },
  ];

  const confirmPolicies = () => {
    if (toggle.essential && toggle.exp) {
      navigation("/choose");
    }
  };
  return (
    <div className="px-8">
      <div className="flex justify-center">
        <CookiesHomeLogo />
      </div>
      <CookiepolicyLogo />

      <div className="">
        {policies.map((p, i) => (
          <div className="my-4" key={i}>
            <h3 className="mb-2 font-semibold text-xs tracking-wider text-[#482020] ">
              {p.head}
            </h3>
            <p className="text-xs font-light tracking-wide">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Toggles */}
      <div className=" space-y-4">
        <div className="flex gap-2 items-center">
          <CustomToggle
            dimColor="bg-[#736363]"
            brightColor="bg-[#482020]"
            toggleSet={essentialFunc}
            toggleBoolean={toggle.essential}
          />

          <p className="text-xs font-semibold">Accept the essentials cookies</p>
        </div>
        <div className="flex gap-2 items-center">
          <CustomToggle
            dimColor="bg-[#736363]"
            brightColor="bg-[#482020]"
            toggleSet={expFunc}
            toggleBoolean={toggle.exp}
          />

          <p className="text-xs font-semibold">
            Accept cookies to improve my experience
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-6">
        <button
          className={cn(
            " py-2  w-[9rem] text-xs text-white font-light tracking-wider rounded-2xl  transition ease-in duration-200",
            {
              "bg-[#482020] hover:bg-[#755A5A]": toggle.exp && toggle.essential,
              "bg-[#BEBEBE]": !toggle.exp || !toggle.essential,
            }
          )}
          onClick={confirmPolicies}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CookiesPolicies;
