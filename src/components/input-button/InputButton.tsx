import React, { Fragment, useRef } from "react";
import { MaterialButton } from "@unlimited-react-components/material-button";
import { mergeProps } from "@unlimited-react-components/kernel";
import { InputButtonDefaultProps, InputButtonProps } from "./InputButtonProps";
import {
  customValidateFile,
  FileValidated,
  FileValidator,
  validateFile,
} from "../dropzone/components/utils/validation.utils";

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
    validator,
    maxFileSize,
  } = mergeProps(props, InputButtonDefaultProps);
  const inputRef = useRef<HTMLInputElement>(null);
  const localValidator: FileValidator = {
    //It is assumed that input tag already validated accept property
    //accept: accept,
    maxFileSize: maxFileSize,
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let files: FileList = evt.target.files as FileList;
    const output: FileValidated[] = [];

    let stillValid: number | undefined = undefined;

    if (files && files.length > 0) {
      for (let i = 0, f: File; (f = files[i]); i++) {
        let validatedFile: FileValidated = validator
          ? customValidateFile(f, validator)
          : validateFile(f, localValidator);
        if (stillValid && validatedFile.valid) {
          validatedFile.valid = stillValid > 0;
          stillValid--;
        }
        output.push(validatedFile);
      }
    }

    onChange?.(output);
  };
  function clickInput(e: React.MouseEvent<MouseEvent>): void {
    e.stopPropagation();
    let referenceInput = inputRef.current;
    if (referenceInput) {
      referenceInput.click();
    }
  }
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
