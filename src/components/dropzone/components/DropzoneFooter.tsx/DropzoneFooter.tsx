import React, { FC } from "react";
import { DropzoneFooterProps } from "./DropzoneFooterProps";

const DropzoneFooter: FC<DropzoneFooterProps> = (
  props: DropzoneFooterProps,
) => {
  const { accept, message, localization } = props;
  return (
    <div className="dz-ui-footer" onClick={undefined}>
      {message
        ? message
        : !accept
        ? localization === "ES-es"
          ? `Todos los tipos de archivo aceptados`
          : `All file types accepted`
        : localization === "ES-es"
        ? `Archivos aceptados: ${accept}`
        : `File types: ${accept}`}
    </div>
  );
};
export default DropzoneFooter;
