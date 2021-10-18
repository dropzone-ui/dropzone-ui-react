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
     * This feature is hidden, it is not present on documentation
     * because is experimental. If you found this prop, you can test it
     * and comment us if any issue is found. Thanks in advance.
     *
     * Make file name, info layer, size and "valid message"
     * not visible
     */
    onlyImage?: boolean;
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization?: Localization;
}
declare const FileItemMainLayer: FC<FileItemMainLayerProps>;
export default FileItemMainLayer;
