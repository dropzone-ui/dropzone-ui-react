import * as React from "react";
import { DropzoneLocalizerSelector } from "../../../../localization";
import {
  FunctionLabel,
  LocalLabels,
} from "../../../../localization/localization";
import { DropzoneFooterProps } from "./DropzoneFooterProps";

const DropzoneFooter: React.FC<DropzoneFooterProps> = (
  props: DropzoneFooterProps,
) => {
  const { accept, message, localization, footerClassName } = props;

  const DropzoneFooterLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization,
  ).footer as LocalLabels;
  const accepCustomMessenger: FunctionLabel =
    DropzoneFooterLocalizer.acceptCustom as FunctionLabel;
  return (
    <div
      className={
        footerClassName ? `dz-ui-footer ${footerClassName}` : "dz-ui-footer"
      }
      onClick={undefined}
    >
      <>
        {message
          ? message
          : !accept
          ? DropzoneFooterLocalizer.acceptAll
          : accepCustomMessenger(accept)}
      </>
    </div>
  );
};
export default DropzoneFooter;
