import { FC } from "react";
import { FileItemProps } from "./FileItemProps";
import "./FileItem.scss";
declare const FileItem: FC<FileItemProps>;
export default FileItem;
/**
 * {fileName === "bottom" && (
      <div className="file-item-name">{shrinkWord(file.name)}</div>
    )}
 */
