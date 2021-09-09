function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from 'axios';

var createFile = function (name, size, type) {
    var file = new File([], name, { type: type });
    Object.defineProperty(file, "size", {
        get: function () {
            return size;
        },
    });
    return file;
};
var createPPF = function () {
    return createFile("test-file-with-large-name.pdf", 455005, "application/pdf");
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

/**
 * hexArray & decArray
 *
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
var hexArray$1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var decArray$1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/**
 * Converts hex number in string representation to decimal number
 *
 *
 * @param letter the string hex number
 * @returns a decimal number
 */
var hexTodec$1 = function (letter) {
    if (hexArray$1.includes(letter)) {
        return decArray$1[hexArray$1.indexOf(letter)];
    }
    else {
        return 0;
    }
};
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 *
 *
 * @param colorInput the color inpt to test
 * @returns true if the inputColor is a hexadecimal css color
 */
var isHexColor$1 = function (colorInput) {
    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {
        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {
        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (var i = 1; i < colorInput.length; i++) {
        if (!hexArray$1.includes(colorInput.charAt(i))) {
            return false;
        }
    }
    return true;
};
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 *
 *
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color
 * @returns the rgba representation of a hex color
 */
var hexColorToRGB$1 = function (colorInput, perc, defaultColor) {
    if (perc === void 0) { perc = 0; }
    var resultDefault = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    var color = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }
    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', "rgba").replace(')', ", " + perc + ")");
    }
    // if is a hex color or named color
    if (!isHexColor$1(colourNameToHex$1(color))) {
        return resultDefault;
    }
    var resultOk = "";
    //let strVar: string = "";
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec$1(color.charAt(1)) * 16 + hexTodec$1(color.charAt(2));
    component2 = hexTodec$1(color.charAt(3)) * 16 + hexTodec$1(color.charAt(4));
    component3 = hexTodec$1(color.charAt(5)) * 16 + hexTodec$1(color.charAt(6));
    resultOk = "rgba(" + component1 + ", " + component2 + "," + component3 + " , " + perc + ")";
    return resultOk;
};
/**
 * Merge props that com form user and those ones that are default
 * if incommingStyle is null this returns teh default value
 *
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
function mergeProps$1(incommingProps, defaultProps) {
    if (!incommingProps) {
        return defaultProps;
    }
    else {
        return __assign$1(__assign$1({}, defaultProps), incommingProps);
    }
}
/**
 * Asure a base colour when not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
var asureColor$1 = function (color) {
    if (color !== undefined && color !== "") {
        return color;
    }
    else {
        return "#5d6475";
    }
};
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
function colourNameToHex$1(colour) {
    /**
     * When not given
     */
    if (!colour) {
        return "";
    }
    /**
     * when named color is found
     */
    if (namedColours2$1[colour.toLocaleLowerCase()] !== undefined) {
        return namedColours2$1[colour.toLocaleLowerCase()];
    }
    /**
     * When the named color was not found
     */
    return colour;
}
/**
 * The full list of named Colors provided by
 * https://htmlcolorcodes.com/es/nombres-de-los-colores/
 */
var namedColours2$1 = {
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
};

___$insertStyle("@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap\");\n.dropzone-ui {\n  color: #646c7f;\n  position: relative;\n  min-height: 280px;\n  border-radius: 4px;\n  width: calc(100% - 4px);\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: 25px 0;\n}\n.dropzone-ui.drag {\n  border: none;\n}\n.dropzone-ui.clickable {\n  cursor: pointer;\n}\n.dropzone-ui span.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 500ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n.dropzone-ui .dz-ui-header {\n  position: absolute;\n  cursor: text;\n  top: 0;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: \"Poppins\", sans-serif;\n  padding-right: 10px;\n  font-size: 1em;\n}\n.dropzone-ui .dz-ui-footer {\n  margin-left: 5px;\n  position: absolute;\n  cursor: text;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  border-top: 1px dotted grey;\n  background-color: #80808021;\n  font-family: \"Poppins\", sans-serif;\n  padding-left: 10px;\n  font-size: 1em;\n}\n\n.dropzone-ui-layer {\n  width: 0%;\n  height: 0%;\n  z-index: 20;\n}\n.dropzone-ui-layer.drag {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: calc(100% - 4px);\n  height: calc(100% - 4px);\n}\n\n.dz-ui-label {\n  text-rendering: optimizeLegibility;\n  font-size: 1.5em;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 0.02857em;\n  word-break: normal;\n}\n@media (max-width: 600px) {\n  .dz-ui-label {\n    font-size: 1.3em;\n  }\n}");

var DynamiCSS$1;
(function (DynamiCSS) {
    function insertStyleSheet(dynamicSheet) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!dynamicSheet) {
            return "";
        }
        //if already exists
        if (document.getElementById(dynamicSheet.id)) {
            return dynamicSheet.id;
        }
        result_id = dynamicSheet.id;
        var styleSheet = document.createElement("style");
        styleSheet.id = result_id;
        styleSheet.setAttribute("type", "text/css");
        var contetRaw = toRawStyleSheet$1(dynamicSheet.sheetRules || []) + dynamicSheet.raw || "";
        styleSheet.textContent = contetRaw;
        var appendResult = document.head.appendChild(styleSheet);
        if (!appendResult) {
            return "";
        }
        return result_id;
    }
    DynamiCSS.insertStyleSheet = insertStyleSheet;
    function editStyleSheet(id, sheetRules) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!id || !sheetRules) {
            return "";
        }
        //if dont exists yet
        var styleSheet = document.getElementById(id);
        if (!styleSheet) {
            return "";
        }
        /*  result_id = id;
         //var styleSheet: HTMLStyleElement = document.createElement("style");
         styleSheet.id = result_id;
         styleSheet.setAttribute("type", "text/css"); */
        styleSheet.textContent = toRawStyleSheet$1(sheetRules);
        return result_id;
    }
    DynamiCSS.editStyleSheet = editStyleSheet;
    function removeStyleSheet(id) {
        var result_id = "";
        if (!id) {
            return "";
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            document.head.removeChild(htmlObject);
            result_id = id;
        }
        return result_id;
    }
    DynamiCSS.removeStyleSheet = removeStyleSheet;
    function existStyleSheet(id) {
        if (!id) {
            return false;
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            return true;
        }
        return false;
    }
    DynamiCSS.existStyleSheet = existStyleSheet;
    function makeStyleSheet(styleSheet) {
        if (!styleSheet) {
            return null;
        }
        return styleSheet;
    }
    DynamiCSS.makeStyleSheet = makeStyleSheet;
})(DynamiCSS$1 || (DynamiCSS$1 = {}));
/**
 * Determines whether a character is upperCase or not
 * @param str a character
 * @returns true if str contains a string character
 */
function isUpper$1(character) {
    if (!character)
        return false;
    return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}
/**
 * Converts a rule with uppercase to a hyphen-lowercase version
 * @param rule the rule
 * @returns
 */
function fromUpperCaseToHyphen$1(ruleLabel) {
    var result = "";
    var charUpper = ' ';
    var isupper = false;
    for (var i = 0; i < ruleLabel.length; i++) {
        var currentChar = ruleLabel[i];
        if (isUpper$1(currentChar)) {
            charUpper = currentChar;
            isupper = true;
            break;
        }
    }
    //add hyphen
    if (isupper) {
        var parts = ruleLabel.split(charUpper);
        result = parts[0] + "-" + charUpper.toLowerCase() + parts[1];
    }
    else {
        result = ruleLabel;
    }
    return result;
}
/**
 *
 * @param ruleLabel the rule
 * @returns true if the rule label corresponds to a pseudo class
 */
