import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
/**
 * English translation for Dropzone component
 */

export const DropzoneEnglish: LocalLabels = {
    uploadingMessage: (cadena) => { return `Uploading ${cadena} files`; },
    uploadFinished: (uploaded, rejected) => `Uploaded files: ${uploaded}, Rejected files: ${rejected}`,
    noFilesMessage: `There isn't any missing valid files for uploading`,
    footer: {
        acceptAll: `All file types accepted`,
        acceptCustom: (accept) => `Allowed types: ${accept}`
    },
    header: {
        uploadFilesMessage: "Upload files",
        maxSizeMessage: (maxFileSize) => `Max file size ${maxFileSize} | `,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Files ${numberOfValidFiles}/${maxFiles} | Valid: ${numberOfValidFiles} | `
    },
    fakeuploadsuccess: "File was successfully uploaded",
    fakeUploadError: "Error on uploading",
}

export const DropzoneSpanish: LocalLabels = {
    uploadingMessage: (cadena) => { return `Subiendo ${cadena} archivos`; },
    uploadFinished: (uploaded, rejected) => `Archivos subidos: ${uploaded}, Archivos rechazados: ${rejected}`,
    noFilesMessage: `No hay archivos válidos pendientes por subir`,
    footer: {
        acceptAll: `Todos los tipos de archivo aceptados`,
        acceptCustom: (accept) => `File types: ${accept}`
    },
    header: {
        uploadFilesMessage: "Subir Archivos",
        maxSizeMessage: (maxFileSize) => `Tam. máximo de archivo ${maxFileSize} | `,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Archivos ${numberOfValidFiles}/${maxFiles} | Válidos: ${numberOfValidFiles} | `
    },
    fakeuploadsuccess: "El archivo se subió correctamente",
    fakeUploadError: "Error al subir el archivo",
}

export const DropzoneFrench: LocalLabels = {
    uploadingMessage: (cadena: string) => { return `Télécharger ${cadena} fichiers`; },
    uploadFinished: (uploaded: string, rejected: string) => `Fichiers téléchargés : ${uploaded}, Fichiers rejetés: ${rejected}`,
    noFilesMessage: `Aucun fichier valide ne manque`,
    footer: {
        acceptAll: `Tous types de fichiers acceptés `,
        acceptCustom: (accept: string) => `Types de fichier: ${accept}`
    },
    header: {
        uploadFilesMessage: "Télécharger des fichiers",
        maxSizeMessage: (maxFileSize: number) => `Taille maximale du fichier  ${maxFileSize} | `,
        validFilesMessage: (numberOfValidFiles: number, maxFiles: number) => `Fichiers  ${numberOfValidFiles}/${maxFiles} | Valides: ${numberOfValidFiles} | `
    },
    fakeuploadsuccess: "Le fichier a été téléchargé avec succès",
    fakeUploadError: "Erreur lors du téléchargement ",
}


export const DropzoneLocalizer: ComponentLocalizer = {
    "ES-es": DropzoneSpanish,
    "EN-en": DropzoneEnglish,
    "FR-fr": DropzoneFrench,
}
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const DropzoneLocalizerSelector = (local: Localization): LocalLabels => {
    switch (local) {
        case "ES-es": return DropzoneLocalizer["ES-es"];
        case "EN-en": return DropzoneLocalizer["EN-en"];
        case "FR-fr": return DropzoneLocalizer["FR-fr"];
        default: return DropzoneLocalizer["EN-en"];
    }
}