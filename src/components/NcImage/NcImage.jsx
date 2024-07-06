import React, { FC } from "react";


const NcImage = ({
  containerClassName = "",
  alt = "nc-imgs",
  fill = false,
  className = "object-cover w-full h-full",
  sizes = "(max-width: 600px) 480px, 800px",
  ...args
}) => {
  return (
    <div className={containerClassName}>
      {/* @ts-ignore */}
      <img
        {...args}
        alt={alt}
        sizes={sizes}
        className={
          className +
          (fill ? " object-cover absolute inset-0 w-full h-full" : "")
        }
      />
    </div>
  );
};

export default NcImage;