function isPseudo$1(ruleLabel) {
    if (!ruleLabel)
        return false;
    return ruleLabel.includes(":");
}
function makeRawRuleLabel$1(className) {
    var result = "";
    var splitedClassName = className.trim().split(" ");
    //is composed classname?
    if (splitedClassName.length > 1) {
        for (var i = 0; i < splitedClassName.length; i++) {
            result += "." + splitedClassName[i];
        }
        result += "{\n";
    }
    else {
        result += "." + className + "{\n";
    }
    return result;
}
function toRawStyleSheet$1(sheetRules) {
    if (!sheetRules) {
        return "";
    }
    var rawStyleSheet = "";
    var nestedPseudos = [];
    for (var j = 0; j < sheetRules.length; j++) {
        var currentRule = sheetRules[j];
        var currnetRawRule = "";
        // currnetRawRule += `.${currentRule.className}{\n`;
        currnetRawRule += makeRawRuleLabel$1(currentRule.className);
        //list of labels for rules
        var ruleskeys = Object.keys(currentRule.rules);
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen$1(currentKey);
            //if a pseudo class found, separate it
            if (isPseudo$1(styleLabel)) {
                var pseudoClassName = currentRule.className + styleLabel;
                nestedPseudos.push({ className: pseudoClassName, rules: currentRule.rules[styleLabel] });
            }
            else {
                var styleRule = currentRule.rules[currentKey];
                currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
            }
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    //nested pseudos
    for (var p = 0; p < nestedPseudos.length; p++) {
        var currnetRawRule = "";
        var currentRule = nestedPseudos[p];
        var ruleskeys = Object.keys(currentRule.rules);
        currnetRawRule += "." + currentRule.className + "{\n";
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen$1(currentKey);
            var styleRule = currentRule.rules[currentKey];
            currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    return rawStyleSheet;
}

/**
 *
 * @param color The color theme
 * @param backgroundColor the background Color
 * @param maxHeight the max heith for dropzone container
 * @returns a valid classnname for the component
 */
var useDropzoneStyles = function (color, backgroundColor, maxHeight) {
    var _a = useState(""), idStyles = _a[0], setIdStyles = _a[1];
    var _b = useState(false), styleInjected = _b[0], setStyleInjected = _b[1];
    var _c = useState(""), classNameCreated = _c[0], setClassNameCreated = _c[1];
    useEffect(function () {
        var removeStyle = function () {
            if (styleInjected) {
                DynamiCSS$1.removeStyleSheet(idStyles);
                setStyleInjected(false);
                setIdStyles("");
            }
        };
        var handleInserStyle = function (color) { return __awaiter$1(void 0, void 0, void 0, function () {
            var styleSheet, idStyle;
            return __generator$1(this, function (_a) {
                styleSheet = {
                    id: "dropzone-ui-styles",
                    sheetRules: [
                        {
                            className: "dropzone-ui-extra",
                            rules: {
                                border: "1px dashed " + hexColorToRGB$1(asureColor$1(colourNameToHex$1(color)), 1),
                                backgroundColor: backgroundColor,
                                maxHeight: maxHeight
                            },
                        },
                        {
                            className: "drag",
                            rules: {
                                border: "2px dashed " + hexColorToRGB$1(asureColor$1(colourNameToHex$1(color)), 1),
                                backgroundColor: hexColorToRGB$1(asureColor$1(colourNameToHex$1(color)), 0.085),
                            },
                        }
                    ],
                };
                idStyle = "";
                if (!styleInjected) {
                    idStyle = DynamiCSS$1.insertStyleSheet(styleSheet);
                    setClassNameCreated(" dropzone-ui-extra");
                    setIdStyles(idStyle);
                    if (idStyle !== "") {
                        setStyleInjected(true);
                    }
                }
                else {
                    //already a stylesheet associated
                    DynamiCSS$1.editStyleSheet(idStyles, styleSheet.sheetRules || []);
                }
                return [2 /*return*/];
            });
        }); };
        handleInserStyle(color);
        return function () {
            removeStyle();
        };
        // eslint-disable-next-line
    }, [color, backgroundColor, maxHeight]);
    return classNameCreated;
};

/**
 * @param size the size of the file in bytes, by default 4555 bytes
 * @returns a PDF file
 */
/**
 * Gives a XX.XX format in Bytes KB, MB or GB
 * @param fileSize file size to give format in Bytes
 */
var fileSizeFormater = function (fileSize) {
    var result = "";
    if (!fileSize) {
        return 0 + " Bytes";
    }
    if (fileSize < 1024) {
        result = fileSize + " Bytes";
    }
    else {
        //KB
        if (fileSize < 1024 * 1024) {
            result = (fileSize / 1024).toFixed(2) + " KB";
        }
        else if (fileSize < 1024 * 1024 * 1024) {
            result = ((fileSize / 1024) / 1024).toFixed(2) + " MB";
        }
        else if (fileSize < 1024 * 1024 * 1024 * 1024) {
            result = (((fileSize / 1024) / 1024) / 1024).toFixed(2) + " GB";
        }
        else {
            result = ((((fileSize / 1024) / 1024) / 1024) / 1024).toFixed(2) + " TB";
        }
    }
    return result;
};
/**
 * Looks for the first file extension
 * @param fileName file name
 * @returns the file name extension
 */
var getExt = function (fileName) {
    var re = /(?:\.([^.]+))?$/;
    var result = re.exec(fileName);
    if (result) {
        return result[1];
    }
    else {
        return "";
    }
};
var MAX_SIZE_WORD = 30;
/**
 *
 * @param word
 * @returns
 */
var shrinkWord = function (word) {
    var newWord = word;
    if (word.length >= MAX_SIZE_WORD) {
        newWord = word.slice(0, 13) + "..." + word.slice(-8);
    }
    return newWord;
};

/* import aac from "./aac.png";
import accdb from "./accdb.png";
import abw from "./abw.png";
import freearc from "./freearc.png";
import avi from "./avi.png";
import azw from "./azw.png";
import octet from "./octet.png";
import bmp from "./bmp.png";
import bz from "./bz.png";
import bz2 from "./bz2.png";
import cda from "./cda.png";
import csh from "./csh.png";
import css from "./css.png";
import csv from "./csv.png";
import docx from "./docx.png";
import drawio from "./drawio.png";
import eot from "./eot.png";
import epub from "./epub.png";
import gzip from "./gzip.png";
import gif from "./gif.png";
import html from "./html.png";
//import ico from "./ico.png";
import icalendar from "./icalendar.png";
import jar from "./java.png";
import jpeg from "./jpeg.png";
import javascript from "./javascript.png";
import json from "./json.png";
import jsonld from "./jsonld.png";
import midi from "./midi.png";
//import mjs from "./js.png";
import mp3 from "./mp3.png";
import mp4 from "./mp4.png";
import mpeg from "./mpeg.png";
import mpkg from "./mpkg.png";
import odp from "./odp.png";
import ods from "./ods.png";
import odt from "./odt.png";
//import oga from "./oga.png";
//import ogv from "./ogv.png";
//import ogx from "./ogx.png";
import opus from "./opus.png";
import otf from "./otf.png";
import png from "./png.png";
import pdf from "./pdf.png";
import php from "./php.png";
import pptx from "./pptx.png";
import psd from "./psd.png";
import rar from "./rar.png";
import rtf from "./rtf.png";
import sh from "./sh.png";
//import svg from "./svg.png";
import sass from "./sass.png";
import swf from "./swf.png";
import tar from "./rar.png";
import tiff from "./tiff.png";
import ttf from "./ttf.png";
//import ts from "./ts.png";
import typescript from "./typescript.png";
import text from "./text.png";
import vsd from "./vsd.png";
import wav from "./wav.png";
import weba from "./webm.png";
import webm from "./webm.png";
import webp from "./webp.png";
import wma from "./wma.png";
import wmv from "./wmv.png";
import woff from "./woff.png";
//import xhtml from "./xhtml.png";
import xlsx from "./xlsx.png";
import xml from "./xml.png";
import xul from "./xul.png";
import zip from "./zip.png";
//import threegp from "./3gp.png";
import sevenzip from "./7z.png";
import python from "./python.png";
import java from "./java.png";
import react from "./react.png";
import vue from "./vue.png"; */
var sevenzip = "https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png";
var aac = "https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png";
var abw = "https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png";
var accdb = "https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png";
var avi = "https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png";
var azw = "https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png";
var bmp = "https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png";
var bz = "https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png";
var bz2 = "https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png";
var cda = "https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png";
var csh = "https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png";
var css = "https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png";
var csv = "https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png";
//export const default = "https://user-images.githubusercontent.com/43678736/132086605-d03db898-045c-477e-bae6-156699833eb0.png";
var docx = "https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png";
var drawio = "https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png";
var eot = "https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png";
var epub = "https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png";
var freearc = "https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png";
var gif = "https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png";
var gzip = "https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png";
var html = "https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png";
var icalendar = "https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png";
var java = "https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png";
var jar = "https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png";
var javascript = "https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png";
var jpeg = "https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png";
var json = "https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png";
var jsonld = "https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png";
var midi = "https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png";
var mp3 = "https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png";
var mp4 = "https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png";
var mpeg = "https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png";
var mpkg = "https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png";
var octet = "https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png";
var odp = "https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png";
var ods = "https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png";
var odt = "https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png";
var opus = "https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png";
var otf = "https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png";
var pdf = "https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png";
var php = "https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png";
var png = "https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png";
var pptx = "https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png";
var psd = "https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png";
var python = "https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png";
var tar = "https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png";
var rar = "https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png";
var react = "https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png";
var rtf = "https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png";
var sass = "https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png";
var sh = "https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png";
var swf = "https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png";
var text = "https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png";
var tiff = "https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png";
var ttf = "https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png";
var typescript = "https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png";
var vsd = "https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png";
var vue = "https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png";
var wav = "https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png";
var webm = "https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png";
var weba = "https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png";
var webp = "https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png";
var wma = "https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png";
var wmv = "https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png";
var woff = "https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png";
var xlsx = "https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png";
var xml = "https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png";
var xul = "https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png";
var zip = "https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png";
//export { aac, abw, accdb, avi, azw, bmp, bz, bz2, cda, csh, css, csv, docx, drawio, eot, epub, freearc, gif, gzip, html, icalendar, jar, java, javascript, jpeg, json, jsonld, midi, mp3, mp4, mpeg, mpkg, octet, odp, ods, odt, opus, otf, pdf, php, png, pptx, psd, python, rar, react, rtf,sass, sevenzip, sh, swf, tar, text, tiff, ttf, typescript, vsd, vue, wav, weba, webm, webp, wma, wmv, woff, xlsx, xml, xul, zip };

var DEF_GEN_MIME = "octet";
/**
 *
 * @param tailMime
 * @returns
 */
var audioSelector = function (tailMime) {
    switch (tailMime) {
        case "aac": return "aac";
        case "midi": return "midi";
        case "x-midi": return "midi";
        case "mpeg": return "mpeg"; //mp3
        // case "ogg": return "oga";
        case "opus": return "opus";
        case "wav": return "wav";
        case "webm": return "webm";
        //case "3gpp": return "threegp";
        //case "3gpp2": return "threegp";
        //case "mp3": return "mp3";
        case "wma": return "wma";
        default: return DEF_GEN_MIME;
    }
};
var textSelector = function (tailMime) {
    switch (tailMime) {
        case "css": return "css";
        case "csv": return "csv";
        case "html": return "html";
        case "calendar": return "icalendar";
        case "javascript": return "javascript";
        case "x-javascript": return "javascript";
        case "plain": return "text";
        case "xml": return "xml";
        default: return DEF_GEN_MIME;
    }
};
var imageSelector = function (tailMime) {
    switch (tailMime) {
        case "bmp": return "bmp";
        case "gif": return "gif";
        // case "vnd.microsoft.icon": return "ico";
        case "ico": return "ico";
        case "jpg": return "jpeg";
        case "jpeg": return "jpeg";
        case "png": return "png";
        // case "svg+xml": return "svg";
        // case "svg": return "svg";
        case "tiff": return "tiff";
        case "webp": return "webp";
        default: return DEF_GEN_MIME;
    }
};
var fontSelector = function (tailMime) {
    switch (tailMime) {
        case "otf": return "otf";
        case "ttf": return "ttf";
        case "woff": return "woff";
        case "woff2": return "woff";
        default: return DEF_GEN_MIME;
    }
};
var videoSelector = function (tailMime) {
    switch (tailMime) {
        case "x-msvideo": return "avi";
        case "msvideo": return "avi";
        case "mp4": return "mp4";
        case "mpeg": return "mpeg";
        // case "ogg": return "ogv";
        // case "mp2t": return "ts";
        case "wmv": return "wmv";
        case "webm": return "webm";
        // case "3gpp": return "threegp";
        // case "3gpp2": return "threegp2";
        default: return DEF_GEN_MIME;
    }
};
/**
 *
 * @param tailMime
 * @returns
 */
var applicationSelector = function (tailMime) {
    switch (tailMime) {
        case "x-abiword": return "abw";
        case "abiword": return "abw";
        case "x-freearc": return "arc";
        case "freearc": return "arc";
        case "vnd.amazon.ebook": return "azw";
        case "octet-stream": return "octet";
        case "x-bzip": return "bz";
        case "x-bzip2": return "bz2";
        case "bzip": return "bz";
        case "bzip2": return "bz2";
        case "x-cdf": return "cda";
        case "msaccess": return "accdb";
        case "csh": return "csh";
        case "vnd.ms-fontobject": return "eot";
        case "epub+zip": return "epub";
        case "gzip": return "gzip";
        case "java-archive": return "jar";
        case "x-javascript": return "javascript";
        case "json": return "json";
        case "ld+json": return "jsonld";
        case "vnd.apple.installer+xml": return "mpkg";
        //case "ogg": return "ogx";
        case "vnd.rar": return "rar";
        case "rtf": return "rtf";
        case "x-sh": return "sh";
        case "sh": return "sh";
        case "x-shockwave-flash": return "swf";
        case "x-tar": return "tar";
        case "vnd.visio": return "vsd";
        case "xhtml+xml": return "xhtml";
        case "xml": return "xml";
        case "vnd.mozilla.xul+xml": return "xul";
        case "vnd.openxmlformats-officedocument.wordprocessingml.document": return "docx";
        case "msword": return "docx";
        case "vnd.openxmlformats-officedocument.spreadsheetml.sheet": return "xlsx";
        case "vnd.openxmlformats-officedocument.presentationml.presentation": return "pptx";
        case "vnd.ms-powerpoint": return "pptx";
        case "vnd.oasis.opendocument.presentation": return "odp";
        case "vnd.oasis.opendocument.text": return "odt";
        case "vnd.oasis.opendocument.spreadsheet": return "ods";
        case "zip": return "zip";
        case "x-zip-compressed": return "zip";
        case "pdf": return "pdf";
        default: return DEF_GEN_MIME;
    }
};
/**
 * Selects to wich mime type the mime type given belongs to
 * @param mimeType mime type to be searched
 * @returns the generic type,
if not found it return "octet" that means generic binary file
 */
var mimeSelector = function (mimeType) {
    // let genericMime: string | undefined = undefined;
    if (!mimeType || !mimeType.includes("/")) {
        return DEF_GEN_MIME;
    }
    var headerMime = mimeType.split("/")[0];
    var tailMime = mimeType.split("/")[1];
    /**
     * Every mimetype that
     * starts with: "application/...."
     */
    switch (headerMime) {
        case "application": return applicationSelector(tailMime);
        case "audio": return audioSelector(tailMime);
        case "video": return videoSelector(tailMime);
        case "text": return textSelector(tailMime);
        case "image": return imageSelector(tailMime);
        case "font": return fontSelector(tailMime);
        default: return DEF_GEN_MIME;
    }
};
/**
 * Selects to wich mapped extension
 * the given exension belongs to
 *
 * @param extension
 * @returns
 */
var extensionSelector = function (extension) {
    var genericMime = "octet";
    if (extension && extension !== "") {
        if (extension.includes("zip") || extension.includes("rar")) {
            genericMime = "zip";
        }
        else if (extension.includes("doc")) {
            genericMime = "docx";
        }
        else if (extension.includes("xls")) {
            genericMime = "xlsx";
        }
        else if (extension.includes("drawio")) {
            genericMime = "drawio";
        }
        else if (extension.includes("psd")) {
            genericMime = "psd";
        }
        else if (extension.includes("csv")) {
            genericMime = "csv";
        }
        else if (extension === "jsx") {
            genericMime = "react";
        }
        else if (extension === "py") {
            genericMime = "python";
        }
        else if (extension === "vue") {
            genericMime = "vue";
        }
        else if (extension === "java") {
            genericMime = "java";
        }
        else if (extension === "ts") {
            genericMime = "ts";
        }
        else if (extension === "sass" || extension === "scss") {
            genericMime = "sass";
        }
    }
    return genericMime;
};
/**
 * Chack for extention whether the file is code os not
 * @param extension
 * @returns
 */
var checkIsCode = function (extension) {
    var genericMime = "text";
    if (extension && extension !== "") {
        if (extension === "jsx") {
            genericMime = "react";
        }
        else if (extension === "py") {
            genericMime = "python";
        }
        else if (extension === "vue") {
            genericMime = "vue";
        }
        else if (extension === "java") {
            genericMime = "java";
        }
        else if (extension === "ts") {
            genericMime = "typescript";
        }
        else if (extension === "js") {
            genericMime = "javascript";
        }
    }
    return genericMime;
};
/**
 * Looks for a suitable file icon
 * @param props mime and extension from file to search
 * @returns the result file ico, if not found, turns octet-stream url
 */
var getURLFileIco = function (file) {
    var result = "";
    //if not file, return octet
    if (!file) {
        result = DEF_GEN_MIME;
        return { url: mimeUrlList[result], mimeResume: result };
    }
    else {
        result = mimeSelector(file.type);
    }
    //console.log("got result:",result);
    //If plain text
    var extention = getExt(file.name);
    //console.log("got extention:",extention);
    if (result === "text") {
        result = checkIsCode(extention);
        //console.log("got checkIsCode:",result);
    }
    //If octet stream result, second chance: file extention
    if (result === DEF_GEN_MIME) {
        result = extensionSelector(extention);
    }
    return { url: mimeUrlList[result], mimeResume: result };
};
var mimeUrlList = {
    img: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_image_x16.png",
    video: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_video_x16.png",
    audio: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_audio_x16.png",
    aac: aac,
    accdb: accdb,
    abw: abw,
    arc: freearc,
    avi: avi,
    azw: azw,
    octet: octet,
    bmp: bmp,
    bz: bz,
    bz2: bz2,
    cda: cda,
    csh: csh,
    css: css,
    csv: csv,
    docx: docx,
    drawio: drawio,
    eot: eot,
    epub: epub,
    gzip: gzip,
    gif: gif,
    html: html,
    //ico: ico,
    icalendar: icalendar,
    jar: jar,
    jpeg: jpeg,
    javascript: javascript,
    json: json,
    jsonld: jsonld,
    midi: midi,
    //  js: js,
    mp3: mp3,
    mp4: mp4,
    mpeg: mpeg,
    mpkg: mpkg,
    odp: odp,
    ods: ods,
    odt: odt,
    // oga: oga,
    //ogv: ogv,
    // ogx: ogx,
    opus: opus,
    otf: otf,
    png: png,
    pdf: pdf,
    php: php,
    pptx: pptx,
    psd: psd,
    rar: rar,
    rtf: rtf,
    sass: sass,
    sh: sh,
    //svg: svg,
    swf: swf,
    tar: tar,
    tiff: tiff,
    ttf: ttf,
    //ts: ts,
    typescript: typescript,
    text: text,
    vsd: vsd,
    wav: wav,
    weba: weba,
    webm: webm,
    webp: webp,
    woff: woff,
    wma: wma,
    wmv: wmv,
    xhtml: html,
    xlsx: xlsx,
    xml: xml,
    xul: xul,
    zip: zip,
    // threegp: threegp,
    sevenzip: sevenzip,
    python: python,
    java: java,
    react: react,
    vue: vue,
};

/**
 * @deprecated use readImagePromise() instead.
 *
 * Read an image and returns the URL expresion in base 64
 * @param file the image file
 * @param afterRead a function of what to do when load finishes
 */
/**
 *
 * @param base64Str
 * @param maxWidth
 * @param maxHeight
 * @returns
 */
function resizeImage(base64Str, maxWidth, maxHeight) {
    if (maxWidth === void 0) { maxWidth = 135; }
    if (maxHeight === void 0) { maxHeight = 120; }
    return new Promise(function (resolve, reject) {
        try {
            var img_1 = new Image();
            img_1.src = base64Str;
            img_1.onload = function () {
                var canvas = document.createElement('canvas');
                var MAX_WIDTH = maxWidth;
                var MAX_HEIGHT = maxHeight;
                var width = img_1.width;
                var height = img_1.height;
                if (maxWidth > width && maxHeight > height) {
                    resolve(base64Str);
                }
                else if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img_1, 0, 0, width, height);
                    resolve(canvas.toDataURL());
                }
                else {
                    console.error("An error ocurred when trying to make a thumnail");
                    reject(undefined);
                }
            };
        }
        catch (error) {
            console.error("An error ocurred when trying to make a thumnail");
            reject(undefined);
        }
    });
}
/**
 * Reads an image file in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File image object
 * @returns data URL of the image file
 */
