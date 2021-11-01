import { FunctionLabel, LocalLabels } from "../../../../localization/localization";
import { getExt } from "../../../file-item/utils";

export enum UPLOADSTATUS {
    uploading = "uploading",
    success = "success",
    error = "error"
}
export interface FileValidated {
    file: File;
    valid: boolean;
    id: number | string | undefined;
    errors?: string[];
    uploadMessage?: string;
    uploadStatus?: undefined | UPLOADSTATUS;
    // messageKey?:string | ""
}
export interface FileValidator {
    maxFileSize?: number;
    accept?: string;
}
/**
 * Separate the accept string array into an array of strings separated by commas
 * @param accept the string accept array
 * @returns an array of strings in wich every item
 */
export const separateAccept = (accept: string | undefined): string[] => {
    if (!accept || accept.length === 0) {
        return [];
    }
    const commaSeparatedAccpet: string[] = accept.split(",").map((acceptItem) => acceptItem.trim());
    return commaSeparatedAccpet;
}
/**
 * 
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns 
 */
export const validateAccept = (accept: string[], file: File): boolean => {
    let valid: boolean = false;
    const { name, type } = file;
    //Array(5) [ ".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ]
    for (let i = 0; i < accept.length; i++) {
        const acceptItem: string = accept[i];
        //check is not empty
        if (acceptItem.length !== 0) {
            //check extention
            if (acceptItem.charAt(0) === ".") {
                if (acceptItem.includes(getExt(name))) {
                    return true;
                }
            }
            //check mime
            // header/tail  => image/png  ;  image/* ; audio
            if (type && type.length > 0 && acceptItem.includes("/") && type.includes("/")) {
                let headerMime = acceptItem.split("/")[0];
                let tailMime = acceptItem.split("/")[1];

                let headerMimeFile = type.split("/")[0];
                let tailMimeFile = type.split("/")[1];

                if (headerMime === headerMimeFile) {
                    //    image/*
                    if (tailMime === "*") {
                        return true;
                    } else if (tailMime === tailMimeFile) {
                        return true;
                    }
                }
            }
        }
    }
    return valid;
}
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validator the validator object 
 * @returns a FileValidated object
 */
export const validateFile = (
    file: File,
    validator: FileValidator, 
    localErrors: LocalLabels
): FileValidated => {

    const idGenerated = FileIdGenerator.getNextId();
    let errors: string[] = [];

    const { maxFileSize, accept } = validator;

    //check file size
    if (maxFileSize && file.size > maxFileSize) {
        const maxFileSizeErrorMessenger: FunctionLabel = localErrors.maxSizeError as FunctionLabel;
        errors.push(maxFileSizeErrorMessenger(maxFileSize));
    }

    //check file type
    // const allowedTypes = accept.filter((type) => (file.type === type))
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(localErrors.acceptError as string);
    }


    const fileResult: FileValidated = {
        id: idGenerated,
        file: file,
        valid: errors.length === 0,
        errors: errors
    };
    // logic here
    return fileResult;
};
export interface CustomValidateFileResponse {
    valid: boolean,
    errors?: string[]
}
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file 
 * @param validator 
 * @returns 
 */
export const customValidateFile = (
    file: File, 
    validator: (f: File) => CustomValidateFileResponse
    ): FileValidated => {
    const idGenerated = FileIdGenerator.getNextId();
    const { valid, errors } = validator(file);
    let fileResult: FileValidated = {
        id: idGenerated,
        file: file,
        valid: valid,
        errors: errors
    };
    // logic here
    return fileResult;
};

/**
 * An id generaor
 */
export abstract class FileIdGenerator {
    static nextId = 0;
    /**
     * INcreases the id conter and returns the next id available.
     * @returns the next integer id available
     */
    static getNextId(): number {
        FileIdGenerator.nextId++;
        return FileIdGenerator.nextId;
    }
}
/**
 * Random integer between min (included) and max (excluded)
 * @param min 
 * @param max 
 * @returns 
 */
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * Generates a random number betwen 0 and 3
 * where
 * 0 => error
 * 1 => uploading
 * 2 => success
 * 3 => undefined
 * @returns a random upload status or undefined
 */
const getRandomUploadStatus = (): UPLOADSTATUS | undefined => {
    const result: number = getRandomInt(0, 4);
    switch (result) {
        case 0: return UPLOADSTATUS.error;
        case 1: return UPLOADSTATUS.uploading;
        case 2: return UPLOADSTATUS.success;
        default:
            return undefined;
    }
}
/**
 * Make a validated file that is ready to use on FileItem component,
 * if valid is not set, a random operation will decide whether the file is valid or not
 * @param file The file
 * @param valid true if it is a valid file, otherwise is false
 * @param uploadStatus the current upload status. If not given a random upload status will be set
 * @param uploadMessage the upload message after uploading
 * @returns a Vaidated File object
 */
export const makeSynthticFileValidate = (
    file: File,
    valid = (Math.ceil(Math.random() * 28) % 2 === 0),
    uploadStatus?: UPLOADSTATUS,
    uploadMessage?: string
): FileValidated => {
    const newUpoadStatus = uploadStatus || getRandomUploadStatus();
    const newUploadMessage = uploadMessage || newUpoadStatus ? "A bit large upload Message" : undefined;
    return {
        id: FileIdGenerator.getNextId(),
        valid: valid,
        file,
        uploadStatus: newUpoadStatus,
        uploadMessage: newUploadMessage
    }
}

