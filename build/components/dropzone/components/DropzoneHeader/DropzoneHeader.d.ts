import { FC } from "react";
import { FileListProps } from "../../../file-item/components/FileList/FileListProps";
export interface DropzoneHeaderProps {
    maxFileSize: number | undefined;
    numberOfValidFiles: number | undefined;
    maxFiles: number | undefined;
    onReset: Function | undefined;
    handleReset: Function;
    view: FileListProps["view"];
    onChangeView: Function | undefined;
}
declare const DropzoneHeader: FC<DropzoneHeaderProps>;
export default DropzoneHeader;
