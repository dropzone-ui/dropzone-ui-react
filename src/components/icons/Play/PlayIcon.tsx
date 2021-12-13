import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { PlayIconProps } from "./PlayIconProps";

const PlayIcon: FC<PlayIconProps> = (props: PlayIconProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  return (
    <svg
      className={className || ""}
      style={onClick ? { cursor: "pointer", ...finalStyle } : finalStyle}
      xmlns="http://www.w3.org/2000/svg"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
      onClick={(e) => onClick?.(e)}
    >
      <path
        d="M0 0h24v24H0V0z"
        opacity=".9"
        fill={colorFill ? colorFill : "none"}
      />
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
};
export default PlayIcon;
