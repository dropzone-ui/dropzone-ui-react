import { MaterialButtonProps } from "@unlimited-react-components/material-button";
export interface InputButtonProps extends MaterialButtonProps {
    id?: string;
    /**
     * whether to accept multiple files or not
     */
    multiple?: boolean;
    /**
     * the list of mimetypes and extensions of files to accept
     */
    accept?: string;
    /**
     * If given, this label will be shwed inside the button
     */
    label?: string;
    /**
     * what to do after selecting the files
     * tipically returns the File[] to the parent component
     */
    onChange?: Function;
}
/**
 * The default props when not given
 */
export declare const InputButtonDefaultProps: InputButtonProps;
