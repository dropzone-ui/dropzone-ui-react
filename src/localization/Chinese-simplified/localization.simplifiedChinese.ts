
import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * English translation for Dropzone component
 */
export const DropzoneSimplifiedChinese: LocalLabels = {
    defaultLabel: "将您的文件放在这里",
    uploadingMessage: (amountOfFiles) => { return `上传 ${amountOfFiles} 个文件`; },
    uploadFinished: (uploaded, rejected) => `上传文件：${uploaded}，拒绝文件：${rejected}`,
    noFilesMessage: `没有缺少要加载的有效文件`,
    footer: {
        acceptAll: `接受所有文件类型`,
        acceptCustom: (accept) => `允许的类型: ${accept}`
    },
    header: {
        uploadFilesMessage: "上传文件",
        maxSizeMessage: (maxFileSize) => `最大文件大小：${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `文档 ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "文件已成功上传",
    fakeUploadError: "上传时出错",
}

/**
 * English translation for FileItem component
 */
export const FileItemSimplifiedChinese: LocalLabels = {
    fullInfoLayer: {
        name: `文档名称: `,
        size: "尺寸: ",
        type: "文件类型: "
    },
    status: {
        uploading: "上传",
        success: "成功",
        valid: "接受的文件",
        denied: "被拒绝的文件",
        error: "错误"
    },
}

/**
 * English translation for Validation Errors
 */
export const ValidateErrorSimplifiedChinese: LocalLabels = {
    maxSizeError: (maxSize) =>
        `文件太大。 允许的最大文件大小为 ${fileSizeFormater(maxSize as number)}`,
    acceptError: `文件类型不允许`,
    maxFileCount: (maxFiles) =>
        `已达到最大文件数 (${maxFiles})`
}