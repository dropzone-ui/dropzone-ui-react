import { FC } from "react";
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
}
declare const FileItemMainLayer: FC<FileItemMainLayerProps>;
export default FileItemMainLayer;
