import { PaperProps } from "../../../paper/components/PaperProps";


export interface FileItemValidator {
    /**
     * The maximum file size allowed in bytes
     */
    maxFileSize?: number;
    /**
     * The list of allowed mime types according to MDN
     * input accept prop
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    types?: string[];
    /**
     * Wheher this file was picked exeeding the maximum
     * amount of files
     */
    exeedsAmount?: boolean;
    /**
     * Whether the total file size
     * have been already exeeded
     */
    exeedsTotalFileSize?: boolean;
}
export interface FileItemProps extends PaperProps {
    /**
     * The actual file
     */
    file?: File;
    /**
     * A function of what to do when close button is pressed or clicked
     */
    onDelete?: Function;
    /**
     * A function of what to do when "see" button is pressed or clicked
     */
    onSee?: Function;
    /**
     * Whether to see as grid or inline (horizontal list)
     */
    //view?: "inline" | "grid";
    /**
     * individual validator for each file
     */
    //validator?: FileItemValidator;
    /**
     * identifier for the file
     */
    id?: string | number;
    /**
     * if true, and if the file is an image,
     * makes visible the "view" button that will get the image url
     * Also, it will be visible only when file is valid
     */
    preview?: boolean;
    /**
    * whether to show a valid or rejected message ("ok", "rejected")
    * by def. valid is false (if not present, it's false too)
    * This value wil affect preview behaviour,
    * If not valid, the preview will not be shown, nor the view button
    */
    valid?: boolean;
    /**
     * whether to show the info layer or not
     * also whether to make visible the info button or not 
     */
    info?: boolean;
    /**
     * The message from server
     */
    uploadMessage?: string;
    /**
     * where to place the file name
     * [in construction]
     */
    //fileName?: "bottom" | "inside";

    uploadStatus?: undefined | "uploading" | "success" | "error";
    /**
     * If present, preview on full screen will
     * be presented in the real image resolution
     */
    hd?: boolean | undefined;
}
/**
 * Base default props
 */
export const FileItemPropsDefault: FileItemProps = {
    onDelete: undefined,
    file: undefined,
    color: "#071e25",
    //  validator: undefined,
    id: undefined,
    style: {},
    preview: false,
    valid: false,
    info: false,
    hd: undefined
    //fileName: "bottom"
}