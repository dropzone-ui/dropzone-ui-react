import { DropzoneRussian } from "./Russian/localization.russian";
import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { DropzoneEnglish } from "./English/localization.english";
import { DropzoneFrench } from "./French/localization.french";
import { DropzonePortuguese } from "./Portuguese/localization.portuguese";
import { DropzoneSpanish } from "./Spanish/localization.spanish";
import { DropzoneSimplifiedChinese } from "./Chinese-simplified/localization.simplifiedChinese";
import { DropzoneTraditionalChinese } from "./Chinese-traditional/localization.traditionalChinese";
import { DropzoneItalian } from "./Italian/localization.italian";

export const DropzoneLocalizer: ComponentLocalizer = {
    "ES-es": DropzoneSpanish,
    "EN-en": DropzoneEnglish,
    "FR-fr": DropzoneFrench,
    "IT-it": DropzoneItalian,
    "PT-pt": DropzonePortuguese,
    "RU-ru": DropzoneRussian,
    "ZH-cn": DropzoneSimplifiedChinese,
    "ZH-hk": DropzoneTraditionalChinese

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
        case "IT-it": return DropzoneLocalizer["IT-it"];
        case "PT-pt": return DropzoneLocalizer["PT-pt"];
        case "RU-ru": return DropzoneLocalizer["RU-ru"];
        case "ZH-cn": return DropzoneLocalizer["ZH-cn"];
        case "ZH-hk": return DropzoneLocalizer["ZH-hk"];
        default: return DropzoneLocalizer["EN-en"];
    }
}