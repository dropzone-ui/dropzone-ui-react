export interface FileItemStatusProps {
    /**
     * whether show a valid or rejected message
     * by def. valid is false (if not present, is false too)
     */
    valid?: boolean;
    /**
     *
     */
    uploadStatus?: undefined | "uploading" | "success" | "error";
    /**
     * A message for the status item
     */
    message?: string;
}
