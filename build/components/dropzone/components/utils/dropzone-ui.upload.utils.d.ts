import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated } from "./validation.utils";
export declare const uploadPromiseAxios: (file: FileValidated, url: string, method: DropzoneProps["method"], config: any) => Promise<UploadPromiseAxiosResponse>;
export interface UploadPromiseAxiosResponse {
    serverResponse: FileDuiResponse;
    uploadedFile: FileValidated;
}
export interface FileDuiResponse {
    id: number | string | undefined;
    serverResponse: DropzoneUIResponse | {};
}
export interface DropzoneUIResponse {
    status: boolean;
    message: string;
    payload: any;
}
/**
 * In construction
 */
