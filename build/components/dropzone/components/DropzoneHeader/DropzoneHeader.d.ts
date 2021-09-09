import { FC } from "react";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
export interface DropzoneHeaderProps {
    maxFileSize?: number;
    numberOfValidFiles?: number;
    maxFiles?: number;
    onReset?: Function;
    handleReset: Function;
    view: FileItemContainerProps["view"];
    onChangeView?: Function;
    onUploadStart?: Function;
    urlPresent?: boolean;
}
declare const DropzoneHeader: FC<DropzoneHeaderProps>;
export default DropzoneHeader;
