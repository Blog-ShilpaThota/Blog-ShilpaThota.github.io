import React, { FC } from "react";
import Button, { ButtonProps } from "./Button";

// export interface Props extends ButtonProps {}

const ButtonThird= (props) => {
  return <Button {...props} pattern="third" />;
};

export default ButtonThird;
