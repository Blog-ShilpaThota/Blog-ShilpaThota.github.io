import React from "react";

const Heading = ({
  children,
  desc = "Discover the most outstanding articles in all topics of technology.",
  className = "mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50",
  isCenter = false,
  ...props
}) => {
  return (
    <div
      className={`nc-Section-Heading relative ${
        isCenter ? "text-center" : ""
      } ${className}`}
    >
      <div className={isCenter ? "w-full max-w-2xl mx-auto" : "max-w-2xl"}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" {...props}>
          {children || `Section Heading`}
        </h2>
        {desc && (
          <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
            {desc}
          </span>
        )}
      </div>
    </div>
  );
};

export default Heading;
