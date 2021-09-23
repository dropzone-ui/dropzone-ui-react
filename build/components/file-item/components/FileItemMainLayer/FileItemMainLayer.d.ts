import { FC } from "react";
import { Localization } from "../../../../localization/localization";
export interface FileItemMainLayerProps {
    showInfo: boolean;
    onOpenInfo: Function;
    onOpenImage: Function | undefined;
    onDelete: Function;
    fileName: string;
    info: boolean;
    valid: boolean;
    isImage: boolean;
    uploadStatus?: undefined | "uploading" | "success" | "error";
    sizeFormatted: string;
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization: Localization;
}
declare const FileItemMainLayer: FC<FileItemMainLayerProps>;
export default FileItemMainLayer;
