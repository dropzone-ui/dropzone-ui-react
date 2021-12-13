import { OverridableProps } from "@unlimited-react-components/kernel";

export interface VideoPreviewProps extends OverridableProps {
    /**
     * video source in string format or File object
     * FileItemComponent returns this value in onWatch handler
     */
    videoSrc: File | string;
    /**
     * boolean value. Whether to open the preview or not
     */
    openVideo?: boolean;
    /**
     * handler for on Close operation
     */
    onClose?: Function;
    /**
     * boolean value. Whether to play automatically the video or not.
     */
    autoplay?: boolean;
    /**
     * boolean value. Whether to display the controls in the video player or not.
     */
    controls?: boolean;
}