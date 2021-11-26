import { Localization } from "../../../../localization/localization";
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
    onDelete?: (imageUrl: number | string | undefined) => void;
    /**
     * A function of what to do when "see" button is pressed or clicked
     */
    onSee?: (imageUrl: string) => void;
    /**
     * Whether to see as grid or inline (horizontal list)
     */
    errors?: string[];
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
    * This feature is hidden, it is not present on the documentation
    * because it's experimental. If you found this prop, you can test it 
    * and comment us if any issue is found. Thanks in advance.
    * 
    * Make file name, info layer, size and "valid message"
    * not visible
    */
    onlyImage?: boolean;
    /** 
     * whether to show the info layer or not
     * also whether to make visible the info button or not ,
     * Only works when given a image file
     */
    info?: boolean;
    /**
     * A string representation or web url of the image
     * that will be set to the "src" prop of an <img/> tag
     * <img src={`${url}`} />
     */
    imageUrl?: string;
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
    /**
     * language to be used
     * for now
     * only English and Spanish is supported
     */
    localization?: Localization;
    /**
     * The elevation or shadow of container
     * range of shadows is from 0 to 4,
     * other number o values are considered as 0
     */
    elevation?: "1" | "2" | "3" | "4" | 1 | 2 | 3 | 4 | false;
    /**
     * Flag that determines whether actions are visible always, or only on hover event
     */
    alwaysActive?: boolean;

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
    , localization: "EN-en",
    onlyImage: false,
    imageUrl: undefined,
    errors: undefined,
    elevation: false,
    alwaysActive:undefined,
    //fileName: "bottom"
}
