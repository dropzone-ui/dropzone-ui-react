import React, { FC, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Cancel } from "../icons";
import { VideoPreviewProps } from "./VideoPreviewProps";
import "./VideoPreview.scss";
const VideoPreview: FC<VideoPreviewProps> = (props: VideoPreviewProps) => {
  const { videoSrc, openVideo, onClose, autoplay, controls , style} = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [source, setSource] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!videoSrc) {
      return;
    }
    if (typeof videoSrc === "string") {
      setSource(videoSrc);
    } else {
      const newVideoSrc = URL.createObjectURL(videoSrc);
      setSource(newVideoSrc);
    }
  }, [videoSrc]);
  useEffect(() => {
    if (source && videoRef.current) {
      videoRef.current.load();
    }
  }, [source]);

 

  function handleClose<T extends HTMLDivElement>(
    e: React.MouseEvent<T, MouseEvent>
  ): void {
    e.stopPropagation();
    onClose?.();
  }
  if (videoSrc) {
    return (
      <div
        className={openVideo ? "video-container show" : "video-container"}
        onClick={handleClose}
      >
        {videoSrc && openVideo && (
          <div
            className="vid-rel-container"
            onClick={(evt) => {
              evt.preventDefault();
            }}
          >
            <video
              onClick={(evt) => {
                evt.preventDefault();
              }}
              //onLoadedMetadata={handleLoaded}
              id="dropzone-ui-video"
              controls={controls}
              ref={videoRef}
              className={"video-full-screen show-video"}
              autoPlay={autoplay}
              src={source}
              width={"100%"}
              height={"100%"}
              style={style}
            >
              <source type="video/webm" />
              <source type="video/ogg" />
              <source type="video/mp4" />
            </video>
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
  } else {
    return <Fragment></Fragment>;
  }
};
export default VideoPreview;
