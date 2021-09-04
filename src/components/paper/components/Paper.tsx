import React, { MouseEventHandler, FC } from "react";
import { PaperProps, PaperPropsDefault } from "./PaperProps";
import "./Paper.scss";
import { mergeProps } from "@unlimited-react-components/kernel";

const Paper: FC<PaperProps> = (props: PaperProps) => {
  const {
    children,
    shadow,
    style,
    className,
    onMouseEnter,
    onMouseLeave,
    component,
  } = mergeProps(props, PaperPropsDefault);
  /**
   * uses the shadow prop to create a classname
   *
   * @returns an appropiate paper classanme
   */
  const makeClassName = (): string => {
    let classNameFinal = "";
    if (!shadow) {
      classNameFinal = `paper-root shadow`;
    } else {
      classNameFinal = `paper-root shadow${shadow}`;
    }

    if (className) {
      classNameFinal += ` ${className}`;
    }
    return classNameFinal;
  };
  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onMouseEnter?.();
  };
  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onMouseLeave?.();
  };

  return React.createElement(
    component ? component : "div",
    {
      className: makeClassName(),
      style: style,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    children
  );
  /*
    return (
      <>
        <div
          className={makeClassName()}
          style={style}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </>
    );
    */
};

export default Paper;
