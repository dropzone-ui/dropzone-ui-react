import React, { FC } from "react";
import { parseSize } from "../utils/utils";
import { UploadingProcessProps } from "./UploadingProcessProps";
import "./UploadingProcess.scss";
const UploadingProcess: FC<UploadingProcessProps> = (
  props: UploadingProcessProps
) => {
  const {
    size,
    color,
    //colorFill,
    onClick,
    style,
    className,
    spin,
  } = props;
  const finalSize = parseSize(size);
  const finalStyle = style ? style : {};
  let finalClassname = className || "";
  finalClassname += spin ? "dui-rotate" : "";
  return (
    <svg
      className={finalClassname}
      style={onClick ? { ...{ cursor: "pointer", ...finalStyle } } : finalStyle}
      onClick={() => onClick?.()}
      xmlns="http://www.w3.org/2000/svg"
      height={finalSize ? `${finalSize}px` : "24px"}
      viewBox="0 0 24 24"
      width={finalSize ? `${finalSize}px` : "24px"}
      fill={color ? color : "#000000"}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
    </svg>
  );
};
export default UploadingProcess;
