import React,{ FC, Fragment } from "react";
import { CheckCircle, DoDisturb } from "../../../icons";
import { FileItemStatusProps } from "./FileItemStatusProps";

const FileItemStatus: FC<FileItemStatusProps> = (
  props: FileItemStatusProps
) => {
  const { valid } = props;
  return (
    <Fragment>
      {valid ? (
        <div className="file-status-ok">
          {" "}
          <CheckCircle
            color="#4caf50"
            size="small"
            //style={styles.icons}
            className="status-icon"
          />
          Ok
        </div>
      ) : (
        <div className="file-status-error">
          <DoDisturb
            color="#f44336"
            size="small"
            className="status-icon"
            //style={styles.icons}
          />
          Denied
        </div>
      )}
    </Fragment>
  );
};
export default FileItemStatus;
