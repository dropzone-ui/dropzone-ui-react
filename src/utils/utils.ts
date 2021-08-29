import { OverridableProps } from "../../Base/OverridableProps";

/**
 * hexArray & decArray
 * 
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/**
 * Converts hex number in string representation to decimal number
 * 
 * 
 * @param letter the string hex number
 * @returns a decimal number
 */
export const hexTodec = (letter: string): number => {
    if (hexArray.includes(letter)) {
        return decArray[hexArray.indexOf(letter)];
    } else {
        return 0;
    }
}
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 * 
 * 
 * @param colorInput the color inpt to test 
 * @returns true if the inputColor is a hexadecimal css color
 */
export const isHexColor = (colorInput: string): boolean => {
    //console.log(" isHexColor colorInput", colorInput);

    //let result = false;
    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {
        console.log("isHexColor", "slio por no tener #");
        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {
        console.log("isHexColor", "salio por no tener 7 digitos");

        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (let i = 1; i < colorInput.length; i++) {
        if (!hexArray.includes(colorInput.charAt(i))) {
            console.log("isHexColor", "salio por no tener 7 digitos hexadecimales");

            return false;
        }
    }
    console.log("isHexColor", "si era hex");

    return true;
}
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 * 
 * 
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color 
 * @returns the rgba representation of a hex color
 */
export const hexColorToRGB = (colorInput: string | undefined, perc = 0, defaultColor?: string): string => {
    let resultDefault: string = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    const color: string = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }

    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', `rgba`).replace(')', `, ${perc})`);
    }

    // if is a hex color or named color
    if (!isHexColor(colourNameToHex(color))) {
        return resultDefault;
    }
    let resultOk: string = "";
    //let strVar: string = "";
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = `rgba(${component1}, ${component2},${component3} , ${perc})`;
    return resultOk;
}
/**
 * Make the color into a darker color
 * @param colorInput 
 * @returns the darked color in
 */
export const darkerColor = (colorInput: string, percentage = 25): string => {
    let darkedColor = "";
    const reduce = (100 - percentage) / 100;
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    if (isHexColor(colourNameToHex(colorInput))) {

        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));

        darkedColor = `rgb(${component1 * reduce}, ${component2 * reduce},${component3 * reduce})`;
    } else {
        if (colorInput.includes("rgba")) {
            let slicer = colorInput.replace("rgba(", "");
            let components: string[] = slicer.split(",");
            darkedColor = `rgb(${parseInt(components[0], 10) * reduce}, ${parseInt(components[1], 10) * reduce},${parseInt(components[2], 10) * reduce})`;
            //return darkedColor;
        } else if (colorInput.includes("rgb")) {

            let slicer = colorInput.replace("rgb(", "");
            let components: string[] = slicer.split(",");
            darkedColor = `rgb(${parseInt(components[0], 10) * reduce}, ${parseInt(components[1], 10) * reduce},${parseInt(components[2], 10) * reduce})`;
            // return darkedColor;
        }
    }

    return darkedColor;
}
/**
 * Make the color into a brighted color
 * @param colorInput 
 * @returns the brighted color 
 */
export const brighterColor = (colorInput: string, percentage = 25): string => {
    let brightedColor = "";
    const increase = (100 + percentage) / 100;
    let component1: number = 0;
    let component2: number = 0;
    let component3: number = 0;
    if (isHexColor(colourNameToHex(colorInput))) {

        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));

        brightedColor = `rgb(${component1 * increase}, ${component2 * increase},${component3 * increase})`;
    } else {
        if (colorInput.includes("rgba")) {
            let slicer = colorInput.replace("rgba(", "");
            let components: string[] = slicer.split(",");
            brightedColor = `rgb(${parseInt(components[0], 10) * increase}, ${parseInt(components[1], 10) * increase},${parseInt(components[2], 10) * increase})`;
            //return darkedColor;
        } else if (colorInput.includes("rgb")) {

            let slicer = colorInput.replace("rgb(", "");
            let components: string[] = slicer.split(",");
            brightedColor = `rgb(${parseInt(components[0], 10) * increase}, ${parseInt(components[1], 10) * increase},${parseInt(components[2], 10) * increase})`;
            // return darkedColor;
        }
    }

    return brightedColor;
}
/**
 * Adds a boxshadow property
 * 
 * @param style CSS style 
 * @returns the style with the box shadow propertie altered
 */
export const addBoxShadow: Function = (style: React.CSSProperties): React.CSSProperties => {
    let newStyle = Object.assign(style);
    newStyle.boxShadow = "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    return newStyle;
}
/**
 * Adds a boxshadow property ina classname css
 * 
 * @param style CSS style 
 * @returns the style with the box shadow propertie altered
 */
