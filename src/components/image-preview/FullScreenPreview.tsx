
import { Cancel } from "../icons";
import "./FullScreenPreview.scss";
import React, {FC} from "react";
import { FullScreenPreviewProps } from "./FullScreenPreviewProps";

const FullScreenPreview:FC<FullScreenPreviewProps> = (props:FullScreenPreviewProps) =>{
  const { imgSource, openImage, onClose } = props;
  
  function handleClose<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    //avoid children to trigger onClick ripple from parent
    e.stopPropagation();
    onClose?.();
  }
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
              src={imgSource}
              alt="full-screen-preview"
              className={
                "image-full-screen show-image"
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
export default FullScreenPreview;
