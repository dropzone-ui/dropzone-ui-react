import { mergeProps } from "@unlimited-react-components/kernel";
import React, { useEffect, useRef, useState } from "react";
import "./Dropzone.scss";
import useDropzoneStyles from "../hooks/useDropzoneStyles";
import {
  customValidateFile,
  FileValidated,
  FileValidator,
  UPLOADSTATUS,
  validateFile,
} from "../utils/validation.utils";
import { DropzoneProps, DropzonePropsDefault } from "./DropzoneProps";
import { createRipple } from "../utils/dropzone-ui.utils";
import DropzoneHeader from "../DropzoneHeader/DropzoneHeader";
import DropzoneFooter from "../DropzoneFooter.tsx/DropzoneFooter";
import { FileItemContainer } from "../../../../components/file-item";
import { FileItemContainerProps } from "../../../file-item/components/FileItemContainer/FileItemContainerProps";
import DropzoneLabel from "../DropzoneLabel/DropzoneLabel";
import {
  FileDuiResponse,
  uploadPromiseAxios,
  UploadPromiseAxiosResponse,
} from "../utils/dropzone-ui.upload.utils";
import {
  DropzoneLocalizerSelector,
  ValidateErrorLocalizerSelector,
} from "../../../../localization";
import {
  FunctionLabel,
  LocalLabels,
} from "../../../../localization/localization";

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
    minHeight,
    onClean,
    uploadOnDrop,
    footer,
    header,
    method,
    url,
    config,
    value,
    onUploadStart,
    onUploadFinish,
    // onUploading,
    uploadingMessage,
    onChange,
    behaviour,
    label,
    fakeUploading,
    localization,
  } = mergeProps(props, DropzonePropsDefault);
  //localizers
  const DropzoneLocalizer: LocalLabels =
    DropzoneLocalizerSelector(localization);
  const ValidationErrorLocalizer: LocalLabels =
    ValidateErrorLocalizerSelector(localization);
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
  const [onUploadingStart, setOnUploadingStart] = useState<boolean>(false);
  // const [queueFiles, setQueueFiles] = useState<FileValidated[]>([]);
  const classNameCreated: string = useDropzoneStyles(
    color,
    backgroundColor,
    maxHeight,
    minHeight
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

  const handleCleanFiles = () => {
    let filesCleaned: FileValidated[] = [];
    filesCleaned = files.filter((x: FileValidated) => x.valid);
    try {
      onClean?.(filesCleaned);
    } catch (error) {
      if (process.env.NODE_ENV === 'production') {
        console.error(error);
      }
    }

    onChange?.(filesCleaned);
  };
  /**
   * Method for uploading Files
   * It will set valid or not valid in a radom way
   * @param files
   */
  const fakeUpload = (
    file: FileValidated
  ): Promise<UploadPromiseAxiosResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber % 2 === 0) {
          const status = true;
          const message = DropzoneLocalizer.fakeuploadsuccess as string;
          const payload = { url: "" };
          resolve({
            uploadedFile: {
              ...file,
              uploadStatus: UPLOADSTATUS.success,
              uploadMessage: message,
            },
            serverResponse: {
              id: file.id,
              serverResponse: { status, message, payload },
            },
          });
        } else {
          const status = false;
          const message = DropzoneLocalizer.fakeUploadError as string;
          const payload = {};
          resolve({
            uploadedFile: {
              ...file,
              uploadStatus: UPLOADSTATUS.error,
              uploadMessage: message,
            },
            serverResponse: {
              id: file.id,
              serverResponse: { status, message, payload },
            },
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
      (x) => x.valid && x.uploadStatus !== "success"
    ).length;
    let totalRejected: number = 0;
    let currentCountUpload: number = 0;
    const uploadingMessenger: FunctionLabel =
      DropzoneLocalizer.uploadingMessage as FunctionLabel;

    setOnUploadingStart(true);
    if (missingUpload > 0 && url) {
      setLocalMessage(
        uploadingMessenger(`${missingUpload}/${totalNumber}`)
        /* localization === "ES-es"
          ? `Subiendo ${missingUpload}/${totalNumber} archivos`
          : `uploading ${missingUpload}/${totalNumber} files`, */
      );

      let uploadStartFiles: FileValidated[] = files.map((f: FileValidated) => {
        if (f.uploadStatus !== UPLOADSTATUS.success && f.valid) {
          return { ...f, uploadStatus: UPLOADSTATUS.uploading };
        } else return f;
      });

      //make all uploading
      onChange?.(uploadStartFiles);
      ///////
      let updatedList: FileValidated[] = uploadStartFiles;
      let serverResponses: FileDuiResponse[] = [];
      onUploadStart?.(
        uploadStartFiles.filter(
          (f) => f.uploadStatus === UPLOADSTATUS.uploading
        )
      );
      for (let i = 0; i < uploadStartFiles.length; i++) {
        let currentFile: FileValidated = uploadStartFiles[i];
        if (currentFile.uploadStatus === UPLOADSTATUS.uploading) {
          setLocalMessage(
            uploadingMessenger(`${++currentCountUpload}/${missingUpload}`)
          );

          const { serverResponse, uploadedFile }: UploadPromiseAxiosResponse =
            fakeUploading
              ? await fakeUpload(currentFile)
              : await uploadPromiseAxios(currentFile, url, method, config);

          serverResponses.push(serverResponse);

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
      onUploadFinish?.(serverResponses);
      const finishUploadMessenger: FunctionLabel =
        DropzoneLocalizer.uploadFinished as FunctionLabel;
      setLocalMessage(
        finishUploadMessenger(missingUpload - totalRejected, totalRejected)
        /*   localization === "ES-es"
          ? `Archivos subidos: ${missingUpload - totalRejected}, Rechazados: ${totalRejected}`
          : `Uloaded files: ${missingUpload - totalRejected}, Rejected: ${totalRejected}`,
      */
      );
      setTimeout(() => {
        setOnUploadingStart(false);
      }, 2300);
      //console.log("queueFiles files:", queueFiles);
    } else {
      setLocalMessage(
        DropzoneLocalizer.noFilesMessage as string
        /* localization === "ES-es"
          ? `No hay archivos válidos pendientes por subir`
          : `There is not any missing valid file for uploading`, */
      );
      setTimeout(() => {
        setOnUploadingStart(false);
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
    evt: React.DragEvent<HTMLDivElement>
  ): Promise<void> => {
    evt.stopPropagation();
    evt.preventDefault();
    if (onUploadingStart) {
      setIsDragging(false);
      return;
    }
    let fileList: FileList = evt.dataTransfer.files;
    const remainingValids: number = (maxFiles || 7) - numberOfValidFiles;
    const output: FileValidated[] = fileListvalidator(
      fileList,
      remainingValids
    );
    if (!disableRipple) {
      createRipple(evt, color as string);
    }
    setIsDragging(false);
    handleFilesChange(output);
  };

  const handleOnChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    evt: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (onUploadingStart) {
      return;
    }
    let fileList: FileList = evt.target.files as FileList;
    const remainingValids: number = (maxFiles || 7) - numberOfValidFiles;
    const output: FileValidated[] = fileListvalidator(
      fileList,
      remainingValids
    );
    handleFilesChange(output);
  };

  //local function validator
  const fileListvalidator = (
    preValidatedFiles: FileList,
    remainingValids: number
  ): FileValidated[] => {
    const output: FileValidated[] = [];
    let countdown: number = remainingValids;
    for (let i = 0, f: File; (f = preValidatedFiles[i]); i++) {
      let validatedFile: FileValidated = validator
        ? customValidateFile(f, validator)
        : validateFile(f, localValidator, ValidationErrorLocalizer);
      //console.log("=>", validateFile);
      if (validatedFile.valid) {
        //not valid due to file count limit
        const valid = countdown > 0;
        validatedFile.valid = valid;
        //add error about amount
        if (!valid) {
          const MaxFileErrorMessenger: FunctionLabel =
            ValidationErrorLocalizer.maxFileCount as FunctionLabel;
          validatedFile.errors = validatedFile.errors
            ? [...validatedFile.errors, MaxFileErrorMessenger(maxFiles || 7)]
            : [MaxFileErrorMessenger(maxFiles || 7)];
        }
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
          onReset={!onUploadingStart ? handleReset : undefined}
          maxFiles={maxFiles}
          //handleReset={handleReset}
          onUploadingStart={onUploadingStart}
          view={localView}
          onChangeView={handleChangeView}
          onUploadStart={!uploadOnDrop ? handleUploadStart : undefined}
          onClean={onClean && !onUploadingStart ? handleCleanFiles : undefined}
          urlPresent={url !== undefined}
          localization={localization}
        />
      )}
      {value && files && files.length > 0 ? (
        <FileItemContainer view={localView} style={{ minHeight, maxHeight }}>
          {children}
        </FileItemContainer>
      ) : (
        <DropzoneLabel>
          {label || (DropzoneLocalizer.defaultLabel as string)}
        </DropzoneLabel>
      )}

      {footer && (
        <DropzoneFooter
          accept={accept}
          message={onUploadingStart ? localMessage : undefined}
          localization={localization}
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
