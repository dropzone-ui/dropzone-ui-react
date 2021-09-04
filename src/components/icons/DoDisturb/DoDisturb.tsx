import React, { FC } from "react";
import { DoDisturbProps } from "./DoDisturbProps";
import { parseSize } from "../utils/utils";

const DoDisturb: FC<DoDisturbProps> = (props: DoDisturbProps) => {
  const {
    size,
    color,
    //colorFill,
    onClick,
    style,
    className,
  } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};

  return (
    <svg
      className={className || ""}
      style={onClick ? { ...{ cursor: "pointer", ...finalStyle } } : finalStyle}
      onClick={() => onClick?.()}
      xmlns="http://www.w3.org/2000/svg"
      height={finalSize ? `${finalSize}px` : "24px"}
      viewBox="0 0 24 24"
      width={finalSize ? `${finalSize}px` : "24px"}
      fill={color ? color : "#000000"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
        opacity=".4"
        //fill={colorFill ? colorFill : "none"}
      />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
    </svg>
  );
};
export default DoDisturb;