export const addMaterialBoxShadowCSS: Function = (classname = "item"): string => {
    const newStyle =
        `.${classname}{
        box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    }`;
    return newStyle;
}
/**
 * Merge props that com form user and those ones that are default
 * if incommingStyle is null this returns teh default value
 * 
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
export function mergeProps<T extends OverridableProps>
    (incommingProps: T | undefined,
        defaultProps: T): T {
    console.log("mergeProps", incommingProps, defaultProps, {
        ...defaultProps, ...incommingProps
    });
    if (!incommingProps) {
        return defaultProps;
    } else {
        return {
            ...defaultProps, ...incommingProps
        };
    }
}
/**
 * Asure a base colour when not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 * 
 * @param color param color given by user
 * @returns returns the same color 
 */
export const asureColor = (color?: string): string => {
    if (color !== undefined && color !== "") {
        return color;
    } else {
        return "#5d6475";
    }
}
/**
 * Insert style 1.0.0 (experimental)
 * 
 * Inserts the given style into the document
 * @param css the scc styles built
 * @returns the style added
 */
export function insertStyle(css: string) {
    if (!css) {
        return;
    }
    if (typeof window === "undefined") {
        return;
    }
    var style:HTMLStyleElement = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = css;
    let result = document.head.appendChild(style);
    return css;
}
/**
 * Makestyles 1.0.0 (experimental for now)
 * 
 * Makes a class css style and inserts it into the document
 * 
 * To avoid multiple rendering creates an undefined number of css injections
 * it is necessary 3 things:
 *          - useState in the component for every makeStyle call
 *          - static numbering to avoid overwrittings and be able to get different styles at the same time
 *          - useState for the result className for the component
 * 
 * @param className the class name for the styles 
 * @param styles the actual styles to include
 * @returns the style created and added
 */
export function makeStyle(className: string, styles: string) {
    if (!className) {
        return;
    }
    if (typeof window === "undefined") {
        return;
    }
    var style = `.${className} {
        ${styles}
    }`;
    return insertStyle(style);
    //return style;
}
/**
 * Interface to describe a named color
 */
export interface namedColor {
    [colorName: string]: string;
}
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
export function colourNameToHex(colour: string | undefined): string {
    /**
     * When not given
     */
    if (!colour) {
        return "";
    }
    /**
     * when named color is found
     */
    if (namedColours2[colour.toLocaleLowerCase()] !== undefined) {
        return namedColours2[colour.toLocaleLowerCase()];
    }
    /**
     * When the named color was not found
     */

    return colour;
}

/**
 * @deprecated
 * List of named colors taken from stackoverflow
 */
export const namedColours: namedColor =
    { "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff", "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887", "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff", "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f", "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1", "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff", "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff", "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f", "honeydew": "#f0fff0", "hotpink": "#ff69b4", "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c", "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2", "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de", "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6", "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee", "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5", "navajowhite": "#ffdead", "navy": "#000080", "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6", "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080", "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1", "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4", "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0", "violet": "#ee82ee", "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5", "yellow": "#ffff00", "yellowgreen": "#9acd32" }
    ;
