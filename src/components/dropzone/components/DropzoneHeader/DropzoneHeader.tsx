import React, { FC } from "react";
import { DropzoneLocalizerSelector } from "../../../../localization";
import {
  FunctionLabel,
  Localization,
  LocalLabels,
} from "../../../../localization/localization";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import { fileSizeFormater } from "../../../file-item/utils";
import { Cancel, ViewGrid, ViewList } from "../../../icons";
import Upload from "../../../icons/Upload/Upload";
export interface DropzoneHeaderProps {
  maxFileSize?: number;
  numberOfValidFiles?: number;
  maxFiles?: number;
  onReset?: Function;
  handleReset: Function;
  view: FileItemContainerProps["view"];
  onChangeView?: Function;
  onUploadStart?: Function;
  urlPresent?: boolean;
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
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
    onUploadStart,
    urlPresent,
    localization,
  } = props;

  const DropzoneHeaderLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization
  ).header as LocalLabels;

  const handleStartUploading = () => {
    onUploadStart?.();
  };
  const makeHeader = (): React.ReactNode[] => {
    let result: React.ReactNode[] = [];
    if (onUploadStart && urlPresent && numberOfValidFiles) {
      result.push(
        <>
          {DropzoneHeaderLocalizer.uploadFilesMessage}
          {/* localization === "ES-es" ? `Subir archivos` : "Upload files" */}
          <Upload color="#646c7f" onClick={handleStartUploading} />
          {", "}
        </>
      );
    }

    const maxFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.maxSizeMessage as FunctionLabel;
    if (maxFileSize) {
      result.push(
        maxFileSizeMessenger(fileSizeFormater(maxFileSize))

        /* localization === "ES-es"
          ? `Tam. máximo de archivo ${fileSizeFormater(maxFileSize)} | `
          : `Max File size: ${fileSizeFormater(maxFileSize)} | `, */
      );
    }
    const validFileSizeMessenger: FunctionLabel =
      DropzoneHeaderLocalizer.validFilesMessage as FunctionLabel;

    if (maxFiles) {
      result.push(
        validFileSizeMessenger(numberOfValidFiles as number, maxFiles)
        /*  localization === "ES-es"
          ? `Archivos ${numberOfValidFiles}/${maxFiles} | Válidos: ${numberOfValidFiles} | `
          : `Files ${numberOfValidFiles}/${maxFiles} | Valid: ${numberOfValidFiles} | `, */
      );
    }

    if (onChangeView) {
      result.push(
        <>
          {view !== "grid" ? (
            <ViewGrid
              onClick={() => {
                onChangeView?.("grid");
              }}
              color="#646c7f"
            />
          ) : (
            <ViewList
              onClick={() => {
                onChangeView?.("list");
              }}
              color="#646c7f"
            />
          )}
        </>
      );
    }

    if (onReset) {
      result.push(
        <Cancel
          color="#646c7f"
          //color="rgba(255,255,255,0.8)"
          onClick={handleReset}
          colorFill="rgba(255,255,255,0.8)"
        />
      );
    }
    return result;
  };
  return (
    <div
      className="dz-ui-header"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {makeHeader().map((HeaderItem, index) => (
        <span key={index} 
        style={{ display: "flex" }}
        >
          {HeaderItem}
        </span>
      ))}
    </div>
  );
};
export default DropzoneHeader;
