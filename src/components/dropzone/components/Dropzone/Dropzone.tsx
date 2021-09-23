import { mergeProps } from "@unlimited-react-components/kernel";
import React, { useEffect, useRef, useState } from "react";
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
import { FileItemContainer } from "../../../../components/file-item";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import DropzoneLabel from "../DropzoneLabel/DropzoneLabel";
import { uploadPromiseAxios } from "../utils/dropzone-ui.upload.utils";

const Dropzone: React.FC<DropzoneProps> = (props: DropzoneProps) => {
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
    disableRipple,
    clickable,
    onChangeView,
    view,
    maxHeight,
    uploadOnDrop,
    footer,
    header,
    method,
    url,
    config,
    value,
    // onUploading,
    uploadingMessage,
    onChange,
    behaviour,
    label,
    fakeUploading,
    localization,
  } = mergeProps(props, DropzonePropsDefault);
  //console.log("color:", color);
  //ref to the hidden input tag
  const inputRef = useRef<HTMLInputElement>(null);
  // whether is draggin or not
  const [isDragging, setIsDragging] = useState<boolean>(false);
  // list of files (local)
  const [files, setFiles] = useState<FileValidated[]>([]);
  const [localView, setLocalView] =
    useState<FileItemContainerProps["view"]>("grid");
  const [localMessage, setLocalMessage] = useState<string>("");
  //const [filesUploading, setFilesUploading] = useState<FileValidated[]>([]);
  //ClassName for dynamic style
  const [onUploadStart, setOnUploadStart] = useState<boolean>(false);
  // const [queueFiles, setQueueFiles] = useState<FileValidated[]>([]);
  const classNameCreated: string = useDropzoneStyles(
    color,
    backgroundColor,
    maxHeight,
  );
  const finalClassName: string = `dropzone-ui${classNameCreated}${
    isDragging ? ` drag` : ``
  }${clickable ? ` clickable` : ``}`;
  // validator
  const localValidator: FileValidator = {
    accept: accept,
    maxFileSize: maxFileSize,
  };
  //number of files
  const [numberOfValidFiles, setNumberOfValidFiles] = useState<number>(0);
  useEffect(() => {
    if (value) {
      setFiles(value);
      setNumberOfValidFiles(value.filter((x: FileValidated) => x.valid).length);
    }
  }, [value]);
  useEffect(() => {
    if (view) {
      setLocalView(view);
    }
  }, [view]);
  useEffect(() => {
    if (uploadingMessage) {
      setLocalMessage(uploadingMessage);
    }
  }, [uploadingMessage]);

  /**
   * Method for uploading FIles
   * @param files
   */
  const fakeUpload = (file: FileValidated): Promise<FileValidated> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (file.id % 2 === 0) {
          resolve({
            ...file,
            uploadStatus: "success",
            uploadMessage:
              localization === "ES-es"
                ? "EL archivo se subió correctamente"
                : "File was succesfully uploaded",
          });
        } else {
          resolve({
            ...file,
            uploadStatus: "error",
            uploadMessage:
              localization === "ES-es"
                ? "Erro al subir el archivo"
                : "Error on Uploading",
          });
        }
      }, 1500);
    });
  };

  /**
   * UPLOAD FILES LIKE A PRO
   */
  const uploadFiles = async (files: FileValidated[]) => {
    const totalNumber = files.length;
    const missingUpload = files.filter(
      (x) => x.valid && x.uploadStatus !== "success",
    ).length;
    let totalRejected: number = 0;
    let currentCountUpload: number = 0;
    setOnUploadStart(true);
    if (missingUpload > 0 && url) {
      setLocalMessage(
        localization === "ES-es"
          ? `Subiendo ${missingUpload}/${totalNumber} archivos`
          : `uploading ${missingUpload}/${totalNumber} files`,
      );

      let uploadStartFiles: FileValidated[] = files.map((f: FileValidated) => {
        if (f.uploadStatus !== "success" && f.valid) {
          return { ...f, uploadStatus: "uploading" };
        } else return f;
      });

      //make all uploading
      onChange?.(uploadStartFiles);
      ///////
      let updatedList: FileValidated[] = uploadStartFiles;
      for (let i = 0; i < uploadStartFiles.length; i++) {
        let currentFile: FileValidated = uploadStartFiles[i];
        if (currentFile.uploadStatus === "uploading") {
          setLocalMessage(
            localization === "ES-es"
              ? `Subiendo ${++currentCountUpload}/${missingUpload} archivos`
              : `Uploading ${++currentCountUpload}/${missingUpload} files...`,
          );
          //  const uploadedFile = await fakeUpload(currentFile);

          const uploadedFile: FileValidated = fakeUploading
            ? await fakeUpload(currentFile)
            : await uploadPromiseAxios(currentFile, url, method, config);
          if (uploadedFile.uploadStatus === "error") {
            totalRejected++;
          }
          updatedList = updatedList.map((f) => {
            if (f.id === currentFile.id) {
              return uploadedFile;
            } else {
              return f;
            }
          });
          onChange?.(updatedList);
        }
      }
      // upload group finished :D
      setLocalMessage(
        localization === "ES-es"
          ? `Archivos subidos: ${
              missingUpload - totalRejected
            }, Rechazados: ${totalRejected}`
          : `Uloaded files: ${
              missingUpload - totalRejected
            }, Rejected: ${totalRejected}`,
      );
      setTimeout(() => {
        setOnUploadStart(false);
      }, 2300);
      //console.log("queueFiles files:", queueFiles);
    } else {
      setLocalMessage(
        localization === "ES-es"
          ? `No hay archivos válidos pendientes por subir`
          : `There is not any missing valid file for uploading`,
      );
      setTimeout(() => {
        setOnUploadStart(false);
      }, 2300);
    }
  };
  const handleFilesChange = (output: FileValidated[]) => {
    //setNumberOfValidFiles(output.filter((x:FileValidated) => x.valid).length);
    onDrop?.(output);
    onChange?.(behaviour === "replace" ? output : [...files, ...output]);

    setFiles(output);

    if (uploadOnDrop) {
      uploadFiles(behaviour === "replace" ? output : [...files, ...output]);
      //uploadFiles();
    }
  };
  /**
   *
   * @param evt
   */
  const kamui: React.DragEventHandler<HTMLDivElement> = async (
    evt: React.DragEvent<HTMLDivElement>,
  ): Promise<void> => {
    evt.stopPropagation();
    evt.preventDefault();
    if (onUploadStart) {
      setIsDragging(false);
      return;
    }
    let fileList: FileList = evt.dataTransfer.files;
    const remainingValids: number = (maxFiles || 7) - numberOfValidFiles;
    const output: FileValidated[] = fileListvalidator(
      fileList,
      remainingValids,
    );
    if (!disableRipple) {
      createRipple(evt, color as string);
    }
    setIsDragging(false);
    handleFilesChange(output);
  };

  const handleOnChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (onUploadStart) {
      return;
    }
    let fileList: FileList = evt.target.files as FileList;
    const remainingValids: number = (maxFiles || 7) - numberOfValidFiles;
    const output: FileValidated[] = fileListvalidator(
      fileList,
      remainingValids,
    );
    handleFilesChange(output);
  };

  //local function validator
  const fileListvalidator = (
    preValidatedFiles: FileList,
    remainingValids: number,
  ): FileValidated[] => {
    const output: FileValidated[] = [];
    let countdown: number = remainingValids;
    for (let i = 0, f: File; (f = preValidatedFiles[i]); i++) {
      let validatedFile: FileValidated = validator
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
  const handleUploadStart = () => {
    if (numberOfValidFiles > 0) {
      //uploadFiles();
      uploadFiles(files);
    }
  };
  const handleDragEnter: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>,
  ): void => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "link";
    setIsDragging(true);
  };
  const handleDragLeave: React.DragEventHandler<HTMLDivElement> = (
    evt: React.DragEvent<HTMLDivElement>,
  ): void => {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "link";
    setIsDragging(false);
  };
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>,
  ): void {
    let referenceInput = inputRef.current;
    referenceInput?.click();
    if (!disableRipple) {
      createRipple(e, color as string);
    }
    onClick?.(e);
  }
  const handleReset = () => {
    onReset?.();
    setFiles([]);
    onChange?.([]);
    //onDrop?.([]);
  };
  const handleChangeView = (newView: "grid" | "list") => {
   // console.log("new View", newView);
    setLocalView(newView);
    onChangeView?.(newView);
  };

  return (
    <div
      className={finalClassName}
      style={style}
      onDragOver={handleDragEnter}
      onClick={clickable ? handleClick : () => {}}
      // onDragLeave={handleDragLeave}
    >
      {header && (
        <DropzoneHeader
          maxFileSize={maxFileSize}
          numberOfValidFiles={files.filter((x) => x.valid).length}
          onReset={handleReset}
          maxFiles={maxFiles}
          handleReset={handleReset}
          view={localView}
          onChangeView={handleChangeView}
          onUploadStart={!uploadOnDrop ? handleUploadStart : undefined}
          urlPresent={url !== undefined}
          localization={localization!=="ES-es"?"EN-en":"ES-es"}
        />
      )}
      {value && files && files.length > 0 ? (
        <FileItemContainer view={localView}>{children}</FileItemContainer>
      ) : (
        <DropzoneLabel>{label}</DropzoneLabel>
      )}

      {footer && (
        <DropzoneFooter
          accept={accept}
          message={onUploadStart ? localMessage : undefined}
          localization={localization!=="ES-es"?"EN-en":"ES-es"}
        />
      )}
      <div
        onDragLeave={handleDragLeave}
        onDrop={kamui}
        className={`dropzone-ui-layer${isDragging ? ` drag` : ``}`}
      ></div>
      <input
        ref={inputRef}
        onChange={handleOnChangeInput}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        multiple={(maxFiles && maxFiles > 1) || undefined}
      />
    </div>
  );
};

export default Dropzone;
