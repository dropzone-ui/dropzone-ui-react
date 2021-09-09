import { OverridableProps } from "@unlimited-react-components/kernel";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import { FileValidated } from "../utils/validation.utils";

export interface DropzoneProps extends OverridableProps {
  /**
   * What to do when Drop event is triggered
   * In most cases is to retrieve the list of files validated
   */
  onDrop?: Function;
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
  validator?: any;
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
   * In both cases of uploading (onDropUpload, or with clicking upload button)
   * This event is the result one by one of the uploading process
   */
  onUploading?: (files: FileValidated[]) => void;
  /**
   * A message to show in the footer when the uploading process happens
   */
  uploadingMessage?: string;
  /**
   * The onChange Event occurs when the value is changed
   */
  onChange?: (files: FileValidated[]) => void;
  /**
   * The behaviuor on drop files
   */
  behaviour?: "add" | "replace";
  /**
   * Label to place when no files selected
   */
  label?:string;
  /**
   * Use this prop only in development mode
   * This will make dropzone to simulate a server upload
   */
   fakeUploading?:boolean;
}

export const DropzonePropsDefault: DropzoneProps = {
  children: undefined,
  uploadOnDrop: false,
  maxFiles: 7,
  style: {},
  backgroundColor: "linear-gradient(to bottom, aliceblue,#b7a8a8)",
  //numberOfValidFiles: 0,
  disableRipple: false,
  clickable: true,
  view: "grid",
  maxHeight: "500px",
  footer: true,
  header: true,
  config:
  {
    headers: {
      "content-type": "multipart/form-data",
    },
  },
  value: undefined,
  onUploading: undefined,
  uploadingMessage: undefined,
  behaviour:"add",
  label:"Drop your files here"
};


