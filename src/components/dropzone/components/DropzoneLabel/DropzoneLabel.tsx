import React, { FC } from "react";
export interface DropzoneLabelProps {
  children: React.ReactNode | string;
}

const DropzoneLabel: FC<DropzoneLabelProps> = (props: DropzoneLabelProps) => {
  const { children } = props;
  return <div className="dz-ui-label">{children}</div>;
};
export default DropzoneLabel;
