import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import { PostDataType } from "../../data/types";
import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "../../components/Link";

// export interface Card13Props {
//   className?: string;
//   post: PostDataType;
// }

const Card13 = ({ className = "", post }) => {
  const { title, guid, description, thumbnail, pubDate } = post;
  const postType="standard";
  const href = `/article/p/${guid.split('/').pop()}`;
  const first20Chars = description.slice(0, 20).replace(/<[^>]*>?/gm, '')+"...";

  return (
    <div className={`nc-Card13 relative flex justify-between ${className}`} style={{backgroundColor:'white', borderRadius: "20px",  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", padding: "20px"}}>
      <div className="flex flex-col h-full py-2" style={{padding:'10px'}}>
        <h2
          className={`nc-card-title block font-semibold text-sm sm:text-base`}
        >
          <Link href={href ?? "#"} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ">
          <span className="line-clamp-2"> {first20Chars}</span>
        </span>
        <span className="mt-4 block sm:hidden text-xs text-neutral-500 ">
          {pubDate}
        </span>
        <div className="mt-auto hidden sm:block">
          <PostCardMeta meta={{ date:pubDate }} />
        </div>
      </div>

      <Link
        href={href ?? "#"}
        className={`block relative h-full flex-shrink-0 w-24 sm:w-36 lg:w-40 xl:w-48 2xl:w-[200px] ml-4 sm:ml-5`}
      >
        <NcImage
          containerClassName="absolute inset-0"
          className="object-cover w-full h-full rounded-xl sm:rounded-3xl"
          src={thumbnail}
          fill
          alt={title}
        />
        <PostTypeFeaturedIcon
          className="absolute bottom-2 left-2"
          postType={postType}
          wrapSize="w-8 h-8"
          iconSize="w-4 h-4"
        />
      </Link>
    </div>
  );
};

export default Card13;
