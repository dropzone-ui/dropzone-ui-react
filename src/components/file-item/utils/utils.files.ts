/**
 * @param size the size of the file in bytes, by default 4555 bytes
 * @returns a PDF file
 */
export const createDPF = (size?: number): File => {
    return createFile(
        "test-file-with-large-name.pdf",
        size ? size : 4555,
        "application/pdf"
    );
}
/**
 * @param size the size of the file in bytes, by default 4555 bytes
 * @returns a word file
 */
export const createWord = (size?: number): File => {
    return createFile(
        "test-file-with-large-name.pdf",
        size ? size : 4555,
        "application/pdf"
    );
}
/**
 * Creates a dummy pdf file with an specific size in bytes
 * if not given, size will be 15 bytes
 * @param amount the amount of items in the array of files
 * @returns a pdf file
 */
export const createListOfPDF = (amount?: number): File[] => {
    const quantity = amount ? amount : 15;
    let listFile: File[] = [];
    for (let i = 0; i < quantity; i++) {
        listFile.push(createDPF());
    }
    return listFile;
}
/**
 * Gives a XX.XX format in Bytes KB, MB, GB or TB
 * @param fileSize file size to give format in Bytes
 */
export const fileSizeFormater = (fileSize?: number): string => {
    let result = "";
    if (!fileSize) {
        return 0 + " Bytes";
    }
    if (fileSize < 1024) {
        result = fileSize + " Bytes"
    } else {
        //KB
        if (fileSize < 1024 * 1024) {
            result = (fileSize / 1024).toFixed(2) + " KB";
        } else if (fileSize < 1024 * 1024 * 1024) {
            result = ((fileSize / 1024) / 1024).toFixed(2) + " MB";
        } else if (fileSize < 1024 * 1024 * 1024 * 1024) {
            result = (((fileSize / 1024) / 1024) / 1024).toFixed(2) + " GB";
        } else {
            result = ((((fileSize / 1024) / 1024) / 1024) / 1024).toFixed(2) + " TB";
        }
    }
    return result;
}
/**
 * Looks for the first file extension
 * @param fileName file name
 * @returns the file name extension
 */
export const getExt = (fileName: string): string => {
    const re = /(?:\.([^.]+))?$/;
    const result = re.exec(fileName);
    if (result) {
        return result[1];
    } else {
        return "";
    }

};
/**
 * Basic function to create dummy files for tests
 * @param name the file name
 * @param size the file size in bytes
 * @param type the file type
 * @returns a file object
 */
const createFile = (name: string, size: number, type: string) => {
    const file = new File([], name, { type });
    Object.defineProperty(file, "size", {
        get() {
            return size;
        },
    });
    return file;
};
const MAX_SIZE_WORD = 30;
/**
 * 
 * @param word 
 * @returns 
 */
export const shrinkWord = (word=""): string => {
    let newWord = word;
    if (word.length >= MAX_SIZE_WORD) {
        newWord = word.slice(0, 13) + "..." + word.slice(-8);
    }
    return newWord;
};