var readImagePromise = function (file) {
    return new Promise(function (resolve, reject) {
        try {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                resolve(reader_1.result);
            };
            reader_1.readAsDataURL(file);
        }
        catch (error) {
            reject(undefined);
        }
    });
};

var ERROR_MAX_SIZE = function (maxSize) { return "File is too big. Max file size allowed is " + maxSize; };
var ERROR_ACCEPT = "File's type is not allowed";

/**
 * Separate the accept string array into an array of strings separated by commas
 * @param accept the string accept array
 * @returns an array of strings in wich every item
 */
var separateAccept = function (accept) {
    if (!accept || accept.length === 0) {
        return [];
    }
    var commaSeparatedAccpet = accept.split(",").map(function (acceptItem) { return acceptItem.trim(); });
    return commaSeparatedAccpet;
};
/**
 *
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns
 */
var validateAccept = function (accept, file) {
    var valid = false;
    var name = file.name, type = file.type;
    //Array(5) [ ".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ]
    for (var i = 0; i < accept.length; i++) {
        var acceptItem = accept[i];
        //check is not empty
        if (acceptItem.length !== 0) {
            //check extention
            if (acceptItem.charAt(0) === ".") {
                if (acceptItem.includes(getExt(name))) {
                    return true;
                }
            }
            //check mime
            // header/tail  => image/png  ;  image/* ; audio
            if (type && type.length > 0 && acceptItem.includes("/") && type.includes("/")) {
                var headerMime = acceptItem.split("/")[0];
                var tailMime = acceptItem.split("/")[1];
                var headerMimeFile = type.split("/")[0];
                var tailMimeFile = type.split("/")[1];
                if (headerMime === headerMimeFile) {
                    //    image/*
                    if (tailMime === "*") {
                        return true;
                    }
                    else if (tailMime === tailMimeFile) {
                        return true;
                    }
                }
            }
        }
    }
    return valid;
};
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validator the validator object
 * @returns a FileValidated object
 */
var validateFile = function (file, validator) {
    var idGenerated = FileIdGenerator.getNextId();
    var errors = [];
    var maxFileSize = validator.maxFileSize, accept = validator.accept;
    //check file size
    if (maxFileSize && file.size > maxFileSize) {
        errors.push(ERROR_MAX_SIZE(maxFileSize));
    }
    //check file type
    // const allowedTypes = accept.filter((type) => (file.type === type))
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(ERROR_ACCEPT);
    }
    var fileResult = {
        id: idGenerated,
        file: file,
        valid: errors.length === 0,
        errors: errors
    };
    // logic here
    return fileResult;
};
/**
 * Function that validate whether  afile is valid or not
 * according to the Filevalidator properties
 * @param file
 * @param validator
 * @returns
 */
var customValidateFile = function (file, validator) {
    var idGenerated = FileIdGenerator.getNextId();
    var fileResult = {
        id: idGenerated,
        file: file,
        valid: validator(file)
    };
    // logic here
    return fileResult;
};
var FileIdGenerator = /** @class */ (function () {
    function FileIdGenerator() {
    }
    FileIdGenerator.getNextId = function () {
        FileIdGenerator.nextId++;
        return FileIdGenerator.nextId;
    };
    FileIdGenerator.nextId = 0;
    return FileIdGenerator;
}());

var DropzonePropsDefault = {
    children: undefined,
    uploadOnDrop: false,
    maxFiles: 7,
    style: {},
    backgroundColor: "linear-gradient(to bottom, aliceblue,#b7a8a8)",
    //numberOfValidFiles: 0,
    disableRipple: false,
    clickable: true,
    view: "grid",
    maxHeight: "500px",
    footer: true,
    header: true,
    config: {
        headers: {
            "content-type": "multipart/form-data",
        },
    },
    value: undefined,
    onUploading: undefined,
    uploadingMessage: undefined,
    behaviour: "add",
    label: "Drop your files here"
};

function createRipple$1(event, color) {
    var buttonAnchorDiv = event.currentTarget;
    var circle = document.createElement("span");
    var diameter = Math.max(buttonAnchorDiv.clientWidth, buttonAnchorDiv.clientHeight);
    var radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.clientX - buttonAnchorDiv.offsetLeft - radius + "px";
    circle.style.top = event.clientY - buttonAnchorDiv.offsetTop - radius + "px";
    circle.classList.add("ripple");
    circle.style.backgroundColor = hexColorToRGB$1(asureColor$1(colourNameToHex$1(color)), 0.4);
    var ripple = buttonAnchorDiv.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    buttonAnchorDiv.appendChild(circle);
}

