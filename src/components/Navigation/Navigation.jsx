import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = ({ data,className = "flex" }) => {

  return (
    <ul className={`nc-Navigation items-center ${className}`}>
      {data.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
};

export default Navigation;
