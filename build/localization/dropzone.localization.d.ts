import { ComponentLocalizer, LocalLabels, Localization } from "./localization";
export declare const DropzoneLocalizer: ComponentLocalizer;
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
export declare const DropzoneLocalizerSelector: (local: Localization | undefined) => LocalLabels;