var parseSize = function (sizeStr) {
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
};

var Info = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick;
    var finalSize = parseSize(size);
    return (React.createElement("svg", { style: onClick ? { cursor: "pointer" } : {}, xmlns: "http://www.w3.org/2000/svg", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); } },
        React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        React.createElement("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z", fill: colorFill ? colorFill : "none", opacity: ".7" }),
        React.createElement("path", { d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" })));
};

var CheckCircle = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { className: className || "", style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000" },
        React.createElement("path", { d: "M0 0h24v24H0z", fill: colorFill ? colorFill : "none" }),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })));
};

var DoDisturb = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { className: className || "", style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize ? finalSize + "px" : "24px", viewBox: "0 0 24 24", width: finalSize ? finalSize + "px" : "24px", fill: color ? color : "#000000" },
        React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        React.createElement("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z", opacity: ".4" }),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" })));
};

var Cancel = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function (e) { return onClick === null || onClick === void 0 ? void 0 : onClick(e); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", className: className || "" },
        React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none", opacity: ".87" }),
        React.createElement("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z", fill: colorFill ? colorFill : "none", opacity: ".3" }),
        React.createElement("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" })));
};

var Visibility = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { className: className || "", style: onClick ? __assign$2({ cursor: "pointer" }, finalStyle) : finalStyle, xmlns: "http://www.w3.org/2000/svg", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); } },
        React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }),
        React.createElement("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z", opacity: ".9", fill: colorFill ? colorFill : "none" }),
        React.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })));
};

var ViewList = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", className: className || "" },
        React.createElement("rect", { fill: colorFill || "none", height: size || "24", width: size || "24" }),
        React.createElement("path", { d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,18H4V6h4V18z M14,18h-4V6h4V18z M20,18h-4V6h4V18z" })));
};

var ViewGrid = function (props) {
    var size = props.size, color = props.color, 
    //colorFill, 
    onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", className: className || "" },
        React.createElement("g", null,
            React.createElement("path", { d: "M0,0h24v24H0V0z", fill: "none" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z" }))));
};

var UploadDone = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { className: className || "", style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000" },
        React.createElement("g", null,
            React.createElement("rect", { fill: colorFill ? colorFill : "none", height: finalSize, width: finalSize })),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("polygon", { points: "20.13,5.41 18.72,4 9.53,13.19 5.28,8.95 3.87,10.36 9.53,16.02" }),
                React.createElement("rect", { height: "2", width: "14", x: "5", y: "18" })))));
};

var UploadError = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { className: className || "", style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000" },
        React.createElement("rect", { fill: colorFill ? colorFill : "none", height: finalSize, width: finalSize }),
        React.createElement("path", { d: "M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z" })));
};

