import axios, { AxiosResponse } from "axios";
import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated, UPLOADSTATUS } from "./validation.utils";
export const DEFAULT_CONFIG = {
    headers: {
        "content-type": "multipart/form-data;",
    },
};
export const uploadPromiseAxios = async (
    file: FileValidated,
    url: string,
    method: DropzoneProps["method"],
    config: any
): Promise<UploadPromiseAxiosResponse> => {
    return new Promise(async (resolve, reject) => {

        try {
            const localMethod: DropzoneProps["method"] = method || "POST";
            const fileToUpload: File = file.file;
            const formData: FormData = new FormData();
            formData.append("file", fileToUpload);

            const configParams =
                config ? {
                    ...config, ...DEFAULT_CONFIG,
                    headers: {
                        ...config?.headers,
                        ...DEFAULT_CONFIG?.headers
                    }
                } : DEFAULT_CONFIG;
            let response: AxiosResponse<any, any>;//= { data: {} };// await axios.post(url, formData, configParams);

            switch (localMethod) {
                case "POST": response = await axios.post(url, formData, configParams); break;
                case "PATCH": response = await axios.patch(url, formData, configParams); break;
                case "PUT": response = await axios.put(url, formData, configParams); break;
                default:
                    response = await axios.post(url, formData, configParams);
            }

            if (!response || !response.data) {
                // there was a problem on uploading, normally a connexion problem
                resolve(
                    {
                        uploadedFile:
                        {
                            ...file, uploadMessage: "Connection error",
                            uploadStatus: UPLOADSTATUS.error
                        },
                        serverResponse:
                        {
                            id: file.id,
                            serverResponse: {}
                        }
                    }
                );
            }
            const responseDui: DropzoneUIResponse = response.data as DropzoneUIResponse;

            if (responseDui.status) {
                // status is true
                resolve(
                    {
                        uploadedFile:
                        {
                            ...file,
                            uploadMessage: responseDui.message,
                            uploadStatus: UPLOADSTATUS.success
                        },
                        serverResponse:
                        {
                            id: file.id,
                            serverResponse: responseDui
                        }
                    }
                );
            } else {
                // status is false
                resolve(
                    {
                        uploadedFile:
                        {
                            ...file,
                            uploadMessage: responseDui.message,
                            uploadStatus: UPLOADSTATUS.error
                        },
                        serverResponse: {
                            id: file.id,
                            serverResponse: responseDui
                        }
                    }
                );
            }
        } catch (error) {
            // on error
            resolve(
                {
                    uploadedFile:
                    {
                        ...file,
                        uploadMessage: "Unexpected error",
                        uploadStatus: UPLOADSTATUS.error
                    },
                    serverResponse: {
                        id: file.id,
                        serverResponse: {}
                    }
                }
            );
        }
    });
};
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

/// queue
/**
 * In construction
 */
/* export const uploadMultipleConcurrent = async (files: FileValidated[], url: string, config: any | undefined): FileValidated[] => {

    if (files && files.length) {
        return;
    }

    }
} */
