import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * Spanish translation for Dropzone component
 */
export const DropzoneSpanish: LocalLabels = {
    defaultLabel: "Suelta tus archivos aquí",

    uploadingMessage: (amountOfFiles) => { return `Subiendo ${amountOfFiles} archivos`; },
    uploadFinished: (uploaded, rejected) => `Archivos subidos: ${uploaded}, Archivos rechazados: ${rejected}`,
    noFilesMessage: `No hay archivos válidos pendientes por subir`,
    footer: {
        acceptAll: `Todos los tipos de archivo aceptados`,
        acceptCustom: (accept) => `Tipo(s) de archivo permitidos: ${accept}`
    },
    header: {
        uploadFilesMessage: "Subir",
        maxSizeMessage: (maxFileSize) => `Tam. máximo ${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Archivos ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "El archivo se subió correctamente",
    fakeUploadError: "Error al subir el archivo",
}

/**
 * Spanish translation for FileItem component
 */
export const FileItemSpanish: LocalLabels = {
    fullInfoLayer: {
        name: `Nombre: `,
        size: "Tamaño: ",
        type: "Tipo: "
    },
    status: {
        uploading: "Subiendo",
        success: "Éxito",
        valid: "Válido",
        denied: "No válido",
        error: "Error"

    },
}
/**
 * Spanish translation for Validation Errors
 */
 export const ValidateErrorSpanish: LocalLabels = {
    maxSizeError: (maxSize) => `El archivo es muy grande. El tam. máximo es ${fileSizeFormater(maxSize as number)}`,
    acceptError: `Tipo de archivo no permitido`,
    maxFileCount: (maxFiles) => `Cantidad máxima de archivos (${maxFiles}) alcanzada`
}
