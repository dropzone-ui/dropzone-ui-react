import "./FileItemContainer.scss";

import React, { FC } from "react";
import { FileItemContainerProps } from "./FileItemContainerProps";

const FileItemContainer: FC<FileItemContainerProps> = (
  props: FileItemContainerProps,
) => {
  const { children, view, style } = props;
  const finalView = view || "list";

  return (
    <div
      className={`file-item-list-container file-item-list-${finalView}`}
      style={style}
    >
      {children}
    </div>
  );
};
export default FileItemContainer;
