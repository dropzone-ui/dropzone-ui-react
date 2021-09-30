import { FC } from "react";
export interface FileItemImageProps {
    /**
     * The image source
     */
    imageSource: string | undefined;
    /**
     * the url file icon
     */
    url: string;
    /**
     * The name to be used as alt
     */
    fileName: string;
}
declare const FileItemImage: FC<FileItemImageProps>;
export default FileItemImage;
