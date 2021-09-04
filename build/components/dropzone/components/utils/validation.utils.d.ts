export interface FileValidated {
    file: File;
    valid: boolean;
    id: number;
    errors?: string[];
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
export declare const validateFile: (file: File, validator: FileValidator) => FileValidated;
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file
 * @param validator
 * @returns
 */
export declare const customValidateFile: (file: File, validator: Function) => FileValidated;
export declare abstract class FileIdGen {
    static nextId: number;
    static getNextId(): number;
}
