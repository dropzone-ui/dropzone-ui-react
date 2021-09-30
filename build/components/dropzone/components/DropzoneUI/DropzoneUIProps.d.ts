import { FileItemProps } from "../../../file-item/components/FileItem/FileItemProps";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import { DropzoneProps } from "../Dropzone/DropzoneProps";
export interface DropzoneUIProps extends DropzoneProps, FileItemProps, FileItemContainerProps {
}
