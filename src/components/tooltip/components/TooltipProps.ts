import { OverridableProps } from "@unlimited-react-components/kernel";
import { UPLOADSTATUS } from "../../..";

export interface TooltipProps extends OverridableProps {
    //message?: string;
    uploadStatus?: undefined | UPLOADSTATUS;
    /**
     * whether to show a valid or rejected message ("ok", "rejected")
     * by def. valid is false (if not present, it's false too)
     * This value wil affect preview behaviour,
     * If not valid, the preview will not be shown, nor the view button
     */
    valid?: boolean;
    /**
     * Whether to see as grid or inline (horizontal list)
     */
    errors?: string[];
    /**
  * The message from server
  */
    uploadMessage?: string;
    /**
     * Whether to open or not the tooltip
     */
    open?: boolean;
}