import React, { Fragment, useRef } from "react";
import { MaterialButton } from "@unlimited-react-components/material-button";
import { mergeProps } from "@unlimited-react-components/kernel";
import { InputButtonDefaultProps, InputButtonProps } from "./InputButtonProps";

const InputButton: React.FC<InputButtonProps> = (props: InputButtonProps) => {
  let {
    id,
    disabled,
    style,
    variant,
    color,
    multiple,
    accept,
    label,
    onChange,
    textColor,
  } = mergeProps(props, InputButtonDefaultProps);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const output:File[] = [];
    let files: FileList = evt.target.files as FileList;
    if (files && files.length > 0) {
      for (let i = 0, f: File; (f = files[i]); i++) {
        output.push(f);
      }
    }
   
    if (onChange) {
      onChange(output);
    }
  };
  const clickInput = (): void => {
    let referenceInput = inputRef.current;
    if (referenceInput) {
      referenceInput.click();
    }
  };
  return (
    <Fragment>
      <MaterialButton
        style={style}
        color={color}
        variant={variant}
        //size={size}
        onClick={clickInput}
        disabled={disabled}
        textColor={textColor}
      >
        {label}
      </MaterialButton>
      <input
        id={id || ""}
        ref={inputRef}
        onChange={handleOnChange}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        multiple={multiple}
        
      />
    </Fragment>
  );
};

export default InputButton;
