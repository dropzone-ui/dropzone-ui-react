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
import Tooltip from "../../../tooltip/components/Tooltip";

const FileItem: FC<FileItemProps> = (props: FileItemProps) => {
  const {
    file,
    onDelete,
    onSee,
    onWatch,
    style,
    preview,
    onlyImage,
    info,
    id,
    valid,
    uploadStatus,
    uploadMessage,
    hd,
    localization,
    errors,
    imageUrl,
    elevation,
    alwaysActive,
    resultOnTooltip,
  } = mergeProps(props, FileItemPropsDefault);
  //actionOnHover
  const [hovering, setHOvering] = useState<boolean>(false);
  const handleOnHoverEnter = () => {
    //if (!alwaysActive) {
    setHOvering(true);
    //}
  };
  const handleOnHoverLeave = () => {
    //if (!alwaysActive) {
    setHOvering(false);
    //}
  };
  /*   useEffect(() => {
    setHOvering(alwaysActive || false);
  }, [alwaysActive]); */

  //size
  const sizeFormatted: string = file ? fileSizeFormater(file.size) : "0 KB";

  const [isImage, setIsImage] = useState<boolean>(false);
  const [isVideo, setIsVideo] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [imageSource, setImageSource] = useState<string | undefined>(undefined);
  //alwaysActive
  const [showInfo, setShowInfo] = useState<boolean>(false);
  useEffect(() => {
    init(file, valid || false, preview || false, imageUrl);

    return () => {
      setImageSource(undefined);
      setIsImage(false);
      setIsVideo(false);
    };
  }, [file, valid, preview, imageUrl]);

  const init = async (
    file: File | undefined,
    valid: boolean,
    preview: boolean,
    imageUrl: string | undefined
  ) => {
    //////////////////////////////
    if (!file) return;
    const { url } = getURLFileIco(file as File);

    setUrl(url);

    if (imageUrl) {
      setIsImage(true);
      setImageSource(imageUrl);
      return;
    } else {
      const headerMime = file.type ? file.type.split("/")[0] : "octet";
      const tailMime = file.type ? file.type.split("/")[1] : "octet";
      setIsImage(headerMime === "image");
      setIsVideo(headerMime === "video" && ["mp4","ogg","webm"].includes(tailMime));
      if (preview && valid && headerMime === "image") {
        const response = await readImagePromise(file);
        if (response) {
          const cutt = await resizeImage(response);

          setImageSource(cutt as string);
        } else {
          setImageSource(undefined);
        }
      }
    }
    //////////////////////////////
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
    setShowInfo(true);

    setShowInfo(false);
  };
  const handleOpenVideo = async () => {
    if (file) {
      onWatch?.(file);
    }
  };
  const handleOpenImage = async () => {
    if (imageSource && file) {
      if (hd) {
        const response = await readImagePromise(file);
        onSee?.(response || "");
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
  if (file && typeof file.name == "string") {
    return (
      <div
        className={`dz-ui-file-item-container${
          resultOnTooltip ? " dz-ui-tooltip" : ""
        }`}
        onClick={handleClick}
        onMouseEnter={handleOnHoverEnter}
        onMouseLeave={handleOnHoverLeave}
      >
        <div className={`file-item-full-container-container`} style={style}>
          <Paper
            shadow={elevation}
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
              onDelete={onDelete ? handleDelete : undefined}
              onOpenImage={onSee && preview ? handleOpenImage : undefined}
              onOpenVideo={onWatch && preview ? handleOpenVideo : undefined}
              isVideo={isVideo}
              onOpenInfo={handleOpenInfo}
              info={info || false}
              valid={valid || false}
              isImage={isImage}
              sizeFormatted={sizeFormatted}
              //fileNamePosition={undefined}
              uploadStatus={uploadStatus}
              localization={localization}
              onlyImage={onlyImage}
              hovering={alwaysActive || hovering}
            />
            <FileItemFullInfoLayer
              showInfo={showInfo}
              errors={errors}
              fileName={file.name}
              fileSize={fileSizeFormater(file.size)}
              fileType={file.type}
              valid={valid || false}
              onClose={handleCloseInfo}
              uploadStatus={uploadStatus}
              uploadMessage={uploadMessage}
              localization={localization}
              resultOnTooltip={resultOnTooltip}
            />
          </Paper>

          {!onlyImage && (
            <div className="file-item-name">{shrinkWord(file.name)}</div>
          )}
        </div>
        {resultOnTooltip && (
          <Tooltip
            //open={resultOnTooltip && hovering}
            open={true}
            uploadStatus={uploadStatus}
            valid={valid}
            errors={errors}
            uploadMessage={uploadMessage}
          ></Tooltip>
        )}
      </div>
    );
  } else return <Fragment></Fragment>;
};
export default FileItem;

/**
 * {fileName === "bottom" && (
      <div className="file-item-name">{shrinkWord(file.name)}</div>
    )}
 */
