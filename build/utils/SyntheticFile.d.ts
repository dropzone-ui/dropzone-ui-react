/**
 * A syntetic file creator.
 * Very useful for tests
 */
export declare abstract class SyntheticFile {
    /**
 *
 * @param name the file name
 * @param size the file size
 * @param type the file type
 * @returns
 */
    static createFile: (name: string, size: number, type: string) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_aac: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_abw: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_freearc: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_avi: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_azw: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_octet: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bmp: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bz: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bz2: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_cda: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_csh: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_css: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_csv: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_doc: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_docx: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_eot: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_epub: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_gzip: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_gif: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_htm: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_html: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ico: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_icalendar: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jar: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jpeg: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jpg: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_js: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_json: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jsonld: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mid: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_x_mid: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_midi: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_x_midi: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mjs: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mp3: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mp4: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mpeg: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mpkg: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_odp: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ods: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_odt: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_oga: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ogv: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ogx: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_opus: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_otf: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_png: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_pdf: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_php: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ppt: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_pptx: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_rar: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_rtf: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_sh: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_svg: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_swf: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tar: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tif: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tiff: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ts: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ttf: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_text: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_typescript: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_vsd: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_wav: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_weba: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_webm: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_webp: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_woff: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_woff2: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xhtml: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xlsx: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xls: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xml: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xml_txt: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xul: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_zip: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp2: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp_a: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp_v: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_7z: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_python: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_java: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_react: (size?: number) => File;
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_vue: (size?: number) => File;
    /**
     * Creates an array of fake (synthetic) files
     * @param size the file size for all synthetic files
     * @returns an array of all file icon preview supported files
     */
    static createFileListMiscelanious: (size?: number) => File[];
}
