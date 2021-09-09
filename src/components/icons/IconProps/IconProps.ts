import { CSSProperties } from "react";

export interface IconProps {
    size?: "micro"|"small" |"semi-medium"| "medium" | "large";
    color?: string;
    colorFill?: string;
    onClick?: Function;
    style?:CSSProperties;
    className?:string;
}