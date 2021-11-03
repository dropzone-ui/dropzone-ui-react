import { LocalLabels } from "../../../../localization/localization";
export declare enum UPLOADSTATUS {
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
export declare const separateAccept: (accept: string | undefined) => string[];
/**
 *
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns
 */
export declare const validateAccept: (accept: string[], file: File) => boolean;
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validator the validator object
 * @returns a FileValidated object
 */
export declare const validateFile: (file: File, validator: FileValidator, localErrors: LocalLabels) => FileValidated;
export interface CustomValidateFileResponse {
    valid: boolean;
    errors?: string[];
}
/**
 * Function that validates a file
 * according to the Filevalidator properties
 * @param file
 * @param validator
 * @returns a CustomValidateFileResponse objectthaat contains 2 fields: list of errors and boolean value "valid"
 */
export declare const customValidateFile: (file: File, validator: (f: File) => CustomValidateFileResponse) => FileValidated;
/**
 * An id generaor
 */
export declare abstract class FileIdGenerator {
    static nextId: number;
    /**
     * Increases the id conter and returns the next id available.
     * @returns the next integer id available
     */
    static getNextId(): number;
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
export declare const makeSynthticFileValidate: (file: File, valid?: boolean, uploadStatus?: UPLOADSTATUS, uploadMessage?: string) => FileValidated;
/**
 * list of dumy errors in english
 */
export declare const listOfErrors: string[];
