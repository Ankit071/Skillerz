import { Carousel } from "react-responsive-carousel";
import { CSSProperties } from "react";
import Pic1 from "../../assets/img/pic1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@iconify/react";

const HomeCaraousel = () => {
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 1,
    top: "calc(50% - 15px)",
    width: 25,
    height: 25,
    cursor: "pointer",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      //   autoPlay
      showStatus={false}
      showIndicators={false}
      interval={2200}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: "1rem" }}
          >
            <Icon icon={"ooui:previous-ltr"} className="text-gray-300" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: "1rem" }}
          >
            <Icon icon={"ooui:previous-rtl"} className="text-gray-300" />
          </button>
        )
      }
    >
      {[1, 1, 2, 6, 7, 9].map((v, i) => (
        <div className="w-full h-40 md:h-[20rem] m-0" key={i}>
          <img src={Pic1} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCaraousel;
