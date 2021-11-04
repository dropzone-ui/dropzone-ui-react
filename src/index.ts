import { createPDF, createWord, createListOfMultiTypeFile, createSyntheticFile } from "./utils/files.utils";
import { makeSynthticFileValidate } from "./components/dropzone/components/utils/validation.utils";

import { DropzoneLocalizerSelector, DropzoneLocalizer, DropzoneFrench, DropzoneEnglish, DropzoneSpanish, DropzonePortuguese, DropzoneRussian, DropzoneSimplifiedChinese, DropzoneTraditionalChinese, FileItemLocalizerSelector, FileItemLocalizer, FileItemFrench, FileItemEnglish, FileItemSpanish, FileItemPortuguese, FileItemRussian, FileItemSimplifiedChinese, FileItemTraditionalChinese, ValidateErrorLocalizerSelector, ValidateErrorLocalizer, ValidateErrorFrench, ValidateErrorEnglish, ValidateErrorSpanish, ValidateErrorPortuguese, ValidateErrorRussian, ValidateErrorSimplifiedChinese, ValidateErrorTraditionalChinese} from "./localization";

import { UploadPromiseAxiosResponse as UploadPromiseAxiosResponseType, FileDuiResponse as FileDuiResponseType, DropzoneUIResponse as DropzoneUIResponseType } from "./components/dropzone/components/utils/dropzone-ui.upload.utils";
import { FileValidated as FileValidatedType, UPLOADSTATUS } from "./components/dropzone/components/utils/validation.utils";
export type UploadPromiseAxiosResponse = UploadPromiseAxiosResponseType;
export type FileDuiResponse = FileDuiResponseType;
export type DropzoneUIResponse = DropzoneUIResponseType;
export type FileValidated = FileValidatedType;

export { createPDF, createWord, createListOfMultiTypeFile, createSyntheticFile, makeSynthticFileValidate, UPLOADSTATUS };
export {DropzoneLocalizerSelector, DropzoneLocalizer, DropzoneFrench, DropzoneEnglish, DropzoneSpanish, DropzonePortuguese, DropzoneRussian, DropzoneSimplifiedChinese, DropzoneTraditionalChinese, FileItemLocalizerSelector, FileItemLocalizer, FileItemFrench, FileItemEnglish, FileItemSpanish, FileItemPortuguese, FileItemRussian, FileItemSimplifiedChinese, FileItemTraditionalChinese, ValidateErrorLocalizerSelector, ValidateErrorLocalizer, ValidateErrorFrench, ValidateErrorEnglish, ValidateErrorSpanish, ValidateErrorPortuguese, ValidateErrorRussian, ValidateErrorSimplifiedChinese, ValidateErrorTraditionalChinese, }

export { default as Dropzone } from "./components/dropzone/components/Dropzone/Dropzone";
export * from "./components/dropzone/components/Dropzone/Dropzone";

export { default as DropzoneLabel } from "./components/dropzone/components/DropzoneLabel/DropzoneLabel";
export * from "./components/dropzone/components/DropzoneLabel/DropzoneLabel";

export { default as FileItem } from "./components/file-item/components/FileItem/FileItem";
export * from "./components/file-item/components/FileItem/FileItem";

export { default as FileItemImage } from "./components/file-item/components/FileItemImage/FileItemImage";
export * from "./components/file-item/components/FileItemImage/FileItemImage";

export { default as FileItemContainer } from "./components/file-item/components/FileItemContainer/FileItemContainer";
export * from "./components/file-item/components/FileItemContainer/FileItemContainer";

export { default as FullScreenPreview } from "./components/image-preview/FullScreenPreview";
export * from "./components/image-preview/FullScreenPreview";

export { default as InputButton } from "./components/input-button/InputButton";
export * from "./components/input-button/InputButton";

