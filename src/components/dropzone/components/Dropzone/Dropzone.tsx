import { mergeProps } from "@unlimited-react-components/kernel";
import React, { useState } from "react";

import "./Dropzone.scss";
import useDropzoneStyles from "../hooks/useDropzoneStyles";
import {
  customValidateFile,
  FileValidated,
  FileValidator,
  validateFile,
} from "../utils/validation.utils";
import { DropzoneProps, DropzonePropsDefault } from "./DropzoneProps";
import { createRipple } from "../utils/dropzone-ui.utils";
import DropzoneHeader from "../DropzoneHeader/DropzoneHeader";
import DropzoneFooter from "../DropzoneFooter.tsx/DropzoneFooter";

const DropzoneUI: React.FC<DropzoneProps> = (props: DropzoneProps) => {
  const {
    onDrop,
    children,
    onReset,
    color,
    style,
    backgroundColor,
    onClick,
    validator,
    maxFileSize,
    maxFiles,
    accept,
    numberOfValidFiles,
    disableRipple,
    clickable,
    onChangeView,
    view,
    maxHeight,
    uploadOnDrop,
  } = mergeProps(props, DropzonePropsDefault);
  console.log("color:", color);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const classNameCreated = useDropzoneStyles(color, backgroundColor, maxHeight);
  const localValidator: FileValidator = {
    accept: accept,
    maxFileSize: maxFileSize,
  };
  const uploadFiles = (files: FileValidated[]) => {};
  const kamui: React.DragEventHandler<HTMLDivElement> = async (
    evt: React.DragEvent<HTMLDivElement>
  ): Promise<void> => {
    evt.stopPropagation();
    evt.preventDefault();
    //  evt.dataTransfer.dropEffect = "link";

    let files = evt.dataTransfer.files;

    const output: FileValidated[] = [];
    //const output: File[] = [];
    let stillValid: number | undefined = maxFiles;
    for (let i = 0, f: File; (f = files[i]); i++) {
      let validatedFile: FileValidated = validator
        ? customValidateFile(f, validator)
        : validateFile(f, localValidator);
      // maxFiles Validation
      //after validating, we check only between accpted files
      // whether to reduce or keep same amount of valid files
      if (stillValid && validatedFile.valid) {
        validatedFile.valid = stillValid > 0;
        stillValid--;
      }

      output.push(validatedFile);

      //output.push(f);
    }
    if (!disableRipple) {
      createRipple(evt, color as string);
    }
    setIsDragging(false);
    // if ripple => ripple
    onDrop?.(output);
    if (uploadOnDrop) {
      uploadFiles(output);
    }
  };
  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>
  ): void => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "link";
    setIsDragging(true);
  };
  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>
  ): void => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "link";
    setIsDragging(false);
  };
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    if (!disableRipple) {
      createRipple(e, color as string);
    }
    onClick?.(e);
  }
  const handleReset = () => {
    onReset?.();
  };
  return (
    <div
      className={`dropzone-ui${classNameCreated}${isDragging ? ` drag` : ``}${
        clickable ? ` clickable` : ``
      }`}
      style={style}
      onDragOver={handleDragEnter}
      onClick={clickable ? handleClick : () => {}}
      // onDragLeave={handleDragLeave}
    >
      <DropzoneHeader
        maxFileSize={maxFileSize}
        numberOfValidFiles={numberOfValidFiles}
        onReset={onReset}
        maxFiles={maxFiles}
        handleReset={handleReset}
        view={view}
        onChangeView={onChangeView}
      />

      {children}
      <DropzoneFooter accept={accept} />
      <div
        onDragLeave={handleDragLeave}
        onDrop={kamui}
        className={`dropzone-ui-layer${isDragging ? ` drag` : ``}`}
      ></div>
    </div>
  );
};

export default DropzoneUI;
