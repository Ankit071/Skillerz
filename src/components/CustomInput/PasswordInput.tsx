import { Icon } from "@iconify/react";
import { useState } from "react";

const PasswordInput = ({
  label,
  icon,
  passwordClosedIcon,
}: {
  label: string;
  icon: string;
  passwordClosedIcon: string;
}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className="  relative flex justify-between items-center bg-white rounded-md main-input-content  ">
      <input
        required
        type={active ? "text" : "password"}
        className=" custom-input rounded-md "
      />
      <label htmlFor="" className="custom-label ">
        {label}
      </label>
      <button
        className="input-icon"
        style={{ width: 20, height: 20, color: "grey", marginInline: 12 }}
        onClick={() => setActive((prev) => !prev)}
      >
        <Icon
          icon={active ? passwordClosedIcon : icon}
          className="w-full h-full input-icon"
        />
      </button>
    </div>
  );
};

export default PasswordInput;
