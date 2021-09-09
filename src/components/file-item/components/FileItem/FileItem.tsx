import React, { FC, Fragment, useEffect, useState } from "react";

import { FileItemProps, FileItemPropsDefault } from "./FileItemProps";
import "./FileItem.scss";
import { Paper } from "../../../paper";
import { mergeProps } from "@unlimited-react-components/kernel";
import {
  fileSizeFormater,
  getURLFileIco,
  readImagePromise,
  resizeImage,
  shrinkWord,
} from "../../utils";

import FileItemFullInfoLayer from "../FileItemFullInfoLayer/FileItemFullInfoLayer";
import FileItemImage from "../FileItemImage/FileItemImage";
import FileItemMainLayer from "../FileItemMainLayer/FileItemMainLayer";

const FileItem: FC<FileItemProps> = (props: FileItemProps) => {
  const {
    file,
    onDelete,
    onSee,
    style,
    preview,
    info,
    id,
    valid,
    uploadStatus,
    uploadMessage,
    hd,
  } = mergeProps(props, FileItemPropsDefault);

  const sizeFormatted: string = file ? fileSizeFormater(file.size) : "0 KB";

  const [isImage, setIsImage] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [imageSource, setImageSource] = useState<string | undefined>(undefined);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  useEffect(() => {
    init(file, valid || false, preview || false);
    return () => {
      setImageSource(undefined);
      setIsImage(false);
    };
  }, [file, valid, preview]);

  const init = async (
    file: File | undefined,
    valid: boolean,
    preview: boolean
  ) => {
    if (!file) return;
    const { url } = getURLFileIco(file as File);
    const headerMime = file && file.type ? file.type.split("/")[0] : "octet";
    setIsImage(headerMime === "image");

    setUrl(url);

    if (preview && valid && headerMime === "image") {
      const response = await readImagePromise(file);
      if (response) {
        const cutt = await resizeImage(response);

        setImageSource(cutt as string);
      } else {
        setImageSource(undefined);
      }
    }
  };

  const handleDelete = (): void => {
    if (onDelete) {
      onDelete(id);
    }
  };
  const handleOpenInfo = () => {
    setShowInfo(true);
  };
  const handleCloseInfo = () => {
    setShowInfo(false);
  };
  const handleOpenImage = async () => {
    if (imageSource && file) {
      if (hd) {
        const response = await readImagePromise(file);
        onSee?.(response);
      } else {
        onSee?.(imageSource);
      }
    }
  };
  function handleClick<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
  }

  return (
    <Fragment>
      {file && (
        <div className="dz-ui-file-item-container" onClick={handleClick}>
          <div className={`file-item-full-container-container`} style={style}>
            <Paper
              className={`file-item-icon-container ${showInfo ? " hide" : ""}`}
            >
              <FileItemImage
                imageSource={imageSource}
                url={url}
                fileName={file.name}
              />
              <FileItemMainLayer
                showInfo={showInfo}
                //fileNamePosition={fileName}
                fileName={file.name}
                onDelete={handleDelete}
                onOpenImage={onSee && preview ? handleOpenImage : undefined}
                onOpenInfo={handleOpenInfo}
                info={info || false}
                valid={valid || false}
                isImage={isImage}
                sizeFormatted={sizeFormatted}
                //fileNamePosition={undefined}
                uploadStatus={uploadStatus}
              />

              <FileItemFullInfoLayer
                showInfo={showInfo}
                fileName={file.name}
                fileSize={fileSizeFormater(file.size)}
                fileType={file.type}
                valid={valid || false}
                onClose={handleCloseInfo}
                uploadStatus={uploadStatus}
                uploadMessage={uploadMessage}
              />
            </Paper>

            <div className="file-item-name">{shrinkWord(file.name)}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default FileItem;

/**
 * {fileName === "bottom" && (
      <div className="file-item-name">{shrinkWord(file.name)}</div>
    )}
 */
