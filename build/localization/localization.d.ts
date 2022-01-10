export declare type Localization = "EN-en" | "ES-es" | "FR-fr" | "IT-it" | "PT-pt" | "RU-ru" | "ZH-cn" | "ZH-hk";
export declare type Components = "dropzone" | "file-item" | "dropzone-footer" | "dropzone-header" | "image-preview";
export declare type FunctionLabel = ((s1: string | number, s2?: string | number, s3?: string) => string);
export interface LocalLabels {
    [label: string]: string | FunctionLabel | LocalLabels;
}
export declare type ComponentLocalizer = {
    [language in Localization]: LocalLabels;
};
