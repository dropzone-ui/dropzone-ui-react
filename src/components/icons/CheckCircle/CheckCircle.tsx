import React, { FC } from "react";
import { CheckCircleProps } from "./CheckCircleProps";
import { parseSize } from "../utils/utils";

const CheckCircle: FC<CheckCircleProps> = (props: CheckCircleProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};

  return (
    <svg
      className={className || ""}
      style={onClick ? { ...{ cursor: "pointer", ...finalStyle } } : finalStyle}
      onClick={() => onClick?.()}
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
    >
      <path d="M0 0h24v24H0z" fill={colorFill ? colorFill : "none"} />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
};
export default CheckCircle;
