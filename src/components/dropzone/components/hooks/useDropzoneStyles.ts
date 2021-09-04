import { DynamicSheet, DynamiCSS } from "@dynamicss/dynamicss";
import { asureColor, colourNameToHex, hexColorToRGB } from "@unlimited-react-components/kernel";
import { useEffect, useState } from "react";
import { DropzoneProps } from "../Dropzone/DropzoneProps";


const useDropzoneStyles = (color: string | undefined, backgroundColor: string | undefined,maxHeight:string |undefined): string => {
    const [idStyles, setIdStyles] = useState<string>("");
    const [styleInjected, setStyleInjected] = useState<boolean>(false);
    const [classNameCreated, setClassNameCreated] = useState<string>("");

    useEffect(() => {
        console.log("affected",color);
        const removeStyle = () => {
            if (styleInjected) {
                DynamiCSS.removeStyleSheet(idStyles);
                setStyleInjected(false);
                setIdStyles("");
            }
        };
        const handleInserStyle = async (
            color: DropzoneProps["color"],
        ) => {
            let styleSheet: DynamicSheet = {
                id: "dropzone-ui-styles",
                sheetRules: [
                    {
                        className: `dropzone-ui-extra`,
                        rules: {
                            border: `1px dashed ${color}`,
                            backgroundColor:backgroundColor,
                            maxHeight:maxHeight
                        },
                    },
                    {
                        className: `drag`,
                        rules: {
                            border: `2px dashed ${hexColorToRGB(
                                asureColor(colourNameToHex(color)),
                                1
                            )}`,
                            backgroundColor: hexColorToRGB(
                                asureColor(colourNameToHex(color)),
                                0.085
                            ),
                        },
                    }

                ],
            };;
            let idStyle: string = "";
            if (!styleInjected) {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);

                setClassNameCreated(` dropzone-ui-extra`);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            } else {
                //already a stylesheet associated
                DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            }

            //className
        };


        handleInserStyle(color);
        return () => {
            removeStyle();
        }
        // eslint-disable-next-line
    }, [color,backgroundColor,maxHeight]);

    return classNameCreated;
}
export default useDropzoneStyles;