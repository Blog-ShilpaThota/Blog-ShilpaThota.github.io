import React, { FC } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { PostDataType } from "../../data/types";
import Link from "../../components/Link";


const PostCardMeta = ({
  className = "leading-none text-xs",
  meta,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {
  const { date } = meta;
  const author =   {
    "id": 1,
    "displayName": "Shilpa Thota",
    "email": "shilpathota1408@gmail.com",
    "href": "/authors/shilpa-thota",
    "avatar":"/shilpa.jpg"
  };
  return (
    author&&<div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      <Link href={author.href} className="relative flex items-center space-x-2">
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={avatarSize}
            imgUrl={author.avatar}
            userName={author.displayName}
          />
        )}
        <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {author.displayName}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal">
          {date}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
