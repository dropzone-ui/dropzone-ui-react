


import React, {FC} from "react";
import "./FileList.scss";
import { FileListProps } from "./FileListProps";

const FileList:FC<FileListProps> = (props:FileListProps) =>{
  const { children, view } = props;
  const finalView = view || "list";
  return(
    <div className={`file-item-list-container file-item-list-${finalView}`}>
      {children}
    </div>
  )
}
export default FileList;



