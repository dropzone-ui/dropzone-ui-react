export interface FullScreenPreviewProps {
    /**
     * image source in string format
     */
    imgSource?: string;
    /**
     * boolean value. Whether to open the preview or not
     */
    openImage?: boolean;
    /**
     * handler for on Close operation
     */
    onClose?: Function;
}