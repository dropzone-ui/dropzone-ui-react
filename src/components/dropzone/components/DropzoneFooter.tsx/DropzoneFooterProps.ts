import { Localization } from "../../../../localization/localization";

export interface DropzoneFooterProps {
    accept?: string;
    message?: string;
    /**
    * language to be used
    * for now
    * only English and Spanish is supported
    */
    localization?: Localization;
}