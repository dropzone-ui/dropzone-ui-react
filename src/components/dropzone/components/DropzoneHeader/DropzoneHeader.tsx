import React, { FC, Fragment } from "react";
import { DropzoneLocalizerSelector } from "../../../../localization";
import {
  FunctionLabel,
  Localization,
  LocalLabels,
} from "../../../../localization/localization";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import { fileSizeFormater } from "../../../file-item/utils";
import {
  Cancel,
  Clean,
  UploadingProcess,
  ViewGrid,
  ViewList,
} from "../../../icons";
import Upload from "../../../icons/Upload/Upload";
export interface DropzoneHeaderProps {
  maxFileSize?: number;
  numberOfValidFiles?: number;
  maxFiles?: number;
  onReset?: Function;
  view: FileItemContainerProps["view"];
  onChangeView?: Function;
  onUploadStart?: Function;
  urlPresent?: boolean;
  onClean?: Function;
  onUploadingStart?: boolean;
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
  hideViewIcon?:boolean;
}

const DropzoneHeader: FC<DropzoneHeaderProps> = (
  props: DropzoneHeaderProps
) => {
  console.log("hideViewIcon",props.hideViewIcon);
  const {
    maxFileSize,
    numberOfValidFiles,
    onReset,
    onClean,
    maxFiles,
    view,
    onChangeView,
    onUploadStart,
    onUploadingStart,
    urlPresent,
    localization,
    hideViewIcon,
  } = props;

  const DropzoneHeaderLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization
  ).header as LocalLabels;

  const handleClean = () => {
    onClean?.();
  };
  const handleStartUploading = () => {
    onUploadStart?.();
  };
  const makeHeader = (): React.ReactNode[] => {
    let result: React.ReactNode[] = [];
    if (onUploadStart && urlPresent && numberOfValidFiles) {
      if (onUploadingStart) {
        result.push(<UploadingProcess spin={true} color="#646c7f" />);
      } else {
        result.push(
          <Fragment>
            {DropzoneHeaderLocalizer.uploadFilesMessage}
            {/* localization === "ES-es" ? `Subir archivos` : "Upload files" */}

            <Upload color="#646c7f" onClick={handleStartUploading} />
          </Fragment>
        );
      }

      result.push(<Fragment>{","}&nbsp;</Fragment>);
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
      result.push(<Fragment>{","}&nbsp;</Fragment>);
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
      result.push(<Fragment>{","}&nbsp;</Fragment>);
    }
    //clean not valid files on click
    if (onClean) {
      result.push(
        <Clean color="#646c7f" onClick={handleClean} size="semi-medium" />
      );
    }

    if (onChangeView && !hideViewIcon) {
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
          onClick={() => onReset?.()}
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
        <span key={index} style={{ display: "flex" }}>
          {HeaderItem}
        </span>
      ))}
    </div>
  );
};
export default DropzoneHeader;
