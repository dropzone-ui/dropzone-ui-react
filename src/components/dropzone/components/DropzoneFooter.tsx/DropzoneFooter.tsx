import React, { FC } from "react";
import { DropzoneLocalizerSelector } from "../../../../localization";
import {
  FunctionLabel,
  LocalLabels,
} from "../../../../localization/localization";
import { DropzoneFooterProps } from "./DropzoneFooterProps";

const DropzoneFooter: FC<DropzoneFooterProps> = (
  props: DropzoneFooterProps,
) => {
  const { accept, message, localization } = props;

  const DropzoneFooterLocalizer: LocalLabels = DropzoneLocalizerSelector(
    localization,
  ).footer as LocalLabels;
  const accepCustomMessenger: FunctionLabel =
    DropzoneFooterLocalizer.acceptCustom as FunctionLabel;
  return (
    <div className="dz-ui-footer" onClick={undefined}>
      {/* message
        ? message
        : !accept
        ? localization === "ES-es"
          ? `Todos los tipos de archivo aceptados`
          : `All file types accepted`
        : localization === "ES-es"
        ? `Archivos aceptados: ${accept}`
        : `File types: ${accept}` */}
      {message
        ? message
        : !accept
        ? DropzoneFooterLocalizer.acceptAll
        : accepCustomMessenger(accept)}
    </div>
  );
};
export default DropzoneFooter;
