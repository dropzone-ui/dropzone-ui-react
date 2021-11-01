import { SyntheticFile } from "./SyntheticFile";


export const createPDF = (
    name = "pdf-file-with-large-name.pdf",
    size = 455005,
    type = "application/pdf"
): File => {
    return SyntheticFile.createFile(name, size, type);
}

export const createWord = (
    name = "word-file-with-large-name.docx",
    size = 4555,
    type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
): File => {
    return SyntheticFile.createFile(name, size, type);
}


export const createListOfMultiTypeFile = (size?: number): File[] => {

    return SyntheticFile.createFileListMiscelanious(size);
}