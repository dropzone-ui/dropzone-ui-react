import React, { FC, Fragment } from "react";
import Loader from "../../../../utils/loader";
import {
  CheckCircle,
  DoDisturb,
  UploadDone,
  UploadError,
} from "../../../icons";
import { FileItemStatusProps } from "./FileItemStatusProps";

const FileItemStatus: FC<FileItemStatusProps> = (
  props: FileItemStatusProps,
) => {
  const { valid, uploadStatus, message, localization } = props;
  return (
    <Fragment>
      {uploadStatus ? (
        uploadStatus === "uploading" ? (
          <div className="file-status-loading">
            <Loader />
            <p>{localization === "ES-es" ? "Subiendo" : "uploading"} </p>
          </div>
        ) : uploadStatus === "success" ? (
          <div className="file-status-ok upload">
            <UploadDone
              color="#4caf50"
              size="small"
              //style={styles.icons}
              className="status-icon"
            />{" "}
            {message || localization === "ES-es" ? "éxito" :"success"}
          </div>
        ) : (
          <div className="file-status-error upload">
            <UploadError
              color="#f44336"
              size="semi-medium"
              className="status-icon"
            />
            error
          </div>
        )
      ) : valid ? (
        <div className="file-status-ok">
          {" "}
          <CheckCircle
            color="#4caf50"
            size="small"
            //style={styles.icons}
            className="status-icon"
          />
          {localization === "ES-es" ? "válido" :"valid"}
        </div>
      ) : (
        <div className="file-status-error">
          <DoDisturb
            color="#f44336"
            size="small"
            className="status-icon"
            //style={styles.icons}
          />
          {localization === "ES-es" ? "No válido" :"Denied"}
        </div>
      )}
    </Fragment>
  );
};
export default FileItemStatus;
