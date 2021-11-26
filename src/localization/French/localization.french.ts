import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * French translation for Dropzone component
 */
export const DropzoneFrench: LocalLabels = {
    defaultLabel: "Déposez vos fichiers ici",

    uploadingMessage: (amountOfFiles) => { return `Envoi de ${amountOfFiles} fichiers`; },
    uploadFinished: (uploaded, rejected) => `Fichiers téléchargés : ${uploaded}, Fichiers rejetés: ${rejected}`,
    noFilesMessage: `Aucun fichier valide ne manque`,
    footer: {
        acceptAll: `Tous types de fichiers acceptés `,
        acceptCustom: (accept) => `Types de fichier: ${accept}`
    },
    header: {
        uploadFilesMessage: "Envoyer",
        maxSizeMessage: (maxFileSize) => `Taille maximale ${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Fichiers  ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "Le fichier a été téléchargé avec succès",
    fakeUploadError: "Erreur lors du téléchargement ",
}

/**
 * French translation for FileItem component
 */
export const FileItemFrench: LocalLabels = {
    fullInfoLayer: {
        name: `Le nom: `,
        size: "Le taille: ",
        type: "Le type: "
    },
    status: {
        uploading: "En cours",
        success: "Succès",
        valid: "Valide",
        denied: "Refusé",
        error: "Erreur"

    },
}
/**
 * French translation for Validation Errors
 */
 export const ValidateErrorFrench: LocalLabels = {
    maxSizeError: (maxSize) => `File is too big. Max file size allowed is ${fileSizeFormater(maxSize as number)}`,
    acceptError: `Le type de fichier n'est pas autorisé`,
    maxFileCount: (maxFiles) => `Le nombre maximum de fichiers (${maxFiles}) a été atteint`
}