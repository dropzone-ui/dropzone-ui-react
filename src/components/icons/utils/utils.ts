import { IconProps } from "../IconProps/IconProps";

export const parseSize = (sizeStr: IconProps["size"]): number => {
    switch (sizeStr) {
        case "micro":
            return 8;
        case "small":
            return 15;
        case "semi-medium":
            return 18;
        case "medium":
            return 25;
        case "large":
            return 28;
        default:
            return 24;
    }
}