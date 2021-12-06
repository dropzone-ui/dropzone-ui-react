import React, { FC } from "react";
import { FileItemLocalizerSelector } from "../../../../localization";
import {
  Localization,
  LocalLabels,
} from "../../../../localization/localization";
import { Cancel } from "../../../icons";

import FileItemStatus from "../FileItemStatus/FileItemStatus";

const FileItemFullInfoLayer: FC<FileItemFullInfoLayerProps> = (
  props: FileItemFullInfoLayerProps,
) => {
  const {
    showInfo,
    valid,
    onClose,
    fileName,
    fileSize,
    fileType,
    uploadStatus,
    uploadMessage,
    localization,
    errors,
    resultOnTooltip,
  } = props;
  const FileItemFullInfoLocalizer: LocalLabels = FileItemLocalizerSelector(
    localization as Localization,
  ).fullInfoLayer as LocalLabels;
  const handleCloseInfo = () => {
    onClose?.();
  };
  return (
    <div className={showInfo ? "full-info" : "full-info hide"}>
      <span
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Cancel
          style={{ margin: 0, right: 0, top: 0 }}
          color="rgba(255,255,255,0.8)"
          onClick={handleCloseInfo}
          colorFill="black"
        />
        {uploadStatus && uploadStatus !== "uploading" ? (
          <div className={"file-status"}>
            <FileItemStatus
              uploadStatus={uploadStatus}
              localization={localization as Localization}
            />
          </div>
        ) : (
          <div className="file-status">
            <FileItemStatus
              valid={valid}
              localization={localization as Localization}
            />
          </div>
        )}
      </span>
      
      {!resultOnTooltip && !uploadMessage && errors && errors.length > 0 && (
        <div className={`name error`}>
          {errors.map((error, index) => (
            <div key={index + 1}>{`- ${error}.\n`}</div>
          ))}
        </div>
      )}
      {!resultOnTooltip && uploadMessage && (
        <div className={`name ${uploadStatus}`}>{uploadMessage}</div>
      )}
      <div className="name">
        <span className="sub-label">
          {FileItemFullInfoLocalizer.name as string}
          {/* localization === "ES-es" ? "Nombre: " : "Name: " */}
        </span>
      </div>
      <div className="name">{fileName}</div>
      {/** FILE SIZE */}
      <div className="size">
        <span className="sub-label">
          {FileItemFullInfoLocalizer.size as string}
        </span>
      </div>
      <div className="name">{fileSize}</div>
      {/** FILE TYPE */}
      <div className="mime">
        <span className="sub-label">
          {FileItemFullInfoLocalizer.type as string}
        </span>
      </div>
      <div className="mime">{fileType}</div>
    </div>
  );
};
export default FileItemFullInfoLayer;

export interface FileItemFullInfoLayerProps {
  showInfo: boolean;
  fileName: string;
  fileSize: string;
  fileType: string;
  valid: boolean;
  onClose: Function;
  uploadMessage?: string;
  uploadStatus?: undefined | "uploading" | "success" | "error";
  /**
   * language to be used
   * for now
   * only English and Spanish is supported
   */
  localization?: Localization;
  errors?: string[];
  /**
   * Whether to display result of validation on InfoLayer or in tooltip on Hover FileItem
   */
   resultOnTooltip?: boolean;
}
