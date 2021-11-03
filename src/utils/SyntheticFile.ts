
/**
 * A syntetic file creator.
 * Very useful for tests
 */
export abstract class SyntheticFile {
    /**
 * 
 * @param name the file name
 * @param size the file size
 * @param type the file type
 * @returns 
 */
    static createFile = (name: string, size: number, type: string) => {
        const file = new File([], name, { type });
        Object.defineProperty(file, "size", {
            get() {
                return size;
            },
        });
        return file;
    };
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_aac = (size?: number): File => {
        return SyntheticFile.createFile("acc_audio-file-with-large-name.aac", size ? size : 3516516, "audio/aac");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_abw = (size?: number): File => {
        return SyntheticFile.createFile("abiword-file-with-large-name.abw", size ? size : 3516516, "application/x-abiword");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_freearc = (size?: number): File => {
        return SyntheticFile.createFile("freearc-file-with-large-name.arc", size ? size : 3516516, "application/x-freearc");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_avi = (size?: number): File => {
        return SyntheticFile.createFile("avi-file-with-large-name.avi", size ? size : 3516516, "video/x-msvideo");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_azw = (size?: number): File => {
        return SyntheticFile.createFile("amazon_kindle_ebook-file-with-large-name.azw", size ? size : 3516516, "application/vnd.amazon.ebook");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_octet = (size?: number): File => {
        return SyntheticFile.createFile("binary_octet_stream-file-with-large-name.bin", size ? size : 3516516, "application/octet-stream");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bmp = (size?: number): File => {
        return SyntheticFile.createFile("bit_map-file-with-large-name.bmp", size ? size : 3516516, "image/bmp");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bz = (size?: number): File => {
        return SyntheticFile.createFile("x_bzip-file-with-large-name.bz", size ? size : 3516516, "application/x-bzip");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_bz2 = (size?: number): File => {
        return SyntheticFile.createFile("x_bzip_2-file-with-large-name.bz2", size ? size : 3516516, "application/x-bzip2");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_cda = (size?: number): File => {
        return SyntheticFile.createFile("cd_audio-file-with-large-name.cda", size ? size : 3516516, "application/x-cdf");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_csh = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.csh", size ? size : 3516516, "application/x-csh");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_css = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.css", size ? size : 3516516, "text/css");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_csv = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.csv", size ? size : 3516516, "text/csv");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_doc = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.doc", size ? size : 3516516, "application/msword");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_docx = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.docx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_eot = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.eot", size ? size : 3516516, "application/vnd.ms-fontobject");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_epub = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.epub", size ? size : 3516516, "application/epub+zip");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_gzip = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.gz", size ? size : 3516516, "application/gzip");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_gif = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.gif", size ? size : 3516516, "image/gif");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_htm = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.htm", size ? size : 3516516, "text/html");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_html = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.html", size ? size : 3516516, "text/html");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ico = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ico", size ? size : 3516516, "image/vnd.microsoft.icon");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_icalendar = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ics", size ? size : 3516516, "text/calendar");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jar = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.jar", size ? size : 3516516, "application/java-archive");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jpeg = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.jpeg", size ? size : 3516516, "image/jpeg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jpg = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.jpg", size ? size : 3516516, "image/jpeg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_js = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.js", size ? size : 3516516, "text/javascript");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_json = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.json", size ? size : 3516516, "application/json");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_jsonld = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.jsonld", size ? size : 3516516, "application/ld+json");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mid = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mid", size ? size : 3516516, "audio/midi");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_x_mid = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mid", size ? size : 3516516, "audio/x-midi");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_midi = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.midi", size ? size : 3516516, "audio/x-midi");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_x_midi = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.midi", size ? size : 3516516, "audio/x-midi");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mjs = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mjs", size ? size : 3516516, "text/javascript");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mp3 = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mp3", size ? size : 3516516, "audio/mpeg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mp4 = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mp4", size ? size : 3516516, "video/mp4");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mpeg = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mpeg", size ? size : 3516516, "video/mpeg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_mpkg = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.mpkg", size ? size : 3516516, "application/vnd.apple.installer+xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_odp = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.odp", size ? size : 3516516, "application/vnd.oasis.opendocument.presentation");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ods = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ods", size ? size : 3516516, "application/vnd.oasis.opendocument.spreadsheet");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_odt = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.odt", size ? size : 3516516, "application/vnd.oasis.opendocument.text");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_oga = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.oga", size ? size : 3516516, "audio/ogg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ogv = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ogv", size ? size : 3516516, "video/ogg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ogx = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ogx", size ? size : 3516516, "application/ogg");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_opus = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.opus", size ? size : 3516516, "audio/opus");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_otf = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.otf", size ? size : 3516516, "font/otf");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_png = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.png", size ? size : 3516516, "image/png");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_pdf = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.pdf", size ? size : 3516516, "application/pdf");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_php = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.php", size ? size : 3516516, "application/x-httpd-php");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ppt = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ppt", size ? size : 3516516, "application/vnd.ms-powerpoint");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_pptx = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.pptx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.presentationml.presentation");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_rar = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.rar", size ? size : 3516516, "application/vnd.rar");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_rtf = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.rtf", size ? size : 3516516, "application/rtf");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_sh = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.sh", size ? size : 3516516, "application/x-sh");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_svg = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.svg", size ? size : 3516516, "image/svg+xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_swf = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.swf", size ? size : 3516516, "application/x-shockwave-flash");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tar = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.tar", size ? size : 3516516, "application/x-tar");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tif = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.tif", size ? size : 3516516, "image/tiff");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_tiff = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.tiff", size ? size : 3516516, "image/tiff");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ts = (size?: number): File => {
        return SyntheticFile.createFile("mp2t_video-file-with-large-name.ts", size ? size : 3516516, "video/mp2t");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_ttf = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.ttf", size ? size : 3516516, "font/ttf");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_text = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.txt", size ? size : 3516516, "text/plain");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_typescript = (size?: number): File => {
        return SyntheticFile.createFile("typescript-file-with-large-name.ts", size ? size : 3516516, "text/plain");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_vsd = (size?: number): File => {
        return SyntheticFile.createFile("ms_visio-file-with-large-name.vsd", size ? size : 3516516, "application/vnd.visio");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_wav = (size?: number): File => {
        return SyntheticFile.createFile("wav_audio-file-with-large-name.wav", size ? size : 3516516, "audio/wav");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_weba = (size?: number): File => {
        return SyntheticFile.createFile("web_audio-file-with-large-name.weba", size ? size : 3516516, "audio/webm");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_webm = (size?: number): File => {
        return SyntheticFile.createFile("web_video-file-with-large-name.webm", size ? size : 3516516, "video/webm");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_webp = (size?: number): File => {
        return SyntheticFile.createFile("web_image-file-with-large-name.webp", size ? size : 3516516, "image/webp");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_woff = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.woff", size ? size : 3516516, "font/woff");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_woff2 = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.woff2", size ? size : 3516516, "font/woff2");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xhtml = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.xhtml", size ? size : 3516516, "application/xhtml+xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xlsx = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.xls", size ? size : 3516516, "application/vnd.ms-excel");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xls = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.xlsx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xml = (size?: number): File => {
        return SyntheticFile.createFile("xml-file-with-large-name.xml", size ? size : 3516516, "application/xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xml_txt = (size?: number): File => {
        return SyntheticFile.createFile("xml_plain_text-file-with-large-name.xml", size ? size : 3516516, "application/xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_xul = (size?: number): File => {
        return SyntheticFile.createFile("test-file-with-large-name.xul", size ? size : 3516516, "application/vnd.mozilla.xul+xml");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_zip = (size?: number): File => {
        return SyntheticFile.createFile("zip-file-with-large-name.zip", size ? size : 3516516, "application/zip");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp = (size?: number): File => {
        return SyntheticFile.createFile("3gp_video-file-with-large-name.3gp", size ? size : 3516516, "video/3gpp");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp2 = (size?: number): File => {
        return SyntheticFile.createFile("3gp2_video-file-with-large-name.3g2", size ? size : 3516516, "video/3gpp2");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp_a = (size?: number): File => {
        return SyntheticFile.createFile("3gp_audio-file-with-large-name.3gp", size ? size : 3516516, "audio/3gpp");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_3gp_v = (size?: number): File => {
        return SyntheticFile.createFile("3gp_audio-file-with-large-name.3gp2", size ? size : 3516516, "audio/3gpp2");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_7z = (size?: number): File => {
        return SyntheticFile.createFile("seven_zip-file-with-large-name.7z", size ? size : 3516516, "application/x-7z-compressed");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_python = (size?: number): File => {
        return SyntheticFile.createFile("python-file-with-large-name.py", size ? size : 3516516, "text/plain");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_java = (size?: number): File => {
        return SyntheticFile.createFile("java-file-with-large-name.java", size ? size : 3516516, "text/plain");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_react = (size?: number): File => {
        return SyntheticFile.createFile("react_jsx-file-with-large-name.jsx", size ? size : 3516516, "text/plain");
    }
    /**
    * 
    * @param size the file size
    * @returns a syntetic File object instance
    */
    static create_vue = (size?: number): File => {
        return SyntheticFile.createFile("vue-file-with-large-name.vue", size ? size : 3516516, "text/plain");
    }
    /**
     * Creates an array of fake (synthetic) files
     * @param size the file size for all synthetic files
     * @returns an array of all file icon preview supported files
     */
    static createFileListMiscelanious = (size?: number): File[] => {

        let listFile: File[] = [];

        listFile.push(SyntheticFile.create_aac(size));
        listFile.push(SyntheticFile.create_abw(size));
        listFile.push(SyntheticFile.create_freearc(size));
        listFile.push(SyntheticFile.create_avi(size));
        listFile.push(SyntheticFile.create_azw(size));
        listFile.push(SyntheticFile.create_octet(size));
        listFile.push(SyntheticFile.create_bmp(size));
        listFile.push(SyntheticFile.create_bz(size));
        listFile.push(SyntheticFile.create_bz2(size));
        listFile.push(SyntheticFile.create_cda(size));
        listFile.push(SyntheticFile.create_csh(size));
        listFile.push(SyntheticFile.create_css(size));
        listFile.push(SyntheticFile.create_csv(size));
        listFile.push(SyntheticFile.create_doc(size));
        listFile.push(SyntheticFile.create_docx(size));
        listFile.push(SyntheticFile.create_eot(size));
        listFile.push(SyntheticFile.create_epub(size));
        listFile.push(SyntheticFile.create_gzip(size));
        listFile.push(SyntheticFile.create_gif(size));
        listFile.push(SyntheticFile.create_htm(size));
        listFile.push(SyntheticFile.create_html(size));
        listFile.push(SyntheticFile.create_ico(size));
        listFile.push(SyntheticFile.create_icalendar(size));
        listFile.push(SyntheticFile.create_jar(size));
        listFile.push(SyntheticFile.create_jpeg(size));
        listFile.push(SyntheticFile.create_jpg(size));
        listFile.push(SyntheticFile.create_js(size));
        listFile.push(SyntheticFile.create_json(size));
        listFile.push(SyntheticFile.create_jsonld(size));
        listFile.push(SyntheticFile.create_mid(size));
        listFile.push(SyntheticFile.create_midi(size));
        listFile.push(SyntheticFile.create_x_mid(size));
        listFile.push(SyntheticFile.create_x_midi(size));
        listFile.push(SyntheticFile.create_mjs(size));
        listFile.push(SyntheticFile.create_mp3(size));
        listFile.push(SyntheticFile.create_mp4(size));
        listFile.push(SyntheticFile.create_mpeg(size));
        listFile.push(SyntheticFile.create_mpkg(size));
        listFile.push(SyntheticFile.create_odp(size));
        listFile.push(SyntheticFile.create_ods(size));
        listFile.push(SyntheticFile.create_odt(size));
        listFile.push(SyntheticFile.create_oga(size));
        listFile.push(SyntheticFile.create_ogv(size));
        listFile.push(SyntheticFile.create_ogx(size));
        listFile.push(SyntheticFile.create_opus(size));
        listFile.push(SyntheticFile.create_otf(size));
        listFile.push(SyntheticFile.create_png(size));
        listFile.push(SyntheticFile.create_pdf(size));
        listFile.push(SyntheticFile.create_php(size));
        listFile.push(SyntheticFile.create_ppt(size));
        listFile.push(SyntheticFile.create_pptx(size));
        listFile.push(SyntheticFile.create_rar(size));
        listFile.push(SyntheticFile.create_rtf(size));
        listFile.push(SyntheticFile.create_sh(size));
        listFile.push(SyntheticFile.create_svg(size));
        listFile.push(SyntheticFile.create_swf(size));
        listFile.push(SyntheticFile.create_tar(size));
        listFile.push(SyntheticFile.create_tif(size));
        listFile.push(SyntheticFile.create_tiff(size));
        listFile.push(SyntheticFile.create_ts(size));
        listFile.push(SyntheticFile.create_ttf(size));
        listFile.push(SyntheticFile.create_text(size));
        listFile.push(SyntheticFile.create_typescript(size));
        listFile.push(SyntheticFile.create_vsd(size));
        listFile.push(SyntheticFile.create_wav(size));
        listFile.push(SyntheticFile.create_weba(size));
        listFile.push(SyntheticFile.create_webm(size));
        listFile.push(SyntheticFile.create_webp(size));
        listFile.push(SyntheticFile.create_woff(size));
        listFile.push(SyntheticFile.create_woff2(size));
        listFile.push(SyntheticFile.create_xhtml(size));
        listFile.push(SyntheticFile.create_xlsx(size));
        listFile.push(SyntheticFile.create_xls(size));
        listFile.push(SyntheticFile.create_xml(size));
        listFile.push(SyntheticFile.create_xml_txt(size));
        listFile.push(SyntheticFile.create_xul(size));
        listFile.push(SyntheticFile.create_zip(size));
        //listFile.push(SyntheticFile.create_3gp(size));
        //listFile.push(SyntheticFile.create_3gp2(size));
        //listFile.push(SyntheticFile.create_3gp_a(size));
        //listFile.push(SyntheticFile.create_3gp_v(size));
        //listFile.push(SyntheticFile.create_7z(size));
        listFile.push(SyntheticFile.create_python(size));
        listFile.push(SyntheticFile.create_java(size));
        listFile.push(SyntheticFile.create_react(size));
        listFile.push(SyntheticFile.create_vue(size));

        return listFile;
    }
}