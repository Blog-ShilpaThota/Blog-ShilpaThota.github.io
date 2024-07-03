import React, { CSSProperties, FC } from "react";

const Image = ({
  fill = false,
  className,
  alt = "",
  style,
  onLoadingComplete,
  ...args
}) => {
  return (
    //   @ts-ignore
    <img
      {...args}
      className={
        className + (fill ? " object-cover absolute inset-0 w-full h-full" : "")
      }
      alt={alt}
      style={style}
      onLoad={onLoadingComplete}
    />
  );
};

export default Image;
