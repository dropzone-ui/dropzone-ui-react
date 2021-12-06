import React, { FC, Fragment, useEffect, useState } from "react";
import { TooltipProps } from "./TooltipProps";
import "./Tooltip.scss";
import { UPLOADSTATUS } from "../../../components/dropzone/components/utils/validation.utils";
const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  const {
    //message,
    //style,
    //children,
    //color,
    uploadStatus,
    valid,
    errors,
    //className,
    uploadMessage,
    open,
  } = props;
  const [statusClassName, setSatusClassName] = useState<string | undefined>(
    undefined,
  );
  const [message, setMessage] = useState<undefined | string>(undefined);
  const handleChangeStatus = (uploadStatus?: UPLOADSTATUS, valid?: boolean) => {
    if (valid) {
      //if file is valid, then it can be uploaded and can check
      // upload status
      //setSattusClassName("success");
      if (!uploadStatus) {
        //when uploadStatus is undefined, File have not been uploaded yet
        //setSattusClassName(undefined);
        setMessage(undefined);
      } else {
        //otherwise is only needed to check error or success
        setMessage(uploadMessage);
        if (uploadStatus === "success") {
          setSatusClassName("success");
        } else if (uploadStatus === "error") {
          setSatusClassName("not-valid-error");
        } else {
          setSatusClassName(undefined);
        }
      }
    } else {
      // not valid has errors
      setSatusClassName("not-valid-error");
      setMessage(
        errors
          ? errors.reduce((acum: string, curr: string) => {
              acum += `${curr}. `;
              return acum;
            }, "")
          : "",
      );
    }
  };
  useEffect(() => {
    handleChangeStatus(uploadStatus, valid);
    // eslint-disable-next-line
  }, [uploadStatus, valid]);
  return (
    <Fragment>
      {open && message && statusClassName && (
        <span className={`dropzone-ui-tooltiptext ${statusClassName}`}>
          {
            /* !valid
              ? errors?.map((error, index) => (
                  <div key={index + 1}>{`- ${error}.\n`}</div>
                ))
              :  */ message
          }
        </span>
      )}
    </Fragment>
  );
};
export default Tooltip;
