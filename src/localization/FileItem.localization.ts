import { FileItemRussian } from "./Russian/localization.russian";
import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
import { FileItemEnglish } from "./English/localization.english";
import { FileItemFrench } from "./French/localization.french";
import { FileItemPortuguese } from "./Portuguese/localization.portuguese";
import { FileItemSpanish } from "./Spanish/localization.spanish";
import { FileItemSimplifiedChinese } from "./Chinese-simplified/localization.simplifiedChinese";
import { FileItemTraditionalChinese } from "./Chinese-traditional/localization.traditionalChinese";

export const FileItemLocalizer: ComponentLocalizer = {
    "ES-es": FileItemSpanish,
    "EN-en": FileItemEnglish,
    "FR-fr": FileItemFrench,
    "PT-pt": FileItemPortuguese,
    "RU-ru": FileItemRussian,
    "ZH-cn": FileItemSimplifiedChinese,
    "ZH-hk": FileItemTraditionalChinese
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
        case "RU-ru": return FileItemLocalizer["RU-ru"];
        case "ZH-cn": return FileItemLocalizer["ZH-cn"];
        case "ZH-hk": return FileItemLocalizer["ZH-hk"];
        default: return FileItemLocalizer["EN-en"];
    }
}