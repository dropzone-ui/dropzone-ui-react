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
 * Checks whether a file is valid or not given an array of file extentions and mime types
 * e.g. accept =  [".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns true if the mime type file is included in the accept param
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
 * Function that validates a file
 * according to the Filevalidator properties
 * @param file 
 * @param validator 
 * @returns a CustomValidateFileResponse objectthaat contains 2 fields: list of errors and boolean value "valid"
 */
export const customValidateFile = (
    file: File,
    validator: (f: File) => CustomValidateFileResponse
): FileValidated => {
    const id = FileIdGenerator.getNextId();
    const { valid, errors } = validator(file);
    let fileResult: FileValidated = {
        id,
        file,
        valid,
        errors
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
     * Increases the id conter and returns the next id available.
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
 * @returns a random number between min (included) and max (excluded)
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
 * Make a validated file that is ready to be used on FileItem component,
 * if valid is not set, a random operation will decide whether the file is valid or not
 * If valid is false, then the natural order is not to be uploadable and wont have upload message nor upload status
 * If valid is true, then file can be uploaded and can have upload message if the status is succes or error
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
    //if valid, naturally, can be uploaded
    let errors: string[] | undefined = [];
    let newUpoadStatus = uploadStatus || getRandomUploadStatus();

    let customUploadMessage: string | undefined = uploadMessage || "";
    if (valid) {
        //we can decide according to upload status 
        if (!uploadMessage) {
            switch (newUpoadStatus) {
                case UPLOADSTATUS.error: customUploadMessage = "Upload failed. There was an error"; break;
                case UPLOADSTATUS.success: customUploadMessage = "File was successfully upload"; break;
                default: uploadMessage = undefined;
            }
        }
        errors = undefined;
    } else {
        //if not valid, just show error messages
        const randInt: number = getRandomInt(0, 3);
        errors.push(listOfErrors[randInt]);
        newUpoadStatus = undefined;
        customUploadMessage = undefined;
    }
    //now make a File Validated instance 
    const newFileValidated: FileValidated = {
        id: FileIdGenerator.getNextId(),
        valid: valid,
        file: file,
        uploadStatus: newUpoadStatus,
        uploadMessage: customUploadMessage,
        errors: errors
    };
    return newFileValidated;
}
/**
 * list of dumy errors in english
 */
export const listOfErrors: string[] = ["File is too big. Max file size allowed is 80mb.", "File's type is not allowed", "Max amount of files (28) has been reached"];