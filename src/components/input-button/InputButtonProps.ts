import { MaterialButtonDefaultProps, MaterialButtonProps } from "@unlimited-react-components/material-button";
import { Localization } from "../../localization/localization";
import { CustomValidateFileResponse } from "../dropzone/components/utils/validation.utils";

export interface InputButtonProps extends MaterialButtonProps {
    /**
     * the id of the component
     */
    id?: string;
    /**
     * whether to accept multiple files or not
     */
    multiple?: boolean;
    /**
     * The list of mimetypes and extensions of files 
     * to accept. This is a comma separated list of
     *  mime types or file extensions. 
     * Eg.: image/\*,application/pdf,.psd
     */
    accept?: string;
    /**
     * If given, this label will be shwed inside the button
     */
    label?: string;
    /**
     * what to do after selecting the files. Returns the File[] to the parent component
     */
    onChange?: Function;
    /**
   * custom validator
   * must be a function that recieves as first parameter a File Object
   * and must return a boolean value
   */
    validator?: (f: File) => CustomValidateFileResponse;
    /**
     * Max number of files to be accepted.
     */
    //maxFiles?: number;
    /**
     * max file size allowed in bytes
     */
    maxFileSize?: number;
    /**
  * language to be used
  * for now
  * only English, French , Portuguese and Spanish are supported
  */
    localization?: Localization;
}

/**
 * The default props when not given
 */
export const InputButtonDefaultProps: InputButtonProps = {
    /**
     * default material button props
     */
    ...MaterialButtonDefaultProps,
    /**
     * default InputButton props
     */
    ...{
        multiple: false,
        accept: "",
        label: "Browse ...",
        onChange: () => { },
        //maxFiles: 7, 
        localization: "EN-en"

    }
}