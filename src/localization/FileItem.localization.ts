import { ComponentLocalizer, LocalLabels, Localization } from "./localization";


/**
 * English translation for FileItem component
 */
export const FileItemEnglish: LocalLabels = {
    fullInfoLayer: {
        name: `Name: `,
        size: "Size: ",
        type: "Type: "
    },
    status: {
        uploading: "Uploading",
        success: "success",
        valid: "valid",
        denied: "not valid",
        error: "error"
    },
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
        success: "succès",
        valid: "valide",
        denied: "non valide",
        error: "erreur"

    },
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
        success: "éxito",
        valid: "válido",
        denied: "no válido",
        error: "error"

    },
}

export const FileItemLocalizer: ComponentLocalizer = {
    "ES-es": FileItemSpanish,
    "EN-en": FileItemEnglish,
    "FR-fr": FileItemFrench,
}

/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const FileItemLocalizerSelector = (local: Localization): LocalLabels => {
    switch (local) {
        case "ES-es": return FileItemLocalizer["ES-es"];
        case "EN-en": return FileItemLocalizer["EN-en"];
        case "FR-fr": return FileItemLocalizer["FR-fr"];
        default: return FileItemLocalizer["EN-en"];
    }
}