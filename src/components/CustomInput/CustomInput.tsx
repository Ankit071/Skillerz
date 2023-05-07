import { Icon } from "@iconify/react";
import { ChangeEvent } from "react";

const CustomInput = ({
  label,
  icon,
  handlerChange,
}: {
  label: string;
  icon: string;
  handlerChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative flex justify-between items-center bg-white rounded-md main-input-content  ">
      <input
        required
        type={"text"}
        className=" custom-input rounded-md "
        onChange={handlerChange}
      />
      <label htmlFor="" className="custom-label ">
        {label}
      </label>
      <button
        className="input-icon"
        style={{ width: 20, height: 20, color: "grey", marginInline: 12 }}
      >
        <Icon icon={icon} className="w-full h-full input-icon" />
      </button>
    </div>
  );
};

export default CustomInput;
