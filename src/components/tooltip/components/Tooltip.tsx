import React, { FC, Fragment, useEffect, useState } from "react";
import { TooltipProps } from "./TooltipProps";
import "./Tooltip.scss";
import { UPLOADSTATUS } from "../../../components/dropzone/components/utils/validation.utils";
const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const {
    //message,
    style,
    children,
    //color,
    uploadStatus,
    valid,
    errors,
    //className,
    uploadMessage,
    open
  } = props;
  const [statusClassName, setSattusClassName] = useState<string | undefined>(
    undefined,
  );
  const [message, setMessage] = useState<undefined | string>(undefined);
  const handleChangeStatus = (uploadStatus?: UPLOADSTATUS, valid?: boolean) => {
    if (valid) {
      //if file is valid, then it can be uploaded and can check
      // upload status
      //setSattusClassName("success");
      if (!uploadStatus) {
        //when uploadStatus is undefined, File was not uploaded yet
        //setSattusClassName(undefined);
        setMessage(undefined);
      } else {
        //otherwise is only needed to check error or success
        setMessage(uploadMessage);
        if (uploadStatus === "success") {
          setSattusClassName("success");
        } else if (uploadStatus === "error") {
          setSattusClassName("not-valid-error");
        } else {
          setSattusClassName(undefined);
        }
      }
    } else {
      // not valid has errors
      setSattusClassName("not-valid-error");
      // setMessage();
    }
  };
  useEffect(() => {
    handleChangeStatus(uploadStatus, valid);
  }, [uploadStatus, valid]);
  return (
    <Fragment>
      {open && message && statusClassName ? (
        <div
          className={
            statusClassName
              ? `dropzone-ui-tooltip ${statusClassName}`
              : "dropzone-ui-tooltip"
          }
          style={style}
        >
          {children}
          <span
            className={
              statusClassName
                ? `dropzone-ui-tooltiptext ${statusClassName}`
                : "dropzone-ui-tooltiptext"
            }
          >
            {!valid
              ? errors.map((error, index) => (
                  <div key={index + 1}>{`- ${error}.\n`}</div>
                ))
              : message || ""}
          </span>
        </div>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};
export default Tooltip;
