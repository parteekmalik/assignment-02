import React from "react";

function Shopping_basket_black_24d({
  bgColor = "white",
  className,
  fill = "currentColor",
}: {
  bgColor?: string;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_4253)">
        <path d="M28.6832 14.9997L21.3832 4.06636C21.0665 3.5997 20.5332 3.36636 19.9998 3.36636C19.4665 3.36636 18.9332 3.5997 18.6165 4.08303L11.3165 14.9997H3.33317C2.4165 14.9997 1.6665 15.7497 1.6665 16.6664C1.6665 16.8164 1.68317 16.9664 1.73317 17.1164L5.9665 32.5664C6.34984 33.9664 7.63317 34.9997 9.1665 34.9997H30.8332C32.3665 34.9997 33.6498 33.9664 34.0498 32.5664L38.2832 17.1164L38.3332 16.6664C38.3332 15.7497 37.5832 14.9997 36.6665 14.9997H28.6832ZM14.9998 14.9997L19.9998 7.66636L24.9998 14.9997H14.9998ZM19.9998 28.333C18.1665 28.333 16.6665 26.833 16.6665 24.9997C16.6665 23.1664 18.1665 21.6664 19.9998 21.6664C21.8332 21.6664 23.3332 23.1664 23.3332 24.9997C23.3332 26.833 21.8332 28.333 19.9998 28.333Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_4253">
          <rect width="40" height="40" fill={bgColor} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Shopping_basket_black_24d;
