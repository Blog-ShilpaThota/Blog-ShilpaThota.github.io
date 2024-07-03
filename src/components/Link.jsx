import React, { FC } from "react";
import { Link as RrdLink, LinkProps } from "react-router-dom";

const Link = ({ href, ...args }) => {
  return <RrdLink {...args} to={href} reloadDocument={true}/>;
};

export default Link;
