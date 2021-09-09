const createFile = (name: string, size: number, type: string) => {
    const file = new File([], name, { type });
    Object.defineProperty(file, "size", {
        get() {
            return size;
        },
    });
    return file;
};
export const createDPF = (): File => {
    return createFile("test-file-with-large-name.pdf", 4555, "application/pdf");
}
export const createWord = (): File => {
    return createFile("test-file-with-large-name.pdf", 4555, "application/pdf");
}
export const createListOfDPF = (size?: number): File[] => {
    const quantity = size ? size : 15;
    let listFile: File[] = [];
    for (let i = 0; i < quantity; i++) {
        listFile.push(createDPF());
    }
    return listFile;
}