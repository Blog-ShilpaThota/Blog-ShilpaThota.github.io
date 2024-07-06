import React from "react";
import logoImg from "../../images/Logo.png";
import logoLightImg from "../../images/Logo.png";
import LogoSvg from "./LogoSvg";
import Link from "../../components/Link";

const Logo = ({
  img = logoImg,
  imgLight = logoLightImg,
}) => {
  return (
    <Link
      href="/"
      className="ttnc-logo inline-block text-primary-6000 flex-shrink-0"
    >
      <LogoSvg />
    </Link>
  );
};

export default Logo;
