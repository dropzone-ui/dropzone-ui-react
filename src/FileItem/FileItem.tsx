import * as React from "react";
import { FileMosaic, FileMosaicProps } from "@files-ui/react";

/**
 * @deprecated This component was replaced by FileMosaic
 * @param props the same props that receives FileMosaic component 
 * @returns 
 */
const FileItem: React.FC<FileMosaicProps> = (props: FileMosaicProps) => {
  return <FileMosaic {...props} />;
};
export default FileItem;
