import { FC } from "react";
declare const FileItemFullInfoLayer: FC<FileItemFullInfoLayerProps>;
export default FileItemFullInfoLayer;
export interface FileItemFullInfoLayerProps {
    showInfo: boolean;
    fileName: string;
    fileSize: string;
    fileType: string;
    valid: boolean;
    onClose: Function;
}
