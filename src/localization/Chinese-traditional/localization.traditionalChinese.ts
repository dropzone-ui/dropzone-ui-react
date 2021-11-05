
import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * English translation for Dropzone component
 */
export const DropzoneTraditionalChinese: LocalLabels = {
    defaultLabel: "把你的文件放在這裡 ",
    uploadingMessage: (amountOfFiles) => { return `上傳${amountOfFiles}個文件`; },
    uploadFinished: (uploaded, rejected) => `上傳文件: ${uploaded}, 拒絕的文件：${rejected}`,
    noFilesMessage: `沒有缺少要上傳的有效文件`,
    footer: {
        acceptAll: `接受所有文件類型`,
        acceptCustom: (accept) => `允許的類型：${accept}`
    },
    header: {
        uploadFilesMessage: "上傳文件",
        maxSizeMessage: (maxFileSize) => `最大文件大小：${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => ` 文件 ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "文件已成功上傳",
    fakeUploadError: "上傳時出錯",
}

/**
 * English translation for FileItem component
 */
export const FileItemTraditionalChinese: LocalLabels = {
    fullInfoLayer: {
        name: `文檔名稱: `,
        size: "文件大小: ",
        type: "文件類型: "
    },
    status: {
        uploading: "上傳",
        success: "成功",
        valid: "有效文件",
        denied: "無效文件",
        error: "錯誤"
    },
}

/**
 * English translation for Validation Errors
 */
export const ValidateErrorTraditionalChinese: LocalLabels = {
    maxSizeError: (maxSize) =>
        `文件太大。 允許的最大文件大小為 ${fileSizeFormater(maxSize as number)}`,
    acceptError: `文件類型不允許`,
    maxFileCount: (maxFiles) =>
        `已達到最大文件數 (${maxFiles})`
}