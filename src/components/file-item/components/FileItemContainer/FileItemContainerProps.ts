import { OverridableProps } from "@unlimited-react-components/kernel";

export interface FileItemContainerProps extends OverridableProps {
    /**
     * `grid` will display files in a grid layout. `list` will display 
     * files in a horizontal list. 
     * Convenient for saving space in page.
     */
    view?: "grid" | "list";
}