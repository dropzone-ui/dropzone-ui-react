import { ValidateErrorRussian } from "./localization.russian";
import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { ValidateErrorEnglish } from "./localization.english";
import { ValidateErrorFrench } from "./localization.french";
import { ValidateErrorPortuguese } from "./localization.portuguese";
import { ValidateErrorSpanish } from "./localization.spanish";

export const ValidateErrorLocalizer: ComponentLocalizer = {
    "ES-es": ValidateErrorSpanish,
    "EN-en": ValidateErrorEnglish,
    "FR-fr": ValidateErrorFrench,
    "PT-pt": ValidateErrorPortuguese,
    "RU-ru": ValidateErrorRussian,
}
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export const ValidateErrorLocalizerSelector = (local: Localization | undefined): LocalLabels => {
 
    switch (local) {
        case "ES-es": return ValidateErrorLocalizer["ES-es"];
        case "EN-en": return ValidateErrorLocalizer["EN-en"];
        case "FR-fr": return ValidateErrorLocalizer["FR-fr"];
        case "PT-pt": return ValidateErrorLocalizer["PT-pt"];
        case "RU-ru": return ValidateErrorLocalizer["RU-ru"];
        default: return ValidateErrorLocalizer["EN-en"];
    }
}