import axios from "axios";
import { DropzoneProps } from "../Dropzone/DropzoneProps";
import { FileValidated } from "./validation.utils";
/**
 * 
 * @param file 
 * @param url 
 * @param config 
 * @returns 
 */
export const uploadFile = async (
    file: File,
    url: string,
    method?: DropzoneProps["method"],
    config?: any
): Promise<any | undefined> => {
    return new Promise(async (resolve, reject) => {
        // let resultado = undefined;
        const localMethod = method || "POST";
        try {
            const formData = new FormData();
            formData.append("avatar", file);
            const configParams =
                config ||
                {
                    headers: {
                        "content-type": "multipart/form-data;",
                    },
                };
            let response = { data: {} };// await axios.post(url, formData, configParams);
            // switch (localMethod) {
            //     case "POST": response = {};//await axios.post(url, formData, configParams); break;
            //     case "PATCH": response = {};//await axios.patch(url, formData, configParams); break;
            //     case "PUT": response = {};//await axios.put(url, formData, configParams); break;
            //     default: response = {};//await axios.post(url, formData, configParams);
            // }
            console.log("uploadValidFiles individual", response);

            if (response.data) {
                //return response.data.status;
                console.log("uploadValidFiles individual", response.data);
                resolve(response.data);
            } else {
                resolve(undefined);
            }
        } catch (error) {
            reject(undefined);
        }
    });

}


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
/**
 * 
 * @param files 
 * @param url 
 * @param config 
 * @returns 
 */
export const uploadMultipleSecuential = async (
    uploadById: Function,
    files: FileValidated[],
    url: string,
    method?: DropzoneProps["method"],
    config?: any
): Promise<FileValidated[]> => {
    console.log("uploadValidFiles _", files, url, config);
    /*
    When no given files, return an empty array 
    */
    if (files && files.length === 0) {
        console.log("uploadValidFiles salio", files, url, config);
        return [];
    }
    /**
     * initialize value to return
     */
    let filesUpdated: FileValidated[] = [];

    //For each validated file
    for (let i = 0; i < files.length; i++) {
        let currentFile: FileValidated = files[i];

        //if the current validatedFile object contains a valid File object
        if (currentFile.file) {
            try {
                //attemp reached
                //currentFile.upload = true;
                let response: any = undefined;
                response = await uploadFile(currentFile.file, url, method, config);
                if (!response) {
                    currentFile.uploadMessage = "unexpected error ocured";
                    // currentFile.uploaded = false;
                } else {
                    //currentFile.uploaded = true;
                    currentFile.uploadMessage = response.message;
                }
            } catch (error) {
                currentFile.uploadMessage = "unexpected error ocured";
                //currentFile.uploaded = false;
            } finally {
                filesUpdated.push(currentFile);
                //const { id, uploaded, uploadMessage } = currentFile;
                // uploadById( currentFile.id, currentFile.uploaded, currentFile.uploadMessage);
            }

        }
    }
    return filesUpdated;
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