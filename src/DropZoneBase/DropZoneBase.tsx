import React, { useRef } from "react";
import { DropZoneBaseProps } from "./DropZoneBaseProps";

const DropZoneBase: React.FC<DropZoneBaseProps> = (props?: DropZoneBaseProps) => {
  const dz_base_ref = useRef(null);
  const init = async (): Promise<void> => {
    //console.log("init");
    const handleDragOver = (evt) => {
      evt.dataTransfer.dropEffect = "link"; // Explicitly show this is a copy.
    };
    const handleFileSelect = async (evt): Promise<void> => {
      evt.stopPropagation();
      evt.preventDefault();
    };
    dz_base_ref.current.addEventListener("dragover", handleDragOver, false);
    dz_base_ref.current.addEventListener("drop", handleFileSelect, false);
  };
  return (
    <div className="urc-root dz-base" ref={dz_base_ref}>
      holaaa
    </div>
  );
};

export default DropZoneBase;