/**
 * The full list of named Colors provided by
 * https://htmlcolorcodes.com/es/nombres-de-los-colores/
 */
 export const namedColours2: namedColor =
 {
     //RED
     indianred: "#CD5C5C",
     lightcoral: "#F08080",
     salmon: "#FA8072",
     darksalmon: "#E9967A",
     lightsalmon: "#FFA07A",
     crimson: "#DC143C",
     red: "#FF0000",
     firebrick: "#B22222",
     darkred: "#8B0000",
     //PINK
     pink: "#FFC0CB",
     lightpink: "#FFB6C1",
     hotpink: "#FF69B4",
     deeppink: "#FF1493",
     mediumvioletred: "#C71585",
     palevioletred: "#DB7093",
     //ORANGE
     //"lightsalmon: "#FFA07A",
     coral: "#FF7F50",
     tomato: "#FF6347",
     orangered: "#FF4500",
     darkorange: "#FF8C00",
     orange: "#FFA500",
     //YELLOW
     gold: "#FFD700",
     yellow: "#FFFF00",
     lightyellow: "#FFFFE0",
     lemonchiffon: "#FFFACD",
     lightgoldenrodyellow: "#FAFAD2",
     papayawhip: "#FFEFD5",
     moccasin: "#FFE4B5",
     peachpuff: "#FFDAB9",
     palegoldenrod: "#EEE8AA",
     khaki: "#F0E68C",
     darkkhaki: "#BDB76B",
     //PURPLE
     lavender: "#E6E6FA",
     thistle: "#D8BFD8",
     plum: "#DDA0DD",
     violet: "#EE82EE",
     orchid: "#DA70D6",
     fuchsia: "#FF00FF",
     magenta: "#FF00FF",
     mediumorchid: "#BA55D3",
     mediumpurple: "#9370DB",
     rebeccapurple: "#663399",
     blueviolet: "#8A2BE2",
     darkviolet: "#9400D3",
     darkorchid: "#9932CC",
     darkmagenta: "#8B008B",
     purple: "#800080",
     indigo: "#4B0082",
     slateblue: "#6A5ACD",
     darkslateblue: "#483D8B",
     mediumslateblue: "#7B68EE",
     //GREEN
     greenyellow: "#ADFF2F",
     chartreuse: "#7FFF00",
     lawngreen: "#7CFC00",
     lime: "#00FF00",
     limegreen: "#32CD32",
     palegreen: "#98FB98",
     lightgreen: "#90EE90",
     mediumspringgreen: "#00FA9A",
     springgreen: "#00FF7F",
     mediumseagreen: "#3CB371",
     seagreen: "#2E8B57",
     forestgreen: "#228B22",
     green: "#008000",
     darkgreen: "#006400",
     yellowgreen: "#9ACD32",
     olivedrab: "#6B8E23",
     olive: "#808000",
     darkolivegreen: "#556B2F",
     mediumaquamarine: "#66CDAA",
     darkseagreen: "#8FBC8B",
     lightseagreen: "#20B2AA",
     darkcyan: "#008B8B",
     teal: "#008080",
     //BLUE
     aqua: "#00FFFF",
     cyan: "#00FFFF",
     lightcyan: "#E0FFFF",
     paleturquoise: "#AFEEEE",
     aquamarine: "#7FFFD4",
     turquoise: "#40E0D0",
     mediumturquoise: "#48D1CC",
     darkturquoise: "#00CED1",
     cadetblue: "#5F9EA0",
     steelblue: "#4682B4",
     lightsteelblue: "#B0C4DE",
     powderblue: "#B0E0E6",
     lightblue: "#ADD8E6",
     skyblue: "#87CEEB",
     lightskyblue: "#87CEFA",
     deepskyblue: "#00BFFF",
     dodgerblue: "#1E90FF",
     cornflowerblue: "#6495ED",
     //"mediumslateblue: "#7B68EE",
     royalblue: "#4169E1",
     blue: "#0000FF",
     mediumblue: "#0000CD",
     darkblue: "#00008B",
     navy: "#000080",
     midnightblue: "#191970",
     //BROWN
     cornsilk: "#FFF8DC",
     blanchedalmond: "#FFEBCD",
     bisque: "#FFE4C4",
     navajowhite: "#FFDEAD",
     wheat: "#F5DEB3",
     burlywood: "#DEB887",
     tan: "#D2B48C",
     rosybrown: "#BC8F8F",
     sandybrown: "#F4A460",
     goldenrod: "#DAA520",
     darkgoldenrod: "#B8860B",
     peru: "#CD853F",
     chocolate: "#D2691E",
     saddlebrown: "#8B4513",
     sienna: "#A0522D",
     brown: "#A52A2A",
     maroon: "#800000",
     //WHITE
     white: "#FFFFFF",
     snow: "#FFFAFA",
     honeydew: "#F0FFF0",
     mintcream: "#F5FFFA",
     azure: "#F0FFFF",
     aliceblue: "#F0F8FF",
     ghostwhite: "#F8F8FF",
     whitesmoke: "#F5F5F5",
     seashell: "#FFF5EE",
     beige: "#F5F5DC",
     oldlace: "#FDF5E6",
     floralwhite: "#FFFAF0",
     ivory: "#FFFFF0",
     antiquewhite: "#FAEBD7",
     linen: "#FAF0E6",
     lavenderblush: "#FFF0F5",
     mistyrose: "#FFE4E1",
     //GREY
     gainsboro: "#DCDCDC",
     lightgray: "#D3D3D3",
     silver: "#C0C0C0",
     darkgray: "#A9A9A9",
     gray: "#808080",
     dimgray: "#696969",
     lightslategray: "#778899",
     slategray: "#708090",
     darkslategray: "#2F4F4F",
     black: "#000000"
 }
 // Note:  I use color(british) or colour(american) indistinct