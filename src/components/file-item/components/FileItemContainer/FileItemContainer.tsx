import "./FileItemContainer.scss";

import React, { FC } from "react";
import { FileItemContainerProps } from "./FileItemContainerProps";

const FileItemContainer: FC<FileItemContainerProps> = (
  props: FileItemContainerProps,
) => {
  const { children, view, style, disableScroll } = props;
  const finalView = disableScroll ? "no-scroll" : view || "list";
  /*  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    e.preventDefault();
  } */
  return (
    <div
      className={`file-item-list-container file-item-list-${finalView}`}
      style={style}
      //onClick={handleClick}
    >
      {children}
    </div>
  );
};
export default FileItemContainer;
