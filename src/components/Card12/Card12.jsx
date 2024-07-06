import React, { FC } from "react";
import NcImage from "../../components/NcImage/NcImage";
import { PostDataType } from "../../data/types";
import PostCardMeta from "../../components/PostCardMeta/PostCardMeta";
import PostTypeFeaturedIcon from "../../components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "../../components/Link";

// export interface Card12Props {
//   className?: string;
//   post: PostDataType;
// }

const Card12= ({ className = "h-full", post }) => {
  const { title, guid, thumbnail, description,pubDate } = post;
  const postType="standard";
  const href=`/article/p/${guid.split('/').pop()}`;
  const first20Chars = description.slice(0, 20).replace(/<[^>]*>?/gm, '')+"...";


  return (
    <div className={`nc-Card12 group relative flex flex-col ${className}`}>
      <Link
        href={href ?? "#"}
        className="block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden"
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={thumbnail}
          alt={title}
          fill
        />
        <span>
          <PostTypeFeaturedIcon
            className="absolute bottom-2 left-2"
            postType={postType}
            wrapSize="w-8 h-8"
            iconSize="w-4 h-4"
          />
        </span>
      </Link>

      <div className="mt-5 sm:mt-8 pr-10 flex flex-col">
        <h2
          className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors sm:text-lg lg:text-2xl`}
        >
          <Link href={href ?? "#"} className="line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <span className="hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400">
          <span className="line-clamp-2"> {first20Chars}</span>
        </span>
        <PostCardMeta className="mt-5 text-sm" meta={{date:pubDate}} />
      </div>
    </div>
  );
};

export default Card12;
