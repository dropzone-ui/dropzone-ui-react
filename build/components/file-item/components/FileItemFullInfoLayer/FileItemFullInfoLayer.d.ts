import { FC } from "react";
import { Localization } from "../../../../localization/localization";
declare const FileItemFullInfoLayer: FC<FileItemFullInfoLayerProps>;
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
    localization: Localization;
}
