/**
 * Creates a synthetic pdf File object instance
 * @param name
 * @param size
 * @param type
 * @returns
 */
export declare const createPDF: (name?: string, size?: number, type?: string) => File;
/**
 * Creates a synthetic word File object instance
 * @param name
 * @param size
 * @param type
 * @returns
 */
export declare const createWord: (name?: string, size?: number, type?: string) => File;
/**
 * Create a list of synthetic files with different mime types
 * @param size the file size for each synthetic file
 * @returns a list of synthetic file
 */
export declare const createListOfMultiTypeFile: (size?: number) => File[];
/**
 * Creates a synthetic file.
 * By default, creates a png image file
 * @param name the file name to show. By default is set to "png-image-file-with-large-name.png"
 * @param size the size in bytes of the file. By default this value is set to 455555
 * @param type the mime type of the file. By default is set to "image/png"
 * @returns
 */
export declare const createSyntheticFile: (name?: string, size?: number, type?: string) => File;
