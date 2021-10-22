import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { ViewListProps } from "./ViewListProps";

const ViewList: FC<ViewListProps> = (props: ViewListProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  return (
    <svg
      style={onClick ? { ...{ cursor: "pointer", ...finalStyle } } : finalStyle}
      onClick={() => onClick?.()}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
      className={className || ""}
    >
      <rect
        fill={colorFill || "none"}
        height={size || "24"}
        width={size || "24"}
      />
      <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z" />
    </svg>
  );
};
export default ViewList;
