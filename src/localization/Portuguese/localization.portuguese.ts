import { fileSizeFormater } from "../../components/file-item/utils";
import { LocalLabels } from "../localization";

/**
 * Portuguese translation for Dropzone
 */
export const DropzonePortuguese: LocalLabels = {
    defaultLabel: "Solte seus arquivos aqui ",

    uploadingMessage: (amountOfFiles) => { return `Enviando ${amountOfFiles} arquivos`; },
    uploadFinished: (uploaded, rejected) => `Arquivos enviados: ${uploaded}, Arquivos rejeitados: ${rejected}`,
    noFilesMessage: `Nenhum arquivo válido está faltando para enviar`,
    footer: {
        acceptAll: `Todos os tipos de arquivo são aceitos`,
        acceptCustom: (accept) => `Tipos permitidos: ${accept}`
    },
    header: {
        uploadFilesMessage: "Enviar",
        maxSizeMessage: (maxFileSize) => `Tamanho máximo: ${maxFileSize}`,
        validFilesMessage: (numberOfValidFiles, maxFiles) => `Arquivos ${numberOfValidFiles}/${maxFiles}`
    },
    fakeuploadsuccess: "O arquivo foi enviado com sucesso",
    fakeUploadError: "Erro ao enviar",
}


/**
 * Portuguese translation for FileItem component
 */
export const FileItemPortuguese: LocalLabels = {
    fullInfoLayer: {
        name: `Nome: `,
        size: "Tamanho: ",
        type: "Tipo: "
    },
    status: {
        uploading: "Enviando",
        success: "êxito",
        valid: "válido",
        denied: "negado",
        error: "erro"
    },
}
/**
 * Portuguese translation for Validation Errors
 */
 export const ValidateErrorPortuguese: LocalLabels = {
    maxSizeError: (maxSize) => `O arquivo é muito grande. O tamanho máximo de arquivo permitido é ${fileSizeFormater(maxSize as number)}`,
    acceptError: `O tipo de arquivo não é permitido `,
    maxFileCount: (maxFiles) => `Quantidade máxima de arquivos (${maxFiles}) alcançada`
}