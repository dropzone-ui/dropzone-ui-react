import { getExt } from "./utils.files";

import {
    aac, abw, accdb, avi, azw,
    bmp, bz, bz2, cda,
    csh, css, csv,
    docx, drawio,
    eot, epub,
    freearc, gif, gzip,
    html, icalendar,
    jar, java, javascript, jpeg, json, jsonld,
    midi, mp3, mp4, mpeg, mpkg,
    octet, odp, ods, odt, opus, otf,
    pdf, php, png, pptx, psd, python,
    rar, react, rtf,
    sass, sevenzip, sh,  swf,
    tar, text, tiff, ttf, typescript,
    vsd, vue,
    wav, weba, webm, webp, wma, wmv, woff,
    xlsx, xml, xul,
    zip
} from "./IconFiles";

const DEF_GEN_MIME: string = "octet";
/**
 * 
 * @param tailMime 
 * @returns 
 */
export const audioSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "aac": return "aac";
        case "midi": return "midi";
        case "x-midi": return "midi";
        case "mpeg": return "mpeg";//mp3
        // case "ogg": return "oga";
        case "opus": return "opus";
        case "wav": return "wav";
        case "webm": return "webm";
        //case "3gpp": return "threegp";
        //case "3gpp2": return "threegp";
        //case "mp3": return "mp3";
        case "wma": return "wma";
        default: return DEF_GEN_MIME;
    }
}
export const textSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "css": return "css";
        case "csv": return "csv";
        case "html": return "html";
        case "calendar": return "icalendar";
        case "javascript": return "javascript";
        case "x-javascript": return "javascript";
        case "plain": return "text";
        case "xml": return "xml";
        default: return DEF_GEN_MIME;

    }
}
export const imageSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "bmp": return "bmp";
        case "gif": return "gif";
        // case "vnd.microsoft.icon": return "ico";
        case "ico": return "ico";
        case "jpg": return "jpeg";
        case "jpeg": return "jpeg";
        case "png": return "png";
        //case "svg+xml": return "svg";
        //case "svg": return "svg";
        case "tiff": return "tiff";
        case "webp": return "webp";
        default: return DEF_GEN_MIME;

    }
}
export const fontSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "otf": return "otf";
        case "ttf": return "ttf";
        case "woff": return "woff";
        case "woff2": return "woff";
        default: return DEF_GEN_MIME;

    }
}

export const videoSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "x-msvideo": return "avi";
        case "msvideo": return "avi";
        case "mp4": return "mp4";
        case "mpeg": return "mpeg";
        // case "ogg": return "ogv";
        case "mp2t": return "mp2t";
        case "wmv": return "wmv";

        case "webm": return "webm";
        // case "3gpp": return "threegp";
        // case "3gpp2": return "threegp2";

        default: return DEF_GEN_MIME;
    }
}
/**
 * 
 * @param tailMime 
 * @returns 
 */
export const applicationSelector = (tailMime: string): string => {
    switch (tailMime) {
        case "x-abiword": return "abw";
        case "abiword": return "abw";
        case "x-freearc": return "arc";
        case "freearc": return "arc";
        case "vnd.amazon.ebook": return "azw";
        case "octet-stream": return "octet";
        case "x-bzip": return "bz";
        case "x-bzip2": return "bz2";
        case "bzip": return "bz";
        case "bzip2": return "bz2";
        case "x-cdf": return "cda";
        case "msaccess": return "accdb";
        case "csh": return "csh";
        case "x-csh": return "csh";
        case "vnd.ms-fontobject": return "eot";
        case "epub+zip": return "epub";
        case "gzip": return "gzip";
        case "java-archive": return "jar";
        case "x-javascript": return "javascript";
        case "json": return "json";
        case "ld+json": return "jsonld";
        case "vnd.apple.installer+xml": return "mpkg";
        //case "ogg": return "ogx";
        case "vnd.rar": return "rar";
        case "rtf": return "rtf";
        case "x-sh": return "sh";
        case "sh": return "sh";
        case "x-shockwave-flash": return "swf";
        case "x-tar": return "tar";
        case "x-httpd-php": return "php";
        case "vnd.visio": return "vsd";
        case "xhtml+xml": return "xhtml";
        case "xml": return "xml";
        case "vnd.mozilla.xul+xml": return "xul";
        case "vnd.openxmlformats-officedocument.wordprocessingml.document": return "docx";
        case "msword": return "docx";
        case "vnd.openxmlformats-officedocument.spreadsheetml.sheet": return "xlsx";
        case "vnd.openxmlformats-officedocument.presentationml.presentation": return "pptx";
        case "vnd.ms-powerpoint": return "pptx";
        case "vnd.oasis.opendocument.presentation": return "odp";
        case "vnd.oasis.opendocument.text": return "odt";
        case "vnd.oasis.opendocument.spreadsheet": return "ods";
        case "zip": return "zip";
        case "x-zip-compressed": return "zip";
        case "pdf": return "pdf";
        default: return DEF_GEN_MIME;
    }
}
/**
 * Selects to wich mime type the mime type given belongs to
 * @param mimeType mime type to be searched 
 * @returns the generic type, 
if not found it return "octet" that means generic binary file
 */
