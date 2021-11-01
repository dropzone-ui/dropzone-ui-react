import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { DropzoneEnglish } from "./localization.english";
import { DropzoneFrench } from "./localization.french";
import { DropzonePortuguese } from "./localization.portuguese";
import { DropzoneSpanish } from "./localization.spanish";

export const DropzoneLocalizer: ComponentLocalizer = {
    "ES-es": DropzoneSpanish,
    "EN-en": DropzoneEnglish,
    "FR-fr": DropzoneFrench,
    "PT-pt": DropzonePortuguese
}
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const DropzoneLocalizerSelector = (local: Localization | undefined): LocalLabels => {
    switch (local) {
        case "ES-es": return DropzoneLocalizer["ES-es"];
        case "EN-en": return DropzoneLocalizer["EN-en"];
        case "FR-fr": return DropzoneLocalizer["FR-fr"];
        case "PT-pt": return DropzoneLocalizer["PT-pt"];
        default: return DropzoneLocalizer["EN-en"];
    }
}