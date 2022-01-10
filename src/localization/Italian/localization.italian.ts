import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * Italian translation for Dropzone component
 */
export const DropzoneItalian: LocalLabels = {
    defaultLabel: "Trascina qui i tuoi file",

    uploadingMessage: (amountOfFiles) => { return `Caricamento di ${amountOfFiles} file`; },
    uploadFinished: (uploaded, rejected) => `File caricati: ${uploaded}, File rifiutati: ${rejected}`,
    noFilesMessage: `Nessun file valido in attesa di essere caricato`,
    footer: {
        acceptAll: `Tutti i tipi di file sono accettati`,
        acceptCustom: (accept) => `Tipi di file consentiti: ${accept}`
    },
    header: {
        uploadFilesMessage: "Caricamento",
        maxSizeMessage: (maxFileSize) => `Dimensione massima ${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `File  ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "Il file è stato caricato con successo ",
    fakeUploadError: "Errore di caricamento del file",
}

/**
 * Italian translation for FileItem component
 */
export const FileItemItalian: LocalLabels = {
    fullInfoLayer: {
        name: `Nome: `,
        size: "Dimensione: ",
        type: "Tipo: "
    },
    status: {
        uploading: "In corso",
        success: "Successo",
        valid: "Valido",
        denied: "Non válido",
        error: "Errore"

    },
}
/**
 * Italian translation for Validation Errors
 */
 export const ValidateErrorItalian: LocalLabels = {
    maxSizeError: (maxSize) => `Il file è molto grande. Il tam. il massimo è ${fileSizeFormater(maxSize as number)}`,
    acceptError: `Tipo di file illegale`,
    maxFileCount: (maxFiles) => `Numero massimo di file (${maxFiles}) raggiunto`
}