import cn from "classnames";
type Props = {
  toggleSet: () => void;
  toggleBoolean: boolean;
  dimColor: string;
  brightColor: string;
};
const CustomToggle = ({
  toggleSet,
  toggleBoolean,
  dimColor,
  brightColor,
}: Props) => {
  return (
    <button
      className={cn(
        `w-[3rem] h-6 rounded-xl block ${
          toggleBoolean ? brightColor : dimColor
        }`
      )}
      onClick={toggleSet}
    >
      <div
        className={cn(
          "w-4 h-4 rounded-xl bg-gray-300 transition duration-200 ease-in",
          {
            "ml-auto mr-1 bg-gray-50": toggleBoolean,
            "ml-1": !toggleBoolean,
          }
        )}
      ></div>
    </button>
  );
};

export default CustomToggle;
