import React, { FC } from "react";
import imgAdsDef from "../../images/3.webp";
import Image from "../Image";

const SectionAds = ({
  className = "",
  imgAds = imgAdsDef,
}) => {
  return (
    <a
      href="/#"
      className={`nc-SectionAds block text-center mx-auto ${className}`}
    >
      <span className="text-xs text-neutral-500">- Advertisement -</span>
      <Image className="mx-auto" src={imgAds} alt="ads" />
    </a>
  );
};

export default SectionAds;
