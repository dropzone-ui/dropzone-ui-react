import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { CleanProps } from "./CleanProps";

const Clean: FC<CleanProps> = (props: CleanProps) => {
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
      enableBackground="new 0 0 24 24"
      height={finalSize ? `${finalSize}px` : "24px"}
      viewBox="0 0 24 24"
      width={finalSize ? `${finalSize}px` : "24px"}
      fill={color ? color : "#000000"}
    >
      <g>
        <rect
          fill="none"
          height={finalSize || "24"}
          width={finalSize || "24"}
        />
      </g>
      <g>
        <g>
          <path d="M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z" />
        </g>
      </g>
    </svg>
  );
};
export default Clean;
