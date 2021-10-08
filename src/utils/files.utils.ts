const createFile = (name: string, size: number, type: string) => {
    const file = new File([], name, { type });
    Object.defineProperty(file, "size", {
        get() {
            return size;
        },
    });
    return file;
};
export const createPDF = (
    name = "pdf-file-with-large-name.pdf",
    size = 455005,
    type = "application/pdf"
): File => {
    return createFile(name, size, type);
}

export const createWord = (
    name = "word-file-with-large-name.docx",
    size = 4555,
    type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
): File => {
    return createFile(name, size, type);
}

export const createListOfPDF = (size?: number): File[] => {
    const quantity = size ? size : 15;
    let listFile: File[] = [];
    for (let i = 0; i < quantity; i++) {
        listFile.push(createPDF());
    }
    return listFile;
}