export const mimeSelector = (mimeType?: string): string => {
    // let genericMime: string | undefined = undefined;
    if (!mimeType || !mimeType.includes("/")) {
        return DEF_GEN_MIME;
    }
    let headerMime = mimeType.split("/")[0];
    let tailMime = mimeType.split("/")[1];
    /**
     * Every mimetype that 
     * starts with: "application/...."
     */

    switch (headerMime) {
        case "application": return applicationSelector(tailMime);
        case "audio": return audioSelector(tailMime);
        case "video": return videoSelector(tailMime);
        case "text": return textSelector(tailMime);
        case "image": return imageSelector(tailMime);
        case "font": return fontSelector(tailMime);

        default: return DEF_GEN_MIME;
    }
}
/**
 * Selects to wich mapped extension
 * the given exension belongs to
 * 
 * @param extension 
 * @returns 
 */
export const extensionSelector = (extension?: string): string => {
    let genericMime: string = "octet";

    if (extension && extension !== "") {
        if (extension.includes("zip") || extension.includes("rar")) {
            genericMime = "zip";
        } else if (extension.includes("doc")) {
            genericMime = "docx";
        } else if (extension.includes("xls")) {
            genericMime = "xlsx";
        } else if (extension.includes("drawio")) {
            genericMime = "drawio";
        } else if (extension.includes("psd")) {
            genericMime = "psd";
        } else if (extension.includes("csv")) {
            genericMime = "csv";
        } else if (extension === "jsx") {
            genericMime = "react";
        } else if (extension === "py") {
            genericMime = "python";
        } else if (extension === "vue") {
            genericMime = "vue";
        } else if (extension === "java") {
            genericMime = "java";
        } else if (extension === "ts") {
            genericMime = "ts";
        } else if (extension === "sass" || extension === "scss") {
            genericMime = "sass";
        }
    }
    return genericMime;

}
/**
 * Chack for extention whether the file is code os not
 * @param extension 
 * @returns 
 */
export const checkIsCode = (extension?: string): string => {
    let genericMime = "text";
    if (extension && extension !== "") {
        if (extension === "jsx") {
            genericMime = "react";
        } else if (extension === "py") {
            genericMime = "python";
        } else if (extension === "vue") {
            genericMime = "vue";
        } else if (extension === "java") {
            genericMime = "java";
        } else if (extension === "ts" || extension === "tsx") {
            genericMime = "typescript";
        } else if (extension === "js") {
            genericMime = "javascript";
        } else if (extension === "xml") {
            genericMime = "xml";
        } else if (extension === "php") {
            genericMime = "php";
        }
    }
    return genericMime;
}

/**
 * Looks for a suitable file icon
 * @param props mime and extension from file to search
 * @returns the result file ico, if not found, turns octet-stream url
 */
export const getURLFileIco = (file: File | undefined): ResultFileIco => {

    let result = "";
    //if not file, return octet
    if (!file) {
        result = DEF_GEN_MIME;
        return { url: mimeUrlList[result], mimeResume: result };
    } else {
        result = mimeSelector(file.type);
    }
    //console.log("got result:",result);
    //If plain text
    const extention: string = getExt(file.name);
    //console.log("got extention:",extention);

    if (result === "text") {
        result = checkIsCode(extention);
        //console.log("got checkIsCode:",result);

    }
    //If octet stream result, second chance: file extention
    if (result === DEF_GEN_MIME) {
        result = extensionSelector(extention);
    }

    return { url: mimeUrlList[result], mimeResume: result };
}
interface ResultFileIco {
    url: string;
    mimeResume: string;
}
/**
 * set of registered mimes on MDN
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 * 
 */
interface MimeSelector {
    [mime: string]: string;
}

const mimeUrlList: MimeSelector = {
    img: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_image_x16.png",
    video: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_video_x16.png",
    audio: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_audio_x16.png",
    aac: aac,
    accdb: accdb,
    abw: abw,
    arc: freearc,
    avi: avi,
    azw: azw,
    octet: octet,
    bmp: bmp,
    bz: bz,
    bz2: bz2,
    cda: cda,
    csh: csh,
    css: css,
    csv: csv,
    docx: docx,
    drawio: drawio,
    eot: eot,
    epub: epub,
    gzip: gzip,
    gif: gif,
    html: html,
    //ico: ico,
    icalendar: icalendar,
    jar: jar,
    jpeg: jpeg,
    javascript: javascript,
    json: json,
    jsonld: jsonld,
    midi: midi,
    //  js: js,
    mp3: mp3,
    mp4: mp4,
    mpeg: mpeg,
    mpkg: mpkg,
    mp2t: octet,
    odp: odp,
    ods: ods,
    odt: odt,
    // oga: oga,
    //ogv: ogv,
    // ogx: ogx,
    opus: opus,
    otf: otf,
    png: png,
    pdf: pdf,
    php: php,
    pptx: pptx,
    psd: psd,
    rar: rar,
    rtf: rtf,
    sass: sass,
    sh: sh,
    //svg: svg,
    swf: swf,
    tar: tar,
    tiff: tiff,
    ttf: ttf,
    //ts: ts,
    typescript: typescript,
    text: text,
    vsd: vsd,
    wav: wav,
    weba: weba,
    webm: webm,
    webp: webp,
    woff: woff,
    wma: wma,
    wmv: wmv,
    xhtml: html,
    xlsx: xlsx,
    xml: xml,
    xul: xul,
    zip: zip,
    // threegp: threegp,
    sevenzip: sevenzip,
    python: python,
    java: java,
    react: react,
    vue: vue,

};