var Upload = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (React.createElement("svg", { style: onClick ? __assign$2({}, __assign$2({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 24 24", height: finalSize + "px", viewBox: "0 0 24 24", width: finalSize + "px", fill: color ? color : "#000000", className: className || "" },
        React.createElement("g", null,
            React.createElement("rect", { fill: colorFill || "none", height: size || "24", width: size || "24" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" }))));
};

var DropzoneHeader = function (props) {
    var maxFileSize = props.maxFileSize, numberOfValidFiles = props.numberOfValidFiles, onReset = props.onReset, maxFiles = props.maxFiles, handleReset = props.handleReset, view = props.view, onChangeView = props.onChangeView, onUploadStart = props.onUploadStart, urlPresent = props.urlPresent;
    var handleStartUploading = function () {
        onUploadStart === null || onUploadStart === void 0 ? void 0 : onUploadStart();
    };
    var makeHeader = function () {
        var result = [];
        if (onUploadStart && urlPresent && numberOfValidFiles) {
            result.push(React.createElement(React.Fragment, null,
                "Start Uploading",
                React.createElement(Upload, { color: "#646c7f", onClick: handleStartUploading }),
                " | "));
        }
        if (maxFileSize) {
            result.push("Max File size: " + fileSizeFormater(maxFileSize) + " | ");
        }
        if (maxFiles) {
            result.push("Files " + numberOfValidFiles + "/" + maxFiles + " | Valid: " + numberOfValidFiles + " | ");
        }
        if (onChangeView) {
            result.push(React.createElement(React.Fragment, null, view !== "grid" ? (React.createElement(ViewGrid, { onClick: function () {
                    onChangeView === null || onChangeView === void 0 ? void 0 : onChangeView("grid");
                }, color: "#646c7f" })) : (React.createElement(ViewList, { onClick: function () {
                    onChangeView === null || onChangeView === void 0 ? void 0 : onChangeView("list");
                }, color: "#646c7f" }))));
        }
        if (onReset) {
            result.push(React.createElement(Cancel, { color: "#646c7f", 
                //color="rgba(255,255,255,0.8)"
                onClick: handleReset, colorFill: "rgba(255,255,255,0.8)" }));
        }
        return result;
    };
    return (React.createElement("div", { className: "dz-ui-header", onClick: function (e) {
            e.stopPropagation();
        } }, makeHeader().map(function (HeaderItem) { return (React.createElement(React.Fragment, null, HeaderItem)); })));
};

var DropzoneFooter = function (props) {
    var accept = props.accept, message = props.message;
    return (React.createElement("div", { className: "dz-ui-footer", onClick: undefined }, message
        ? message
        : !accept
            ? "All file types accepted"
            : "File types: " + accept));
};

___$insertStyle(".file-item-list-container {\n  background-color: transparent;\n  color: black;\n  min-height: 280px;\n  width: 100%;\n  overflow: auto;\n  align-items: center;\n  scrollbar-width: thin;\n}\n.file-item-list-container.file-item-list-grid {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.file-item-list-container.file-item-list-list {\n  align-items: center;\n  display: inline-flex;\n}");

var FileItemContainer = function (props) {
    var children = props.children, view = props.view;
    var finalView = view || "list";
    return (React.createElement("div", { className: "file-item-list-container file-item-list-" + finalView }, children));
};

var DropzoneLabel = function (props) {
    var children = props.children;
    return React.createElement("div", { className: "dz-ui-label" }, children);
};

var uploadPromiseAxios = function (file, url, method, config) { return __awaiter$1(void 0, void 0, void 0, function () {
    return __generator$1(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter$1(void 0, void 0, void 0, function () {
                var localMethod, fileToUpload, formData, configParams, response, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 10, , 11]);
                            localMethod = method || "POST";
                            fileToUpload = file.file;
                            formData = new FormData();
                            formData.append("file", fileToUpload);
                            configParams = config ||
                                {
                                    headers: {
                                        "content-type": "multipart/form-data;",
                                    },
                                };
                            response = void 0;
                            _a = localMethod;
                            switch (_a) {
                                case "POST": return [3 /*break*/, 1];
                                case "PATCH": return [3 /*break*/, 3];
                                case "PUT": return [3 /*break*/, 5];
                            }
                            return [3 /*break*/, 7];
                        case 1: return [4 /*yield*/, axios.post(url, formData, configParams)];
                        case 2:
                            response = _b.sent();
                            return [3 /*break*/, 9];
                        case 3: return [4 /*yield*/, axios.patch(url, formData, configParams)];
                        case 4:
                            response = _b.sent();
                            return [3 /*break*/, 9];
                        case 5: return [4 /*yield*/, axios.put(url, formData, configParams)];
                        case 6:
                            response = _b.sent();
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, axios.post(url, formData, configParams)];
                        case 8:
                            response = _b.sent();
                            _b.label = 9;
                        case 9:
                            console.log("uploadValidFiles individual", response);
                            if (!response || !response.data) {
                                resolve(__assign$2(__assign$2({}, file), { uploadMessage: "unexpectd error", uploadStatus: "error" }));
                            }
                            if (response.data.status) {
                                console.log("uploadValidFiles individual", response.data);
                                resolve(__assign$2(__assign$2({}, file), { uploadMessage: response.data.message, uploadStatus: "success" }));
                            }
                            else {
                                resolve(__assign$2(__assign$2({}, file), { uploadMessage: response.data.message, uploadStatus: "error" }));
                            }
                            return [3 /*break*/, 11];
                        case 10:
                            _b.sent();
                            resolve(__assign$2(__assign$2({}, file), { uploadMessage: "unexpectd error", uploadStatus: "error" }));
                            return [3 /*break*/, 11];
                        case 11: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
/// queue
/**
 * In construction
 */
/* export const uploadMultipleConcurrent = async (files: FileValidated[], url: string, config: any | undefined): FileValidated[] => {

    if (files && files.length) {
        return;
    }

    }
} */

var Dropzone = function (props) {
    var _a = mergeProps$1(props, DropzonePropsDefault), onDrop = _a.onDrop, children = _a.children, onReset = _a.onReset, color = _a.color, style = _a.style, backgroundColor = _a.backgroundColor, onClick = _a.onClick, validator = _a.validator, maxFileSize = _a.maxFileSize, maxFiles = _a.maxFiles, accept = _a.accept, disableRipple = _a.disableRipple, clickable = _a.clickable, onChangeView = _a.onChangeView, view = _a.view, maxHeight = _a.maxHeight, uploadOnDrop = _a.uploadOnDrop, footer = _a.footer, header = _a.header, method = _a.method, url = _a.url, config = _a.config, value = _a.value, 
    // onUploading,
    uploadingMessage = _a.uploadingMessage, onChange = _a.onChange, behaviour = _a.behaviour, label = _a.label, fakeUploading = _a.fakeUploading;
    //console.log("color:", color);
    //ref to the hidden input tag
    var inputRef = useRef(null);
    // whether is draggin or not
    var _b = useState(false), isDragging = _b[0], setIsDragging = _b[1];
    // list of files (local)
    var _c = useState([]), files = _c[0], setFiles = _c[1];
    var _d = useState("grid"), localView = _d[0], setLocalView = _d[1];
    var _e = useState(""), localMessage = _e[0], setLocalMessage = _e[1];
    //const [filesUploading, setFilesUploading] = useState<FileValidated[]>([]);
    //ClassName for dynamic style
    var _f = useState(false), onUploadStart = _f[0], setOnUploadStart = _f[1];
    // const [queueFiles, setQueueFiles] = useState<FileValidated[]>([]);
    var classNameCreated = useDropzoneStyles(color, backgroundColor, maxHeight);
    var finalClassName = "dropzone-ui" + classNameCreated + (isDragging ? " drag" : "") + (clickable ? " clickable" : "");
    // validator
    var localValidator = {
        accept: accept,
        maxFileSize: maxFileSize,
    };
    //number of files
    var _g = useState(0), numberOfValidFiles = _g[0], setNumberOfValidFiles = _g[1];
    useEffect(function () {
        if (value) {
            setFiles(value);
            setNumberOfValidFiles(value.filter(function (x) { return x.valid; }).length);
        }
    }, [value]);
    useEffect(function () {
        if (view) {
            setLocalView(view);
        }
    }, [view]);
    useEffect(function () {
        if (uploadingMessage) {
            setLocalMessage(uploadingMessage);
        }
    }, [uploadingMessage]);
    /**
     * Method for uploading FIles
     * @param files
     */
    var fakeUpload = function (file) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (file.id % 2 === 0) {
                    resolve(__assign$2(__assign$2({}, file), { uploadStatus: "success", uploadMessage: "File was succesfully uploaded" }));
                }
                else {
                    resolve(__assign$2(__assign$2({}, file), { uploadStatus: "error", uploadMessage: "Error on Uploading" }));
                }
            }, 1500);
        });
    };
    /**
     * UPLOAD FILES LIKE A PRO
     */
    var uploadFiles = function (files) { return __awaiter$1(void 0, void 0, void 0, function () {
        var totalNumber, missingUpload, totalRejected, currentCountUpload, uploadStartFiles, updatedList, _loop_1, i;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    totalNumber = files.length;
                    missingUpload = files.filter(function (x) { return x.valid && x.uploadStatus !== "success"; }).length;
                    totalRejected = 0;
                    currentCountUpload = 0;
                    setOnUploadStart(true);
                    if (!(missingUpload > 0 && url)) return [3 /*break*/, 5];
                    setLocalMessage("uploading " + missingUpload + "/" + totalNumber + " files");
                    uploadStartFiles = files.map(function (f) {
                        if (f.uploadStatus !== "success" && f.valid) {
                            return __assign$2(__assign$2({}, f), { uploadStatus: "uploading" });
                        }
                        else
                            return f;
                    });
                    //make all uploading
                    onChange === null || onChange === void 0 ? void 0 : onChange(uploadStartFiles);
                    updatedList = uploadStartFiles;
                    _loop_1 = function (i) {
                        var currentFile, uploadedFile_1, _b;
                        return __generator$1(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    currentFile = uploadStartFiles[i];
                                    if (!(currentFile.uploadStatus === "uploading")) return [3 /*break*/, 5];
                                    setLocalMessage("Uploading " + ++currentCountUpload + "/" + missingUpload + " files...");
                                    if (!fakeUploading) return [3 /*break*/, 2];
                                    return [4 /*yield*/, fakeUpload(currentFile)];
                                case 1:
                                    _b = _c.sent();
                                    return [3 /*break*/, 4];
                                case 2: return [4 /*yield*/, uploadPromiseAxios(currentFile, url, method, config)];
                                case 3:
                                    _b = _c.sent();
                                    _c.label = 4;
                                case 4:
                                    uploadedFile_1 = _b;
                                    if (uploadedFile_1.uploadStatus === "error") {
                                        totalRejected++;
                                    }
                                    updatedList = updatedList.map(function (f) {
                                        if (f.id === currentFile.id) {
                                            return uploadedFile_1;
                                        }
                                        else {
                                            return f;
                                        }
                                    });
                                    onChange === null || onChange === void 0 ? void 0 : onChange(updatedList);
                                    _c.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < uploadStartFiles.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    // upload group finished :D
                    setLocalMessage("Uloaded files: " + (missingUpload - totalRejected) + ", Rejected: " + totalRejected);
                    setTimeout(function () {
                        setOnUploadStart(false);
                    }, 2300);
                    return [3 /*break*/, 6];
                case 5:
                    setLocalMessage("There is not any missing valid file for uploading or no url endpoint provided");
                    setTimeout(function () {
                        setOnUploadStart(false);
                    }, 2300);
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleFilesChange = function (output) {
        //setNumberOfValidFiles(output.filter((x:FileValidated) => x.valid).length);
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(output);
        onChange === null || onChange === void 0 ? void 0 : onChange(behaviour === "replace" ? output : __spreadArray(__spreadArray([], files, true), output, true));
        setFiles(output);
        if (uploadOnDrop) {
            uploadFiles(behaviour === "replace" ? output : __spreadArray(__spreadArray([], files, true), output, true));
            //uploadFiles();
        }
    };
    /**
     *
     * @param evt
     */
    var kamui = function (evt) { return __awaiter$1(void 0, void 0, void 0, function () {
        var fileList, remainingValids, output;
        return __generator$1(this, function (_a) {
            evt.stopPropagation();
            evt.preventDefault();
            if (onUploadStart) {
                setIsDragging(false);
                return [2 /*return*/];
            }
            fileList = evt.dataTransfer.files;
            remainingValids = (maxFiles || 7) - numberOfValidFiles;
            output = fileListvalidator(fileList, remainingValids);
            if (!disableRipple) {
                createRipple$1(evt, color);
            }
            setIsDragging(false);
            handleFilesChange(output);
            return [2 /*return*/];
        });
    }); };
    var handleOnChangeInput = function (evt) {
        if (onUploadStart) {
            return;
        }
        var fileList = evt.target.files;
        var remainingValids = (maxFiles || 7) - numberOfValidFiles;
        var output = fileListvalidator(fileList, remainingValids);
        handleFilesChange(output);
    };
    //local function validator
    var fileListvalidator = function (preValidatedFiles, remainingValids) {
        var output = [];
        var countdown = remainingValids;
        for (var i = 0, f = void 0; (f = preValidatedFiles[i]); i++) {
            var validatedFile = validator
                ? customValidateFile(f, validator)
                : validateFile(f, localValidator);
            if (validatedFile.valid) {
                validatedFile.valid = countdown > 0;
                countdown--;
            }
            output.push(validatedFile);
        }
        return output;
    };
    var handleUploadStart = function () {
        if (numberOfValidFiles > 0) {
            //uploadFiles();
            uploadFiles(files);
        }
    };
    var handleDragEnter = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "link";
        setIsDragging(true);
    };
    var handleDragLeave = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = "link";
        setIsDragging(false);
    };
    function handleClick(e) {
        var referenceInput = inputRef.current;
        referenceInput === null || referenceInput === void 0 ? void 0 : referenceInput.click();
        if (!disableRipple) {
            createRipple$1(e, color);
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }
    var handleReset = function () {
        onReset === null || onReset === void 0 ? void 0 : onReset();
        setFiles([]);
        onChange === null || onChange === void 0 ? void 0 : onChange([]);
        //onDrop?.([]);
    };
    var handleChangeView = function (newView) {
        console.log("new View", newView);
        setLocalView(newView);
        onChangeView === null || onChangeView === void 0 ? void 0 : onChangeView(newView);
    };
    return (React.createElement("div", { className: finalClassName, style: style, onDragOver: handleDragEnter, onClick: clickable ? handleClick : function () { } },
        header && (React.createElement(DropzoneHeader, { maxFileSize: maxFileSize, numberOfValidFiles: files.filter(function (x) { return x.valid; }).length, onReset: handleReset, maxFiles: maxFiles, handleReset: handleReset, view: localView, onChangeView: handleChangeView, onUploadStart: !uploadOnDrop ? handleUploadStart : undefined, urlPresent: url !== undefined })),
        value && files && files.length > 0 ? (React.createElement(FileItemContainer, { view: localView }, children)) : (React.createElement(DropzoneLabel, null, label)),
        footer && (React.createElement(DropzoneFooter, { accept: accept, message: onUploadStart ? localMessage : undefined })),
        React.createElement("div", { onDragLeave: handleDragLeave, onDrop: kamui, className: "dropzone-ui-layer" + (isDragging ? " drag" : "") }),
        React.createElement("input", { ref: inputRef, onChange: handleOnChangeInput, type: "file", accept: accept, style: { display: "none" }, multiple: (maxFiles && maxFiles > 1) || undefined })));
};

/**
 * Base default props
 */
var FileItemPropsDefault = {
    onDelete: undefined,
    file: undefined,
    color: "#071e25",
    //  validator: undefined,
    id: undefined,
    style: {},
    preview: false,
    valid: false,
    info: false,
    hd: undefined
    //fileName: "bottom"
};

___$insertStyle("@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap\");\n/* .file-item-full-list {\n  display: inline-flex;\n} */\n.file-item-full-container-container {\n  cursor: text;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  margin: 8px;\n  height: 157px;\n  width: 120px;\n  word-break: break-all;\n}\n.file-item-full-container-container .file-item-icon-container {\n  position: relative;\n  height: 120px;\n  width: 120px;\n}\n.file-item-full-container-container .file-item-icon-container .img-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.file-item-full-container-container .file-item-icon-container .img-container.blur img {\n  filter: blur(4px);\n  width: 200%;\n  height: 200%;\n}\n.file-item-full-container-container .file-item-icon-container .img-container img {\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.file-item-full-container-container .file-item-icon-container .info-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  height: inherit;\n  width: inherit;\n}\n.file-item-full-container-container .file-item-icon-container .info-container .status-close {\n  flex-direction: row;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  width: inherit;\n}\n.file-item-full-container-container .file-item-icon-container .info-container .status-close .x-button-file-item {\n  padding: 5px 8px !important;\n  min-width: 0;\n  border-radius: 50%;\n  font-size: 0.5em;\n}\n.file-item-full-container-container .file-item-icon-container .info-container .status-close.hide {\n  display: none;\n}\n.file-item-full-container-container .file-item-icon-container .full-info {\n  position: absolute;\n  left: 0;\n  top: 0;\n  scrollbar-width: thin;\n  line-height: 1.5;\n  letter-spacing: 0.02857em;\n  border: 1px solid white;\n  font-family: \"Poppins\", sans-serif;\n  width: inherit;\n  background-color: rgba(0, 0, 0, 0.85);\n  word-break: break-all;\n  border-radius: 7px;\n  height: 100%;\n  width: 100%;\n  font-size: 0.8rem;\n  transition: all 0.5s ease 0s;\n  overflow: auto;\n  color: white;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .name {\n  padding: 0 5px;\n  font-weight: 500;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .name .sub-label {\n  font-weight: 600;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .size {\n  padding: 0 5px;\n  font-weight: 500;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .size .sub-label {\n  font-weight: 600;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .mime {\n  padding: 0 5px;\n  font-weight: 400;\n}\n.file-item-full-container-container .file-item-icon-container .full-info .mime .sub-label {\n  font-weight: 600;\n}\n.file-item-full-container-container .file-item-icon-container .full-info.hide {\n  display: none;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer {\n  display: flex;\n  width: inherit;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-end;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer.hide {\n  display: none;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer .size-open-info {\n  width: inherit;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer .size-open-info .file-item-size {\n  font-size: 0.7rem;\n  border: 1px solid wheat;\n  color: white;\n  margin: 0% 0% 0% 0%;\n  padding: 0% 5%;\n  border-radius: 7px;\n  background-color: rgba(0, 0, 0, 0.7);\n  word-break: break-all;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer .size-open-info .file-item-size.not-allowed {\n  background-color: rgba(180, 16, 16, 0.7);\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer .size-open-info.hide {\n  display: none;\n}\n.file-item-full-container-container .file-item-icon-container .file-item-footer .size-open-info .file-item-open-info {\n  height: 1rem;\n  width: 1rem;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.75);\n  font-size: 0.6rem;\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  cursor: pointer;\n  border-radius: 50%;\n  color: aliceblue;\n  border: 1px solid wheat;\n}\n.file-item-full-container-container .file-item-name {\n  margin-top: 3px;\n  height: 37px;\n  width: 120px;\n  color: black;\n  font-size: 0.95rem;\n  line-height: 0.85rem;\n  font-weight: 500;\n  letter-spacing: 0.125em;\n  word-break: break-all;\n  padding: 0.5px;\n  text-align: center;\n}\n.file-item-full-container-container .file-item-name.not-allowed {\n  background-color: rgba(180, 16, 16, 0.7);\n}\n\n.file-item-container {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.file-status {\n  text-align: center;\n  font-size: 0.8rem;\n  margin: -5px 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 4px;\n  padding: 0 2px;\n}\n.file-status.hide {\n  display: none;\n}\n.file-status .status-icon {\n  margin: -2px 0;\n}\n.file-status .file-status-error {\n  color: #f44336;\n}\n.file-status .file-status-ok {\n  color: #5c7a1f;\n}\n.file-status .file-status-loading {\n  display: flex;\n  color: #8b6b10;\n  flex-direction: column;\n  background-color: transparent;\n}\n.file-status .file-status-loading p {\n  margin-top: -25px;\n}\n\n.view-in-image-file-item {\n  font-size: 0.7rem;\n  margin: 0% 0% 0% 0%;\n  padding: 2% 2%;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.7);\n  word-break: break-all;\n}");

var PaperPropsDefault = {
    children: function () { },
    shadow: 2,
    className: "",
    style: {},
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    component: "div",
};

___$insertStyle(".paper-root {\n  border-radius: 4px;\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  width: 100%;\n  height: 100%;\n  word-break: break-all;\n}\n\n.paper-root.shadow1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.paper-root.shadow2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.paper-root.shadow3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n\n.paper-root.shadow4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}");

var Paper = function (props) {
    var _a = mergeProps$1(props, PaperPropsDefault), children = _a.children, shadow = _a.shadow, style = _a.style, className = _a.className, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, component = _a.component;
    /**
     * uses the shadow prop to create a classname
     *
     * @returns an appropiate paper classanme
     */
    var makeClassName = function () {
        var classNameFinal = "";
        if (!shadow) {
            classNameFinal = "paper-root shadow";
        }
        else {
            classNameFinal = "paper-root shadow" + shadow;
        }
        if (className) {
            classNameFinal += " " + className;
        }
        return classNameFinal;
    };
    var handleMouseEnter = function (evt) {
        onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter();
    };
    var handleMouseLeave = function (evt) {
        onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave();
    };
    return React.createElement(component ? component : "div", {
        className: makeClassName(),
        style: style,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    }, children);
    /*
      return (
        <>
          <div
            className={makeClassName()}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </div>
        </>
      );
      */
};

var Loader = function (props) {
    var _a = props.color, color = _a === void 0 ? "#8b6b10" : _a;
    return (React.createElement("svg", { width: "80px", height: "60px", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "lds-colorbar" },
        React.createElement("defs", null,
            React.createElement("clipPath", { "ng-attr-id": "{{config.cpid}}", x: "0", y: "0", width: "100", height: "100", id: "lds-colorbar-cpid-9d2a9cfa91489" },
                React.createElement("path", { d: "M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z" }))),
        React.createElement("path", { fill: "none", "ng-attr-stroke": "{{config.cf}}", "stroke-width": "2.7928", d: "M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z", stroke: "#5d5d5d" }),
        React.createElement("g", { "ng-attr-clip-path": "url(#{{config.cpid}})", "clip-path": "url(#lds-colorbar-cpid-9d2a9cfa91489)" },
            React.createElement("g", { transform: "translate(10 0)" },
                React.createElement("rect", { x: "-100", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c1}}", fill: color }),
                React.createElement("rect", { x: "-75", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c2}}", fill: hexColorToRGB$1(color, 0.5) }),
                React.createElement("rect", { x: "-50", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c3}}", fill: color }),
                React.createElement("rect", { x: "-25", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c4}}", fill: hexColorToRGB$1(color, 0.5) }),
                React.createElement("rect", { x: "0", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c1}}", fill: color }),
                React.createElement("rect", { x: "25", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c2}}", fill: hexColorToRGB$1(color, 0.5) }),
                React.createElement("rect", { x: "50", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c3}}", fill: color }),
                React.createElement("rect", { x: "75", y: "0", width: "25", height: "100", "ng-attr-fill": "{{config.c4}}", fill: hexColorToRGB$1(color, 0.5) }),
                React.createElement("animateTransform", { attributeName: "transform", type: "translate", calcMode: "linear", values: "0;100", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))));
};

var FileItemStatus = function (props) {
    var valid = props.valid, uploadStatus = props.uploadStatus, message = props.message;
    return (React.createElement(Fragment, null, uploadStatus ? (uploadStatus === "uploading" ? (React.createElement("div", { className: "file-status-loading" },
        React.createElement(Loader, null),
        React.createElement("p", null, "uploading "))) : uploadStatus === "success" ? (React.createElement("div", { className: "file-status-ok upload" },
        React.createElement(UploadDone, { color: "#4caf50", size: "small", 
            //style={styles.icons}
            className: "status-icon" }),
        " ",
        message || "success")) : (React.createElement("div", { className: "file-status-error upload" },
        React.createElement(UploadError, { color: "#f44336", size: "semi-medium", className: "status-icon" }),
        "upload error"))) : valid ? (React.createElement("div", { className: "file-status-ok" },
        " ",
        React.createElement(CheckCircle, { color: "#4caf50", size: "small", 
            //style={styles.icons}
            className: "status-icon" }),
        "valid")) : (React.createElement("div", { className: "file-status-error" },
        React.createElement(DoDisturb, { color: "#f44336", size: "small", className: "status-icon" }),
        "Denied"))));
};

var FileItemFullInfoLayer = function (props) {
    var showInfo = props.showInfo, valid = props.valid, onClose = props.onClose, fileName = props.fileName, fileSize = props.fileSize, fileType = props.fileType, uploadStatus = props.uploadStatus, uploadMessage = props.uploadMessage;
    var handleCloseInfo = function () {
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    return (React.createElement("div", { className: showInfo ? "full-info" : "full-info hide" },
        React.createElement("span", { style: {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
            } },
            React.createElement(Cancel, { style: { margin: 0, right: 0, top: 0 }, color: "rgba(255,255,255,0.8)", onClick: handleCloseInfo, colorFill: "black" }),
            uploadStatus && uploadStatus !== "uploading" ? (React.createElement("div", { className: "file-status" },
                React.createElement(FileItemStatus, { uploadStatus: uploadStatus }))) : (React.createElement("div", { className: "file-status" },
                React.createElement(FileItemStatus, { valid: valid })))),
        uploadMessage && React.createElement("div", { className: "name" }, uploadMessage),
        React.createElement("div", { className: "name" },
            React.createElement("span", { className: "sub-label" }, "Name: "),
            fileName),
        React.createElement("div", { className: "size" },
            React.createElement("span", { className: "sub-label" }, "Size: "),
            " ",
            fileSize),
        React.createElement("div", { className: "mime" },
            React.createElement("span", { className: "sub-label" }, "Type: "),
            " ",
            fileType)));
};

var FileItemImage = function (props) {
    var imageSource = props.imageSource, url = props.url, fileName = props.fileName;
    return (React.createElement(Fragment, null,
        imageSource && (React.createElement("div", { className: "img-container blur" },
            React.createElement("img", { src: url, alt: "blur " + fileName }))),
        React.createElement("div", { className: "img-container" },
            React.createElement("img", { src: imageSource || url, alt: "preview " + fileName }))));
};

var FileItemMainLayer = function (props) {
    var showInfo = props.showInfo, onDelete = props.onDelete, info = props.info, 
    //fileName,
    //fileNamePosition,
    valid = props.valid, isImage = props.isImage, onOpenInfo = props.onOpenInfo, onOpenImage = props.onOpenImage, sizeFormatted = props.sizeFormatted, uploadStatus = props.uploadStatus;
    var handleDelete = function () {
        onDelete === null || onDelete === void 0 ? void 0 : onDelete();
    };
    var handleOpenInfo = function () {
        onOpenInfo === null || onOpenInfo === void 0 ? void 0 : onOpenInfo();
    };
    var handleOpenImage = function () {
        onOpenImage === null || onOpenImage === void 0 ? void 0 : onOpenImage();
    };
    var _a = useState(false), uploadComplete = _a[0], setUploadComplete = _a[1];
    useEffect(function () {
        if (uploadStatus === "success") {
            setTimeout(function () {
                setUploadComplete(true);
            }, 2000);
        }
    }, [uploadStatus]);
    return (React.createElement("div", { className: "info-container" },
        React.createElement("div", { className: showInfo ? "status-close hide" : "status-close" },
            React.createElement(Cancel, { color: "rgba(255,255,255,0.8)", onClick: handleDelete, colorFill: "black" })),
        uploadStatus && !showInfo && (React.createElement("div", { className: (uploadComplete) ? "file-status hide" : "file-status" },
            React.createElement(FileItemStatus, { uploadStatus: uploadStatus }))),
        React.createElement("div", { className: "file-item-footer" },
            uploadStatus && uploadComplete ? (React.createElement("div", { className: showInfo ? "file-status hide" : "file-status" },
                React.createElement("div", { className: "file-status-ok" },
                    React.createElement(FileItemStatus, { uploadStatus: uploadStatus, message: "uploaded" })))) : (React.createElement("div", { className: showInfo ? "file-status hide" : "file-status" },
                React.createElement(FileItemStatus, { valid: valid }))),
            React.createElement("div", { className: showInfo ? "size-open-info hide" : "size-open-info" },
                React.createElement("div", { className: "file-item-size" }, sizeFormatted),
                isImage && onOpenImage && valid && (React.createElement(Visibility, { className: "view-in-image-file-item", color: "white", onClick: handleOpenImage, size: "small" })),
                info && (React.createElement(Info, { color: "rgba(255,255,255,0.8)", onClick: handleOpenInfo, colorFill: "black" }))))));
};

var FileItem = function (props) {
    var _a = mergeProps$1(props, FileItemPropsDefault), file = _a.file, onDelete = _a.onDelete, onSee = _a.onSee, style = _a.style, preview = _a.preview, info = _a.info, id = _a.id, valid = _a.valid, uploadStatus = _a.uploadStatus, uploadMessage = _a.uploadMessage, hd = _a.hd;
    var sizeFormatted = file ? fileSizeFormater(file.size) : "0 KB";
    var _b = useState(false), isImage = _b[0], setIsImage = _b[1];
    var _c = useState(""), url = _c[0], setUrl = _c[1];
    var _d = useState(undefined), imageSource = _d[0], setImageSource = _d[1];
    var _e = useState(false), showInfo = _e[0], setShowInfo = _e[1];
    useEffect(function () {
        init(file, valid || false, preview || false);
        return function () {
            setImageSource(undefined);
            setIsImage(false);
        };
    }, [file, valid, preview]);
    var init = function (file, valid, preview) { return __awaiter$1(void 0, void 0, void 0, function () {
        var url, headerMime, response, cutt;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!file)
                        return [2 /*return*/];
                    url = getURLFileIco(file).url;
                    headerMime = file.type ? file.type.split("/")[0] : "octet";
                    setIsImage(headerMime === "image");
                    setUrl(url);
                    if (!(preview && valid && headerMime === "image")) return [3 /*break*/, 4];
                    return [4 /*yield*/, readImagePromise(file)];
                case 1:
                    response = _a.sent();
                    if (!response) return [3 /*break*/, 3];
                    return [4 /*yield*/, resizeImage(response)];
                case 2:
                    cutt = _a.sent();
                    setImageSource(cutt);
                    return [3 /*break*/, 4];
                case 3:
                    setImageSource(undefined);
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function () {
        if (onDelete) {
            onDelete(id);
        }
    };
    var handleOpenInfo = function () {
        setShowInfo(true);
    };
    var handleCloseInfo = function () {
        setShowInfo(false);
    };
    var handleOpenImage = function () { return __awaiter$1(void 0, void 0, void 0, function () {
        var response;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(imageSource && file)) return [3 /*break*/, 3];
                    if (!hd) return [3 /*break*/, 2];
                    return [4 /*yield*/, readImagePromise(file)];
                case 1:
                    response = _a.sent();
                    onSee === null || onSee === void 0 ? void 0 : onSee(response);
                    return [3 /*break*/, 3];
                case 2:
                    onSee === null || onSee === void 0 ? void 0 : onSee(imageSource);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    function handleClick(e) {
        //avoid children to trigger onClick ripple from parent
        e.stopPropagation();
    }
    return (React.createElement(Fragment, null, file && (React.createElement("div", { className: "dz-ui-file-item-container", onClick: handleClick },
        React.createElement("div", { className: "file-item-full-container-container", style: style },
            React.createElement(Paper, { className: "file-item-icon-container " + (showInfo ? " hide" : "") },
                React.createElement(FileItemImage, { imageSource: imageSource, url: url, fileName: file.name }),
                React.createElement(FileItemMainLayer, { showInfo: showInfo, 
                    //fileNamePosition={fileName}
                    fileName: file.name, onDelete: handleDelete, onOpenImage: onSee && preview ? handleOpenImage : undefined, onOpenInfo: handleOpenInfo, info: info || false, valid: valid || false, isImage: isImage, sizeFormatted: sizeFormatted, 
                    //fileNamePosition={undefined}
                    uploadStatus: uploadStatus }),
                React.createElement(FileItemFullInfoLayer, { showInfo: showInfo, fileName: file.name, fileSize: fileSizeFormater(file.size), fileType: file.type, valid: valid || false, onClose: handleCloseInfo, uploadStatus: uploadStatus, uploadMessage: uploadMessage })),
            React.createElement("div", { className: "file-item-name" }, shrinkWord(file.name)))))));
};
/**
 * {fileName === "bottom" && (
      <div className="file-item-name">{shrinkWord(file.name)}</div>
    )}
 */

___$insertStyle(".image-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.534);\n  transform: translate(100%);\n  transition: transform 0.2s ease-in-out;\n  z-index: 1;\n}\n.image-container.show {\n  transform: translate(0);\n}\n\n.img-rel-container {\n  position: relative;\n  height: 80%;\n}\n@media (max-width: 600px) {\n  .img-rel-container {\n    width: 80%;\n    height: auto;\n  }\n}\n\n.image-full-screen {\n  position: relative;\n  transform: scale(0);\n  border-radius: 10px;\n  transition: transform 0.3s 0.2s;\n}\n.image-full-screen.show-image {\n  transform: scale(1);\n}\n\n.button-full-screen {\n  position: absolute;\n}");

var FullScreenPreview = function (props) {
    var imgSource = props.imgSource, openImage = props.openImage, onClose = props.onClose;
    function handleClose(e) {
        //avoid children to trigger onClick ripple from parent
        e.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }
    return (React.createElement("div", { className: openImage ? "image-container show" : "image-container", onClick: handleClose }, imgSource && openImage && (React.createElement("div", { className: "img-rel-container" },
        React.createElement("img", { width: "100%", height: "100%", src: imgSource, alt: "", className: "image-full-screen show-image" }),
        React.createElement(Cancel, { color: "rgba(255,255,255,0.8)", onClick: handleClose, colorFill: "black", className: "button-full-screen" })))));
};

function ___$insertStyle$1(css) {
  if (!css) {
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

___$insertStyle$1("@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n.material-button-root {\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: center;\n  text-decoration: none;\n  text-transform: none;\n}\n\n.material-button {\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  overflow: hidden;\n  min-width: 64px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n}\n\n.material-button.uppercase {\n  text-transform: uppercase;\n}\n\n.material-button.lowercase {\n  text-transform: lowercase;\n}\n\n.material-button.capitalize {\n  text-transform: capitalize;\n}\n\n.material-button.contained {\n  padding: 6px 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button.outlined {\n  padding: 5px 15px;\n}\n\n.material-button.text {\n  padding: 5px 15px;\n}\n\n.material-button-root.contained:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button span.label {\n  width: 100%;\n  display: inherit;\n  align-items: inherit;\n  justify-content: inherit;\n}\n\nspan.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 500ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n.material-button-root.disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n  padding: 6px 16px;\n}\n\n@media screen and (max-width: 600px) {\n  .material-button {\n    min-width: 30px;\n    font-size: 0.78rem;\n    line-height: 1.5;\n    letter-spacing: 0.025em;\n  }\n\n  .material-button.contained {\n    padding: 4px 13px;\n  }\n\n  .material-button.outlined {\n    padding: 4px 12px;\n  }\n}");

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * hexArray & decArray
 *
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
var hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/**
 * Converts hex number in string representation to decimal number
 *
 *
 * @param letter the string hex number
 * @returns a decimal number
 */
var hexTodec = function (letter) {
    if (hexArray.includes(letter)) {
        return decArray[hexArray.indexOf(letter)];
    }
    else {
        return 0;
    }
};
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 *
 *
 * @param colorInput the color inpt to test
 * @returns true if the inputColor is a hexadecimal css color
 */
var isHexColor = function (colorInput) {
    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {
        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {
        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (var i = 1; i < colorInput.length; i++) {
        if (!hexArray.includes(colorInput.charAt(i))) {
            return false;
        }
    }
    return true;
};
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 *
 *
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color
 * @returns the rgba representation of a hex color
 */
var hexColorToRGB = function (colorInput, perc, defaultColor) {
    if (perc === void 0) { perc = 0; }
    var resultDefault = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    var color = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }
    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', "rgba").replace(')', ", " + perc + ")");
    }
    // if is a hex color or named color
    if (!isHexColor(colourNameToHex(color))) {
        return resultDefault;
    }
    var resultOk = "";
    //let strVar: string = "";
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = "rgba(" + component1 + ", " + component2 + "," + component3 + " , " + perc + ")";
    return resultOk;
};
/**
 * Make the color into a darker color
 * @param colorInput
 * @returns the darked color in
 */
var darkerColor = function (colorInput, percentage) {
    if (percentage === void 0) { percentage = 25; }
    var darkedColor = "";
    var reduce = (100 - percentage) / 100;
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    if (isHexColor(colourNameToHex(colorInput))) {
        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));
        darkedColor = "rgb(" + component1 * reduce + ", " + component2 * reduce + "," + component3 * reduce + ")";
    }
    else {
        if (colorInput.includes("rgba")) {
            var slicer = colorInput.replace("rgba(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(" + parseInt(components[0], 10) * reduce + ", " + parseInt(components[1], 10) * reduce + "," + parseInt(components[2], 10) * reduce + ")";
            //return darkedColor;
        }
        else if (colorInput.includes("rgb")) {
            var slicer = colorInput.replace("rgb(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(" + parseInt(components[0], 10) * reduce + ", " + parseInt(components[1], 10) * reduce + "," + parseInt(components[2], 10) * reduce + ")";
            // return darkedColor;
        }
    }
    return darkedColor;
};
/**
 * Merge props that com form user and those ones that are default
 * if incommingStyle is null this returns teh default value
 *
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
function mergeProps(incommingProps, defaultProps) {
    if (!incommingProps) {
        return defaultProps;
    }
    else {
        return __assign(__assign({}, defaultProps), incommingProps);
    }
}
/**
 * Asure a base colour when not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
var asureColor = function (color) {
    if (color !== undefined && color !== "") {
        return color;
    }
    else {
        return "#5d6475";
    }
};
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
function colourNameToHex(colour) {
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
 * The full list of named Colors provided by
 * https://htmlcolorcodes.com/es/nombres-de-los-colores/
 */
var namedColours2 = {
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
};

/**
 * In order to avoid overwriting the classnames
 * and to be able to have different styled buttons in the document
 * it is necesary to add a numeric identifier next to the className:
 *      instead of:  ".classname"
 *      we get    :  ".classname-3", ".classname-4", ".classname-5" and so on
 * for this task a number is used as ID
 */
var MaterialButtonStylizer = /** @class */ (function () {
    function MaterialButtonStylizer() {
    }
    /**
     * Increases the count and retrieves the next number
     * @returns the next static number in styles
     */
    MaterialButtonStylizer.getNext = function () {
        MaterialButtonStylizer.nextButtonClassNameNumber++;
        return MaterialButtonStylizer.nextButtonClassNameNumber;
    };
    MaterialButtonStylizer.nextButtonClassNameNumber = 0;
    return MaterialButtonStylizer;
}());
/**
 * Calls the getNext() method of MaterialButtonStylizer class
 * @returns the next static number in styles
 */
var getNextClassName = function () {
    return MaterialButtonStylizer.getNext();
};
/**
   * Creates the ripple effect
   * @param event
   */
function createRipple(event, variant, color) {
    var buttonAnchorDiv = event.currentTarget;
    var circle = document.createElement("span");
    var diameter = Math.max(buttonAnchorDiv.clientWidth, buttonAnchorDiv.clientHeight);
    var radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.clientX - buttonAnchorDiv.offsetLeft - radius + "px";
    circle.style.top = event.clientY - buttonAnchorDiv.offsetTop - radius + "px";
    circle.classList.add("ripple");
    if (variant !== "contained") {
        circle.style.backgroundColor = hexColorToRGB(asureColor(colourNameToHex(color)), 0.4);
    }
    else {
        circle.style.backgroundColor = hexColorToRGB("#ffffff", 0.4);
    }
    var ripple = buttonAnchorDiv.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    buttonAnchorDiv.appendChild(circle);
}
var makeDynamicStyle = function (variant, disabled, color, textColor, nextClassName) {
    var styleSheet = {
        id: "material-button-styles-" + nextClassName,
        sheetRules: [{
                className: "material-button." + variant + "-" + nextClassName,
                rules: {},
            },
            {
                className: "material-button-root." + variant + "-" + nextClassName,
                rules: {},
            },],
    };
    var sheetRules = styleSheet.sheetRules;
    if (!disabled) {
        switch (variant) {
            case "contained":
                sheetRules[0].rules = {
                    color: asureColor(colourNameToHex(textColor)),
                    backgroundColor: asureColor(colourNameToHex(color)),
                };
                sheetRules[1].rules = {
                    ":hover": {
                        backgroundColor: darkerColor(hexColorToRGB(asureColor(colourNameToHex(color)), 1)),
                    },
                };
                break;
            case "outlined":
                sheetRules[0].rules = {
                    border: "1px solid " + hexColorToRGB(asureColor(colourNameToHex(color)), 0.5),
                    color: asureColor(colourNameToHex(color)),
                    backgroundColor: "transparent",
                };
                sheetRules[1].rules = {
                    ":hover": {
                        border: "1px solid " + hexColorToRGB(asureColor(colourNameToHex(color)), 1),
                        backgroundColor: hexColorToRGB(asureColor(colourNameToHex(color)), 0.085),
                    },
                };
                break;
            case "text":
                sheetRules[0].rules = {
                    color: asureColor(colourNameToHex(color)),
                    backgroundColor: "transparent",
                };
                sheetRules[1].rules = {
                    ":hover": {
                        backgroundColor: hexColorToRGB(asureColor(colourNameToHex(color)), 0.085),
                    },
                };
                break;
        }
    }
    styleSheet.sheetRules = sheetRules;
    return styleSheet;
};

//export type ThemeColor = "primary" | "secondary";
/**
 * default props for material button
 */
var MaterialButtonDefaultProps = {
    children: undefined,
    style: {},
    onClick: function () { },
    variant: "contained",
    disabled: false,
    color: "#071e25",
    textColor: "#FFFFFF",
    text: "uppercase"
};

var DynamiCSS;
(function (DynamiCSS) {
    function insertStyleSheet(dynamicSheet) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!dynamicSheet) {
            return "";
        }
        //if already exists
        if (document.getElementById(dynamicSheet.id)) {
            return dynamicSheet.id;
        }
        result_id = dynamicSheet.id;
        var styleSheet = document.createElement("style");
        styleSheet.id = result_id;
        styleSheet.setAttribute("type", "text/css");
        var contetRaw = toRawStyleSheet(dynamicSheet.sheetRules || []) + dynamicSheet.raw || "";
        styleSheet.textContent = contetRaw;
        var appendResult = document.head.appendChild(styleSheet);
        if (!appendResult) {
            return "";
        }
        return result_id;
    }
    DynamiCSS.insertStyleSheet = insertStyleSheet;
    function editStyleSheet(id, sheetRules) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (!id || !sheetRules) {
            return "";
        }
        //if dont exists yet
        var styleSheet = document.getElementById(id);
        if (!styleSheet) {
            return "";
        }
        /*  result_id = id;
         //var styleSheet: HTMLStyleElement = document.createElement("style");
         styleSheet.id = result_id;
         styleSheet.setAttribute("type", "text/css"); */
        styleSheet.textContent = toRawStyleSheet(sheetRules);
        return result_id;
    }
    DynamiCSS.editStyleSheet = editStyleSheet;
    function removeStyleSheet(id) {
        var result_id = "";
        if (!id) {
            return "";
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            document.head.removeChild(htmlObject);
            result_id = id;
        }
        return result_id;
    }
    DynamiCSS.removeStyleSheet = removeStyleSheet;
    function existStyleSheet(id) {
        if (!id) {
            return false;
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            return true;
        }
        return false;
    }
    DynamiCSS.existStyleSheet = existStyleSheet;
    function makeStyleSheet(styleSheet) {
        if (!styleSheet) {
            return null;
        }
        return styleSheet;
    }
    DynamiCSS.makeStyleSheet = makeStyleSheet;
})(DynamiCSS || (DynamiCSS = {}));
/**
 * Determines whether a character is upperCase or not
 * @param str a character
 * @returns true if str contains a string character
 */
function isUpper(character) {
    if (!character)
        return false;
    return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}
/**
 * Converts a rule with uppercase to a hyphen-lowercase version
 * @param rule the rule
 * @returns
 */
function fromUpperCaseToHyphen(ruleLabel) {
    var result = "";
    var charUpper = ' ';
    var isupper = false;
    for (var i = 0; i < ruleLabel.length; i++) {
        var currentChar = ruleLabel[i];
        if (isUpper(currentChar)) {
            charUpper = currentChar;
            isupper = true;
            break;
        }
    }
    //add hyphen
    if (isupper) {
        var parts = ruleLabel.split(charUpper);
        result = parts[0] + "-" + charUpper.toLowerCase() + parts[1];
    }
    else {
        result = ruleLabel;
    }
    return result;
}
/**
 *
 * @param ruleLabel the rule
 * @returns true if the rule label corresponds to a pseudo class
 */
function isPseudo(ruleLabel) {
    if (!ruleLabel)
        return false;
    return ruleLabel.includes(":");
}
function makeRawRuleLabel(className) {
    var result = "";
    var splitedClassName = className.trim().split(" ");
    //is composed classname?
    if (splitedClassName.length > 1) {
        for (var i = 0; i < splitedClassName.length; i++) {
            result += "." + splitedClassName[i];
        }
        result += "{\n";
    }
    else {
        result += "." + className + "{\n";
    }
    return result;
}
function toRawStyleSheet(sheetRules) {
    if (!sheetRules) {
        return "";
    }
    var rawStyleSheet = "";
    var nestedPseudos = [];
    for (var j = 0; j < sheetRules.length; j++) {
        var currentRule = sheetRules[j];
        var currnetRawRule = "";
        // currnetRawRule += `.${currentRule.className}{\n`;
        currnetRawRule += makeRawRuleLabel(currentRule.className);
        //list of labels for rules
        var ruleskeys = Object.keys(currentRule.rules);
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            //if a pseudo class found, separate it
            if (isPseudo(styleLabel)) {
                var pseudoClassName = currentRule.className + styleLabel;
                nestedPseudos.push({ className: pseudoClassName, rules: currentRule.rules[styleLabel] });
            }
            else {
                var styleRule = currentRule.rules[currentKey];
                currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
            }
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    //nested pseudos
    for (var p = 0; p < nestedPseudos.length; p++) {
        var currnetRawRule = "";
        var currentRule = nestedPseudos[p];
        var ruleskeys = Object.keys(currentRule.rules);
        currnetRawRule += "." + currentRule.className + "{\n";
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            var styleRule = currentRule.rules[currentKey];
            currnetRawRule += "\t" + styleLabel + " : " + styleRule + ";\n";
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    return rawStyleSheet;
}

var MaterialButton = function (props) {
    var _a = mergeProps(props, MaterialButtonDefaultProps), children = _a.children, onClick = _a.onClick, disabled = _a.disabled, style = _a.style, href = _a.href, variant = _a.variant, color = _a.color, textColor = _a.textColor, className = _a.className, text = _a.text;
    //states
    var _b = useState(""), idStyles = _b[0], setIdStyles = _b[1];
    var _c = useState(false), styleInjected = _c[0], setStyleInjected = _c[1];
    var _d = useState(0), nextClassName = _d[0], setNextClassName = _d[1];
    var _e = useState(""), classNameCreated = _e[0], setClassNameCreated = _e[1];
    //effects
    useEffect(function () {
        return function () { return removeStyle(); };
        // eslint-disable-next-line
    }, [idStyles]);
    /**
     * Inserts the style for material button specific style
     * @param variant
     * @param disabled
     * @param color
     * @param textColor
     * @param text
     */
    var handleInserStyle = function (variant, disabled, color, textColor, text) { return __awaiter(void 0, void 0, void 0, function () {
        var class_name, styleSheet, idStyle, nextClassNameVar;
        return __generator(this, function (_a) {
            class_name = className || "";
            idStyle = "";
            if (nextClassName === 0 && !styleInjected) {
                //new
                nextClassNameVar = getNextClassName();
                styleSheet = makeDynamicStyle(variant, disabled, color, textColor, nextClassNameVar);
                setNextClassName(nextClassNameVar);
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                makeClassName(variant, class_name, nextClassNameVar);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            }
            else {
                //already a stylesheet associated
                styleSheet = makeDynamicStyle(variant, disabled, color, textColor, nextClassName);
                DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
                makeClassName(variant, class_name, nextClassName);
            }
            return [2 /*return*/];
        });
    }); };
    /**
     *
     * @param variant
     * @param class_name
     */
    var makeClassName = function (variant, class_name, nextClassNameVar) {
        var classname = "material-button-root material-button ";
        if (!disabled) {
            classname += variant + " " + variant + "-" + nextClassNameVar;
        }
        else {
            classname += "disabled";
        }
        //classname to override styles in stylesheet
        if (class_name) {
            classname += " " + classname + " " + class_name;
        }
        //some text in className
        if (text) {
            classname += " " + text;
        }
        setClassNameCreated(classname);
    };
    var removeStyle = function () {
        if (styleInjected) {
            DynamiCSS.removeStyleSheet(idStyles);
            setStyleInjected(false);
            setIdStyles("");
        }
    };
    useEffect(function () {
        handleInserStyle(variant, disabled, color, textColor);
        // eslint-disable-next-line
    }, [variant, disabled, color, textColor, text]);
    //references
    var btn_ref = useRef(null);
    var span_ref = useRef(null);
    /**
     *
     * @param e
     */
    function handleClick(e) {
        createRipple(e, variant, color);
        if (onClick)
            onClick(e);
    }
    return (React.createElement(React.Fragment, null, styleInjected &&
        React.createElement(href ? "a" : "button", {
            className: classNameCreated,
            "data-testid": href ? "material-anchor" : "material-button",
            onClick: handleClick,
            ref: btn_ref,
            href: href,
            style: style,
            children: href ? (React.createElement("span", { ref: span_ref, className: "label" }, children)) : (React.createElement("span", { className: "label" }, children)),
            disabled: disabled,
        })));
};

/**
 * The default props when not given
 */
var InputButtonDefaultProps = __assign$2(__assign$2({}, MaterialButtonDefaultProps), {
    multiple: false,
    accept: "",
    label: "Browse ...",
    onChange: function () { },
    maxFiles: 7,
    uploadOnSelect: false
});

var InputButton = function (props) {
    var _a = mergeProps$1(props, InputButtonDefaultProps), id = _a.id, disabled = _a.disabled, style = _a.style, variant = _a.variant, color = _a.color, multiple = _a.multiple, accept = _a.accept, label = _a.label, onChange = _a.onChange, textColor = _a.textColor, validator = _a.validator, maxFileSize = _a.maxFileSize;
    var inputRef = useRef(null);
    var localValidator = {
        //It is assumed that input tag already validated accept property
        //accept: accept,
        maxFileSize: maxFileSize,
    };
    var handleOnChange = function (evt) {
        var files = evt.target.files;
        var output = [];
        if (files && files.length > 0) {
            for (var i = 0, f = void 0; (f = files[i]); i++) {
                var validatedFile = validator
                    ? customValidateFile(f, validator)
                    : validateFile(f, localValidator);
                output.push(validatedFile);
            }
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(output);
    };
    function clickInput(e) {
        e.stopPropagation();
        var referenceInput = inputRef.current;
        if (referenceInput) {
            referenceInput.click();
        }
    }
    return (React.createElement(Fragment, null,
        React.createElement(MaterialButton, { style: style, color: color, variant: variant, 
            //size={size}
            onClick: clickInput, disabled: disabled, textColor: textColor }, label),
        React.createElement("input", { id: id || "", ref: inputRef, onChange: handleOnChange, type: "file", accept: accept, style: { display: "none" }, multiple: multiple })));
};

export { Dropzone, DropzoneLabel, FileItem, FileItemContainer, FullScreenPreview, InputButton, createPPF };
//# sourceMappingURL=index.es.js.map
