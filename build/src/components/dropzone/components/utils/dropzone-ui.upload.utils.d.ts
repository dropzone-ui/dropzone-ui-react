import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated } from "./validation.utils";
export declare const uploadPromiseAxios: (file: FileValidated, url: string, method: DropzoneProps["method"], config: any) => Promise<FileValidated>;
/**
 * In construction
 */
