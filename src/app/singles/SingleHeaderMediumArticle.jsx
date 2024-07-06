import React from "react";
import SingleTitle from "./SingleTitle";

const SingleHeader = ({
  className = "",
  title="",
}) => {
  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <SingleTitle
            title={title}
          />
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
