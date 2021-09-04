
import { Cancel } from "../icons";
import "./ImageFullScreen.scss";
import React, {FC} from "react";
import { ImageFullScreenProps } from "./ImageFullScreenProps";

const ImageFullScreen:FC<ImageFullScreenProps> = (props:ImageFullScreenProps) =>{
  const { imgSource, openImage, onClose } = props;
  const handleClose = () => {
    onClose?.();
  };
  return (
    <div
      className={openImage ? "image-container show" : "image-container"}
      onClick={handleClose}
    >
      {imgSource && openImage && (
        
          <div className="img-rel-container">
            <img
              width="100%"
              height="100%"
              src={imgSource || ""}
              alt=""
              className={
                openImage ? "image-full-screen show-image" : "image-full-screen"
              }
            />
             <Cancel
              color="rgba(255,255,255,0.8)"
              onClick={handleClose}
              colorFill="black"
              className="button-full-screen"
            />
            
          </div>
      
      )}
    </div>
  );
}
export default ImageFullScreen;
