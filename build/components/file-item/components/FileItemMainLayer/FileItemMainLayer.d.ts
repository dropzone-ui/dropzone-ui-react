import { FC } from "react";
import { FileItemProps } from "../FileItem/FileItemProps";
export interface FileItemMainLayerProps {
    showInfo: boolean;
    onOpenInfo: Function;
    onOpenImage: Function | undefined;
    onDelete: Function;
    fileNamePosition: FileItemProps["fileName"];
    fileName: string;
    info: boolean;
    valid: boolean;
    isImage: boolean;
    sizeFormatted: string;
}
declare const FileItemMainLayer: FC<FileItemMainLayerProps>;
export default FileItemMainLayer;
