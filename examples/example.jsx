import { Dropzone, FileItem, FullScreenPreview } from "../src";
import { useState } from "react";
export default function App() {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  return (
    <Dropzone
      style={{ minWidth: "550px" }}
      //view={"list"}
      onChange={updateFiles}
      value={files}
      maxFiles={10}
      //header={false}
      // footer={false}
      maxFileSize={2998000}
      label="Drag'n drop files here or click to browse"
      //accept=".png,image/*"
      // uploadingMessage={"Uploading..."}
      url="http://ec2-99-99-9-9.compute-1.amazonaws.com:2800/upload-my-file"
      //of course this url doens´t work
      //uploadOnDrop
      //clickable={false}
      fakeUploading
    >
      {files.map((file) => (
        <FileItem
          {...file}
          onDelete={onDelete}
          onSee={handleSee}
          preview
          info
          hd
        />
      ))}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      />
    </Dropzone>
  );
}
