import React, { FC } from "react";
import { FileListProps } from "../../../file-item/components/FileList/FileListProps";
import { fileSizeFormater } from "../../../file-item/utils";
import { Cancel, ViewGrid, ViewList } from "../../../icons";
export interface DropzoneHeaderProps {
  maxFileSize: number | undefined;
  numberOfValidFiles: number| undefined;
  maxFiles: number| undefined;
  onReset: Function| undefined;
  handleReset: Function;
  view: FileListProps["view"];
  onChangeView: Function| undefined;
}
const DropzoneHeader: FC<DropzoneHeaderProps> = (
  props: DropzoneHeaderProps
) => {
  const {
    maxFileSize,
    numberOfValidFiles,
    onReset,
    maxFiles,
    handleReset,
    view,
    onChangeView,
  } = props;
  return (
    <div className="dz-ui-header" onClick={undefined}>
      {maxFileSize && `Max File size: ${fileSizeFormater(maxFileSize)}`}
      {maxFiles && ` | Valid files: ${numberOfValidFiles}/${maxFiles}`}
      {onReset && (
        <Cancel
          color="rgba(255,255,255,0.8)"
          onClick={handleReset}
          colorFill="black"
        />
      )}
      {onChangeView &&
        (view === "grid" ? (
          <ViewGrid
            onClick={() => {
              onChangeView?.("list");
            }}
            color="#646c7f"
          />
        ) : (
          <ViewList
            onClick={() => {
              onChangeView?.("grid");
            }}
            color="#646c7f"
          />
        ))}
    </div>
  );
};
export default DropzoneHeader;
