import { FC } from "react";
import { Localization } from "../../../../localization/localization";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
export interface DropzoneHeaderProps {
    maxFileSize?: number;
    numberOfValidFiles?: number;
    maxFiles?: number;
    onReset?: Function;
    view: FileItemContainerProps["view"];
    onChangeView?: Function;
    onUploadStart?: Function;
    urlPresent?: boolean;
    onClean?: Function;
    onUploadingStart?: boolean;
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization?: Localization;
    hideViewIcon?: boolean;
    /**
     * The classname to override the header css styles
     * on .css or .sass files
     */
    headerClassName?: string;
}
declare const DropzoneHeader: FC<DropzoneHeaderProps>;
export default DropzoneHeader;
