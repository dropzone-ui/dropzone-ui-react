import { SyntheticFile } from "./SyntheticFile";

/**
 * Creates a synthetic pdf File object instance
 * @param name 
 * @param size 
 * @param type 
 * @returns 
 */
export const createPDF = (
    name = "pdf-file-with-large-name.pdf",
    size = 455005,
    type = "application/pdf"
): File => {
    return SyntheticFile.createFile(name, size, type);
}

/**
 * Creates a synthetic word File object instance
 * @param name 
 * @param size 
 * @param type 
 * @returns 
 */
export const createWord = (
    name = "word-file-with-large-name.docx",
    size = 4555,
    type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
): File => {
    return SyntheticFile.createFile(name, size, type);
}

/**
 * Create a list of synthetic files with different mime types
 * @param size the file size for each synthetic file
 * @returns a list of synthetic file
 */
export const createListOfMultiTypeFile = (size?: number): File[] => {
    return SyntheticFile.createFileListMiscelanious(size);
}
/**
 * Creates a synthetic file.
 * By default, creates a png image file
 * @param name the file name to show. By default is set to "png-image-file-with-large-name.png"
 * @param size the size in bytes of the file. By default this value is set to 455555
 * @param type the mime type of the file. By default is set to "image/png"
 * @returns 
 */
export const createSyntheticFile = (
    name = "png-image-file-with-large-name.png",
    size = 455555,
    type = "image/png",
): File => {
    return SyntheticFile.createFile(name, size, type);
}