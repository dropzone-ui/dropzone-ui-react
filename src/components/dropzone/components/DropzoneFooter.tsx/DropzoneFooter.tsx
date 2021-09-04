import React, { FC } from "react";
import { DropzoneFooterProps } from "./DropzoneFooterProps";

const DropzoneFooter: FC<DropzoneFooterProps> = (
  props: DropzoneFooterProps
) => {
  const { accept } = props;
  return (
    <div className="dz-ui-footer" onClick={undefined}>
      {!accept ? `All file types accepted` : `File types: ${accept}`}
    </div>
  );
};
export default DropzoneFooter;
