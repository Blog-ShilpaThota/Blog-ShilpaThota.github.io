import { Route } from "../../routers/types";
import Link from "../../components/Link";
import React, { FC, ReactNode } from "react";

const NcLink = ({
  className = "font-medium",
  colorClass = "text-primary-6000 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-6000",
  children,
  href,
}) => {
  return (
    <Link className={`nc-NcLink ${colorClass} ${className}`} href={href}>
      {children}
    </Link>
  );
};

export default NcLink;
