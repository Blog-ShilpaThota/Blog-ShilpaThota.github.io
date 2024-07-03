import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Button, { ButtonProps } from "./Button/Button";
import ButtonPrimary from "./Button/ButtonPrimary";


const FollowButton = ({
  className,
  sizeClass,
  fontSize,
  isFollowing = Math.random() > 0.5,
}) => {
  const [following, setFollowing] = React.useState(isFollowing);

  return !following ? (
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => setFollowing(true)}
    >
      <PlusCircleIcon className="w-5 h-5 sm:-ml-2.5" />
      <span className="ml-2">Follow</span>
    </ButtonPrimary>
  ) : (
    <Button
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => setFollowing(false)}
    >
      <span className="text-sm ">Following</span>
    </Button>
  );
};

export default FollowButton;
