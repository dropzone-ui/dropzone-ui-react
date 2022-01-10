/**
 * @param size the size of the file in bytes, by default 4555 bytes
 * @returns a PDF file
 */
export declare const createDPF: (size?: number) => File;
/**
 * @param size the size of the file in bytes, by default 4555 bytes
 * @returns a word file
 */
export declare const createWord: (size?: number) => File;
/**
 * Creates a dummy pdf file with an specific size in bytes
 * if not given, size will be 15 bytes
 * @param amount the amount of items in the array of files
 * @returns a pdf file
 */
export declare const createListOfPDF: (amount?: number) => File[];
/**
 * Gives a XX.XX format in Bytes KB, MB, GB or TB
 * @param fileSize file size to give format in Bytes
 */
export declare const fileSizeFormater: (fileSize?: number) => string;
/**
 * Looks for the first file extension
 * @param fileName file name
 * @returns the file name extension
 */
export declare const getExt: (fileName: string) => string;
/**
 *
 * @param word
 * @returns
 */
export declare const shrinkWord: (word?: string) => string;
