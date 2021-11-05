import { OverridableProps } from "@unlimited-react-components/kernel";
import { Localization } from "../../../../localization/localization";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import { FileDuiResponse } from "../utils/dropzone-ui.upload.utils";
import { CustomValidateFileResponse, FileValidated } from "../utils/validation.utils";

export interface DropzoneProps extends OverridableProps {
  /**
   * This event is triggered when files are dropped or selected. Returns as first parameter the list of FileValidate files dropped or selected.
   */
  onDrop?: (filesDropped: FileValidated[]) => void;
  /**
   * Upload Url or endpoint
   */
  url?: string;
  /**
   * upload method, can be POST | PUT | PATCH
   */
  method?: "POST" | "PUT" | "PATCH";
  /**
   * Extra configuration for uploading
   * e.g. headers or token bearer
   */
  config?: Object;
  /**
   * If true, onDrop event will return the list of files, but also
   * will upload the files if url was set, and also config
   */
  uploadOnDrop?: boolean;
  /**
   * Max number of files to be accepted.
   */
  maxFiles?: number;
  /**
   * max file size allowed in bytes
   */
  maxFileSize?: number;
  /**
   * If true, the dropzone component itself will be clickable
   */
  clickable?: boolean;
  /**
   * Extra featur to perform on click
   * Only if clickable was set to true
   */
  onClick?: Function;
  /**
   * The default implementation of accept
   * checks the file's mime type or extension
   * against this list. This is a comma
   * separated list of mime types or file extensions.
   * Eg.: image/*,application/pdf,.psd
   */
  accept?: string;
  /**
   * If true, files that does not match accept
   * criteria will be ignored
   */
  removeOnDrop?: boolean;
  /**
   * If present, delete all butoon will be visible
   * and will trigger this function onClick
   */
  onReset?: Function;
  /**
   * if true, will show a ripple everytime
   * the user drops files os selects files
   */
  disableRipple?: boolean;
  /**
   * The background color for dropzone,
   * by default is linear-gradient(to bottom, aliceblue,#b7a8a8)
   */
  backgroundColor?: string;
  /**
   * custom validator
   * must be a function that recieves as first parameter a File Object
   * and must return a boolean value
   */
  validator?: (f: File) => CustomValidateFileResponse;
  /**
   * The current number of valid files
   */
  //numberOfValidFiles?: number;
  /**
   * If present will make change view visible
   * and also return the selected view mode
   */
  onChangeView?: Function;
  /**
   * The current view
   */
  view?: FileItemContainerProps["view"];
  /**
   * The max height of the container
   * in string format
   * by default "500px"
   * 
   * examples: 
   *    "50vh"
   *    "20%"
   *    "40em"
   *    "1rem"
   */
  maxHeight?: string;
  /**
 * The max height of the container
 * in string format
 * by default "500px"
 * 
 * examples: 
 *    "50vh"
 *    "20%"
 *    "40em"
 *    "1rem"
 */
  minHeight?: string;
  /**
   * if true, shows the dropzone footer
   */
  footer?: boolean;
  /**
    * if true, shows the dropzone footer
    */
  header?: boolean;
  /**
   * Just like any other input component
   * the value prop is the current value
   */
  value?: FileValidated[];
  /**
   * This event is triggered when upload process starts
   * also returns the list of files that will be uploaded,
   * Unlike Onchange, onUploadStart will only return a list of files thta are candidates to be uploaded,
   * in case they are valid or upload status is "error"
   */
  onUploadStart?: (files: FileValidated[]) => void;
  /**
  * This event returns as first aparameter the list of responses for each file following the structure:
  * responses = [
  *  {id: <the file id>, serverResponse: the server response}
  * ]
  */
  onUploadFinish?: (responses: FileDuiResponse[]) => void;

  /**
   * A message to show in the footer when the uploading process happens
   */
  uploadingMessage?: string;
  /**
   * Probably one of the most important methods.
   * Onchange returns as first parameter the list of validated files,
   * following the structure:
   * file = 
   *  {
   *      file: File;
   *      valid: boolean;
   *      id: number | string | undefined;
   *      errors?: string[];
   *      uploadMessage?: string;
   *      uploadStatus?: undefined | "uploading", success, error;
   *  }
   *
   * This event is also triggered when upload starts and when upload 
   * finishes for each file in order to update the props on very FIleItem
   */
  onChange?: (files: FileValidated[]) => void;
  /**
   * This event is triggered when "clean button is clicked"
   * Retuns as first parameter the list of files without not valid files
   */
   onClean?: (files: FileValidated[]) => void;
  /**
   * The behaviuor on drop files
   */
  behaviour?: "add" | "replace";
  /**
   * Label to place when no files selected
   */
  label?: string;
  /**
   * Use this prop only in development mode
   * This will make dropzone to simulate a server upload
   */
  fakeUploading?: boolean;
  /**
  * language to be used
  * for now
  * only English, French , Portuguese and Spanish are supported
  */
  localization?: Localization;
}

export const DropzonePropsDefault: DropzoneProps = {
  children: undefined,
  uploadOnDrop: false,
  maxFiles: 7,
  style: {},
  //backgroundColor: "linear-gradient(to bottom, aliceblue,#b7a8a8)",
  //numberOfValidFiles: 0,
  disableRipple: false,
  clickable: true,
  view: "grid",
  maxHeight: "450px",
  minHeight:"280px",
  footer: true,
  header: true,
  config:
  {
    headers: {
      "content-type": "multipart/form-data",
    },
  },
  value: undefined,
  onUploadFinish: undefined,
  uploadingMessage: undefined,
  onClean:undefined,
  behaviour: "add",
  label: undefined,
  localization: "EN-en"
};


