/**
 * @deprecated use readImagePromise() instead.
 *
 * Read an image and returns the URL expresion in base 64
 * @param file the image file
 * @param afterRead a function of what to do when load finishes
 */
export declare const readImage: (file: File, afterRead: Function) => void;
/**
 *
 * @param base64Str
 * @param maxWidth
 * @param maxHeight
 * @returns
 */
export declare function resizeImage(base64Str: string, maxWidth?: number, maxHeight?: number): Promise<string | undefined>;
/**
 * Reads an image file in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File image object
 * @returns data URL of the image file
 */
export declare const readImagePromise: (file: File) => Promise<string | undefined>;
