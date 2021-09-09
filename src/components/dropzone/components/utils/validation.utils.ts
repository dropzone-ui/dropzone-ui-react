import { getExt } from "../../../file-item/utils";
import { ERROR_ACCEPT, ERROR_MAX_SIZE } from "./errors.utils";


export interface FileValidated {
    file: File;
    valid: boolean;
    id: number;
    errors?: string[];
    uploadMessage?: string;
    uploadStatus?:undefined | "uploading" | "success" | "error";
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
export const validateFile = (file: File, validator: FileValidator): FileValidated => {
    const idGenerated = FileIdGenerator.getNextId();
    let errors: string[] = [];

    const { maxFileSize, accept } = validator;

    //check file size
    if (maxFileSize && file.size > maxFileSize) {
        errors.push(ERROR_MAX_SIZE(maxFileSize));
    }

    //check file type
    // const allowedTypes = accept.filter((type) => (file.type === type))
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(ERROR_ACCEPT);
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
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file 
 * @param validator 
 * @returns 
 */
export const customValidateFile = (file: File, validator: (f: File) => boolean): FileValidated => {
    const idGenerated = FileIdGenerator.getNextId();
    let fileResult: FileValidated = {
        id: idGenerated,
        file: file,
        valid: validator(file)
    };
    // logic here
    return fileResult;
};
export abstract class FileIdGenerator {
    static nextId = 0;
    static getNextId(): number {
        FileIdGenerator.nextId++;
        return FileIdGenerator.nextId;
    }
}

