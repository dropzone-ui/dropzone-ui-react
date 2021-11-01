import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { FileItemEnglish } from "./localization.english";
import { FileItemFrench } from "./localization.french";
import { FileItemPortuguese } from "./localization.portuguese";
import { FileItemSpanish } from "./localization.spanish";

export const FileItemLocalizer: ComponentLocalizer = {
    "ES-es": FileItemSpanish,
    "EN-en": FileItemEnglish,
    "FR-fr": FileItemFrench,
    "PT-pt": FileItemPortuguese
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
        case "PT-pt": return FileItemLocalizer["PT-pt"];
        default: return FileItemLocalizer["EN-en"];
    }
}