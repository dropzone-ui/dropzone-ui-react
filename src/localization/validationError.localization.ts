import { ValidateErrorRussian } from "./Russian/localization.russian";
import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { ValidateErrorEnglish } from "./English/localization.english";
import { ValidateErrorFrench } from "./French/localization.french";
import { ValidateErrorPortuguese } from "./Portuguese/localization.portuguese";
import { ValidateErrorSpanish } from "./Spanish/localization.spanish";
import { ValidateErrorSimplifiedChinese } from "./Chinese-simplified/localization.simplifiedChinese";
import { ValidateErrorTraditionalChinese } from "./Chinese-traditional/localization.traditionalChinese";
import { ValidateErrorItalian } from "./Italian/localization.italian";

export const ValidateErrorLocalizer: ComponentLocalizer = {
    "ES-es": ValidateErrorSpanish,
    "EN-en": ValidateErrorEnglish,
    "FR-fr": ValidateErrorFrench,
    "IT-it": ValidateErrorItalian,
    "PT-pt": ValidateErrorPortuguese,
    "RU-ru": ValidateErrorRussian,
    "ZH-cn": ValidateErrorSimplifiedChinese,
    "ZH-hk": ValidateErrorTraditionalChinese,
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
        case "IT-it": return ValidateErrorLocalizer["IT-it"];
        case "PT-pt": return ValidateErrorLocalizer["PT-pt"];
        case "RU-ru": return ValidateErrorLocalizer["RU-ru"];
        case "ZH-cn": return ValidateErrorLocalizer["ZH-cn"];
        case "ZH-hk": return ValidateErrorLocalizer["ZH-hk"];
        default: return ValidateErrorLocalizer["EN-en"];
    }
}