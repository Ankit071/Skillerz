import cn from "classnames";

const HomeLogoLink = ({
  height,
  link,
  className,
}: {
  height?: string | number;
  link?: string;
  className?: string;
}) => {
  return (
    <a href={link ? link : "/"} className={cn(className, " inline-block")}>
      {/* <svg
        height={height ? height : "20"}
        viewBox="0 0 155 124"
        className="w-full h-full translateYAnimSVG "
        fill="none"
      >
        <path d="M56.6087 0L105.633 93H7.58413L56.6087 0Z" fill="#00E0FF" />
        <path
          d="M115.913 28.3044L149.763 93.0001H82.0628L115.913 28.3044Z"
          fill="#6B00F2"
        />
      </svg> */}

      <svg
        // height={height ? height : "20"}
        className="w-full h-full translateYAnimSVG "
        viewBox="0 0 135 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 0L74.641 60H5.35898L40 0Z"
          fill="url(#paint0_linear_192_1167)"
        />
        <path
          d="M31.45 31C31.45 26.3 33.95 21.9667 38.95 18L48.1 24.1C43.9667 26.7 41.9 29.45 41.9 32.35C41.9 33.5833 42.3167 34.8833 43.15 36.25C43.9833 37.6167 44.8167 38.9667 45.65 40.3C46.5167 41.6333 46.95 42.8833 46.95 44.05C46.95 48.8833 43.6167 52.6167 36.95 55.25L34.55 52C36.1833 51.1 37.3167 50.2333 37.95 49.4C38.5833 48.5667 38.9 47.65 38.9 46.65C38.9 45.65 38.5 44.5333 37.7 43.3C36.9333 42.0333 36.0833 40.8833 35.15 39.85C34.25 38.8167 33.4 37.5 32.6 35.9C31.8333 34.3 31.45 32.6667 31.45 31Z"
          fill="white"
        />
        <path
          d="M85.42 53.3L84.4 39.34L88.68 38.68L87.4 53.12L85.42 53.3ZM93.8903 53.3L92.8703 39.34L97.1503 38.68L95.8703 53.12L93.8903 53.3ZM104.681 42.22C107.907 43.5133 109.521 45.12 109.521 47.04C109.521 48.04 109.234 48.7667 108.661 49.22C108.101 49.66 107.054 49.88 105.521 49.88C104.547 49.88 103.747 49.8067 103.121 49.66C102.867 50.2867 102.741 50.94 102.741 51.62C103.341 51.7 104.021 51.74 104.781 51.74C106.167 51.74 107.474 51.52 108.701 51.08L109.301 53.02C108.327 53.3267 107.234 53.48 106.021 53.48C103.861 53.48 102.274 53.0867 101.261 52.3C101.047 51.3533 100.941 50.46 100.941 49.62C100.941 47.94 101.307 46.4267 102.041 45.08C102.787 43.7333 103.667 42.78 104.681 42.22ZM103.521 48.72C103.694 48.7333 104.127 48.74 104.821 48.74C105.527 48.74 106.334 48.6467 107.241 48.46C107.281 48.2067 107.301 47.9533 107.301 47.7C107.301 46.9 107.081 46.1333 106.641 45.4C105.321 46.28 104.281 47.3867 103.521 48.72ZM119.684 46.42C118.778 46.42 118.091 46.74 117.624 47.38C117.158 48.0067 116.818 49.1667 116.604 50.86L116.324 53.12L114.344 53.3L113.324 43.38L117.604 42.72L117.204 45.92H117.344C118.411 43.6267 119.771 42.4067 121.424 42.26L120.864 46.52C120.371 46.4533 119.978 46.42 119.684 46.42ZM124.339 42.82L132.459 43L132.719 45.08L126.019 51.7L132.219 50.96L132.339 53L123.719 53.18L123.779 51.96L128.279 44.64L124.399 44.24L124.339 42.82Z"
          fill="url(#paint1_linear_192_1167)"
        />
        <path
          d="M62.52 43.32L59.42 46.56L63.76 53.04L59.96 53.3L57.46 48.62L56.74 49.3L56.4 53.12L54.42 53.3L53.4 39.34L57.68 38.68L56.92 47.32L61.18 42.28L62.52 43.32Z"
          fill="white"
        />
        <circle
          cx="76.2319"
          cy="35.5581"
          r="1.55807"
          fill="url(#paint2_linear_192_1167)"
        />
        <rect
          x="74.6738"
          y="37.895"
          width="3.11614"
          height="6.6218"
          fill="url(#paint3_linear_192_1167)"
        />
        <rect
          x="74.917"
          y="37.895"
          width="0.779035"
          height="6.6218"
          transform="rotate(47.9545 74.917 37.895)"
          fill="url(#paint4_linear_192_1167)"
        />
        <rect
          width="0.779035"
          height="6.6218"
          transform="matrix(-0.63175 0.775172 0.775172 0.63175 77.8662 37.895)"
          fill="url(#paint5_linear_192_1167)"
        />
        <rect
          x="74.6738"
          y="45.6855"
          width="1.16855"
          height="5.45325"
          fill="url(#paint6_linear_192_1167)"
        />
        <rect
          x="76.6221"
          y="45.6855"
          width="1.16855"
          height="5.45325"
          fill="url(#paint7_linear_192_1167)"
        />
        <rect
          x="76.6221"
          y="51.1387"
          width="0.779035"
          height="2.33711"
          fill="url(#paint8_linear_192_1167)"
        />
        <rect
          width="0.779035"
          height="2.33711"
          transform="matrix(-1 0 0 1 75.8428 51.1387)"
          fill="url(#paint9_linear_192_1167)"
        />
        <rect
          x="77.1475"
          y="53.4917"
          width="1.16855"
          height="1.79268"
          transform="rotate(-90.411 77.1475 53.4917)"
          fill="url(#paint10_linear_192_1167)"
        />
        <rect
          width="1.16855"
          height="1.79268"
          transform="matrix(0.00717268 -0.999974 -0.999974 -0.00717268 75.3174 53.4917)"
          fill="url(#paint11_linear_192_1167)"
        />
        <rect
          x="78.1797"
          y="52.3076"
          width="1.16855"
          height="1.16855"
          rx="0.584276"
          fill="url(#paint12_linear_192_1167)"
        />
        <rect
          width="1.16855"
          height="1.16855"
          rx="0.584276"
          transform="matrix(-1 0 0 1 74.2852 52.3076)"
          fill="url(#paint13_linear_192_1167)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_192_1167"
            x1="40"
            y1="0"
            x2="40"
            y2="66.383"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6F00FC" />
            <stop offset="1" stop-color="#00A8B3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_192_1167"
            x1="109"
            y1="33"
            x2="109"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#45A0FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_192_1167"
            x1="76.2319"
            y1="34"
            x2="76.2319"
            y2="37.1161"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_192_1167"
            x1="76.2319"
            y1="37.895"
            x2="76.2319"
            y2="44.5168"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_192_1167"
            x1="75.3065"
            y1="37.895"
            x2="75.3065"
            y2="44.5168"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_192_1167"
            x1="0.389518"
            y1="0"
            x2="0.389518"
            y2="6.6218"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_192_1167"
            x1="75.2581"
            y1="45.6855"
            x2="75.2581"
            y2="51.1388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_192_1167"
            x1="77.2063"
            y1="45.6855"
            x2="77.2063"
            y2="51.1388"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_192_1167"
            x1="77.0116"
            y1="51.1387"
            x2="77.0116"
            y2="53.4758"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_192_1167"
            x1="0.389518"
            y1="0"
            x2="0.389518"
            y2="2.33711"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_192_1167"
            x1="77.7317"
            y1="53.4917"
            x2="77.7317"
            y2="55.2844"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint11_linear_192_1167"
            x1="0.584276"
            y1="0"
            x2="0.584276"
            y2="1.79268"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint12_linear_192_1167"
            x1="78.764"
            y1="52.3076"
            x2="78.764"
            y2="53.4762"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
          <linearGradient
            id="paint13_linear_192_1167"
            x1="0.584276"
            y1="0"
            x2="0.584276"
            y2="1.16855"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6B00F2" />
            <stop offset="1" stop-color="#0056B0" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default HomeLogoLink;
