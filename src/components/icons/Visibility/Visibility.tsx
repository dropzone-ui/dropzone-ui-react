import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { VisibilityProps } from "./VisibilityProps";

const Visibility: FC<VisibilityProps> = (props: VisibilityProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  let finalStyle = style ? style : {};
  
  return (
    <svg
    className={className || ""}
      style={onClick ? { cursor: "pointer",...finalStyle } : finalStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
      onClick={() => onClick?.()}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
        opacity=".9"
        fill={colorFill ? colorFill : "none"}
      />
      <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  );
};
export default Visibility;
