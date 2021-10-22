import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { UploadDoneProps } from "./UploadDoneProps";

const UploadDone: FC<UploadDoneProps> = (props: UploadDoneProps) => {
  const { size, color, colorFill, onClick, style, className } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  return (
    <svg
      className={className || ""}
      style={onClick ? { ...{ cursor: "pointer", ...finalStyle } } : finalStyle}
      onClick={() => onClick?.()}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={`${finalSize}px`}
      viewBox="0 0 24 24"
      width={`${finalSize}px`}
      fill={color ? color : "#000000"}
    >
      <g>
        <rect
          fill={colorFill ? colorFill : "none"}
          height={finalSize}
          width={finalSize}
        />
      </g>
      <g>
        <g>
          <polygon points="20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02" />
          <rect height="2" width="14" x="5" y="18" />
        </g>
      </g>
    </svg>
  );
};
export default UploadDone;
