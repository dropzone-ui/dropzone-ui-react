import axios from "axios";
import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated } from "./validation.utils";

export const uploadPromiseAxios = async (
    file: FileValidated,
    url: string,
    method: DropzoneProps["method"],
    config: any
): Promise<FileValidated> => {
    return new Promise(async (resolve, reject) => {

        try {
            const localMethod: DropzoneProps["method"] = method || "POST";
            const fileToUpload: File = file.file;
            const formData = new FormData();
            formData.append("file", fileToUpload);
            const configParams =
                config ||
                {
                    headers: {
                        "content-type": "multipart/form-data;",
                    },
                };
            let response;//= { data: {} };// await axios.post(url, formData, configParams);
            switch (localMethod) {
                case "POST": response = await axios.post(url, formData, configParams); break;
                case "PATCH": response = await axios.patch(url, formData, configParams); break;
                case "PUT": response = await axios.put(url, formData, configParams); break;
                default: response = await axios.post(url, formData, configParams);
            }
            console.log("uploadValidFiles individual", response);
            if (!response || !response.data) {
                resolve({ ...file, uploadMessage: "unexpectd error", uploadStatus: "error" });
            }
            if (response.data.status) {
                console.log("uploadValidFiles individual", response.data);
                resolve({ ...file, uploadMessage: response.data.message, uploadStatus: "success" });
            } else {
                resolve({ ...file, uploadMessage: response.data.message, uploadStatus: "error" });
            }
        } catch (error) {
            resolve({ ...file, uploadMessage: "unexpectd error", uploadStatus: "error" });
        }
    });
};


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