/**
 *
 * @param tailMime
 * @returns
 */
export declare const audioSelector: (tailMime: string) => string;
export declare const textSelector: (tailMime: string) => string;
export declare const imageSelector: (tailMime: string) => string;
export declare const fontSelector: (tailMime: string) => string;
export declare const videoSelector: (tailMime: string) => string;
/**
 *
 * @param tailMime
 * @returns
 */
export declare const applicationSelector: (tailMime: string) => string;
/**
 * Selects to wich mime type the mime type given belongs to
 * @param mimeType mime type to be searched
 * @returns the generic type,
if not found it return "octet" that means generic binary file
 */
export declare const mimeSelector: (mimeType?: string) => string;
/**
 * Selects to wich mapped extension
 * the given exension belongs to
 *
 * @param extension
 * @returns
 */
export declare const extensionSelector: (extension?: string) => string;
/**
 * Chack for extention whether the file is code os not
 * @param extension
 * @returns
 */
export declare const checkIsCode: (extension?: string) => string;
/**
 * Looks for a suitable file icon
 * @param props mime and extension from file to search
 * @returns the result file ico, if not found, turns octet-stream url
 */
export declare const getURLFileIco: (file: File | undefined) => ResultFileIco;
interface ResultFileIco {
    url: string;
    mimeResume: string;
}
export {};
