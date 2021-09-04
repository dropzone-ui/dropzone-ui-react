import { OverridableProps } from "@unlimited-react-components/kernel";


export interface PaperProps extends OverridableProps {
    /**
     * The elevation of the paper to produce a shadow
     */
    shadow?: "1" | "2" | "3" | "4" | 1 | 2 | 3 | 4 | false;
    /**
     * Functions to change properties in FileItem component
     */
    /**
     * What to do when mouse enters
     */
    onMouseEnter?: Function;
     /**
     * What to do when mouse leaves
     */
    onMouseLeave?: Function;
    /**
     * An specific componet as root node
     * by default div
     * To be extended in the future
     */
    component?: "div" | "span";
}
export const PaperPropsDefault: PaperProps = {
    children: () => { },
    shadow: 2,
    className: "",
    style: {},
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    component:"div",
}