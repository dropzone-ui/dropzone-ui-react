import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { CloseProps } from "./CloseProps";

const Close: FC<CloseProps> = (props: CloseProps) => {
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
      <rect fill="none" height={finalSize || "24"} width={finalSize || "24"} />
      <path
        d="M5,5v14h14V5H5z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z"
        opacity=".3"
      />
      <path d="M19,19H5V5h14V19z M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7 L17,8.41L13.41,12L17,15.59z" />
    </svg>
  );
};
export default Close;
