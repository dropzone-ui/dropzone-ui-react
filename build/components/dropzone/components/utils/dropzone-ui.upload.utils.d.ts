import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated } from "./validation.utils";
/**
 *
 * @param file
 * @param url
 * @param config
 * @returns
 */
export declare const uploadFile: (file: File, url: string, method?: DropzoneProps["method"], config?: any) => Promise<any | undefined>;
export declare const uploadPromiseAxios: (file: FileValidated, url: string, method: DropzoneProps["method"], config: any) => Promise<FileValidated>;
/**
 *
 * @param files
 * @param url
 * @param config
 * @returns
 */
export declare const uploadMultipleSecuential: (uploadById: Function, files: FileValidated[], url: string, method?: DropzoneProps["method"], config?: any) => Promise<FileValidated[]>;
/**
 * In construction
 */
